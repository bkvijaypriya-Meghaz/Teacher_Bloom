import React from 'react'
import { useState, useEffect } from 'react';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';

function averageTimeSpentAssignment() {

    Chart.defaults.global.legend.labels.usePointStyle = false;

	const[barData,setBarData] = useState({})
	const chart = () =>{
		setBarData(
			{
				labels:['Infopedia','Books on Topic','Science Book','Reading Science'],
				datasets:[
					{
						
                        data:[53,30,45,25],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgb(32, 201, 151)',
                            'rgb(214, 175, 248)',
                            'rgb(255, 193, 7)',
                            'rgb(253, 126, 20)'],
						
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
                        <h5>Average Time Spent On Assignments</h5>
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
                                            data=data+' min'
                                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                      });
                                    });
                                  }
                                
                            },
                                title: {
                                    display: true,
                                    text: 'Average Time Spent On Assignments',
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
                        
                        {/*div id="chart-highchart-bar1" style="width: 100%; height: 250px;"></div*/}
                       {/* <div id="bar-chart1" className="ChartShadow BarChart barChart1" style="height: 290px; overflow: hidden; text-align: left;"><div className="amcharts-main-div" style="position: relative;"><div className="amcharts-chart-div" style="overflow: hidden; position: relative; text-align: left; width: 144px; height: 290px; padding: 0px; cursor: default; touch-action: auto;"><svg version="1.1" style="position: absolute; width: 144px; height: 290px; top: 0px; left: 0px;"><desc>JavaScript chart by amCharts 3.21.5</desc><g><path cs="100,100" d="M0.5,0.5 L143.5,0.5 L143.5,289.5 L0.5,289.5 Z" fill="#FFFFFF" stroke="#000000" fill-opacity="0" stroke-width="1" stroke-opacity="0"></path><path cs="100,100" d="M0.5,0.5 L96.5,0.5 L96.5,98.5 L0.5,98.5 L0.5,0.5 Z" fill="#FFFFFF" stroke="#000000" fill-opacity="0" stroke-width="1" stroke-opacity="0" transform="translate(27,156)"></path></g><g><g transform="translate(27,156)"></g><g transform="translate(27,156)" visibility="visible"></g></g><g transform="translate(27,156)" clip-path="url(#AmChartsEl-1101)"><g visibility="hidden"></g></g><g></g><g></g><g></g><g><g transform="translate(27,156)"><g><g transform="translate(2,98)" aria-label=" Infopedia 53"><path cs="100,100" d="M0.5,0.5 L0.5,-80.5 L19.5,-80.5 L19.5,0.5 L0.5,0.5 Z" fill="url(#AmChartsEl-1103)" stroke="#67b7dc" fill-opacity="0.9" stroke-width="1" stroke-opacity="0"></path><linearGradient id="AmChartsEl-1103" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1de9b6"></stop><stop offset="100%" stop-color="#09e4b2"></stop></linearGradient></g><g transform="translate(26,98)" aria-label=" Books On Topic 30"><path cs="100,100" d="M0.5,0.5 L0.5,-23.5 L19.5,-23.5 L19.5,0.5 L0.5,0.5 Z" fill="url(#AmChartsEl-1104)" stroke="#67b7dc" fill-opacity="0.9" stroke-width="1" stroke-opacity="0"></path><linearGradient id="AmChartsEl-1104" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="#a389d4"></stop><stop offset="100%" stop-color="#899ed4"></stop></linearGradient></g><g transform="translate(50,98)" aria-label=" Science Book 45"><path cs="100,100" d="M0.5,0.5 L0.5,-60.5 L19.5,-60.5 L19.5,0.5 L0.5,0.5 Z" fill="url(#AmChartsEl-1105)" stroke="#67b7dc" fill-opacity="0.9" stroke-width="1" stroke-opacity="0"></path><linearGradient id="AmChartsEl-1105" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="#dfe223"></stop><stop offset="100%" stop-color="#e1e406"></stop></linearGradient></g><g transform="translate(74,98)" aria-label=" Reading Science 25"><path cs="100,100" d="M0.5,0.5 L0.5,-11.5 L19.5,-11.5 L19.5,0.5 L0.5,0.5 Z" fill="url(#AmChartsEl-1106)" stroke="#67b7dc" fill-opacity="0.9" stroke-width="1" stroke-opacity="0"></path><linearGradient id="AmChartsEl-1106" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="#f44236"></stop><stop offset="100%" stop-color="#f48f36"></stop></linearGradient></g></g></g></g><g></g><g><g><path cs="100,100" d="M0.5,0.5 L96.5,0.5" fill="none" stroke-width="1" stroke-opacity="0" stroke="#000000" transform="translate(27,254)"></path></g><g><path cs="100,100" d="M0.5,0.5 L0.5,98.5" fill="none" stroke-width="1" stroke-opacity="0" stroke="#000000" transform="translate(27,156)" visibility="visible"></path></g></g><g><g transform="translate(27,156)" clip-path="url(#AmChartsEl-1102)" style="pointer-events: none;"><path cs="100,100" d="M0.5,0.5 L0.5,0.5 L0.5,98.5" fill="none" stroke-width="1" stroke-opacity="0" stroke="#000000" visibility="hidden"></path><path cs="100,100" d="M0.5,0.5 L96.5,0.5 L96.5,0.5" fill="none" stroke-width="1" stroke="#000000" visibility="hidden"></path></g><clipPath id="AmChartsEl-1102"><rect x="0" y="0" width="96" height="98" rx="0" ry="0" stroke-width="0"></rect></clipPath></g><g></g><g><g transform="translate(27,156)"><text y="6" fill="#000000" font-family="Verdana" font-size="11px" opacity="1" text-anchor="middle" style="pointer-events: none;" transform="translate(12,8)"><tspan y="6" x="0">53 min</tspan></text><text y="6" fill="#000000" font-family="Verdana" font-size="11px" opacity="1" text-anchor="middle" style="pointer-events: none;" transform="translate(36,64)"><tspan y="6" x="0">30 min</tspan></text><text y="6" fill="#000000" font-family="Verdana" font-size="11px" opacity="1" text-anchor="middle" style="pointer-events: none;" transform="translate(60,27)"><tspan y="6" x="0">45 min</tspan></text><text y="6" fill="#000000" font-family="Verdana" font-size="11px" opacity="1" text-anchor="middle" style="pointer-events: none;" transform="translate(84,76)"><tspan y="6" x="0">25 min</tspan></text></g></g><g><g></g><text y="7" fill="#000000" font-family="Verdana" font-size="13px" opacity="1" font-weight="bold" text-anchor="middle" transform="translate(76,20)" style="pointer-events: none;"><tspan y="7" x="0">Avera</tspan><tspan y="22" x="0">ge</tspan><tspan y="37" x="0">Time</tspan><tspan y="52" x="0">Spent</tspan><tspan y="67" x="0">On</tspan><tspan y="82" x="0">Assig</tspan><tspan y="97" x="0">nment</tspan><tspan y="112" x="0">s</tspan></text></g><g><g transform="translate(27,156)" visibility="visible"><text y="6" fill="#000000" font-family="Verdana" font-size="11px" opacity="1" text-anchor="middle" transform="translate(12,115.5)"><tspan y="6" x="0">Infopedia</tspan></text><text y="6" fill="#000000" font-family="Verdana" font-size="11px" opacity="1" text-anchor="middle" transform="translate(84,115.5)"><tspan y="6" x="0">Reading Science</tspan></text></g><g transform="translate(27,156)" visibility="visible"><text y="0" fill="#000000" font-family="Verdana" font-size="0px" opacity="1" text-anchor="end" transform="translate(-12,98)"><tspan y="0" x="0">20</tspan></text><text y="0" fill="#000000" font-family="Verdana" font-size="0px" opacity="1" text-anchor="end" transform="translate(-12,74)"><tspan y="0" x="0">30</tspan></text><text y="0" fill="#000000" font-family="Verdana" font-size="0px" opacity="1" text-anchor="end" transform="translate(-12,49)"><tspan y="0" x="0">40</tspan></text><text y="0" fill="#000000" font-family="Verdana" font-size="0px" opacity="1" text-anchor="end" transform="translate(-12,25)"><tspan y="0" x="0">50</tspan></text><text y="0" fill="#000000" font-family="Verdana" font-size="0px" opacity="1" text-anchor="end" transform="translate(-12,0)"><tspan y="0" x="0">60</tspan></text></g></g><g></g><g transform="translate(27,156)"></g><g></g><g></g><clipPath id="AmChartsEl-1101"><rect x="-1" y="-1" width="98" height="100" rx="0" ry="0" stroke-width="0"></rect></clipPath></svg><a href="http://www.amcharts.com/javascript-charts/" title="JavaScript charts" style="position: absolute; text-decoration: none; color: rgb(0, 0, 0); font-family: Verdana; font-size: 11px; opacity: 0.7; display: block; left: 32px; top: 161px;"></a></div></div></div>*/}
                    </div>
                </div>
        
        
        
       
    )
}

export default averageTimeSpentAssignment
