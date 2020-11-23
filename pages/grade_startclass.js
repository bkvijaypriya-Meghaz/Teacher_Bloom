import { useState, useEffect, useRef } from 'react';
import TeacherLayout from '../layout/TeacherLayout';
import { FiLock } from 'react-icons/fi';


import React from 'react'


export default function GradeStartClass(props) {
    const headerdata = ["Lesson Plan Name","Topic","Standard","Duration","Start Lesson"];
    const lessondata=[
        {
            "Lesson Plan Name": "Energy", 
            "Topic":"Energy",
            "Standard":"TXK-1A",
            "Duration":"1 Hr 30 Mins",
            "Start Lesson":"icons"
        },
        {
            "Lesson Plan Name": "Space", 
            "Topic":"Universe",
            "Standard":"TXK-2A",
            "Duration":"2 Hr 0 Mins",
            "Start Lesson":"icons"
        },

        {
            "Lesson Plan Name": "Photosynthesis" ,
            "Topic":"Plants",
            "Standard":"TXK-2B",
            "Duration":"1 Hr 30 Mins",
            "Start Lesson":"icons"
        },

        {
            "Lesson Plan Name": "Chemistry" ,
            "Topic":"Chemistry",
            "Standard":"TXK-3A",
            "Duration":"1 Hr 30 Mins",
            "Start Lesson":"icons"
        },

        {
            "Lesson Plan Name": "IPC" ,
            "Topic":"IPC",
            "Standard":"TXK-2B",
            "Duration":"1 Hr 0 Mins",
            "Start Lesson":"icons"
        },
        {
            "Lesson Plan Name": "Weight & Scale", 
            "Topic":"Plants",
            "Standard":"TXK-2A",
            "Duration":"1 Hr 30 Mins",
            "Start Lesson":"icons"
        },

        {
            "Lesson Plan Name": "Photons" ,
            "Topic":"Light",
            "Standard":"TXK-3A",
            "Duration":"1 Hr 30 Mins",
            "Start Lesson":"icons"
        },

        {
            "Lesson Plan Name": "Atoms" ,
            "Topic":"Matter",
            "Standard":"TXK-3A",
            "Duration":"2 Hr 0 Mins",
            "Start Lesson":"icons"
        },

        {
            "Lesson Plan Name": "Time And Space", 
            "Topic":"Time",
            "Standard":"TXK-1A",
            "Duration":"1 Hr 30 Mins",
            "Start Lesson":"icons"
        },

        {
            "Lesson Plan Name": "Electricity" ,
            "Topic":"Electricity",
            "Standard":"TXK-3A",
            "Duration":"1 Hr 30 Mins",
            "Start Lesson":"icons"
        }]
    
    return (
        <TeacherLayout {...props}>
          <div>
          <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/* <!-- [ breadcrumb ] start --> */}
					<div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#!" style={{ color: '#888' }}>My Classes</a></li>
                                        <li className="breadcrumb-item"><a href="#!" style={{ color: '#888' }}>Science 4th Grade</a></li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- [ breadcrumb ] end --> */}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/* <!-- [ Main Content ] start --> */}
                            <div className="row">
                                {/* <!-- [ daily sales section ] start -->
                                <!-- [ Fixed Header ] start --> */}
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>4th Grade Science Lessons</h5>
                                        </div>
                                        <div className="card-block">
                                            <div className="table-responsive">
                                               
                                                    
                                                <table id="" className="display table nowrap table-striped table-hover" style={{width:'100%'}}>
                                    <thead>
                                        <tr>
                                            {
                                              headerdata.map((headerList,i) =>(
                                                (i===0) ? <th>{headerList}</th> : <th className="textcenter">{headerList}</th>
                                             ))
                                            }
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            lessondata.map((lessonItem,j) => (
                                                (j===0)?
                                                <tr>
                                                    
                                                    <td key={lessonItem["Lesson Plan Name"]} style={{"vertical-align": "middle"}}>{lessonItem["Lesson Plan Name"]}</td>
                                                   
                                                       
                                                    <td key={lessonItem["topic"]} className="textcenter" style={{"vertical-align": "middle"}}>{lessonItem["Topic"]}</td>
                                                    <td key={lessonItem["Standard"]} className="textcenter" style={{"vertical-align": "middle"}}>{lessonItem["Standard"]}</td>
                                                    <td key={lessonItem["Duration"]} className="textcenter" style={{"vertical-align": "middle"}}>{lessonItem["Duration"]}</td>
                                                    <td key={lessonItem["Start Lesson"]} className="textcenter" style={{"vertical-align": "middle"}} >
                                                    <button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
											
                                                                        
                                                </tr>:
                                                   <tr>
                                                  <td key={lessonItem["Lesson Plan Name"]} style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i>{lessonItem["Lesson Plan Name"]}</td>
                                            
                                                      
                                                   <td key={lessonItem["topic"]} className="textcenter" style={{"vertical-align": "middle"}}>{lessonItem["Topic"]}</td>
                                                   <td key={lessonItem["Standard"]} className="textcenter" style={{"vertical-align": "middle"}}>{lessonItem["Standard"]}</td>
                                                   <td key={lessonItem["Duration"]} className="textcenter" style={{"vertical-align": "middle"}}>{lessonItem["Duration"]}</td>
                                                   <td key={lessonItem["Start Lesson"]} className="textcenter" style={{"vertical-align": "middle"}} >
                                                   <button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                           
                                                                       
                                               </tr>


                                        
                                            
                                            
                                            ))
                                        }
                                    </tbody>
                                   
										
                        </table>
														 {/* <tr>
                                                            <td style={{verticalAlign: 'middle'}} >Energy</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Energy</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-1A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 30 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><a href="startlesson"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></a></td>
                                                        </tr> */}
														
														
														
                                                   
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ Fixed Header ] end --> */}
								
								
								
                                
                                

                                
                            </div>
                            {/* <!-- [ Main Content ] end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- [ Main Content ] end -->
							<?php include("footer.php"); ?> */}

    
    {/* <!-- Required Js -->
    <script src="assets/js/vendor-all.min.js"></script>
	<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    
    <script src="assets/js/pcoded.min.js"></script>
    <!-- amchart js -->
    <script src="assets/plugins/amchart/js/amcharts.js"></script>
    <script src="assets/plugins/amchart/js/gauge.js"></script>
    <script src="assets/plugins/amchart/js/serial.js"></script>
    <script src="assets/plugins/amchart/js/light.js"></script>
    <script src="assets/plugins/amchart/js/pie.min.js"></script>
    <script src="assets/plugins/amchart/js/ammap.min.js"></script>
    <script src="assets/plugins/amchart/js/usaLow.js"></script>
    <script src="assets/plugins/amchart/js/radar.js"></script>
    <script src="assets/plugins/amchart/js/worldLow.js"></script>

    <!-- dashboard-custom js -->
    <script src="assets/js/pages/dashboard-custom.js"></script>
	
	<!-- datatable Js -->
    <script src="assets/plugins/data-tables/js/datatables.min.js"></script>
    <script src="assets/js/pages/tbl-datatable-custom.js"></script>
 */}














          </div>

        </TeacherLayout>

    )
}


