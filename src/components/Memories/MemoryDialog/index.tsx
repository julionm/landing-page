import { forwardRef, memo, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { TimingProgress, animate } from "utils/animation";
import { CardThumb } from "../CardThumb";
import { Memory, MemoryDialogRef } from "models/memory";

import './styles.css';
import { formatNumericDate } from "utils/date-formatter";

const DURATION = 100;

type DialogPosition = { top: number, left: number };

type DialogTransformDescriptor = {
    initialScaleX: number,
    initialScaleY: number,
    finalTranslateY: number
}

// TODO: refact the callback style

export const MemoryDialog = forwardRef<MemoryDialogRef, any>((_, ref) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [cardRect, setCardRect] = useState<DOMRect>();
    const [memory, setMemory] = useState<Memory | null>();

    const dialogRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const cardThumbRef = useRef<HTMLDivElement>(null);

    const formattedDate = useMemo(() => {
        if (memory?.date) {
            return formatNumericDate(memory?.date);
        }

        return '';
    }, [memory]);

    useImperativeHandle(ref, () => {
        return {
            showDialog: (cardRect: DOMRect, memory: Memory) => {
                if (!cardRect) {
                    console.log('No cardRect: ', cardRect);
                    return;
                }
                setCardRect(cardRect);
                setMemory(memory);
                setVisible(true);
            }
        }
    });

    useEffect(() => {
        runAnimation(() => {});
    }, [memory]);

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
            setMemory(null);
        }, true);
    }

    return (
        <>
            {
                visible && createPortal(
                    <div ref={overlayRef} className="overlay" role="dialog" onPointerLeave={handlePointerLeave}>
                        <div ref={dialogRef} className="detailed-card">
                            <div ref={cardThumbRef} className="card-thumb-container">
                                {memory && <CardThumb imageUrl={memory.imageUrl} />}
                            </div>

                            <footer>
                                <div className="memory-summary">
                                    <p className="memory__title">{memory?.title}</p>

                                    <p>{formattedDate}</p>
                                </div>

                                { memory?.description && <p className="memory__description">{memory.description}</p> }
                            </footer>    
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    );
});