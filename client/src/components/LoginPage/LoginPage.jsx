import React from 'react';
import './LoginPage.css'

const LoginPage = props => {
    return <div className="">
        <style> {"body { background-color: #e3e7ed; }"}</style>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6 col-md-offset-3">
              <div className="iosBlurBg">
                <div className="whiteBg" />
              </div>
              <div className="bottomEnter" />
              <div className="bottomBlurBg" />
              <div className="loginForm">
                <div className="title">
                  <p>
                    {" "}
                    Squonk<br /> <span>Login</span>{" "}
                  </p>

                  <hr className="short" />
                </div>

                <form>
                  <div className="col-3">
                    <input className="effect-2" name="usernameLogin" type="text" onChange={props.handleChange} value={props.value.usernameLogin} placeholder="USERNAME" />
                    <span className="focus-border" />

                    <input className="effect-2" name="passwordLogin" type="text" onChange={props.handleChange} value={props.value.passwordLogin} placeholder="ENTER PASSWORD" />
                    <span className="focus-border" />

                    <div className="forget">
                      <button className="btn btn-default btn-sm" onClick={(event) => props.handleClickForgotPassword(event)}>
                        FORGOT PASSWORD?
                      </button>
                    </div>
                  </div>
                </form>

              </div>

              <button className="enterButton" onClick={event => props.handleClick(event)}>
                {" "}
                LOGIN
              </button>

              <button className="enterButton1" onClick={event => props.handleClickSignUp(event)}>
                {" "}
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>;
}

export default LoginPage;
