import React , { useState } from 'react'
import TeacherLayout from '../layout/TeacherLayout';
import Modal from '../components/modal/Modal';
import CreateAssessmentAssign from '../components/modal_windows/CreateAssessmentAssign'
import { useForm } from "react-hook-form";
//import { useState, useEffect } from 'react';
//import {getInfo} from '../services/GenricService';
export default function create_assessments(props){
	  
	
	 {/* 
        const [newAssessments, setNewAssessments] = useState(0);
        const[newAssessmentList,setNewAssessmentList]=useState([])
    useEffect(() => { getInfo(`link`).then((data) => {
		//Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("grade:grade id",props.refresh)
        console.log('bloom data is : ',data);
        setAssessments(data);
        setAssessmentList(data.assessments);

    })
	}, [props.refresh])
*/}
const { register, handleSubmit ,errors } = useForm({
	mode:"onChange"})
	const onCreateAssessmentSubmit = data => console.log(data);

	const [createAssessmentAssignScreen1Visibility, setCreateAssessmentAssignScreen1Visibility] = useState(false);

const showCreateAssessmentAssignModal1 = () => {
	setCreateAssessmentAssignScreen1Visibility(true);
};
const hideCreateAssessmentAssignModal1 = () => {
	
	setCreateAssessmentAssignScreen1Visibility(false);
};

    return(
        <React.Fragment>
			<Modal
           isOpen={createAssessmentAssignScreen1Visibility}
		   hideModal={hideCreateAssessmentAssignModal1}
            modalTitle=  " " 
            >
             <CreateAssessmentAssign hideModal={hideCreateAssessmentAssignModal1}/> 
            </Modal>
        <TeacherLayout {...props}>
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                   {/*[ breadcrumb ] start */}
					
                   {/*[ breadcrumb ] end */}
                    <div className="main-body">
                        <div className="page-wrapper">
                           {/*[ Main Content ] start */}
                            <div className="row">
                               {/*[ daily sales section ] start */}
                               {/*[ Fixed Header ] start */}
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>New Assessment</h5>
                                        </div>
                                        <div className="card-block">
										<form onSubmit={handleSubmit(onCreateAssessmentSubmit)}>
                                          <div className="form-group">
												<label for="">Assessment Name</label>
												<input type="text" className="form-control" name="assessmentName" id="" placeholder="Name" ref={register ({ required: true}) }/>
										  </div>
										  <h5 className="m-t-10">Filter Questions</h5>
										  <hr/>
										  
										  <div className="row">
											<div className="col-md-6 col-sm-12 col-xs-12">
												<div className="form-group">
													<label for="">Curriculum areas</label>
													<select className="form-control"  name="curriculamAreas" ref={register ({ required: true}) }>
													{errors.curriculamAreas && <span>Must select one option</span>}
														<option>quiz</option>
													</select>
											  </div>
											</div>
											<div className="col-md-6 col-sm-12 col-xs-12">
											  <div className="form-group">
													<label for="">Standards or Lessons</label>
													<select className="form-control" ref={register ({ required: true}) }>
														<option>3.5A</option>
													</select>
											  </div>
											</div>
											<div className="col-md-4 col-sm-12 col-xs-12">
												<div className="form-group">
													<label for="">Keyword Search</label>
													<input type="text" className="form-control" name="keywordSearch" id="" placeholder="Keyword Search"  ref={register ({ required: true}) }/>
												    
												</div>
											</div>
											<div className="col-md-4 col-sm-12 col-xs-12">
												<div className="form-group">
													<label for="">Grade levels</label>
													<select className="form-control"  name="gradeLevels" ref={register ({ required: true}) }>
														<option>Third Grade</option>
													</select>
												</div>
											</div>
											<div className="col-md-4 col-sm-12 col-xs-12">
												<div className="form-group">
													<label for="">Topics</label>
													<select className="form-control"  ref={register ({ required: true}) }>
														<option>Heat</option>
													</select>
												</div>
											</div>
											</div>
											<h5 className="m-t-10"> Configure Grading</h5>
											<hr/>
											<div className="row">
											<div className="col-md-4 col-sm-12 col-xs-12 m-t-10">
												<div className="form-group d-inline">
													<div className="radio radio-primary d-inline">
														<input type="radio" name="perpoint" id="radio-p-fill-5" ref={register ({ required: true}) }/>
														<label for="radio-p-fill-5" className="cr">Percentage</label>
													</div>
												</div>
												<div className="form-group d-inline">
                                                        <div className="radio radio-primary d-inline">
                                                            <input type="radio" name="perpoint" id="radio-p-fill-6" checked  ref={register ({ required: true}) }/>
                                                            <label for="radio-p-fill-6" className="cr">Points</label>
                                                        </div>
                                                    </div>
											</div>
											<div className="col-md-4 col-sm-12 col-xs-12">
												<div className="form-group">
													<input type="number" className="form-control" id="points" placeholder="Total Points"  ref={register ({ required: true}) }/>
													<input type="hidden" value="4" id="totalques" ref={register ({ required: true}) }/>
												</div>
											</div>
											<div className="col-md-4 col-sm-12 col-xs-12 m-t-10">
												<div className="form-group d-inline">
													<div className="radio radio-primary d-inline">
														<input type="radio" name="divide" id="radio-p-fill-7" checked  ref={register ({ required: true}) }/>
														<label for="radio-p-fill-7" className="cr">Distribute Weight Evenly</label>
													</div>
												</div>
												<div className="form-group d-inline">
                                                        <div className="radio radio-primary d-inline">
                                                            <input type="radio" name="divide" id="radio-p-fill-8" ref={register ({ required: true}) }/>
                                                            <label for="radio-p-fill-8" className="cr">Custom Weight</label>
                                                        </div>
                                                    </div>
											</div>
										  </div>
										   <h5 className="m-t-10"> Additional Filters</h5>
										  <hr/>
										  
										  <div className="row">
											<div className="col-md-6 col-sm-12 col-xs-12 availableques section1">
												<h6>Available Questions</h6>
												<hr/>
												<div className="popuptxt ques" id="ques1">
												<h5 className="m-b-10">Question 1</h5>
											
												<h6>A student pushed a marble on the table. The marble moved. The picture shows the direction the marble moved. </h6>
												<div className="assquesimg"><img src="images/assessment/i1.png"/></div>
												<h6>Which picture shows what it would look like if the student pushed the marble in a DIFFERENT direction?</h6>
												<div className="row">
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg">
															<img src="images/assessment/i2.png"/>
														</div>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg correctans">
															<img src="images/assessment/i3.png"/>
														</div>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg">
															<img src="images/assessment/i4.png"/>
														</div>
													</div>
													
												</div>
											</div>
											<div className="popuptxt ques" id="ques2">
												<h5 className="m-b-10 m-t-20">Question 2</h5>
												
												<h6>Students push three wagons away from the door. The picture shows how far each wagon moved. </h6>
												<div className="assquesimg"><img src="images/assessment/i5.png"/></div>
												<h6>Which wagon was given the biggest push?</h6>
												<div className="row">
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg correctans">
															<img src="images/assessment/i6.png"/>
														</div>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg">
															<img src="images/assessment/i7.png"/>
														</div>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg">
															<img src="images/assessment/i8.png"/>
														</div>
													</div>
													
												</div>
											</div>
											<div className="popuptxt ques" id="ques3">
												<h5 className="m-b-10 m-t-20">Question 3</h5>
												
												<h6>The teacher threw a paper airplane. </h6>
												<div className="assquesimg"><img src="images/assessment/i9.png"/></div>
												<h6>Which student threw their paper airplane farther than the teacher?</h6>
												<div className="row">
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv correctans">
															Student 1
														</div>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv">
															Student 2
														</div>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv">
															Student 3
														</div>
													</div>
													
												</div>
											</div>
											<div className="popuptxt ques" id="ques4">
												<h5 className="m-b-10 m-t-20">Question 4</h5>
												
												<h6>Students sat in a chair and tried to throw balls into a square on the floor. </h6>
												<div className="assquesimg"><img src="images/assessment/i10.png"/></div>
												<h6>Which ball went in a different direction?</h6>
												<div className="row">
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg">
															<img src="images/assessment/i11.png"/>
														</div>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg">
															<img src="images/assessment/i12.png"/>
														</div>
													</div>
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg correctans">
															<img src="images/assessment/i13.png"/>
														</div>
													</div>
													
												</div>
											</div>
											</div>
											<div className="col-md-6 col-sm-12 col-xs-12">
												<h6>Selected Questions</h6>
												<hr/>
												<div className="leftweight">Points Left <input type="number" className="form-control btn-sm" id="leftweight" readonly="" ref={register ({ required: true}) }/></div>
												<div className="section2" id="selectedques">													
												</div>
											</div>
											<div className="col-md-12 col-sm-12 col-xs-12 m-t-20">
												<div className="form-group">
													<button  className="btn btn-primary btn-sm" data-toggle="modal" data-target="#createbtnpopup" onClick={showCreateAssessmentAssignModal1} ref={register}>Create Assessment</button>
												</div>
											</div>										
										  </div>
										  </form>
                                        </div>                                  
								    </div>									
                                </div>
                               {/*[ Fixed Header ] end */}    
                            </div>
                           {/*[ Main Content ] end */}
                        </div>
                    </div>
                </div>
            </div>
            </TeacherLayout>
            </React.Fragment>
            )
            }
            