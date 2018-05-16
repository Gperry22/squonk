import React from 'react';
import './PasswordDisplayChange.css'

const PasswordDisplayChange = props => {
    return (

        <React.Fragment>


            <div className="">
                <div className="reponse">
                    <input className="formInput" name="password" onChange={props.handleChange} value={props.value.password} type="text" placeholder="ENTER PASSWORD" />
                </div>
            </div>



            <div className="">
                <div className="reponse">
                    <input className="formInput" name="password2" onChange={props.handleChange} value={props.value.password2} type="text" placeholder="CONFIRM PASSWORD" />
                </div>
            </div>


            <div className="bouton">
                <button className="" onClick={(event) => props.onClickSubmit(event)}>
                    Submit
              </button>
                <button className="" onClick={props.onClick}> Cancel </button>
            </div>
        </React.Fragment>
    )
}

export default PasswordDisplayChange;
