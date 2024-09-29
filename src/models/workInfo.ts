export type WorkDetails = {
    companyName: string,
    description: string,
    position: string,
    techStack: string[],
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
    Angular = 'angular',
    CSS = 'css',
    HTML = 'html',
    JavaScript = 'javascript'
}
