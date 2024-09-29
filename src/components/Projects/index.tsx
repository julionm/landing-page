import { useRef } from 'react';
import { Project, ProjectDialogRef } from 'models/project';
import { TechStack } from 'models/workInfo';
import { ProjectCard } from './ProjectCard';
import { ProjectDialog } from './ProjectDetailedCard';

import './styles.css';

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
    },
    {
        id: 5,
        title: "Simple Dashboard",
        description: "Using a dribbble layout as a base I made this simple dashboard using Glassmorphism technique. I really liked the result.",
        link: "https://codepen.io/julionm/pen/GRMbmdg",
        techStack: [TechStack.CSS, TechStack.HTML]
    },
    {
        id: 6,
        title: "Flipping Cards",
        description: "I saw a flipping card like this on a website and I decided to implement it myself. It was pretty fun to toy with the perspective CSS property.",
        link: "https://codepen.io/julionm/pen/jORpYbO",
        techStack: [TechStack.CSS, TechStack.HTML, TechStack.JavaScript]
    }
];

export function ProjectsPage () {

    const cardRefList = useRef<Record<number, HTMLDivElement>>({});
    const dialogRef = useRef<ProjectDialogRef>(null);

    const timeoutRef = useRef<number>();

    const handleDetailedCard = (project: Project) => {

        const cardRect = cardRefList.current[project.id].getBoundingClientRect();

        timeoutRef.current = setTimeout(() => {
            if (dialogRef.current) {
                dialogRef.current.showDialog(cardRect, project);
            }
        }, 400)
    }

    const handlePointerLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    return (
        <>
            <section className="projects-page">
                <h2 className='title'>Personal Projects</h2>

                <div className='project-list'>
                    {
                        PROJECTS.map((project: Project) => (
                            <div
                                key={project.id}
                                onPointerEnter={() => handleDetailedCard(project)}
                                onPointerLeave={handlePointerLeave}>
                                <ProjectCard
                                    ref={(el: HTMLDivElement) => cardRefList.current[project.id] = el}
                                    project={project} />
                            </div>
                        ))
                    }
                </div>
            </section>

            <ProjectDialog ref={dialogRef} />
        </>
    )
}