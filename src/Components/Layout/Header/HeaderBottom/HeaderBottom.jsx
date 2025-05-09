import LogoIcon from '../../../../Assets/Svg/LogoIcon';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import ProfileIcon from '../../../../Assets/Svg/ProfileIcon';
import HartIcon from '../../../../Assets/Svg/HartIcon';
import CartIcon from '../../../../Assets/Svg/CartIcon';
import SearchIcon from '../../../../Assets/Svg/SearchIcon';
import { Link } from 'react-router-dom';
import photo1 from '../../../../Assets/Images/Header/photo1.png';
import photo2 from '../../../../Assets/Images/Header/photo2.png';
import photo3 from '../../../../Assets/Images/Header/photo3.png';
import photo4 from '../../../../Assets/Images/Header/photo4.png';
import photo5 from '../../../../Assets/Images/Header/photo5.png';
import photo6 from '../../../../Assets/Images/Header/photo6.png';
import './HeaderBottom.scss';
const HeaderBottom = () => {
    const arrayInfo = [
        {
            name: 'Женщины',
            photo: photo1,
            to: ''
        },
        {
            name: 'Мужчины',
            photo: photo2,
            to: ''
        },
        {
            name: 'Дети',
            photo: photo3,
            to: ''
        },
        {
            name: 'Малыши',
            photo: photo4,
            to: ''
        },
        {
            name: 'LCW Home',
            photo: photo5,
            to: ''
        },
        {
            name: 'Sale %',
            photo: photo6,
            to: ''
        }
    ]
    return (
        <section className='header__bottom'>
            <div className="header__inner">
                <div className="header__bottom-wrapper">
                    <div className="header__bottom-inner">
                        <div className="header__bottom-group">
                            <div className="header__content">
                                <HeaderNavigation data={arrayInfo} />
                                <LogoIcon
                                    color={'#193db0'}
                                    width={'230'}
                                    className={'header__content-logo'} />
                            </div>
                            <div className="header__baskets">
                                <Link><ProfileIcon /></Link>
                                <Link><HartIcon /></Link>
                                <Link><CartIcon /></Link>
                            </div>
                        </div>
                        <div className="header__group">
                            <input type="text" className="header__input" placeholder='Поиск' />
                            <button className='header__button'>Поиск</button>
                            <SearchIcon
                                className={'header__search'}
                                features={
                                    { width: '20', height: '20', color: '#b5b5b5' }
                                } />
                        </div>
                    </div>
                    <div className="header__info">
                        <nav className='header__nav'>
                            <ul className="header__list">
                                {
                                    arrayInfo?.map((item, index, array) => (
                                        <li className="header__item" key={index}>
                                            {
                                                index !== array.length - 1 ?
                                                    <Link className='header__link'>{item.name}</Link>
                                                    :
                                                    <Link style={{ color: 'red' }}>{item.name}</Link>
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeaderBottom;