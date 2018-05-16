import React from 'react';
import "./ShareBudgetButton.css"

const ShareBudgetButton = props => {

  return (
    <div className='container'>
      <button className=" " title="Add a Budget" onClick={props.onClick}>Share Budget
      </button>
    </div>
  )
}

export default ShareBudgetButton;
