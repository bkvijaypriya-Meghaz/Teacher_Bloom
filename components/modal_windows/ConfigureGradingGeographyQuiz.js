import React  from 'react'

function ConfigureGradingGeographyQuiz(props){
  
    return(      
        <div>
		<div>
			<div className="modal-content">				
				<div className="modal-body">
					<div className="">
						<div className="row">
							<div className="col-md-6 col-sm-12 col-xs-12 m-t-10">
								<div className="form-group d-inline">
									<div className="radio radio-primary d-inline">
										<input type="radio" name="perpoint" id="pointype1"/>
										<label for="pointype1" className="cr">Percentage</label>
									</div>
								</div>
								<div className="form-group d-inline">
										<div className="radio radio-primary d-inline">
											<input type="radio" name="perpoint" id="pointype2" checked/>
											<label for="pointype2" className="cr">Points</label>
										</div>
									</div>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<div className="form-group">
									<input type="text" className="form-control" id="" placeholder="Total Points"/>
								</div>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12 m-t-10">
								<div className="form-group d-inline">
									<div className="radio radio-primary d-inline">
										<input type="radio" name="divide" id="dividetype1" checked/>
										<label for="dividetype1" className="cr">Distribute Weight Evenly</label>
									</div>
								</div>
								<div className="form-group d-inline">
										<div className="radio radio-primary d-inline">
											<input type="radio" name="divide" id="dividetype2"/>
											<label for="dividetype2" className="cr">Custom Weight</label>
										</div>
									</div>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
								<div className="form-group">
									<label>Points Left</label>
									<input type="text" className="form-control" id="" placeholder="Total Points"/>
								</div>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
									<label>Question 1 : Students push three wapons awa...</label>
								<div className="input-group">
									<input type="text" className="form-control btn-sm" id="" value="50"/>
									<div className="input-group-append">
										<span className="input-group-text" id="basic-addon2">Pts</span>
									</div>
								</div>
								
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12">
									<label>Question 2 : The teacher threw a paper airplane...</label>
								<div className="input-group">
									<input type="text" className="form-control btn-sm" id="" value="50"/>
									<div className="input-group-append">
										<span className="input-group-text" id="basic-addon2">Pts</span>
									</div>
								</div>								
							</div>
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-primary">Apply</button>
					<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.hideModal}>Close</button>
				</div>
			</div>
		</div>
	</div>
    )
}
export default ConfigureGradingGeographyQuiz;