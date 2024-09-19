import { TechStack } from 'models/workInfo';
import './styles.css';

type TechStackTagProps = {
    techStack: TechStack
}

export function TechStackTag({ techStack }: TechStackTagProps) {
    return (
        <div className='tech-stack-tag'>
            <span>{techStack}</span>
        </div>       
    )
}