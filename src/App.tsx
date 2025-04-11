import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { MainPage } from './components/pages/mainpage';
import Login from './components/pages/Login';
import { BikePage } from './components/pages/BikePages';
import Signup from './components/pages/Signup'; 

const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/bike" element={<BikePage />} />
      <Route path="/login" element={<Login onLogin={() => navigate('/')} />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
