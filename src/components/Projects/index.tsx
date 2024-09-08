import { Project } from 'models/project';
import { TechStack } from 'models/workInfo';
import { ProjectCard } from './ProjectCard';
import './styles.css';
import { ProjectDetailedCard } from './ProjectDetailedCard';
import { PointerEventHandler, useRef, useState } from 'react';

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Pairs Game",
        description: "A simple game to find matching pairs. Good to study japanese",
        link: "https://github.com/julionm/pairs-game",
        techStack: [TechStack.React, TechStack.Tailwind]
    },
    {
        id: 2,
        title: "Rust Studies",
        description: "Notes I took while reading The Rust Programming Language.",
        link: "https://github.com/julionm/rust-studies",
        techStack: []
    },
    {
        id: 3,
        title: "Landing Page",
        description: "This page's code",
        link: "https://github.com/julionm/landing-page",
        techStack: [TechStack.React]
    },
    {
        id: 4,
        title: "Tulitip",
        description: "Simple reusable tooltip component.",
        link: "https://github.com/julionm/tulitip",
        techStack: [TechStack.React]
    }
];

type ProjectDetailsProps = {
    cardRect?: DOMRect,
    project?: Project
}

export function ProjectsPage () {

    const [showDetailed, setShowDetailed] = useState(false);
    const [projectDetailsProps, setProjectDetailsProps] = useState<ProjectDetailsProps>({});

    const cardRefList = useRef<Record<number, HTMLDivElement>>({});

    const handleDetailedCard = (project: Project) => {
        const newProjectDetailsProps: ProjectDetailsProps = {
            project,
            cardRect: cardRefList.current[project.id].getBoundingClientRect()
        }

        setTimeout(() => {
            setProjectDetailsProps(newProjectDetailsProps);
            setShowDetailed(true);
        }, 450)
    }

    const hideDetailsModal = () => {
        setShowDetailed(false);
    };

    return (
        <>
            <section className="projects-page">
                <h2 className='title'>Projects</h2>

                <div className='project-list'>
                    {
                        PROJECTS.map((project: Project) => (
                            <div key={project.id} onPointerEnter={() => handleDetailedCard(project)}>
                                <ProjectCard
                                    ref={(el: HTMLDivElement) => cardRefList.current[project.id] = el}
                                    project={project} />
                            </div>
                        ))
                    }
                </div>
            </section>

            <ProjectDetailedCard
                    visible={showDetailed}
                    cardRect={projectDetailsProps.cardRect}
                    project={projectDetailsProps.project}
                    callback={hideDetailsModal} />
        </>
    )
}