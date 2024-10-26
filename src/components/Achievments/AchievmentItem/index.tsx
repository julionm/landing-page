import { Achievment } from "models/achievment"

import "./styles.css";
import { useTranslation } from "react-i18next";

type AchievmentItemProps = {
    achievment: Achievment
}

export function AchievmentItem ({ achievment }: AchievmentItemProps) {
    
    const { t } = useTranslation();
    
    return (
        <div className="achievment">
            <div className="icon"></div>

            <div className="content">
                <p className="name">{t(achievment.name)}</p>
                <p className="description">{t(achievment.description)}</p>
            </div>
        </div>
    );
}