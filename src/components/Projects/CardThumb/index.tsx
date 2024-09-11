import { Project } from "models/project"
import profilePhoto from 'assets/profile-image.jpeg';
import "./styles.css";

type CardThumbProps = {
    project: Project
}

// TODO: remove profilePhoto and use project.thumbnail instead

export function CardThumb({ project }: CardThumbProps) {
    return (
        <div className="thumbnail">
            <img src={profilePhoto} alt="" className='project-image'/>
        </div>
    )
}