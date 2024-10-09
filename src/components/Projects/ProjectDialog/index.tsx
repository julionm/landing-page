import { useEffect, useRef } from "react";
import { Project } from "models/project";
import { CloseIcon } from "assets/icons/Close";
import { Button, ButtonType } from "components/common/Button";
import { ArrowExternalIcon } from "assets/icons";

import profilePhoto from "assets/profile-image.jpeg";

import "./styles.css";

type ProjectDialogProps = {
    project: Project,
}

export function ProjectDialog({ project }: ProjectDialogProps) {

    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (project && modalRef.current) {
            modalRef.current.showModal();
        }
    }, [project]);

    function closeDialog () {
        if (!modalRef.current) return;

        const keyframes: Keyframe[] = [
            {transform: "translateY(0)", opacity: 1},
            {transform: "translateY(50%)", opacity: 0}
        ];

        const options: KeyframeAnimationOptions = {
            duration: 250,
        }

        modalRef.current.animate(keyframes, options);

        setTimeout(() => {
            if (modalRef.current) modalRef.current.close();
        }, 200);
    }

    return (
        <dialog className="project-dialog" ref={modalRef}>
            <header>
                <h3>{project.title}</h3>
                <CloseIcon className="close-icon" onClick={closeDialog} />
            </header>

            <div className="separator"></div>

            <div className="image-container">
                <img src={project.imageUrl || profilePhoto} alt="" />
            </div>
            
            <p className="description">{project.description}</p>

            <section className="actions">
                <Button>Cancel</Button>
                <Button>Source</Button>
                <Button type={ButtonType.PRIMARY}>
                    <span>Visit</span> <ArrowExternalIcon className="icon" />
                </Button>
            </section>
        </dialog>
    )
}