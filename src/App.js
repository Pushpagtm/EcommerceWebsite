import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
// import { fetchCartByUserIdAsync } from "./features/cart/cartAPI";
import {fetchCartByUserIdAsync} from './features/cart/cartSlice';
import ErrorPage from "./pages/404";
import OrderSucessPage from "./pages/OrderSucessPage";
import UserOrderPage from "./pages/UserOrderPage";

function App() {
  const dispatch=useDispatch();
  const user=useSelector(selectLoggedInUser);
  useEffect(()=>{
    if(user){
      dispatch(fetchCartByUserIdAsync(user.id))
    }
  },[dispatch,user])
  return (
   
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Protected><Home /></Protected>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<Protected><CartPage/></Protected>} />
          <Route path="/checkout" element={<Protected><Checkout/></Protected>} />
          <Route path="/productdetail/:id" element={<Protected><ProductDetailPage/></Protected>} />
          <Route path="/order-success/:id" element={<OrderSucessPage/>} />
          <Route path="/orders" element={<UserOrderPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
