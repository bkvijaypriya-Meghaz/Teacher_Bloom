import React from 'react'
import { useState, useEffect } from 'react';
import {getInfo} from '../services/GenricService';
import {CURRENT_RESPONSE} from '../components/ConstFile';

function dashboardCurrentAssignment() {

    const [responseList,setResponseList] = useState(0);
    const[assigmentList,setAssignmentList]=useState([]);
    const[progressList,setProgressList]=useState([]);
    useEffect(() => {
        getInfo(CURRENT_RESPONSE).then((data) => {
            console.log('RESPONSE data is : ',data);
            setResponseList(data);
            setAssignmentList(data.assignments)
            
            let temp=[];

            data.assignments.map((progressitem,i)=>{
            temp[i] = "{{width:"+`"${progressitem.progress}%"`+"}}"
             progressitem.progress = progressitem.progress+"%"
                
            })
            setAssignmentList(data.assignments)
            setProgressList(temp)
            
            
            
            

        })
    }, [])

    
    return (

        
        
        <div>
            <div className="card Recent-Users dashfirstrowheight">
				 <div className="card-header">
					<h5>Current Assignment</h5>
				 </div>
				 <div className="card-block px-0 py-0">
					<div className="table-responsive">
					 <table className="table table-hover dashcurrentass">
						<tbody>
                        {
                           assigmentList && assigmentList.map((assignmentitem,i)=>{
                           return(    

                            <tr className="unread">
                                <td>
                           <h6 className="mb-1">{assignmentitem.name}</h6>
                                    <p className="m-0 f-12"><i className="feather icon-check currassicon"></i> {assignmentitem.subtitle}</p>
                                </td> 
                                <td className="text-right">{assignmentitem.dueDate} <i className="feather icon-calendar calendericon"></i>
                                    <div className="progress progressdiv">
                                    <div className="progress-bar" role="progressbar" style={{'width':assignmentitem.progress}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{assignmentitem.progress} </div>
                                    </div>
                                </td>
                            </tr>
                           )
                          })
                           
                        }
					    </tbody>
					</table>
				</div>
			</div>
		</div>
    </div>
    
    )
}

export default dashboardCurrentAssignment