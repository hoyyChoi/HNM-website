import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaUserAlt,FaSearch} from "react-icons/fa";
const Navbar = ({auth,setAuth}) => {
    const menu = ['여성', 'divided', '남성', '신생아/유아', '아동', 'hnm home', 'sale', '지속가능성']
    const navigate = useNavigate()
    
    const login =()=>{
        if(auth){
            setAuth(false)
        }else{
            navigate("/login")
        }
        
    }

    const search = (e) =>{
        
        if(e.key =="Enter"){
            console.log(e.target.value)
            navigate(`/?q=${e.target.value}`)
        }
    }

  return (
    <div className='container'>
        
         <div className="login-container">
            <div>목차</div>
            <div>
                <FaUserAlt/>
                <button className='login' onClick={login}>{!auth?'로그인':'로그아웃'}</button>
            </div>
        </div>
        <a className='logo' href='/' ><img className='logo-img' src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg'/></a>
        <div className="menu-container">
            <ul className="menu">
                {menu.map((item)=>(
                    <li className='item'>{item}</li>
                ))}
            </ul>
            <div  className='search'>
                <FaSearch/>
                <input type="text" style={{border:"none", marginLeft:"5px", fontSize:"16px"}} placeholder='제품검색' onKeyPress={(e)=>search(e)}></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar