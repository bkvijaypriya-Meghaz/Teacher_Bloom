import React from 'react'

import NavAndView from '../../../components/nav-and-view/NavAndView';
import ClozeIngInOnScience from './clozing';
import ConceptAttainmentQuiz from './concept_attainment';

const INTERVENTION = (props) => {

    const viewsList = [
        { name: "CLOZE-ING IN ON SCIENCE", id: "ClozeIngInOnScience" },
        { name: "CONCEPT ATTAINMENT QUIZ", id: "ConceptAttainmentQuiz" }
    ];

    const views = {
        "ClozeIngInOnScience": <ClozeIngInOnScience/>,
        "ConceptAttainmentQuiz": <ConceptAttainmentQuiz />
    };
    
    return(
        <NavAndView
            viewsList={viewsList}
            views={views}
            initialView = {"ClozeIngInOnScience"}
            cssClasses={{
                activeClass: "level2Active",
                inactiveClass: "level2Inactive"
            }}
        />
    );
}

export default INTERVENTION;