import { About } from './About';
import profilePhoto from 'assets/images/profile-image.jpeg';
import './styles.css';

export function HomePage() {
    return (
        <section id="homeSection" className="home" role='banner'>
            <div className='home__presentation'>
                <About />
                <div className='profile-container'>
                    <svg width={0} height={0}>
                        <defs>
                            <clipPath id="avatarMask" clipPathUnits="objectBoundingBox">
                                <path d="M0.93,0.177 c-0.074,-0.118,-0.219,-0.177,-0.43,-0.177 h0 c-0.211,0,-0.356,0.06,-0.429,0.177 c-0.062,0.099,-0.07,0.224,-0.07,0.323 c0,0.098,0.008,0.224,0.07,0.323 c0.074,0.118,0.218,0.177,0.429,0.177 h0 c0.212,0,0.356,-0.06,0.43,-0.177 c0.062,-0.099,0.07,-0.224,0.07,-0.323 c0,-0.098,-0.008,-0.224,-0.07,-0.323 l0,0"></path>
                            </clipPath>
                        </defs>
                    </svg> 
                    <img
                        src={profilePhoto}
                        alt="Profile Photo of Julio Negri crossing his arms."
                        className='profile-photo'
                        style={{clipPath: 'url(#avatarMask)'}} />
                </div>
            </div>
        </section>
    )
}