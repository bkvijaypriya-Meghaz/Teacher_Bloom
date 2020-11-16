import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import TeacherLayout from '../layout/TeacherLayout';
import {FiLock} from 'react-icons/fi';
import BigCalendar from './calendar_big';
import Modal from '../components/modal/Modal'
import {TeacherSetup} from '../components/TeacherSetup'
import StudentActivity from './StudentActivity'
import DashboardClassAverage from './dashboardClassAverage';

import CurrentAssignment from './dashboardCurrentAssignment';
import AssignmentToBeGraded from './dashboardAssignmentGraded';
import {getInfo} from '../services/GenricService';
import {TEACHER_SECTIONS} from '../components/ConstFile';

export default function Dashboard (props){
    
    const[sectionsList,setSectionsList]=useState([])
   // here you have to pass default sectionid
    const [refresh, doRefresh] = useState('2342342');
    useEffect(() => {
        getInfo(TEACHER_SECTIONS).then((data) => {
            console.log('bloom data is : ',data.sections);
            setSectionsList(data.sections)
        })
    }, [])
  
    useEffect(() => {
        loadAreaChart()
        return () => {
            console.log("After loading load---------------------")
        }
    }, [])

    useEffect(() => {
        showTeacherSetupModal1();   
    }, []);

    const loadLineChart = () =>{
        // [ line-chart ] start
        var dom = document.getElementById("chart-echart-line-basic");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;
        option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            color: "#04a9f5",
            series: [{
                data: [1, 5, 3, 6, 4, 8, 10],
                type: 'line',
            }]
        };
        myChart.setOption(option, true);
        // [ line-chart ] end
    }

    const loadAreaChart = () => {
        console.log("loadAreaChart");
        // [ area-chart ] Start
        var echartItem = document.getElementById("chart-echart-line-area");
        var myChart = echarts.init(echartItem);
        console.log("===================> ",myChart);
        var app = {};
        var option = null;
        option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Present', 'Absent', 'Tardy']
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar', 'stack', 'tiled']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                splitLine: {
                    show: false
                },
                boundaryGap: false,
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
            }],
            color: ["rgba(163, 137, 212, 0.5)", "rgba(4, 169, 246, 0.5)", "rgba(28, 233, 181, 0.5)"],
            yAxis: [{
                type: 'value',
                splitLine: {
                    show: false
                }
            }],			
            series: [{
                    name: 'Present',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'macarons'
                            }
                        }
                    },
                    data: [10, 9, 7, 8, 5, 6, 9, 10, 5, 8, 9, 10, 4, 8, 9, 9, 10, 10, 10, 8, 7, 6, 9, 8, 7, 9, 10, 8, 5, 3]
                },
                {
                    name: 'Absent',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'macarons'
                            }
                        }
                    },
                    data: [0, 1, 3, 2, 5, 4, 1, 0, 5, 2, 1, 0, 6, 2, 1, 1, 0, 0, 0, 2, 3, 4, 1, 2, 3, 1, 0, 2, 5, 7]
                },
                {
                    name: 'Tardy',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'macarons'
                            }
                        }
                    },
                    data: [2, 1, 1, 1, 1, 2, 2, 0, 1, 2, 2, 3, 1, 4, 1, 0, 2, 3, 2, 1, 4, 1, 2, 1, 0, 3, 2, 1, 1, 0]
                }
            ]
        };
        myChart.setOption(option, true);
        // [ area-chart ] end

    }

    const loadBarChart = () =>{
        // [ bar-chart ] Start
        var dom = document.getElementById("chart-Bar-besic-column");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            title: {
                text: 'Bar Chart',
                subtext: 'Basic Column Chart'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Data1', 'Data2']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            color: ["rgba(163, 137, 212, 1)", "rgba(28, 233, 181, 1)"],
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            }],
            series: [{
                    name: 'Data1',
                    type: 'line',
                    smooth: true,
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [{
                                type: 'max',
                                name: 'Maximum'
                            },
                            {
                                type: 'min',
                                name: 'Minimum'
                            }
                        ]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '100'
                        }]
                    }
                },
                {
                    name: 'Data2',
                    type: 'line',
                    smooth: true,
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [{
                            name: 'Week Minimum',
                            value: -2,
                            xAxis: 1,
                            yAxis: -1.5
                        }]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '100'
                        }]
                    }
                }
            ]
        };
        myChart.setOption(option, true);
        // [ bar-chart ] end
    }

    const [bloomTeacherSetupScreen1Visibility, setBloomTeacherSetupScreen1Visibility] = useState(false);

    const showTeacherSetupModal1 = () => {
        setBloomTeacherSetupScreen1Visibility(true);
    };

    const hideTeacherSetupModal1 = () => {
        console.log("hiding teacher setup modal")
        setBloomTeacherSetupScreen1Visibility(false);
    };

    const openPopup = ()  =>{
        //console.log(document.getElementById("popupBtn").getAttributeNames());
        if(document.getElementById("popup").classList.contains("show")){
            document.getElementById("popup").classList.remove("show")
        }
        else
            document.getElementById("popup").classList.add("show");
    }

    return(
        <TeacherLayout {...props}>
        
        <Modal
            isOpen={bloomTeacherSetupScreen1Visibility}
            hideModal={hideTeacherSetupModal1}
            modalTitle= "Bloom Teacher Setup"
        >
            <TeacherSetup hideModal={hideTeacherSetupModal1}/>
        </Modal>

        <Form name="dashboardFrm">
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
                                <div className="col-md-12">
                                <div className="col text-right">                                    
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item dashtopname"><h5>Ms Jane Doe's Science Class</h5></li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">		
									<div className="card cardbreadcrum"> 
										<div className="card-block nopadding">  
											<div className="row nomargin">		
												<div className="col text-right">	
													<div className="card-header card-headerStyle">
														<div className="card-header-right displayblock threedot">		
															<div className="btn-group card-option">			
																<button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
																	<i className="feather icon-more-horizontal" onClick={openPopup}></i>		
																</button>	
                                                                <ul id="popup" className="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                                                {sectionsList && sectionsList.map((sections)=>{
                                                                     let  clickevent  = (event) => {
                                                                         const section = event.currentTarget.getAttribute("sectionid")
                                                                        //  Todo : we have to assign section to refresh
                                                                         doRefresh(refresh => section) 
                                                                         console.log("refresh value",section)
                                                                    
                                                                        
                                                                      };
                                                                 return (								
																
																	<li className="dropdown-item disablecursoronly"><a href="#!" sectionid ={sections.id}  onClick={clickevent} ><span>{sections.name}  <i className="feather icon-lock rytdropdownicon"></i></span> </a> </li>															
                                                                    // doRefresh(refresh => {handleClick}) 
                                                                )}	)}
                                                                 </ul>										
															</div>									
														</div>									
													</div>									
												</div>                             
											</div>                            
										</div>                           
									</div>                          
								</div>
								<div className="col-xl-4 col-md-12 col-sm-12 col-xs-12">
                                    {/* <Component1/> */}
                                    <CurrentAssignment refresh={refresh} />
                                </div>
                                <div className="col-xl-4 col-md-12 col-sm-12 col-xs-12">
                                    {/* <Component2/> */}
                                    <AssignmentToBeGraded refresh={refresh}/>
                                </div>
                                <div className="col-xl-4 col-md-12 col-sm-12 col-xs-12">
                                    {/* <Component3/> */}
                                    <AssignmentToBeGraded refresh={refresh}/>
                                </div>
								<div className="col-md-12 col-sm-12 col-xs-12 col-xl-12">
                                    <DashboardClassAverage refresh={refresh}/> 
                                </div>
								<div className="col-xl-6 col-md-12 card-AreaChartStyle" >
									<div className="card">
										<div className="card-header">
											<h5>Area Chart</h5>
										</div>
										<div className="card-block  text-center">
											<div id="chart-echart-line-basic" ></div>
										</div>
									</div>
								</div>
								<div className="col-xl-12 col-md-12">
									<div className="card">
										<div className="row card-rowStyle">
											<div className="col-12 col-md-7">
												<div className="card-header card-headerStyle" >
													<h5>4th Grade Science Attendance</h5>	
												</div>
											</div>
											<div className="col-12 col-md-5 text-right">
												<div className="card-header card-headerStyle" >
												<div className="card-header-right">
													<div className="btn-group card-option">
														<button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<i className="feather icon-more-horizontal" onClick={openPopup}></i>
														</button>
														<ul id="popup" className="list-unstyled card-option dropdown-menu dropdown-menu-right">
															
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>2nd Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>3rd Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
															<li className="dropdown-item"><a href="#!"><span>4th Grade</span></a></li>
															<li className="dropdown-item disablecursoronly"><a href="#!"><span>5th Grade <i className="feather icon-lock rytdropdownicon"><FiLock/></i></span></a></li>
															
														</ul>
													</div>
												</div>
												</div>
											</div>
										</div>
										<div className="card-block  text-center">
											<div className="ylabel">Students</div>
											<div id="chart-echart-line-area" className="chart-echart-line-areaStyle"></div>
											<div className="xlabel">Days Of Months</div>
										</div>
                                        <div className="col-md-12 col-xl-12">
                                            <div className="card fullcalendar-card">
                                                <div className="card-header">
                                                    <h5>Class Schedule</h5>
                                                </div>
                                                <div className="card-block">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-md-12">
                                                            <div id='calendar' className='calendar'>
                                                                <BigCalendar/>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- [ Recent Users ] start --> */}
                                        {/* <!-- [ Recent Users ] start --> */}
                                        <div className="col-xl-12 col-md-12">
                                            <div className="card Recent-Users">
                                                <div className="card-header">
                                                    <h5>4th Grade Science Student Activity</h5>
                                                    
                                                </div>
                                                
                                                
                                                <StudentActivity refresh={refresh}/>
                                            </div>
                                        </div>
                                        {/* // <!-- [ Recent Users ] end --> */}
                                        {/* </table> */}
                                        </div>
                                    </div>
                                </div>
							</div>
							{/* <!-- [ Main Content ] end --> */}
							{/* <!-- [ chat user list ] start --> */}
							<div>
							<div className="header-user-list">
                            <div className="h-list-header">
                                <div className="input-group">
                                    <input type="text" id="search-friends" className="form-control" placeholder="Search for Student . . ."/>
                                </div>
                            </div>
                            <div className="h-list-body">
                                <a href="#!" className="h-close-text"><i className="feather icon-chevrons-right"></i></a>
                                <div className="main-friend-cont scroll-div">
                                    <div className="main-friend-list">
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image "/>
                                                <div className="live-status">3</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-4.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image "/>
                                                <div className="live-status">3</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-4.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image "/>
                                                <div className="live-status">3</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-4.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image "/>
                                                <div className="live-status">3</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="assets/images/user/avatar-4.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* <!-- [ chat user list ] end --> */}

                            {/* <!-- [ chat message ] start --> */}
                            <div className="header-chat">
                                <div className="h-list-header">
                                    <h6>Josephin Doe</h6>
                                    <a href="#!" className="h-back-user-list"><i className="feather icon-chevron-left"></i></a>
                                </div>
                                <div className="h-list-body">
                                    <div className="main-chat-cont scroll-div">
                                        <div className="main-friend-chat">
                                            <div className="media chat-messages">
                                                <a className="media-left photo-table" href="#!"><img className="media-object img-radius img-radius m-t-5" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/></a>
                                                <div className="media-body chat-menu-content">
                                                    <div className="">
                                                        <p className="chat-cont">hello Datta! Will you tell me something</p>
                                                        <p className="chat-cont">about yourself?</p>
                                                    </div>
                                                    <p className="chat-time">8:20 a.m.</p>
                                                </div>
                                            </div>
                                            <div className="media chat-messages">
                                                <div className="media-body chat-menu-reply">
                                                    <div className="">
                                                        <p className="chat-cont">Ohh! very nice</p>
                                                    </div>
                                                    <p className="chat-time">8:22 a.m.</p>
                                                </div>
                                            </div>
                                            <div className="media chat-messages">
                                                <a className="media-left photo-table" href="#!"><img className="media-object img-radius img-radius m-t-5" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/></a>
                                                <div className="media-body chat-menu-content">
                                                    <div className="">
                                                        <p className="chat-cont">can you help me?</p>
                                                    </div>
                                                    <p className="chat-time">8:20 a.m.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-list-footer">
                                    <div className="input-group">
                                        <input type="file" className="chat-attach" className="displayNoneStyle" />
                                        <a href="#!" className="input-group-prepend btn btn-success btn-attach">
                                            <i className="feather icon-paperclip"></i>
                                        </a>
                                        <input type="text" name="h-chat-text" className="form-control h-send-chat" placeholder="Write hear . . "/>
                                        <button type="submit" className="input-group-append btn-send btn btn-primary">
                                            <i className="feather icon-message-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- [ chat message ] end --> */}
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </Form>
    </TeacherLayout>
    )
}