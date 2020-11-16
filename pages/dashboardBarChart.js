import React, { useState, useEffect } from 'react';
import HighchartsBar from 'Highcharts'

function averageSyncAsyncAttendance(){

    useEffect(() => {

        var Highcharts = require('highcharts');  
        // Load module after Highcharts is loaded
        require('highcharts/modules/exporting')(Highcharts);
        loadBarCharHighcharts()
        return () => {
            console.log("Inside Highcharts Bar chart");
        }
    }, [])
    const loadBarCharHighcharts = () => {
        HighchartsBar.chart('chart-highchart-bar1', {
            chart: {
                type: 'column'
            },
            colors: ['#62b64e', '#fa1f0f'],
            title: {
                text: '<tspan style="font-size:10px">Sep 7 - Sep 12</tspan>',
            },
            // subtitle: {
            //     text: 'Source: WorldClimate.com'
            // },
            xAxis: {
                // crosshair: true
                type: 'category',
                categories: ['Time Spent on Bloom']
            },
            yAxis: {
                
                type: 'value',
                data: 'Hours',
                title :{
                    text: 'Hours'
                }
                // title: {
                //     text: 'Rainfall (mm)'
                // }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">Time Spent on Bloom</span><table>',
                pointFormat: '<tr><td style="color:{series.color};">{series.name}: </td>' +
                    '<td style=""><b>{point.y:.1f} Hrs</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Async Time Spent',
                data: [3.5]

            }, {
                name: 'Sync Time Spent',
                data: [1.2]

            }]
        });
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
                <div id="chart-highchart-bar1" style={{width: '100%', height: '250px'}}></div>
            </div>
        </div>
    );
}
export default averageSyncAsyncAttendance