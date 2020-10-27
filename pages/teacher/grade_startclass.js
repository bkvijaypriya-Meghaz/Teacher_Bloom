import { useState, useEffect, useRef } from 'react';
import TeacherLayout from '../../layout/TeacherLayout';
import { FiLock } from 'react-icons/fi';


import React from 'react'


export default function GradeStartClass(props) {
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
                                                <table className="display table nowrap table-striped table-hover" style={{width:'100%'}}>
                                                    <thead>
                                                        
														<tr>
                                                            <th>Lesson Plan Name</th>
                                                            <th className="textcenter">Topic</th>
                                                            <th className="textcenter">Standard</th>
                                                            <th className="textcenter">Duration</th>
                                                            <th className="textcenter">Start Lesson</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
														<tr>
                                                            <td style={{verticalAlign: 'middle'}} >Energy</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Energy</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-1A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 30 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><a href="startlesson"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></a></td>
                                                        </tr>
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> Space</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Universe</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-2A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">2 Hrs 0 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                                        </tr>
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> Photosynthesis</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Plants</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-2B</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 30 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                                        </tr>
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> Chemistry</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Chemistry</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-3A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 30 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                                        </tr>
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> IPC</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">IPC</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-2B</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 0 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                                        </tr>
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> Weight & Scale</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Plants</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-2A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 30 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                                        </tr>
														
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> Photons</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Light</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-3A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 30 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                                        </tr>
														
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> Atoms</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Matter</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-3A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">2 Hrs 0 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><a href="startlesson.php"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></a></td>
                                                        </tr>
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> Time & Space</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Time</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-1A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 30 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                                        </tr>
														<tr className="disablecursortable disablecolor">
                                                            <td style={{verticalAlign: 'middle'}} ><i className="feather icon-lock f-20 tablelockicon"><FiLock/></i> Electricity</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">Electricity</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">TXK-3A</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter">1 Hr 30 Mins</td>
                                                            <td style={{verticalAlign: 'middle'}}  className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success"><i className="feather icon-play"></i></button></td>
                                                        </tr>
														
														
                                                    </tbody>
                                                </table>
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
    <script src="../assets/js/vendor-all.min.js"></script>
	<script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    
    <script src="../assets/js/pcoded.min.js"></script>
    <!-- amchart js -->
    <script src="../assets/plugins/amchart/js/amcharts.js"></script>
    <script src="../assets/plugins/amchart/js/gauge.js"></script>
    <script src="../assets/plugins/amchart/js/serial.js"></script>
    <script src="../assets/plugins/amchart/js/light.js"></script>
    <script src="../assets/plugins/amchart/js/pie.min.js"></script>
    <script src="../assets/plugins/amchart/js/ammap.min.js"></script>
    <script src="../assets/plugins/amchart/js/usaLow.js"></script>
    <script src="../assets/plugins/amchart/js/radar.js"></script>
    <script src="../assets/plugins/amchart/js/worldLow.js"></script>

    <!-- dashboard-custom js -->
    <script src="../assets/js/pages/dashboard-custom.js"></script>
	
	<!-- datatable Js -->
    <script src="../assets/plugins/data-tables/js/datatables.min.js"></script>
    <script src="../assets/js/pages/tbl-datatable-custom.js"></script>
 */}














          </div>

        </TeacherLayout>

    )
}


