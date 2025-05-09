import WorldIcon from '../../../../Assets/Svg/WorldIcon';
import Arrow from '../../../../Assets/Svg/Arrow';
import VisaIcon from '../../../../Assets/Images/Footer/VisaIcon.svg';
import PayPalIcon from '../../../../Assets/Svg/PayPalIcon';
import LogoIcon from '../../../../Assets/Svg/LogoIcon';
import styles from './FooterBottomMobile.module.scss';
const FooterBottomMobile = ({ data }) => {
    return (
        <div className={styles['footer__bottom-wrapper']}>
            <div className={`${styles['footer__bottom-content']} container`}>
                {
                    data?.map((item, index) => (
                        <details className={styles['footer__details']} key={index}>
                            <summary className={styles['footer__summary']}>
                                <p className={styles['footer__bottom-title']}>
                                    {item.title}
                                </p>
                                <Arrow />
                            </summary>
                            <div className={styles['footer__details-group']}>
                                {item.description?.map((item, index) => (
                                    <p className={styles['footer__bottom-description']} key={index}>{item}</p>
                                ))}
                            </div>
                        </details>
                    ))
                }
            </div>
            <div className={styles['footer__card']}>
                <div className={styles['footer__card-top']}>
                    <div className={`${styles['footer__card-content']} container`}>
                        <p className={styles['footer__card-title']}>Почти по всему миру!</p>
                        <div className={styles['footer__card-globe']}>
                            <WorldIcon />
                            <p className={styles['footer__card-description']}>Россия</p>
                        </div>
                    </div>
                </div>
                <div className={styles['footer__card-bottom']}>
                    <div className={styles['footer__card-group']}>
                        <img className={styles['footer__card-image']} src={VisaIcon} alt="" />
                        <PayPalIcon />
                    </div>
                    <LogoIcon className={styles['footer__logo']} color={'#b4b4b4'} />
                </div>
            </div>
        </div>
    )
}

export default FooterBottomMobile;