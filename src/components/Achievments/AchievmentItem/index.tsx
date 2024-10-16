import { Achievment } from "models/achievment"

import "./styles.css";

type AchievmentItemProps = {
    achievment: Achievment
}

export function AchievmentItem ({ achievment }: AchievmentItemProps) {
    return (
        <div className="achievment">
            <div className="icon"></div>

            <div className="content">
                <p className="name">{achievment.name}</p>
                <p className="description">{achievment.description}</p>
            </div>
        </div>
    );
}