import React from 'react';
import "./AccountSettings.css"
import NavbarAcctSettings from "../NavbarAcctSettings"
import SecQuestionsDisplay from "../SecQuestionsDisplay"
import PasswordDisplayChange from "../PasswordDisplayChange"
import AccountDelete from "../AccountDelete"



const AccountSettings = props => {

  // showSecQues: false,
  //   showPasswordChange: false,


  return (
    <React.Fragment>
    <style className="colour"> {'body { background-color: #F3F8FF; }'}</style>

      {props.value.showAccountSettings && props.value.loggedIN ? (
      <NavbarAcctSettings
      handleClickAcct={props.handleClickAcct}
      onClick={props.handleClickSignOut}
      handleClickHomePage={props.handleClickHomePage}
      />):(null)}

      <div className='container marginTopAndBottom'>

        <div className="col-md-6 headerBG headerBorderRight">
          <h2>Account Settings</h2>
        </div>

        <div className="col-md-6 headerBG">
          <h2>Info</h2>

        </div>
        <div className="col-md-6 acctBorder">
          <button className="formButton" onClick={props.handleClickSec}>Change Security Questions </button>
          <button className="formButton" onClick={props.handleClickPass}> Change Password </button>
          <button className="formButton" onClick={props.handleClickAcctDelete}> Delete Account </button>
          <button className="formButton" onClick={(event) => props.handleClickCancel(event)}> Cancel </button>

          <p className="para"> Click on the buttons below to "change security Questions, change password or delete you account". </p>
        </div>
        <div className="col-md-6 acctBorder ">

{props.value.showSecQues ? (

        <SecQuestionsDisplay
              onClick={props.handleClickCancelSec}
              handleChange={props.handleChange}
              value={props.value}
              onClickSubmit={props.handleClickSubmitPass}
              onClickSubmitSec={props.handleClickSubmitSecQuestions}
        />
          ):(null)}


        {props.value.showPasswordChange ? (
          <PasswordDisplayChange
            onClick={props.handleClickCancelPass}
            handleChange={props.handleChange}
            value={props.value}
            onClickSubmit={props.handleClickSubmitPass}
          />
        ) : (null)}

          {props.value.showAcctDelete ? (
            <AccountDelete
              onClick={props.handleClickCancelAcctDelete}
              onClickDelete={props.handleClickDeleteAcct}
              value={props.value}
            />
          ) : (null)}




      </div>









      </div>
    </React.Fragment>
  )
}

export default AccountSettings;
