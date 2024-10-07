import { About } from './About';
import profilePhoto from 'assets/profile-image.jpeg';
import './styles.css';

export function HomePage() {
    return (
        <section className="home" role='banner'>
            <div className='home__container'>
                <div className='home__presentation'>
                    <About />
                    <img
                        src={profilePhoto}
                        alt="Profile Photo of Julio Negri crossing his arms."
                        className='profile-photo' />
                </div>
            </div>
        </section>
    )
}