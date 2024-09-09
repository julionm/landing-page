export enum TimingProgress {
    Linear = "linear",
    Circ = "circ",
};

export function animate (
    draw: (progress: number) => void,
    duration: number,
    timingProgress: TimingProgress = TimingProgress.Linear,
    reverse?: boolean
) {
    const zero = getZeroTime();
    const timingFn = getTimingFunction[timingProgress];

    const executeAnimation = (timestamp: number) => {
        const delta = Math.min((timestamp - zero) / duration, 1);
        const progress = timingFn(delta);

        if (reverse) {
            draw(1 - progress);
        } else {
            draw(progress);
        }

        if (progress < 1) {
            requestAnimationFrame(executeAnimation);
        }
    };

    requestAnimationFrame(executeAnimation);
}

function getZeroTime() {
    return Number(document.timeline.currentTime?.valueOf());
}

const getTimingFunction: Record<TimingProgress, (progress: number) => number> = {
    [TimingProgress.Linear]: linearTiming,
    [TimingProgress.Circ]: circTiming
}

function linearTiming(progress: number) {
    return progress;
}

function circTiming(progress: number) {
    return 1 - Math.sin(Math.acos(progress));
}