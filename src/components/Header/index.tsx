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

const LINK_ITEM_PREFIX = "link_"

export function Header ({ items }: HeaderProps) {

    const { t } = useTranslation("translation", { keyPrefix: "header" });

    return (
        <nav className="header">
            <ul className="header__menu-list">
                {
                    items.map(item => (
                        <li id={`${LINK_ITEM_PREFIX}${item.target}`} key={item.target} >
                            <a href={`#${LINK_ITEM_PREFIX}${item.target}`}>{t(item.text)}</a>
                        </li>
                    ))
                }
            </ul>

            <div className="header__actions">
                <SelectLanguages />
                <SwitchThemes />
            </div>
        </nav>
    ); 
}