import React from 'react';
import BudgetSubmitButton from '../BudgetSubmitButton'
import CancelButton from '../CancelButton'
import "./AddBudget.css"

const AddBudget = props => {

  return (

    <div className='container'>
      <div className="row">
        <div className="col-md-2">
          <input
            className="form-control text-center"
            type="text"
            name="budgetName"
            onChange={props.handleChange}
            value={props.value.budgetName.toLowerCase()}
            placeholder="Budget Name"
          />
        </div>


        <div className="col-md-3">
          <input
            className="form-control text-center"
            type="number"
            name="budgetPlannedAmount"
            onChange={props.handleChange}
            value={props.value.budgetPlannedAmount}
            placeholder=" Planned Amount $25, $100, $1000"
          />
        </div>


        <BudgetSubmitButton onClick={props.handleClick} />
        <CancelButton onClick={props.handleClickCancel} />
      </div>
    </div>
  )
}

export default AddBudget;
