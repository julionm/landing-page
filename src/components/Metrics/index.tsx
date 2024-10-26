import { Metric } from "models/metric";
import { MetricItem } from "./Metric";
import { useTranslation } from "react-i18next";
import "./styles.css";

const METRICS: Metric[] = [
    {
        id: 0,
        value: 5,
        valuePrefix: "+",
        measurementUnit: "metrics.years_working.unit",
        description: "metrics.years_working.description"
    },
    {
        id: 1,
        value: 100,
        valuePrefix: "+",
        measurementUnit: "metrics.leetcodes_solved.unit",
        description: "metrics.leetcodes_solved.description"
    },
    {
        id: 2,
        value: 200,
        valuePrefix: "~",
        measurementUnit: "metrics.duolingo_streak.unit",
        description: "metrics.duolingo_streak.description"
    },
    {
        id: 3,
        value: 100,
        valuePrefix: "+",
        measurementUnit: "metrics.worldle.unit",
        description: "metrics.worldle.description"
    },
    {
        id: 4,
        value: 58,
        measurementUnit: "metrics.git_repos.unit",
        description: "metrics.git_repos.description"
    },
]

export function MetricsPage() {

    const { t } = useTranslation();

    return (
        <section className="metrics">
            <h2 className="metrics__title">{t("metrics.title")}</h2>

            <div className="metrics__list">
                {
                    METRICS.map(metric => (
                        <MetricItem key={metric.id} metric={metric} />
                    ))
                }
            </div>

        </section>
    );
}