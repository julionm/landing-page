import { Update } from "models/updates"
import { Button } from "components/common/Button";
import { ArrowRightIcon, ClockIcon } from "assets/icons";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

type UpdateEntryProps = {
    update: Update
}

export function UpdateEntry ({ update }: UpdateEntryProps) {

    const { t } = useTranslation(); 

    const formattedDate = useMemo(() => {
        const dateFormatter = new Intl.DateTimeFormat(navigator.language);

        return dateFormatter.format(update.time);
    }, [update]);

    return (
        <div className="update">
            <div className="update__content">
                <h3 className="title">{t(update.title)}</h3>
                <div className="sub-title">
                    <p className="time">
                        <ClockIcon className="icon" />
                        <span>{formattedDate}</span>
                    </p>
                    <div className="separator"></div>
                    <p className="short-desc" title={t(update.shortDescription)}>
                        {t(update.shortDescription)}
                    </p>
                </div>
            </div>

            {
                update.actionUrl && (
                    <div className="update__action">
                        <Button href={update.actionUrl}>
                            <span className="read-more">{t("updates.read_more")}</span>
                            <ArrowRightIcon className="icon" />
                        </Button>
                    </div>
                )
            }
        </div>
    )
}