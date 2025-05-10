import { memo } from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import DeliveryIcon from '../../../Assets/Svg/DeliveryIcon';
import './Header.scss';
const Header = memo(() => {
    return (
        <header className='header'>
            <section className='header__top'>
                <div className="header__inner">
                    <div className="header__top-inner">
                        <DeliveryIcon />
                        <p className="header__top-title">
                            Статус заказа
                        </p>
                    </div>
                </div>
            </section>
            <HeaderBottom />
        </header >
    )
})
export default Header;