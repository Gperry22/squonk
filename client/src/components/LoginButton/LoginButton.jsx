import React from 'react';
import "./LoginButton.css"

const LoginButton = props => {

  return (
    <div className='container'>
      <button className="text-center " title="Sign Out" onClick={(event) =>props.handleClick(event)}>Login <br/> 
      </button>
    </div>
  )
}

export default LoginButton;
