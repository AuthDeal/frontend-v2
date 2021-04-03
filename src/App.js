import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import NavBar from "./Components/NavBar";
import Content from "./Components/HomePage/Content";
import Footer from "./Components/Footer";

function App() {
  return (
      <Router>
        <div>
          <NavBar/>
          <Content/>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
