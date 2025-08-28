
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { SiIfood } from "react-icons/si";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="shadow-md sticky top-0 z-50 bg-slate-900">
            <div className="max-w-7xl mx-auto 
          px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 
          flex justify-between items-center h-16">

                {/* Logo */}
                <Link to="/" className="flex gap-2 text-lg p-r-10 sm:text-xl md:text-2xl font-bold bg-slate-900 ">
                    <SiIfood />   <span>Sadhana's Kitchen--</span>
                </Link>

                {/* Desktop menu */}
                <div className="hidden font-extrabold  md:flex space-x-4 lg:space-x-8 text-sm lg:text-base font-sans">
                    <Link to="/" className="hover:text-blue-600  bg-amber-600 p-4 rounded-2xl w-[90px]">Home</Link>
                    <Link to="/Cart" className="hover:text-blue-600  bg-amber-600 p-4 rounded-2xl w-[90px]">Cart</Link>
                    <Link to="/Prices" className="hover:text-blue-600 bg-amber-600 p-4 rounded-2xl">Prices</Link>
                    <Link to="/Contacts" className="hover:text-blue-600 bg-amber-600 p-4 rounded-2xl">Order</Link>
                    <Link to="/Login" className="hover:text-blue-600  bg-amber-600 p-4 rounded-2xl w-[90px]">Login</Link>
                    <Link to="/Signin" className="hover:text-blue-600  bg-amber-600 p-4 rounded-2xl w-[90px]">Sign In</Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className=" font-extrabold bg-slate-800 text-white md:hidden  px-3 sm:px-6 py-2 space-y-2 text-sm sm:text-base">
                    <Link to="/" className="block hover:text-blue-600 w-full p-2 m-2 bg-amber-600 rounded-2xl">Home</Link>
                    <Link to="/Cart" className="block hover:text-blue-600 w-full p-2 m-2 bg-amber-600 rounded-2xl"> Cart</Link>
                    <Link to="/Prices" className="block hover:text-blue-600 w-full p-2 m-2 bg-amber-600 rounded-2xl">Prices</Link>
                    <Link to="/Contacts" className="block hover:text-blue-600 w-full p-2 m-2 bg-amber-600 rounded-2xl">Contacts</Link>
                    <Link to="/Signin" className="block hover:text-blue-600 w-full p-2 m-2 bg-amber-600 rounded-2xl">Sign In</Link>
                    <Link to="/Login" className="block hover:text-blue-600 w-full p-2 m-2 bg-amber-600 rounded-2xl">Login</Link>
                </div>
            )}
        </nav>
    )
}
