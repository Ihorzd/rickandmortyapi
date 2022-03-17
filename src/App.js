import './App.css';
import React from 'react';
import AllCharacters from './Components/AllCharacters';
import Characters from './Components/Characters';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import  Upload from './Components/Upload';




class App extends React.Component {


  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          {/*<Route path="/" element ={<AllCharacters/>} />*/}{/* it's all 826 characters with pages and another
           filtering method (try this line instead of the next) */}
          <Route path="/" element ={<Characters/>} />
          <Route path="/profile/:id" element={<Profile id={this.id}/>} />
      </Routes>
      
      </BrowserRouter>

    </div>
  );
  }
}

export default App;
