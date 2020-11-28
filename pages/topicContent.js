import TeacherLayout from '../layout/TeacherLayout';
import EnergyLessonPlan from './topicEnergyLessonplan';
import React from 'react'
import TopicNavBar from './TopicNavBar';
import {useState} from 'react'
import TopicDisplayCard from './topicDisplayCard'

function energy_lessonplancall(props) {
    //Todo : Get a main API call and seperate the 5E and BA list and send as props
    const essentialsList = [
        "Home",
        "Bundle Summary",
        "Teacher Background",
        "Material List",
        "Standards Correlation",
        "Answer Keys",
        "Standards Unwrapped",
        "Pre-Assessment"
    ]
    const engageList =[
        "Engage Teacher Instrution",
        "Starters"
    ]
    const exploreList =[
        "Teacher Guide - Forms of Energy",
        "Setup Video",
        "Student Materials - Forms of Energy"
    ]
    const explainList =[
        "Question Prompts",
        "Progress Monitoring Assessment",
        "Encyclopedia",
        "Picture Vocabulary",
        "Science Rock"
    ]
    const elaborateList =[
        "Next Step Inquiry",
        "Extensions",
        "Reading Science A",
        "Books on Topic",
        "Math Connections A",
        "Engineering Connections"
    ]
    const evaluateList =[
        "Post-Assessment",
        "Open Ended Response Assessment",
        "Concept Builder",
        "Writing Science",
        "Claim Evidence Reasoning"
    ]
    const boostList =[
        "CLOZE-ing in on Science",
        "Concept Attainment Quiz"
    ]
    const advancementList =[
        "Science Applied",
        "Science Art",
        "Project Based Learning"
    ]

    var navBarList;
        //Can be created dynamically too... in furture. This is only for 5E and BA, here we have 6 E's  
        var navBarList = [
            {   
                // id:'essentials',
                "essentials":{essentialsList}
            },
            {
                "engage":{engageList}
            },
            {
                "explore":{exploreList}
            },
            {
                "explain":{explainList}
            },
            {
                "elaborate":{elaborateList}
            },
            {
                "evaluate":{evaluateList}
            },
            {
                "boost":{boostList}
            },
            {
                "advancement":{advancementList}
            }
        ]

        const [displayCurriculumPane, setDisplayCurriculumPane] = useState(true)
        const [displayContentPane, setDisplayContentPane] = useState(true)
        // const displayCurriculumContent = (flag) => {
        //     console.log("display curriculum : ",flag)
        //     setDisplayTopicPane(flag);
        //     setDisplayTopicContent(!flag);
        // };
        
        // const displayTopicContentPage = (flag) => {
        //     console.log("display content : ",flag)
        //     setDisplayTopicContent(flag);
        //     setDisplayTopicPane(!flag);
        // };
    return (
        <TeacherLayout {...props}>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            <div className="row">
                                <div className="col-xl-12 col-md-12 lessonplan_detail">
                                    <div className="card">
                                        <div className="row card-rowStyle">
                                            <div className="col-xl-7 col-md-7 col-sm-12 col-xs-12">
                                                <div className="card-header card-headerStyle">
                                                    <h5>Lesson Plan Detail : Energy</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-md-5 col-sm-12 col-xs-12">
                                                <div className="headrytbtn">
                                                    <a href="https://meet.google.com/eyv-euaa-ixh" target="_blank"><button type="button" className="btn btn-success"><i className="feather icon-play"></i>Start Virtual Classroom</button></a>
                                                </div>
                                            </div>
                                        </div>										
                                        <div className="card-block">
                                            {/* <div className="btn-group mb-2 mr-2">
                                                {/* To do : Need to display the selected topic heading here instead of Plan */}
                                                {/* <a href="topicContent"><button className="btn btn-sm btn-secondary" onClick="{displayContent}">Plan</button> </a>
                                            </div>  */}
                                            <div className="btn-group mb-2 mr-2">
                                                <TopicNavBar navBarList = {navBarList}
                                               displayCurriculum = {setDisplayCurriculumPane} 
                                               displayContentPage = {setDisplayContentPane} 
                                               selectedCurriculumTopic="energy"/>
                                            </div>
                                            {(displayCurriculumPane) ? <EnergyLessonPlan/> : <TopicDisplayCard/>}
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

export default energy_lessonplancall
