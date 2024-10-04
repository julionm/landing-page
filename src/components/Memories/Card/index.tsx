import { forwardRef } from 'react';
import { CardThumb } from '../CardThumb';
import './styles.css';

type CardProps = {
    imageUrl: string
}

export const Card = forwardRef<HTMLDivElement | null, CardProps>(({ imageUrl }: CardProps, ref) => {
    return (
        <div
            ref={ref}
            className='card-container'>
            <CardThumb imageUrl={imageUrl} />
        </div>
    )
});