import { TechStack } from "./workInfo";

export type Project = {
    id: number,
    title: string,
    sourceCodeUrl: string,
    techStack: TechStack[],
    description: string,
    imageUrl: string,
    startDate?: Date,
    endDate?: Date,
    metrics?: ProjectMetric[],
    publishedUrl?: string
};

export type ProjectMetric = {
    name: string,
    value: number,
    units: string    
}