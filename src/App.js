import { AnimatePresence } from 'framer-motion';
import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateSlide from "./components/createSlide";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Slider from "./components/Slider";
import {commerce} from './lib/commerce'
function App() {
  const [products,setProducts]=useState([])
  const fetchData=async()=>{
const {data}=await commerce.products.list()
setProducts(data)
  }
  useEffect(() => {
 fetchData()
  }, [])
  console.log(products);
  return (
     <AnimatePresence mode="wait">
        <div className="w-screen h-auto flex flex-col">
                  <Navbar/>
          <main className=" px-4 py-4  w-full bg-slate-100">
                  <Slider/>
                  <Products/>
          <Routes>
            <Route path="/products" element={<Products/>}/>
            <Route path ='/createItem' element={<CreateSlide/>}/>
          </Routes>
          </main>
        </div>
    </AnimatePresence>
  );
}

export default App;
