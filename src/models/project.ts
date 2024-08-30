import { TechStack } from "./workInfo";

export type Project = {
    id: number,
    title: String,
    link: String,
    techStack: TechStack[],
    description: String
};