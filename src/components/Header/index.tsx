import { useTranslation } from "react-i18next";
import { SwitchThemes } from "./SwitchThemes";
import { SelectLanguages } from "./SelectLanguages";
import "./styles.css";

type HeaderItem = {
    text: string,
    target: string
}

type HeaderProps = {
    items: HeaderItem[]
}

export function Header ({ items }: HeaderProps) {

    const { t } = useTranslation("translation", { keyPrefix: "header" });

    return (
        <nav className="header">
            <ul className="header__menu-list">
                {
                    items.map(item => (
                        <li key={item.target} >
                            <a href={`#${item.target}`}>{t(item.text)}</a>
                        </li>
                    ))
                }
            </ul>

            <div className="header__actions">
                <SwitchThemes />
                <SelectLanguages />
            </div>
        </nav>
    ); 
}