import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { MainPage } from './components/pages/mainpage';
import { AuthPage } from './components/AuthPage';
import { BikePage } from './components/pages/BikePages';

const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<AuthPage onLogin={() => navigate('/')} />} />
      <Route path="/bike" element={<BikePage />} />
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
