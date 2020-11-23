import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';

function averageSyncAsyncAttendance(){
    Chart.defaults.global.legend.labels.usePointStyle = true;

    const[barData,setBarData] = useState({})
    useEffect(()=>
	{
		loadBarChart()
    },[])
    
	const loadBarChart = () =>{
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

    return(
        <div>
            <div className="card">
                <div class="card-header card-headerStyle" style={{"textAlign" : "left"}}>
					<h5>Average Sync/Async Attendance</h5>
                </div>
                <div class="card-block">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 col-sm-4 col-xs-6">
                            <div class="form-group">
                                <label for="">From</label>
                                <input type="date" class="form-control fromtotxtbox" id="" placeholder="From"/>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 col-sm-4 col-xs-6">
                            <div class="form-group">
                                <label for="">To</label>
                                <input type="date" class="form-control fromtotxtbox" id="" placeholder=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'250px',width:'90%', paddingLeft:'20px'}}>
                    <Bar width='10' height='10px'
                        data={barData}
                        options={{
                            responsive:true,
                            maintainAspectRatio: false,
                            title: {
                                display: true,
                                text: 'Sep 7 - Sep 12'
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">Time Spent on Bloom</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};">{series.name}: </td>' +
                                    '<td style=""><b>{point.y:.1f} Hrs</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
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
                                }],
                                xAxes:[{
                                    gridLines:{
                                    display:false
                                    }
                                }]
                            }
                        }}
                    />
                    </div> 
            </div>
        </div>
    );
}
export default averageSyncAsyncAttendance