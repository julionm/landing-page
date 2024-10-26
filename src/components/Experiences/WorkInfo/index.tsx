import { WorkDetails } from "models/workInfo"
import { PositionInfo } from "./PositionInfo"
import "./styles.css"
import { useTranslation } from "react-i18next"

type WorkInfoProps = {
    work: WorkDetails
}

export function WorkInfo({ work }: WorkInfoProps) {

    const { t } = useTranslation();

    return (
        <article className="work-info">
            <img src={work.logoUrl || ""} alt={`${work.companyName} logo`} className="work-info__logo" />

            <div className="work-info__content">
                <h3 className="notranslate">{work.companyName}</h3>

                <p className="work-info__description">{t(work.description)}</p>

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