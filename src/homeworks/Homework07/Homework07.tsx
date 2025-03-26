



import { v4 } from "uuid";

import Product from "../../components/Product/Product";
import { productsData } from "./data";
import './styles07.css';

function Homework07() {
  const products = productsData.map((products) => {
    return <Product
      key={v4()}
      name={products.name}
      price={products.price}
       />
  })

  console.log(products);


  return (
    <div className='products-wrapper'>
      {products}
    </div>
  )
  // <AnimalCard name={animalData[0].name} species="Lion" img='' />
}

export default Homework07