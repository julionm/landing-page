import { useMemo } from "react";
import { WorkDetails } from "models/workInfo"
import { TagList } from "components/common/TagList";
import './styles.css';
import { ClockIcon } from "assets/icons";
import { formatNumericDateRange } from "utils/date-formatter";

type WorkInfoProps = {
    workDetails: WorkDetails
}

export function WorkInfo({ workDetails }: WorkInfoProps) {

    const workDuration = useMemo(() => {
        const formattedRange: string = formatNumericDateRange(workDetails.start, workDetails.end);
    
        const dates = formattedRange.split(' – ');
        const capitalizedRange = `${capitalize(dates[0].trim())} - ${capitalize(dates[1].trim())}`;

        return capitalizedRange;
    }, [workDetails]);

    function capitalize (text: string): string {
        const firstLetter = text.charAt(0).toUpperCase();
        const rest = text.slice(1);

        return firstLetter + rest;
    }

    return (
        <div className="work-details">
            <div className="header">
                <div>
                    <p className="work__title">{workDetails.companyName}</p>
                    <p className="work__position">{workDetails.position}</p>
                </div>
                <p className="work__duration"><ClockIcon className="clock" /> {workDuration}</p>
            </div>
            <p className="work__description">
                {workDetails.description}
            </p>
            <div className="work__tech">
                <TagList items={workDetails.techStack} />
            </div>
        </div>
    );
}