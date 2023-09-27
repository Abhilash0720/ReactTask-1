import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar.jsx'
import Mainpage from './components/mainpage.jsx'

function App() {
  
  return <>
    <div id="wrapper">
        <Sidebar/>
        <Mainpage/>
        
</div>
    </>
  
}

export default App
