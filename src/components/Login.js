import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAction } from '../redux/loginAction'

const Login = () => {

  const [id,setId] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const spaceHome = (event)=>{
    event.preventDefault()
    console.log('aa')
    dispatch(loginAction.login(id,password))
    navigate('/')
  }

  return (
    <div className='login-page'>
        <div className="login-input">
          <div className='email'>
            <div>Email address</div>
            <input placeholder='Enter email' onChange={(e)=>setId(e.target.value)}></input>
          </div>
          <div className='password'>
            <div>Password</div>
            <input placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
        </div>
        <form onSubmit={(event)=>spaceHome(event)}><Button variant="danger" type='submit'>Login</Button></form>
    </div>
  )
}
export default Login