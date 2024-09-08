import { Project } from "models/project"
import { CodeIcon } from 'assets/icons/CodeIcon';
import profilePhoto from 'assets/profile-image.jpeg';
import "./styles.css";

type CardThumbProps = {
    project: Project
}

export function CardThumb({ project }: CardThumbProps) {
    return (
        <div className="thumbnail">
            <img src={profilePhoto} alt="" className='project-image'/>

            <footer>
                <p>{project.title}</p>
                <a href={project.link} target='_blank'>
                    <CodeIcon height='1.5rem' width='1.5rem' />
                </a>
            </footer>            
        </div>
    )
}