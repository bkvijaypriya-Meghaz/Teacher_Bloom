import React  from 'react'


function AssessmentDelete(props){

    

    
 return(

    <div>
	<div>
		<div className="modal-content">
			
			<div className="modal-body">
				<p>Are you sure you want to delete Human Body Practice Test?</p>
			</div>
			<div class="modal-footer">
				<button id="delete" type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.hideModal}>No</button>
				<button type="button" className="btn btn-primary">Yes</button>
			</div>
		</div>
	</div>
</div>
 )
}
export default AssessmentDelete;