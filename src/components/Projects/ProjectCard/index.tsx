import { Project } from 'models/project';
import './styles.css';
import { forwardRef } from 'react';
import { CardThumb } from '../CardThumb';

type ProjectCardProps = {
    project: Project,
}

export const ProjectCard = forwardRef<HTMLDivElement | null, ProjectCardProps>(({ project }: ProjectCardProps, ref) => {
    return (
        <div
            ref={ref}
            className='card-container'>
            <CardThumb project={project} />
        </div>
    )
});