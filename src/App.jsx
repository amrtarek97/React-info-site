import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from "./MainContent.jsx"
import Navbar from "./Navbar.jsx"
import './App.css'
import MainContent from './MainContent.jsx'

function App() {

  return (
    
      <div className='container'>
        <Navbar/>
        <MainContent/>

    </div>
  )
}

export default App
