//1. Import Area
// import someDefaultImport from somelocation/somelibrary
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/ui/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

//2. Defination Area
// Function Defination Area
export default function App() {
    // Every function return something
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path='register' element={<Register />}></Route>
            </Route>
                <Route path="login" element={<Login />}></Route>
                <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

//3. Export Area
//3.1 Default Export
//3.2 Named Export
