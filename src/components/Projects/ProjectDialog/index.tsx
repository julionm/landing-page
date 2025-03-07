import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Project } from "models/project";
import { CloseIcon } from "assets/icons/Close";
import { Button, ButtonStyle } from "components/common/Button";
import { ArrowExternalIcon } from "assets/icons";
import { useTranslation } from "react-i18next";

import profilePhoto from "assets/images/profile-image.jpeg";

import "./styles.css";

export const ProjectDialog = forwardRef(
    (_, ref) => {

        const { t } = useTranslation();

        const [project, setProject] = useState<Project>();
        
        const modalRef = useRef<HTMLDialogElement>(null)

        useEffect(() => {
            if (project && modalRef.current) {
                modalRef.current.showModal();
            }
        }, [project]);

        useImperativeHandle(ref, () => {
            return {
                showDialog: (newProject: Project) => {
                    setProject(newProject);
                }
            }
        })

        function closeDialog () {
            if (!modalRef.current) return;

            const keyframes: Keyframe[] = [
                {transform: "translateY(0)", opacity: 1},
                {transform: "translateY(-100%)", opacity: 0}
            ];

            const options: KeyframeAnimationOptions = {
                duration: 250,
            }

            modalRef.current.animate(keyframes, options);

            setTimeout(() => {
                if (modalRef.current) modalRef.current.close();
                setProject(undefined);
            }, 200);
        }

        return (
            <dialog onClose={closeDialog} className="project-dialog" ref={modalRef}>
                <header>
                    <h3>{t(project?.title || '')}</h3>
                    <CloseIcon className="close-icon" onClick={closeDialog} />
                </header>

                <div className="separator"></div>

                <div className="image-container">
                    <img src={project?.imageUrl || profilePhoto} alt="" />
                </div>
                
                <p className="description">{t(project?.description || '')}</p>

                <section className="actions">
                    {
                        project?.sourceCodeUrl && (
                            <Button
                                href={project.sourceCodeUrl}
                                aria-label={t("accessibility.project_link", { name: t(project.title) })}
                            >
                                {t("projects.source")}
                            </Button>
                        )
                    }
                    {
                        project?.publishedUrl && (
                            <Button
                                btnStyle={ButtonStyle.PRIMARY}
                                href={project.publishedUrl}
                                aria-label={t("accessibility.project_published_link", { name: t(project.title) })}
                            >
                                <span>{t("projects.visit")}</span> <ArrowExternalIcon className="icon" />
                            </Button>
                        )
                    }
                </section>
            </dialog>
        )
    }
)