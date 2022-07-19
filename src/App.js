import React from "react";
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Panel from './components/Panel';
import Client from './components/Client';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Jumbotron />
        <Panel />
        <Client />
        <Awards />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
