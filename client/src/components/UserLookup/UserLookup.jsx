import React from 'react';
import CancelButton from '../CancelButton'
import UsersDisplayItem from '../UsersDisplayItem'
import "./UserLookup.css"

const UserLookup = props => {



  let allUsers = props.allUsers.filter(user => user.userName !== props.value.userName);
  let userToBeAdded = props.userToShareBudget;

  let usersNamesPopulating = allUsers.filter(i => i.userName.startsWith(userToBeAdded) && userToBeAdded.length>=1);
  // let usersNamesPopulating = allUsers.filter((i,index) => i.userName.charAt(index) == userToBeAdded);


  return (
      // Lookup Input Box
    <div className='container'>
      <div className="row">
        <div className="offset-2 col-md-4">
          <input
            className="form-control text-center"
            type="text"
            name="userToShareBudget"
            onChange={props.handleChange}
            value={props.value.userToShareBudget.toLowerCase()}
            placeholder="Enter a User's Name to share your budget with."
          />
        </div>
        <CancelButton onClick={props.handleClickCancel} />
      </div>

      {/* username return if found */}
      <div className='row'>
        <div className='offset-3 col-md-2 rowMargin text-center'>
          {usersNamesPopulating.length ? (usersNamesPopulating.map(name => {
            return (
              <UsersDisplayItem
                key={name.userID}
                user={name}
                onClick={props.handleClick}
                value={props.value}
              />
            )
          })
          ) : (<h3 className="text-center">No Users Found</h3>)}
        </div>
      </div>
    </div>
  )
}

export default UserLookup;
