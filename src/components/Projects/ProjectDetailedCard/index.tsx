import { Project } from "models/project";
import './styles.css';
import { TechStackList } from "components/common/TechStackList";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import profilePhoto from 'assets/profile-image.jpeg';


type ProjectDetailedCardProps = {
    project: Project,
    callback: () => void,
    cardRef: React.RefObject<HTMLDivElement>,
    visible: boolean
}

/**
 * Animate the footer to change its opacity
 */

export function ProjectDetailedCard ({ project, callback, cardRef, visible }: ProjectDetailedCardProps) {

    const dialogRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const zero = useRef(document.timeline.currentTime?.valueOf());

    const startAnimation = () => {
        zero.current = document.timeline.currentTime;
        zero.current = document.timeline.currentTime;
        const a = document.timeline.currentTime;
        a?.valueOf
        requestAnimationFrame(animate);
    }

    const animate = (timestamp: number) => {
        if (zero.current) {
            console.log(zero.current);
            console.log(typeof zero.current);
            console.log(timestamp);
            console.log(typeof timestamp);
            // const value = (timestamp - initialTime) / duration;
        }
        // scaleX(1) scaleY(1) translateY(-16px);
        // * style for detailed-card => scaleX() scaleY() translateY()
    };

    useEffect(() => {
        if (visible) {
            if (dialogRef.current && cardRef.current && overlayRef.current) {
                const overlayRect = overlayRef.current.getBoundingClientRect();
                const cardRect = cardRef.current.getBoundingClientRect();
                const dialogRect = dialogRef.current.getBoundingClientRect();

                const dialogTop = Math.abs(overlayRect.top) + cardRect.top;
                const dialogLeft = cardRect.left - (dialogRect.width - cardRect.width) / 2;

                dialogRef.current.setAttribute('style', `top: ${dialogTop}px; left: ${dialogLeft}px;`); 

                startAnimation();
            }
        }
    }, [visible])

    return (
        <>
            {
                visible && createPortal(
                    <div ref={overlayRef} className="overlay" role="dialog" onPointerLeave={callback}>
                        <div ref={dialogRef} className="detailed-card">
                            <img src={profilePhoto} alt="" className='project-image'/>
            
                            <footer>
                                <div className="project-summary">
                                    <p>{project.title}</p>
            
                                    <div className="tech-stack">
                                        <TechStackList items={project.techStack} />
                                    </div>
                                </div>
                                <p>
                                    {project.description}
                                </p>
                            </footer>
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    );
}