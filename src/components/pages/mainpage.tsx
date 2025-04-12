import React from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
        <img src="src/components/pages/ChatGPT Image Apr 12, 2025, 11_24_43 AM.png" alt="Logo" className="h-16 w-16 object-contain" />
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
          <div className="flex gap-4 flex-wrap">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm"
              onClick={() => navigate('/bike')}
            >
              See Bikes
            </Button>
            <Button
              variant="ghost"
              className="text-blue-600 border border-blue-600"
            >
              Watch Video
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm"
              onClick={() => navigate('/bike')}
            >
              Customize Your Own Bike
            </Button>
          </div>

          
        </div>

        <div className="relative">
          <img
            src="src/components/pages/WhatsApp Image 2025-04-12 at 11.20.41.jpeg"
            alt="Electric Bike"
            className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
          />

        </div>
      </section>

      {/* 🔊 Promo Video Section */}
      <section className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
            <video
              src="src/components/pages/bike-demo.mp4" // Change this to your video file path
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Module 1 */}
      <div className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition">
        <img
          src="src/components/pages/image.png"
          alt="VR Module 1"
          className="rounded-md h-48 w-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-white">Module 1: Basic Repairs</h3>
        <p className="text-sm text-gray-400">
          Learn how to fix flat tires, replace brake pads, and do basic maintenance in VR.
        </p>
      </div>

      {/* Module 2 */}
      <div className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition">
        <img
          src="src/components/pages/image copy.png"
          alt="VR Module 2"
          className="rounded-md h-48 w-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-white">Module 2: Electrical Systems</h3>
        <p className="text-sm text-gray-400">
          Dive into diagnostics, battery management, and motor repairs using virtual tools.
        </p>
      </div>

      {/* Module 3 */}
      <div className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition">
        <img
          src="src/components/pages/image copy 2.png"
          alt="VR Module 3"
          className="rounded-md h-48 w-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-white">Module 3: Advanced Tuning</h3>
        <p className="text-sm text-gray-400">
          Fine-tune your e-bike for performance, comfort, and custom configurations.
        </p>
      </div>
    </div>



      {/* Footer */}
      <footer className="text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} E-Bike Future. All rights reserved.
      </footer>
    </div>
  );
};
