export type Update = {
    id: number,
    title: string,
    time: string, // timestamp
    description: string,
    shortDescription: string,
    type: UpdateType
};

export enum UpdateType {
    Book = 'book',
    Certificate = 'certificate',
    Other = 'other',
    Article = 'article'
};
