import { BrazilFlagIcon, UsaFlagIcon } from "assets/icons";

import { HTMLAttributes, ReactElement, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import "./styles.css";

type Language = {
    language: "en" | "pt",
    text: string,
    icon: (props: HTMLAttributes<SVGElement>) => ReactElement
}

const LANGUAGES: Language[] = [
    {
        language: "pt",
        text: "portuguese",
        icon: BrazilFlagIcon
    },
    {
        language: "en",
        text: "english",
        icon: UsaFlagIcon
    }
]

export function SelectLanguages() {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "languages" });
    
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
    const [optionsVisible, setOptionsVisible] = useState(false);

    const LanguageIcon = useCallback(() => {
        const Icon = selectedLanguage.icon;

        return (
            <Icon />
        );
    }, [selectedLanguage]);

    function handleUserSelection(selected: Language) {
        i18n.changeLanguage(selected.language);
        
        setSelectedLanguage(selected);
        setOptionsVisible(!optionsVisible);
    }

    return (
        <div
            className="select-wrapper"
            onClick={() => setOptionsVisible(!optionsVisible)}>
            <div className="language-selected">
                <LanguageIcon />
                <p>{t(selectedLanguage.text)}</p>
            </div>

            <div className="language-options" data-visible={optionsVisible}>
                {
                    LANGUAGES.map(lang => {
                        const Icon = lang.icon;

                        return (
                            <div
                                key={lang.language}
                                className="language-option"
                                onClick={() => handleUserSelection(lang)}>
                                <Icon />
                                <p>{t(lang.text)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )    
}