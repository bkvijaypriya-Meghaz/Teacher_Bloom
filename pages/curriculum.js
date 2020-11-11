import TeacherLayout from '../layout/TeacherLayout';
import CurriculumCard from './curriculum-card'
import {useState, useEffect} from 'react'
import {getInfo} from '../services/GenricService';

import React from 'react'

export default function curiculum(props) {
    const [section, setSection] = useState(0);
    const [sectionList, setSectionList] = useState([]);

    useEffect(() => {
        getInfo("https://bloomlms.azure-api.net/teacher/v1/23423424/sections").then((data) => {
            console.log('bloom data is : ',data);
            setSection(data);
            setSectionList(data.sections);
        })
    }, [])



    return (
        <TeacherLayout {...props}>
            <div>
                {/* [ Main Content ] start */}
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
                                            <div className="col-md-4 col-xl-4 col-sm-12 col-xs-12">
                                                <div className="pagedropdown">
                                                    <label style={{ fontWeight: 'bold', fontSize: '17px' }}>Select Grade</label>
                                                    <select className="form-control" style={{ background: '#fff', borderRadius: '0px' }}>
                                                    {sectionList.map((sectionItem) => (
                                                     <option key={sectionItem.id} value={sectionItem.name}>
                                                         {sectionItem.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-xl-5 col-sm-12 col-xs-12">
                                                <button type="button" className="btn btn-success btnmargintop disabled"><i className="feather icon-lock text-white"></i> Benchmark</button>
                                            </div>


                                        </div>
                                        <div className="row m-t-20">
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.5A Classifying Matter' grade='Fourth Grade' icon="feather icon-shopping-cart f-30 text-white rides-icon" status="visible" />
                                            </div>


                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.5B Changes from Heat' grade='Fourth Grade' icon="feather icon-command f-30 text-white rides-icon" status="visible" />
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.5C Mixtures' grade='Fourth Grade' icon="mdi mdi-atom f-30 text-white rides-icon" status="visible" />
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.6A Forms of Energy' grade='Fourth Grade' icon="ti-panel f-30 text-white rides-icon" status="visible" />
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.6BC Electricity, Conductors, & Insulators' grade='Fourth Grade' icon="icon-chemistry f-30 text-white rides-icon" status="visible" />
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.6D Experimenting with Forces' grade='Fourth Grade' icon="ti-view-list-alt f-30 text-white rides-icon" status="visible" />
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.7A Properties of Soil' grade='Fourth Grade' icon="ti-view-list-alt f-30 text-white rides-icon" status="visible" />
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.7B Changes to Land' grade='Fourth Grade' icon="ti-view-list-alt f-30 text-white rides-icon" status="visible" />
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                            <div className="card rides-bar">
                                            <div className="card-block">
                                                <a href="startlesson">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <i className="ti-view-list-alt f-30 text-white rides-icon"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h3 className="f-w-300 curricumhead">4.7C Energy</h3>
                                                            <h6 className="fourthgrade">Fourth Grade</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.8A Weather' grade='Fourth Grade' icon="ti-view-list-alt f-30 text-white rides-icon" status="visible" />
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.8B The Sun and Water Cycle' grade='Fourth Grade' icon="ti-view-list-alt f-30 text-white rides-icon" status="visible" />
                                                
                                            </div>
                                            <div className="col-md-6 col-xl-4">
                                                <CurriculumCard title='4.8C Patters on Earth' grade='Fourth Grade' icon="ti-view-list-alt f-30 text-white rides-icon" status="visible" />
                                            </div>
                                        </div>
                                        {/* [ Main Content ] end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [ Main Content ] end */}

            </div>
        </TeacherLayout >

        // <!-- Required Js -->
        // <script src="../assets/js/vendor-all.min.js"></script>
        // <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>

        // <script src="../assets/js/pcoded.min.js"></script>
        // <!-- amchart js -->
        // <script src="../assets/plugins/amchart/js/amcharts.js"></script>
        // <script src="../assets/plugins/amchart/js/gauge.js"></script>
        // <script src="../assets/plugins/amchart/js/serial.js"></script>
        // <script src="../assets/plugins/amchart/js/light.js"></script>
        // <script src="../assets/plugins/amchart/js/pie.min.js"></script>
        // <script src="../assets/plugins/amchart/js/ammap.min.js"></script>
        // <script src="../assets/plugins/amchart/js/usaLow.js"></script>
        // <script src="../assets/plugins/amchart/js/radar.js"></script>
        // <script src="../assets/plugins/amchart/js/worldLow.js"></script>


        // <!-- dashboard-custom js -->
        // <script src="../assets/js/pages/dashboard-custom.js"></script>
        // <!-- select2 Js -->
        // <script src="../assets/plugins/select2/js/select2.full.min.js"></script>

        // <!-- multi-select Js -->
        // <script src="../assets/plugins/multi-select/js/jquery.quicksearch.js"></script>
        // <script src="../assets/plugins/multi-select/js/jquery.multi-select.js"></script>

        // <!-- form-select-custom Js -->
        // <script src="../assets/js/pages/form-select-custom.js"></script>
    )
}




