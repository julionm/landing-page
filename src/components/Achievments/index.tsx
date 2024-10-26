import { Achievment } from "models/achievment"
import { AchievmentItem } from "./AchievmentItem"

import "./styles.css";
import { useTranslation } from "react-i18next";

const ACHIEVMENTS: Achievment[] = [
    {
        id: 0,
        name: "achievments.first_stage.title",
        description: "achievments.first_stage.description",
        imageUrl: "",
    },
    {
        id: 1,
        name: "achievments.second_stage.title",
        description: "achievments.second_stage.description",
        imageUrl: "",
    },
    {
        id: 2,
        name: "achievments.knowledge.title",
        description: "achievments.knowledge.description",
        imageUrl: "",
    },
    {
        id: 3,
        name: "achievments.not_impossible.title",
        description: "achievments.not_impossible.description",
        imageUrl: "",
    },
    {
        id: 4,
        name: "achievments.worldwide.title",
        description: "achievments.worldwide.description",
        imageUrl: "",
    },
    {
        id: 5,
        name: "achievments.jack.title",
        description: "achievments.jack.description",
        imageUrl: "",
    }
]

export function AchievmentsPage() {

    const { t } = useTranslation();

    return (
        <section id="achievmentsSection" className="achievments">
            <h2>&#x2192; {t("achievments.title")}</h2>

            <div className="achievments__list">
                {
                    ACHIEVMENTS.map(achievment => (
                        <AchievmentItem key={achievment.id} achievment={achievment} />
                    ))
                }
            </div>
        </section>
    )
}