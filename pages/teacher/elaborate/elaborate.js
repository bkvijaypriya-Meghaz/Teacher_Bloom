import React from 'react'

import NavAndView from '../../../components/nav-and-view/NavAndView';
import BooksOnTopic from './books_on_topic';
import NextStepInquiry from './nextstep_inquiry';
import Extensions from './extensions';
import ReadingScienceA from './reading_scienceA';
import MathConnections from './math_connection'
import EngineeringConnections from './engineering_connections';

const ELABORATE = (props) => {

    const viewsList = [
        { name: "NEXT STEP INQUIRY", id: "NextStepInquiry" },
        { name: "EXTENSIONS", id: "Extensions" },
        { name: "READING SCIENCE A", id: "ReadingScienceA" },
        { name: "BOOKS ON TOPIC", id: "BooksOnTopic" },
        { name: "MATH CONNECTIONS A", id: "MathConnections" },
        { name: "ENGINEERING CONNECTIONS", id: "EngineeringConnections" },
    ];

    const views = {
        "NextStepInquiry": <NextStepInquiry />,
        "Extensions": <Extensions />,
        "ReadingScienceA": <ReadingScienceA />,
        "BooksOnTopic": <BooksOnTopic />,
        "MathConnections": <MathConnections />,
        "EngineeringConnections": <EngineeringConnections />
    };
    
    return(
        <NavAndView
            viewsList={viewsList}
            views={views}
            initialView = {"NextStepInquiry"}
            cssClasses={{
                activeClass: "level2Active",
                inactiveClass: "level2Inactive"
            }}
        />
    );
}

export default ELABORATE;