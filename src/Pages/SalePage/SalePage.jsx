import Product from "../../Components/Layout/Product/Product";
import photo1 from '../../Assets/Images/Sale/photo1.jpg';
import photo2 from '../../Assets/Images/Sale/photo2.jpg';
import photo3 from '../../Assets/Images/Sale/photo3.jpg';
import photo4 from '../../Assets/Images/Sale/photo4.jpg';

const SalePage = () => {
    const saleData = {
        title: 'Sale', description: '140 товаров в списке'
    }
    const cardData = [
        {
            photo: photo1,
            title: 'SOUTHBLUE',
            description: 'Мужской Серый Рубашка',
            price: '1 599,00 RUB'
        },
        {
            photo: photo2,
            title: 'XSIDE',
            description: 'Куртка мужская с воротником-стойкой',
            price: '3 999,00 RUB'
        },
        {
            photo: photo3,
            title: 'SOUTHBLUE',
            description: 'Женское платье с круглым вырезом и короткими рукавами',
            price: '1 399,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCW DREAM',
            description: 'Женщина  Бежевый Носки до щиколотки',
            price: '599,00 RUB'
        },
        {
            photo: photo1,
            title: 'SOUTHBLUE',
            description: 'Мужской Серый Рубашка',
            price: '1 599,00 RUB'
        },
        {
            photo: photo2,
            title: 'XSIDE',
            description: 'Куртка мужская с воротником-стойкой',
            price: '3 999,00 RUB'
        },
        {
            photo: photo3,
            title: 'SOUTHBLUE',
            description: 'Женское платье с круглым вырезом и короткими рукавами',
            price: '1 399,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCW DREAM',
            description: 'Женщина  Бежевый Носки до щиколотки',
            price: '599,00 RUB'
        },
        {
            photo: photo1,
            title: 'SOUTHBLUE',
            description: 'Мужской Серый Рубашка',
            price: '1 599,00 RUB'
        },
        {
            photo: photo2,
            title: 'XSIDE',
            description: 'Куртка мужская с воротником-стойкой',
            price: '3 999,00 RUB'
        },
        {
            photo: photo3,
            title: 'SOUTHBLUE',
            description: 'Женское платье с круглым вырезом и короткими рукавами',
            price: '1 399,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCW DREAM',
            description: 'Женщина  Бежевый Носки до щиколотки',
            price: '599,00 RUB'
        }
    ]
    return <Product data={saleData} cardData={cardData} />
}

export default SalePage;