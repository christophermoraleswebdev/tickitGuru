import { useState } from 'react'
import './App.css'
import CustomNav from './components/Nav'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <CustomNav />
      <Main />
      {/* <Footer /> */}
    </div>
  )
}

export default App
