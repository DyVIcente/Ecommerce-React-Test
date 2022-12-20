import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item'
import { useContext } from 'react'
import './cart.css'

function Cart() {
  const { addToCart, cartItems } = useContext(ShopContext)

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
    </div>
  )
}

export default Cart
