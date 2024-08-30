import { Project } from 'models/project';
import './styles.css';
import { TechStack } from 'models/workInfo';
import { ProjectCard } from './ProjectCard';

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

export function ProjectsPage () {
    return (
        <section className="projects-page">
            <h2 className='title'>Projects</h2>

            <div className='project-list'>
                {
                    PROJECTS.map((project: Project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
        </section>
    )
}