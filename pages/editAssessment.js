import React from 'react'
import TeacherLayout from '../layout/TeacherLayout';
import {getInfo} from '../services/GenricService'

function editAssessment(props) {

    /*
	 const [Studentdata, setStudentData] = useState(0);

	 useEffect(() => { getInfo(`${ASSIGNMENT_TO_BE_GRADED}/786868/assignments/to-be-graded`).then((data) => {
		//Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("edit Assessment",props.refresh)
        console.log('bloom data is : ',data);
        setAssignment(data);
        setAssignmentList(data.Studentdata)

    })
	}, [props.refresh])*/



    return (
		<TeacherLayout {...props}>
       
        <div>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                              {/*-- [ breadcrumb ] start --*/}
				              {/*-- [ breadcrumb ] end --*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                               {/*-- [ Main Content ] start */}
                                <div className="row">
                                    {/* [ daily sales section ] start */}
                                    {/* [ Fixed Header ] start */}
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Human Body Practice Test</h5>
                                            </div>
                                        <div className="card-block">
                                            <div className="form-group">
												<label for="">Assessment Name</label>
												<input type="text" className="form-control" id="" placeholder=""/>
										    </div>
										    <h5 className="m-t-10">Filter Questions</h5>
										    <hr/>
										        <div className="row">
											        <div className="col-md-6 col-sm-12 col-xs-12">
												        <div className="form-group">
													        <label for="">Curriculum areas</label>
													        <select className="form-control">
														        <option></option>
													        </select>
											            </div>
											        </div>
											    <div className="col-md-6 col-sm-12 col-xs-12">
											    <div className="form-group">
													<label for="">Standards or Lessons</label>
													    <select className="form-control">
														    <option></option>
													    </select>
											        </div>
											    </div>
											    <div className="col-md-4 col-sm-12 col-xs-12">
												    <div className="form-group">
													    <label for="">Keyword Search</label>
													    <input type="text" className="form-control" id="" placeholder=""/>
												    </div>
											    </div>
											    <div className="col-md-4 col-sm-12 col-xs-12">
												    <div className="form-group">
													    <label for="">Grade levels</label>
													    <select className="form-control">
														    <option></option>
													    </select>
												    </div>
											    </div>
											    <div className="col-md-4 col-sm-12 col-xs-12">
												    <div className="form-group">
													    <label for="">Topics</label>
													    <select className="form-control">
														    <option></option>
													    </select>
												    </div>
											    </div>
										    </div>
										        <h5 className="m-t-10"> Additional Filters</h5>
										    <hr/>
										    <div className="row">
											    <div className="col-md-6 col-sm-12 col-xs-12 availableques">
												    <h6>Available Questions</h6>
												    <hr/>
												<div className="popuptxt" id="ques1">
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
										</div>
											<div className="col-md-6 col-sm-12 col-xs-12">
												<h6>Selected Questions</h6>
												<hr/>
												    <div className="" id="selectedques">
													    <div className="popuptxt" id="ques2">
												            <h5 className="m-b-10 m-t-20">Question 2</h5>
												            <h6>Students push three wagons away from the door. The picture shows how far each wagon moved. </h6>
												        <div className="assquesimg"><img src="images/assessment/i5.png"/></div>
												        <h6>Which wagon was given the biggest push?</h6>
												    <div className="row">
													<div className="col-md-4 col-sm-6 col-xs-12">
														<div className="optiondiv assessquesimg correctans"/>
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
											<div className="popuptxt" id="ques3">
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
											<div className="popuptxt" id="ques4">
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
										</div>
										<div className="col-md-12 col-sm-12 col-xs-12 m-t-20">
											<div className="form-group">
												<input type="button" value="Create Assessment" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#createbtnpopup"/>
											</div>
										</div>
									</div>
								</div>
                            </div>
                        </div>
                                {/* [ Fixed Header ] end */}
					 </div>
                            {/* [ Main Content ] end */}
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </TeacherLayout>
    )
}
export default editAssessment
