import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CartBottom.scss';
const CartBottom = ({ price }) => {
    const [isTotalOpen, setIsTotalOpen] = useState(false);
    return (
        <section className='cart__bottom'>
            <div className="cart__bottom-wrapper" style={{ rowGap: '15px' }}>
                <div className="cart__bottom-content">
                    <div className="cart__bottom-first">
                        <h2 className="cart__bottom-title">ИТОГ ЗАКАЗА</h2>
                        <div className="cart__bottom-burger" onClick={() => setIsTotalOpen(!isTotalOpen)}></div>
                    </div>
                    {
                        isTotalOpen &&
                        <ul className="cart__bottom-list">
                            <li className="cart__bottom-item" style={{ fontWeight: '700' }}>
                                <p className="cart__bottom-subtitle">Всего</p>
                                <p className="cart__bottom-price">{price},00 RUB</p>
                            </li>
                            <li className="cart__bottom-item">
                                <p className="cart__bottom-subtitle">Предварительная сумма</p>
                                <p className="cart__bottom-price">{price},00 RUB</p>
                            </li>
                            <li className="cart__bottom-item" style={{ fontWeight: '700' }}>
                                <p className="cart__bottom-subtitle">Цена доставки</p>
                                <p className="cart__bottom-price">Выберите доставку</p>
                            </li>
                        </ul>
                    }
                    <div className="cart__bottom-second">
                        <h2 className="cart__bottom-title">ОБЩАЯ СУММА</h2>
                        <h2 className="cart__bottom-title">{price},00 RUB</h2>
                    </div>
                    {
                        isTotalOpen &&
                        <div className="cart__bottom-description">
                            <p>* Цены с учетом НДС.</p>
                        </div>
                    }
                </div>
                <div className="cart__bottom-group">
                    <Link className='cart__bottom-link'>ПЕРЕЙТИ В РАЗДЕЛ "ОФОРМИТЬ ЗАКАЗ"</Link>
                </div>
            </div>
        </section>
    )
}

export default CartBottom; 