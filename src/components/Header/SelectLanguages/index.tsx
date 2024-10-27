import { BrazilFlagIcon, UsaFlagIcon } from "assets/icons";

import { HTMLAttributes, ReactElement, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import "./styles.css";

type Language = {
    language: "en-US" | "pt-BR",
    text: string,
    icon: (props: HTMLAttributes<SVGElement>) => ReactElement
}

const LANGUAGES: Language[] = [
    {
        language: "pt-BR",
        text: "portuguese",
        icon: BrazilFlagIcon
    },
    {
        language: "en-US",
        text: "english",
        icon: UsaFlagIcon
    }
]

export function SelectLanguages() {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "languages" });
    
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[1]);
    const [optionsVisible, setOptionsVisible] = useState(false);

    const LanguageIcon = useCallback(() => {
        const Icon = selectedLanguage.icon;

        return (
            <Icon className="icon" />
        );
    }, [selectedLanguage]);

    function handleUserSelection(selected: Language) {
        i18n.changeLanguage(selected.language);
        
        setSelectedLanguage(selected);
        setOptionsVisible(!optionsVisible);
    }

    return (
        <button
            type="button"
            className="select-wrapper"
            onClick={() => setOptionsVisible(!optionsVisible)}
            aria-haspopup
            aria-label={`Current language is ${t(selectedLanguage.text)}. Choose your preferred language.`}
        >
           
            <div className="language-selected">
                <LanguageIcon />
                <p className="language-selected__caption">{t(selectedLanguage.text)}</p>
            </div>

            <ul
                id="languageOptions"
                className="language-options"
                data-visible={optionsVisible}
                role="menu"
                aria-expanded={optionsVisible}    
            >
                {
                    LANGUAGES.map(lang => {
                        const Icon = lang.icon;

                        return (
                            <li
                                key={lang.language}
                                className="language-option"
                                lang={lang.language}
                                onClick={() => handleUserSelection(lang)}
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