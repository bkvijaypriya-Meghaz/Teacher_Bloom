import React from 'react'

function FeedbackGradePostAssessment(props){
    return(
        <div>
		<div >
			<div className="modal-content">				
				<div className="modal-body">
					<div className="">
						<div className="form-group">
						<textarea className="form-control" placeholder="Enter your Comment..."></textarea>
						</div>						
					</div>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" data-dismiss="modal">Clear</button>
					<button type="button" className="btn btn-primary">Comment</button>
				</div>
			</div>
		</div>
	</div>
    )
}
export default FeedbackGradePostAssessment;