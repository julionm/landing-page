import { Project } from "models/project";
import { TechStackList } from "components/common/TechStackList";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CodeIcon } from "assets/icons/CodeIcon";
import profilePhoto from 'assets/profile-image.jpeg';
import './styles.css';

const MAX_SCALE_X = 1;
const MAX_SCALE_Y = 1;
const MAX_TRANSFORM_Y = 40; // ? maybe I need to calculate this instead
const DURATION = 400;

type ProjectDetailedCardProps = {
    project: Project,
    callback: () => void,
    cardRef: React.RefObject<HTMLDivElement>,
    visible: boolean
}

/*
    TODO: 
    * animate footer
    * change timing function
    * fix hover issues
    * change MAX_TRANSFORM_Y
*/

/**
 * Animate the footer to change its opacity
 */
export function ProjectDetailedCard ({ project, callback, cardRef, visible }: ProjectDetailedCardProps) {

    const dialogRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const descriptorRef = useRef<HTMLDivElement>(null);

    const zero = useRef<number>(Number(document.timeline.currentTime?.valueOf()));

    const startAnimation = (animationFunction: (timestamp: number) => void): number => {
        setZeroTime();
        return requestAnimationFrame(animationFunction);
    }

    function setZeroTime() {
        zero.current = Number(document.timeline.currentTime?.valueOf());
    }

    const animate = (timestamp: number) => {
        const zeroTime = zero.current;
        const delta = Math.min((timestamp - zeroTime) / DURATION, 1);

        // ? timing function
        const progress = linearTiming(delta);

        draw(progress);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    const animateBackwards = (timestamp: number) => {
        const zeroTime = zero.current;
        const delta = Math.max(1 - (timestamp - zeroTime) / DURATION, 0);

        // ? timing function
        const progress = linearTiming(delta);

        draw(progress);

        if (progress > 0) {
            requestAnimationFrame(animateBackwards);
        }
    }

    function draw(progress: number) {
        // * progress is a value from 0 - 1 representing a percentage

        const scaleX = MAX_SCALE_X * progress;
        const scaleY = MAX_SCALE_Y * progress;
        const transformY = MAX_TRANSFORM_Y * progress;
        const transformStr = `scaleX(${scaleX}) scaleY(${scaleY}) translateY(-${transformY}px)`;

        if (dialogRef.current) {

            if (shouldShow(progress) && overlayRef.current) {
                overlayRef.current.style.setProperty('z-index', '1000');
            }
            // if (shouldShow(progress) && overlayRef.current && descriptorRef.current) {
            //     overlayRef.current.style.setProperty('z-index', '1000');
            //     descriptorRef.current.style.setProperty('display', 'flex');
            //     descriptorRef.current.style.setProperty('opacity', `${progress}`);
            // }
                
            dialogRef.current.style.setProperty('opacity', `${progress}`);
            dialogRef.current.style.setProperty('transform', transformStr);
        }
    }

    const shouldShow = (scaleValue: number): boolean => {
        const dialog = dialogRef.current;
        const card = cardRef.current;

        if (!dialog || !card) {
            return false;
        }

        const percentage = card.clientWidth/dialog.clientWidth;

        return scaleValue > percentage;
    };

    const linearTiming = (progress: number) => progress;

    const handlePointerLeave = () => {
        startAnimation(animateBackwards);

        setTimeout(callback, 500);
    }

    useEffect(() => {
        let requestFrameId = null;

        if (visible) {
            if (dialogRef.current && cardRef.current && overlayRef.current) {
                const overlayRect = overlayRef.current.getBoundingClientRect();
                const cardRect = cardRef.current.getBoundingClientRect();
                const dialogRect = dialogRef.current.getBoundingClientRect();

                const dialogTop = Math.abs(overlayRect.top) + cardRect.top;
                const dialogLeft = cardRect.left - (dialogRect.width - cardRect.width) / 2;

                dialogRef.current.style.setProperty('top', `${dialogTop}px`);
                dialogRef.current.style.setProperty('left', `${dialogLeft}px`);

                requestFrameId = startAnimation(animate);
            }
        }

        return () => {
            if (requestFrameId) {
                cancelAnimationFrame(requestFrameId);
            }
        }
    }, [visible])

    return (
        <>
            {
                visible && createPortal(
                    <div ref={overlayRef} className="overlay" role="dialog" onPointerLeave={handlePointerLeave}>
                        <div ref={dialogRef} className="detailed-card">
                            <img src={profilePhoto} alt="" className='project-image'/>
            
                            <footer>
                                <div className="project-summary">
                                    <p>{project.title}</p>
            
                                    <a href={project.link} target='_blank'>
                                        <CodeIcon height='1.5rem' width='1.5rem' />
                                    </a>
                                </div>

                                <div ref={descriptorRef} className="project-description">
                                    <div className="tech-stack">
                                        <TechStackList items={project.techStack} />
                                    </div>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                            </footer>
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    );
}