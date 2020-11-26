import React from 'react'

 
function AssessmentAssign (props) {

	
    return (

 <div>
	<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
		<div className="modal-content">
			
			<div className="modal-body">
				<div className="row">
					<div className="col-md-6 col-sm-12 col-xs-12 m-b-20">
						<div className="form-group">
							<label for="">Sections to assign to</label>
							<select className="form-control">
								<option>Section 1</option>
								<option>Section 2</option>
							</select>
					  </div>
					</div>
					<div className="col-md-6 col-sm-12 col-xs-12 m-b-20">
					  <div className="form-group">
							<label for="">Assign To</label>
							<select className="form-control">
								<option value="Entire Section">Entire Section</option>
								<option value="Individual Students">Individual Students</option>
							</select>
					  </div>
					</div>
					
					
					<div className="col-md-6 col-sm-12 col-xs-12 m-b-20">
						<div className="form-group">
							<label for="">Start</label>
							<input type="date" class="form-control"/>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 col-xs-12 m-b-20">
						<div className="form-group">
							<label for="">Due</label>
							<input type="date" className="form-control"/>
						</div>
					</div>
					
					<div className="col-md-6 col-sm-12 col-xs-12">
						<div className="form-group">
							<div className="checkbox checkbox-primary checkbox-fill d-inline">
								<input type="checkbox" name="checkbox-p-fill-1" id="myCheckBox"/>
								<label for="myCheckBox" className="cr">Allow late submission</label>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 col-xs-12 m-b-20">
						<div className="form-group" id="allowdate" >
							<label for="">Late Submission Until</label>
							<input type="date" className="form-control"/>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 col-xs-12">
						<div className="form-group">
							<div className="checkbox checkbox-primary checkbox-fill d-inline">
								<input type="checkbox" name="checkbox-p-fill-2" id="checkbox-p-fill-2"/>
								<label for="checkbox-p-fill-2" className="cr">Immediately release assignment to student</label>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 col-xs-12">
						<div className="form-group">
							<div className="checkbox checkbox-primary checkbox-fill d-inline">
								<input type="checkbox" name="checkbox-p-fill-3" id="checkbox-p-fill-3"/>
								<label for="checkbox-p-fill-3" className="cr">Order questions randomly for each student</label>
							</div>
						</div>
					</div>
					
				  </div>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-primary">Assign</button>
			</div>
		</div>
	</div>
</div>

    )
}

export default AssessmentAssign