import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = props => {
  return (
    <div className="">
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
              <div className="title1">
                <p>
                  {" "}
                  Squonk<br /> <span>Forgot Password</span>{" "}
                </p>

                <hr className="short" />
              </div>
              <form>
                {/* // //////////////////////////////////////////////////////////////////////////////////// */}
                {props.value.showUserNameForgotPassword ? (
                  <div className="col-3">
                    <input
                      className="effect-2"
                      name="userNameForgotPassword"
                      onChange={props.handleChange}
                      value={props.value.userNameForgotPassword}
                      type="text"
                      placeholder=" ENTER YOUR USERNAME"
                    />
                    <button
                      className="formButton"
                      onClick={event => props.handleUserNameSubmit(event)}
                    >
                      Submit
                    </button>
                    <button className="formButton"> Cancel </button>
                  </div>
                ) : null}

                {/* // //////////////////////////////////////////////////////////////////////////////////// */}
                {props.value.showNewPasswordForgotPassword ? (
                  <React.Fragment>
                    <div className="col-3">
                      <input
                        className="effect-2"
                        name="password"
                        onChange={props.handleChange}
                        value={props.value.password}
                        type="text"
                        placeholder=" ENTER NEW PASSWORD"
                      />
                    </div>

                    <div className="col-3">
                      <input
                        className="effect-2"
                        name="password2"
                        onChange={props.handleChange}
                        value={props.value.password2}
                        type="text"
                        placeholder="CONFIRM NEW PASSWORD"
                      />
                    </div>
                    <button
                      className="formButton"
                      onClick={event => props.handlePasswordChangeSubmit(event)}
                    >
                      Submit
                    </button>
                    <button className="formButton"> Cancel </button>
                  </React.Fragment>
                ) : null}

                {/* // //////////////////////////////////////////////////////////////////////////////////// */}
                {props.value.showSecQuesForgotPassword ? (
                  <React.Fragment>
                    <div className="formInputContainer">
                      <div className="formInputWrapper" />
                    </div>

                    <div className="col-3">
                      <h5>{props.value.secQuestionsObject.secQuestion1}</h5>
                    </div>

                    <div className="col-">
                      <input
                        className="effect-2"
                        name="secQuestionAnswer"
                        onChange={props.handleChange}
                        value={props.value.secQuestionAnswer}
                        type="text"
                        placeholder="ENTER YOUR ANSWER"
                      />
                      <span className="focus-border" />
                    </div>

                    <div className="formInputContainer">
                      <div className="formInputWrapper">
                        <div className="col-3">
                          <div className="col-3">
                            <h5>
                              {props.value.secQuestionsObject.secQuestion2}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-3">
                      <input
                        className="effect-2"
                        name="secQuestion2Answer"
                        onChange={props.handleChange}
                        value={props.value.secQuestion2Answer}
                        type="text"
                        placeholder="ENTER YOUR ANSWER"
                      />
                    </div>
                    <button
                      className="formButton"
                      onClick={event => props.handleQuestionsSubmit(event)}
                    >
                      Submit
                    </button>
                    <button className="formButton"> Cancel </button>
                  </React.Fragment>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
