import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import ItemListContainer from './components/Producto/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
          <Header/>
          <Navbar/>
          <Routes>
              <Route path="/" element={
                <ItemListContainer greeting="Elige tus productos deseados"/>}/>
              <Route path="/detalle/:id" element={
                <ItemDetailContainer/>}/>
              <Route path="/categoria/:cat" element={
                <ItemListContainer/>}/>
              <Route path="/cart" element={<CartView/>}/>
              <Route path="/checkout/:orderId" element={<Checkout/>}/>
              <Route path="*" element={
                <h2> 404: No existe link</h2>}></Route>
          </Routes>
          <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
} 
export default App;