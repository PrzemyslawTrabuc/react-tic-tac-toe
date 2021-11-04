import React from 'react';

function Square(props) {  
    return (        
      <button className={'square '+ props.slot_flag} onClick={props.onClick}>
        {props.symbol}  
      </button>
    ); 
}
export default Square;