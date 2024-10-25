import { Update, UpdateType } from 'models/updates';
import { UpdateEntry } from './UpdateEntry';
import './styles.css';
import { useTranslation } from 'react-i18next';

const UPDATES: Update[] = [
    {
        id: 4,
        title: 'updates.thousand_weeks.title',
        shortDescription: 'updates.thousand_weeks.description',
        time: new Date(2024, 9, 17),
        type: UpdateType.Book
    },
    {
        id: 3,
        title: 'updates.book_ddd.title',
        shortDescription: 'updates.book_ddd.description',
        time: new Date(2024, 8, 25),
        type: UpdateType.Book,
        actionUrl: "https://www.linkedin.com/posts/julio-mirandola_just-finished-reading-domain-driven-design-activity-7237404603267338241-sUyH"
    },
    {
        id: 2,
        title: "updates.course_js_tdd.title",
        shortDescription: "updates.course_js_tdd.description",
        time: new Date(2024, 7, 3),
        type: UpdateType.Certificate,
        actionUrl: "https://www.linkedin.com/posts/julio-mirandola_meu-certificado-de-conclus%C3%A3o-do-curso-javascript-activity-7225605919689084928-FagS"
    },
    {
        id: 1,
        title: 'updates.keys_and_rooms.title',
        shortDescription: 'updates.keys_and_rooms.description',
        time: new Date(2024,3,27),
        type: UpdateType.LeetCode,
        actionUrl: "https://leetcode.com/problems/keys-and-rooms/solutions/5078983/javascript-dfs/"
    },
];

export function Updates () {

    const { t } = useTranslation();

    return (
        <section id="updatesSection" className='updates'>
            <h2 className='title'>&#x2192; {t("updates.title")}</h2>
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