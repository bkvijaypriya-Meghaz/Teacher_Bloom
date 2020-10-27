import React from 'react'

import NavAndView from '../../../components/nav-and-view/NavAndView';
import Starters from './starters';
import TeacherInstructions from './teacher_instructions';

const ENGAGE = (props) => {

    const viewsList = [
        { name: "Starters", id: "Starters" },
        { name: "TeacherInstructions", id: "TeacherInstructions" }
    ];

    const views = {
        "Starters": <Starters/>,
        "TeacherInstructions": <TeacherInstructions/>
    };
    
    return(
        <NavAndView
            viewsList={viewsList}
            views={views}
            initialView = {"Starters"}
            cssClasses={{
                activeClass: "level2Active",
                inactiveClass: "level2Inactive"
            }}
        />
    );
}

export default ENGAGE;