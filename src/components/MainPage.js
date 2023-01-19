import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import { productAction } from '../redux/productAction'

const MainPage = ({setId}) => {

    const productList = useSelector(state=>state.product.productList)
    const [query,setQuery] = useSearchParams()
    const dispatch = useDispatch()

    const getProducts = ()=>{
        let searchquery = query.get('q') || ""
        dispatch(productAction.getProducts(searchquery))
        
    }

    useEffect(()=>{
        getProducts()
    },[query])
  return (
    <div>
        <Container className='product-container'>
            <Row>
                {productList.map((product)=>(
                    <Col className='product-list' lg={3}>
                        <ProductCard product={product} setId={setId}/>
                    </Col>
                ))}
            </Row>
        </Container>
        <div>MainPage</div>
        <Link to="/products">상품상세이미지</Link>
    </div>
  )
}

export default MainPage