import { Menu, Package, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router';
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
	 <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Package className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">MyGudang</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
             <HashLink smooth to="/#home" className="text-gray-300 hover:text-blue-400 transition">
              Beranda
            </HashLink>

            <HashLink smooth to="/#features" className="text-gray-300 hover:text-blue-400 transition">
              Fitur
            </HashLink>

            <HashLink smooth to="/demo#demo">
              <p className="text-gray-300 hover:text-blue-400 transition">Demo</p>
            </HashLink>

            <HashLink smooth to="/#pricing" className="text-gray-300 hover:text-blue-400 transition">
              Harga
            </HashLink>

            <HashLink smooth to="/#contact" className="text-gray-300 hover:text-blue-400 transition">
              Kontak
            </HashLink>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
             <HashLink
              smooth
              to="/#home"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400"
            >
              Beranda
            </HashLink>

            <HashLink
              smooth
              to="/#features"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400"
            >
              Fitur
            </HashLink>

            <Link to="/demo#demo">
              <p className="block px-3 py-2 text-gray-300 hover:text-blue-400">Demo</p>
            </Link>

            <HashLink
              smooth
              to="/#pricing"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400"
            >
              Harga
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              className="block px-3 py-2 text-gray-300 hover:text-blue-400"
            >
              Kontak
            </HashLink>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar