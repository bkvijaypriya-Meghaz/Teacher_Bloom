import React ,{useState} from 'react';
import { FiCheck, FiSettings } from 'react-icons/fi';
import TeacherLayout from '../layout/TeacherLayout';
import Modal from '../components/modal/Modal';
import ConfigureGradingGeographyQuiz from "../components/modal_windows/ConfigureGradingGeographyQuiz"
import GradeAndComment from '../components/modal_windows/GradeAndComment'

function GeographyQuizGradeBookFilter(props){
    const [ConfigureGradingGeographyQuizScreen1Visibility, setConfigureGradingGeographyQuizScreen1Visibility] = useState(false);

    const showConfigureGradingGeographyQuizModal1 = () => {
        setConfigureGradingGeographyQuizScreen1Visibility(true);
    };
    const hideConfigureGradingGeographyQuizModal1 = () => {
        
        setConfigureGradingGeographyQuizScreen1Visibility(false);
    };
     const [GradeAndCommentScreen1Visibility, setGradeAndCommentScreen1Visibility] = useState(false);

    const showGradeAndCommentModal1 = () => {
        setGradeAndCommentScreen1Visibility(true);
    };
    const hideGradeAndCommentModal1 = () => {
        
        setGradeAndCommentScreen1Visibility(false);
    };
return(
<div>

 <Modal
    isOpen={ConfigureGradingGeographyQuizScreen1Visibility}
    hideModal={hideConfigureGradingGeographyQuizModal1}
     modalTitle= "Configure Grading"
 >
      <ConfigureGradingGeographyQuiz hideModal={hideConfigureGradingGeographyQuizModal1}/> 
 </Modal>
 <Modal
    isOpen={GradeAndCommentScreen1Visibility}
    hideModal={hideGradeAndCommentModal1}
     modalTitle= "Grade and Comment"
 >
      <GradeAndComment hideModal={hideGradeAndCommentModal1}/> 
 </Modal>
    <TeacherLayout {...props}>
        
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content"> 
                    <div className="main-body">
                        <div className="page-wrapper">                         
                            <div className="row">
								<div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">
									<div className="card Recent-Users">
										<div className="row" style={{borderBottom:"1px solid #f1f1f1"}} >
											<div className="col-md-11 col-sm-11 col-xs-11">
												<div className="card-header" style={{borderBottom:'none'}}>
													<h5>Grade Book Filter</h5>
												</div>
											</div>                                            
											<div className="col-md-1 col-sm-1 col-xs-1">
												<div className="gradesettingicon" >
													<i className=" " data-toggle="modal" data-target="#settingpopup" onClick={showConfigureGradingGeographyQuizModal1}><FiSettings/></i>
												</div>
											</div>
										</div>
										<div className="card-block">
											<div className="row">
													<div className="col-md-3">
														<div className="gradingfrtth">
															<div className="input-group">
																<input type="text" className="form-control btn-sm gradesearch" placeholder="Search"/>
																<div className="input-group-append">
																	<span className="input-group-text gradesearchicon" id="basic-addon2"><i className="feather icon-search"></i></span>
																</div>
															</div>
															<div className="text-center m-t-20 m-b-20">
																<div className="form-group">
																	<select className="form-control btn-sm gradesort">
																		<option>Sort By Name</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-9">
														<h3 >Geography Quiz</h3>
														<p >Grading Type</p>
														<div className="m-t-20">
															<div className="form-group">
																<label><b>Due Date :</b> 20/10/2020   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Question :</b> 11</label>
															</div>
														</div>
													</div>	
											</div>
											<div className="table-responsive">
												<table className="table table-hover table-striped table-bordered text-center" style={{overflow:"hidden"}}>
													<thead>
														<tr>
															<th>Question #</th>
															<th>1</th>
															<th>2</th>
															<th>3</th>
															<th>4</th>
															<th>Final Grade</th>
														</tr>
													</thead><thead>
													</thead><tbody>
														
														<tr style={{borderBottom: "4px solid #e2e2e2"}}>
															<td className="gradetablesidehead">Point Values</td>
															<td>15</td>
															<td>5</td>
															<td>10</td>
															<td>20</td>
															<td>50</td>
														</tr>
														<tr>
															<td>Ann Doe</td>
															<td><i className="gradetickicon" data-toggle="modal" data-target="#questionpopup" onClick={ showGradeAndCommentModal1} >
                                                              <FiCheck/>  </i></td>
															<td><i className="gradetickicon"> <FiCheck/></i></td>
															<td><i className="gradetickicon"> <FiCheck/></i></td>
															<td><i className="gradetickicon"> <FiCheck/></i></td>
															<td>50</td>
														</tr>
														<tr>
															<td>Brian Michael</td>
															<td><i className=" gradetickicon"> <FiCheck/></i></td>
															<td><i className="feather icon-x gradetickicon redicon"></i></td>
															<td><i className="feather icon-x gradetickicon redicon"></i></td>
															<td><i className="feather icon-x gradetickicon redicon"></i></td>
															<td>15</td>
														</tr>
														<tr>
															<td>Derak Voltez</td>
															<td><i className="feather icon-x gradetickicon redicon"></i></td>
															<td><i className="feather icon-x gradetickicon redicon"></i></td>
															<td><i className="gradetickicon"> <FiCheck/></i></td>
															<td><i className="gradetickicon"> <FiCheck/></i></td>
															<td>30</td>
														</tr>
														<tr>
															<td>Rebbeca Woods</td>
															<td><i className="feather icon-x gradetickicon redicon"></i></td>
															<td><i className=" gradetickicon"> <FiCheck/></i></td>
															<td><i className=" gradetickicon"> <FiCheck/></i></td>
															<td><i className="feather icon-x gradetickicon redicon"></i></td>
															<td>15</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </TeacherLayout> 
    </div>
    )
    }
    
    export default GeographyQuizGradeBookFilter;