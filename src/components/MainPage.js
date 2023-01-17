import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const MainPage = ({setId}) => {

    const [productList,setProductList] = useState([])
    const [query,setQuery] = useSearchParams()

    const getProducts = async()=>{
        let searchquery = query.get('q') || ""
        let url = ` https://my-json-server.typicode.com/hoyyChoi/HNM-website/products?q=${searchquery}`
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
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