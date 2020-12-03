import React, {Component} from 'react'
// import StudentLayout from '../../layout/StudentLayout';
import {FiLock} from 'react-icons/fi'
import { useState, useEffect } from 'react';
import {getInfo} from '../services/GenricService';
import {CLASS_AVERAGE} from '../components/ConstFile';
import Chart from 'chart.js';
import {Bar, Doughnut} from 'react-chartjs-2';
import DashboardDoughnutChart from './dashboardDoughnutChart'



	 function dashboardClassAverage(props) {
    const [classAverage, setClassAverage] = useState(0);
	const [averagesList, setAveragesList] = useState([]);
	const [classNameList,setClassNameList] = useState([]);
	const[totalStudent,setTotalStudents] = useState(0);
	
	let gradeavg=[];


			  
				  	   
			   
			 
				
	
	
    	useEffect(() => {

				
				let grade=[];
				//Todo :CLASS_AVERAGE: we have to assign refresh(sessionid) to dynamic URL
        		console.log("CLASS_AVERAGE:section id",props.refresh)
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
							gradeavg=averagesItem.average
							//console.log('averagesItem.average:   ',averagesItem.average)
							console.log('average inside map function:',gradeavg)
							avg[i] = "radial-bar radial-bar-"+averagesItem.average+" radial-bar-lg m-b-0"
							//averagesItem.average=averagesItem.average+"%"
							console.log(averagesItem.average)
							
					

				})
				setAveragesList(data.averages)
				setClassNameList(avg)
			
				
  
				  	   
				
				
			 })
			 
	},[props.refresh]);
	
	console.log('totalstudents:',totalStudent)
	console.log('classAverage.totalStudents:',classAverage.totalStudents)
	console.log('grade avg:',gradeavg)
	
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
						averagesList.map((averageitem)=>(
							<div className="col-12 col-md-2 text-center">
								
								<DashboardDoughnutChart  title={averageitem.average}/>
										
								{/*<div data-label={averageitem.average} className= {classNameList[i]} data-toggle="tooltip" data-placement="bottom" data-html="true" title="William Johnson<br>Denise Coso<br>Tanya Sharma<br>John Nokes">
								</div>*/}
								<div className="gradename">
									{averageitem.grade}
								</div>
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

export default dashboardClassAverage;



