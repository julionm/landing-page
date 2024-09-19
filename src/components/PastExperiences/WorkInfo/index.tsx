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

// TODO: show a text range value

export function WorkInfo({ workDetails }: WorkInfoProps) {

    const workDuration = useMemo(() => {
        const datesFormatted = new Intl.DateTimeFormat(navigator.language, dateFormatOptions);
        return datesFormatted.formatRange(workDetails.start, workDetails.end);
    }, [workDetails]);

    return (
        <div className="work-details">
            <p className="work__title">{workDetails.companyName}</p>
            <p className="work__position">{workDetails.position}</p>
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