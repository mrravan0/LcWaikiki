import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../../../Assets/Svg/LogoIcon';
import SearchIcon from '../../../../Assets/Svg/SearchIcon';
import './HeaderNavigation.scss';
const HeaderNavigation = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <div className={`header__overlay ${isOpen ? 'is-active' : ''}`}>
                <nav className='header__nav'>
                    <ul className="header__list">
                        {
                            data?.map((item, index, array) => (
                                index !== array.length - 1 ?
                                    <li className="header__item" key={index}>
                                        <div className="header__item-group">
                                            <Link >{item.name}</Link>
                                            <img src={item.photo} alt="" />
                                        </div>
                                    </li>
                                    : <li className="header__item" key={index}>
                                        <div className="header__item-group"
                                            style={
                                                {
                                                    backgroundImage: `url(${item.photo})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover'
                                                }
                                            }>
                                            <Link style={{ color: '#fff' }}>{item.name}</Link>
                                        </div>
                                    </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="header__overlay-wrapper">
                    <div className="header__overlay-content">
                        <Link className="header__overlay-title">Войти / Создать личный кабинет</Link>
                    </div>
                    <div className="header__overlay-content">
                        <Link className="header__overlay-title">Мои заказы</Link>
                    </div>
                    <div className="header__overlay-content">
                        <Link className="header__overlay-title">Мой Список желаний</Link>
                    </div>
                </div>
            </div>
            {
                isOpen ?
                    <div className="header__burger-overlay">
                        <div className="header__burger-inner">
                            <button className={`header__burger ${isOpen ? 'is-active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                                <span className='header__burger-line'></span>
                                <span className='header__burger-line'></span>
                                <span className='header__burger-line'></span>
                            </button>
                            <LogoIcon width={'100'} color={'#193db0'} />
                        </div>
                        <SearchIcon features={
                            {
                                width: '20',
                                height: '20',
                                color: '#193db0'
                            }
                        } />
                    </div>
                    : <button className={`header__burger ${isOpen ? 'is-active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                        <span className='header__burger-line'></span>
                        <span className='header__burger-line'></span>
                        <span className='header__burger-line'></span>
                    </button>
            }
        </Fragment >
    )
}

export default HeaderNavigation;