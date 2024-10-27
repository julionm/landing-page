import { BrazilFlagIcon, UsaFlagIcon } from "assets/icons";

import { HTMLAttributes, ReactElement, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import "./styles.css";

type Language = {
    language: "en-US" | "pt-BR",
    text: string,
    icon: (props: HTMLAttributes<SVGElement>) => ReactElement
}

const LANGUAGES: Record<string, Language> = {
    "pt-BR": {
        language: "pt-BR",
        text: "portuguese",
        icon: BrazilFlagIcon
    },
    "en-US": {
        language: "en-US",
        text: "english",
        icon: UsaFlagIcon
    }
}

export function SelectLanguages() {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "languages" });
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [optionsVisible, setOptionsVisible] = useState(false);

    const LanguageIcon = useCallback(() => {
        const Icon = LANGUAGES[selectedLanguage].icon;

        return (
            <Icon className="icon" />
        );
    }, [selectedLanguage]);

    function handleUserSelection(selectedKey: string) {
        const selected = LANGUAGES[selectedKey];
        i18n.changeLanguage(selected.language);
        
        setSelectedLanguage(selectedKey);
        setOptionsVisible(!optionsVisible);
    }

    return (
        <button
            type="button"
            className="select-wrapper"
            onClick={() => setOptionsVisible(!optionsVisible)}
            aria-haspopup
            aria-label={`Current language is ${t(LANGUAGES[selectedLanguage].text)}. Choose your preferred language.`}
        >
           
            <div className="language-selected">
                <LanguageIcon />
                <p className="language-selected__caption">{t(LANGUAGES[selectedLanguage].text)}</p>
            </div>

            <ul
                id="languageOptions"
                className="language-options"
                data-visible={optionsVisible}
                role="menu"
                aria-expanded={optionsVisible}    
            >
                {
                    Object.keys(LANGUAGES).map(langKey => {
                        const lang = LANGUAGES[langKey];
                        const Icon = lang.icon;

                        return (
                            <li
                                key={lang.language}
                                className="language-option"
                                lang={lang.language}
                                onClick={() => handleUserSelection(langKey)}
                                role="menuitem"
                            >
                                <Icon className="icon" />
                                <p>{t(lang.text)}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </button>
    )    
}