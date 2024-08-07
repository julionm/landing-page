import profilePhoto from 'assets/profile-image.jpeg';
import './styles.css';
import { BrazilFlagIcon } from 'assets/icons/BrazilFlag';

export function HomePage () {
    return (
        <section className="home-container">
            <div className='presentation'>
                <div className='profile-description'>
                    <p>Hi, I'm</p>
                    <p className="name">
                        <span className='highlight-letter'>J</span>ulio <span className="highlight-letter">N</span>egri
                    </p>
                    <p>I'm a <span className='position-highlight'>Software Developer</span>.</p>
                    <p>I'm 23 years old and I live in Brazil <BrazilFlagIcon />.</p>
                </div>
                <img
                    src={profilePhoto}
                    alt="Profile Photo of Julio Negri crossing his arms."
                    className='profile-photo' />
            </div>
        </section>
    )
}