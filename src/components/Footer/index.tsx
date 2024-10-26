import { GithubIcon, LeetCodeIcon, LinkedInIcon } from "assets/icons";
import { useTranslation } from "react-i18next";
import "./styles.css";

const LINKEDIN = 'https://www.linkedin.com/in/julio-mirandola/';
const GITHUB = 'https://github.com/julionm';
const LEETCODE = 'https://leetcode.com/u/julionm/';


export function Footer () {

    const { t } = useTranslation();

    return (
        <footer>
            <div className="personal">
                <h3>Julio Negri</h3>
                <p className="position">{t("position.full_stack")}</p>
                <div className="media-list">
                    <a
                        href={LINKEDIN}
                        className='icon linkedin-button'
                        target='_blank'>
                        <LinkedInIcon />
                    </a>
                    <a
                        href={GITHUB}
                        className='icon github-button'
                        target='_blank'>
                        <GithubIcon />
                    </a>
                    <a
                        href={LEETCODE}
                        className='icon leetcode-button'
                        target='_blank'>
                        <LeetCodeIcon />
                    </a>
                </div>
            </div>
            
            <div className="link-list">
                <div className="set">
                    <a href="#homeSection">{t("header.home")}</a>
                    <a href="#experiencesSection">{t("header.experiences")}</a>
                    <a href="#projectsSection">{t("header.projects")}</a>
                </div>
                <div className="set">
                    <a href="#updatesSection">{t("header.updates")}</a>
                    <a href="#achievmentsSection">{t("header.achievments")}</a>
                </div>
            </div>
        </footer>
    )
}