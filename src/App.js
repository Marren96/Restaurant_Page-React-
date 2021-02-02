import React from 'react'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Local from './Components/Local'
import Home from './Components/Home'
import Menu from './Components/Menu'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';

const App = () => {
  return (
   <BrowserRouter>
       <div className="App">
          <Nav />
          <Route path = '/Home' component = {Home}/>
          <Route path = '/Contact' component = {Contact}/>
          <Route path = '/Local' component = {Local}/>
          <Route path = '/Menu' component = {Menu}/>
    </div>
   </BrowserRouter>
  );
}

export default App;
