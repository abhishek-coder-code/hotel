import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Hotel from './pages/Hotel';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyBooking from './pages/MyBooking';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';



const App = () => {

  const location = useLocation();
  return (
    <div className="w-full mx-auto">
      <Toaster />
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/room" element={<Room />} />
          <Route path="/singleroom" element={<SingleRoom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my-booking" element={<MyBooking />} />
        </Routes>
      </div>

      {location.pathname !== '/login' && location.pathname !== 'signup' && <Footer />}


    </div>
  );
};

export default App;
