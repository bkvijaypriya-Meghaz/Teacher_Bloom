import React , { useState } from 'react'
import Modal from  '../modal/Modal';
import AssessmentAssign from './AssessmentAssign'


function CreateAssessmentAssign(props){
    const [assessmentAssignScreen1Visibility, setAssessmentAssignScreen1Visibility] = useState(false);   
    const showAssessmentAssignModal1 = () => {
	setAssessmentAssignScreen1Visibility(true);
    };
    const hideAssessmentAssignModal1 = () => {	
	setAssessmentAssignScreen1Visibility(false);
    };
    return(
        <React.Fragment>
        <Modal
        isOpen={assessmentAssignScreen1Visibility}
        hideModal={hideAssessmentAssignModal1}
         modalTitle=  "Assign Assessment :: Human Body Practice Test" 
        >
          <AssessmentAssign hideModal={hideAssessmentAssignModal1}/> 
        </Modal>
        <div >
		<div className="modal-content">			
			<div className="modal-body">
				<p>Do you want to assign the assessment now?</p>
			</div>
			<div className="modal-footer">
				<a href="assessments"><button type="button" className="btn btn-secondary">No, I will do it later</button></a>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#assignpopup" onClick={showAssessmentAssignModal1}>Yes</button>
			</div>
		</div>
	</div>
    </React.Fragment>
    )}
export default CreateAssessmentAssign