import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Movies from './components/Movies'
import CommentComponent from './components/CommentComponent'

function App() {
 

  return (
    <>
      <div>
       <Navbar/>
       <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/login' element ={<Signup/>}></Route>
        <Route path='/sign' element ={<Login/>}></Route>
        <Route path='/exit' element ={<Logout/>}></Route>
        <Route path='/addmovie' element ={<Movies/>}></Route>
        <Route path='/comment' element ={<CommentComponent/>}></Route>
       </Routes>
     
        
      </div>
      
    </>
  )
}

export default App
