import { useRef } from "react";
import { Project } from "models/project";
import { TechStack } from "models/workInfo";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";

import './styles.css';
import { useTranslation } from "react-i18next";

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "projects.pairs_game.title",
        description: "projects.pairs_game.description",
        sourceCodeUrl: "https://github.com/julionm/pairs-game",
        techStack: [TechStack.React, TechStack.Tailwind],
        imageUrl: ''
    },
    {
        id: 2,
        title: "projects.rust_studies.title",
        description: "projects.rust_studies.description",
        sourceCodeUrl: "https://github.com/julionm/rust-studies",
        techStack: [TechStack.Rust],
        imageUrl: ''
    },
    {
        id: 3,
        title: "projects.landing_page.title",
        description: "projects.landing_page.description",
        sourceCodeUrl: "https://github.com/julionm/landing-page",
        techStack: [TechStack.React],
        imageUrl: ''
    },
    {
        id: 4,
        title: "projects.tulitip.title",
        description: "projects.tulitip.description",
        sourceCodeUrl: "https://github.com/julionm/tulitip",
        techStack: [TechStack.React],
        imageUrl: ''
    },
    {
        id: 5,
        title: "projects.simple_dashboard.title",
        description: "projects.simple_dashboard.description",
        sourceCodeUrl: "https://codepen.io/julionm/pen/GRMbmdg",
        techStack: [TechStack.CSS, TechStack.HTML],
        imageUrl: ''
    },
    {
        id: 6,
        title: "projects.flipping_cards.title",
        description: "projects.flipping_cards.description",
        sourceCodeUrl: "https://codepen.io/julionm/pen/jORpYbO",
        techStack: [TechStack.CSS, TechStack.HTML, TechStack.JavaScript],
        imageUrl: ''
    }
];

export function ProjectsPage () {

    const { t } = useTranslation();

    const dialogRef = useRef<{ showDialog: (project: Project) => void }>();

    function updateDialog (project: Project) {
        dialogRef.current?.showDialog(project);
    }

    return (
        <section id="projectsSection" className="projects">
            <h2>&#x2192; {t("projects.title")}</h2>

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