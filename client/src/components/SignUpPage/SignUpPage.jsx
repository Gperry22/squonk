import React from 'react';
import './SignUpPage.css'

const SignUpPage = props => {
    return <div className="">

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6 col-md-offset-3">
            <div className="iosBlurBg">
        		<div className="whiteBg"></div>
            	</div>
              <div className="bottomEnter"></div>
              <div className="bottomBlurBg"></div>
              <div className="loginForm">
                <div className="title1">
                  <p> Squonk<br/> <span>Sign up</span> </p>

                  <hr className="short"/>
                </div>
            <form>
              <div className="col-3">
            <input className="effect-2" name="usernameCreate" onChange={props.usernameCheck} value={props.value.usernameCreate} type="text" placeholder="USERNAME" />
            <span className="focus-border"/>
            {props.value.usernameCreateOK ? (
              <h4>This username is already taken</h4>
            ):(null)}
            </div>

              <div className="col-3">
                <input className="effect-2" name="password" onChange={props.handleChange} value={props.value.password} type="password" placeholder=" ENTER PASSWORD" />

            </div>

              <div className="col-3">
                <input className="effect-2" name="password2" onChange={props.handleChange} value={props.value.password2} type="password" placeholder="CONFIRM PASSWORD" />

            </div>

            <div className="formInputContainer">
              <div className="formInputWrapper">
              <select className="select1" onChange={props.handleChange} name="secQuestion" >
                <option >
                  PLEASE CHOOSE A SECURITY QUESTION.
                  </option>
                  <option value="What is your Childhood Nickname?">
                    What is your Childhood Nickname?
                  </option>
                  <option value="What is your Mother's Maiden Name?">
                    What is your Mother's Maiden Name?
                  </option>
                  <option value="What is your First Pet's Name?" >
                    What is your First Pet's Name?
                  </option>
                  <option value="What is your Favorite Color?" >
                    What is your Favorite Color?
                  </option>
                </select>
              </div>
            </div>


              <div className="col-3">
                <input className="effect-2" name="secQuestionAnswer" onChange={props.handleChange} value={props.value.secQuestionAnswer} type="text" placeholder="SECURITY QUESTION ANSWER" />
                  <span className="focus-border"/>

            </div>

            <div className="formInputContainer">
              <div className="formInputWrapper">
              <select className="select1" onChange={props.handleChange} name="secQuestion2" >
                <option >
                  PLEASE CHOOSE A SECURITY QUESTION.
                  </option>
                  <option value="What is your Favorite Junk Food?">
                    What is your Favorite Junk Food?
                  </option>
                  <option value="Apple or Samsung?">
                    Apple or Samsung?
                  </option>
                  <option value="StarWars or StarTrek?">
                    StarWars or StarTrek?
                  </option>
                  <option value="What is the make of your first car?">
                    What is the make of your first car?
                  </option>
                </select>
              </div>
            </div>

              <div className="col-3">
                <input className="effect-2" name="secQuestion2Answer" onChange={props.handleChange} value={props.value.secQuestion2Answer} type="text" placeholder="SECURITY QUESTION 2 ANSWER" />
              </div>

              <button className="formButton" onClick={(event) => props.handleClick(event)}>
                Submit
              </button>
              <button className="formButton"> Cancel </button>


          </form>

        </div>
        </div>
        </div>
        </div>
      </div>;
}

export default SignUpPage;
