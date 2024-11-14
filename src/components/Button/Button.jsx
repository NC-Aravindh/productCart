import React from 'react'
import "./Button.css"
import { useDispatch, useSelector } from 'react-redux';
import { calculateCartTotal, addItem, removeItem,getQuantity } from '../../utils/cartSlice';
import { data } from '../../utils/data';

//Button component without using redux
// function Button({ category, name, price, id }) {

//     const [isClicked, setClick] = useState(false);
//     const [itemCount, setCount] = useState(0);
//     const { cartState, setCart,startNewOrder} = useContext(AppContext);

//     //Reset the counters of the all the items for the New Order
//     useEffect(()=>{
//         if(startNewOrder){
//             setClick(false);
//             setCount(0);

//         }
//     },[startNewOrder])

//     function addProduct(event) {
//         //Increment the product count.
//         setCount(prev => prev + 1)

//         //Changing the display of cart for the very first item
//         if (cartState.items == 0)
//             setCart(prevState => ({ ...prevState, isEmpty: false }))

//         //Add item to the cart list
//         const checkItemPresent = cartState.cartList?.some(item => item.id == event.target.id)

//         if (checkItemPresent) {
//             cartState.cartList?.map((item) => {
//                 if (item.id == event.target.id)
//                     item.productCount++;
//             }
//             )
//         }
//         else {
//             cartState.cartList?.push({
//                 id: id,
//                 itemName: name,
//                 price: price,
//                 productCount: itemCount + 1,
//             });
//         }


//         //Update the cartState hook with the updated cart list
//         setCart(prevState => (
//             {
//                 ...prevState,
//                 cartList: cartState.cartList,
//                 items: prevState.items + 1
//             }
//         ))
//     }

//     function calculateCartTotal() {
//         cartState.cartTotal = 0;
//         cartState.cartList.map(item => {
//             cartState.cartTotal += (item.price * item.productCount)

//         })

//         //Update the cartState hook with the updated cartTotal
//         setCart(prevState => (
//             {
//                 ...prevState,
//                 cartTotal: cartState.cartTotal
//             }
//         ))
//     }

//     function removeProduct(event) {
//         if (cartState.items == 1)
//             setCart(prevState => ({ ...prevState, isEmpty: true }))


//         //Loop through the list and remove the item that matches the event's id

//         //Check if the required id is present in the list
//         const checkItemPresent = cartState.cartList?.some(item => item.id == event.target.id)

//         if (checkItemPresent) {
//             cartState.cartList?.map((item) => {
//                 if (item.id == event.target.id)
//                     //If the productcount is more than 1, just decrement the productCount.
//                     //Else remove the item from the list
//                     if (item.productCount > 1) {
//                         item.productCount--;
//                     }

//                     else {
//                         cartState.cartList?.map((item, index) => {
//                             if (item.id == event.target.id)
//                                 cartState.cartList.splice(index, 1);
//                         }
//                         )

//                     }
//             }
//             )
//         }

//         //Updating the cart : with updated cartlist and removing one item.
//         setCart(prevState => (
//             {
//                 ...prevState,
//                 cartList: cartState.cartList,
//                 items: prevState.items - 1
//             }
//         ))

//         setCount(prev => {
//             // Changing the button appearance to 'Add to Cart' if added item is removed.
//             if (prev == 1) {
//                 prev--;
//                 setClick(false); 
//             }
//             else {
//                 prev--;
//             }
//             return prev;
//         }
//         )
//     }

//     return (
//         <div>
//             {isClicked ?
//                 <button id={id} className='itemAdded'>
//                     <p id={id} onClick={(event) => {
//                         removeProduct(event)
//                         calculateCartTotal()
//                     }}>
//                        <svg id={id} className='decrement-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>

//                      </p>
//                     <p>{itemCount}</p>
//                     <p id={id} onClick={(event) => {
//                         addProduct(event)
//                         calculateCartTotal()
//                     }}> <svg id={id} className='increment-icon' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
//                     </p>
//                 </button> :

//                 <button id={id} className='addItem' onClick={(event) => {
//                     setClick(true);
//                     addProduct(event);
//                     calculateCartTotal()
//                 }}> <img src="../assets/images/icon-add-to-cart.svg" alt="" /> Add to cart</button>}
//         </div>
//     )
// }

function Button({ name, price, id }) {
    const {cartList } = useSelector((store)=>store.cart);
    const dispatch = useDispatch();

    function addProduct() {
        const thumbnail = data[id].image.thumbnail
        dispatch(addItem({
            id: id,
            itemName: name,
            price: price,
            productCount: 1,
            thumbnail:thumbnail
        }));
    }

    function removeProduct(event) {
        dispatch(removeItem(event.target.id));
    }

    const quantity = cartList?.find(item => item.id === id)?.productCount || 0;

    return (
        <div>
            {quantity ?
                <button id={id} className='itemAdded'>
                    <p id={id} onClick={(event) => {
                        removeProduct(event)
                        dispatch(calculateCartTotal())
                    }}>
                        <svg id={id} className='decrement-icon delayed' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" /></svg>

                    </p>
                    <p>{quantity}</p>
                    <p id={id} onClick={(event) => {
                        addProduct(event)
                        dispatch(calculateCartTotal())
                    }}> <svg id={id} className='increment-icon delayed' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
                    </p>
                </button> :

                <button id={id} className='addItem' onClick={(event) => {
                    addProduct(event);
                    dispatch(calculateCartTotal())
                }}> <img src="../assets/images/icon-add-to-cart.svg" alt="" /> Add to cart</button>}
        </div>
    )
}

export default Button;