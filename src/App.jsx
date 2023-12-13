import { useState } from 'react'
import reactLogo from './assets/react.svg'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from './Section/Home/Home';
import About from './Section/About/About';
import Service from './Section/Service/Service';
import Blog from './Section/Blog/Blog';
import Main from './Layout/Main/Main';
import Price from './Section/Price/Price';
import Portfolio from './Section/Portfolio/Portfolio';
import Contact from './Section/Contact/Contact';
import BanerBtn from './Section/Home/Baner/Baner_btn/BanerBtn';
import ServicesBtn from './Section/Home/Services/ServicesBtn/ServicesBtn';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Main/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/price' element={<Price/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/banerbtn' element={<BanerBtn/>}/>
      <Route path='/servicesbtn' element={<ServicesBtn/>}/>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
