import UserIcon from '../../../Assets/Svg/Form/UserIcon';
import LocationIcon from '../../../Assets/Svg/Form/LocationIcon';
import UpIcon from '../../../Assets/Svg/UpIcon';
import DownIcon from '../../../Assets/Svg/DownIcon';
import DoorIcon from '../../../Assets/Svg/Form/DoorIcon';
import PhoneIcon from '../../../Assets/Svg/Form/PhoneIcon';
import styles from './BagDelivery.module.scss';
const BagDelivery = () => {
    const bagDeliveryData = [
        { info: 'Имя Фамилия', photo: <UserIcon /> },
        { info: 'Дом', photo: <LocationIcon /> },
        { info: 'Область', photo: <LocationIcon />, details: true }, 
        { info: 'Квартира/ Офис', photo: <LocationIcon /> },
        { info: 'Город', photo: <LocationIcon />, details: true },
        { info: 'Индекс', photo: <LocationIcon /> },
        { info: 'Улица', photo: <LocationIcon /> },
    ]
    return (
        <div className={styles['bag__bottom']}>
            <div className={styles['bag__bottom-content']}>
                <h1 className={styles['bag__bottom-title']}>Адрес счета и адрес доставки</h1>
                <div className={styles['bag__bottom-group']}>
                    {
                        bagDeliveryData?.map((item, index) => (
                            <div className={styles['bag__region']} key={index}>
                                <div className={styles['bag__region-content']}>
                                    {item.photo}
                                    {item?.details ? <p>{item.info}</p> : <input type='text' placeholder={item.info} />}
                                </div>
                                {
                                    item?.details &&
                                    <div className={styles['bag__region-icons']}>
                                        <UpIcon />
                                        <DownIcon />
                                    </div>
                                }
                            </div>
                        ))
                    }
                    <div className={styles['bag__bottom-info']}>
                        <div className={styles['bag__bottom-number']}>
                            <PhoneIcon />
                            <p>007</p>
                        </div>
                        <input className={styles['bag__bottom-phone']} type="text" placeholder='Телефон' />
                    </div>
                </div>
                <h3 className={styles['bag__bottom-example']}>
                    Телефон (Например 007 111 111 11 11)
                </h3>
                <div className={styles['bag__address']}>
                    <DoorIcon />
                    <input type='text' placeholder={"Название адреса (напр Дом)"} />
                </div>
            </div>
            <button className={styles['bag__bottom-button']}>Выберите этот адрес</button>
        </div>
    )
}

export default BagDelivery;