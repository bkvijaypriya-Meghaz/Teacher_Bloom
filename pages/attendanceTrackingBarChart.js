import React from 'react'
import TeacherLayout from '../layout/TeacherLayout';
import { useState, useEffect } from 'react';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';
//import {getInfo} from '../services/GenricService';


function attendanceTrackingBarChart() {

    Chart.defaults.global.legend.labels.usePointStyle = true;

	const[barData,setBarData] = useState({})
	const chart = () =>{
		setBarData(
			{
				labels:['Time Spent on Bloom'],
				datasets:[
					{
						label:'Async. Time Spent',
						data:[3.5],
						backgroundColor:['#62b64e'],
						borderWidth: 1
					},
					{
						label:'Sync. Time Spent',
						data:[1.2],
						backgroundColor:['#fa1f0f'],
						borderWidth: 1	
					},
				]
			}
		)
	}

    useEffect(()=>
	{
		chart()

	},[])
    
    /*useEffect(() => { getInfo(`${ASSIGNMENT_TO_BE_GRADED}/786868/assignments/to-be-graded`).then((data) => {
		//Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("Attendence tracking",props.refresh)
        console.log('bloom data is : ',data);
        setAssignment(data);
        setAssignmentList(data.Studentdata)

    })
	}, [props.refresh])*/

    
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5>Average Sync/Async Attendance</h5>
                </div>
                <div className="card-block">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="form-group">
                                <label>From</label>
                                    <input type="date" className="form-control fromtotxtbox" id="" placeholder="From"/>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-4 col-xs-6">
                            <div className="form-group">
                                <label>To</label>
                                   <input type="date" className="form-control fromtotxtbox" id="" placeholder=""/>
                            </div>
                        </div>
                    </div>
                </div>        
                <div style={{height:'240px',width:'100%'}}>
                    <Bar width='10' height='10px'
                        data={barData}
                        options={{
                                responsive:true,
                                maintainAspectRatio: false,
                                title: {
                                    display: true,
                                    text: 'Sep 7 - Sep 12'
                                },
                                legend:{
                                            display:true,
                                            position:'bottom',
                                            labels:{
                                            fontColor:'#000'
                                            }
                                            },
                                scales:{
                                    yAxes:[
                                        {
                                            gridLines:{
                                            display:true
                                            },
                                            
                                            scaleLabel: {
                                                display: true,
                                                labelString: 'Hours'
                                                },
                                            ticks: { 
                                                beginAtZero: true,
                                                steps: 2, 
                                                stepSize:2,
                                                max: 4
                                                }
                                        }
                                    ],
                                    xAxes:[
                                        {
                                            gridLines:{
                                            display:false
                                            },
                                        }
                                        ]
                                    }
                                }}
                            />
                    </div>  
            </div>
        </div>  
    )
}

export default attendanceTrackingBarChart
