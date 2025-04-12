import React from 'react';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the styles for the toast

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSaveDesign = () => {
    // Add your save logic here
    console.log('Design saved');
    
    // Store message in localStorage or state management
    localStorage.setItem('saveMessage', 'Your bike design has been saved!');
    
    // Show the toast notification
    toast.success('Your bike design has been saved!', {
      position: "bottom-center", // Position the toast
      autoClose: 3000, // Time before toast disappears
      hideProgressBar: true, // Hide progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause on hover
    });

    // Redirect to home after a small delay (to ensure toast shows first)
    setTimeout(() => {
      window.location.href = '/';
    }, 3500); // Adjust time to ensure toast finishes before redirect
  };

  return (
    <>
      <header className="bg-black/30 backdrop-blur-md p-4 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-blue-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ElectroRide 3D
          </h1>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={handleSaveDesign}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Save Design
          </button>
          <button className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 transition-colors">
            Order Now
          </button>
        </div>
      </header>

      {/* Toast Container */}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
    </>
  );
};
