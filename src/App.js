/** @format */


import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";

import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderSreen";
import OrderScreen from "./Screens/OrderScreen";
import ShopScreen from "./Screens/ShopScreen";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import UserProfile from "./Screens/UserProfile";
import Setting from "./Screens/Setting";

function App() {
  return (
  <div>
    <Router>
        
        <main className="py-3">
            <Route path="/" component={HomeScreen} exact />
            <Route path="/shop" component={ShopScreen}/>
            <Route path="/about" component={About}/>
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path="/contact" component={Contact}/>
            <Route path="/user" component={UserProfile}/>
            <Route path="/profile" component={ProfileScreen}/>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/setting" component={Setting}/>
            <Route path="/register" component={RegisterScreen}/>
          
        </main>
  
      </Router>
         <ToastContainer />


  </div>

  );
}

export default App;
