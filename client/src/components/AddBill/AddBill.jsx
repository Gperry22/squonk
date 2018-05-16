import React from 'react';
import BillSubmitButton from '../BillSubmitButton'
import CancelButton from '../CancelButton'
import "./AddBill.css"

const AddBill = props => {

  return (
    <div className='container marginTopAndBottom'>
      <div className='row '>
        <div className='offset-4 col-md-2 text-center'>
          <h3>Add a Bill</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <input
            className="form-control text-center"
            type="text"
            name="billName"
            onChange={props.handleChange}
            value={props.value.billName}
            placeholder="Bill Name"
          />
        </div>


        <div className="col-md-3">
          <input
            className="form-control text-center"
            type="number"
            name="billPlannedAmount"
            onChange={props.handleChange}
            value={props.value.billPlannedAmount}
            placeholder=" Bill Planned Amount $25, $100, $1000"
          />
        </div>

        <div className="col-md-3">
          <input
            className="form-control text-center"
            type="number"
            name="billActualAmount"
            onChange={props.handleChange}
            value={props.value.billActualAmount}
            placeholder=" Bill Actual Amount $25, $100, $1000"
          />
        </div>

        <div className="col-md-1 text-center">
          <h6 className=''>Static Bill</h6>
          <input type="checkbox"
            // name="billStatic"
            checked={props.isChecked}
          // onChange={props.handleChange}
          // value={props.value.billStatic}     
          />
        </div>


        <BillSubmitButton onClick={props.handleClick} />
        <CancelButton onClick={props.onClick} />
      </div>
    </div>
  )
}

export default AddBill;


