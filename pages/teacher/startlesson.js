import React from 'react'

import TeacherLayout from '../../layout/TeacherLayout';
import NavAndView from '../../components/nav-and-view/NavAndView';
import EnergyLessonPlan from './energy_lessonplan';
import ESSENTIALS from './essentials/essentials';
import ENGAGE from './engage/engage';
import EXPLORE from './explore/explore';
import EXPLAIN from './explain/explain';
import ELABORATE from './elaborate/elaborate';
import EVALUATE from './evaluate/evaluate';
import INTERVENTION from './intervention/intervention';
import ACCELERATION from './acceleration/acceleration';

export default function StartLesson(props){

    const viewsList = [
        { name: "PLAN", id: "PLAN" },
        { name: "ESSENTIALS", id: "ESSENTIALS" },
        { name: "ENGAGE", id: "ENGAGE" },
        { name: "EXPLORE", id: "EXPLORE" },
        { name: "EXPLAIN", id: "EXPLAIN" },
        { name: "ELABORATE", id: "ELABORATE" },
        { name: "EVALUATE", id: "EVALUATE" },
        { name: "INTERVENTION", id: "INTERVENTION" },
        { name: "ACCELERATION", id: "ACCELERATION" }
    ];

    const views = {
        "PLAN": <EnergyLessonPlan/>,
        "ESSENTIALS": <ESSENTIALS/>,
        "ENGAGE": <ENGAGE/>,
        "EXPLORE": <EXPLORE/>,
        "EXPLAIN": <EXPLAIN/>,
        "ELABORATE": <ELABORATE/>,
        "EVALUATE": <EVALUATE/>,
        "INTERVENTION": <INTERVENTION/>,
        "ACCELERATION": <ACCELERATION/>
    };

	const showNavItem = () => {
		//const currentClass = document.getElementsByClassName('nav-item');
		console.log("HI showNavItem");
		let element = document.getElementById('essentials-tab');
		console.log("esement is : ",element);
		element.classList.add('active');
		element.classList.add('show');
		//showNavItem
		element = document.getElementById('intro-tab');
		element.classList.remove('active');
		element.classList.remove('show');
		//element.getAttribute();

	}
    return(
    <TeacherLayout {...props}>

    {/* <!-- [ Main Content ] start --> */}
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
								<div className="col-xl-12 col-md-12 lessonplan_detail">
                                    <div className="card">
										<div className="row card-rowStyle" >
											<div className="col-7">
												<div className="card-header card-headerStyle">
													<h5>Lesson Plan Detail : Energy</h5>
												</div>
											</div>
											<div className="col-5">
												<div className="headrytbtn">
													<a href="https://meet.google.com/eyv-euaa-ixh" target="_blank"><button type="button" className="btn btn-success"><i className="feather icon-play"></i>Start Virtual Classroom</button></a>
												</div>
											</div>
                                            <NavAndView
                                                viewsList={viewsList}
                                                views={views}
                                                initialView={"PLAN"}
                                                cssClasses={{
                                                    activeClass: "active",
                                                    inactiveClass: "inactive"
                                                }}
                                            />
										</div>
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