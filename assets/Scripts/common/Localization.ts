const { ccclass, property } = cc._decorator;
import * as STRINGS from '../../strings';
import Events from './Events';

const enumObj = {};
export const LOCALIZATION_KEYS = Object.keys(STRINGS);
for (let i = 0; i < LOCALIZATION_KEYS.length; i++)
{
    enumObj[LOCALIZATION_KEYS[i]] = i;
}

export const LOCALIZATION_ENUM = cc.Enum(enumObj);
export const TextTransforms = cc.Enum({
    None: 0,
    Upper: 1,
    Lower: 2,
});

@ccclass
export default class Localization extends cc.Component
{
    static GetLocalizedString(key: string): string
    {
        if (STRINGS[key])
        {
            // window.language = "en"
            // window.language = "my"
            // window.language = "mu"

            return STRINGS[key][window.language.toUpperCase()] || '';
        }
        return '';
    }

    static ChangeLanguage(language: string)
    {
        window.language = language;
        Events.emit(Events.EventLanguageChanged);
    }
}