import { PLUGIN_NAME, BUTTON_NAME } from '../consts';
const BALLOON_SETTINGS = {
    [PLUGIN_NAME]: [BUTTON_NAME.MATH, BUTTON_NAME.CHEM, BUTTON_NAME.DELETE]
};

/**
 * 에디터 폼요소에 보여줄 Balloon을 설정합니다.
 * @param {SynapEditor} editor
 */
export default function setBalloons(editor) {
    const balloonConfig = editor.getConfiguration('editor.balloon');
    Object.assign(balloonConfig, BALLOON_SETTINGS);
};