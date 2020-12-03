import React, { useState } from 'react'
import {dummyInvocation,saveInfo} from '../services/GenricService'
import {CreateTeacherSetup_URL} from './ConstFile'
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
        console.log("\n\nIn Teacher Setup, the value of data is ",data,"\n\n");
        // hardcode data in Divya's json structure.
        let teacherSetupPostData = {
            grade: 
            {
                teacherId: "T000124",
                "firstName":data.firstName,
                "lastName":data.lastName,
                dName:data.displayName,
                section: [
                    {
                        sectionId: "5000002",
                        sectionName: "period1",
                        gradeLevel : "2nd Grade"
                    },
                
                    {
                        sectionId: "5000005",
                        sectionName: "period2",
                        gradeLevel : "5th Grade"
                    },
                    
                    {
                        sectionId: "5000007",
                        sectionName: "period5",
                        gradeLevel : "7th Grade"
                    }
                ]
            }
        }
        // let apiResponse = await dummyInvocation("google.com", teacherSetupPostData);
        let apiReponse = saveInfo(CreateTeacherSetup_URL,teacherSetupPostData)
        console.log("dummyApiInvocation response is: ", apiResponse)
        this.props.hideModal();
    }

    handleChange = (event) => {
        //  console.log("event.target.name --> ", event.target.name);
        //  console.log("event.target.value --> ", event.target.value);
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
            <div className="modal-body">
               { this.state.whichScreen === 1 ?
                <div className="">
                    <div className="step1txt">Welcome to </div>
                        <div className="step1img">
                            <img src="../assets/images/bloom-logo.png"/>
                        </div> 
                    <div className="step1txt">Click Next step to continue</div>
                        <hr />
                        <div className="teacher-setup-next-step-container">
                            <button className="action-button btn btn-primary" onClick={this.nextStep1}>Next step</button>
                        </div>
                </div>
                : (
                    this.state.whichScreen ===2 ? 
                    <div>
                        <div className="step1txt">STEP1: CONFIRM YOUR PROFILE</div>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <br/>
                                <input className="form-control fromtotxtbox" type="text" onChange={this.handleChange} name="firstName" id="firstName"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <br/>
                                <input className="form-control fromtotxtbox" type="text" onChange={this.handleChange} name="lastName" id="lastName"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="displayName">Display Name</label>
                                <br/>
                                <input className="form-control fromtotxtbox" type="text" onChange={this.handleChange} name="displayName" id="displayName"/>
                            </div>
                            <hr />
                            <div className="teacher-setup-next-step-container">
                                <button className="action-button" onClick={this.nextStep2}>Next Step</button>
                            </div>
                    </div> :
                    <div>
                        <div className="step1txt">STEP2: ASSIGN GRADE LEVEL TO SECTIONS</div>
                         <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                 <div className="form-group">
                                     <label for>Section</label>
                                     <select className="form-control fromtotxtbox">
                                            <option value="Section 1 - a">Science 10234 - Period 1</option>
                                            <option value="Section 1 - b">Science 2232 - Period 2</option>
                                            <option value="Section 1 - c">Science 2335 - Period 3</option>
                                     </select>
                                 </div>
                             </div>
                             <div className="col-md-6 col-sm-12 col-xs-12">
                                 <div className="form-group">
                                     <label for>Grade Level</label>
                                     <select className="form-control fromtotxtbox">
                                            <option value="Section 1 - a">Kindergarten</option>   
                                     </select>
                                 </div>
                             </div>
                             <div className="col-md-6 col-sm-12 col-xs-12">
                                 <div className="form-group">
                                     <select className="form-control fromtotxtbox">
                                            <option value="Section 1 - a">Science 10234 - Period 1</option>
                                            <option value="Section 1 - b" selected>Science 2232 - Period 2</option>
                                            <option value="Section 1 - c">Science 2335 - Period 3</option>
                                     </select>
                                 </div>
                             </div>
                             <div className="col-md-6 col-sm-12 col-xs-12">
                                 <div className="form-group">
                                     <select className="form-control fromtotxtbox">
                                            <option value="Section 1 - a">Kindergarten</option>   
                                     </select>
                                 </div>
                             </div>
                             <div className="col-md-6 col-sm-12 col-xs-12">
                                 <div className="form-group">
                                     <select className="form-control fromtotxtbox">
                                            <option value="Section 1 - a">Science 10234 - Period 1</option>
                                            <option value="Section 1 - b">Science 2232 - Period 2</option>
                                            <option value="Section 1 - c" selected>Science 2335 - Period 3</option>
                                     </select>
                                 </div>
                             </div>
                             <div className="col-md-6 col-sm-12 col-xs-12">
                                 <div className="form-group">
                                     <select className="form-control fromtotxtbox">
                                            <option value="Section 1 - a">Kindergarten</option>   
                                     </select>
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
