import { Fragment, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HartIcon from '../../../Assets/Svg/HartIcon';
import UpIcon from '../../../Assets/Svg/UpIcon';
import TrashIcon from '../../../Assets/Svg/TrashIcon';
import photo from '../../../Assets/Images/Card/photo.png';
import './Card.scss';
const Card = memo(({ data, status = true }) => {
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/details', { state: data })
    }
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__top" onClick={status && handleClick}>
                    <img className='card__image' src={data.photo} alt="" />
                    <div className="card__content">
                        {data.status && <h1 className="card__title">{data.title}</h1>}
                        <p className="card__description">{data.description}</p>
                        <p className="card__price">{data.price}</p>
                    </div>
                    {
                        status &&
                        <Fragment>
                            <div className="card__overlay">
                                <img src={photo} alt="" />
                                <p className="card__overlay-title">Быстрый просмотр</p>
                            </div>
                            <div className="card__liked" onClick={() => setIsLiked(!isLiked)}>
                                {data.status ? <HartIcon features={{ color: isLiked && 'rgb(25, 61, 176)' }} /> : <TrashIcon />}
                            </div>
                        </Fragment>
                    }
                </div>
                {!data.status &&
                    <div className="card__bottom">
                        <div className="card__bottom-content">
                            <p>Размер</p>
                            <UpIcon />
                        </div>
                        <button className="card__bottom-button">Добавить в корзину</button>
                    </div>
                }
            </div>
        </div>
    )
})

export default Card;