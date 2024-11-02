import { MoonIcon, SunIcon } from "assets/icons";
import { KeyboardEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

export function SwitchThemes () {

    const { t } = useTranslation();

    const [selectedTheme, setSelectedTheme] = useState("dark");

    function toggleTheme () {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");

        if (selectedTheme === "dark") {
            setSelectedTheme("light");
            return;
        }

        setSelectedTheme("dark");
    }

    function handleKeyDown (e: KeyboardEvent<HTMLDivElement>) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            toggleTheme();
        }
    }

    return (
        <div className="switch-themes">
            <MoonIcon className="icon" data-selected={selectedTheme === "dark"} />

            <div
                className="switch"
                onClick={toggleTheme}
                onKeyDown={handleKeyDown}
                data-theme={selectedTheme}
                role="button"
                aria-pressed={selectedTheme === "light"}
                aria-label={t("accessibility.switch_themes")}
                tabIndex={0}>
                <div className="circle"></div>
            </div>

            <SunIcon className="icon" data-selected={selectedTheme === "light"} />
        </div>
    )
}