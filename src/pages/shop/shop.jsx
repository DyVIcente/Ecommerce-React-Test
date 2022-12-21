import { PRODUCTS } from '../../products'
import Product from './product'
import './shop.css'

function Shop() {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Shop
