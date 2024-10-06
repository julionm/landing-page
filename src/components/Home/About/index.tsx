import { Button, ButtonType } from 'components/common/Button';
import { LeetCodeIcon, LinkedInIcon, GithubIcon, BrazilFlagIcon } from 'assets/icons';
import './styles.css';
import { DownloadIcon } from 'assets/icons/Download';

/**
 * bullet points for my introduction:
 * - where I'm based
 * - years of experience
 * - languages I speak
 * - I sometimes upload things on codepen
 * - I sometimes do some leetcode to always stay sharp
 * 
 * actions on home page
 * - download resume
 * - linkedin
 * - github
 * - 
 */

const LINKEDIN = 'https://www.linkedin.com/in/julio-mirandola/';
const GITHUB = 'https://github.com/julionm';

export function About() {
    return (
        <div className='about'>
            <div className=''>
                <h1 className="name">Julio Negri</h1>
                <p className='position'>Full Stack Developer</p>
            </div>
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
        </div>
    )
}