import React from 'react'

import NavAndView from '../../../components/nav-and-view/NavAndView';
import QuestionPrompts from './question_prompts'
import ProgressMonitoringAssessment from './progress_monitoring'
import Encyclopedia from './encylopedia'
import PictureVocabulary from './picture_vocabulary'


const EXPLAIN = (props) => {

    const viewsList = [
        { name: "QUESTION PROMPTS", id: "QuestionPrompts" },
        { name: "PROGRESS MONITORING ASSESSMENT", id: "ProgressMonitoringAssessment" },
        { name: "ENCYCLOPEDIA", id: "Encyclopedia" },
        { name: "PICTURE VOCABULARY", id: "PictureVocabulary" },
        { name: "SCIENCE ROCK", id: "ScienceRock" }
    ];

    const views = {
        "QuestionPrompts":  <QuestionPrompts/>,
        "ProgressMonitoringAssessment": <ProgressMonitoringAssessment/>,
        "Encyclopedia": <Encyclopedia/>,
        "PictureVocabulary": <PictureVocabulary/>,
        "ScienceRock": <div class="tab-pane fade" id="pills-Scope" role="tabpanel" aria-labelledby="pills-Scope-tab"></div>
    };
    
    return(
        <NavAndView
            viewsList={viewsList}
            views={views}
            initialView = {"QuestionPrompts"}
            cssClasses={{
                activeClass: "level2Active",
                inactiveClass: "level2Inactive"
            }}
        />
    );
}

export default EXPLAIN;