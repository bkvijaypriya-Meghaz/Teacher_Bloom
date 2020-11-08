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
                        <div className="teacher-setup-bloom-logo">
                            <img src="../assets/images/bloom-logo.png" className="bloomlogo"/>
                        </div> <br />
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
                                    Section
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="section1" id="section1">
                                            <option value="Section 1 - a">Section 1 - a</option>
                                            <option value="Section 1 - b">Section 1 - b</option>
                                            <option value="Section 1 - c">Section 1 - c</option>
                                            <option value="Section 1 - d">Section 1 - d</option>
                                        </select>
                                    </div>
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="section2" id="section2">
                                            <option value="Section 2 - a">Section 2 - a</option>
                                            <option value="Section 2 - b">Section 2 - b</option>
                                            <option value="Section 2 - c">Section 2 - c</option>
                                            <option value="Section 2 - d">Section 2 - d</option>
                                        </select>
                                    </div>
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="section3" id="section3">
                                            <option value="Section 3 - a">Section 3 - a</option>
                                            <option value="Section 3 - b">Section 3 - b</option>
                                            <option value="Section 3 - c">Section 3 - c</option>
                                            <option value="Section 3 - d">Section 3 - d</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="finish-screen-second-column">
                                    Grade
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="grade1" id="grade1">
                                            <option value="Kindergarten">Kindergarten</option>
                                            <option value="Grade-1">Grade-1</option>
                                            <option value="Grade-2">Grade-2</option>
                                            <option value="Grade-3">Grade-3</option>
                                        </select>
                                    </div>
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="grade2" id="grade2">
                                            <option value="Kindergarten">Kindergarten</option>
                                            <option value="Grade-1">Grade-1</option>
                                            <option value="Grade-2">Grade-2</option>
                                            <option value="Grade-3">Grade-3</option>
                                        </select>
                                    </div>
                                    <div className="teacher-setup-select-group">
                                        <select className="teacher-setup-select-field" onChange={this.handleChange} name="grade3" id="grade3">
                                            <option value="Kindergarten">Kindergarten</option>
                                            <option value="Grade-1">Grade-1</option>
                                            <option value="Grade-2">Grade-2</option>
                                            <option value="Grade-3">Grade-3</option>
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
