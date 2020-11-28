import React,{useState} from 'react';
import ReactDom from 'react-dom';
import { useForm } from "react-hook-form";
import Modal from '../components/modal/Modal';
import ConfigureGradingModel from '../components/modal_windows/ConfigureGradingModal';



function lessonPlannerForm() {

    const { register, handleSubmit,errors } = useForm();

	const onSubmit = data => console.log(data);

	const [configureGradeScreen1Visibility, setConfigureGradeScreen1Visibility] = useState(false);
	
    const showConfigureGradeModal1 = () => {
	    setConfigureGradeScreen1Visibility(true);
     };

     const hideconfiureGradeModal1 = () => {
	    setConfigureGradeScreen1Visibility(false);
	};

	

	



    return (

		
        <div>

           <Modal
             	isOpen={configureGradeScreen1Visibility}
		   		hideModal={hideconfiureGradeModal1}
				   modalTitle= " ">
                <ConfigureGradingModel hideModal={hideconfiureGradeModal1}/> 
          </Modal>

            <div className="card Recent-Users lphide" id="step3" style={{display: 'block'}}>
		        <div className="card-header" style={{    padding:' 10px 25px'}}>
			        <h5>Lesson Planner</h5>
			    </div>
		        <div className="card-block">
		            <form onSubmit={handleSubmit(onSubmit)}>
		                <div className="publishform">
			                <h6>Edit Asignment</h6>
			                <div className="lessonfielddiv">
				                <label>Assignment Name</label>
				                <input type="text" className="form-control" name='AssignmentName' ref={register({required:true})}/>
                                {errors.AssignmentName && "Assignment name is required"}
			                </div>
			                <div className="lessonfielddiv">
				                <label>Start Date</label>
				                <input type="date" className="form-control" required="" id="sdate"  name='StartDate' ref={register({required:true})}/>
                                {errors.StartDate && "Start Date is required"}
				                <div className="errordiv" id="errorsdate">
                                </div>
			                </div>
			                <div className="lessonfielddiv">
				                <label>End Date</label>
				                <input type="date" className="form-control" required="" id="edate" name='EndDate' ref={register({required:true})}/>
                                {errors.EndDate && "End Date is required"}
				                <div className="errordiv" id="erroredate">
                                </div>
			                </div>
			                <div className="lessonfielddiv">
				                <label>Is this an assignment or resource? </label>
				                <div className="form-group d-inline">
					                <div className="radio radio-primary d-inline">
						                <input type="radio" name="assignment" id="assradio1"  value="Assignment" ref={register}/>
                                        
						                <label for="assradio1" className="cr">Assignment</label>
					                </div>
				                </div>
				                <div className="form-group d-inline">
					                <div className="radio radio-primary d-inline">
						                <input type="radio" name="resource" id="assradio2" value="Resource" ref={register}/>
						                <label for="assradio2" className="cr">Resource</label>
					                </div>
				                </div>
			                </div>
		                </div>
		                <div className="addlppublishbtn" style={{    marginTop: '21px'}}>
                            <input  onClick={showConfigureGradeModal1} type="button"  type='submit' className="btn btn-success btn-sm btn-rounded" value="Publish" id="asspublish"/>
                         
                        </div>
		            </form>
	            </div>
	        </div>
        </div>
    )
}

export default lessonPlannerForm
