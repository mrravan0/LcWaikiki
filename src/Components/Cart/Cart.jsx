import { useState } from 'react';
import PlusIcon from '../../Assets/Svg/Cart/PlusIcon';
import MinusIcon from '../../Assets/Svg/Cart/MinusIcon';
import TrashIcon from '../../Assets/Svg/TrashIcon';
import HartIcon from '../../Assets/Svg/HartIcon';
import CartRight from './CartRight/CartRight';
import './Cart.scss';
const Cart = ({ data }) => {
    const [count, setCount] = useState(1);
    return (
        <section className='cart'>
            <div className="cart__wrapper">
                <div className="cart__left">
                    <h1 className="cart__left-top">Моя корзина ({data.length} Товар)</h1>
                    {
                        data?.map((item, index) => (
                            <div className="cart__left-bottom" key={index}>
                                <div className="cart__left-content">
                                    <img className='cart__left-image' src={item.photo} alt="" />
                                    <div className="cart__left-wrapper">
                                        <div className="cart__left-group">
                                            <p className="cart__left-title">{item.title}</p>
                                            <p className="cart__left-subtitle">S5IB96Z1 - F9C</p>
                                        </div>
                                        <div className="cart__left-group">
                                            <p className="cart__left-size">
                                                Размер:
                                                <strong>2-3 лет</strong>
                                            </p>
                                            <p className="cart__left-color">
                                                Цвет:
                                                <strong>Mix Printed</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__left-middle">
                                    <button className='cart__left-button' onClick={() => count > 1 && setCount(count - 1)}><MinusIcon /></button>
                                    <p className="cart__left-count">{count}</p>
                                    <button className='cart__left-button' onClick={() => setCount(count + 1)}><PlusIcon /></button>
                                </div>
                                <div className="cart__left-right">
                                    {data?.map((item, index) => <p className="cart__left-price" key={index}>{item.price},00 RUB</p>)}
                                    <div className="cart__left-info">
                                        <div className="cart__left-box">
                                            <TrashIcon color='grey' />
                                        </div>
                                        <div className="cart__left-box">
                                            <HartIcon features={{ color: 'grey' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <CartRight data={data} count={count} />
            </div>
        </section>
    )
}
export default Cart;