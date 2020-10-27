import React from 'react'

import NavAndView from '../../../components/nav-and-view/NavAndView';
import AnswerKey from './answer_key';
import BundleSummary from './bundle_summary';
import Home from './home';
import MaterialList from './material_list';
import PreAssessment from './pre_assessment';
import StandardsCorrelation from './standards_correlation';
import StandardsUnwrapped from './standards_unwrapped';
import TeacherBackground from './teacher_background';

const ESSENTIALS = (props) => {

    const viewsList = [
        { name: "Home", id: "Home" },
        { name: "AnswerKey", id: "AnswerKey" },
        { name: "BundleSummary", id: "BundleSummary" },
        { name: "MaterialList", id: "MaterialList" },
        { name: "PreAssessment", id: "PreAssessment" },
        { name: "StandardsCorrelation", id: "StandardsCorrelation" },
        { name: "StandardsUnwrapped", id: "StandardsUnwrapped" },
        { name: "TeacherBackground", id: "TeacherBackground" }
    ];

    const views = {
        "Home": <Home/>,
        "AnswerKey": <AnswerKey/>,
        "BundleSummary": <BundleSummary/>,
        "MaterialList": <MaterialList/>,
        "PreAssessment": <PreAssessment/>,
        "StandardsCorrelation": <StandardsCorrelation/>,
        "StandardsUnwrapped": <StandardsUnwrapped/>,
        "TeacherBackground": <TeacherBackground/>
    };
    
    return(
        <NavAndView
            viewsList={viewsList}
            views={views}
            initialView = {"Home"}
            cssClasses={{
                activeClass: "level2Active",
                inactiveClass: "level2Inactive"
            }}
        />
    );
}

export default ESSENTIALS;