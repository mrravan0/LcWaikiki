import Product from "../../Components/Layout/Product/Product";
import photo1 from '../../Assets/Images/Children/photo1.jpg';
import photo2 from '../../Assets/Images/Children/photo2.jpg';
import photo3 from '../../Assets/Images/Children/photo3.jpg';
import photo4 from '../../Assets/Images/Children/photo4.jpg';

const ChildrenPage = () => {
    const childrenData = {
        title: 'Для детей', subtitle: 'Для детей', description: '752 товаров в списке'
    }
    const cardData = [
        {
            photo: photo1,
            title: 'LCW Kids',
            description: 'Мальчики Зелёный Рубашка',
            price: '999,00 RUB'
        },
        {
            photo: photo2,
            title: 'LCW LCW Kids',
            description: 'Девочки Черный Майка',
            price: '599,00 RUB'
        },
        {
            photo: photo3,
            title: 'LCW Kids',
            description: 'Мальчики Зелёный Рубашка',
            price: '1 199,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCW Kids Classic',
            description: 'Футболка с круглым вырезом и принтом банта для девочек',
            price: '599,00 RUB'
        },
        {
            photo: photo1,
            title: 'LCW Kids',
            description: 'Мальчики Зелёный Рубашка',
            price: '999,00 RUB'
        },
        {
            photo: photo2,
            title: 'LCW LCW Kids',
            description: 'Девочки Черный Майка',
            price: '599,00 RUB'
        },
        {
            photo: photo3,
            title: 'LCW Kids',
            description: 'Мальчики Зелёный Рубашка',
            price: '1 199,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCW Kids Classic',
            description: 'Футболка с круглым вырезом и принтом банта для девочек',
            price: '599,00 RUB'
        },
        {
            photo: photo1,
            title: 'LCW Kids',
            description: 'Мальчики Зелёный Рубашка',
            price: '999,00 RUB'
        },
        {
            photo: photo2,
            title: 'LCW LCW Kids',
            description: 'Девочки Черный Майка',
            price: '599,00 RUB'
        },
        {
            photo: photo3,
            title: 'LCW Kids',
            description: 'Мальчики Зелёный Рубашка',
            price: '1 199,00 RUB'
        },
        {
            photo: photo4,
            title: 'LCW Kids Classic',
            description: 'Футболка с круглым вырезом и принтом банта для девочек',
            price: '599,00 RUB'
        }
    ]
    return <Product data ={childrenData} cardData={cardData}/>
}

export default ChildrenPage;