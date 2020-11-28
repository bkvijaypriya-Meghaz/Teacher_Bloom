import React from 'react';
import LessonPlannerForm from './lessonPlannerForm';
import TopicDisplayLeftPane from './topicDisplayLeftPane';
import TopicDisplayMainPane from './topicDisplayMainPane'

 function topicDisplayLayout() {
    return (

        <div id="topicdisplaycard">
            <div className="row m-t-20 vst_tab">
                <div className="col-md-2 col-sm-12 planleftbar">
                  <TopicDisplayLeftPane/>
                </div>
                <div className="col-md-7 col-sm-12">
                  <TopicDisplayMainPane/>  
                </div>    
                <div className="col-md-3 col-sm-12 planrightbar">
                    <LessonPlannerForm/>
                </div>
            </div>
        </div>   
    );
   } 

   export default topicDisplayLayout