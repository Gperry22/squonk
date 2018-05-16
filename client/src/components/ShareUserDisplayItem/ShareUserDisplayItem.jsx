import React from 'react';
import "./ShareUserDisplayItem.css"
import DeleteUserButton from "../DeleteUserButton"


const ShareUserDisplayItem = props => {


  return (

    <React.Fragment>
      <div className="col-md-2"><h5>{props.userInfo.user}</h5></div>
      <div className="col-md-1"><DeleteUserButton onClick={props.onClick} user={props.userInfo} value={props.value}/></div>
    
    </React.Fragment>
  )
}

export default ShareUserDisplayItem;
