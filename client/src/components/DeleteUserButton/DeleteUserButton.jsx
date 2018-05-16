import React from 'react';
import "./DeleteUserButton.css"

const DeleteUserButton = props => {

  return (
  <div className=''>
      <button className="btn btn-danger circleBtn1" title="Click to a Add a Bill" onClick={(event) => props.onClick(props.user.user, props.user.userID, props.value.userChosenBudgetId, event )}>-</button>
  </div>
  )
}

export default DeleteUserButton;
