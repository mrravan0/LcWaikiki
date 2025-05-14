import Product from "../../Components/Layout/Product/Product";
import photo1 from '../../Assets/Images/Women/photo1.jpg';
import photo2 from '../../Assets/Images/Women/photo2.jpg';
import photo3 from '../../Assets/Images/Women/photo3.jpg';
import photo4 from '../../Assets/Images/Women/photo4.jpg';
const WomenPage = () => {
    const womenData = {
        title: 'Для женщин', subtitle: 'Для женщин',
        info: 'Одежда, обувь и аксессуары для женщин', description: '1 177 товаров в списке'
    }
    const cardData = [
        {
            photo: photo1,
            title: 'XSIDE',
            description: 'Женская футболка с коротким рукавом, V-образным вырезом и принтом',
            price: '799,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'XSIDE',
            description: 'Женская футболка с круглым вырезом и короткими рукавами с принтом',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCWAIKIKI Classic',
            description: 'Женщина  Синий Платье',
            price: '2 599,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCWAIKIKI Classic',
            description: 'Женщина  Голубой Рубашка-туника',
            price: '2 399,00 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'XSIDE',
            description: 'Женская футболка с коротким рукавом, V-образным вырезом и принтом',
            price: '799,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'XSIDE',
            description: 'Женская футболка с круглым вырезом и короткими рукавами с принтом',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCWAIKIKI Classic',
            description: 'Женщина  Синий Платье',
            price: '2 599,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCWAIKIKI Classic',
            description: 'Женщина  Голубой Рубашка-туника',
            price: '2 399,00 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'XSIDE',
            description: 'Женская футболка с коротким рукавом, V-образным вырезом и принтом',
            price: '799,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'XSIDE',
            description: 'Женская футболка с круглым вырезом и короткими рукавами с принтом',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCWAIKIKI Classic',
            description: 'Женщина  Синий Платье',
            price: '2 599,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCWAIKIKI Classic',
            description: 'Женщина  Голубой Рубашка-туника',
            price: '2 399,00 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'XSIDE',
            description: 'Женская футболка с коротким рукавом, V-образным вырезом и принтом',
            price: '799,00 RUB',
            status: true
        },
        {
            photo: photo2,
            title: 'XSIDE',
            description: 'Женская футболка с круглым вырезом и короткими рукавами с принтом',
            price: '899,00 RUB',
            status: true
        },
        {
            photo: photo3,
            title: 'LCWAIKIKI Classic',
            description: 'Женщина  Синий Платье',
            price: '2 599,00 RUB',
            status: true
        },
        {
            photo: photo4,
            title: 'LCWAIKIKI Classic',
            description: 'Женщина  Голубой Рубашка-туника',
            price: '2 399,00 RUB',
            status: true
        },
    ]
    return (
        <Product
            data={womenData}
            cardData={cardData} />
    )
}

export default WomenPage;