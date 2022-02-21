import React from 'react';



export const Box1=()=>{

    return (
        <div class="box1">
            <h2>This is created using function component</h2>
            <p>This is done using external css</p>
            <p style={{color:"blue"}}>This is done using inline css</p>
        </div>
    )
}


export class Box2 extends React.Component{
  render(){
      return (
          <div className="box2">
              <h2>This is created using class component</h2>
            <p>This is done using external css</p>
            <p style={{color:"blue"}}>This is done using inline css</p>

          </div>
      )
  }

}
