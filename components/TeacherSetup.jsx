import React, { useState } from 'react'
import {dummyInvocation} from '../services/GenricService'

export class TeacherSetup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            whichScreen: 1,
            firstName: "",
            lastName: "",
            displayName: "",
            section1: "",
            section2: "",
            section3: "",
            grade1: "",
            grade2: "",
            grade3: "",
        };
    }
    nextStep1 = () => {
        this.setState((prevState)=>{
            return {
                ...prevState,
                whichScreen:2
            }
        });
    }
    nextStep2 = () => {
        this.setState((prevState)=>{
            return {
                ...prevState,
                whichScreen:3
            }
        });
    }
    finishSetup = async () => {
        console.log("invoke api here & close the modal");
        let data = {
            whichScreen: this.state.whichScreen,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            displayName: this.state.displayName,
            section1: this.state.section1,
            section2: this.state.section2,
            section3: this.state.section3,
            grade1: this.state.grade1,
            grade2: this.state.grade2,
            grade3: this.state.grade3,
        };
        let apiResponse = await dummyInvocation("google.com", data);
        console.log("dummyApiInvocation response is: ", apiResponse)
        this.props.hideModal();
    }

    handleChange = (event) => {
        // console.log("event.target.name --> ", event.target.name);
        // console.log("event.target.value --> ", event.target.value);
        let name = event.target.name;
        let value = event.target.value;
        this.setState((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    render(){
        return (
            <div className="teacher-setup-content">
                <hr />
               { this.state.whichScreen === 1 ?
                <div className="">
                    <div className="teacher-setup-screen welcome-screen">
                        <h4>Welcome to Bloom</h4> <br />
                        <div className="teacher-setup-bloom-logo">Bloom logo here</div> <br />
                        <h4>Click Next step to continue</h4>
                    </div>
                        <hr />
                        <div className="teacher-setup-next-step-container">
                            <button className="action-button" onClick={this.nextStep1}>Next step</button>
                        </div>
                </div>
                : (
                    this.state.whichScreen ===2 ? 
                    <div>
                        <div className="teacher-setup-screen second-screen">
                            <h4>STEP1: CONFIRM YOUR PROFILE</h4>
                            <div className="teacher-setup-input-group">
                                <label htmlFor="firstName">First Name</label>
                                <br/>
                                <input className="teacher-setup-input-field" type="text" onChange={this.handleChange} name="firstName" id="firstName"/>
                            </div>
                            <div className="teacher-setup-input-group">
                                <label htmlFor="lastName">Last Name</label>
                                <br/>
                                <input className="teacher-setup-input-field" type="text" onChange={this.handleChange} name="lastName" id="lastName"/>
                            </div>
                            <div className="teacher-setup-input-group">
                                <label htmlFor="displayName">Display Name</label>
                                <br/>
                                <input className="teacher-setup-input-field" type="text" onChange={this.handleChange} name="displayName" id="displayName"/>
                            </div>
                        </div> 
                            <hr />
                            <div className="teacher-setup-next-step-container">
                                <button className="action-button" onClick={this.nextStep2}>Next Step</button>
                            </div>
                    </div> :
                    <div>
                        <div className="teacher-setup-screen">
                            <h4>STEP2: CONFIRM YOUR PROFILE</h4>
                            <div className="finish-screen">
                                <div className="finish-screen-first-column">
                                    {/* <h6>Section</h6> */}
                                    Section
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="section1" id="section1">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="section2" id="section2">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="section3" id="section3">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="finish-screen-second-column">
                                    {/* <h6>Grade</h6> */}
                                    Grade
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="grade1" id="grade1">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="grade2" id="grade2">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="grade3" id="grade3">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="teacher-setup-next-step-container">
                            <button className="action-button" onClick={this.finishSetup}>Finish</button>
                        </div>
                    </div>
                )
               }
            </div>
        )
    }
}
