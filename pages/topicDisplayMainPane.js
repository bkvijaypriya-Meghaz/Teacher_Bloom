import React from 'react'
import { FiPlus } from 'react-icons/fi'

export default function topicDisplayMainPane() {
    return (
        <div>
            <div className="row slsubmenuhead">
                <div className="col-xl-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="">
                        <h5>Essentials : Bundle Summary</h5>
                    </div>
                </div>
                <div className="col-xl-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="addlpbtn" alt="Essentials : Bundle Summary">
                        <i className="feather icon-plus"><FiPlus/></i>Add to Lesson Planner
                    </div>
                </div>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-Essentials" role="tabpanel" aria-labelledby="v-pills-Essentials-tab">
                    <div className="card lessoncard">
                        <div className="card-header">
                            <h5>Essentials</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <h6>Pre-Assessment</h6>
                                <p>Students answer five multiple choice questions drawing on general prior knowledge.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="v-pills-Engage" role="tabpanel" aria-labelledby="v-pills-Engage-tab">
                    <div className="card lessoncard">
                        <div className="card-header">
                            <h5>Engage</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <p>Students investigate sound energy by producing sound with stemmed glasses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            
            <div className="card Recent-Users lphide" id="step2">
                <div className="card-header" style={{    padding:' 10px 25px'}}>
                    <h5>Lesson Planner</h5>
                </div>
                <div className="card-block px-0 py-0">
                    <div className="table-responsive">
                        <table className="table table-hover dashcurrentass">
                            <tbody id="addlptitle">
                            </tbody>
                        </table>
                    </div>
                </div>    
                <div className="addlppublishbtn">
                    <input type="button" className="btn btn-outline-success btn-sm btn-rounded m-r-10 clearall" value="Clear All"/>
                    <input type="button" className="btn btn-success btn-sm btn-rounded" value="Publish" id="publish"></input>
                </div>
            </div>
        </div>
    )
}
