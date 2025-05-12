import { memo, useState } from 'react';
import Title from '../Title/Title';
import Filter from '../Filter/Filter';
import Card from '../Card/Card';
import Arrow from '../../../Assets/Svg/Arrow';
import Send from '../../../Assets/Svg/Send';
import Sort from '../../../Assets/Svg/Sort';
import MobileList from '../../../Assets/Svg/MobileList';
import photoFilter from '../../../Assets/Images/Filter/photo1.png';
import photo1 from '../../../Assets/Images/Product/photo1.png';
import photo2 from '../../../Assets/Images/Product/photo2.png';
import photo3 from '../../../Assets/Images/Product/photo3.png';
import photo4 from '../../../Assets/Images/Product/photo4.png';
import photo5 from '../../../Assets/Images/Product/photo5.png';
import photo6 from '../../../Assets/Images/Product/photo6.png';
import './Product.scss';
const Product = memo(({ data, cardData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const productData = [
        {
            photo: photo1,
            title: 'Самые популярные'
        },
        {
            photo: photo2,
            title: 'Новинки'
        },
        {
            photo: photo3,
            title: 'Хиты продаж'
        },
        {
            photo: photo4,
            title: 'Джинсовое платье'
        },
        {
            photo: photo5,
            title: '100% хлопок'
        },
        {
            photo: photo6,
            title: 'Джинсовая юбка'
        },

    ]
    const filterData = [
        {
            image: <Send />
        },
        {
            image: <img src={photoFilter} alt="" />,
            description: ' Фильтр'
        },
        {
            image: <Sort />,
            description: 'Новинки'
        },
        {
            image: <MobileList />,
        }
    ];
    return (
        <section className='product'>
            <div className="product__wrapper">
                <Title info={data.title} />
                <div className="product__top">
                    <h1 className="product__title">{data?.subtitle}</h1>
                    <p className="product__info">{data?.info}</p>
                    <p className="product__description">{data.description}</p>
                    <p className="product__top-filter" style={{ color: '#555' }}>Быстрый фильтр</p>
                    <div className="product__filter">
                        {
                            filterData?.map((item, index) => (
                                <div className="product__filter-box" key={index} style={item.description ? { width: '100%' } : { width: '20%' }}>
                                    {item.image}
                                    <p className="product__filter-title">{item?.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <ul className="product__list">
                        {
                            productData?.map((item, index) => (
                                <li className="product__item" key={index}>
                                    <img className='product__item-image' src={item.photo} alt="" />
                                    <p className="product__item-title">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="product__bottom" style={isOpen ? { flexDirection: 'row' } : { flexDirection: 'column' }}>
                    <Filter onToggle={(open) => setIsOpen(open)} />
                    <div className="product__bottom-group">
                        <p className="product__bottom-title">Вы смотрели</p>
                        <div className='product__box'>
                            <div className="product__box-content">
                                <div className='product__box-item' style={{ backgroundColor: '#e0e0e0' }}></div>
                                <div className='product__box-item' style={{ backgroundColor: '#e0e0e0' }}></div>
                                <div className='product__box-item' style={{ backgroundColor: '#e0e0e0' }}></div>
                            </div>
                            <div className="product__box-content">
                                <div className='product__box-item' style={{ backgroundColor: '#555' }}></div>
                                <div className='product__box-item' style={{ backgroundColor: '#555' }}></div>
                                <div className='product__box-item' style={{ backgroundColor: '#555' }}></div>
                                <div className='product__box-item' style={{ backgroundColor: '#555' }}></div>
                            </div>
                        </div>
                        <details className="product__bottom-details">
                            <summary className='product__bottom-summary'>
                                <p className="product__bottom-title">Новинки</p>
                                <Arrow />
                            </summary>
                            <p>Hello World</p>
                            <p>Hello World</p>
                            <p>Hello World</p>
                            <p>Hello World</p>
                            <p>Hello World</p>
                        </details>
                    </div>
                    <div className="product__bottom-cards" style={isOpen ? { marginTop: '55px' } : { marginTop: '40px' }}>
                        {
                            cardData?.map((item, index) => (
                                <Card data={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
})

export default Product;