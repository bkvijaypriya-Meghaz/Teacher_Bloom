import TeacherLayout from '../../layout/TeacherLayout';
// import GradeAssignment  from './GradeAssignment';
// import GradeStartClass from './GradeStartClass';


export default function (props){
    return(
    <TeacherLayout {...props}>
        <div>
        {/* <!-- [ Main Content ] start --> */}
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/* <!-- [ breadcrumb ] start --> */}

                        {/* <!-- [ breadcrumb ] end --> */}
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 col-xl-10">
                                        <div className="card">
                                            <div className="card-block border-bottom myclass-card">
                                                <div className="row">
                                                    <div className="col-auto"> 
                                                        <h3>Science</h3>
                                                        <h5 className="text-c-green mb-0">2<sup>nd</sup> Grade</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block myclass-card">
                                                <div className="row align-items-center justify-content-center card-active text-center">
                                                    <div className="col-3">
                                                        <a href="grade_student"><label className="label f-12 f-w-400 gradeitem"> <i className="icon-user"></i> <br/>Student</label></a>
                                                    </div>
                                                    <div className="col-3">
                                                    <a href="GradeAssignment"><label className="label f-12 f-w-400 gradeitem"> <i className="icon-book-open"></i> <br/>Assignments</label></a>
                                                    </div>
                                                    
                                                    <div className="col-3">
                                                        <a href="GradeStartClass"><label className="label f-12 f-w-400 gradeitem"> <i className="icon-control-play"></i> <br/> Start Class</label></a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a href="grade_startclass.php"><label className="label f-12 f-w-400 gradeitem"> <i className="icon-game-controller"></i> <br/>Games</label></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ Main Content ] end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- [ Main Content ] end --> */}
    </div>
    </TeacherLayout>
    )
}