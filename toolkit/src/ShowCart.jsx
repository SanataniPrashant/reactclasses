import React from 'react'
import { useSelector } from 'react-redux'


function ShowCart() {
  let showdata = useSelector((store)=>store.cart.cartitem)
  return (
    <>
    {
      showdata.map((item) => {
        return <>
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
          <img src={item.pimage} alt="" />
        </>
      })
    }
    </>
  )
}

export default ShowCart