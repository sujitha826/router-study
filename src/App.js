import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import NoPage from './pages/Nopage';
import Layout from "./pages/Layout";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
