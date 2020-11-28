import React,{useState} from 'react';
import Modal from '../modal/Modal';
import ConfigureGradingPointsModel from './configureGradingPointsModal'

function configureGradingModal(){

	const [configureGradePointVisibility, setConfigureGradePointVisibility] = useState(false);
	
    const showConfigureGradePointModal1 = () => {
	    setConfigureGradePointVisibility(true);
     };

     const hideconfiureGradePointModal1 = () => {
	    setConfigureGradePointVisibility(false);
	};

    return (
        <div>
               <Modal
             	isOpen={configureGradePointVisibility}
		   		hideModal={hideconfiureGradePointModal1}
				   modalTitle= " ">
                <ConfigureGradingPointsModel hideModal={hideconfiureGradePointModal1}/> 
          </Modal>
          

                    <div className="modal-content">
			           {/* <div className="modal-header">
				            <h5 className="modal-title" id="exampleModalCenterTitle"></h5>
				                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						</div>*/}
			            <div className="modal-body">
				            <p>Do you want to configure grading for this assignment?</p>
			            </div>
			             <div className="modal-footer">
				            <button type="button" className="btn btn-secondary" id="nolater">No, I will do it later</button>
				            <button onClick={showConfigureGradePointModal1} type="button" className="btn btn-primary" id="assignmentyes">Yes</button>
			            </div>
		           </div>
        </div>
    )
}

export default configureGradingModal
