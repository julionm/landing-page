import { TechStack } from "./workInfo";

export type Project = {
    id: number,
    title: string,
    link: string,
    techStack: TechStack[],
    description: string
};
