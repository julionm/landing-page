import { Button, ButtonType } from 'components/common/Button';
import { LeetCodeIcon, LinkedInIcon, GithubIcon, BrazilFlagIcon, DownloadIcon } from 'assets/icons';
import './styles.css';

const LINKEDIN = 'https://www.linkedin.com/in/julio-mirandola/';
const GITHUB = 'https://github.com/julionm';

export function About() {
    return (
        <section className='about'>
            <header>
                <h1 className="name">Julio Negri</h1>
                <p className='position'>Full Stack Developer</p>
            </header>
            <div className='about__intro'>
                <p>
                    I'm 23 years old and I'm based in Brazil <BrazilFlagIcon />.<br />
                    I've been working as a Full Stack Developer since 2018.<br />
                    Download my resume or check my accounts! 
                </p>
            </div>

            <div className='about__actions'>
                <Button type={ButtonType.PRIMARY}>
                    <span>Download Resume</span><DownloadIcon className='icon' />
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
                        href={GITHUB}
                        className='leetcode-button'
                        target='_blank'>
                        <LeetCodeIcon />
                    </a>
                </div>
            </div>
        </section>
    )
}