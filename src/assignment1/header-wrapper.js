import React from 'react';
import {Header1} from './header1.js';
import {Header2} from './header2';
import './index.css';

export function HeaderWrapper(props){
   

    
    return (
        <div className='header-wrapper'>
         <Header1 />
         <Header2 cl={props} />
        </div>
    )
}