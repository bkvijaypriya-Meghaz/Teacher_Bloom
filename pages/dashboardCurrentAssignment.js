import React from 'react'
import { useState, useEffect } from 'react';
import {getInfo} from '../services/GenricService';
import {CURRENT_RESPONSE} from '../components/ConstFile';
import {FiCalendar, FiCheck} from 'react-icons/fi';
//import {FiSearch, FiBook} from 'react-icons/fi';

function dashboardCurrentAssignment(props) {

    const [responseList,setResponseList] = useState(0);
    const[assigmentList,setAssignmentList]=useState([]);
    const[progressList,setProgressList]=useState([]);
    useEffect(() => {
          //Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("dashboardCurrentAssignment :section id",props.refresh)
        getInfo(`${CURRENT_RESPONSE}/2342342/assignments/current`).then((data) => {
            console.log('RESPONSE data is : ',data);
            setResponseList(data);
            setAssignmentList(data.assignments)
            
            let temp=[];
            console.log("refreshed",props.refresh)
            data.assignments.map((progressitem,i)=>{
            temp[i] = "{{width:"+`"${progressitem.progress}%"`+"}}"
             progressitem.progress = progressitem.progress+"%"
                
            })
            setAssignmentList(data.assignments)
            setProgressList(temp)
            
            
            
            

        })
    }, [props.refresh])

    
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
                               //Todo : Need to check for the icon depends on the item
                            //    var compValue = ""
                            //    if(i==0)
                            //     compValue="<FiCheck/>"
                            //    if (i==1)
                            //     compValue="<FiSearch/>"
                            //     if(i==2)
                            //         compValue="<FiBook/>"
                           return(    

                            <tr className="unread">
                                <td>
                           <h6 className="mb-1">{assignmentitem.name}</h6>
                                    <p className="m-0 f-12"><i className="feather icon-check currassicon">
                                            {/* {{compValue}} */} <FiCheck/>
                                        </i> {assignmentitem.subtitle}</p>
                                </td> 
                                <td className="text-right">{assignmentitem.dueDate} <i className="feather icon-calendar"><FiCalendar className="icon-calendar"/></i>
                                    <div className="progress progressdiv progressStyle progressdivStyle">
                                    <div className="progress-bar progress-barStyle" role="progressbar" style={{'width':assignmentitem.progress}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{assignmentitem.progress} </div>
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