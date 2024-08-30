import { AngularIcon } from "assets/icons/techStack/Angular"
import { JQueryIcon } from "assets/icons/techStack/JQueryIcon"
import { LaravelIcon } from "assets/icons/techStack/LaravelIcon"
import { MySQLIcon } from "assets/icons/techStack/MySQLIcon"
import { PostgreSQLIcon } from "assets/icons/techStack/PostgreSQLIcon"
import { ReactIcon } from "assets/icons/techStack/ReactIcon"
import { SpringIcon } from "assets/icons/techStack/Spring"
import { TailwindIcon } from "assets/icons/techStack/TailwindIcon"
import { TypeScriptIcon } from "assets/icons/techStack/TypeScriptIcon"
import { ReactElement } from "react"

export type WorkDetails = {
    companyName: string,
    description: string,
    position: string,
    techStack: TechStack[],
    start: Date,
    end: Date
}

export enum TechStack {
    React = 'react',
    Laravel = 'laravel',
    Tailwind = 'tailwind',
    JQuery = 'jquery',
    TypeScript = 'typescript',
    MySQL = 'mysql',
    PostgreSQL = 'postgres',
    Spring = 'spring',
    Angular = 'angular'
}

export const techStackToIcon: Record<TechStack, () => ReactElement> = {
    [TechStack.React]: ReactIcon,
    [TechStack.Laravel]: LaravelIcon,
    [TechStack.TypeScript]: TypeScriptIcon,
    [TechStack.Tailwind]: TailwindIcon,
    [TechStack.JQuery]: JQueryIcon,
    [TechStack.MySQL]: MySQLIcon,
    [TechStack.PostgreSQL]: PostgreSQLIcon,
    [TechStack.Spring]: SpringIcon,
    [TechStack.Angular]: AngularIcon
}
