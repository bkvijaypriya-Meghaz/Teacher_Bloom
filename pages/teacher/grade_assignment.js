import { useState, useEffect, useRef } from 'react';
import TeacherLayout from '../../layout/TeacherLayout';
import { FiLock } from 'react-icons/fi';
import React from 'react'


export default function grade_assignment(props) {
    const data = [

        { AssignmentName: "Energy", Standard: "TXK-1A", DueDate: "31st July 2020", status: "To Be Graded" },
        { AssignmentName: "Weight & Scale", Standard: "TXK-2A", DueDate: "31st July 2020", status: "Completed" },
        { AssignmentName: "Photosynthesis", Standard: "TXK-1A", DueDate: "31st July 2020", status: "Completed" },
        { AssignmentName: "Photons", Standard: "TXK-1A", DueDate: "31st July 2020", status: "Pending" }
    ]

    const [assignment, setAssignment] = useState(data)

    useEffect(() => {
        getData()
        //setAssignment(assignment)
    }, [])

    const getData = async () => {


        setAssignment(assignment)
    }

    const changeStatus = (val) => {

        
        if (val == 'Show All') {
            setAssignment(data)
        }
        else {
            
            const statusVal = data.filter(data => data.status == val)
            
            setAssignment(statusVal)
        }
    }

    const renderHeader = () => {
        let headerElement = ['Assignment Name', 'Standard', 'Due Date']

        // return headerElement.map((AssignmentName, Standard, DueDate)=> {
        return (

            <tr >
                <th className="textcenter" style={{textAlign :'left'}}>Assignment Name </th>
                <th className="textcenter" style={{textAlign :'left'}}> Standard</th>
                <th className="textcenter" style={{textAlign :'left'}}>DueDate</th>
                <th className="textcenter" style={{textAlign :'left'}}>
                    <select className="form-control"  style = {{borderRadius:'0 px',padding: '7px 19px',height: 'auto'}} onChange={() => changeStatus(event.target.value)}>

                        <option value="Show All">Show All</option>
                        <option value="To Be Graded">To Be Graded</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select></th>
            </tr>

        )

    }

    const renderBody = () => {

        return assignment && assignment.map(({ AssignmentName, Standard, DueDate, status }) => {
            return (

                <tr key={AssignmentName} className={AssignmentName != 'Energy' ? "disablecursortable disablecolor completed" : "graded"}>
                    <td className="textcenter" style={{ verticalAlign: 'middle',  textAlign :'left'}}><i className="feather icon-lock f-20 tablelockicon">{AssignmentName != 'Energy' ? <FiLock /> : null}</i>{AssignmentName}</td>
                    <td className="textcenter" style={{ verticalAlign: 'middle' ,textAlign :'left'}}>{Standard}</td>
                    <td className="textcenter" style={{ verticalAlign: 'middle',textAlign :'left' }}>{DueDate}</td>
                    <td className="textcenter" style={{ verticalAlign: 'middle',textAlign :'left' }}>{status} </td>

                </tr>
            )
        })
    }
    return (


        <TeacherLayout {...props}>
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
                                                <li className="breadcrumb-item"><a href="#!" style={{ color: '#888' }}>Science 2nd Grade</a></li>

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
                                                    <h5>Assignments</h5>
                                                </div>
                                                <div className="card-block">
                                                    {/* <!-- */}
                                                    {/* <div className="row">

                                                        <div className="col-md-12 col-xl-6">
                                                            <div className="pagedropdown" >
                                                                <label>Select Status</label>
                                                                <select className="form-control"  >
                                                                    <option value="">To Be Graded</option>
                                                                    <option value="">Completed</option>
                                                                    <option value="">Pending</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div> */}
                                                    {/* {/* --> */}
                                                    <div className="table-responsive">

                                                        <table id="" className="display table nowrap table-striped table-hover" style={{ width: '100%' }}>
                                                            <thead>
                                                                {renderHeader()}
                                                            </thead>
                                                            <tbody>
                                                                {renderBody()}
                                                            </tbody>
                                                        </table>
                                                    </div>
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
            {/* !-- Required Js -->
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
<script></script> */}
        </TeacherLayout>
    )
}


