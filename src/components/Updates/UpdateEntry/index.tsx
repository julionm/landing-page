import { Update } from "models/updates"
import { Button } from "components/common/Button";
import { ArrowRightIcon, FavoriteIcon } from "assets/icons";
import { useMemo, useRef } from "react";
import "./styles.css";
import { ClockIcon } from "assets/icons/Clock";

type UpdateEntryProps = {
    update: Update
}

export function UpdateEntry ({ update }: UpdateEntryProps) {

    const favoriteButtonRef = useRef<SVGSVGElement>(null);

    const formattedDate = useMemo(() => {
        const dateFormatter = new Intl.DateTimeFormat(navigator.language);

        return dateFormatter.format(update.time);
    }, [update]);

    function handleFavorite() {
        if (!favoriteButtonRef.current) return;

        const favoriteButton = favoriteButtonRef.current;

        favoriteButton.toggleAttribute('data-favorite');
    }

    return (
        <div className="update">
            <div className="update__favorite">
                <FavoriteIcon ref={favoriteButtonRef} onClick={handleFavorite} className="icon" />
            </div>

            <div className="update__content">
                <p className="title">{update.title}</p>
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