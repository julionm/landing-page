import profilePhoto from 'assets/images/profile-image.jpeg';
import "./styles.css";

type CardThumbProps = {
    imageUrl: string
}

export function CardThumb({ imageUrl }: CardThumbProps) {
    return (
        <div className="thumbnail">
            <img src={imageUrl || profilePhoto} alt="" className='project-image'/>
        </div>
    )
}