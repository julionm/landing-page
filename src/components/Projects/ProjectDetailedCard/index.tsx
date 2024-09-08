import { Project } from "models/project";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { TimingProgress, animate } from "utils/animation";
import { CardThumb } from "../CardThumb";
import './styles.css';
import { CodeIcon } from "assets/icons/CodeIcon";
import { TechStackList } from "components/common/TechStackList";

const DURATION = 300;

type ProjectDetailedCardProps = {
    project?: Project,
    callback: () => void,
    cardRect?: DOMRect,
    visible: boolean
}

/*
    * fix on pointerLeave animation
*/
export function ProjectDetailedCard ({ project, callback, cardRect, visible }: ProjectDetailedCardProps) {

    const dialogRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);

    const openDialogAnimation = (overlay: HTMLDivElement, dialog: HTMLDivElement, description: HTMLDivElement) => {
        if (!cardRect) { return; }

        const overlayRect = overlay.getBoundingClientRect();
        const dialogRect = dialog.getBoundingClientRect();

        const dialogTop = Math.abs(overlayRect.top) + cardRect.top;
        const dialogLeft = cardRect.left - (dialogRect.width - cardRect.width) / 2;

        const initialScaleY = Math.round((cardRect.height / dialogRect.height) * 1000) / 1000;
        const finalScaleY = 1;
        const deltaScaleY = (finalScaleY - initialScaleY);

        const initialScaleX = Math.round((cardRect.width / dialogRect.width) * 1000) / 1000;
        const finalScaleX = 1;
        const deltaScaleX = (finalScaleX - initialScaleX);
        
        // * final dialog position
        const initialTranslateY = 0;
        const finalTranslateY = (dialogRect.height - cardRect.height) / 2;
        const deltaTranslateY = (finalTranslateY - initialTranslateY);

        dialog.style.setProperty('top', `${dialogTop}px`);
        dialog.style.setProperty('left', `${dialogLeft}px`);

        const updateDialog = (progress: number) => {
            // * progress is a value from 0 - 1 representing a percentage
    
            const scaleX = deltaScaleX * progress;
            const scaleY = deltaScaleY * progress;
            const translateY = deltaTranslateY * progress;
            const transformStr = `scaleX(${initialScaleX + scaleX}) scaleY(${initialScaleY + scaleY}) translateY(-${initialTranslateY + translateY}px)`;
                
            dialog.style.setProperty('transform', transformStr);

            description.style.setProperty('opacity', String(progress));
        }

        animate(updateDialog, DURATION, TimingProgress.Linear);
    }

    const handlePointerLeave = () => {
        // animate backwards
        callback();
    }

    useEffect(() => {
        if (visible && dialogRef.current && cardRect && overlayRef.current && descriptionRef.current) {
            openDialogAnimation(overlayRef.current, dialogRef.current, descriptionRef.current);
        }
    }, [visible])

    return (
        <>
            {
                visible && createPortal(
                    <div ref={overlayRef} className="overlay" role="dialog" onPointerLeave={handlePointerLeave}>
                        <div ref={dialogRef} className="detailed-card">
                            {project && <CardThumb project={project} />}

                            <footer ref={descriptionRef}>
                                <div className="project-summary">
                                    <p>{project?.title}</p>
                                    <a href={project?.link} target='_blank'>
                                        <CodeIcon height='1.5rem' width='1.5rem' />
                                    </a>
                                </div>

                                <p>{project?.description}</p>

                                <div className="tech-stack-list">
                                    <TechStackList items={project?.techStack || []} />
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