import React from 'react';
import {Button} from '../ui/button';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <span className="font-bold text-xl">E-Bike Future</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-semibold items-center">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Service</a>
          <a href="#" className="hover:text-blue-600 transition">Story Highlights</a>
          <a href="#" className="hover:text-blue-600 transition">Specials</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
          <Button
            variant="outline"
            className="ml-4 text-sm"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Menu className="w-5 h-5" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 md:px-12 py-12 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            The Era of <br className="hidden md:block" />
            <span className="text-blue-600">Electric Biking</span>
          </h1>
          <p className="text-gray-600 text-md md:text-lg mb-6">
            Discover the future of electric mobility. Our cutting-edge electric bike blends futuristic design,
            sustainability, and smart tech to revolutionize your riding experience.
          </p>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm">
              Explore Now
            </Button>
            <Button variant="ghost" className="text-blue-600 border border-blue-600">
              Watch Video
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* Your bike image goes here */}
          <img
            src="/your-bike-image.png"
            alt="Electric Bike"
            className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
          />
          {/* Optional thumbnails under image */}
          <div className="flex justify-center gap-4 mt-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-2 rounded-xl shadow-md hover:scale-105 transition">
                <img
                  src="/your-bike-thumb.png"
                  alt={`Thumb ${i + 1}`}
                  className="h-16 w-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} E-Bike Future. All rights reserved.
      </footer>
    </div>
  );
};