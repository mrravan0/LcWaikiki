import Product from "../../Components/Layout/Product/Product";
import photo1 from '../../Assets/Images/Men/photo1.jpg';
import photo2 from '../../Assets/Images/Men/photo2.jpg';
import photo3 from '../../Assets/Images/Men/photo3.jpg';
import photo4 from '../../Assets/Images/Men/photo4.jpg';

const MenPage = () => {
    const menData = {
        title: 'Для мужчин', subtitle: 'Для мужчин',
        info: 'Одежда, обувь и аксессуары для мужчин', description: '988 товаров в списке'
    }
    const cardData = [
        {
            photo: photo1,
            title: 'XSIDE',
            description: 'Джинсы мужские XSIDE',
            price: '2 399,00 RUB'
        },
        {
            photo: photo2,
            title: 'LCW Jeans',
            description: 'Мужские брюки стандартного кроя',
            price: '2 999,00 RUB'
        },
        {
            photo: photo3,
            title: 'SOUTHBLUE',
            description: 'Мужская рубашка классического кроя из поплина в полоску с короткими рукавами',
            price: '1 799,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCWAIKIKI Classic',
            description: 'Мужские брюки стандартного кроя',
            price: '2 399,00 RUB'
        },
        {
            photo: photo1,
            title: 'XSIDE',
            description: 'Джинсы мужские XSIDE',
            price: '2 399,00 RUB'
        },
        {
            photo: photo2,
            title: 'LCW Jeans',
            description: 'Мужские брюки стандартного кроя',
            price: '2 999,00 RUB'
        },
        {
            photo: photo3,
            title: 'SOUTHBLUE',
            description: 'Мужская рубашка классического кроя из поплина в полоску с короткими рукавами',
            price: '1 799,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCWAIKIKI Classic',
            description: 'Мужские брюки стандартного кроя',
            price: '2 399,00 RUB'
        },
        {
            photo: photo1,
            title: 'XSIDE',
            description: 'Джинсы мужские XSIDE',
            price: '2 399,00 RUB'
        },
        {
            photo: photo2,
            title: 'LCW Jeans',
            description: 'Мужские брюки стандартного кроя',
            price: '2 999,00 RUB'
        },
        {
            photo: photo3,
            title: 'SOUTHBLUE',
            description: 'Мужская рубашка классического кроя из поплина в полоску с короткими рукавами',
            price: '1 799,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCWAIKIKI Classic',
            description: 'Мужские брюки стандартного кроя',
            price: '2 399,00 RUB'
        }
    ]
    return <Product data={menData} cardData={cardData} />
}

export default MenPage;