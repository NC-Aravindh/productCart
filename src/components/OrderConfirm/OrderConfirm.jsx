import './OrderConfirm.css'
import { useDispatch, useSelector } from 'react-redux'
import { startNewOrder } from '../../utils/cartSlice';

const OrderConfirm = () => {

    const { cartList, cartTotal } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    return (
        <div id='order-confirm-container'>
            <img id='order-confirmed-icon' src="../assets/images/icon-order-confirmed.svg" alt="order-confirmed-icon" />
            <h1 id='order-confirm-title'>Order Confirmed</h1>
            <p id='order-confirm-para'>We hope you enjoy your food.</p>

            {cartList?.map((item) => (
                <div className='order-product-container' key={item.id}>
                    <div style={{display:"flex" , gap:"0.5em"}}>
                    <img id='prod-thumbnail' src={item.thumbnail} alt="product-thumbnail" />
                    <div>
                        <p>
                            {item.itemName}
                        </p>
                        <p id='order-prod-price'><span id='order-count'>{item.productCount}x</span>    @${item.price}</p>
                    </div>
                    </div>
                    <p id='order-prod-rate'>
                        ${(item.price * item.productCount).toFixed(2)}
                    </p>
                </div>
            ))}

            <p className='order-confirm-total'>
                Order Total <span id='total-amount'>${(cartTotal).toFixed(2)}</span></p>
            <button onClick={() => dispatch(startNewOrder())} className='order-button'>Start New Order</button>
        </div>
    )
}

export default OrderConfirm;
