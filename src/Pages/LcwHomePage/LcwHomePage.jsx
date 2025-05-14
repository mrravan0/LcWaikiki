import Product from "../../Components/Layout/Product/Product";
import photo1 from '../../Assets/Images/LcwHome/photo1.jpg';
import photo2 from '../../Assets/Images/LcwHome/photo2.jpg';
import photo3 from '../../Assets/Images/LcwHome/photo3.jpg';
import photo4 from '../../Assets/Images/LcwHome/photo4.jpg';

const LcwHomePage = () => {
    const lcwHomeData = {
        title: 'Lcw', description: '174 товаров в списке'
    }
    const cardData = [
        {
            photo: photo1,
            title: 'LCW ACCESSORIES',
            description: 'Разноцветный Бутылка для воды',
            price: '599,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'LCW HOME',
            description: 'Декоративный Искусственный Цветок, 35 См',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCW ACCESSORIES',
            description: 'Женщина  Серый Тапочки для ванной',
            price: '999,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCW HOME',
            description: 'Разноцветный Раскраска',
            price: '599,00 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'LCW ACCESSORIES',
            description: 'Разноцветный Бутылка для воды',
            price: '599,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'LCW HOME',
            description: 'Декоративный Искусственный Цветок, 35 См',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCW ACCESSORIES',
            description: 'Женщина  Серый Тапочки для ванной',
            price: '999,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCW HOME',
            description: 'Разноцветный Раскраска',
            price: '599,00 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'LCW ACCESSORIES',
            description: 'Разноцветный Бутылка для воды',
            price: '599,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'LCW HOME',
            description: 'Декоративный Искусственный Цветок, 35 См',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCW ACCESSORIES',
            description: 'Женщина  Серый Тапочки для ванной',
            price: '999,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCW HOME',
            description: 'Разноцветный Раскраска',
            price: '599,00 RUB',
            status: true
        }
    ]
    return <Product data={lcwHomeData} cardData={cardData} />
}

export default LcwHomePage;