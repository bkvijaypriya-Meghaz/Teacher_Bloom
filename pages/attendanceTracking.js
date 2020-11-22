import React from 'react'
import AttendanceTrackingPieChart from './attendanceTrackingPieChart';
import AttendanceTrackingBarChart from './attendanceTrackingBarChart';
import AttendanceTrackingTable from './attendanceTrackingTable';
import TeacherLayout from '../layout/TeacherLayout';

function attendanceTracking(props) {
    return (

        <TeacherLayout {...props}>

        <div>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                    {/* [ breadcrumb ] start */}

                    {/* [ breadcrumb ] end */}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/* [ Main Content ] start */}
                            
							<div className="row">
                                {/* [ daily sales section ] start */}
								{/* [ Recent Users ] start */}
								
								<div className="col-xl-4 col-md-4 col-sm-12 col-xs-12">
									
                                    <AttendanceTrackingPieChart/>
                                </div>

                                <div className="col-xl-8 col-md-8 col-sm-12 col-xs-12">
                                    <AttendanceTrackingBarChart/>
                                </div> 

                                <div className="col-md-12 col-sm-12 col-xs-12">
                                     <AttendanceTrackingTable/>
                                </div>
                            </div> 
                        </div>
                    </div>   
                </div>      
            </div>
        </div>
       </div> 
     </div>   
        </TeacherLayout>
    )
}

export default attendanceTracking
