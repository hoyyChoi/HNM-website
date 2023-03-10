import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row,Col,Dropdown, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { detailAction } from '../redux/detailAction'
import {Route} from 'react-router-dom'

const ProductDetail = ({i1d}) => {

    const dispatch = useDispatch()
    const detail = useSelector(state=>state.detail.detail)

    let {id} = useParams()

    useEffect(()=>{
        seeproductdetail()
    },[])

    const seeproductdetail = () =>{
        dispatch(detailAction.getDetail(id))
    }

  return (
    <Container>
        <Row style={{marginTop:"50px"}}>
            <Col style={{display:"flex", justifyContent:"flex-end"}}>
                <img width={200} src={detail?.img}/>
            </Col>
            <Col>
                <h3>{detail?.title}</h3>
                <div>₩{detail?.price}</div>
                <div>{detail?.new == true ? "신제품":""}</div>
                <Dropdown style={{marginTop:"10px"}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        사이즈 선택
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">s</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">m</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">l</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="danger" style={{marginTop:"10px",width:"200px"}}>추가</Button>
            </Col>
        </Row> 
    </Container>

  )
}

export default ProductDetail