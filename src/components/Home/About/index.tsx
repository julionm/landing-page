import { BrazilFlagIcon } from 'assets/icons/BrazilFlag';
import { GithubIcon } from 'assets/icons/contact/GithubIcon';
import { LinkedInIcon } from 'assets/icons/contact/LinkedInIcon';
import { Button, ButtonType } from 'components/common/Button';
import './styles.css';

export function About() {
    return (
        <div className='about'>
            <p>Hi! I'm</p>
            <p className="about__name">
                <span className='highlight-text'>J</span>ulio <span className="highlight-text">N</span>egri
            </p>
            <p>I'm a Full Stack Developer.</p>
            <p>I'm 23 years old and I live in Brazil <BrazilFlagIcon />.</p>

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