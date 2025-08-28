// import { NavLink } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import MainHeader from './Components/MainHeader'
// import AboutUs from './Components/AboutUs'
// import Home from './Components/Home'
// import Pages from './Components/Pages'
// import Services from './Components/Services'
// import Courses from './Components/Courses'
// import Blog from './Components/Blog'
// import Register from './Components/Register'
// import { useNavigate } from 'react-router-dom'


// function App() {
// const navigate=useNavigate()
//   return (
//     <>
//       <div className='flex flex-col items-center text-center '>
//         <nav className='flex  justify-center bg-white-400 w-[full] h-[150px]'>

//           <ul className='flex justify-center item-center m-6 p-3 gap-20'>
//             <li> <NavLink to="/MainHeader"><div className='text-4xl font-semibold text-center pb-10 text-indigo-600'>Keshari</div></NavLink></li>
//             <li> <NavLink to="/"><div>Home</div></NavLink></li> 
//             <li> <NavLink to="/AboutUs"><div>About Us</div></NavLink></li>
//             <li> <NavLink to="/Pages"><div>Pages</div></NavLink></li>
//             <li> <NavLink to="/Services"><div>Services</div></NavLink></li>
//             <li> <NavLink to="/Courses"><div>Courses</div></NavLink></li>
//             <li> <NavLink to="/Blog"><div>Blog</div></NavLink></li>
//             <li> <NavLink to="/Register"><div className='bg-indigo-700 text-white px-6 py-4 rounded-2xl m-auto' >Register</div></NavLink></li>

//           </ul>
//         </nav>
//         <Routes>


//           <Route index element={<Home />} />
//           <Route path='/MainHeader' element={<MainHeader />} />
//           <Route path='/AboutUs' element={<AboutUs />} />
//           <Route path='/Pages' element={<Pages />} />
//           <Route path='/Services' element={<Services />} />
//           <Route path='/Courses' element={<Courses />} />
//           <Route path='/Blog' element={<Blog />} />
//           <Route path='/Register' element={<Register />} />

//         </Routes>
//       </div>
//     </>
//   )
// }

// export default App


/////////////////////////////////////////////////////////////////




import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainHeader from './Components/MainHeader'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import Pages from './Components/Pages'
import Services from './Components/Services'
import Courses from './Components/Courses'
import Blog from './Components/Blog'
import Register from './Components/Register'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function App() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className='flex flex-col items-center text-center'>
        
        {/* Navbar */}
        <nav className='bg-white w-full shadow'>
          <div className='flex justify-between items-center px-6 py-4'>
            
            {/* Logo */}
            <NavLink to="/" className='text-2xl md:text-4xl font-semibold text-indigo-600'>
              Keshari
            </NavLink>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-10 text-lg font-medium items-center'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/AboutUs">About Us</NavLink></li>
              <li><NavLink to="/Pages">Pages</NavLink></li>
              <li><NavLink to="/Services">Services</NavLink></li>
              <li><NavLink to="/Courses">Courses</NavLink></li>
              <li><NavLink to="/Blog">Blog</NavLink></li>
              <li>
                <NavLink to="/Register">
                  <div className='bg-indigo-700 text-white px-4 py-2 rounded-2xl hover:bg-indigo-800'>
                    Register
                  </div>
                </NavLink>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className='md:hidden text-2xl text-indigo-600'
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className='flex flex-col gap-4 px-6 pb-4 text-lg font-medium md:hidden'>
              <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/AboutUs" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
              <li><NavLink to="/Pages" onClick={() => setMenuOpen(false)}>Pages</NavLink></li>
              <li><NavLink to="/Services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/Courses" onClick={() => setMenuOpen(false)}>Courses</NavLink></li>
              <li><NavLink to="/Blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
              <li>
                <NavLink to="/Register" onClick={() => setMenuOpen(false)}>
                  <div className='bg-indigo-700 text-white px-4 py-2 rounded-2xl hover:bg-indigo-800'>
                    Register
                  </div>
                </NavLink>
              </li>
            </ul>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/MainHeader' element={<MainHeader />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Pages' element={<Pages />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
