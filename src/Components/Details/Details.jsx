import { Fragment, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DetailsTop from './DetailsTop/DetailsTop';
import DetailsBottom from './DetailsBottom/DetailsBottom';
import UseMediaQuery from '../../CustomHooks/UseMediaQuery';
import NextIcon from '../../Assets/Svg/NextIcon';
import photo1 from '../../Assets/Images/Details/photo1.png';
import './Details.scss';
const Details = memo(() => {
    const location = useLocation();
    let { state } = location;
    const isMediaSmall = UseMediaQuery('(max-width: 1000px)');
    const detailsInfo = [
        { info: 'Главная страница' },
        { info: 'Для мужчин' },
        { info: 'Брюки - для мужчин' },
        { info: ' Мужские брюки стандартного кроя' },
    ]
    return (
        <section className='details'>
            <div className="details__wrapper">
                <ul className="details__content">
                    {
                        detailsInfo?.map((item, index) => (
                            <li className="details__content-item" key={index}>
                                <p className="details__content-info">{item.info}</p>
                                <span className='details__content-image'><NextIcon /></span>
                            </li>
                        ))
                    }
                </ul>
                <div className="details__group">
                    <div className="details__left">
                        {isMediaSmall
                            ?
                            <Fragment>
                                <img className='details__left-image' src={state.photo} alt="" />
                                <img className='details__left-image' src={state.photo} alt="" />
                            </Fragment>
                            :
                            <Fragment>
                                <img className='details__left-image' src={state.photo} alt="" />
                                <img className='details__left-image' src={state.photo} alt="" />
                                <img className='details__left-image' src={state.photo} alt="" />
                                <img className='details__left-image' src={state.photo} alt="" />
                            </Fragment>
                        }
                    </div>
                    <div className="details__right">
                        <DetailsTop data={state} />
                        <div className="details__middle">
                            <p className="details__middle-title">Варианты цветов </p>
                            <div className="details__middle-content">
                                <img className='details__middle-image' src={state.photo} alt="" />
                                <p className="details__middle-subtitle">Индиго</p>
                            </div>
                        </div>
                        <DetailsBottom />
                    </div>
                </div>
            </div>
            <div className="details__footer">
                <div className="details__footer-content">
                    <Link className='details__footer-link'>
                        ДОБАВИТЬ В КОРЗИНУ
                    </Link>
                    <button className='details__footer-button'>
                        <img src={photo1} alt="" />
                    </button>
                </div>
            </div>
        </section>
    )
})

export default Details;