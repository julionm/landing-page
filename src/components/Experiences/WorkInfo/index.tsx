import { WorkDetails } from "models/workInfo"
import { PositionInfo } from "./PositionInfo"
import "./styles.css"

type WorkInfoProps = {
    work: WorkDetails
}

export function WorkInfo({ work }: WorkInfoProps) {
    return (
        <article className="work-info">
            <img src={work.logoUrl || ""} alt={`${work.companyName} logo`} className="work-info__logo" />

            <div className="work-info__content">
                <h3>{work.companyName}</h3>

                <p className="work-info__description">{work.description}</p>

                <div className="work-info__positions">
                    {
                        work.positions.map(position => (
                            <PositionInfo key={position.title} position={position} />
                        ))
                    }
                </div>
            </div>
        </article>
    )
}