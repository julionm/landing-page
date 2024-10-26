import { useTranslation } from "react-i18next"
import "./styles.css"

export function ThanksMessage () {

    const { t } = useTranslation();

    return (
        <p className="thanks">{t("thanks_message")}</p>
    )
}