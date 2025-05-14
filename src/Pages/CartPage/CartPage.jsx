import { Fragment } from 'react';
import CardSlider from '../../Components/CardSlider/CardSlider';
import Cart from '../../Components/Cart/Cart';
import photo1 from '../../Assets/Images/Women/photo1.jpg';
const CartPage = () => {
    const cartData = [
        {
            title: 'Женская футболка',
            photo: photo1,
            price: 799
        }
    ]
    return (
        <Fragment>
            <Cart data={cartData}/>
        </Fragment>
    )
}

export default CartPage