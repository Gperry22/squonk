import React from 'react';
import AddButton from "../AddButton"
import AcctSettingsButton from "../AcctSettingsButton"
import ShareBudgetButton from "../ShareBudgetButton"
import SignOutButton from "../SignOutButton"
import './Navbar.css'

const Navbar = props => {
    return (
        <div className='row marginBottom'>
            <div className='offset-7 col-md-1'>
                <AddButton onClick={props.handleClick} />
            </div>
            
            <div className='col-md-1'>
                <ShareBudgetButton onClick={props.handleUserClick} />
            </div>

            <div className='col-md-1'>
                <AcctSettingsButton onClick={props.handleClickAcct}/>
            </div>
            <div className='col-md-1'>
                <SignOutButton onClick={props.handleClickSignOut} />
            </div>
        </div>
    )
}
export default Navbar;


