

import './styles.css';
import { ProductProps } from "./types";

function Product({ name, price }: ProductProps) {
  return (
    <div className="products-container">
      <h2>{name}</h2>
      <div>{price}</div>
      
    </div>
  )
}

export default Product;