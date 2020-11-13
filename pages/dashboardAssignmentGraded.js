import React from 'react'
import { useState, useEffect } from 'react';
import {getInfo} from '../services/GenricService';
import {ASSIGNMENT_TO_BE_GRADED} from '../components/ConstFile';
function assignmentGraded(){
    const [assignment, setAssignment] = useState(0);
    const[assignmentList,setAssignmentList]=useState([])
    useEffect(() => { getInfo(ASSIGNMENT_TO_BE_GRADED).then((data) => {
        console.log('bloom data is : ',data);
        setAssignment(data);
        setAssignmentList(data.assignments)

    })
	}, [])
	return(
		<div>
		<div className="card Recent-Users dashfirstrowheight">
			<div className="card-header">
				<h5>Assignment to be Graded</h5>
				
			</div>
			<div className="card-block px-0 py-0">
				<div className="table-responsive">
					<table className="table table-hover dashcurrentass">
						<tbody>
						{
							assignmentList && assignmentList.map((response)=>{
								return(
									<tr className="unread">
									<td><h6 className="mb-1">{response.name}</h6></td>
									<td className="text-right">{response.dueDate}<i className="feather icon-calendar calendericon"></i></td>
								</tr>
								)
							}
							)
						}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		</div>
	)
}
export default  assignmentGraded