import React from 'react';
import './AccountDelete.css'

const AccountDelete = props => {
    return (

        <React.Fragment>


            <div className="">
            <h3>Are you Sure you want to Delete your Account? This cannot be undone.</h3>
                <button className="" onClick={(event) => props.onClickDelete(props.value.userId, props.value.userChosenBudgetId, event)}>
                    Submit
              </button>
                <button className="" onClick={props.onClick}> Cancel </button>
            </div>
        </React.Fragment>
    )
}

export default AccountDelete;