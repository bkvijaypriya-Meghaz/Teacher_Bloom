import TeacherLayout from '../../layout/TeacherLayout';

export default function EnergyLessonPlan(props) {
	return (
		<>
			{/* <TeacherLayout {...props}> */}
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
									<div className="row">
										<div className="col-xl-12 col-md-12 lessonplan_detail">
											<div className="card">
												{/* <div className="row card-rowStyle">
												<div className="col-12">
													<div className="card-header card-headerStyle">
														<h5>Lesson Plan Detail : Energy</h5>
													</div>
												</div>
												
											</div> */}

												<div className="card-block">
													{/* <ul className="nav nav-tabs" id="myTab" role="tablist">
											<li className="nav-item">
												<a className="nav-link active text-uppercase" id="intro-tab" data-toggle="tab" href="#intro" role="tab" aria-controls="intro" aria-selected="true">Plan</a>
											</li>
										
										</ul> */}
													 <div className="tab-content" id="myTabContent">
														<div className="tab-pane fade show active" id="intro" role="tabpanel" aria-labelledby="intro-tab">
															<div className="row align-items-center justify-content-center">
																<div className="col-auto">
																	<button type="button" className="btn btn-icon btn-rounded btn-success lessonplanicon"><i className="fa fa-book"></i></button>
																</div>
																<div className="col">
																	<h5>Energy</h5>
																	<span>Monday, 20th July 2020</span>
																</div>
															</div>
															<div className="row">
																<div className="col-12">
																	<ul className="task-list">
																		<li>
																			<i className="task-icon bg-c-green lessonplancircle"></i>
																			<h6>Grade Level : <span className="lessonplanitem text-muted">4th Grade</span></h6>

																		</li>
																		<li>
																			<i className="task-icon bg-c-green lessonplancircle"></i>
																			<h6>Course Code : <span className="lessonplanitem text-muted">SCI-101</span></h6>
																		</li>


																	</ul>
																</div>
																<div className="col-12">
																	<div className="plandiv">
																		<div className="table-responsive">
																			<table className="table table-bordered plantable">
																				<tr className="planitem">
																					<td><b>Topic:</b> Transfer of Energy</td>
																					<td colspan="2"><b>Lesson 1:</b> Moving Pennies</td>
																				</tr>
																				<tr className="planitem">
																					<td><b>Brief Lesson Description:</b></td>
																					<td colspan="2">Using pennies, students will demonstrate how energy can be transferred from one object to another.</td>
																				</tr>
																				<tr className="planitem">
																					<td><b>Performance Expectation(s):</b></td>
																					<td colspan="2"><p>4-PS3-1. Use evidence to construct an explanation relating the speed of an object to the energy of that object.</p>
																						<p>4-PS3-2. Make observations to provide evidence that energy can be transferred from place to place by sound, light, heat, and electric currents.</p>
																						<p>4-PS3-3. Ask questions and predict out comes about the changes in energy that occur when objects collide.</p></td>
																				</tr>
																				<tr className="planitem">
																					<td><b>Specific Learning Outcomes:</b></td>
																					<td colspan="2">Students will work with pennies to develop questions and predict what happens when  objects collide.</td>
																				</tr>
																				<tr className="planitem">
																					<td><b>Narrative / Background Information</b></td>
																					<td colspan="2">The faster a penny is moving,the more energy it possesses. When objects collide, energy can be transferred from one object to another, changing their motion.</td>
																				</tr>
																				<tr className="planitem">
																					<td><b>Prior Student Knowledge:</b></td>
																					<td colspan="2"><b>What is energy?</b></td>
																				</tr>
																				<tr className="planitem">
																					<td>
																						<b>Science & Engineering Practices:</b>
																						<p></p>
																						<ul>
																							<li>	Asking questions(science) and defining problems(engineering)</li>
																							<li>	Developing and using models</li>
																							<li>	Planning and carrying out investigations</li>
																							<li>	Analyzing and interpreting data</li>
																							<li>	Using mathematics and computational thinking</li>
																							<li>	Constructing explanations(science) and designing solutions(engineering)</li>
																							<li>	Engaging in argument from evidence</li>
																							<li>	Obtaining, evaluating, and communicating information</li>
																						</ul>

																					</td>
																					<td>
																						<b>Disciplinary Core Ideas:</b>
																						<p></p>
																						<p>PS3.A: Definitions of Energy</p>
																						<ul>
																							<li>The faster a given object is moving, the more energy it possesses. (4-PS3-1)</li>
																							<li>Energy can be moved from place to place by moving objects or through sound, light, or electric currents. (4-PS3-2), (4-PS3-3)</li>

																						</ul>
																						<p>PS3.B: Conservation of Energy and Energy Transfer</p>
																						<ul>
																							<li>Energy is present whenever there are moving objects, sound, light, or heat. When objects collide, energy can be transferred from one object to another, thereby changing their motion. In such collisions, some energy is typically also transferred to the surrounding air; as a result, the air gets heated and sound is produced. (4-PS3-2), (4-PS3-3)
																		</li>
																						</ul>
																						<p>PS3.D: Energy in Chemical Processes and Everyday Life</p>
																						<ul>
																							<li>He expression “produce energy” typically refers to the conversion of stored energy into a desired form for practical use.(4-PS3-4)
																		</li>
																						</ul>
																						<p>ETS1.A: Defining Engineering Problems</p>
																						<ul>
																							<li>Possible solutions to a problem are limited by available materials and resources (constraints). The success of a designed solution is determined by considering the desired features of a solution (criteria). Different proposals for solutions can be compared on the basis of how well each one meets the specified criteria for successor how well each takes the constraints into account.(secondaryto4-PS3-4)
																		</li>
																						</ul>

																					</td>
																					<td>
																						<b>Crosscutting Concepts:</b>
																						<p></p>
																						<ul>
																							<li>	Patterns</li>
																							<li>	Cause and effect: Mechanism and explanation</li>
																							<li>	Scale, proportion, and quantity</li>
																							<li>	Systems and system models</li>
																							<li>	Energy and matter: Flows, cycles,and conservation</li>
																							<li>	Structure and function</li>
																							<li>	Stability and change</li>
																						</ul>

																					</td>
																				</tr>
																				<tr className="planitem">
																					<td><b>Possible Preconceptions / Misconceptions</b></td>
																					<td colspan="2"></td>
																				</tr>
																				<tr className="planitem tablemidhead">
																					<td colspan="3">LESSON PLAN – 5-E Model</td>

																				</tr>
																				<tr className="planitem">
																					<td><b>ENGAGE: Opening Activity – Access Prior Learning / Stimulate Interest / Generate Questions</b></td>
																					<td colspan="2">Begin by discussing Energy. What do students know about energy? What do they want to learn? Explain to the students that today we will be experimenting with some simple everyday items to demonstrate energy and motion</td>
																				</tr>
																				<tr className="planitem">
																					<td><b>EXPLORE: Lesson Description – Materials Needed / Probing or Clarifying Questions</b></td>
																					<td colspan="2">Have the students get into groups of two or three. Give each groups even pennies. Ask them to work together to demonstrate how energy can be used to create motion. Students record their demonstrations on paper or in their science notebooks.</td>
																				</tr>

																				<tr className="planitem">
																					<td><b>EXPLAIN: Concepts Explained and Vocabulary Defined</b></td>
																					<td colspan="2">Introduce the concept of energy(energy–the ability to do work.There are different types of energy.(potential - stored and kinetic - motion) Conservation of energy - energy cannot be created or destroyed, it is transferred from one form to another.) Energy leads to motion. Show Bill Nye Science video on Energy on YouTube 8 mins.) http://www.youtube.com/watch?v=zTXW9aRO23Y</td>
																				</tr>

																				<tr className="planitem">
																					<td><b>ELABORATE: Applications and Extensions	</b></td>
																					<td colspan="2">After watching the video and discussing the information above, the students are given the  opportunity to refine their demonstrations from earlier. They can keep their previous  experiments or alter them. The teacher also poses one more challenge.Since energy can  be transferred through collisions, one of the groups demonstrations must show energy  transfer through a collision. (If no experiment shave done so, demonstrate to the students how you can spread the pennies out on the desk and flick on penny into the others. The movement of the first penny will cause movement of the other pennies. Ask the students what would happen if you were to flick the penny faster or softer? )</td>
																				</tr>

																				<tr className="planitem">
																					<td>
																						<b>EVALUATE: Formative Monitoring (Questioning / Discussion):</b>
																						{/* </br> */}
																						<b> Summative Assessment (Quiz / Project / Report):</b>
																					</td>
																					<td colspan="2">
																						After students are given a chance to experiment they present their demonstrations to the  class. In their demonstrations they must explain what they have learned about energy. Students also will turn in their notes from the day.</td>
																				</tr>
																				<tr className="planitem">
																					<td>Elaborate Further / Reflect:</td>

																					<td colspan="2">
																						Explain that moving forward the students will have more opportunity to experiment with energy.
																		</td>
																				</tr>
																			</table>
																		</div>
																		{/* </td> */}
																	</div>
																</div>
																<div className="col-12">
																	<ul className="task-list">
																		<li>
																			<i className="task-icon bg-c-green lessonplancircle"></i>
																			<h6>Reference : <span className="lessonplanitem text-muted" />
																				<a href="http://www.teachengineering.org/curricularunits/view/cub_energy2_curricularunit" target="_blank">
																					<label className="label theme-bg text-white f-12 f-w-400 m-r-10">Link to Energy Article</label>
																				</a>
																			</h6>

																		</li>

																	</ul>
																</div>

															</div>
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
			{/* <!-- [ Main Content ] end --> */}
			{/* </TeacherLayout> */}
		</>
	)
}
