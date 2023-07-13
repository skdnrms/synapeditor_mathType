

const BALLOON_SETTINGS = {
    ['mathType']: ['mathType.math', 'mathType.chem', 'mathType.delete']
};

function setBalloons(editor) {
    const balloonConfig = editor.getConfiguration('editor.balloon');
    Object.assign(balloonConfig, BALLOON_SETTINGS);
};

function setEvents(editor) {
    const {
        CUSTOM_EVENT_TYPE,
    } = editor.constructor.CONST;
    const ACTION = editor.constructor.ACTION;

    editor.customEventManager.add(CUSTOM_EVENT_TYPE.BEFORE_SHOW_BALLOON, (event) => {
        const selection = event.selection;
        if (selection.isDrawingObjectSelection() && selection.getDrawingObject().hasClass('Wirisformula')) {
            const drawingObject = selection.getDrawingObject();
            if (drawingObject.hasClass('Wirisformula')) {
                event.returnValue = false;
                editor.execCommand(ACTION.SHOW_BALLOON, 'mathType', editor.getContentsManager().getHTMLElement(drawingObject.id), { position: 'center' });
            }
        }
    });
};

const CHEMISTRY = 'chemistry';

if (!!window.SynapEditor) {
    const {
        NOTIFICATION_LEVEL,
        UI_NAME,
        UI_STATUS,
        UI_GROUP,
        CSS_UNIT
    } = window.SynapEditor.CONST;
    const ACTION = window.SynapEditor.ACTION

    window.SynapEditor.addPlugin('mathType', (editor) => {
        if (!window.WirisPlugin || !window.WirisPlugin.GenericIntegration) {
            return null;
        }

        const lang = editor.getActualLanguage();
        const contentsManager = editor.getContentsManager();
        setBalloons(editor);
        setEvents(editor);

        // Create an empty Element with jQuery and append it to the dom inside the synapeditor.
        let targetDrawingObject = null;
        const $targetContainer = editor.createJquery(`<div class="se-mathType-editor" style="display: none;"></div>`);
        const $toolbar = editor.createJquery(`<div></div>`);
        editor.getElement().find('.se-main').append($targetContainer);

        const config = editor.getConfiguration(`mathType.config`) || {};
        const genericIntegrationProperties = { ...(config.properties || {}) };
        genericIntegrationProperties.target = $targetContainer.get(0);
        genericIntegrationProperties.toolbar = $toolbar.get(0);

        console.log(JSON.stringify(genericIntegrationProperties));

        // Create a mathType instance
        const mathTypeInstance = new window.WirisPlugin.GenericIntegration(genericIntegrationProperties);
        mathTypeInstance.init();
        const imageClassName = window.WirisPlugin.Configuration.get('imageClassName');
        const customEditorAttributeName = window.WirisPlugin.Configuration.get('imageCustomEditorName');

        // After editing is completed in the mathType editor, it is reflected in synapeditor     mathTypeInstance.listeners.fire('onTargetReady', {});
        mathTypeInstance.notifyWindowClosed = () => {
            const selection = editor.getSelectionManager().selection;
            const elPreview = mathTypeInstance.core.modalDialog.contentContainer.querySelector('.wrs_previewImage');

            if (elPreview && elPreview.src.includes('loading')) {
                editor.getUIManager().showNotification('The value may not be accurate if handwriting mode has not been completed.', NOTIFICATION_LEVEL.WARNING);
            }

            if (targetDrawingObject) { // If an existing formula is modified
                const $drawingObject = contentsManager.getElement(targetDrawingObject.getId());
                if (!$targetContainer.html()) { // When an existing formula is deleted
                    editor.execCommand(ACTION.DELETE_LEFT);
                } else if ($drawingObject.length > 0 && selection.anchor.drawingObjectId === targetDrawingObject.getId()) {
                    reviseImageSize(targetDrawingObject, $targetContainer.find('img'));
                    $drawingObject.html($targetContainer.html());
                    editor.updateModel(targetDrawingObject.getId());
                    editor.execCommand(ACTION.SHOW_BALLOON, 'mathType', contentsManager.getHTMLElement(targetDrawingObject.getId()), { position: 'center' });
                }
            } else if (selection.isTextSelection()) { // If you add a new formula
                editor.execCommand(ACTION.PASTE, {
                    html: `<!--StartFragment-->${$targetContainer.html()}<!--EndFragment-->`
                });
            }
            targetDrawingObject = null;
        }
        window.WirisPlugin.currentInstance = mathTypeInstance;

        /**
         * Returns the formula/chemical formula value from an image element.
         * @param {HTMLElement} element
         * @returns
         */
        const getCustomEditorValue = (element) => {
            let result = '';
            if (element.hasAttribute(customEditorAttributeName)) {
                result = element.getAttribute(customEditorAttributeName);
            }
            return result;
        }

        /**
         * Set the new image size to match the existing image size ratio.
         * @param {Image} imageObject
         * @param {jQuery.Element} $image
         */
        const reviseImageSize = (imageObject, $image) => {
            const originSize = imageObject.getOriginSize();
            const width = imageObject.getWidth();
            const height = imageObject.getHeight();
            const size = {};
            if (width && width.unit === CSS_UNIT.PX) {
                size.width = `${parseInt($image.prop('width'), 10) * (width.value / originSize.width)}px`
            }

            if (height && height.unit === CSS_UNIT.PX) {
                size.height = `${parseInt($image.prop('height'), 10) * (height.value / originSize.height)}px`
            }

            if (size.width || size.height) {
                $image.css(size);
            }
        }

        /**
         * Open MathType editor.
         * @param {HTMLElement} temporalImage
         */
        const openMathTypeEditor = (temporalImage) => {
            if (!temporalImage) {
                return;
            }
            const isFirst = !mathTypeInstance.core.modalDialog;
            editor.getUIManager().hideAllPopup();
            editor.showDimLayer();
            editor.blur();

            mathTypeInstance.core.editionProperties.temporalImage = temporalImage;
            mathTypeInstance.openExistingFormulaEditor();

            // When the mathType editor is opened for the first time
            if (isFirst && mathTypeInstance.core.modalDialog) {
                const elDialogContainer = mathTypeInstance.core.modalDialog.container;
                const { bottom, right } = editor.getElement().get(0).getBoundingClientRect();
                const dialogBottom = Math.max(window.innerHeight - bottom, 0);
                const dialogRight = Math.max(window.innerWidth - right, 0);
                mathTypeInstance.core.modalDialog.setPosition(dialogBottom, dialogRight);

                // Fires an event when the mathType editor is closed.
                new window.MutationObserver(() => {
                    if (elDialogContainer.className.split(' ').includes('wrs_closed')) {
                        closeMathTypeEditor();
                    }
                }).observe(elDialogContainer, {
                    attributes: true,
                    attributeFilter: ['class'],
                    childList: false,
                    characterData: false
                });
            }
        }

        /**
         * Close the mathType editor.
         * Disable dimmed in the synapeditor.
         */
        const closeMathTypeEditor = () => {
            editor.hideDimLayer();
            editor.getIme().focus();
            targetDrawingObject = null;
        }

        /**
         * If you click the math icon in synapeditor
         * @param {Event} e
         */
        const onClick = (e) => {
            const selection = editor.getSelectionManager().selection;

            if (selection.isDrawingObjectSelection()) { // When adding an existing formula in synapeditor
                const drawingObject = editor.getSelectionManager().selection.getDrawingObject();
                const element = contentsManager.getHTMLElement(drawingObject.getId()).querySelector('img');
                targetDrawingObject = drawingObject;

                if (element) {
                    $targetContainer.html(element.outerHTML);
                    const temporalImage = $targetContainer.find('img').addClass(imageClassName).get(0);
                    temporalImage.setAttribute('id', drawingObject.getId());
                    mathTypeInstance.core.getCustomEditors().disable();
                    const customEditor = getCustomEditorValue(temporalImage);
                    if (customEditor) {
                        mathTypeInstance.core.getCustomEditors().enable(customEditor);
                    }
                    if (drawingObject.hasClass(imageClassName)) {
                        openMathTypeEditor(temporalImage);
                    }
                }
            } else if (selection.isTextSelection()) { // When adding a new formula in synapeditor
                $targetContainer.html(`<img data-mathml="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«/math»" role="math">`);
                const temporalImage = $targetContainer.find('img').addClass(imageClassName).get(0);
                mathTypeInstance.core.getCustomEditors().disable();
                if (e.currentTarget.getAttribute('name') === 'mathType.chem') {
                    mathTypeInstance.core.getCustomEditors().enable(CHEMISTRY);
                }

                openMathTypeEditor(temporalImage);
            }
        }

        // Return synapeditor mathType plugin definition.
        return {
            buttonDef: [{
                name: 'mathType.math',
                label: 'Math Type',
                iconName: UI_NAME.MATH,
                onClickFunc: onClick,
                status: {
                    fn: (selectionStatus) => {
                        const { isImage, drawingObjectId, positionType } = selectionStatus;

                        let status = UI_STATUS.DISABLE;
                        if (isImage) {
                            const $drawingObject = editor.getContentsManager().getElement(drawingObjectId);
                            if ($drawingObject.hasClass(imageClassName)) {
                                const $image = $drawingObject.find('img');
                                if (getCustomEditorValue($image.get(0)) !== CHEMISTRY) {
                                    status = null;
                                }
                            }
                        } else if (positionType === 'text') {
                            status = null;
                        }

                        return { status };
                    }
                }
            }, {
                name: 'mathType.chem',
                label: 'Chemistry Type',
                iconName: UI_NAME.CHEM,
                onClickFunc: onClick,
                status: {
                    fn: (selectionStatus) => {
                        const { isImage, drawingObjectId, positionType } = selectionStatus;

                        let status = UI_STATUS.DISABLE;
                        if (isImage) {
                            const $drawingObject = editor.getContentsManager().getElement(drawingObjectId);
                            if ($drawingObject.hasClass(imageClassName)) {
                                const $image = $drawingObject.find('img');
                                if (getCustomEditorValue($image.get(0)) === CHEMISTRY) {
                                    status = null;
                                }
                            }
                        } else if (positionType === 'text') {
                            status = null;
                        }

                        return { status };
                    }
                }
            }, {
                name: 'mathType.delete',
                label: 'Delete',
                iconName: UI_NAME.DELETE,
                onClickFunc: (e) => {
                    editor.controller.execute(ACTION.REMOVE_DRAWING_OBJECT);
                },
                status: {
                    group: UI_GROUP.IMAGE_EDIT,
                    fn: (selectionStatus) => {
                        const { isImage, drawingObjectId } = selectionStatus;
                        let disable = true;
                        if (isImage) {
                            const $drawingObject = editor.getContentsManager().getElement(drawingObjectId);
                            disable = !$drawingObject.hasClass(imageClassName);
                        }
                        return { status: disable ? UI_STATUS.DISABLE : null };
                    }
                }
            }]
        };
    });
} else {
    console.error(`The ${'mathType'} plugin could not be initialized because the SynapEditor object does not exist.`);
}