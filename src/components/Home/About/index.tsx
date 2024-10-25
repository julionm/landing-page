import { Button, ButtonType } from 'components/common/Button';
import { LeetCodeIcon, LinkedInIcon, GithubIcon, BrazilFlagIcon, DownloadIcon } from 'assets/icons';
import { useTranslation } from 'react-i18next';
import './styles.css';

const LINKEDIN = 'https://www.linkedin.com/in/julio-mirandola/';
const GITHUB = 'https://github.com/julionm';
const LEETCODE = 'https://leetcode.com/u/julionm/';

export function About() {
    const { t } = useTranslation("translation", { keyPrefix: "home" });

    return (
        <section className='about'>
            <header>
                <h1 className="name">Julio Negri</h1>
                <p className='position'>{t("position")}</p>
            </header>
            <div className='about__intro'>
                <p>{t("about.age_and_location")} <BrazilFlagIcon />.</p>
                <p>{t("about.work_duration")}</p>
                <p>{t("about.download_resume")}</p>
            </div>
            
            <p className='email'>
                {t("my-email")}:&nbsp;&nbsp; <span className='email-highlight'>julionm60@gmail.com</span>
            </p>

            <div className='about__actions'>
                <Button type={ButtonType.PRIMARY} onClick={() => console.log('teste')}>
                    <span>{t("download_resume")}</span><DownloadIcon className='icon' />
                </Button>

                <div className='my-links'>
                    <a
                        href={LINKEDIN}
                        className='linkedin-button'
                        target='_blank'>
                        <LinkedInIcon />
                    </a>
                    <a
                        href={GITHUB}
                        className='github-button'
                        target='_blank'>
                        <GithubIcon />
                    </a>
                    <a
                        href={LEETCODE}
                        className='leetcode-button'
                        target='_blank'>
                        <LeetCodeIcon />
                    </a>
                </div>
            </div>
        </section>
    )
}