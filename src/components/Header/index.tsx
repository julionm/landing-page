import './styles.css';

export function Header () {
    return (
        <header>
            <nav>
                <a className='active'>Home</a>
                <a>Past Experiences</a>
                <a>Projects</a>
                <a>Contact</a>
                <a>Updates</a>
            </nav>
        </header>
    );
}