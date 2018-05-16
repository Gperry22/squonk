import React from 'react';
import "./AcctSettingsButton.css"
const AcctSettingsButton = props => {
  return (
    <React.Fragment>
    <div className='container'>
      <button className=" " onClick={props.onClick} title="Account Setting">Account Settings</button>
    </div>
    </React.Fragment>
  )
}


export default AcctSettingsButton;
