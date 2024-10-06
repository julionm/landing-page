import { Update } from "models/updates"
import { Button } from "components/common/Button";
import { ArrowRightIcon, ClockIcon } from "assets/icons";
import { useMemo } from "react";
import "./styles.css";

type UpdateEntryProps = {
    update: Update
}

export function UpdateEntry ({ update }: UpdateEntryProps) {

    const formattedDate = useMemo(() => {
        const dateFormatter = new Intl.DateTimeFormat(navigator.language);

        return dateFormatter.format(update.time);
    }, [update]);

    return (
        <div className="update">
            <div className="update__content">
                <h3 className="title">{update.title}</h3>
                <div className="sub-title">
                    <p className="time">
                        <ClockIcon className="icon" />
                        <span>{formattedDate}</span>
                    </p>
                    <div className="separator"></div>
                    <span>{update.shortDescription}</span>
                </div>
            </div>

            <div className="update__action">
                <Button>
                    <span>Read More</span>
                    <ArrowRightIcon className="icon" />
                </Button>
            </div>
        </div>
    )
}