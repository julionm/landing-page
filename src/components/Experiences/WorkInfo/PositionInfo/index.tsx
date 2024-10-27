import { TagList } from "components/common/TagList"
import { Position } from "models/workInfo"

import { ClockIcon } from "assets/icons";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import "./styles.css";

type PositionInfoProps = {
    position: Position
}

const formatterOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric"
};

export function PositionInfo ({ position }: PositionInfoProps ) {
    
    const { t, i18n } = useTranslation();

    const formatter = useMemo(() => {
        return new Intl.DateTimeFormat(i18n.language, formatterOptions);
    }, [i18n.language]);

    const formattedStartDate = useMemo(() => {
        return formatter.format(position.start);
    }, [position, i18n.language]);

    const formattedEndDate = useMemo(() => {
        return position.end ? formatter.format(position.end) : t("now")
    }, [position, i18n.language]);
    
    return (
        <div className="position-info">

            <div className="position-info__header">
                <h4>{t(position.title)}</h4>
                <div className="position-info__time">
                    <ClockIcon className="position-info__clock-icon" />
                    <p className="position-info__duration">
                        <span className="capitalize">{formattedStartDate}</span> - <span className="capitalize">{formattedEndDate}</span>
                    </p>
                </div>
            </div>

            <p className="position-info__description">
                {t(position.description)}
            </p>

            <TagList items={position.techStack} />
        </div>
    )
}