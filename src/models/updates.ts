export type Update = {
    id: number,
    title: string,
    time: Date, // timestamp
    shortDescription: string,
    type: UpdateType,
    actionUrl?: string
};

export enum UpdateType {
    Book = 'book',
    Certificate = 'certificate',
    Other = 'other',
    Article = 'article',
    LeetCode = 'leetcode'
};
