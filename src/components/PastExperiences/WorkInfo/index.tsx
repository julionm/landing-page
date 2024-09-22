import { useMemo } from "react";
import { WorkDetails } from "models/workInfo"
import { TagList } from "components/common/TagList";
import './styles.css';

type WorkInfoProps = {
    workDetails: WorkDetails
}

const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric'
};

export function WorkInfo({ workDetails }: WorkInfoProps) {

    const workDuration = useMemo(() => {
        const dateTimeFormatter = new Intl.DateTimeFormat(navigator.language, dateFormatOptions);

        const formattedRange: string = dateTimeFormatter.formatRange(workDetails.start, workDetails.end)
    
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
            <div>
                <p className="work__title">{workDetails.companyName}</p>
                <p className="work__position">{workDetails.position}</p>
            </div>
            <p className="work__duration">{workDuration}</p>
            <p className="work__description">
                {workDetails.description}
            </p>
            <div className="work__tech">
                <TagList items={workDetails.techStack} />
            </div>
        </div>
    );
}