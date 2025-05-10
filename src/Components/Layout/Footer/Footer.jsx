import { memo } from 'react';
import FooterBottomDesktop from './FooterBottomDesktop/FooterBottomDesktop';
import FooterBottomMobile from './FooterBottomMobile/FooterBottomMobile';
import UseMediaQuery from '../../../CustomHooks/UseMediaQuery';
import photo1 from '../../../Assets/Images/Footer/photo1.png';
import photo2 from '../../../Assets/Images/Footer/photo2.png';
import photo4 from '../../../Assets/Images/Footer/photo4.png';
import photo5 from '../../../Assets/Images/Footer/photo5.png';
import './Footer.scss';
const Footer = memo(() => {
    const isMainFooter = UseMediaQuery('(max-width: 1000px)');
    const footerData = [
        {
            title: 'ПОМОЩЬ',
            description: ['Свяжитесь с нами', 'Возврат и замена', 'Доставка', 'Отслеживание заказа', 'Информация для клиентов']
        },
        {
            title: 'О НАС',
            description: ['O нас', 'Наши магазины', 'Корпоративная информация', 'Карьера в  LC Waikiki', 'Поддержка']
        },
        {
            title: 'ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ',
            description: ['Политика конфиденциальности', 'Пользовательское соглашение',]
        }
    ]
    const isMain = isMainFooter ? <FooterBottomMobile data={footerData} /> : <FooterBottomDesktop data={footerData} />;
    return (
        <section className='footer'>
            <div className="footer__wrapper">
                <div className="footer__top">
                    <div className="footer__top-content">
                        <p className="footer__top-title">Скачайте наше приложение</p>
                        <div className="footer__top-images">
                            <img className='footer__soc1als-top' src={photo2} alt="" />
                            <img className='footer__soc1als-top' src={photo1} alt="" />
                        </div>
                    </div>
                    <div className="footer__top-content">
                        <p className="footer__top-title">Подписывайтесь на нас</p>
                        <div className="footer__top-images">
                            <img className='footer__soc1als-bottom' src={photo4} alt="" />
                            <img className='footer__soc1als-bottom' src={photo5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    {isMain}
                </div>
            </div>
        </section>
    )
})

export default Footer;