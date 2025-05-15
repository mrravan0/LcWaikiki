import { Fragment } from "react";
import Details from "../../Components/Details/Details";
import CardSlider from "../../Components/CardSlider/CardSlider";
import photo1 from '../../Assets/Images/Details/DetailsPage/photo1.jpg';;
const DetailsPage = () => {
    const detailsData = [
        {
            photo: photo1,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        },
        {
            photo: photo1,
            title: 'Брюки - для мужчин',
            description: 'Мужской Бежевый Брюки карго',
            price: '2,599 RUB',
            status: true
        }
    ]
    return (
        <Fragment>
            <Details />
            <CardSlider data={detailsData} title={'Аналогичный продукт'} />
        </Fragment>
    )
}

export default DetailsPage;