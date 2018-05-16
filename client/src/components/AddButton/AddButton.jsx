import React from 'react';
import "./AddButton.css"

const AddButton = props => {

  return (
    <div className='container'>
      <button className="text-center " title="Add a Budget" onClick={props.onClick}>Add <br/> Budget</button>
    </div>
  )
}

export default AddButton;
