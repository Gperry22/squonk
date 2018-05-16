import React from 'react';

const DropDownMenu = props => {
 
  return (
    <option id="select" data-id={props.budget._id} >{props.budget.budgetName}</option>

  )
}

export default DropDownMenu;


