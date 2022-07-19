import React from 'react';
//import Contact from './Components/Contact';
import Header from './Components/Header';
import Contact from './Components/Contact';
import { Routes, Route } from 'react-router-dom'
import PostContact from './Components/PoastContact'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/post" element={<><Contact /><PostContact /></>} />
      </Routes>
    </div>
  );
}

export default App;
