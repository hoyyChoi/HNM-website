import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    
    const spaceProductDetail = () =>{
        navigate(`/products/${product.id}`)
        
    }

  return (
    <div className='productlist' onClick={spaceProductDetail}>
        <img width={200} src={product?.img}/>
        <div>{product?.choice == true ? "Conscious choice":""}</div>
        <h3>{product?.title}</h3>
        <div>{product?.price}</div>
        <div>{product?.new == true ? "신제품":""}</div>
    </div>
  )
}

export default ProductCard