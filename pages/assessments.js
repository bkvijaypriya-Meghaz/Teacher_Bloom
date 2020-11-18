{ /*import assessmentCards from './assessmentCards'*/}
import React from 'react'
import TeacherLayout from '../layout/TeacherLayout';
import {FiPlus} from  'react-icons/fi'
import AssessmentCard from './assessmentCards'


export default function assessments(props){

    
    return(
        <TeacherLayout {...props}>

<div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                   { /* [ breadcrumb ] start  */}

                   { /* [ breadcrumb ] end  */ }
                    <div className="main-body">
                        <div className="page-wrapper">
                        { /*  [ Main Content ] start  */}
                            <div className="row">
                            { /* [ daily sales section ] start */}
                                
								
                             <div className="col-md-6 col-xl-4 col-sm-12 col-xs-12">
							 <AssessmentCard title='Human Body Practice Test' numberofquestions='20 Questions' date='1st Jan 2020'/>          
							 </div>
							 <div className="col-md-6 col-xl-4 col-sm-12 col-xs-12">
							 <AssessmentCard title='Beginning of Year Test' numberofquestions='10 Questions' date='12th Jan 2019'/>          
							 </div>
							 <div className="col-md-6 col-xl-4 col-sm-12 col-xs-12">
							 <AssessmentCard title='Energy Quiz' numberofquestions='5 Questions' date='1st Jan 2020'/>          
							 </div>
							 <div className="col-md-6 col-xl-4 col-sm-12 col-xs-12">
							 <AssessmentCard title='Gravity &amp; Magnetism Test' numberofquestions='25 Questions' date='26th Feb 2020'/>          
							 </div>
							 <div className="col-md-6 col-xl-4 col-sm-12 col-xs-12">
							 <AssessmentCard title='End of Year Test' numberofquestions='30 Questions' date='25th Dec 2019'/>          
							 </div>
                                
								
								
														
													
                                
							
                                
								
								
								<div className="col-md-6 col-xl-4 col-sm-12 col-xs-12">
                                { /* <div className="card user-card" id="createlesson">
                                        <a href="">
										<div className="card-block card-headerStyle">
											<div className="row align-items-center justify-content-center">
												<div className="createassessment"><i className="feather icon-plus f-20"></i> Create New Assessment</div>
											</div>
                                        </div>
										</a>
                                </div> */}
                                 <div className="card user-card" id="createlesson">
                                        <a href="create_assessment.php">
										<div className="card-block " style={{background: '#fff'}} >
											<div className="row align-items-center justify-content-center">
												<div className="createassessment"><i className="feather icon-plus f-20"><FiPlus/></i> Create New Assessment</div>
											</div>
                                        </div>
										</a>
                                    </div>
									
                                </div>
								
								
                                
                                

                                
                            </div>
                            { /*   [ Main Content ] end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </TeacherLayout>
    )
   
}