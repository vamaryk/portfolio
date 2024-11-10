// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { Banner } from './components/Banner.jsx';
import { CardComponent } from './components/CardComponent.jsx';
import { Skills } from './components/Skills.jsx';
import { Footer } from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <CardComponent />
      <Footer />
    </>
  )
}

export default App
