import photo1 from '../../../Assets/Images/Details/photo1.png';
import HartIcon from '../../../Assets/Svg/HartIcon';
import './DetailsTop.scss';
const DetailsTop = ({ data }) => {
    return (
        <div className="details__top">
            <div className="details__top-content">
                <div className="details__top-texts">
                    <p className="details__top-title">
                        Код товара: <br />
                        <span className='details__top-title'>
                            S55981Z8 - RFH - Navy
                        </span>
                    </p>
                    <p className="details__top-description">{data.description}</p>
                    <p className="details__cash-price" style={{ textAlign: 'right' }}>{data.price}</p>
                </div>
                <div className="details__top-group">
                    <div className="details__top-box">
                        <HartIcon features={{ color: 'black' }} />
                    </div>
                    <div className="details__top-box">
                        <img src={photo1} alt="" />
                    </div>
                </div>
            </div>
            <div className="details__cash">
                <p className="details__cash-title">Наличными</p>
                <p className="details__cash-price">{data.price}</p>
            </div>
            <div className="details__size">
                <div className="details__size-texts">
                    <p className="details__size-title">Размер</p>
                    <p className="details__size-subtitle">Таблица размеров</p>
                </div>
                <div className="details__size-content">
                    <div className="details__box">M</div>
                    <div className="details__box">L</div>
                    <div className="details__box">S</div>
                    <div className="details__box">XS</div>
                </div>
                <button className="details__size-link">
                    ДОБАВИТЬ В КОРЗИНУ
                </button>
            </div>
        </div>
    )
}

export default DetailsTop;