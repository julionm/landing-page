import { Update, UpdateType } from 'models/updates';
import { UpdateEntry } from './UpdateEntry';
import './styles.css';

const UPDATES: Update[] = [
    {
        id: 5,
        title: 'Started a new position as Web Analytics Engineer',
        shortDescription: 'I switched to a new role to learn more about web analytics',
        description: '',
        time: new Date(),
        type: UpdateType.Other
    },
    {
        id: 4,
        title: 'Started Reading Color Psychology by Eva Heller',
        shortDescription: 'I found the cover really captivating and bought to read it.',
        description: '',
        time: new Date(),
        type: UpdateType.Book
    },
    {
        id: 3,
        title: 'Finished reading Domain Driven Design by Eric Evans',
        shortDescription: 'This book opened my mind to how much communication is important.',
        description: '',
        time: new Date(),
        type: UpdateType.Book
    },
    {
        id: 2,
        title: "Enrolled on Kevin Powell's CSS Demystified",
        shortDescription: "I've been following Kevin's work for a long time, this is awesome!",
        description: '',
        time: new Date(),
        type: UpdateType.Certificate
    },
    {
        id: 1,
        title: 'How Flowers to Algernon broke me',
        shortDescription: 'Such an amazing book. It caused me all different feelings possible.',
        description: '',
        time: new Date(),
        type: UpdateType.Article
    },
];

export function Updates () {
    return (
        <section className='updates'>
            <h2 className='title'>&#x2192; Last Updates</h2>
            <div className='updates__list'>
                {
                    UPDATES.map(update => (
                        <UpdateEntry key={update.id} update={update} />
                    ))
                }
            </div>
        </section>
    )
}