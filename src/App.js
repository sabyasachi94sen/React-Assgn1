import React from "react";
import {Box1,Box2} from "./assignment1/box.js"

import {Title} from  './assignment1/title.js';
import './assignment1/index.css';
import './assignment1/index.css';


class App extends React.Component{

state={
  stateFunc:false,
  stateClass:false,
}




render(){



  return (


   
    <div className="container">
       <Title />

  
      
            
       <div className='header-wrapper'>
       
       <button className="header1" onClick={()=>this.setState({stateFunc:!this.state.stateFunc})}><h4 >To see styling in functional components</h4></button>
        <button className='header2' onClick={()=>this.setState({stateClass:!this.state.stateClass})}><h4 >To see styling in class components</h4></button>
      
        </div>

       <div className="box-wrapper">


        {this.state.stateFunc? <Box1 />: null}
        {this.state.stateClass? <Box2 />: null}

        </div>

        

     
     
    </div>
  )
}
}

export default App;
