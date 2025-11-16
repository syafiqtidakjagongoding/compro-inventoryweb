import { BrowserRouter, Route, Router, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Demo from './pages/Demo'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/demo' element={<Demo/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
