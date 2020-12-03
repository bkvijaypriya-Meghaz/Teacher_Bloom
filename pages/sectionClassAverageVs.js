import React from 'react'
import { useState, useEffect } from 'react';
import Chart from 'chart.js';
import {Bar} from 'react-chartjs-2';

function sectionClassAverageVs() {

    Chart.defaults.global.legend.labels.usePointStyle = true;

	const[barData,setBarData] = useState({})
	const chart = () =>{
		setBarData(
			{
                
				labels:["Period 1 Grade","Period 2 Grade","Period 3 Grade","Period 4 Grade","Period 5 Grade"],
				datasets:[
					{
						label:'Period 1 ',
                        data:[10,5,6,4,8],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(19, 228, 15, 0.59)','rgba(19, 228, 15, 0.59)','rgba(19, 228, 15, 0.59)','rgba(19, 228, 15, 0.59)','rgba(19, 228, 15, 0.59)']
						
                    },
                    {
						label:'Period 2',
                        data:[5,7,10,4,4],
                        borderWidth: 1,
                        backgroundColor: ['rgb(255,165,0)','rgb(255,165,0)','rgb(255,165,0)','rgb(255,165,0)','rgb(255,165,0)']
						
                    },
                    {
						label:'Period 3',
                        data:[4,1,4,8,10],
                        borderWidth: 1,
                        backgroundColor: ['rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)','rgb(255,255,0)']
						
					},
                    
                    {
						label:'Period 4',
                        data:[8,5,9,10,7],
                        borderWidth: 1,
                        backgroundColor: ['rgb(135,206,235)','rgb(135,206,235)','rgb(135,206,235)','rgb(135,206,235)','rgb(135,206,235)']
						
						
						
                    },
                    
                    {
						label:'Period 5',
                        data:[3,10,6,5,8],
                        borderWidth: 1,
                        backgroundColor: ['rgb(50,205,50)','rgb(50,205,50)','rgb(50,205,50)','rgb(50,205,50)','rgb(50,205,50)']
						
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
                    <h5>Section Class Average Vs Section Class Average</h5>
                </div>
                <div className="card-block">
                    {/*
                    <div className="legendlabel text-center"><span></span><b>Sync Time</b><span style="background:#dcdc1c;"></span><b>Async Time</b></div>
                    <div id="chart-google-Candlestick" style="width: 100%; height: 200px;"></div> 
                    */}
                    <div className="form-group">
                        <select className="form-control btn-sm" style={{height: 'auto'}}>
                            <option>Sections</option>
                        </select>
                    </div>


                    <div style={{height:'240px',width:'100%'}}>
                    <Bar width='10' height='10px'
                        data={barData}
                        options={{
                                responsive:true,
                                maintainAspectRatio:false,
                               
                                tooltips: {
                                    enabled: true
                                },
                                hover: {
                                    animationDuration: 1
                                },
                                
                                title: {
                                    display: true,
                                    text: 'Session Class Average Vs Session Class Average',
                                    position:'top',
                                    font:'20'
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
                                                    labelString: 'Number Of Students'
                                                    },
                                                    ticks: { 
                                                        beginAtZero: true,
                                                        steps: 5, 
                                                        stepSize:5,
                                                        max: 20
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
                    
                    {/*<div id="chart-highchart-bar1" style="width: 100%; height: 290px;" data-highcharts-chart="0"><div id="highcharts-59wps94-0" dir="ltr" className="highcharts-container " style="position: relative; overflow: hidden; width: 461px; height: 290px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg version="1.1" className="highcharts-root " style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="461" height="290" viewBox="0 0 461 290"><desc>Created with Highcharts 6.1.1</desc><defs><clipPath id="highcharts-59wps94-1"><rect x="0" y="0" width="384" height="99" fill="none"></rect></clipPath></defs><rect fill="#ffffff" className="highcharts-background" x="0" y="0" width="461" height="290" rx="0" ry="0"></rect><rect fill="none" className="highcharts-plot-background" x="67" y="43" width="384" height="99"></rect><g className="highcharts-grid highcharts-xaxis-grid " data-z-index="1"><path fill="none" data-z-index="1" className="highcharts-grid-line" d="M 143.5 43 L 143.5 142" opacity="1"></path><path fill="none" data-z-index="1" className="highcharts-grid-line" d="M 220.5 43 L 220.5 142" opacity="1"></path><path fill="none" data-z-index="1" className="highcharts-grid-line" d="M 296.5 43 L 296.5 142" opacity="1"></path><path fill="none" data-z-index="1" className="highcharts-grid-line" d="M 373.5 43 L 373.5 142" opacity="1"></path><path fill="none" data-z-index="1" className="highcharts-grid-line" d="M 450.5 43 L 450.5 142" opacity="1"></path><path fill="none" data-z-index="1" className="highcharts-grid-line" d="M 66.5 43 L 66.5 142" opacity="1"></path></g><g className="highcharts-grid highcharts-yaxis-grid " data-z-index="1"><path fill="none" stroke="#e6e6e6" stroke-width="1" data-z-index="1" className="highcharts-grid-line" d="M 67 142.5 L 451 142.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" data-z-index="1" className="highcharts-grid-line" d="M 67 76.5 L 451 76.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" data-z-index="1" opacity="1" className="highcharts-grid-line" d="M 67 109.5 L 451 109.5"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" data-z-index="1" opacity="1" className="highcharts-grid-line" d="M 67 42.5 L 451 42.5"></path></g><rect fill="none" className="highcharts-plot-border" data-z-index="1" x="67" y="43" width="384" height="99"></rect><g className="highcharts-axis highcharts-xaxis " data-z-index="2"><path fill="none" className="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 143.5 142 L 143.5 152" opacity="1"></path><path fill="none" className="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 220.5 142 L 220.5 152" opacity="1"></path><path fill="none" className="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 296.5 142 L 296.5 152" opacity="1"></path><path fill="none" className="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 373.5 142 L 373.5 152" opacity="1"></path><path fill="none" className="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 451.5 142 L 451.5 152" opacity="1"></path><path fill="none" className="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 66.5 142 L 66.5 152" opacity="1"></path><path fill="none" className="highcharts-axis-line" stroke="#ccd6eb" stroke-width="1" data-z-index="7" d="M 67 142.5 L 451 142.5"></path></g><g className="highcharts-axis highcharts-yaxis " data-z-index="2"><text x="26.03125" data-z-index="7" text-anchor="middle" transform="translate(0,0) rotate(270 26.03125 92.5)" className="highcharts-axis-title" style="color:#666666;fill:#666666;" y="92.5"><tspan># of Students</tspan></text><path fill="none" className="highcharts-axis-line" data-z-index="7" d="M 67 43 L 67 142"></path></g><path fill="none" className="highcharts-crosshair highcharts-crosshair-category undefined" data-z-index="2" stroke="rgba(204,214,235,0.25)" stroke-width="76.8" style="pointer-events:none;" visibility="hidden" d="M 412.5 43 L 412.5 142"></path><g className="highcharts-series-group" data-z-index="3"><g data-z-index="0.1" className="highcharts-series highcharts-series-0 highcharts-column-series highcharts-color-0  highcharts-tracker" transform="translate(67,43) scale(1 1)" clip-path="url(#highcharts-59wps94-1)"><rect x="17" y="34" width="6" height="66" fill="#1ed01e" className="highcharts-point highcharts-color-0 "></rect><rect x="94" y="67" width="6" height="33" fill="rgb(30,208,30)" className="highcharts-point highcharts-color-0 "></rect><rect x="171" y="60" width="6" height="40" fill="rgb(30,208,30)" className="highcharts-point highcharts-color-0 "></rect><rect x="248" y="74" width="6" height="26" fill="rgb(30,208,30)" className="highcharts-point highcharts-color-0 "></rect><rect x="324" y="47" width="6" height="53" fill="rgb(30,208,30)" className="highcharts-point highcharts-color-0 "></rect></g><g data-z-index="0.1" className="highcharts-markers highcharts-series-0 highcharts-column-series highcharts-color-0 " transform="translate(67,43) scale(1 1)" clip-path="none"></g><g data-z-index="0.1" className="highcharts-series highcharts-series-1 highcharts-column-series highcharts-color-1 highcharts-tracker " transform="translate(67,43) scale(1 1)" clip-path="url(#highcharts-59wps94-1)"><rect x="26" y="67" width="6" height="33" fill="#f17409" className="highcharts-point highcharts-color-1 "></rect><rect x="103" y="54" width="6" height="46" fill="rgb(241,116,9)" className="highcharts-point highcharts-color-1 "></rect><rect x="180" y="34" width="6" height="66" fill="rgb(241,116,9)" className="highcharts-point highcharts-color-1 "></rect><rect x="257" y="74" width="6" height="26" fill="rgb(241,116,9)" className="highcharts-point highcharts-color-1 "></rect><rect x="334" y="74" width="6" height="26" fill="rgb(241,116,9)" className="highcharts-point highcharts-color-1 "></rect></g><g data-z-index="0.1" className="highcharts-markers highcharts-series-1 highcharts-column-series highcharts-color-1 " transform="translate(67,43) scale(1 1)" clip-path="none"></g><g data-z-index="0.1" className="highcharts-series highcharts-series-2 highcharts-column-series highcharts-color-2 highcharts-tracker " transform="translate(67,43) scale(1 1)" clip-path="url(#highcharts-59wps94-1)"><rect x="36" y="74" width="6" height="26" fill="#dee12e" className="highcharts-point highcharts-color-2 "></rect><rect x="112" y="93" width="6" height="7" fill="rgb(222,225,46)" className="highcharts-point highcharts-color-2 "></rect><rect x="189" y="74" width="6" height="26" fill="rgb(222,225,46)" className="highcharts-point highcharts-color-2 "></rect><rect x="266" y="47" width="6" height="53" fill="rgb(222,225,46)" className="highcharts-point highcharts-color-2 "></rect><rect x="343" y="34" width="6" height="66" fill="rgb(222,225,46)" className="highcharts-point highcharts-color-2 "></rect></g><g data-z-index="0.1" className="highcharts-markers highcharts-series-2 highcharts-column-series highcharts-color-2 " transform="translate(67,43) scale(1 1)" clip-path="none"></g><g data-z-index="0.1" className="highcharts-series highcharts-series-3 highcharts-column-series highcharts-color-3 highcharts-tracker " transform="translate(67,43) scale(1 1)" clip-path="url(#highcharts-59wps94-1)"><rect x="45" y="47" width="6" height="53" fill="#1dc4e9" className="highcharts-point highcharts-color-3 "></rect><rect x="122" y="67" width="6" height="33" fill="rgb(29,196,233)" className="highcharts-point highcharts-color-3 "></rect><rect x="198" y="41" width="6" height="59" fill="rgb(29,196,233)" className="highcharts-point highcharts-color-3 "></rect><rect x="275" y="34" width="6" height="66" fill="rgb(29,196,233)" className="highcharts-point highcharts-color-3 "></rect><rect x="352" y="54" width="6" height="46" fill="rgb(29,196,233)" className="highcharts-point highcharts-color-3 "></rect></g><g data-z-index="0.1" className="highcharts-markers highcharts-series-3 highcharts-column-series highcharts-color-3 " transform="translate(67,43) scale(1 1)" clip-path="none"></g><g data-z-index="0.1" className="highcharts-series highcharts-series-4 highcharts-column-series highcharts-color-4 highcharts-tracker " transform="translate(67,43) scale(1 1)" clip-path="url(#highcharts-59wps94-1)"><rect x="54" y="80" width="6" height="20" fill="#81fb11" className="highcharts-point highcharts-color-4 "></rect><rect x="131" y="34" width="6" height="66" fill="rgb(129,251,17)" className="highcharts-point highcharts-color-4 "></rect><rect x="208" y="60" width="6" height="40" fill="rgb(129,251,17)" className="highcharts-point highcharts-color-4 "></rect><rect x="284" y="67" width="6" height="33" fill="rgb(129,251,17)" className="highcharts-point highcharts-color-4 "></rect><rect x="361" y="47" width="6" height="53" fill="rgb(129,251,17)" className="highcharts-point highcharts-color-4 "></rect></g><g data-z-index="0.1" className="highcharts-markers highcharts-series-4 highcharts-column-series highcharts-color-4 " transform="translate(67,43) scale(1 1)" clip-path="none"></g></g><text x="231" text-anchor="middle" className="highcharts-title" data-z-index="4" style="color:#333333;font-size:18px;fill:#333333;" y="24"></text><text x="231" text-anchor="middle" className="highcharts-subtitle" data-z-index="4" style="color:#666666;fill:#666666;" y="24"><tspan>Section Class Average Vs Section Class Average</tspan></text><g className="highcharts-legend" data-z-index="7" transform="translate(49,228)"><rect fill="none" className="highcharts-legend-box" rx="0" ry="0" x="0" y="0" width="363" height="47" visibility="visible"></rect><g data-z-index="1"><g><g className="highcharts-legend-item highcharts-column-series highcharts-color-0 highcharts-series-0" data-z-index="1" transform="translate(8,3)"><text x="21" style="color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;" text-anchor="start" data-z-index="2" y="15"><tspan>Period 1</tspan></text><rect x="2" y="4" width="12" height="12" fill="#1ed01e" rx="6" ry="6" className="highcharts-point" data-z-index="3"></rect></g><g className="highcharts-legend-item highcharts-column-series highcharts-color-1 highcharts-series-1" data-z-index="1" transform="translate(99.859375,3)"><text x="21" y="15" style="color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;" text-anchor="start" data-z-index="2"><tspan>Period 2</tspan></text><rect x="2" y="4" width="12" height="12" fill="#f17409" rx="6" ry="6" className="highcharts-point" data-z-index="3"></rect></g><g className="highcharts-legend-item highcharts-column-series highcharts-color-2 highcharts-series-2" data-z-index="1" transform="translate(191.71875,3)"><text x="21" y="15" style="color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;" text-anchor="start" data-z-index="2"><tspan>Period 3</tspan></text><rect x="2" y="4" width="12" height="12" fill="#dee12e" rx="6" ry="6" className="highcharts-point" data-z-index="3"></rect></g><g className="highcharts-legend-item highcharts-column-series highcharts-color-3 highcharts-series-3" data-z-index="1" transform="translate(283.578125,3)"><text x="21" y="15" style="color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;" text-anchor="start" data-z-index="2"><tspan>Period 4</tspan></text><rect x="2" y="4" width="12" height="12" fill="#1dc4e9" rx="6" ry="6" className="highcharts-point" data-z-index="3"></rect></g><g className="highcharts-legend-item highcharts-column-series highcharts-color-4 highcharts-series-4" data-z-index="1" transform="translate(8,21)"><text x="21" y="15" style="color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;" text-anchor="start" data-z-index="2"><tspan>Period 5</tspan></text><rect x="2" y="4" width="12" height="12" fill="#81fb11" rx="6" ry="6" className="highcharts-point" data-z-index="3"></rect></g></g></g></g><g className="highcharts-axis-labels highcharts-xaxis-labels " data-z-index="7"><text x="107.99272486435069" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 107.99272486435069 158)" y="158" opacity="1"><tspan>Period 1 Grade</tspan></text><text x="184.79272486435067" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 184.79272486435067 158)" y="158" opacity="1"><tspan>Period 2 Grade</tspan></text><text x="261.59272486435066" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 261.59272486435066 158)" y="158" opacity="1"><tspan>Period 3 Grade</tspan></text><text x="338.39272486435067" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 338.39272486435067 158)" y="158" opacity="1"><tspan>Period 4 Grade</tspan></text><text x="415.1927248643507" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0) rotate(-45 415.1927248643507 158)" y="158" opacity="1"><tspan>Period 5 Grade</tspan></text></g><g className="highcharts-axis-labels highcharts-yaxis-labels " data-z-index="7"><text x="52" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="146" opacity="1">0</text><text x="52" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="80" opacity="1">10</text><text x="52" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="113" opacity="1">5</text><text x="52" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="47" opacity="1">15</text></g><text x="451" className="highcharts-credits" text-anchor="end" data-z-index="8" style="cursor:pointer;color:#999999;font-size:9px;fill:#999999;" y="285">Highcharts.com</text><g className="highcharts-label highcharts-tooltip highcharts-color-0" style="cursor:default;pointer-events:none;white-space:nowrap;" data-z-index="8" transform="translate(247,-9999)" opacity="0" visibility="visible"><path fill="none" className="highcharts-label-box highcharts-tooltip-box" d="M 3.5 0.5 L 138.5 0.5 C 141.5 0.5 141.5 0.5 141.5 3.5 L 141.5 121.5 C 141.5 124.5 141.5 124.5 138.5 124.5 L 3.5 124.5 C 0.5 124.5 0.5 124.5 0.5 121.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="#000000" stroke-opacity="0.049999999999999996" stroke-width="5" transform="translate(1, 1)"></path><path fill="none" className="highcharts-label-box highcharts-tooltip-box" d="M 3.5 0.5 L 138.5 0.5 C 141.5 0.5 141.5 0.5 141.5 3.5 L 141.5 121.5 C 141.5 124.5 141.5 124.5 138.5 124.5 L 3.5 124.5 C 0.5 124.5 0.5 124.5 0.5 121.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="#000000" stroke-opacity="0.09999999999999999" stroke-width="3" transform="translate(1, 1)"></path><path fill="none" className="highcharts-label-box highcharts-tooltip-box" d="M 3.5 0.5 L 138.5 0.5 C 141.5 0.5 141.5 0.5 141.5 3.5 L 141.5 121.5 C 141.5 124.5 141.5 124.5 138.5 124.5 L 3.5 124.5 C 0.5 124.5 0.5 124.5 0.5 121.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="#000000" stroke-opacity="0.15" stroke-width="1" transform="translate(1, 1)"></path><path fill="rgba(247,247,247,0.85)" className="highcharts-label-box highcharts-tooltip-box" d="M 3.5 0.5 L 138.5 0.5 C 141.5 0.5 141.5 0.5 141.5 3.5 L 141.5 121.5 C 141.5 124.5 141.5 124.5 138.5 124.5 L 3.5 124.5 C 0.5 124.5 0.5 124.5 0.5 121.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="#1ed01e" stroke-width="1"></path></g></svg><div className="highcharts-label highcharts-tooltip highcharts-color-0" style="position: absolute; left: 247px; top: -9999px; opacity: 0; pointer-events: none; visibility: visible;"><span data-z-index="1" style="font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif; font-size: 12px; position: absolute; white-space: nowrap; color: rgb(51, 51, 51); margin-left: 0px; margin-top: 0px; left: 8px; top: 8px;"><span style="font-size:10px">Period 5 Grade</span><table><tbody><tr><td style="color:#1ed01e;padding:0">Period 1: </td><td style="padding:0"><b>8 Students</b></td></tr><tr><td style="color:#f17409;padding:0">Period 2: </td><td style="padding:0"><b>4 Students</b></td></tr><tr><td style="color:#dee12e;padding:0">Period 3: </td><td style="padding:0"><b>10 Students</b></td></tr><tr><td style="color:#1dc4e9;padding:0">Period 4: </td><td style="padding:0"><b>7 Students</b></td></tr><tr><td style="color:#81fb11;padding:0">Period 5: </td><td style="padding:0"><b>8 Students</b></td></tr></tbody></table></span></div></div></div>*/}
                </div>
            </div>
        
    )
}

export default sectionClassAverageVs
