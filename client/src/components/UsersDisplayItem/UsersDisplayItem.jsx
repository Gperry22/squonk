import React from 'react';
import "./UsersDisplayItem.css"

const UsersDisplayItem = props => {

  return (
    <div className=' rowMargin text-center'><h5 >{props.user.userName}</h5>
      <span> <button className="" onClick={() => props.onClick(props.user.userName,props.user.userID)}> Add User</button> </span>
    </div>
  )
}


export default UsersDisplayItem;
