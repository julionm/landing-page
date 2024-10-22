import { About } from './About';
import profilePhoto from 'assets/images/profile-image.jpeg';
import './styles.css';

export function HomePage() {
    return (
        <section id="homeSection" className="home" role='banner'>
            <div className='home__presentation'>
                <About />
                <div className='profile-container'>
                    <img
                        src={profilePhoto}
                        alt="Profile Photo of Julio Negri crossing his arms."
                        className='profile-photo' />
                </div>
            </div>
        </section>
    )
}