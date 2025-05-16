import { memo } from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import truck1 from '../../../Assets/Images/Header/truck1.png';
import './Header.scss';
const Header = memo(() => {
    return (
        <header className='header'>
            <section className='header__top'>
                <div className="header__inner">
                    <div className="header__top-inner">
                        <img src={truck1} alt="" style={{width: '25px'}} />
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