import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import RootLayouts from './Components/Layouts/RootLayouts';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Error from './Components/Pages/Error';
import Service from './Components/Pages/Service';
import Portfolio from './Components/Pages/Portfolio';
import Price from './Components/Pages/Price';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/service" element={<Service />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/price" element={<Price />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
