import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Layout from './components/Layout/Layout'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route 
            path='/'
            element={<Home />} />
          <Route 
            path='/listings'
            element={<Listings />}/>
          <Route 
            path='/about'
            element={<About />}/>
          <Route 
            path='/contact'
            element={<ContactUs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
