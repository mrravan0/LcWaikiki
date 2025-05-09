import { memo } from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import './Header.scss';
const Header = memo(() => {
    return (
        <header className='header'>
            <HeaderTop />
            <HeaderBottom />
        </header >
    )
})
export default Header;