import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Allproducts from '../pages/allproducts'
import Details from '../pages/product.details'

export default function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/all' element={<Allproducts />}  />
            <Route path='/details' element={<Details />}  />

        </Routes>
      
    </div>
  )
}
