export type WorkDetails = {
    companyName: string,
    description: string,
    start: Date,
    end: Date,
    logoUrl?: string
    positions: Position[]
}

export type Position = {
    title: string,
    description: string,
    start: Date,
    end?: Date,
    techStack: TechStack[]
}

export enum TechStack {
    React = 'react',
    ReactNative = 'React Native',
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
    JavaScript = 'javascript',
    Rust = 'rust',
    Linux = 'linux',
    StyledComponents = "styled components",
    Redux = "redux",
    PHP = "PHP",
    TagManager = "Google Tag Manager",
    GA4 = "Google Analytics 4",
    Bloomreach = "bloomreach"
}
