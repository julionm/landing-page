import { Achievment } from "models/achievment"
import { AchievmentItem } from "./AchievmentItem"

import "./styles.css";

const ACHIEVMENTS: Achievment[] = [
    {
        id: 0,
        title: "First stage cleared!",
        description: "Get a promotion!",
        imageUrl: ""
    },
    {
        id: 1,
        title: "Second stage cleared!",
        description: "Get a promotion again!",
        imageUrl: ""
    },
    {
        id: 2,
        title: "",
        description: "",
        imageUrl: ""
    },
    {
        id: 0,
        title: "",
        description: "",
        imageUrl: ""
    },
    {
        id: 0,
        title: "",
        description: "",
        imageUrl: ""
    },
    {
        id: 0,
        title: "",
        description: "",
        imageUrl: ""
    },
]

export function AchievmentsPage() {
    return (
        <section className="achievments">
            <h2>Achievments</h2>

            <div className="achievments__list">
                {
                    ACHIEVMENTS.map(achievment => (
                        <AchievmentItem achievment={achievment} />
                    ))
                }
            </div>
        </section>
    )
}