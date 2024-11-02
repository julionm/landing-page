import { Project } from "models/project";
import { TagList } from "components/common/TagList";

import profileImage from 'assets/images/profile-image.jpeg';

import "./styles.css";
import { useTranslation } from "react-i18next";

type ProjectCardProps = {
    project: Project,
    onClick: (project: Project) => void
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {

    const { t } = useTranslation();

    return (
        <figure className="project" onClick={() => onClick(project)} role="button">
            <img src={project.imageUrl || profileImage} alt="" />

            <figcaption>
                <h3>{t(project.title)}</h3>

                <TagList items={project.techStack} />
            </figcaption>
        </figure>
    )
}