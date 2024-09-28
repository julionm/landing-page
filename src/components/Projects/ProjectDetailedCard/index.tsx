import { Project, ProjectDialogRef } from "models/project";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { TimingProgress, animate } from "utils/animation";
import { CardThumb } from "../CardThumb";
import { CodeIcon } from "assets/icons/Code";
import { TagList } from "components/common/TagList";

import './styles.css';
import { Button, ButtonType } from "components/common/Button";

const DURATION = 100;

type DialogPosition = { top: number, left: number };

type DialogTransformDescriptor = {
    initialScaleX: number,
    initialScaleY: number,
    finalTranslateY: number
}

// TODO: refact the callback style

export const ProjectDialog = forwardRef<ProjectDialogRef, any>((_, ref) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [cardRect, setCardRect] = useState<DOMRect>();
    const [project, setProject] = useState<Project | null>();

    const dialogRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const cardThumbRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => {
        return {
            showDialog: (cardRect: DOMRect, project: Project) => {
                if (!cardRect) {
                    console.log('No cardRect: ', cardRect);
                    return;
                }
                setCardRect(cardRect);
                setProject(project);
                setVisible(true);
            }
        }
    });

    useEffect(() => {
        runAnimation(() => {});
    }, [project]);

    function runAnimation (callback: () => void, reverse: boolean = false) {
        if (!(dialogRef.current && cardRect && overlayRef.current && cardThumbRef.current)) return;

        const dialog = dialogRef.current;

        const dialogRect = dialog.getBoundingClientRect();
        const overlayRect = overlayRef.current.getBoundingClientRect();
        const cardThumbRect = cardThumbRef.current.getBoundingClientRect();

        const dialogPosition = getDialogInitialPosition(overlayRect, cardRect, dialogRect);

        dialog.style.setProperty('top', `${dialogPosition.top}px`);
        dialog.style.setProperty('left', `${dialogPosition.left}px`);

        const transformDescriptor = getDialogTransformDescriptor(cardRect, dialogRect, cardThumbRect);

        const updateDialog = createOpenDialogFunction(dialog, transformDescriptor);
    
        animate(
            updateDialog,
            DURATION,
            TimingProgress.Linear,
            callback,
            reverse
        );
    }

    const createOpenDialogFunction = (
        dialog: HTMLDivElement,
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
        }

        return updateDialog;
    }

    function getDialogTransformDescriptor(
        cardRect: DOMRect,
        dialogRect: DOMRect,
        cardThumbRect: DOMRect): DialogTransformDescriptor {
            // * modal initial size to match the card's
            const initialScaleX = Math.round((cardRect.width / dialogRect.width) * 1000) / 1000;
            const initialScaleY = Math.round((cardRect.height / cardThumbRect.height) * 1000) / 1000;
            
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
        runAnimation(() => {
            setVisible(false)
            setProject(null);
        }, true);
    }

    return (
        <>
            {
                visible && createPortal(
                    <div ref={overlayRef} className="overlay" role="dialog" onPointerLeave={handlePointerLeave}>
                        <div ref={dialogRef} className="detailed-card">
                            <div ref={cardThumbRef} className="card-thumb-container">
                                {project && <CardThumb project={project} />}
                            </div>

                            <footer>
                                <div className="project-summary">
                                    <p className="project__title">{project?.title}</p>

                                    <Button type={ButtonType.PRIMARY} customClass="get-code">
                                        <CodeIcon height='1rem' width='1rem' />
                                    </Button>
                                </div>

                                <p className="project__description">{project?.description}</p>

                                <div className="tech-stack-list">
                                    <TagList items={project?.techStack || []} />
                                </div>
                            </footer>    
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    );
});