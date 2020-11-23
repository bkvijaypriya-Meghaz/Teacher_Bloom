import React from 'react'
import { useState, useEffect } from 'react';
import Modal from '../components/modal/Modal';

import AssessmentDelete from '../components/modal_windows/AssessmentDelete'




export default function assessmentCards({ title, numberofquestions,date}) {


const [assessmentDeleteScreen1Visibility, setAssessmentDeleteScreen1Visibility] = useState(false);

const showAssessmentDeleteModal1 = () => {
	setAssessmentDeleteScreen1Visibility(true);
};

const hideAssessmentDeleteModal1 = () => {
	
	setAssessmentDeleteScreen1Visibility(false);
};




    return (
		 <div>
		
		<Modal
           isOpen={assessmentDeleteScreen1Visibility}
		   hideModal={hideAssessmentDeleteModal1}
            modalTitle= " "
        >
             <AssessmentDelete hideModal={hideAssessmentDeleteModal1}/> 
        </Modal>
        
         <div className="card user-card">
                                        <div className="card-block">
											<div className="row align-items-center justify-content-center">
												<div className="col-auto">
													<h5 className="m-b-15 text-uppercase lessonplanhead">{title}</h5>
												</div>
												<div className="col text-right assesstxt1">
													{numberofquestions}
												</div>
											</div>
                                            <span className="">Created On: <label className="label theme-bg f-12 f-w-400 text-white">{date}</label></span>
											<div className="m-t-10">
												<div className="row align-items-center justify-content-center">
													<div className="col-auto">
														<a href="viewAssessment" style={{color:'#888'}}>
														<div className="assicon"><i className="feather icon-eye"></i></div>
														<div className="asstxt">View</div>
														</a>
													</div>
													<div className="col-auto">
														<a href="editAssessment" style={{color:'#888'}}>
														<div className="assicon"><i className="feather icon-edit-2"></i></div>
														<div className="asstxt">edit</div>
														</a>
													</div>
													<div className="col-auto">
														<a href="copyAssessment" style={{color:'#888'}}>
														<div className="assicon"><i className="feather icon-copy"></i></div>
														<div className="asstxt">Copy</div>
														</a>
													</div>
													<div className="col-auto" data-toggle="modal" data-target="#assignpopup">
														<div className="assicon"><i className="feather icon-file-text"></i></div>
														<div className="asstxt">Assign</div>
													</div>
													<div className="col-auto" data-toggle="modal" data-target="#deletepopup">
														<div className="assicon"><i className="feather icon-trash-2" onClick={showAssessmentDeleteModal1}></i></div>
														<div className="asstxt">
															Delete
														</div>
													</div>
												</div>
											</div>
                                        </div>
                                    </div>
				</div>				
    )
}
                                    