import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Layout from './components/Layout/Layout'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
