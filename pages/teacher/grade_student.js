import TeacherLayout from '../../layout/TeacherLayout';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top : '25%',
      height : 500,
      width : 500,
      left : '30%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%'
    //transform : 'translate(-50%, -50%)'
    }
  };

export default function Grade_Student (props){
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        console.log("This is OpenModal");
        setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }

    return(
        <TeacherLayout {...props}>
             {/* <!-- [ Main Content ] start --> */}
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
                                            <li className="breadcrumb-item"><a href="#!" className="breadcrumb-itemStyle">My Classes</a></li>
                                            <li className="breadcrumb-item"><a href="#!" className="breadcrumb-itemStyle">4th Grade Science</a></li>
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
                                    {/* <!-- [ daily sales section ] start --> */}
                                    {/* <!-- [ Fixed Header ] start --> */}
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="row card-rowStyle">
                                                <div className="col-7">
                                                    <div className="card-header card-headerStyle">
                                                        <h5>Students</h5>
                                                    </div>
                                                </div>
                                                <div className="col-5">
                                                    <div className="headrytbtn">
                                                        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addstudentpopup" onClick={openModal}><i className="feather icon-plus"></i>Add Student</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block">
                                                <div className="table-responsive">
                                                    <table id="" className="display table nowrap table-striped table-hover widthStyle">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th className="textcenter">Grades</th>
                                                                <th className="textcenter">To Be Graded</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Ann Doe</h6>
                                                                </td>
                                                                <td className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success" data-toggle="modal" data-target="#gradepopup"><i className="feather icon-bar-chart student_tableicon"></i></button> <i className="f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>Johnson William</h6>
                                                                </td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>Nokes John</h6>
                                                                </td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>Michaelis Brian</h6>
                                                                </td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Oliver Evelyn</h6>
                                                                </td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Brown Sophia</h6>
                                                                </td>
                                                                <td className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>Betteli Eric</h6>
                                                                </td>
                                                                <td className="textcenter"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Coso Denise</h6>
                                                                </td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>Logan Mason</h6>
                                                                </td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  rounded-circleStyle m-r-10"  src="../assets/images/user/avatar-1.jpg" alt="activity-user"/>Sharma Tanya</h6>
                                                                </td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="feather icon-bar-chart student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
                                                                <td  className="textcenter table-responsive-tdStyle"><button type="button" className="btn btn-icon btn-rounded btn-success disablecursoronly"><i className="ti-write student_tableicon"></i></button><i className="feather icon-lock f-20 tablelockicon m-l-20"></i></td>
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
        {/* <!-- [ Main Content ] end --> */}

        {/* Modal */}
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false} 
        >
        {/* <div id="addstudentpopup" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true"> */}
            {/* <div className="modal-dialog" role="document">
                <div className="modal-content"> */}
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLiveLabel">Add Student</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <div className="">
                            <div className="form-group">
                                <label for="">Last Name</label>
                                <input type="email" className="form-control" id="" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label for="">First Name</label>
                                <input type="email" className="form-control" id="" placeholder=""/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email ID</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                    </div>
                {/* </div>
            </div> */}
        {/* </div> */}
        </Modal>
        </TeacherLayout>
    )
}