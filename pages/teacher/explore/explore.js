import React from 'react'

import NavAndView from '../../../components/nav-and-view/NavAndView';
import TeacherGuide from './teacher_guide';
import StudentMaterial from './student_material';

const EXPLORE = (props) => {

    const viewsList = [
        { name: "Teacher Guide", id: "TeacherGuide" },
        { name: "Student Material", id: "StudentMaterial" }
    ];

    const views = {
        "TeacherGuide": <TeacherGuide/>,
        "StudentMaterial": <StudentMaterial/>
    };
    
    return(
        <NavAndView
            viewsList={viewsList}
            views={views}
            initialView = {"TeacherGuide"}
            cssClasses={{
                activeClass: "level2Active",
                inactiveClass: "level2Inactive"
            }}
        />
    );
}

export default EXPLORE;