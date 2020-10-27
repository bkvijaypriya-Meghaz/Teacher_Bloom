import React from 'react'

import NavAndView from '../../../components/nav-and-view/NavAndView';
import ScienceArt from './science_art';
import ScienceApplied from './science_applied';
import ProjectBasedLearning from './pb_learning';

const ACCELERATION = (props) => {

    const viewsList = [
        { name: "SCIENCE APPLIED", id: "ScienceApplied" },
        { name: "SCIENCE ART", id: "ScienceArt" },
        { name: "PROJECT BASED LEARNING", id: "ProjectBasedLearning" }
    ];

    const views = {
        "ScienceApplied":<ScienceApplied />,
        "ScienceArt": <ScienceArt />,
        "ProjectBasedLearning": <ProjectBasedLearning/>
    };
    
    return(
        <NavAndView
            viewsList={viewsList}
            views={views}
            initialView = {"ScienceApplied"}
            cssClasses={{
                activeClass: "level2Active",
                inactiveClass: "level2Inactive"
            }}
        />
    );
}

export default ACCELERATION;