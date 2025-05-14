import Product from "../../Components/Layout/Product/Product";
import photo1 from '../../Assets/Images/Baby/photo1.jpg';
import photo2 from '../../Assets/Images/Baby/photo2.jpg';
import photo3 from '../../Assets/Images/Baby/photo3.jpg';
import photo4 from '../../Assets/Images/Baby/photo4.jpg';

const BabyPage = () => {
    const babyData = {
        title: 'Для малышей', subtitle: 'Для малышей', description: '374 товаров в списке'
    }
    const cardData = [
        {
            photo: photo1,
            title: 'LCW baby',
            description: 'Мальчики Серо-желтый Рубашка',
            price: '799,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'LCW baby',
            description: 'Комплект из 2 маек для девочек с квадратным вырезом',
            price: '499,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCW baby',
            description: 'Девочки Розовый Юбка',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCW baby',
            description: 'Девочки Голубой Платье',
            price: '599,00 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'LCW baby',
            description: 'Мальчики Серо-желтый Рубашка',
            price: '799,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'LCW baby',
            description: 'Комплект из 2 маек для девочек с квадратным вырезом',
            price: '499,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCW baby',
            description: 'Девочки Розовый Юбка',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCW baby',
            description: 'Девочки Голубой Платье',
            price: '599,00 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'LCW baby',
            description: 'Мальчики Серо-желтый Рубашка',
            price: '799,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'LCW baby',
            description: 'Комплект из 2 маек для девочек с квадратным вырезом',
            price: '499,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCW baby',
            description: 'Девочки Розовый Юбка',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCW baby',
            description: 'Девочки Голубой Платье',
            price: '599,00 RUB',
            status: true
        }
    ]
    return <Product data={babyData} cardData={cardData} />
}

export default BabyPage