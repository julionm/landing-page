export type Memory = {
    id: number,
    imageUrl?: string,
    title: string,
    description?: string,
    date?: Date
};


export type MemoryDialogRef = {
    showDialog: (cardRect: DOMRect, memory: Memory) => void
}