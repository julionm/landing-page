import { TagList } from "components/common/TagList"
import { Position } from "models/workInfo"

import "./styles.css";
import { ClockIcon } from "assets/icons";
import { useMemo } from "react";
import { getDateTimeFormatter } from "utils/date-formatter";

type PositionInfoProps = {
    position: Position
}

const formatterOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric"
};

const formatter = getDateTimeFormatter(formatterOptions);

export function PositionInfo ({ position }: PositionInfoProps ) {
    
    const formattedStartDate = useMemo(() => {
        return formatter.format(position.start);
    }, [position]);

    const formattedEndDate = useMemo(() => {
        return position.end ? formatter.format(position.end) : "Present"
    }, [position]);
    
    return (
        <div className="position-info">

            <div className="position-info__header">
                <h4>{position.title}</h4>
                <div className="position-info__time">
                    <ClockIcon className="position-info__clock-icon" />
                    <p className="position-info__duration">
                        <span className="capitalize">{formattedStartDate}</span> - <span className="capitalize">{formattedEndDate}</span>
                    </p>
                </div>
            </div>

            <p className="position-info__description">
                {position.description}
            </p>

            <TagList items={position.techStack} />
        </div>
    )
}