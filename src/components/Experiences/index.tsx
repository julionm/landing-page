import { TechStack, WorkDetails } from 'models/workInfo';
import { WorkInfo } from './WorkInfo';
import './styles.css';

import UpOutsourcingLogo from "assets/images/upoutsourcing_logo.jpeg";
import ViewBLogo from "assets/images/viewb_logo.jpeg";

const workExperiences: WorkDetails[] = [
    {
        companyName: 'Up Outsourcing',
        description: "I've worked in a range of different projects, all of them using PHP for Back-End and in some cases in Front End too. I earned a lot of experience on customer service. I'm still striving to learn lots of new stuff to help on our current project.",
        start: new Date(2022, 3, 11),
        end: new Date(),
        logoUrl: UpOutsourcingLogo,
        positions: [
            {
                title: "Web Analytics Engineer",
                description: "I accepted a new challenge to work as a Web Analytics Engineer for a big project and it has been really fun! Understanding deeply how to track user information and turn raw data into valuable information to support our executives, it's really nice!",
                techStack: [TechStack.GA4, TechStack.TagManager, TechStack.Bloomreach],
                start: new Date(2024, 8, 27),
            },
            {
                title: "Full Stack Developer",
                description: "I spent some time working on a couple of different projects using mostly PHP. One to help real estate agents with their social media and other shorter projects.",
                techStack: [TechStack.Laravel, TechStack.Tailwind, TechStack.JQuery, TechStack.PHP],
                start: new Date(2023, 6, 2),
                end: new Date(2024, 8, 26)
            },
            {
                title: "Front End Developer",
                description: "I worked on the Front End and Mobile softwares, it was relly nice to finally gain some experience using React professionally. It is a nice project to offer a better communication for workers on construction sites.",
                techStack: [TechStack.React, TechStack.ReactNative, TechStack.StyledComponents, TechStack.Redux],
                start: new Date(2022, 3, 12),
                end: new Date(2023, 6, 1)
            }
        ]
    },
    {
        companyName: 'ViewB',
        description: "Worked with a BI product that allowed users to create dashboards and create presentations. I maintained the software end-to-end using Angular, Spring and Postgres. I also supported the company infrastructure and clients.",
        start: new Date(2018, 5, 16),
        end: new Date(2022, 3, 11),
        logoUrl: ViewBLogo,
        positions: [
            {
                title: "Full Stack Developer",
                description: "By the time I was promoted the second time, I was already working on client's infrastructure, offering support for them and I had already tackled almost every part of their software.",
                techStack: [TechStack.Angular, TechStack.Spring, TechStack.Linux],
                start: new Date(2021, 2, 1),
                end: new Date(2022, 3, 11)
            },
            {
                title: "Junior Full Stack Developer",
                description: "I was promoted to Junior after a thorough study of the company's software. New responsibilities were assigned to me and I got used ",
                techStack: [TechStack.Angular, TechStack.Spring],
                start: new Date(2019, 8, 10),
                end: new Date(2021, 2, 1)
            },
            {
                title: "Intern",
                description: "I started my journey as a programmer here, learning the very basics of Spring Boot and Angular.",
                techStack: [TechStack.Angular, TechStack.Spring],
                start: new Date(2018, 5, 16),
                end: new Date(2019, 1, 10)
            },
        ]
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
                        <WorkInfo key={workExperience.companyName} work={workExperience} />
                    ))
                } 
            </div>

        </section>
    )
}