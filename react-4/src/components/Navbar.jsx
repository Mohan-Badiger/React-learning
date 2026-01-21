import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            MyBrand
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>

               <NavLink to='/login' className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white">
                Login
            </NavLink>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block text-gray-700 font-medium">Home</a>
            <a href="/about" className="block text-gray-700 font-medium">About</a>
            <a href="/services" className="block text-gray-700 font-medium">Services</a>
            <a href="/contact" className="block text-gray-700 font-medium">Contact</a>

            {/* <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white">
              Login
            </button> */}

            <NavLink to='/login' className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white">
                Login
            </NavLink>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
