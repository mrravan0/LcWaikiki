import { useState } from 'react';
import HartIcon from '../../../Assets/Svg/HartIcon';
import './Card.scss';
const Card = ({ data }) => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <div className="card">
            <div className="card__wrapper">
                <img className='card__image' src={data.photo} alt="" />
                <div className="card__content">
                    <h1 className="card__title">{data.title}</h1>
                    <p className="card__description">{data.description}</p>
                    <p className="card__price">{data.price}</p>
                </div>
                <p className="card__overlay">Быстрый просмотр</p>
                <div className="card__liked" onClick={() => setIsLiked(!isLiked)}>
                    <HartIcon color={isLiked && 'red'} />
                </div>
            </div>
        </div>
    )
}

export default Card;