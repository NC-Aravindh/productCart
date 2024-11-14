import '../App.css'
import Button from './Button/Button';
import {useSelector} from 'react-redux'

////////////////////////////////////
// Structure
///////////////////////////////////
// Image 
// Button
// category
// productName
// price

const ProductItem = ({ desktop,id, category, name, price }) => {

    const {cartList} = useSelector(store => store.cart)
    
    const itemFound = cartList?.find(item => item.id == id)
    const imgBorder = itemFound?.productCount ? "img-outline" : "";
    return (
        <div className='item-container'>
            <img id='item-img' className={imgBorder} src={desktop} alt="item-img" />
            <Button id={id} category={category} name={name} price={price}></Button>
            <p id='category-name'>{category}</p>
            <p id='product-name'>{name}</p>
            <p id='product-price'>${price}</p>
        </div>
    )

}

export default ProductItem;