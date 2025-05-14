import { Link } from 'react-router-dom';
import './CartRight.scss';
const CartRight = ({ data, count }) => {
    return (
        <div className="cart__right">
            <div className="cart__right-top">
                <h2 className="cart__right-title">ИТОГ ЗАКАЗА</h2>
                <div className="cart__right-content">
                    <p className="cart__right-description">Всего</p>
                    <p className="cart__right-price">{count * data[0].price},00 RUB</p>
                </div>
                <div className="cart__right-content" style={{ fontWeight: '600' }}>
                    <p className="cart__right-description">Предварительная сумма</p>
                    <p className="cart__right-price">{count * data[0].price},00 RUB</p>
                </div>
                <div className="cart__right-content">
                    <p className="cart__right-description">Цена доставки</p>
                    <p className="cart__right-price">Выберите доставку</p>
                </div>
                <div className="cart__right-content" style={{ color: '#1f49b6', fontWeight: '700' }}>
                    <p className="cart__right-description">ОБЩАЯ СУММА</p>
                    <p className="cart__right-price">{count * data[0].price},00 RUB</p>
                </div>
            </div>
            <div className="cart__right-bottom">
                <p className="cart__right-description" style={{color: '#555'}}>Ввести промокод акции</p>
                <Link className="cart__right-link">ПЕРЕЙТИ В РАЗДЕЛ "ОФОРМИТЬ ЗАКАЗ"</Link>
            </div>
        </div>
    )
}

export default CartRight;