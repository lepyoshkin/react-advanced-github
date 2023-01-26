import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FavouritiesPage from './pages/FavouritiesPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
function App() {
  return (
    <>
      <Navigation />{' '}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourities" element={<FavouritiesPage />} />
      </Routes>
    </>
  );
}

export default App;
