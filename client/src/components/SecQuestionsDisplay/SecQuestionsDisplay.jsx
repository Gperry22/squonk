import React from 'react';
import './SecQuestionsDisplay.css'

const SecQuestionsDisplay = props => {
    return (

        <React.Fragment>
            <div className="">
                <div className="kestion">
                    <p>Previous Question:  {props.value.secQuestionsObject.secQuestion1}</p>
                    <select onChange={props.handleChange} name="secQuestion">
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

            <div className="kestion1">
                <div className="answer">
                    <p>Previous Answer: </p>
                    <input className="formInput" name="secQuestionAnswer" onChange={props.handleChange} type="text" value={props.value.secQuestionAnswer}  placeholder={props.value.secQuestionsObject.secQuestion1Answer} />
                </div>
            </div>


            <div className="">
                <div className="kestion">
                    <p>Previous Question: {props.value.secQuestionsObject.secQuestion2}</p>
                    <select onChange={props.handleChange} name="secQuestion2"  >
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

            <div className="">
                <div className="answer">
                    <p>Previous Answer: </p>
                    <input className="formInput" name="secQuestion2Answer" onChange={props.handleChange} type="text" placeholder="SECURITY QUESTION 2 ANSWER" value={props.value.secQuestion2Answer} placeholder={props.value.secQuestionsObject.secQuestion2Answer}/>
                </div>
            </div>


            <div className="">
                <button className="custombtn" onClick={(event => props.onClickSubmitSec(event))}>
                    Submit
              </button>
                <button className="custombtn" onClick={props.onClick}> Cancel </button>
            </div>
        </React.Fragment>
    )
}

export default SecQuestionsDisplay;
