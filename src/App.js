import './App.css';
import { Routes,Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// 전체 상품 페이지, 로그인, 상품상세페이지
// 전체상품페이지에서는 전체 상품을 볼수 있다.
//로그인 버튼을 누르면 로그인 페이지가 나온다.
// 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인페이지가 먼저 나온다.
// 로그인이 되어있을 경우, 상품디테일 페이지를 볼 수 있다.
// 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 로그아웃이되면 상품 디테일 페이지를 볼 수 없다,. 다시 로그인 페이지가 보인다.
// 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 상품을 검색할 수 있다.


function App() {
  const auth = useSelector(state=>state.auth.auth)

  

  const PrivateRoute = ()=>{
    return auth?<MainPage/>:<Navigate to="/login"/>
  }
  console.log( auth )

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PrivateRoute/>}/>
        {/* <Route path="/products/:id" element={<MainPage/>}/> */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
