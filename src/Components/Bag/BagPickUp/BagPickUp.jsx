import UserIcon from '../../../Assets/Svg/Form/UserIcon';
import PhoneIcon from '../../../Assets/Svg/Form/PhoneIcon';
import LocationIcon from '../../../Assets/Svg/Form/LocationIcon';
import UpIcon from '../../../Assets/Svg/UpIcon';
import photo2 from '../../../Assets/Images/Bag/photo2.jpg';
import styles from './BagPickUp.module.scss';
const BagPickUp = () => {
    return (
        <div className={styles['bag__bottom']}>
            <div className={styles['bag__bottom-left']}>
                <div className={styles['bag__bottom-box']}>
                    <UserIcon />
                    <input
                        className={styles['bag__bottom-input']}
                        type="text"
                        placeholder='Имя Фамилия'
                        style={{ width: '100%' }} />
                </div>
                <div className={styles['bag__bottom-content']}>
                    <div className={styles['bag__bottom-number']}>
                        <PhoneIcon />
                        <p>007</p>
                    </div>
                    <input className={styles['bag__bottom-phone']} type="text" placeholder='Телефон' />
                </div>
                <h3 className={styles['bag__bottom-example']}>
                    Телефон (Например 007 111 111 11 11)
                </h3>
                <div className={styles['bag__region']}>
                    <div className={styles['bag__region-content']}>
                        <LocationIcon />
                        <p>Область</p>
                    </div>
                    <UpIcon />
                </div>
                <button className={styles['bag__bottom-button']}>Поиск</button>
            </div>
            <div className={styles['bag__bottom-right']}>
                <img src={photo2} alt="" />
                <div className={styles['bag__bottom-group']}>
                    <LocationIcon />
                    <h3>После выбора города, отделения будут показаны на карте.</h3>
                </div>
            </div>
        </div>
    )
}

export default BagPickUp;
