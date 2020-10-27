import TeacherLayout from '../../layout/TeacherLayout';
// import GradeAssignment  from './GradeAssignment';
// import GradeStartClass from './GradeStartClass';
import {FiUser, FiLock} from 'react-icons/fi';

export default function (props){

   
    const openPopup = ()  =>{
        //console.log(document.getElementById("popupBtn").getAttributeNames());
        if(document.getElementById("popup").classList.contains("show")){
            document.getElementById("popup").classList.remove("show")
        }
        else
            document.getElementById("popup").classList.add("show");
    }

    return(
    <TeacherLayout {...props}>
        {/* <!-- [ Main Content ] start --> */}
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/* <!-- [ breadcrumb ] start --> */}

                    {/* <!-- [ breadcrumb ] end --> */}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/* <!-- [ Main Content ] start --> */}
                            {/* <!--
							<div className="row">
                                <div className="col-md-12 col-xl-10">
									<div className="pagedropdown">
										<label style="font-weight: bold;font-size: 17px;">Select Grade</label>
										<select className="form-control" style="background: #fff; border-radius:0px;">
											<option value="2nd Grade">2nd Grade</option>
											<option value="3rd Grade">3rd Grade</option>
											<option value="4th Grade">4th Grade</option>
											<option value="5th Grade">5th Grade</option>
										</select>
									</div>
								</div>
								
							</div>
							-->  */}
							<div className="row">
                                <div className="col-md-12 col-xl-1">								</div>                                <div className="col-md-12 col-xl-10">
                                    <div className="card">
                                        <div className="card-block border-bottom myclass-card">
                                            <div className="row">
                                                <div className="col-auto"> 
													<h3>Science</h3>
                                                    <h5 className="text-c-green mb-0">4<sup>th</sup> Grade</h5>
                                                </div>
												<div className="col text-right">
												<div className="card-header card-headerStyle">
												<div className="card-header-right">
													<div className="btn-group card-option">
														<button type="button" id="popupBtn" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i className="feather icon-more-horizontal" onClick={openPopup} ></i>
														</button>
														<ul id="popup" className="list-unstyled card-option dropdown-menu dropdown-menu-right">
															
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>2nd Grade <i className="rytdropdownicon"><FiLock/></i></span></a></li>
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>3rd Grade <i className="rytdropdownicon"><FiLock/></i></span></a></li>
															<li className="dropdown-item"><a href="#!"><span>4th Grade</span></a></li>
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>5th Grade <i className="rytdropdownicon"><FiLock/></i></span></a></li>
															
														</ul>
													</div>
												</div>
												</div>
												</div>
                                                
                                            </div>
                                        </div>
                                        <div className="card-block myclass-card">
                                            <div className="row align-items-center justify-content-center card-active text-center">
                                                <div className="col-3">
                                                    <a href="grade_student">
                                                        <label className="label f-12 f-w-400 gradeitem">
                                                             <i className="feather"><FiUser/></i> <br/>Students</label></a>
                                                </div>
												<div className="col-3">
                                                    <a href="grade_assignment"><label className="label f-12 f-w-400 gradeitem"> <i className="feather icon-file-text"></i> <br/>Assignments</label></a>
                                                </div>
												<div className="col-3">
                                                    <a href="grade_startclass"><label className="label f-12 f-w-400 gradeitem"> <i className="feather icon-play"></i> <br/>Start Class</label></a>
                                                </div>
												<div className="col-3">
                                                    <a href="grade_gradebook"><label className="label f-12 f-w-400 gradeitem"> 
                                                    <i className="icon-book-open"></i> <br/>Grade Book</label></a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>								<div className="col-md-12 col-xl-1">								</div>
								
								
								{/* <!--
								<div className="col-md-6 col-xl-4">
									<a href="grade" style="color:#888;">
                                    <div className="card table-card">
                                        <div className="row-table">
                                            <div className="col-auto theme-bg text-white p-t-50 p-b-50">
                                                <i className="feather icon-package f-30"></i>
                                            </div>
                                            <div className="col text-center">
                                                <h3 className="f-w-300 text-uppercase m-b-10">Science</h3>
                                                <span className="d-block gradetxt">2<sup>nd</sup> Grade</span>
                                            </div>
                                        </div>
                                    </div>
									</a>
                                </div>
								--> */}
								
                            </div>
                            {/* <!-- [ Main Content ] end --> */}
                        </div>
						
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- [ Main Content ] end --> */}
    </TeacherLayout>
    )
}