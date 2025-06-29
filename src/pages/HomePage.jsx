import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
const Homepage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white">
    {/* Background */}
    <div className="absolute inset-0 z-[-1]">
      <div className="gradient-left"></div>
      <div className="gradient-right"></div>
    </div>
  
    {/* Content */}
    <div className='mb-20'>
    <Navbar onMobileMenuToggle={setIsMobileMenuOpen} />
    </div>
    <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'pt-80' : 'pt-6'} md:pt-20`}>
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-4">
      <img src="profile.jpg" className="w-64 h-64 object-cover rounded-full shadow-2xl mx-10" />
      <Card />
        </div>
    </div>
  </div>
  );
}

export default Homepage