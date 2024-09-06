import profilePhoto from 'assets/profile-image.jpeg';
import { BrazilFlagIcon } from 'assets/icons/BrazilFlag';
import './styles.css';

export function HomePage () {
    return (
        <section className="home-container">
            <div className='container'>
                <div className='presentation'>
                    <div className='profile-description'>
                        <p>Hi! I'm</p>
                        <p className="name">
                            <span className='highlight-letter'>J</span>ulio <span className="highlight-letter">N</span>egri
                        </p>
                        <p>I'm a <span className='position-highlight'>Software Developer</span>.</p>
                        <p>I'm 23 years old and I live in Brazil <BrazilFlagIcon />.</p>
                        <p>I've built this to showcase my habilities and experiences.</p>
                        <p>Hope you like it!</p>
                    </div>
                    <img
                        src={profilePhoto}
                        alt="Profile Photo of Julio Negri crossing his arms."
                        className='profile-photo' />
                </div>
            </div>
        </section>
    )
}