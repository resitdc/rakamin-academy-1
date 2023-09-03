import React, { useState, useContext, createContext } from "react";
import "./style.css";
import Button from "./Button";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm Restu Dwi Cahyo</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>instagram : resitdc</p>
    </div>
  );
};

const App = () => {

  return (
    <Router>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/contact">Contact</Link> </li>
        </ul>

        <Routes>
          <Route path="/home/:id" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </nav>
    </Router>
  );
}

export default App;