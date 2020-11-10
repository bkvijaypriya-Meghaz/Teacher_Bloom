import React, {Component} from 'react'
// import StudentLayout from '../../layout/StudentLayout';
import {FiLock} from 'react-icons/fi'
import { useState, useEffect } from 'react';
import {getInfo} from '../../services/GenricService';
import {CLASS_AVERAGE} from '../../components/ConstFile';



function dashboardClassAverage() {


	const [classAverage, setClassAverage] = useState(0);
	const [averagesList, setAveragesList] = useState([]);
	const [classNameList,setClassNameList] = useState([]);
	const[totalStudent,setTotalStudents] = useState(0);
	
	
    useEffect(() => {
        getInfo(CLASS_AVERAGE).then((data) => {
               console.log('bloom data is : ',data.teacherid);
               console.log('Total students is : ',data.totalStudents);
			   console.log('sectionid is : ',data.sectionid);
			   let temp = "radial-bar radial-bar-"+data.totalStudents+ "radial-bar-md radial-bar-success dashgradefullbar"
			   setTotalStudents(temp)
			   data.totalStudents =data.totalStudents
			   setClassAverage(data);
			   setAveragesList(data.averages);
			   
			   

				let avg = [];
			
                setClassAverage(data);
                data.averages.map((averagesItem,i)=>{
					avg[i] = "radial-bar radial-bar-"+averagesItem.average+" radial-bar-lg m-b-0"
					averagesItem.average=averagesItem.average+"%"
					
				})
				setAveragesList(data.averages)
                setClassNameList(avg)
				


				
			 })
			 

			 
                
        
            
	}, [])
	
	console.log('totalstudents:',totalStudent)
	console.log('classAverage.totalStudents:',classAverage.totalStudents)

	return (
		<div className="card">
		<div className="row card-rowStyle" >
			<div className="col-12 col-md-7">
				<div className="card-header card-headerStyle">
					<h5>4th Grade Science Class Average</h5>	
				</div>
			</div>
		<div className="col-12 col-md-5 text-right">
			<div className="card-header card-headerStyle" >
				<div className="card-header-right">
					<div className="btn-group card-option">
						<button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i className="feather icon-more-horizontal"></i>
						</button>
						<ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
							
							<li className="dropdown-item disablecursoronly"><a href="#!"><span>2nd Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
							<li className="dropdown-item disablecursoronly"><a href="#!"><span>3rd Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
							<li className="dropdown-item"><a href="#!"><span>4th Grade</span></a></li>
							<li className="dropdown-item disablecursoronly"><a href="#!"><span>5th Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
							
						</ul>
					</div>
				</div>
	        </div>
	      </div>
		</div>
		<div className="card-block">
			<div className="row dashgradebar">
				
                    {
	                   averagesList.map((averageitem,i)=>(
						 
						<div className="col-12 col-md-2 text-center">
							
				  			 <div data-label={averageitem.average} className= {classNameList[i]} data-toggle="tooltip" data-placement="bottom" data-html="true" title="William Johnson<br>Denise Coso<br>Tanya Sharma<br>John Nokes"></div>
							<div className="gradename">{averageitem.grade}</div>
						</div> 
						
						 ))
					   
					  
					}   
					   
				       <div className="col-12 col-md-2 text-center">
					       <div data-label={classAverage.totalStudents} className={totalStudent}></div>
					       <div className="totalgradename">Total Students</div>
				 	   </div>
				
			</div>
		</div>
	

		</div>										
												
	)
}

export default dashboardClassAverage



{/*                                     <div className="card">
										<div className="row card-rowStyle" >
											<div className="col-12 col-md-7">
												<div className="card-header card-headerStyle">
													<h5>4th Grade Science Class Average</h5>	
												</div>
											</div>
											<div className="col-12 col-md-5 text-right">
												<div className="card-header card-headerStyle" >
												<div className="card-header-right">
													<div className="btn-group card-option">
														<button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i className="feather icon-more-horizontal"></i>
														</button>
														<ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
															
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>2nd Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>3rd Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
															<li className="dropdown-item"><a href="#!"><span>4th Grade</span></a></li>
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>5th Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
															
														</ul>
													</div>
												</div>
												</div>
											</div>
										</div>
										<div className="card-block">
											<div className="row dashgradebar">
												<div className="col-12 col-md-2 text-center">
													<div data-label="20%" className="radial-bar radial-bar-20 radial-bar-md radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="William Johnson<br>Denise Coso<br>Tanya Sharma<br>John Nokes"></div>
													<div className="gradename">A</div>
												</div>
												<div className="col-12 col-md-2 text-center">
													<div data-label="50%" className="radial-bar radial-bar-50 radial-bar-md radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Ava Dolan<br>Mason Logan"></div>
													<div className="gradename">B</div>
												</div>
												<div className="col-12 col-md-2 text-center">
													<div data-label="25%" className="radial-bar radial-bar-25 radial-bar-md radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Brian Michaelis"></div>
													<div className="gradename">C</div>
												</div>
												<div className="col-12 col-md-2 text-center">
													<div data-label="15%" className="radial-bar radial-bar-15 radial-bar-md radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Evelyn Oliver"></div>
													<div className="gradename">D</div>
												</div>
												<div className="col-12 col-md-2 text-center">
													<div data-label="10%" className="radial-bar radial-bar-10 radial-bar-md radial-bar-success gradecircle" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Eric Betteli<br>Sophia Brown"></div>
													<div className="gradename">F</div>
												</div>
												<div className="col-12 col-md-2 text-center">
													<div data-label="10" className="radial-bar radial-bar-100 radial-bar-md radial-bar-success dashgradefullbar"></div>
													<div className="totalgradename">Total Students</div>
												</div>
											</div>
										</div>
									</div>*/}