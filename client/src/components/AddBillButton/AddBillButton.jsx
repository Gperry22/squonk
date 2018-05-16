import React from 'react';
import "./AddBillButton.css"

const AddBillButton = props => {

  return (
  <div className=''>
      <button className=" btn btn-success circleBtn" title="Click to a Add a Bill" onClick={props.onClick}>+
  </button>
  </div>
  )
}

export default AddBillButton;

