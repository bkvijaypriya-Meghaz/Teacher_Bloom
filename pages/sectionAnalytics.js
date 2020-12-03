import React from 'react'
import AverageTimeSpentAssignment from './averageTimeSpentAssignment'
import AverageTimeSpentAssessment from './averageTimeSpentAssessment'
import StudentMissingAssignment from './studentMissingAssignment';
import PeriodTwoClassAverageGrade from './periodTwoClassAverageGrade';
import SectionClassAverageVs from './sectionClassAverageVs';
import TeacherLayout from '../layout/TeacherLayout';

function sectionAnalytics(props) {
    return (
        <TeacherLayout {...props}>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                         <div className="pcoded-inner-content">
                            {/*[ breadcrumb ] start */}
                                {/*[ breadcrumb ] end */}
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            {/*[ Main Content ] start */}
                                            <div className="row">
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12">  
                                                   <AverageTimeSpentAssignment />
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12">
                                                  <AverageTimeSpentAssessment/>
                                                </div>
                                                <div class="col-xl-4 col-md-12 col-sm-12 col-xs-12">
                                                  <StudentMissingAssignment/>
                                                </div>
                                                <div class="col-xl-4 col-md-4 col-sm-6 col-xs-12">
                                                  <PeriodTwoClassAverageGrade/>
                                                </div>
                                                <div class="col-xl-8 col-md-8 col-sm-12 col-xs-12">
                                                  <SectionClassAverageVs/>
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

export default sectionAnalytics
