import React from 'react';
import AcctSettingsButton from "../AcctSettingsButton"
import './NavbarAcctSettings.css'

const NavbarAcctSettings = props => {
    return (
        <div className='row marginBottom'>
            <div className='offset-7 col-md-1'>           
                <button className="text-center " title="Sign Out" onClick={(event) => props.handleClickHomePage(event)}>Home <br /> Page</button>
            </div>

            <div className='col-md-1'>
                <AcctSettingsButton onClick={props.handleClickAcct}/>
            </div>
            <div className='col-md-1'>
                <button className="text-center " title="Sign Out" onClick={(event) => props.onClick(event)}>Sign <br /> Out</button>
            </div>
        </div>
    )
}
export default NavbarAcctSettings;


