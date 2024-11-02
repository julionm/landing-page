import { Button, ButtonStyle } from 'components/common/Button';
import { LeetCodeIcon, LinkedInIcon, GithubIcon, BrazilFlagIcon, DownloadIcon } from 'assets/icons';
import { useTranslation } from 'react-i18next';
import curriculum from "assets/curriculum.pdf";
import './styles.css';

const LINKEDIN = 'https://www.linkedin.com/in/julio-mirandola/';
const GITHUB = 'https://github.com/julionm';
const LEETCODE = 'https://leetcode.com/u/julionm/';

export function About() {
    const { t } = useTranslation("translation", { keyPrefix: "home" });

    return (
        <section className='about'>
            <header>
                <h1 className="name notranslate">Julio Negri</h1>
                <p className='position'>{t("position")}</p>
            </header>
            <div className='about__intro'>
                <p>{t("about.age_and_location")} <BrazilFlagIcon className='brazil-icon' />.</p>
                <p>{t("about.work_duration")}</p>
                <p>{t("about.download_resume")}</p>
            </div>
            
            <p className='email'>
                {t("my-email")}:&nbsp;&nbsp; <span className='email-highlight'>julionm60@gmail.com</span>
            </p>

            <div className='about__actions'>
                <a href={curriculum} download>
                    <Button btnStyle={ButtonStyle.PRIMARY}>
                        <span>{t("download_resume")}</span><DownloadIcon className='icon' />
                    </Button>
                </a>

                <div className='my-links'>
                    <a
                        href={LINKEDIN}
                        className='linkedin-button'
                        target='_blank'
                        aria-label={t("accessibility.social_media", { name: "LinkedIn" })}>
                        <LinkedInIcon />
                    </a>
                    <a
                        href={GITHUB}
                        className='github-button'
                        target='_blank'
                        aria-label={t("accessibility.social_media", { name: "LinkedIn" })}>
                        <GithubIcon />
                    </a>
                    <a
                        href={LEETCODE}
                        className='leetcode-button'
                        target='_blank'
                        aria-label={t("accessibility.social_media", { name: "LinkedIn" })}>
                        <LeetCodeIcon />
                    </a>
                </div>
            </div>
        </section>
    )
}