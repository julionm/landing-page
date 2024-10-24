import { useTranslation } from "react-i18next";
import { SwitchThemes } from "./SwitchThemes";
import { SelectLanguages } from "./SelectLanguages";
import "./styles.css";

export function Header() {

    const { t } = useTranslation("translation", { keyPrefix: "header" });

    return (
        <nav className="header">
            <ul>
                <li>
                    <a href="#homeSection" data-active>{t("home")}</a>
                </li>
                <li>
                    <a href="#experiencesSection">{t("experiences")}</a>
                </li>
                <li>
                    <a href="#projectsSection">{t("projects")}</a>
                </li>
                <li>
                    <a href="#updatesSection">{t("updates")}</a>
                </li>
                <li>
                    <a href="#achievmentsSection">{t("achievments")}</a>
                </li>
            </ul>

            <div className="header__actions">
                <SelectLanguages />
                <SwitchThemes />
            </div>
        </nav>
    ); 
}