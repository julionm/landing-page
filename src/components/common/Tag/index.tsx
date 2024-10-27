import './styles.css';

type TagProps = {
    text: string
}

export function Tag({ text }: TagProps) {
    return (
        <div className='tech-stack-tag'>
            <span className='notranslation'>{text}</span>
        </div>       
    )
}