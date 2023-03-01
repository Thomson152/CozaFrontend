/** @format */


import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
        
      <main className="py-3">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/shop" component={ShopScreen}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
        
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
