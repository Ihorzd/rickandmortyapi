import './App.css';
import React from 'react';
import Characters from './Components/Characters';
import AllCharacters from './Components/AllCharacters';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';



class App extends React.Component {


  render(){
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
  
          {/*<Route path="/" element ={<Characters/>} />*/}
          <Route path="/" element ={<AllCharacters/>} />
          <Route path="/profile/:id" element={<Profile id={this.id}/>} />
          

      </Routes>
      
      </BrowserRouter>

    </div>
  );
  }
}

export default App;
