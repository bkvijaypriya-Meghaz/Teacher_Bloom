import React,{useState} from 'react';
import {FiPlus} from 'react-icons/fi';
import TeacherLayout from '../layout/TeacherLayout';
import Modal from '../components/modal/Modal';
import FeedbackGradePostAssessment from "../components/modal_windows/FeedbackGradePostAssessment"
import Slider from "react-slick";



function GradePostAssessment(props){
	const studentList=[
		{
			id: '1',
			name: 'Ann Doe',    
			      
		  },
		  {
			id: '2',
			name: 'John williams',
			
		  },
		  {
			  id: '3',
			  name: 'Tanya Sharma',
			 
		  },
			
	]	
	
	var settings = {
		dots: false,
		infinite:true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:true,
		className:'slides',
		swipeToSlide:false
	 };
	
	
    const questions=[{
		questionId:"Question 1",
		questionType:"text",
		 question :"A flashlight produces light energy by using which one of the following types of energy from batteries?",
		 AnswerType:"text",
		 questionImagePath:"../assets/images/teacher/torch.png ",
		 answers:[
			 {
			   id:"1",
			   content:"A. Electrical"
			 },
			 {
			   id:"2",
			   content: "B. Solar"
   
			 },
			 {
			   id:"3",
			   content:"C. Nuclear"
   
			 },
			  {
			   id:"4",
			   content:"D. Sound"
   
			 }
			 
		 ],
		 correctAns:"A. Electrical"
   
	},
	{
	    questionId:"Question 2",
		questionType:"text",
		 question :"An object produces sound because it –",
		 AnswerType:"text",
		 questionImagePath:" ",
		 answers:[
			 {
			   id:"1",
			   content:"A. reflects light from the Sun"
			 },
			 {
			   id:"2",
			   content: "B. generates electrical energy"
   
			 },
			 {
			   id:"3",
			   content:"C. absorbs heat from water"
   
			 },
			  {
			   id:"4",
			   content:"D. causes air to vibrate"
   
			 }
			 
		 ],
		 correctAns: "D. causes air to vibrate"
   
	}   
	 ]
	 function addActiveClass(){

		let li= document.getElementsByClassName('nav-link text-left show');
		for(let i=0;i<li.length;i++)
		{
			li[i].onclick = e =>{
				let n=0;
				while(n < li.length)
				{
					li[n++].className ='nav-link text-left  show ';
					

				}
				e.target.className = 'nav-link text-left active show '
				
			}
		}
	}
		
	const [feedbackGradePostAssessmentScreen1Visibility, setFeedbackGradePostAssessmentScreen1Visibility] = useState(false);
    const showFeedbackGradePostAssessmentModal1 = () => {
	setFeedbackGradePostAssessmentScreen1Visibility(true);
    };
    const hideFeedbackGradePostAssessmentModal1 = () => {
	setFeedbackGradePostAssessmentScreen1Visibility(false);
    };	
    return(
        <React.Fragment>		
		<Modal
           isOpen={feedbackGradePostAssessmentScreen1Visibility}
		   hideModal={hideFeedbackGradePostAssessmentModal1}
            modalTitle=  "Feedback" 
        >
        <FeedbackGradePostAssessment hideModal={hideFeedbackGradePostAssessmentModal1}/> 
        </Modal>
		<TeacherLayout {...props}>
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/* <!-- [ breadcrumb ] start --> */}

                    {/* <!-- [ breadcrumb ] end --> */}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/* <!-- [ Main Content ] start --> */}
							<div className="row">
                                <div className="col-md-9 col-sm-12 col-xs-12">
									<div className="card">										
                                        <div className="card-block">
											<div className="row m-t-20 vst_tab">
											
											<div className="col-md-2 col-sm-12 planleftbar">
											                       
                                            <ul className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
												{questions.map((question,index)=>
													<li><a className="nav-link text-left show" id="questionTab " data-toggle="pill" role="tab" aria-controls="v-pills-questionsTab" aria-selected="false" key={index} onClick={addActiveClass}>{question.questionId}</a></li>
                                           		)}
                                               </ul> 
											</div>										
                                        <div className="col-md-10 col-sm-12">
											<div className="row slsubmenuhead">												
												<div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">													
													<div className="">
														<h5>Grade : Post-Assessment</h5>
													</div>													
												</div>												
											</div>
                                            <div className="tab-content" id="v-pills-tabContent">
											{questions.map((question,index)=>
                                                <div className="tab-pane fade active show" id="questionTab" role="tabpanel" aria-labelledby="v-pills-questionsTab" key={index}>
													<div className="card lessoncard">
														<div className="card-header">														
														<h5>{question.questionId}</h5>													
														</div>														
														<div className="card-block">
															<div className="popuptxt">
																<h6>{question.question}</h6>
																<div className="smallimgs"><img src={question.questionImagePath}/></div>
																<div className="row">
																{question.answers.map((list,index)=>
																	<div className="col-md-6 col-sm-12 col-xs-12 ">	
																		<div className="optiondiv" key={index}>
																			{list.content}
																		</div>																	
																	</div>
																)}
																	</div>
																<div className="pointshow m-t-20">
																	<div className="row">
																		<div className="col-md-2 col-sm-2 col-xs-2">
																			<input type="text" className="form-control pointdisplay btn-sm text-center" value="25" readonly=""/>
																		</div>
																		<div className="col-md-7 col-sm-7 col-xs-7 nopadding">
																			<div className="m-t-5"> / 25 Pts Possible</div>
																		</div>
																		<div className="col-md-3 col-sm-3 col-xs-3 text-right">
																			<button type="button" className="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#feedbackpopup"onClick={showFeedbackGradePostAssessmentModal1}><i className="feather icon-plus"><FiPlus/></i>Feedback</button>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>  
											)}     
												{/* question ends here*/}
                                        </div> 
                                        </div>
                                        </div>     
                                        </div>
                                    </div>
								</div>
                                <div className="col-md-3 col-sm-12 col-xs-12">

									<div className="card">
                                        <div className="card-block">
											<div className="gradeslider">
												<div className="slideshow-container"> 
												
													<div className="mySlides" style={{display:'block'}}>
													<Slider {...settings}>
														{studentList.map((student,index)=> {	
															return	(												
													  <div className="gradetxt" key={index}>{student.name}</div>
															)}
														)}
														</Slider>
													</div>	                                              
												  </div>
											</div>
										<div>
									</div>
											
											<div className="gradebtn">
											    <div className="row">
											        <input type="button" class="btn btn-sm btn-primary" value="Clear All"/>
										        	<input type="button" class="btn btn-sm btn-primary" value="Return"/>
											        <input type="button" class="btn btn-sm btn-primary" value="Complete"/>
											   </div>
											</div>
										</div>
									</div>
								</div>
								
                            </div>
                            {/* <!-- [ Main Content ] end --> */}
                        </div>
						
                    </div>
                </div>
            </div>
        </div>
    </div>
	</TeacherLayout>
	</React.Fragment>
	
    )
}
export default GradePostAssessment;