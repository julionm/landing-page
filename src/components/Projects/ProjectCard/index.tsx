import { Project } from 'models/project';
import { CodeIcon } from 'assets/icons/CodeIcon';
import { useRef, useState } from 'react';
import profilePhoto from 'assets/profile-image.jpeg';
import { ProjectDetailedCard } from '../ProjectDetailedCard';
import './styles.css';

type ProjectCardProps = {
    project: Project
}

export function ProjectCard ({ project }: ProjectCardProps) {
    
    const [showDetailed, setShowDetailed] = useState(false);

    const cardContainer = useRef<HTMLDivElement | null>(null);

    const handlePointerEnter = () => setShowDetailed(true);
    
    return (
        <>
            <div
                ref={cardContainer}
                className='card-container'
                onPointerEnter={handlePointerEnter}>
                <img src={profilePhoto} alt="" className='project-image'/>

                <footer>
                    <p>{project.title}</p>
                    <a href={project.link} target='_blank'>
                        <CodeIcon height='1.5rem' width='1.5rem' />
                    </a>
                </footer>
            </div>

            <ProjectDetailedCard
                visible={showDetailed}
                cardRef={cardContainer}
                project={project}
                callback={() => setShowDetailed(false)} />
        </>
    )
}