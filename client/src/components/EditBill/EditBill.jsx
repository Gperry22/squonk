import React from 'react';
import EditBillSubmitButton from '../EditBillSubmitButton'
import CancelButton from '../CancelButton'
import "./EditBill.css"

const EditBill = props => {

  let billClick = props.value.editBillID;
  let billInfo = props.bills.find(index => index._id  === billClick )


  return (
    <div className='container marginTopAndBottom'>
      <div className='row '>
        <div className='offset-6 col-md-1 text-center'>
          <h3 className="unbill">Edit Bill</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <input
            className="form-control text-center"
            type="text"
            name="editBillName"
            onChange={props.handleChange}
            editvalue={props.value.editBillName}
            // value={billInfo.billName}
            placeholder={billInfo.billName}
          />
        </div>


        <div className="col-md-3">
          <input
            className="form-control text-center"
            type="number"
            name="editBillPlannedAmount"
            onChange={props.handleChange}
            editvalue={parseFloat(props.value.editBillPlannedAmount).toFixed(2)}
            // value={parseFloat(billInfo.billPlannedAmount).toFixed(2)}
            placeholder={parseFloat(billInfo.billPlannedAmount).toFixed(2)}
          />
        </div>

        <div className="col-md-3">
          <input
            className="form-control text-center"
            type="number"
            name="editBillActualAmount"
            onChange={props.handleChange}
            editvalue={parseFloat(props.value.editBillActualAmount).toFixed(2)}
            // value={parseFloat(billInfo.billActualAmount).toFixed(2)}
            placeholder={parseFloat(billInfo.billActualAmount).toFixed(2)}
          />
        </div>

        <div className="col-md-1 text-center">
          <h6 className='static'>Static Bill</h6>
          <input type="checkbox"
            // name="billStatic"
            checked={props.isChecked}
          // onChange={props.handleChange}
          // value={props.value.billStatic}
          />
        </div>


        <EditBillSubmitButton onClick={props.handleClick} />
        <CancelButton onClick={props.onClick} />
      </div>
    </div>
  )
}

export default EditBill;
