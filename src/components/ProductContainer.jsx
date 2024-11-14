import ProductItem from './ProductItem'
import {data} from '../utils/data'

const ProductContainer = ()=>{
    return(
        <div id='product-container'>
            {
              data.map((item) => {
                return (<ProductItem
                  key={item.id}
                  id={item.id}
                  desktop={item.image.desktop}
                  category={item.category}
                  name={item.name}
                  price={item.price.toFixed(2)}
                ></ProductItem>)
              }
              )
            }

          </div>
    )
}

export default ProductContainer;