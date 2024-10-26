import { TechStack, WorkDetails } from 'models/workInfo';
import { WorkInfo } from './WorkInfo';

import UpOutsourcingLogo from "assets/images/upoutsourcing_logo.jpeg";
import ViewBLogo from "assets/images/viewb_logo.jpeg";

import './styles.css';
import { useTranslation } from 'react-i18next';

const workExperiences: WorkDetails[] = [
    {
        companyName: 'Up Outsourcing',
        description: "experiences.up_outsourcing.description",
        start: new Date(2022, 3, 11),
        end: new Date(),
        logoUrl: UpOutsourcingLogo,
        positions: [
            {
                title: "position.web_analytics",
                description: "experiences.up_outsourcing.web_analytics_desc",
                techStack: [TechStack.GA4, TechStack.TagManager, TechStack.Bloomreach],
                start: new Date(2024, 8, 27),
            },
            {
                title: "position.full_stack",
                description: "experiences.up_outsourcing.full_stack_desc",
                techStack: [TechStack.Laravel, TechStack.Tailwind, TechStack.JQuery, TechStack.PHP],
                start: new Date(2023, 6, 2),
                end: new Date(2024, 8, 26)
            },
            {
                title: "position.front_end",
                description: "experiences.up_outsourcing.front_end_desc",
                techStack: [TechStack.React, TechStack.ReactNative, TechStack.StyledComponents, TechStack.Redux],
                start: new Date(2022, 3, 12),
                end: new Date(2023, 6, 1)
            }
        ]
    },
    {
        companyName: 'ViewB',
        description: "experiences.viewb.description",
        start: new Date(2018, 5, 16),
        end: new Date(2022, 3, 11),
        logoUrl: ViewBLogo,
        positions: [
            {
                title: "position.full_stack",
                description: "experiences.viewb.full_stack_desc",
                techStack: [TechStack.Angular, TechStack.Spring, TechStack.Linux],
                start: new Date(2021, 2, 1),
                end: new Date(2022, 3, 11)
            },
            {
                title: "position.junior_full_stack",
                description: "experiences.viewb.junior_full_stack_desc",
                techStack: [TechStack.Angular, TechStack.Spring],
                start: new Date(2019, 8, 10),
                end: new Date(2021, 2, 1)
            },
            {
                title: "position.intern",
                description: "experiences.viewb.intern_desc",
                techStack: [TechStack.Angular, TechStack.Spring],
                start: new Date(2018, 5, 16),
                end: new Date(2019, 1, 10)
            },
        ]
    }
]

export function ExperiencesPage () {

    const { t } = useTranslation();

    return (
        <section id="experiencesSection" className='experiences'>

            <h2 className='title'>&#x2192; {t("experiences.title")}</h2>

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