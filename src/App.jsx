import './App.css'
import ProductContainer from './components/ProductContainer.jsx';
import Cart from './components/Cart/Cart.jsx';
import { useSelector } from 'react-redux';


function App() {

  const { orderConfirmed } = useSelector((store)=>store.cart);

  return (
    <div id='root1' className={orderConfirmed ? 'overlay' : undefined}>
      <div id='first-container'>
        <h1 id='title'>Desserts</h1>
        <ProductContainer />
      </div>
      <div id='cart-container'>
        <Cart></Cart>
      </div>
    </div>

  )
}

export default App;

