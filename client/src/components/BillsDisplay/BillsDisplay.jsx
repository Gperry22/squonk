import React from "react";
import "./BillsDisplay.css";
import BillDisplayItem from "../BillDisplayItem";
import AddBill from "../AddBill"
import AddBillButton from "../AddBillButton"
import EditBill from "../EditBill"



const BillsDisplay = props => {

  let billActualAmountValues = props.bills.map(i => { return (i.billActualAmount) })
  let allBillsActualAmountSum = billActualAmountValues.reduce((a, b) => a + b, 0)
  let billPlannedAmountValues = props.bills.map(i => { return (i.billPlannedAmount) })
  let allBillsPlannedAmountSum = billPlannedAmountValues.reduce((a, b) => a + b, 0)

  return (

    <div className='container'>
    <style className="colour"> {'body { background-color: #F3F8FF; }'}</style>

      <div className='row rowMargin'>
        <div className='col-md-2  headerBG text-center '><AddBillButton onClick={props.onClick} /></div>
        <div className='col-md-2  headerBG text-center'><h4 className='wordPosition'> Bill Name</h4></div>
        <div className='col-md-2 text-center headerBG'><h4 className='wordPosition'>Planned Amount</h4></div>
        <div className='col-md-2 text-center headerBG'><h4 className='wordPosition'>Acutal Amount</h4></div>
        <div className='col-md-1 text-center headerBG'><h4 className='wordPosition'>Status</h4></div>
        <div className='col-md-1 text-center headerBG'><h4 className='wordPosition'>Edit</h4></div>
        <div className='col-md-1 text-center headerBG'><h4 className='wordPosition'>Delete</h4></div>
      </div>

      {props.showBillStatus ? (
        <AddBill handleClick={props.handleClick} onClick={props.handleClickCancel} value={props.value} handleChange={props.handleChange} />) : (null)}


      {props.editBill ? (
        <EditBill handleClick={props.updateBillClick} onClick={props.noEditBillShow} value={props.value} handleChange={props.handleEditChange} bills={props.bills}/>) : (null)}


      {props.bills.length ? (props.bills.map(bill => {
        return (
          <React.Fragment key={bill._id}>
            <BillDisplayItem
            onClick={props.deleteClick}
            editClick={props.editBillID}
            editBillShow={props.editBillShow}
            bill={bill}
            />
          </React.Fragment>
        )
      })
      ) : (<h3 className="text-center">No Bills found</h3>)}

      <div className='row'>
        <div className='offset-2 col-md-2 text-center'>
          <h4>Totals</h4>
        </div>
        <div className='col-md-2 text-center'>
          <h4>${parseFloat(allBillsPlannedAmountSum).toFixed(2)}</h4>
        </div>
        <div className='col-md-2 text-center'>
          <h4>${parseFloat(allBillsActualAmountSum).toFixed(2)}</h4>
        </div>
      </div>
    </div>
  )
}

export default BillsDisplay;
