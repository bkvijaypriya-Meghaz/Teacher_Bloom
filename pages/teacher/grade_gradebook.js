import {FiLock} from 'react-icons/fi';
import TeacherLayout from '../../layout/TeacherLayout';

export default function Grade_gradebook (props){

    const openPopup = ()  =>{
        //console.log(document.getElementById("popupBtn").getAttributeNames());
        if(document.getElementById("popupGradeBook").classList.contains("show")){
            document.getElementById("popupGradeBook").classList.remove("show")
        }
        else
            document.getElementById("popupGradeBook").classList.add("show");
    }
    return(
        <TeacherLayout {...props}>
             {/* <!-- [ Main Content ] start --> */}
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/* <!-- [ breadcrumb ] start --> */}
					<div className="page-header">
                        <div className="page-block">							
                            <div className="row align-items-center">
                                <div className="col-md-12">                                    
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item breadcrumb-itemStyle"><a href="#!">My Classes</a></li>
                                        <li className="breadcrumb-item breadcrumb-itemStyle"><a href="#!">4th Grade Science</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <div className="card cardbreadcrum">
                                        <div className="card-block nopadding">
                                            <div className="row nomargin">
                                                <div className="col text-right">
                                                    <div className="card-header card-headerStyle" >
                                                        <div className="card-header-right">
                                                            <div className="btn-group card-option">
                                                                <button type="button" className="btn dropdown-toggle"  onClick={openPopup} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="feather icon-more-horizontal"></i>
                                                                </button>
                                                                <ul id="popupGradeBook" className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                                                    <li className="dropdown-item disablecursoronly">
                                                                        <a href="#!"><span>2nd Grade <i className="rytdropdownicon"><FiLock/></i></span></a>
                                                                    </li>
                                                                    <li className="dropdown-item disablecursoronly"><a href="#!"><span>3rd Grade <i className="rytdropdownicon"><FiLock/></i></span></a>
                                                                    </li>															
                                                                    <li className="dropdown-item"><a href="#!"><span>4th Grade</span></a></li>
                                                                    <li className="dropdown-item disablecursoronly"><a href="#!"><span>5th Grade <i className="rytdropdownicon"><FiLock/></i></span></a></li>																													
                                                                </ul>
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
                    {/* <!-- [ breadcrumb ] end --> */}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/* <!-- [ Main Content ] start --> */}
							
                            <div className="row">
                                {/* <!-- [ daily sales section ] start --> */}
                                
								<div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Class Grade Summary</h5>
                                        </div>
                                        <div className="card-block">
                                            
											<div className="row">
												<div className="col-2 text-center">
													<div data-label="20%" className="radial-bar radial-bar-25 radial-bar-lg radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="William Johnson<br>Denise Coso<br>Tanya Sharma<br>John Nokes"></div>
													<div className="gradename">A</div>
												</div>
												<div className="col-2 text-center">
													<div data-label="30%" className="radial-bar radial-bar-30 radial-bar-lg radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Ann Doe<br>Mason Logan"></div>
													<div className="gradename">B</div>
												</div>
												<div className="col-2 text-center">
													<div data-label="25%" className="radial-bar radial-bar-25 radial-bar-lg radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Brian Michaelis"></div>
													<div className="gradename">C</div>
												</div>
												<div className="col-2 text-center">
													<div data-label="15%" className="radial-bar radial-bar-15 radial-bar-lg radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Evelyn Oliver"></div>
													<div className="gradename">D</div>
												</div>
												<div className="col-2 text-center">
													<div data-label="10%" className="radial-bar radial-bar-10 radial-bar-lg radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Eric Betteli<br>Sophia Brown"></div>
													<div className="gradename">F</div>
												</div>
												<div className="col-2 text-center">
													<div data-label="10" className="radial-bar radial-bar-100 radial-bar-lg radial-bar-success totalgradecircle"></div>
													<div className="totalgradename">Total Students</div>
												</div>
												
											</div>
                                        </div>
                                    </div>
                                </div>
								{/* <!-- [ Fixed Header ] start --> */}
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Student Grades</h5>
                                        </div>
                                        <div className="card-block">
                                            <div className="table-responsive">
                                                <table id="fixed-columns-left" className="display table nowrap table-striped table-hover widthStyle">
                                                    <thead>
                                                        
														<tr>
                                                            <th>Name</th>
                                                            <th className="textcenter">Energy Transfer Assessment</th>
                                                            <th className="textcenter">Science Rock</th>
                                                            <th className="textcenter">Energy CER</th>
                                                            <th className="textcenter">Writing Science</th>
                                                            <th className="textcenter">Concept Attainment Quiz</th>
                                                            <th className="textcenter">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
														<tr>
                                                            <td>
                                                                <h6 className="m-0">
                                                                    <img className="rounded-circleStyle m-r-10" src="../assets/images/user/avatar-2.jpg" 
                                                                    alt="activity-user"/>William Johnson</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Turned In, Not Graded"></button></td>
															<td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">A</td>
                                                        </tr>

														<tr>
                                                            <td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10" src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Ann Doe</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor" data-toggle="tooltip" data-placement="bottom" title="Not Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor" data-toggle="tooltip" data-placement="bottom" title="Turned In, Not Graded"></button></td>
															<td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor" data-toggle="tooltip" data-placement="bottom" title="Not Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">B</td>
                                                        </tr>
														<tr>
															<td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10" src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>John Nokes</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
															<td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">A</td>
                                                        </tr>
														<tr>
															<td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>Brian Michaelis</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">C</td>
                                                        </tr>
														<tr>
															<td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Evelyn Oliver</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : C<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">D</td>
                                                        </tr>
														<tr>
															<td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Sophia Brown</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">F</td>
                                                        </tr>
														<tr>
															<td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>Eric Betteli</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : C<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">F</td>
                                                        </tr>
														<tr>
															<td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Denise Coso</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">A</td>
                                                        </tr>
														<tr>
															<td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>Mason Logan</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : B<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">B</td>
                                                        </tr>
														<tr>
															<td>
                                                                <h6 className="m-0"><img className="rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Tanya Sharma</h6>
                                                            </td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-warning gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-danger gradecolor"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success gradecolor" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Grade : A<br>Graded & Turned In"></button></td>
                                                            <td className="textcenter table-responsive-tdStyle">A</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ Fixed Header ] end --> */}
								
								
								
                                
                                

                                
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