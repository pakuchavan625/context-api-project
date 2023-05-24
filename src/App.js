import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <Header/>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
