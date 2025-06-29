import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function Navbar({ onMobileMenuToggle }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Notify parent component when mobile menu state changes
    useEffect(() => {
        if (onMobileMenuToggle) {
            onMobileMenuToggle(isMobileMenuOpen);
        }
    }, [isMobileMenuOpen, onMobileMenuToggle]);

    return (
      <nav className="fixed top-0 w-auto mx-auto left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-16 w-full py-10 ">
            {/* Centered Title */}
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent z-20 py-10">
              Profile Page
            </h1>
            {/* Navigation Links */}
            <div className="ml-auto hidden md:flex items-center space-x-8 z-30">
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
                Home
              </a>
              <Link to="/About" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
                Projects
              </Link>
              {/* Desktop Dropdown */}
              <div className="relative">
                <button 
                  onClick={toggleDropdown}
                  className="text-slate-300 hover:text-white transition-colors duration-200 font-medium flex items-center gap-2 group"
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Desktop Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700/50 py-2 z-50">
                    <a href="#" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 rounded-lg mx-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Web Development</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 rounded-lg mx-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>App development</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 rounded-lg mx-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>UI/UX Design</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 rounded-lg mx-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>ML Models</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 rounded-lg mx-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span>Consulting</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
                Contact
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="ml-auto md:hidden z-30">
              <button 
                onClick={toggleMobileMenu}
                className="text-slate-300 hover:text-white p-2 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 absolute top-16 left-0 right-0 z-10">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200">
                  Home
                </a>
                <Link to="/About" className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200">
                  Projects
                </Link>
                {/* Mobile Services Section */}
                <div className="px-3 py-2">
                  <div className="text-slate-300 font-medium mb-2">Services</div>
                  <div className="pl-4 space-y-1">
                    <a href="#" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Web Development</span>
                      </div>
                    </a>
                    <a href="#" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Mobile Apps</span>
                      </div>
                    </a>
                    <a href="#" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>UI/UX Design</span>
                      </div>
                    </a>
                    <a href="#" className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span>Consulting</span>
                      </div>
                    </a>
                  </div>
                </div>
                <Link to="/contact" className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }