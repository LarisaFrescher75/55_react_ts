


import { v4 } from "uuid";
import ProductCard from "../../components/Product/Product";
import { products } from "./data";
import './styles.css';


function Homework07() {
  const productsList = products.map((productObj) => {
    return (
      <ProductCard
        key={v4()}
        productName={productObj.name}
        productPrice={productObj.price} />
    )
  })
  return (
    <div className="homework07-container">
      <h1>Products</h1>
      {productsList}
    </div>
  )
}
export default Homework07;