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
                        target='_blank'
                        aria-label={t("accessibility.social_media", { name: "LinkedIn" })}>
                        <LinkedInIcon />
                    </a>
                    <a
                        href={GITHUB}
                        className='icon github-button'
                        target='_blank'
                        aria-label={t("accessibility.social_media", { name: "GitHub" })}>
                        <GithubIcon />
                    </a>
                    <a
                        href={LEETCODE}
                        className='icon leetcode-button'
                        target='_blank'
                        aria-label={t("accessibility.social_media", { name: "LeetCode" })}>
                        <LeetCodeIcon />
                    </a>
                </div>
            </div>
            
            <div className="link-list">
                <div className="set">
                    <a href="#homeSection" aria-label={t("accessibility.link_label", { name: t("header.home") })}>{t("header.home")}</a>
                    <a href="#experiencesSection" aria-label={t("accessibility.link_label", { name: t("header.experiences") })}>{t("header.experiences")}</a>
                    <a href="#projectsSection" aria-label={t("accessibility.link_label", { name: t("header.projects") })}>{t("header.projects")}</a>
                </div>
                <div className="set">
                    <a href="#updatesSection" aria-label={t("accessibility.link_label", { name: t("header.updates") })}>{t("header.updates")}</a>
                    <a href="#achievmentsSection" aria-label={t("accessibility.link_label", { name: t("header.achievments") })}>{t("header.achievments")}</a>
                </div>
            </div>
        </footer>
    )
}