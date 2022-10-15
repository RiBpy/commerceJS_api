import { AnimatePresence } from 'framer-motion';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateSlide from "./components/createSlide";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Slider from "./components/Slider";
import {commerce} from './lib/commerce'
import Checkout from './components/checkout/Checkout';
function App() {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState({})
  const fetchData=async()=>{
const {data}=await commerce.products.list()
setProducts(data)
  }
  const fetchCart=async()=>{
   setCart(await commerce.cart.retrieve())
  }
  const handleAddToCart=async (productId,quantity)=>{
    const items=await commerce.cart.add(productId,quantity)
    setCart(items)
  }
  const handleRemoveItem=async (productId)=>{
    const items=await commerce.cart.remove(productId)
    setCart(items)
  }
  const handleCartQuantity=async (productId,quantity)=>{
   const items=await commerce.cart.update(productId,{quantity})
   setCart(items)
  }
  const handleEmptyCart=async ()=>{
    const items=await commerce.cart.empty()
    setCart(items)
  }
  useEffect(() => {
    fetchData()
    fetchCart()
  }, [])
  return (
     <AnimatePresence mode="wait">
      
        <div className="w-screen h-auto flex flex-col">
          <Navbar totalItems={cart!=="undefined"?cart.total_items:[]}/>
          <main className=" px-4 py-4  w-full bg-slate-100">   
          <Routes>
            <Route path="/" element={<Slider/>}/>
            <Route path="/cart" element={<Cart 
            cart={cart}
            handleCartQuantity={handleCartQuantity}
            handleRemoveItem={handleRemoveItem}
            handleEmptyCart={handleEmptyCart}
            />}/>
            <Route path ='/products' element={<Products products={products} addToCart={handleAddToCart}/>}/>
            <Route path="/checkout" element={<Checkout cart={cart}/>}/>
          </Routes>
          </main>
        </div>
    </AnimatePresence>
  );
}

export default App;
