
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Signin from './Pages/Signin'
import Login from './Pages/Login'
import Prices from './Pages/Prices'
import Contacts from './Pages/Contacts'
function App() {

  return (
    < div className='bg-slate-800'>
      <div>

        {/* Navbar */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Prices" element={<Prices />} />
        </Routes>



      </div>
      
    </div>
  )
}

export default App


