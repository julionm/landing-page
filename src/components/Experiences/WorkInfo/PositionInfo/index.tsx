import { TagList } from "components/common/TagList"
import { Position } from "models/workInfo"

import "./styles.css";

type PositionInfoProps = {
    position: Position
}

export function PositionInfo ({ position }: PositionInfoProps ) {
    return (
        <div className="position-info">
            <h4>{position.title}</h4>

            <p className="position-info__description">
                {position.description}
            </p>

            <TagList items={position.techStack} />
        </div>
    )
}