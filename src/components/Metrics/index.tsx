import { Metric } from "models/metric";
import { MetricItem } from "./Metric";
import "./styles.css";

const METRICS: Metric[] = [
    {
        id: 0,
        value: 5,
        valuePrefix: "+",
        measurementUnit: "years",
        description: "Working as a developer"
    },
    {
        id: 1,
        value: 100,
        valuePrefix: "+",
        measurementUnit: "exercises",
        description: "solved in LeetCode"
    },
    {
        id: 2,
        value: 200,
        valuePrefix: "~",
        measurementUnit: "days",
        description: "of Duolingo streak"
    },
    {
        id: 3,
        value: 100,
        valuePrefix: "+",
        measurementUnit: "days",
        description: "doing Wordle at NY Times"
    },
    {
        id: 4,
        value: 58,
        measurementUnit: "repositories",
        description: "on GitHub"
    },
]

export function MetricsPage() {
    return (
        <section className="metrics">
            <h2 className="metrics__title">Metrics</h2>
            <p>Some metrics to showcase my abilities.</p>

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