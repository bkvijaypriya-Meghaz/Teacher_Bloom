import React  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useForm} from "react-hook-form"
function AttendanceReport(props){
	console.log("attendance report");
	const{register,handleSubmit}=useForm();
	const createReport=(data)=>{
		console.log(data)
		// Todo : API implementation of report
		// saveInfo('URL').then(data=>{
		// 	console.log('data is not empty ********** ',data)
        //     console.log('returned from SaveInfo status::::', data.status)
           
        //     if(data && data.status == 200) {
        //         console.log('message from backend',data)
        //     } else if (data.status == 400){
        //         console.log('session invalid',data)
        //     }else{
        //         console.log('Report Creation Failed!!!')
        //     }
		//  }
		// );
		
	};

	{/* 
        const [attendanceReport, setAttendanceReport] = useState(0);
        const[attendanceReportList,setAttendanceReportList]=useState([])
    useEffect(() => { postInfo(`link`).then((data) => {
		//Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("name:studentName",props.refresh)
        console.log('bloom data is : ',data);
        getAttendanceReport(data);
        getAttendanceReportList(data.assessments);

    })
	}, [props.refresh])
*/}

    return(
		<Form onSubmit={handleSubmit(createReport)}>
	
		<div>
			<div className="modal-content">
				
					
				<div className="modal-body">
					<div className="">
						<div className="form-group">
							<Form.Label for="">From</Form.Label>
							<Form.Control ref={register({ required:"required" })} type="date" className="form-control fromtotxtbox" id="" name="fromDate" />
						</div>
						<div className="form-group">
							<Form.Label for="">To</Form.Label>
							<Form.Control ref={register({ required: true })} type="date" className="form-control fromtotxtbox" id="" name="toDate"/>
						</div>
						<div className="form-group m-t-30">
							<Form.Label for=""></Form.Label>
							<div className="form-group d-inline">
								<div className="radio radio-primary d-inline">
								 <Form.Control ref={register} type="radio" name="radio-p-fill-5" id="radio-p-fill-5" checked/> 
								<Form.Label for="radio-p-fill-5" className="cr">Async Time</Form.Label>
								</div>
							</div>
							<div className="form-group d-inline">
								<div className="radio radio-primary d-inline">
									<Form.Control ref={register} type="radio" name="radio-p-fill-5" id="radio-p-fill-6"/> 
									<Form.Label for="radio-p-fill-6" className="cr">Sync Time</Form.Label>
								</div>
							</div>
							<div className="form-group d-inline">
								<div className="radio radio-primary d-inline">
									 <Form.Control ref={register} type="radio" name="radio-p-fill-5" id="radio-p-fill-7"/> 
									<Form.Label for="radio-p-fill-7" className="cr">Both</Form.Label>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className="modal-footer">
					<Button type="submit" className="btn btn-primary">Generate Report</Button>
				</div>
			</div>
		</div>
	 

	</Form>


        )
				  }
export default AttendanceReport