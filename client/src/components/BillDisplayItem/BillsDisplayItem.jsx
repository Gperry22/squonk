import React from 'react';
import "./BillsDisplayItem.css"

const BillsDisplayItem = props => {

  const style = {
    color: props.bill.billActualAmount > props.bill.billPlannedAmount ? 'red' : 'green'
  };

  return (
    <div className='row rowMargin'>
      <div className='col-md-2 text-center rowBG'></div>
      <div className='col-md-2 text-center rowBG'><h5 >{props.bill.billName}</h5></div>
      <div className='col-md-2 text-center rowBG'><h5 style={style}>${props.bill.billPlannedAmount.toFixed(2)}</h5></div>
      <div className='col-md-2 text-center rowBG'><h5 style={style}>${props.bill.billActualAmount.toFixed(2)}</h5></div>
      <div className='col-md-1 text-center rowBG'><h5>{props.bill.billStatic}</h5></div>
      <div className='col-md-1 text-center rowBG' onClick={(event)=>props.editBillShow(props.bill._id, event)} ><h5>Edit</h5></div>
      <div className='col-md-1 text-center rowBG' onClick={(event) => props.onClick(props.bill._id, event)}><h5>Delete</h5></div>
    </div>
  )
}


export default BillsDisplayItem;
