import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Camera from './pages/Camera';
import Signup from './pages/Signup';
import LifeStyle from './pages/LifeStyle';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/lifestyle' element={<LifeStyle />} />
        <Route path='/camera' element={<Camera />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
