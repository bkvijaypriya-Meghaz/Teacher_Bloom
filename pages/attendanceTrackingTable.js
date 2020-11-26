import React from 'react'
import TeacherLayout from '../layout/TeacherLayout';
import  { useState, useEffect } from 'react';
import Modal from '../components/modal/Modal';
import AttendanceReportModal from '../components/modal_windows/AttendanceReportModal'

//import {getInfo} from '../services/GenricService';

function attendanceTrackingTable(props) {

    
    const headerdata = ["Name", "Sync. Time Spent","Async. Time Spent","Details"];
    
    const Studentdata = [
        {
            "Name":"Ann Doe",
            "Sync. Time Spent":"5 hrs",
            "Async. Time Spent":"6 hrs",
            "Details":"icons"
        },
        {
            "Name":"Johnson William",
            "Sync. Time Spent":"4 Hrs 35 Mins",
            "Async. Time Spent":"8 Hrs 5 Mins",
            "Details":"icons"
        },
        {
            "Name":"Nokes John",
            "Sync. Time Spent":"4 Hrs 5 Mins",
            "Async. Time Spent":"7 Hrs 10 Mins",
            "Details":"icons"
        },
        {
            "Name":"Michaelis Brian",
            "Sync. Time Spent":"2 Hrs 20 Mins",
            "Async. Time Spent":"5 Hrs 10 Mins",
            "Details":"icons"
        },
        {
            "Name":"Oliver Evelyn",
            "Sync. Time Spent":"1 Hrs 30 Mins",
            "Async. Time Spent":"9 Hrs 00 Mins",
            "Details":"icons"
        },
        {
            "Name":"Brown Sophia",
            "Sync. Time Spent":"5 Hrs 50 Mins",
            "Async. Time Spent":"6 Hrs 40 Mins",
            "Details":"icons"
        },
        {
            "Name":"Betteli Eric",
            "Sync. Time Spent":"2 Hrs 55 Mins",
            "Async. Time Spent":"5 Hrs 23 Mins",
            "Details":"icons"
        },
        {
            "Name":"Coso Denise",
            "Sync. Time Spent":"6 Hrs 22 Mins",
            "Async. Time Spent":"3 Hrs 45 Mins",
            "Details":"icons"
        },
        {
            "Name":"Logan Mason",
            "Sync. Time Spent":"4 Hrs 5 Mins",
            "Async. Time Spent":"7 Hrs 10 Mins",
            "Details":"icons"
        },
        {
            "Name":"Sharma Tanya",
            "Sync. Time Spent":"5 Hrs 4 Mins",
            "Async. Time Spent":"1 Hrs 11 Mins",
            "Details":"icons"
        }
    ] 
    
   /* const[studentData,setstudentData] = useState({})

    useEffect(() => { getInfo(`${ASSIGNMENT_TO_BE_GRADED}/786868/assignments/to-be-graded`).then((data) => {
		//Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("student data",props.refresh)
        console.log('bloom data is : ',data);
        setAssignment(data);
        setAssignmentList(data.Studentdata)

    })
    }, [props.refresh])*/
    const [attendanceReportModalScreenVisibility, setAttendanceReportModalScreenVisibility] = useState(false);

const showAttendanceReportModal = () => {
	setAttendanceReportModalScreenVisibility(true);
};

const hideAttendanceReportModal = () => {
	
	setAttendanceReportModalScreenVisibility(false);
};






    
    return (
        
        <div>
             
		
		<Modal
           isOpen={attendanceReportModalScreenVisibility}
		   hideModal={hideAttendanceReportModal}
           modalTitle= "AttendanceReportModal"
        >
         <AttendanceReportModal  hideModal={hideAttendanceReportModal}/>
        </Modal>
            
                <div className="card">
                    <div className="row" style={{borderBottom: '1px solid #f1f1f1'}}>
						<div className="col-5">
							<div className="card-header" style={{borderBottom: 'none'}}>
								<h5>Students</h5>
							</div>
						</div>
						<div className="col-7">
							<div className="headrytbtn">
								<button type="button" className="btn btn-success" data-toggle="modal" data-target="#customreportpopup"><i className="feather icon-plus"></i>Custom Report</button>
							</div>
						</div>
					</div>
                    <div className="card-block">
						<div className="row">
							<div className="col-xl-4 col-md-4 col-sm-4 col-xs-12">
								<div className="form-group">
									<label for="">From</label>
									<input type="date" className="form-control fromtotxtbox" id="" placeholder="From"/>
								</div>
							</div>
							<div className="col-xl-4 col-md-4 col-sm-4 col-xs-12">
								<div className="form-group">
									<label for="">To</label>
										<input type="date" className="form-control fromtotxtbox" id="" placeholder=""/>
								</div>
							</div>
							</div>
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
                                       {/* <tr>
                                            <th>Name</th>
                                            <th className="textcenter">Sync. Time Spent</th>
                                            <th className="textcenter">Async. Time Spent</th>
                                            <th className="textcenter">Details</th>
                                       </tr>*/}
                                    </thead>

                                    <tbody>
                                        {
                                            Studentdata.map((StudentItem,j) => (
                                                <tr>
                                                    <td key={StudentItem.Name} style={{"vertical-align": "middle"}}>
                                                    <img className="rounded-circle m-r-10" style={{width:'40px'}} src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>
                                                        {StudentItem.Name}</td>
                                                    <td key={StudentItem["Sync. Time Spent"]} className="textcenter" style={{"vertical-align": "middle"}}>{StudentItem["Sync. Time Spent"]}</td>
                                                    <td key={StudentItem["Async. Time Spent"]} className="textcenter" style={{"vertical-align": "middle"}}>{StudentItem["Async. Time Spent"]}</td>
                                                    <td key={StudentItem.Details} className="textcenter" style={{"vertical-align": "middle"}} >
                                                    <button type="button" className="btn btn-icon btn-rounded btn-success chartshow b1"><i className="ti-bar-chart student_tableicon"></i></button>
											<button type="button" className="btn btn-icon btn-rounded btn-success b2" data-toggle="modal" data-target="#studentattchart"><i className="ti-bar-chart student_tableicon"></i></button>
											<button type="button" className="btn btn-icon btn-rounded btn-success" data-toggle="modal" data-target="#reportpopup"><i className="ti-server student_tableicon" onClick={showAttendanceReportModal}></i></button></td>
                                                   
                                                                        
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                   {/* <tbody>
										<tr>
                                            <td>
                                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:'40px'}} src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Ann Doe</h6>
                                                </td>
                                            <td style={{verticalAlign: 'middle'}} className="textcenter">5 hrs</td>
                                            <td style={{verticalAlign: 'middle'}} className="textcenter">6 hrs</td>
                                            <td style={{verticalAlign: 'middle'}} className="textcenter">
											<button type="button" className="btn btn-icon btn-rounded btn-success chartshow b1"><i className="ti-bar-chart student_tableicon"></i></button>
											<button type="button" className="btn btn-icon btn-rounded btn-success b2" data-toggle="modal" data-target="#studentattchart"><i className="ti-bar-chart student_tableicon"></i></button>
											<button type="button" className="btn btn-icon btn-rounded btn-success" data-toggle="modal" data-target="#reportpopup"><i className="ti-server student_tableicon"></i></button>
											{/*<i className="feather icon-lock f-20 tablelockicon m-l-20"></i> */}
											{/*</td>
                                        </tr>*/}
										
                        </table>
                    </div>
                </div>
            </div>
       
        </div>
       
    )
}

export default attendanceTrackingTable
