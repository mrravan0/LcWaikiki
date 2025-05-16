import { useState } from 'react';
import LogoIcon from '../../Assets/Svg/LogoIcon';
import BagPickUp from './BagPickUp/BagPickUp';
import BagDelivery from './BagDelivery/BagDelivery';
import photo1 from '../../Assets/Images/Bag/photo1.png';
import truck2 from '../../Assets/Images/Header/truck2.png';
import { Link } from 'react-router-dom';
import './Bag.scss';
const Bag = () => {
    const bagData = [
        { title: 'Всего товаров', subtitle: '799,00 Rub' },
        { title: 'Скидки', subtitle: '0,00 Rub', info: 'red' },
        { title: 'Предварительная сумма', subtitle: '799,00 Rub' },
        { title: 'Цена доставки', subtitle: 'Выберите доставку', info: 'blue' },
        { title: 'Общая сумма', subtitle: '799,00 Rub' }
    ];
    const [activeClicked, setActiveClicked] = useState('left');
    return (
        <section className='bag'>
            <div className="bag__inner container">
                <div className="bag__wrapper">
                    <Link to={'/'}>
                        <LogoIcon width={'230'} color={'rgb(25, 61, 176)'} />
                    </Link>
                    <div className="bag__wrapper-inner">
                        <div className="bag__group">
                            <div className="bag__group-content">
                                <h1 className="bag__title" style={{ backgroundColor: '#ebeef3' }}>
                                    <span>1.</span>
                                    Адресные данные
                                </h1>
                                <div className="bag__top">
                                    <div className="bag__content">
                                        <div className="bag__content-top">
                                            <div
                                                className={`${activeClicked === 'left' ? 'is-clicked' : ''} bag__content-box`}
                                                onClick={() => setActiveClicked('left')}>
                                                <img className='bag__content-image' src={photo1} alt="" />
                                                <h2 className="bag__content-title">Пункты выдачи</h2>
                                            </div>
                                            <div
                                                className={`${activeClicked === 'right' ? 'is-clicked' : ''} bag__content-box`}
                                                onClick={() => setActiveClicked('right')}>
                                                <img className='bag__content-image' src={truck2} alt="" />
                                                <h2 className="bag__content-title">Курьерская доставка до двери</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {activeClicked === 'left' ? <BagPickUp /> : <BagDelivery />}
                            <div className="bag__group-info">
                                <h1 className="bag__title">
                                    <span>2.</span>
                                    Данные оплаты
                                </h1>
                                <h1 className="bag__title">
                                    <span>3.</span>
                                    Заказ выполнен
                                </h1>
                            </div>
                        </div>
                        <div className="bag__right">
                            <div className="bag__right-top">
                                <h2>Данные заказа </h2>
                            </div>
                            <div className="bag__right-bottom">
                                <ul className="bag__list">
                                    {
                                        bagData?.map((item, index) => (
                                            <li className="bag__item" key={index} style={{ color: item?.info }}>
                                                <p className="bag__item-title">{item.title}</p>
                                                <p className="bag__item-subtitle">{item.subtitle}</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bag;