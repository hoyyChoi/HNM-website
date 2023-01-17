import React from 'react'
import { Button,Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuth}) => {

  const navigate = useNavigate()

  const spaceHome = (event)=>{
    event.preventDefault()
    console.log('aa')
    setAuth(true)
    navigate('/')
  }

  return (
    <div className='login-page'>
        <div className="login-input">
          <div className='email'>
            <div>Email address</div>
            <input placeholder='Enter email'></input>
          </div>
          <div className='password'>
            <div>Password</div>
            <input placeholder='Password'></input>
          </div>
        </div>
        <form onSubmit={(event)=>spaceHome(event)}><Button variant="danger" type='submit'>Login</Button></form>
    </div>
  )
}
export default Login