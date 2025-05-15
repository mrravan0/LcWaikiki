import { Fragment } from 'react';
import CardSlider from '../../Components/CardSlider/CardSlider';
import Cart from '../../Components/Cart/Cart';
import photo1 from '../../Assets/Images/Women/photo1.jpg';
import photo3 from '../../Assets/Images/Men/photo1.jpg';
import photo2 from '../../Assets/Images/Men/photo2.jpg';
const CartPage = () => {
    const cartData = [
        {
            title: 'Женская футболка',
            photo: photo1,
            price: 799
        }
    ]
    const cartPageData = [
        {
            photo: photo3,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        }
    ]
    return (
        <Fragment>
            <Cart data={cartData} />
            <CardSlider data={cartPageData} title={'ХИТЫ ПРОДАЖ ТОЛЬКО ДЛЯ ВАС'} />
            <CardSlider data={cartPageData} title={'Покупают вместе'} />
        </Fragment>
    )
}

export default CartPage