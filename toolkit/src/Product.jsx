import React from 'react'
import image from "./assets/ram.avif"
import {useDispatch, useSelector} from "react-redux"
import { additem,removeitem} from './CardSlice';

function Product() {
  let dispatch = useDispatch();

  let storeselector = useSelector((store)=>store.cart.cartitem)
  let Products = [{
    "id": 1,
    "name": "Product 1",
    "price": 10.99,
    "pimage":image
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 100.99,
    "pimage":image
  }
]

const handleCart=(product)=>{
  dispatch(additem(product))
}
const handleCartt=(product)=>{
  dispatch(removeitem(product))
}

  return (
    <>
    <h1>cart item - {storeselector.length}</h1>
    {
      Products.map((product, index) => {
        return (
          <div key={index}>
            <img src={product.pimage} alt="" />
            <h2>product id{product.id}</h2>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <button onClick={()=>handleCart(product)}>Add to cart</button>
            <button onClick={()=>handleCartt(product)}>remove from cart</button>

          </div>
      )})
    }
    </>

  )
}

export default Product