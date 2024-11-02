import { Achievment } from "models/achievment"
import { useTranslation } from "react-i18next";
import { TrophyIcon } from "assets/icons";

import "./styles.css";

type AchievmentItemProps = {
    achievment: Achievment
}

export function AchievmentItem ({ achievment }: AchievmentItemProps) {
    
    const { t } = useTranslation();
    
    return (
        <div className="achievment">
            <div className="icon-container">
                <TrophyIcon className="icon" />
            </div>

            <div className="content">
                <p className="name">{t(achievment.name)}</p>
                <p className="description">{t(achievment.description)}</p>
            </div>
        </div>
    );
}