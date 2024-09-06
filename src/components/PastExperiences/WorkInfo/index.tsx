import { useMemo } from "react";
import { WorkDetails } from "models/workInfo"
import { TechStackList } from "components/common/TechStackList";
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
        const datesFormatted = new Intl.DateTimeFormat(navigator.language, dateFormatOptions);
        return datesFormatted.formatRange(workDetails.start, workDetails.end);
    }, [workDetails]);

    return (
        <div className="work-details-container">
            <p className="work-details-title">{workDetails.position} @ {workDetails.companyName}</p>
            <div className="work-context">
                <div className="tech-stack-container">
                    <TechStackList items={workDetails.techStack} />
                </div>

                <p>{workDuration}</p>
            </div>
            <p className="work-details-description">
                {workDetails.description}
            </p>
        </div>
    );
}