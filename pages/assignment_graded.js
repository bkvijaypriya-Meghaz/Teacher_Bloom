import TeacherLayout from '../layout/TeacherLayout';
import {FiEye} from 'react-icons/fi';
export default function Assignment_graded (props){
    {/* 
        const [studentActivity, setStudentActivity] = useState(0);
        const[studentActivityList,setstudentActivityList]=useState([])
    useEffect(() => { getInfo(`link`).then((data) => {
		//Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("grade:grade id",props.refresh)
        console.log('bloom data is : ',data);
        setStudentActivity(data);
        setStudentActivityList(data.activities);

    })
	}, [props.refresh])
*/}
return(
    <TeacherLayout {...props}>
         {/* <!-- [ Main Content ] start --> */}
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
<div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/*[ breadcrumb ] start */}

                    {/*[ breadcrumb ] end */}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/*[ Main Content ] start */}
                            <div className="row">
                                {/*[ daily sales section ] start */}
                                
								
								<div className="col-md-12 col-xl-12 col-sm-12 col-xs-12">
                                    <div className="card user-card">
                                        <div className="card-block">
											<div className="row">
												<div className="col-md-7 col-sm-12 col-xs-12">
													<h5 className="m-b-15 text-uppercase lessonplanhead">Energy Assessment</h5>
													<div className="row assigngradetxt">
															
															<div className="col-auto">
																<span className=""><b>Date Assigned:</b> 8th Jan 2020</span>
															</div>
															<div className="col-auto">
																<span className=""><b>Start:</b> 8th Feb 2020 1:00 PM</span>
															</div>
															<div className="col-auto">
																<span className=""><b>Due:</b> 8th Feb 2020 2:00 PM</span>
															</div>
															
													</div>
													<div className="row m-t-20 m-b-20 assigngradetxt">
															<div className="col-auto">
																<span className=""><b>Assigned From:</b> Post-Assessment Energy</span>
															</div>
															<div className="col-auto">
																<span className=""><b>Assigned Section:</b> 4th Grade Science</span>
															</div>
															
													</div>
													
												</div>
												<div className="col-md-5 col-sm-12 col-xs-12">
													<div className="m-t-10">
														<div className="row align-items-center justify-content-center">
															<div className="col-auto"> 
																<a href="./gradePostAssessment" style={{color:"#888"}}>
																<div className="assicon1"><i className="feather icon-file-text"></i></div>
																<div className="asstxt1">Grade</div>
																</a>
															</div>
															<div className="col-auto" data-toggle="modal" data-target="#editassignpopup">
																
																<div className="assicon1"><i className="feather icon-edit-2"></i></div>
																<div className="asstxt1">Edit Assignment</div>
																
															</div>
															<div className="col-auto">
																<a href="" style={{color:"#888"}}>
																<div className="assicon1"><i className="feather icon-eye"><FiEye/></i></div>
																<div className="asstxt1">View Class Result</div>
																</a>
															</div>
															<div className="col-auto">
																<div className="assicon1"><i className="feather icon-download"></i></div>
																<div className="asstxt1">Download Grades</div>
															</div>
															<div className="col-auto">
																<div className="assicon1"><i className="feather icon-trash-2"></i></div>
																<div className="asstxt1">Archive</div>
															</div>
														</div>
													</div>
													<div className="row align-items-center justify-content-center m-t-20">
															<div className="col-auto">
																<span className="">Average: <label className="label theme-bg f-12 f-w-400 text-white"> 100 Pts</label></span>
															</div>
															<div className="col-auto">
																<span className="">Completion: <label className="label theme-bg f-12 f-w-400 text-white"> 100%</label></span>
															</div>
															<div className="col-auto">
																<span className="">Graded: <label className="label theme-bg f-12 f-w-400 text-white"> 100%</label></span>
															</div>
													</div>
												</div>
											</div>
											
                                            
											
                                        </div>
                                    </div>
                                </div>
								
								
								<div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">
									<div className="card Recent-Users">
										<div className="card-header">
											<h5>Student Activity</h5>
											
										</div>
										<div className="card-block px-0 py-3">
											
											<div className="table-responsive">
												<table className="table table-hover">
													<thead>
														<tr>
															<th>Name</th>
															<th>Submitted At</th>
															<th>TIme to Complete</th>
															<th>Status</th>
															<th>Total</th>
															<th>Action</th>
														</tr>
													</thead><thead>
													</thead><tbody>
														
														<tr className="unread">
															<td>
																<h6 className="text-muted">Ann Doe</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="#!" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="#!" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">Brian Michaels</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">Denise Coso</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">Eric Betteli</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">Evelyn Oliver</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">John Nokes</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">Mason Lagon</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">Sophia Brown</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">Tanya Sharma</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
														<tr className="unread">
															<td>
																<h6 className="text-muted">William Johnson</h6>
															</td>
															<td><h6 className="text-muted">8th Feb 2020 2:30 PM</h6></td>
															<td><h6 className="text-muted">90 Minutes</h6></td>
															<td><h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Completed</h6></td>
															<td><h6 className="text-muted">100</h6></td>
															<td>
															
															<a href="" className="label theme-bg text-white f-12">Grade</a><a href="" className="label theme-bg text-white f-12">View</a>
															<a href="" className="label theme-bg text-white f-12">Return</a><a href="" className="label theme-bg text-white f-12">Reset</a>
															<a href="" className="label theme-bg text-white f-12">Release Results</a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								
                            </div>
                            {/*[ Main Content ] end */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
             </TeacherLayout>

)
}
