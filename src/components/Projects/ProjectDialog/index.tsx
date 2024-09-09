import { Project } from "models/project";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { TimingProgress, animate } from "utils/animation";
import { CardThumb } from "../CardThumb";
import { CodeIcon } from "assets/icons/CodeIcon";
import { TechStackList } from "components/common/TechStackList";

import './styles.css';

const DURATION = 275;

type ProjectDialogProps = {
    project?: Project,
    callback: () => void,
    cardRect?: DOMRect,
    visible: boolean
}

type DialogPosition = { top: number, left: number };

type DialogTransformDescriptor = {
    initialScaleX: number,
    initialScaleY: number,
    finalTranslateY: number
}

export function ProjectDialog ({ project, callback, cardRect, visible }: ProjectDialogProps) {

    const dialogRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (visible) {
            runAnimation();
        }
    }, [visible]);

    function runAnimation (reverse: boolean = false) {
        if (!(dialogRef.current && cardRect && overlayRef.current && footerRef.current)) return;

        const dialog = dialogRef.current;
        const footer = footerRef.current;

        const dialogRect = dialog.getBoundingClientRect();
        const overlayRect = overlayRef.current.getBoundingClientRect();

        const dialogPosition = getDialogInitialPosition(overlayRect, cardRect, dialogRect);

        dialog.style.setProperty('top', `${dialogPosition.top}px`);
        dialog.style.setProperty('left', `${dialogPosition.left}px`);

        const transformDescriptor = getDialogTransformDescriptor(cardRect, dialogRect);

        const updateDialog = createOpenDialogFunction(dialog, footer, transformDescriptor);
    
        animate(updateDialog, DURATION, TimingProgress.Linear, reverse);
    }

    const createOpenDialogFunction = (
        dialog: HTMLDivElement,
        footer: HTMLDivElement,
        transformDescriptor: DialogTransformDescriptor
    ): (progress: number) => void => {

        const { initialScaleX, initialScaleY, finalTranslateY } = transformDescriptor;

        const updateDialog = (progress: number) => {
            // * progress is a value from 0 - 1 representing a percentage
    
            const scaleX = (1 - initialScaleX) * progress;
            const scaleY = (1 - initialScaleY) * progress;
            const translateY = finalTranslateY * progress;
            const transformStr = `scaleX(${initialScaleX + scaleX}) scaleY(${initialScaleY + scaleY}) translateY(-${translateY}px)`;
                
            dialog.style.setProperty('transform', transformStr);
            footer.style.setProperty('opacity', String(progress));
        }

        return updateDialog;
    }

    function getDialogTransformDescriptor(
        cardRect: DOMRect,
        dialogRect: DOMRect): DialogTransformDescriptor {
            // * modal initial size to match the card's
            const initialScaleX = Math.round((cardRect.width / dialogRect.width) * 1000) / 1000;
            const initialScaleY = Math.round((cardRect.height / dialogRect.height) * 1000) / 1000;
            
            // * final dialog position on Y axis
            const finalTranslateY = (dialogRect.height - cardRect.height) / 2;

            return {
                initialScaleX,
                initialScaleY,
                finalTranslateY
            }
    }

    function getDialogInitialPosition (
        overlayRect: DOMRect,
        cardRect: DOMRect,
        dialogRect: DOMRect) : DialogPosition {
        const top = Math.abs(overlayRect.top) + cardRect.top;
        const left = cardRect.left - (dialogRect.width - cardRect.width) / 2;

        return { top, left };
    }

    const handlePointerLeave = () => {
        runAnimation(true);
        
        // ! I NEED TO REMOVE THIS
        setTimeout(callback, DURATION);
    }

    return (
        <>
            {
                visible && createPortal(
                    <div ref={overlayRef} className="overlay" role="dialog" onPointerLeave={handlePointerLeave}>
                        <div ref={dialogRef} className="detailed-card">
                            {project && <CardThumb project={project} />}

                            <footer ref={footerRef}>
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