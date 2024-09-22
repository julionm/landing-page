import { BrazilFlagIcon } from 'assets/icons/BrazilFlag';
import { GithubIcon } from 'assets/icons/contact/GithubIcon';
import { LinkedInIcon } from 'assets/icons/contact/LinkedInIcon';
import { Button, ButtonType } from 'components/common/Button';
import './styles.css';

/**
 * add some icon to each paragraph... I believe it'd be better to treat them as bullet points
 * not as paragraphs
 */

export function About() {
    return (
        <div className='about'>
            <div className=''>
                <p className="about__name">
                    <span className='highlight-text'>J</span>ulio <span className="highlight-text">N</span>egri
                </p>
                <p className='position'>Full Stack Developer</p>
            </div>
            <div className='about__intro'>
                <p>I'm a Full Stack Developer.</p>
                <p>I'm 23 years old and I live in Brazil <BrazilFlagIcon />.</p>
                <p>Working with software since 2018.</p>
            </div>

            <div className='about__actions'>
                <Button type={ButtonType.PRIMARY}>
                    <span>Download Resume</span>
                </Button>
                <Button customClass='linkedin-button'>
                    <LinkedInIcon />
                </Button>
                <Button customClass='github-button'>
                    <GithubIcon />
                </Button>
            </div>
        </div>
    )
}