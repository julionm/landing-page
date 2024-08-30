import { Project } from 'models/project';
import './styles.css';

type ProjectCardProps = {
    project: Project
}

export function ProjectCard ({ project }: ProjectCardProps) {
    return (
        <div className='card-container'>
            <img src="" alt="" />

            <footer>

            </footer>
        </div>
    )
}