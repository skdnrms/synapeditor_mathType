import util from './util';
import { PLUGIN_NAME, MESSAGE_KEY } from './consts';

const pluginName = PLUGIN_NAME.replace(/^[a-z]/, char => char.toUpperCase());

const messages = {
    [MESSAGE_KEY.MATH]: {
        en: 'Math Type',
        ko: '수식 유형'
    },
    [MESSAGE_KEY.CHEM]: {
        en: 'Chemistry Type',
        ko: '화학 유형'
    },
    [MESSAGE_KEY.NOT_COMPLETED]: {
        en: `[${pluginName}] The value may not be accurate if handwriting mode has not been completed.`,
        ko: `[${pluginName}] 필기 모드가 완료되지 않은 상태에서는 값이 정확하지 않을 수 있습니다.`
    },
    [MESSAGE_KEY.DELETE]: {
        en: 'Delete',
        ko: '삭제'
    }
};

/**
 * lang과 key에 맞는 메시지를 반환합니다.
 * @param {String} lang
 * @param {String} key
 * @returns {String}
 */
export function getMessage(lang, key) {
    return util.get(messages, [key, lang], util.get(messages, [key, 'en'], ''));
}