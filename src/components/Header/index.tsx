import { SwitchThemes } from "./SwitchThemes";
import "./styles.css";

export function Header() {
   return (
        <nav className="header">
            <ul>
                <li>
                    <a href="#homeSection" data-active>Home</a>
                </li>
                <li>
                    <a href="#experiencesSection">Experiences</a>
                </li>
                <li>
                    <a href="#projectsSection">Projects</a>
                </li>
                <li>
                    <a href="#updatesSection">Updates</a>
                </li>
                <li>
                    <a href="#achievmentsSection">Achievments</a>
                </li>
            </ul>

            <div className="header__actions">
                <SwitchThemes />
            </div>
        </nav>
   ) 
}