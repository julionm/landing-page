import { Update, UpdateType } from 'models/updates';
import { UpdateEntry } from './UpdateEntry';
import './styles.css';

const UPDATES: Update[] = [
    {
        id: 4,
        title: '[Book] Started Four Thousand Weeks - Oliver Burkeman',
        shortDescription: 'It gave me a new perspective on time management.',
        time: new Date(2024, 9, 17),
        type: UpdateType.Book
    },
    {
        id: 3,
        title: '[Book] Finished Domain Driven Design',
        shortDescription: 'An amazing book to understand more about models.',
        time: new Date(2024, 8, 25),
        type: UpdateType.Book,
        actionUrl: "https://www.linkedin.com/posts/julio-mirandola_just-finished-reading-domain-driven-design-activity-7237404603267338241-sUyH"
    },
    {
        id: 2,
        title: "[Udemy Course] JavaScript Unit Testing",
        shortDescription: "Finished this cool introductory course to testing with JS.",
        time: new Date(2024, 7, 3),
        type: UpdateType.Certificate,
        actionUrl: "https://www.linkedin.com/posts/julio-mirandola_meu-certificado-de-conclus%C3%A3o-do-curso-javascript-activity-7225605919689084928-FagS"
    },
    {
        id: 1,
        title: '[LeetCode] 841. Keys and Rooms - DFS Solution ',
        shortDescription: 'My resolution to a LeetCode problem.',
        time: new Date(2024,3,27),
        type: UpdateType.LeetCode,
        actionUrl: "https://leetcode.com/problems/keys-and-rooms/solutions/5078983/javascript-dfs/"
    },
];

export function Updates () {
    return (
        <section id="updatesSection" className='updates'>
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