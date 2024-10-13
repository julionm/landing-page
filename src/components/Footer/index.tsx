import { GithubIcon, LeetCodeIcon, LinkedInIcon } from "assets/icons";
import "./styles.css";

const LINKEDIN = 'https://www.linkedin.com/in/julio-mirandola/';
const GITHUB = 'https://github.com/julionm';
const LEETCODE = 'https://leetcode.com/u/julionm/';


export function Footer () {
    return (
        <footer>
            <div className="personal">
                <h3>Julio Negri</h3>
                <p className="position">Full Stack Developer</p>
                <div className="media-list">
                    <a
                        href={LINKEDIN}
                        className='icon linkedin-button'
                        target='_blank'>
                        <LinkedInIcon />
                    </a>
                    <a
                        href={GITHUB}
                        className='icon github-button'
                        target='_blank'>
                        <GithubIcon />
                    </a>
                    <a
                        href={LEETCODE}
                        className='icon leetcode-button'
                        target='_blank'>
                        <LeetCodeIcon />
                    </a>
                </div>
            </div>
            
            <div className="link-list">
                <div className="set">
                    <a href="">Home</a>
                    <a href="">Experiences</a>
                    <a href="">Projects</a>
                </div>
                <div className="set">
                    <a href="">Updates</a>
                    <a href="">Memories</a>
                </div>
            </div>
        </footer>
    )
}