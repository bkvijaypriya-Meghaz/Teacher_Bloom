import React from 'react'

import NavAndView from '../../../components/nav-and-view/NavAndView';
import PostAssessment from './post_assessment';
import OpenEndedResponseAssessment from './openended_response';
import ConceptBuilder from './concept_builder';
import WritingScience from './writing_science';
import ClaimEvidenceReasoning from './claim_evidence'; 

const EVALUATE = (props) => {

    const viewsList = [
        { name: "POST-ASSESSMENT", id: "PostAssessment" },
        { name: "OPEN ENDED RESPONSE ASSESSMENT", id: "OpenEndedResponseAssessment" },
        { name: "CONCEPT BUILDER", id: "ConceptBuilder" },
        { name: "WRITING SCIENCE", id: "WritingScience" },
        { name: "CLAIM-EVIDENCE REASONING", id: "ClaimEvidenceReasoning" },
    ];

    const views = {
        "PostAssessment": <PostAssessment/>,
        "OpenEndedResponseAssessment": <OpenEndedResponseAssessment/>,
        "ConceptBuilder": <ConceptBuilder />,
        "WritingScience": <WritingScience/>,
        "ClaimEvidenceReasoning": <ClaimEvidenceReasoning/>
    };
    
    return(
        <NavAndView
            viewsList={viewsList}
            views={views}
            initialView = {"PostAssessment"}
            cssClasses={{
                activeClass: "level2Active",
                inactiveClass: "level2Inactive"
            }}
        />
    );
}

export default EVALUATE;