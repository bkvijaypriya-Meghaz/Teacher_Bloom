import React from 'react'

function GradeAndComment(props){

    return(
        <div>
		<div>
			<div className="modal-content">
				
				<div className="modal-body">
					<div className="questionlabel">
						<div className="form-group">
						<label for="">Question #9 :</label>
						<p>Why is the sky blue and not red, or orange?</p>
						</div>
						<div className="form-group">
						<label for="">Student Answer :</label>
						<p className="orangecolor">Because of the way the light refracts of the flat earth's dome.</p>
						</div>
						<div className="form-group">
						<label for="">Correct Answer :</label>
						<p className="greencolor">Gases and particles in Earth's atmosphere scatter sunlight in all directions. <b>Blue</b> light is scattered more than other colors because it travels as shorter, smaller waves. This is why we see a <b>blue sky</b> most of the time. </p>
						</div>
						<div className="form-group">
						<textarea className="form-control"></textarea>
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-primary">Submit Comment</button>
					<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.hideModal}>Close</button>
				</div>
			</div>
		</div>
	</div>
    )
}
export default GradeAndComment;