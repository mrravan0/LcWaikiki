import LogoIcon from '../../../../Assets/Svg/LogoIcon';
import PayPal from '../../../../Assets/Svg/PayPalIcon';
import WorldIcon from '../../../../Assets/Svg/WorldIcon';
import VisaIcon from '../../../../Assets/Images/Footer/VisaIcon.svg';
import styles from './FooterBottomDesktop.module.scss';
const FooterBottomDesktop = ({ data }) => {
    return (
        <div className={styles['footer__bottom-wrapper']}>
            <div className={styles['footer__bottom-first']}>
                <div className={`${styles['footer__bottom-content']} container`} >
                    {
                        data?.map((item, index) => (
                            <div className={styles['footer__bottom-group']} key={index}>
                                <p className={styles['footer__bottom-title']}>{item.title}</p>
                                {item.description?.map((item, index) => (
                                    <p className={styles['footer__bottom-description']} key={index}>{item}</p>
                                ))}
                            </div>
                        ))
                    }
                    <LogoIcon color={'#b4b4b4'} width={'430'} />
                </div>
            </div>
            <div className={`${styles['footer__bottom-second']} container`} >
                <div className={styles['footer__card']}>
                    <div className={styles['footer__card-content']}>
                        <img className={styles['footer__card-image']} src={VisaIcon} alt="" />
                        <PayPal />
                    </div>
                    <div className={styles['footer__card-content']}>
                        <p className={styles['footer__card-title']}>Почти по всему миру!</p>
                        <div className={styles['footer__card-group']}>
                            <WorldIcon />
                            <span className={styles['footer__card-description']}>Россия</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterBottomDesktop;