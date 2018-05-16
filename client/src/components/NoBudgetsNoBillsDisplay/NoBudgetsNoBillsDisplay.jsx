import React from 'react';

import "./NoBudgetsNoBillsDisplay.css"

const NoBudgetsNoBillsDisplay = props => {


  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-center'>
          <h2>Hi {props.userName.toUpperCase()}</h2>
          <h2>Please Click, "Add Budget" to Begin</h2>
        </div>
      </div>
    </div> 
  )
}

export default NoBudgetsNoBillsDisplay;
