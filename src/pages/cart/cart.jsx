import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item'
import { useContext } from 'react'
import './cart.css'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
    <div className="cart">
      <div>
        <h1> Votre Panier </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={index} data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Total : {totalAmount} €</p>
          <button onClick={() => navigate('/')}> Continuez Le Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1> Votre Panier Est Vide </h1>
      )}
    </div>
  )
}

export default Cart
