import { useCallback, useMemo } from "react";
import { WorkDetails, techStackToIcon } from "../../../models/workInfo"
import './styles.css';

type WorkInfoProps = {
    workDetails: WorkDetails
}

const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric'
};

export function WorkInfo({ workDetails }: WorkInfoProps) {
    
    const TechStack = useCallback(() => {
        return (
            <div className="tech-stack-container">
                {
                    workDetails.techStack.map(tech => {
                        const IconComponent = techStackToIcon[tech];
            
                        return (
                            <div key={tech} className="icon-container">
                                <IconComponent />
                            </div>
                        );
                    })
                }
            </div>
        );
    }, [workDetails]);

    const workDuration = useMemo(() => {
        const datesFormatted = new Intl.DateTimeFormat(navigator.language, dateFormatOptions);
        return datesFormatted.formatRange(workDetails.start, workDetails.end);
    }, [workDetails]);

    return (
        <div className="work-details-container">
            <p className="work-details-title">{workDetails.position} @ {workDetails.companyName}</p>
            <div className="work-context">
                <TechStack />
                <p>{workDuration}</p>
            </div>
            <p className="work-details-description">
                {workDetails.description}
            </p>
        </div>
    );
}