import { Metric } from "models/metric";
import { useEffect, useRef } from "react";
import { TimingProgress, animate } from "utils/animation";
import "./styles.css";

type MetricItemProps = {
    metric: Metric
}

const DURATION = 1000;

export function MetricItem ({ metric }: MetricItemProps) {

    const valueRef = useRef<HTMLSpanElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        const runAnimation = () => {
            animate(
                updateValueFieldNumber,
                DURATION,
                TimingProgress.Linear
            );
        }

        if (itemRef.current) {
            observer = new IntersectionObserver(runAnimation, {
                threshold: 0.45,
            });

            observer.observe(itemRef.current);
        }

        return () => {
            if (observer && itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        }
    }, []);

    function updateValueFieldNumber(progress: number) {
        const displayValue = Math.ceil(progress * metric.value);

        if (!valueRef.current) return;

        const pElement = valueRef.current;

        pElement.innerText = String(displayValue);
    }

    return (
        <div ref={itemRef} className="metric-item">
            <div className="metric-item__highlight">
                <p className="metric-item__value">
                    {metric.valuePrefix || ""}<span ref={valueRef}>0</span>
                </p>
                <p className="metric-item__unit">{metric.measurementUnit}</p>
            </div>

            <p className="metric-item__description">
                {metric.description}
            </p>
        </div>
    )
}