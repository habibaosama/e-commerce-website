import React, { useState } from "react";
/*import logo from './logo.svg';*/
import "./App.css";
//get from react router web to outer the pages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./all/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./all/cart/Cart";
import Sdata from "./components/shops/Sdata"
import Footer from "./all/footer/Footer";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";


function App() {

/*
  step1 :  const { productItems } = Data 
  passing data using props
  
  Step 2 : item cart  using useState
  ==> CartItem  pass  using props from  <Cart CartItem={CartItem} />  import in cartItem
 import Shop from './components/shop/Shop';

  Step 3 :   flashCard  button
  Step 4 :  addToCart pass using props in pages and cart components
  */


  //fetch data from database
  const { productItems } = Data;
  const{shopItems}=Sdata;

  //step2
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <Router>
      <Header CartItem={CartItem} />
      <Switch>
        <Route path="/" exact>
          <Pages productItems={productItems} addToCart={addToCart}  shopItems={shopItems}/>
        </Route>
        <Route path="/cart" exact>
          <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
