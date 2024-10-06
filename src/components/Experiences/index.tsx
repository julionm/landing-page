import { TechStack, WorkDetails } from 'models/workInfo';
import { WorkInfo } from './WorkInfo';
import './styles.css';

const workExperiences: WorkDetails[] = [
    {
        companyName: 'Up Outsourcing',
        description: "I've worked in a range of different projects, all of them using PHP for Back-End and in some cases in Front End too. I earned a lot of experience on customer service. I'm still striving to learn lots of new stuff to help on our current project.",
        position: 'Full Stack Developer',
        techStack: [TechStack.Laravel, TechStack.Tailwind, TechStack.React, TechStack.JQuery, TechStack.MySQL],
        start: new Date(2022, 3, 11),
        end: new Date()
    },
    {
        companyName: 'ViewB',
        description: "Worked with a BI product that allowed users to create dashboards and create presentations. I maintained the software end-to-end using Angular, Spring and Postgres. I also supported the company infrastructure and clients.",
        position: 'Full Stack Developer',
        techStack: [TechStack.Spring, TechStack.Angular, TechStack.PostgreSQL],
        start: new Date(2018, 5, 16),
        end: new Date(2022, 3, 11)
    }
]

export function ExperiencesPage () {

    return (
        <section className='experiences'>

            <div className='header'>
                <h2 className='title'>Experiences</h2>
                <p className='text'>
                    I've had the opportunity to meet great coworkers along my experiences and to work on a variety of different projects.
                </p>
            </div>

            <div className='work-list'>
                {
                    workExperiences.map(workExperience => (
                        <WorkInfo key={workExperience.companyName} workDetails={workExperience} />
                    ))
                } 
            </div>

        </section>
    )
}