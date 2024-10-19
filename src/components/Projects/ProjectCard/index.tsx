import { Project } from "models/project";
import { TagList } from "components/common/TagList";

import profileImage from 'assets/images/profile-image.jpeg';

import "./styles.css";

type ProjectCardProps = {
    project: Project,
    onClick: (project: Project) => void
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <figure className="project" onClick={() => onClick(project)} role="button">
            <img src={project.imageUrl || profileImage} alt="" />

            <figcaption>
                <h4>{project.title}</h4>

                <TagList items={project.techStack} />
            </figcaption>
        </figure>
    )
}