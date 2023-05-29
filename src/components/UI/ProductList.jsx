import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({data}) => {
   
  return (
    <>
    {data?.map((items,index)=>
     <ProductCard items={items} key={index}/>
    )}
       
    </>
  )
}

export default ProductList