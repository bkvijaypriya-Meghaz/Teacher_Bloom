import TeacherLayout from '../../layout/TeacherLayout';
import ResourcesCard from './resources-card';

export default function resources(props) {

    return (
        <TeacherLayout {...props}>
            {/* [ navigation menu ] */}

            {/* LET'S INCLUDE SIDE MENU LATER */}
            {/* <?php include("sidemenu.php"); ?> */}
            
            {/* [ navigation menu ] end */}

            {/* [ Header ] start */}

            {/* LET'S INCLUDE SIDE MENU LATER */}
            {/* <?php include("header.php"); ?> */}
            
            {/* [ Header ] end */}
        
            

            {/* [ Main Content ] start */}
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            {/* <!-- [ breadcrumb ] start --> */}

                            {/* <!-- [ breadcrumb ] end --> */}
                            <div className="main-body">
                                <div className="page-wrapper">
                                    {/* <!-- [ Main Content ] start --> */}
                                    
                                    <div className="row">
                                        
                                        
                                        <div className="col-md-12 col-xl-6">
                                            <ResourcesCard title='Games' imageUrl="url('../assets/images/lesson/games.png');"/>
                                        </div>
                                        <div className="col-md-12 col-xl-6">
                                            <ResourcesCard title='Visual Glossary' imageUrl="url('../assets/images/lesson/glossary.png');"/>
                                        </div>
                                        <div className="col-md-12 col-xl-6">
                                            <ResourcesCard title='Infopedia' imageUrl="url('../assets/images/lesson/infopedia.png');"/>
                                        </div>
                                        <div className="col-md-12 col-xl-6">
                                            <ResourcesCard title='Teacher Toolbox' imageUrl="url('../assets/images/lesson/toolbox.png');"/>
                                        </div>
                                        <div className="col-md-12 col-xl-6">
                                            {/* <a href="curriculum.php">
                                            <ResourcesCard title='Curriculum' imageUrl="url('../assets/images/lesson/curriculum.png');"/>
                                            </a> */}
                                            <div className="card">
                                                <a href="curriculum">
                                                <div className="card-block lessonbg" style={{background: "url('../assets/images/lesson/curriculum.png')"}}>
                                                    <div className="row align-items-center justify-content-center">
                                                        <div className="col">
                                                            <h2 className="mb-2 f-w-300 f-33 resourceitem"><span>Curriculum</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-xl-6">
                                            <ResourcesCard title='Science Videos' imageUrl="url('../assets/images/lesson/science-videos.png');"/>
                                        </div>
                                        <div className="col-md-12 col-xl-6">
                                            <ResourcesCard title='Assessment Bank' imageUrl="url('../assets/images/lesson/science-videos.png');"/>
                                        </div>
                                    </div>
                                    {/* <!-- [ Main Content ] end --> */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [ Main Content ] end */}
            
            {/* LET'S INCLUDE FOOTER LATER : jilan */} 
            {/* <?php include("footer.php"); ?> */}
            
            {/* Required Js */}
            {/* <script src="../assets/js/vendor-all.min.js"></script>
            <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script> */}
            
            {/* <script src="../assets/js/pcoded.min.js"></script> */}
            {/* <!-- amchart js --> */}
            {/* <script src="../assets/plugins/amchart/js/amcharts.js"></script>
            <script src="../assets/plugins/amchart/js/gauge.js"></script>
            <script src="../assets/plugins/amchart/js/serial.js"></script>
            <script src="../assets/plugins/amchart/js/light.js"></script>
            <script src="../assets/plugins/amchart/js/pie.min.js"></script>
            <script src="../assets/plugins/amchart/js/ammap.min.js"></script>
            <script src="../assets/plugins/amchart/js/usaLow.js"></script>
            <script src="../assets/plugins/amchart/js/radar.js"></script>
            <script src="../assets/plugins/amchart/js/worldLow.js"></script> */}
            {/* <!-- notification Js --> */}
            {/* <!-- <script src="../assets/plugins/notification/js/bootstrap-growl.min.js"></script> --> */}

            {/* <!-- dashboard-custom js --> */}
            {/* <script src="../assets/js/pages/dashboard-custom.js"></script> */} {/* GIVING $.growl is not a function error */}
            {/* <!-- select2 Js --> */}
            {/* <script src="../assets/plugins/select2/js/select2.full.min.js"></script> */}

            {/* <!-- multi-select Js --> */}
            {/* <script src="../assets/plugins/multi-select/js/jquery.quicksearch.js"></script>
            <script src="../assets/plugins/multi-select/js/jquery.multi-select.js"></script> */}

            {/* <!-- form-select-custom Js --> */}
            {/* <script src="../assets/js/pages/form-select-custom.js"></script> */}

        </TeacherLayout>
    )
}