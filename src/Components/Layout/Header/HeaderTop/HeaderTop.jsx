import DeliveryIcon from '../../../../Assets/Svg/DeliveryIcon';
import './HeaderTop.scss';
const HeaderTop = () => {
    return (
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
    )
}
export default HeaderTop;