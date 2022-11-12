
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './components/layouts/dashboard/Card';
import Dashboard from './components/layouts/dashboard/Dashboard';
import MasterLayout from './components/layouts/dashboard/MasterLayout';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<MasterLayout />} >
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/card' element={<Card />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
