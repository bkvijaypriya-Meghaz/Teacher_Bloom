import React, { useState } from 'react'
//import { saveInfo, getInfoAPI } from '../services/GenricService'
import axios from 'axios'
//import {GET_SECTION} from '../components/ConstFile';


export class TeacherSetup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            "teacherSetup": 
            {
             teacherId:"T00099",
             firstName:"",
             lastName:"",
             dName :"",
            section: [
                {
                    sectionId:"5000002",
                    sectionName: "",
                    gradeLevel : ""
                }
            ]
            },    
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
            name:[],
           
        };
    }

    async componentDidMount() {

        
        //getInfoAPI(`${GET_SECTION}/S00111`).then((data) => {

       const apiUrl = 'http://localhost:7071/api/teacher/setup/S00111'
        const response=await fetch(apiUrl)
        const data = await response.json()
        this.state.grade=data
        console.log('compound mount--.',data)  
        console.log('section name:',data[0].section)
        console.log('comp mount:',this.state.dispname)

        let teacherSetup={
               
            ...this.state.teacherSetup,
                 section:data[0].section.map((item)=>{
                 return{
                    sectionId:item.sectionId,
                    sectionName: item.sectionName,
                    gradeLevel : ""
                }

             })
           
        }
        this.setState({
            name:data[0].section,

            teacherSetup
            
        })
    
     
    }


    nextStep1 = () => {
        this.setState((prevState)=>{
            return {
                ...prevState,
                whichScreen:2
            }
        });
    }

    nextStep2 = (event) => {
        
        
        let teacherSetup = this.state.teacherSetup
        let index = event.target.dataset.index;
        teacherSetup.firstName = this.state.firstName
        teacherSetup.lastName=this.state.lastName
        teacherSetup.dName=this.state.displayName
        this.setState((prevState)=>{
            
            return {
                ...prevState,
                teacherSetup,
                
                whichScreen:3
            }
        });

        console.log('teachersetup:',teacherSetup.firstName)
        console.log('teachersetup:',teacherSetup.lastName)
        console.log('teachersetup:',teacherSetup.dName)
    }

    finishSetup = async () => {
        console.log("invoke api here & close the modal");
        console.log("teacherid:",this.state.teacherSetup.teacherId)
       // console.log("sectionid:",this.state.teacherSetup.section[0].sectionId)

        for(let i=0;i<this.state.name.length;i++)
        {
        console.log('name--.',this.state.name[i].sectionName)
        }


        let data3={
            
            "teacherSetup": 
            {
             teacherId:"T00099",
             firstName:"neha",
             lastName:"sharma",
             dName :"neha sharma",
            section: [
                {
                    sectionId:"5000002",
                    sectionName: "period 2",
                    gradeLevel : "grade 3"
                }
            ]
            } 

    }    
         
    
       
   
       let data2= {teacherSetup:this.state.teacherSetup};
            console.log('data2',JSON.stringify(data2));
            axios.post('http://localhost:7071/api/teachersections-create', data2)
            .then(response => {
                console.log(response);
            })


        
        

        console.log('data2:',data2)
        
        /*let apiResponse = await dummyInvocation("google.com", data2);
        console.log("dummyApiInvocation response is: ", apiResponse)*/
        this.props.hideModal();
    
    }

    changehandler = (event) => {
        //console.log("event.target.dataset.index --> ", event.target.dataset.index);
        //console.log("event.target --> ", event.target);
        //console.log("event.target.value --> ", event.target.value);
        let name = event.target.name;
        let value = event.target.value;
        
        let teacherSetup = this.state.teacherSetup
       
        let index = event.target.dataset.index;
        teacherSetup.section[index].gradeLevel = event.target.value
      
        
        
        
        //this.setState({gradeL:value})
        this.setState((prevState) => {
            return {
                ...prevState,
                teacherSetup 
                

            }
        });

    }

    handleChange = (event) => {
        //console.log("event.target.name --> ", event.target.name);
        //console.log("event.target.value --> ", event.target.value);
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
                        <div className="step1txt">
                            Click Next step to continue
                        </div>
                        <hr />
                        <div className="teacher-setup-next-step-container">
                            <button className="action-button btn btn-primary" onClick={this.nextStep1}>Next step</button>
                        </div>
                        
                    </div>
                    
                : (
                    this.state.whichScreen ===2 ? 
                        <div>
                            <div className="step1txt">STEP1: CONFIRM YOUR PROFILE
                            </div>
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
                            
                        </div> 
                        
                        :
                    (    
                        <div> 
                            <div className="step1txt">
                                STEP2: ASSIGN GRADE LEVEL TO SECTIONS
                            </div>
                            {
                            this.state.name.map((item,i)=>
                                (
                                <div className="row">
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group" style={{width:'170px'}}>
                                                <label name="section">{item.sectionName}</label>
                                        </div>
                                        </div> 

                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group" > 
                                                <select data-index={i}  className="form-control fromtotxtbox" onChange={this.changehandler} name="grade">
                                                    <option value="">Select</option> 
                                                    <option value="Kindergarten">Kindergarten</option>
                                                    <option value="Grade 1">Grade 1</option> 
                                                    <option value="Grade 2">Grade 2</option> 
                                                    <option value="Grade 3">Grade 3</option> 
                                                    <option value="Grade 4">Grade 4</option> 
                                                    <option value="Grade 5">Grade 5</option> 
                                                    <option value="Grade 6">Grade 6</option> 
                                                    <option value="Grade 7">Grade 7</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>  
                                ))
                            } 
                           {/* {JSON.stringify(this.state.teacherSetup)}*/}
                            <hr />
                            <div className="teacher-setup-next-step-container">
                                <button className="action-button btn btn-primary" onClick={this.finishSetup}>Finish</button>
                            </div>
                        </div> 
                    )              
                )  
               }
            </div>       
        )
    }
}    

        
                           
                        
               
