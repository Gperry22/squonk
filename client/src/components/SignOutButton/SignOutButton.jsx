import React from 'react';
import "./SignOutButton.css"

const SignOutButton = props => {

  return (
    <div className='container'>
      <button className="text-center " title="Sign Out" onClick={(event)=>props.onClick(event)}>Sign <br/> Out</button>
    </div>
  )
}

export default SignOutButton;
