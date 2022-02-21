import React from "react";
import {Box} from './assignment1/box-wrapper.js';
import {HeaderWrapper} from './assignment1/header-wrapper.js';
import {Title} from  './assignment1/title.js';
import './assignment1/index.css';


function App(){

  return (
    <div className="container">
       <Title />
       <HeaderWrapper />
      <Box />
     
     
    </div>
  )
}

export default App;
