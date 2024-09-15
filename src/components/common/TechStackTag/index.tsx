import { TechStack, techStackToIcon } from 'models/workInfo';
import './styles.css';

type TechStackTagProps = {
    techStack: TechStack
}

export function TechStackTag({ techStack }: TechStackTagProps) {

    const IconComponent = techStackToIcon[techStack];

    return (
        <div className='tech-stack-tag'>
            <div className='tag__icon'>
                <IconComponent />
            </div>
            <span>{techStack}</span>
        </div>       
    )
}