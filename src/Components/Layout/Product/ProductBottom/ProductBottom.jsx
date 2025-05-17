import { useState } from 'react';
import Filter from '../../Filter/Filter';
import Card from '../../Card/Card';
import Arrow from '../../../../Assets/Svg/Arrow';
import './ProductBottom.scss';
const ProductBottom = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="product__bottom" style={isOpen ? { flexDirection: 'row' } : { flexDirection: 'column' }}>
            <Filter onToggle={(open) => setIsOpen(open)} status={isOpen} />
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
                    data?.map((item, index) => (
                        <Card data={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductBottom;