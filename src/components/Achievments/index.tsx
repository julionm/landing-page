import { Achievment } from "models/achievment"
import { AchievmentItem } from "./AchievmentItem"

import "./styles.css";

const ACHIEVMENTS: Achievment[] = [
    {
        id: 0,
        name: "First stage cleared!",
        description: "Get a promotion!",
        imageUrl: "",
    },
    {
        id: 1,
        name: "Second stage cleared!",
        description: "Get a promotion again!",
        imageUrl: "",
    },
    {
        id: 2,
        name: "Base knowledge acquired",
        description: "Finish the technical school chapter",
        imageUrl: "",
    },
    {
        id: 3,
        name: "Not impossible at all",
        description: "Finish a long book you thought you'd never finish.",
        imageUrl: "",
    },
    {
        id: 4,
        name: "Worldwide",
        description: "Work with american clients",
        imageUrl: "",
    },
    {
        id: 5,
        name: "Jack-of-all-trades",
        description: "Work on front end, back end and with infrastructure",
        imageUrl: "",
    }
]

export function AchievmentsPage() {
    return (
        <section className="achievments">
            <h2>Achievments</h2>

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