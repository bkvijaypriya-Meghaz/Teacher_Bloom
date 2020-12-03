import React from 'react'
import { useState, useEffect } from 'react';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';

function periodTwoClassAverageGrade() {

    Chart.defaults.global.legend.labels.usePointStyle = false;

	const[barData,setBarData] = useState({})
	const chart = () =>{
		setBarData(
			{
				labels:['A','B','C','D','E'],
				datasets:[
					{
						
                        data:[70,55,60,77,90],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgb(32, 201, 151)',
                            'rgb(214, 175, 248)',
                            'rgb(255, 193, 7)',
                            'rgb(253, 126, 20)',
                            'rgb(218, 15, 228)'],
						
					},
					
				]
			}
		)
	}

    useEffect(()=>
	{
		chart()

	},[])
    return (
       
            
                <div className="card">
                    <div className="card-header">
                        <h5>Period 2 Class Average Grade</h5>
                    </div>
                    <div className="card-block">
                        {/*
                        <div className="legendlabel text-center"><span></span><b>Sync Time</b><span style="background:#dcdc1c;"></span><b>Async Time</b></div>
                        <div id="chart-google-Candlestick" style="width: 100%; height: 200px;"></div> 
                        */}
                        <div className="form-group">
                            <select className="form-control btn-sm" style={{height: 'auto'}}>
                                <option>Assignments</option>
                            </select>
                        </div>


                        <div style={{height:'240px',width:'100%'}}>
                    <Bar width='10' height='10px'
                        data={barData}
                        options={{
                                responsive:true,
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },
                                hover: {
                                    animationDuration: 1
                                },
                                animation: {
                                    duration: 1,
                                    onComplete: function() {
                                        var chartInstance = this.chart,
                                        ctx = chartInstance.ctx;
                     
                                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                        ctx.textAlign = 'center';
                                        ctx.textBaseline = 'bottom';
                     
                                        this.data.datasets.forEach(function(dataset, i) {
                                            var meta = chartInstance.controller.getDatasetMeta(i);
                                            meta.data.forEach(function(bar, index) {
                                            var data = dataset.data[index];
                                            data=data+' Students'
                                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                      });
                                    });
                                  }
                                
                            },
                                title: {
                                    display: true,
                                    text: 'Session Class Average',
                                    position:'top',
                                    font:'20'
                                },
                                legend:{
                                            display:false,
                                            position:'bottom',
                                            labels:{
                                            fontColor:'#000'
                                            }
                                    },
                                    scales:{
                                        yAxes:[
                                            {
                                                gridLines:{
                                                display:false
                                                },
                                                
                                                scaleLabel: {
                                                    display: false,
                                                    labelString: 'Hours'
                                                    },
                                                ticks: { 
                                                    beginAtZero: true,
                                                    display:false
                                                    
                                                    }
                                            },
                                            

                                        ],
                                        xAxes:[
                                            {
                                                gridLines:{
                                                display:false
                                            }
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

export default periodTwoClassAverageGrade
