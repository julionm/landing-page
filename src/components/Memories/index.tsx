import { useRef } from 'react';
import { Card } from './Card';
import { MemoryDialog } from './MemoryDialog';
import { Memory, MemoryDialogRef } from 'models/memory';

import './styles.css';

const MEMORIES: Memory[] = [
    {
        id: 1,
        imageUrl: undefined,
        title: 'Up Anniversary',
        description: "There's no easy way to describe how amazing the party was... You had to be there!",
        date: new Date()
    },
    {
        id: 2,
        imageUrl: undefined,
        title: 'Up Anniversary',
        description: "There's no easy way to describe how amazing the party was... You had to be there!",
        date: new Date()
    },
    {
        id: 3,
        imageUrl: undefined,
        title: 'Up Anniversary',
        description: "There's no easy way to describe how amazing the party was... You had to be there!",
        date: new Date()
    }
];

export function MemoriesPage () {

    const cardRefList = useRef<Record<number, HTMLDivElement>>({});
    const dialogRef = useRef<MemoryDialogRef>(null);

    const timeoutRef = useRef<number>();

    const handleDetailedCard = (memory: Memory) => {

        const cardRect = cardRefList.current[memory.id].getBoundingClientRect();

        timeoutRef.current = setTimeout(() => {
            if (dialogRef.current) {
                dialogRef.current.showDialog(cardRect, memory);
            }
        }, 400)
    }

    const handlePointerLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    return (
        <>
            <section className="memories">
                <h2 className='title'>Memories</h2>

                <div className='memories__list'>
                    {
                        MEMORIES.map((memory: Memory) => (
                            <div
                                key={memory.id}
                                onPointerEnter={() => handleDetailedCard(memory)}
                                onPointerLeave={handlePointerLeave}>
                                <Card
                                    ref={(el: HTMLDivElement) => cardRefList.current[memory.id] = el}
                                    imageUrl={memory.imageUrl} />
                            </div>
                        ))
                    }
                </div>
            </section>

            <MemoryDialog ref={dialogRef} />
        </>
    )
}