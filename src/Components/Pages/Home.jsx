import React from 'react'
import Benner from '../Layouts/Benner'
import Service from './Service'
import About from './About'
import Footer from '../Layouts/Footer'
import Blog from './Blog'

const Home = (className,) => {
  return (
    <>
    <Benner/>
    <Service/>
    <About/>
    <Blog/>
    </>
  )
}

export default Home