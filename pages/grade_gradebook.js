import TeacherLayout from '../layout/TeacherLayout';

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
                     {/* [ breadcrumb ] start  */}

                     {/* [ breadcrumb ] end  */}
                    <div className="main-body">
                        <div className="page-wrapper">
                             {/* [ Main Content ] start  */}
                            <div className="row">
                                {/* [ daily sales section ] start  */}
                                
								<div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">
									<div className="card Recent-Users">
										
										<div className="card-header">
											<h5>Grade Book Filter</h5>
										</div>
										<div className="card-block">
											
											<div className="table-responsive">
												<table className="table table-hover table-striped table-bordered gradefiltertable" style={{overflow:"hidden"}}>
													<thead>
														<tr>
															<th colspan="4" style={{transform:"none"}}>
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
																				<option>Sort By Highest Grade</option>
																				<option>Sort By Lowest Grade</option>
																			</select>
																		</div>
																	</div>
																	<div className="">
																		
																		<div className="form-group d-inline">
																			<div className="radio radio-primary d-inline">
																				<input type="radio" name="passfail" id="pass" checked=""/>
																				<label for="pass" className="cr">Pass</label>
																			</div>
																		</div>
																		<div className="form-group d-inline m-l-10">
																			<div className="radio radio-primary d-inline">
																				<input type="radio" name="passfail" id="fail"/>
																				<label for="fail" className="cr">Fail</label>
																			</div>
																		</div>
																	</div>
																</div>
															
															</th>
															<th>Essay</th>
															<th>Discussion</th>
															<th>Grammer</th>
															<th>Reading Log</th>
															<th>Vocabulary</th>
															<th>Story Problems</th>
															<th>Assignment</th>
															<th>Quiz</th>
															<th>Project</th>
															<th>Test</th>
															<th>Quiz</th>
															<th>Experiment</th>
															<th>Discussion</th>
															<th>Assignment</th>
															<th>Test</th>
															<th>Assignment</th>
															<th><a href="assignment_grade">Geography Quiz</a></th>
															<th>Homework</th>
															<th>Project</th>
															<th>Quiz</th>
															
															
														</tr>
													</thead><thead>
													</thead><tbody>
														
														<tr>
															<td colspan="4" className="gradetablesidehead">Due Date</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td></td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															<td>10/20</td>
															
															
														</tr>
														<tr style={{borderBottom: "4px solid #e2e2e2"}}>
															<td colspan="4" className="gradetablesidehead">Points Possible</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td></td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															<td>50</td>
															
															
														</tr>
														<tr>
															<td colspan="4">Brian Orr</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td></td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															<td>10</td>
															
															<td>10</td>
															<td>10</td>
															
															
														</tr>
														<tr>
															<td colspan="4">Derak Voltez</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td></td>
															
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
														</tr>
														<tr>
															<td colspan="4">Rebbeca Woods</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td></td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
														</tr>
														<tr>
															<td colspan="4">David Hampton</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td></td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
														</tr>
														<tr>
															<td colspan="4">Johnathan Rabbe</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td></td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
														</tr>
														<tr>
															<td colspan="4">Elijah Johnson</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td></td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
														</tr>
														<tr>
															<td colspan="4">Roger Moore</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td></td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
														</tr>
														<tr>
															<td colspan="4">Stephen Orr</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td></td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
														</tr>
														<tr>
															<td colspan="4">David Stazinsky</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td></td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															<td>15</td>
															
														</tr>
														
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								
                            </div>
                             {/* [ Main Content ] end  */}
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