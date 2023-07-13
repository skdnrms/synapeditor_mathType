import { PLUGIN_NAME } from '../consts';

/**
 * 에디터와 관련된 이벤트를 설정합니다.
 * @param {SynapEditor} editor
 */
export default function setEvents(editor) {
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
                editor.execCommand(ACTION.SHOW_BALLOON, PLUGIN_NAME, editor.getContentsManager().getHTMLElement(drawingObject.id), { position: 'center' });
            }
        }
    });
};