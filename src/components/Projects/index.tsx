import { useRef } from "react";
import { Project } from "models/project";
import { TechStack } from "models/workInfo";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";

import './styles.css';

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Pairs Game",
        description: "A simple game to find matching pairs. Good to study japanese",
        sourceCodeUrl: "https://github.com/julionm/pairs-game",
        techStack: [TechStack.React, TechStack.Tailwind],
        imageUrl: ''
    },
    {
        id: 2,
        title: "Rust Studies",
        description: "Notes I took while reading The Rust Programming Language.",
        sourceCodeUrl: "https://github.com/julionm/rust-studies",
        techStack: [TechStack.Rust],
        imageUrl: ''
    },
    {
        id: 3,
        title: "Landing Page",
        description: "This page's code",
        sourceCodeUrl: "https://github.com/julionm/landing-page",
        techStack: [TechStack.React],
        imageUrl: ''
    },
    {
        id: 4,
        title: "Tulitip",
        description: "Simple reusable tooltip component.",
        sourceCodeUrl: "https://github.com/julionm/tulitip",
        techStack: [TechStack.React],
        imageUrl: ''
    },
    {
        id: 5,
        title: "Simple Dashboard",
        description: "Using a dribbble layout as a base I made this simple dashboard using Glassmorphism technique. I really liked the result.",
        sourceCodeUrl: "https://codepen.io/julionm/pen/GRMbmdg",
        techStack: [TechStack.CSS, TechStack.HTML],
        imageUrl: ''
    },
    {
        id: 6,
        title: "Flipping Cards",
        description: "I saw a flipping card like this on a website and I decided to implement it myself. It was pretty fun to toy with the perspective CSS property.",
        sourceCodeUrl: "https://codepen.io/julionm/pen/jORpYbO",
        techStack: [TechStack.CSS, TechStack.HTML, TechStack.JavaScript],
        imageUrl: ''
    }
];

export function ProjectsPage () {

    const dialogRef = useRef<{ showDialog: (project: Project) => void }>();

    function updateDialog (project: Project) {
        dialogRef.current?.showDialog(project);
    }

    return (
        <section className="projects">
            <h2>&#x2192; Projects</h2>

            <div className="list">
                {
                    PROJECTS.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={updateDialog} />
                    ))
                }
            </div>

            <ProjectDialog ref={dialogRef} />
        </section>
    )
}