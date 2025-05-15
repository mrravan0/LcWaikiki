import DeliveryIcon from '../../Assets/Svg/DeliveryIcon';
import LogoIcon from '../../Assets/Svg/LogoIcon';
import photo1 from '../../Assets/Images/Bag/photo1.png';
import './Bag.scss';
const Bag = () => {
    return (
        <section className='bag'>
            <div className="bag__inner container">
                <div className="bag__wrapper">
                    <div className="bag__group">
                        <div className="bag__top">
                            <LogoIcon width={'200'} color={'rgb(25, 61, 176)'} />
                            <div className="bag__content">
                                <h1 className="bag__title" style={{ backgroundColor: '#ebeef3' }}>
                                    <span>1.</span>
                                    Адресные данные
                                </h1>
                                <div className="bag__content-top">
                                    <div className="bag__content-box">
                                        <img className='bag__content-image' src={photo1} alt="" />
                                        <h2 className="bag__content-title">Пункты выдачи</h2>
                                    </div>
                                    <div className="bag__content-box">
                                        <DeliveryIcon />
                                        <h2 className="bag__content-title">Курьерская доставка до двери</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bag__bottom"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bag;