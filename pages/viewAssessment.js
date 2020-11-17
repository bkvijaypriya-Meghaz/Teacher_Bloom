import React from 'react'
import TeacherLayout from '../layout/TeacherLayout';
import {getInfo} from '../services/GenricService'
function viewAssessment(props) {
    return (
		<TeacherLayout {...props}>
        
            <div>  
                <div classNameName="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                             <div className="pcoded-inner-content">
                                {/* [ breadcrumb ] start */}
					            {/* [ breadcrumb ] end */}
                                <div className="main-body">
                                <div className="page-wrapper">
                                    {/* [ Main Content ] start */}
                                <div className="row">
                                    {/* [ daily sales section ] start */}
                                    {/* [ Fixed Header ] start */}
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Human Body Practice Test</h5>
                                            </div>
                                        <div className="card-block">
                                        <div className="row">
											<div className="col-md-12 col-sm-12 col-xs-12 availableques">
											    <div className="popuptxt m-b-20">
													<h5 className="">Question 1</h5>
													<h6>Which body system is responsible for the movement of the body, as well as the movement of internal organs?</h6>
												<div className="row">
													<div className="col-md-6 col-sm-6 col-xs-12">
														<div className="optiondiv">
																Skeletal System
														</div>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv">
																Digestive System
															</div>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv correctans">
																Muscular System
															</div>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv">
																Integument System
															</div>
														</div>
													</div>
												</div>
												<div className="popuptxt m-b-20">
													<h5 className="">Question 2</h5>
													<h6>The main function of the circulatory system is to - </h6>
													<div className="row">
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv">
																send signals in the form of hormones to the body to control growth, reproduction, and metabolism.
															</div>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv">
																exchange gases, mostly carbon dioxide and oxygen, between the body and the atmosphere.
															</div>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv">
																convert food into simpler substance for the body to absorb as nutrients.
															</div>
														</div>
														
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv correctans">
																transport blood through the body to supply cells with oxygen and nutrients.
															</div>
														</div>
														
													</div>
												</div>
												<div className="popuptxt m-b-20">
													<h5 className="">Question 3</h5>
													<h6>Which body system provides a structural support for the body and its muscles?</h6>
													<div className="row">
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv correctans">
																Skeletal System
															</div>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv">
																Digestive System
															</div>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv">
																Muscular System
															</div>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-12">
															<div className="optiondiv">
																Integument System
															</div>
														</div>
														
													</div>
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
       </div>
   
   </TeacherLayout>
    )
}

export default viewAssessment
