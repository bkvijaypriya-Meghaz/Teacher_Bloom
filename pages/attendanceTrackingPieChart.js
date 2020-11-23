import React from 'react'
import TeacherLayout from '../layout/TeacherLayout';
import Chart from 'chart.js';
import  { useState, useEffect } from 'react';
//import {getInfo} from '../services/GenricService';



function attendanceTrackingPieChart(props) {
    useEffect(() => {
        loadPieChart()
        return () => {
            console.log("After loading load---------------------")
        }
    })

    /*useEffect(() => { getInfo(`${ASSIGNMENT_TO_BE_GRADED}/786868/assignments/to-be-graded`).then((data) => {
		//Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("Attendence tracking",props.refresh)
        console.log('bloom data is : ',data);
        setAssignment(data);
        setAssignmentList(data.Studentdata)

    })
	}, [props.refresh])*/

    const loadPieChart = () =>{
        var bar = document.getElementById("chart-pie-1").getContext('2d');
        console.log("Coming inside",bar)
        var theme_g1 = bar.createLinearGradient(100, 0, 300, 0);
        theme_g1.addColorStop(0, '#8bc34a');
        theme_g1.addColorStop(1, '#4caf50');
        var theme_g2 = bar.createLinearGradient(100, 0, 300, 0);
        theme_g2.addColorStop(0, '#fb1808');
        theme_g2.addColorStop(1, '#F44336');
        var data4 = {
            labels: [
                "Days On Time",
                "Days Absent",
                "Days Tardy"
            ],
            datasets: [{
                data: [3, 1, 1],
                backgroundColor: [
                    theme_g1,
                    theme_g2,
                    "#dcdc1c"
                ],
                hoverBackgroundColor: [
                    theme_g1,
                    theme_g2,
                    "#dcdc1c"
                ]
            }]
        };
        var myPieChart = new Chart(bar, {
            type: 'pie',
            data: data4,
            responsive: true,
            options: {
                maintainAspectRatio: false,
                responsive: true,
            }
        });
    }
    return (
        
        <div>
            
				<div className="card">
                    <div className="card-header">
                        <h5>Attendance Tracking</h5>
						<div className="card-header-right displayblock">
							<div className="btn-group card-option">
								<button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i className="feather icon-more-horizontal"></i>
								</button>
								<ul className="list-unstyled card-option dropdown-menu dropdown-menu-right">
									<li className="dropdown-item"><a href="#!"><span>Weekly</span></a></li>
									<li className="dropdown-item disablecursoronly"><a href="#!"><span>Monthly <i className="feather icon-lock rytdropdownicon"></i></span></a></li>
															
								</ul>
							</div>
						</div>
                    </div>
                    <div className="card-block">
                        <div className="row">
							<div className="col-xl-6 col-md-6 col-sm-6 col-xs-6">
								<div className="form-group">
									<label for="">From</label>
										<input type="date" className="form-control fromtotxtbox" id="" placeholder="From"/>
								</div>
							</div>
						    <div className="col-xl-6 col-md-6 col-sm-6 col-xs-6">
								<div className="form-group">
									<label for="">To</label>
										<input type="date" className="form-control fromtotxtbox" id="" placeholder=""/>
								</div>
							</div>
						</div>
						<div className="charthead">Sep 7 - Sep 12</div>
							<div>
                                <div className="chartjs-size-monitor chart-sizestyle">
                                    <div className="chartjs-size-monitor-expand chart-monitorexpandstyle" ><div style={{position:'absolute',width:'1000000px',height:'1000000px',left:'0',top:'0'}}>
                                    </div>
                                </div>
                                <div className="chartjs-size-monitor-shrink chart-monitorshrinkstyle">
                                    <div style={{position:'absolute',width:'200%',height:'200%',left:'0', top:'0'}}></div>
                                    </div>
                                </div>
											<canvas id="chart-pie-1" style={{width: '210px', height: '215px', display: 'block'}} width="210" height="215"className="chartjs-render-monitor"></canvas>
							</div>
                        </div>
                    </div>
				
        </div>
        
    )
}

export default attendanceTrackingPieChart
