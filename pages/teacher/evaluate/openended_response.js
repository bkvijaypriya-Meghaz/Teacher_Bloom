import React from 'react'
import { FiLock } from 'react-icons/fi'

export default function openended_response() {
    return (
        <div>

            <div class="card lessoncard">
                <div class="row" style={{"border-bottom": "1px solid #f1f1f1"}}>
                    <div class="col-7">
                        <div class="card-header" style={{"border-bottom":"none"}}>
                            <h5>Question 1</h5>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="headrytbtn">
                            <button type="button" class="btn btn-primary" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview"><i class="feather"><FiLock /></i>Assign</button>
                        </div>
                    </div>
                </div>
                <div class="card-block">
                    <div class="popuptxt">
                        <p>Describe how energy powers a fan and how energy is transformed when powering the fan.</p>
                        <h6>Answer:</h6>
                        <p>Answers may vary. Solar energy can be taken in by solar panels on homes or streetlights and be turned into electrical energy that can be used to power things like the oven. The oven then creates thermal energy.</p>
                    </div>
                </div>
            </div>
            <div class="card lessoncard">
                <div class="card-header">
                    <h5>Question 2</h5>
                </div>
                <div class="card-block">
                    <div class="popuptxt">
                        <p>How far would the fourth turbine be from the house? ______mile</p>
                        <div class="popupimg1">
                            <img src="../assets/images/teacher/ques2.png" />
                        </div>
                        <h6>Answer:</h6>
                        <p>Answers may vary. Energy from electricity runs through the fan, this energy is then changed into kinetic energy as the blades of the fan turn, this creates wind energy.</p>
                    </div>
                </div>
            </div>
            <div class="card lessoncard">
                <div class="card-header">
                    <h5>Question 3</h5>
                </div>
                <div class="card-block">
                    <div class="popuptxt">
                        <p>Which form of energy is most important to you? Using at least four reasons, explain why this form of energy is your favorite.</p>
                        <h6>Answer:</h6>
                        <p>Answers may vary. Electrical energy is the most important to me. It helps power almost everything I do. It keeps my computer running. It allows my mom to cook me food. It keeps our house cool in the summer. It keeps my night light on at night.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
