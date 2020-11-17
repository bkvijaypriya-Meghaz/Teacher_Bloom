
import React from 'react'
import { useState, useEffect } from 'react';
import {getInfo} from '../services/GenricService';
import {STUDENT_ACTIVITY} from '../components/ConstFile';

export function StudentActivity(props)  {

    const [stuActivityList, setstuActivityList] = useState(0);
    const[activityList,setActivityList]=useState([])
    useEffect(() => {
        //Todo : we have to assign refresh(sessionid) to dynamic URL
        console.log("STUDENT_ACTIVITY:section id",props.refresh)
        getInfo(`${STUDENT_ACTIVITY}/2342344/5675677/activity`).then((data) => {
            console.log('bloom data is : ',data);
            setstuActivityList(data);
            setActivityList(data.activities)

        })
    }, [props.refresh])
  
//     {items && items.map(item => {
//         return <div key={item.id}>{item.title}</div>;
//       })}
//   </div>
    return  (
        <div className="card-block px-0 py-3">
           <div className="table-responsive">
                     <table className="table table-hover">
                    <tbody>

             {activityList && activityList.map((activity)=>{
            return (
                          
                       
                        <tr className="unread">
                            <td>
                                <img className="rounded-circle rounded-circleStyle"  src="../assets/images/user/avatar-2.jpg" alt="activity-user"/>
                            </td>
                            <td>
                                <h6 className="mb-1">{activity.name}</h6>
                                <p className="m-0">{activity.type}</p>
                            </td>
                            <td>
                                <h6 className="text-muted">{activity.section}</h6>
                            </td>
                            <td>
                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>{activity.activityDate}</h6>
                            </td>
                            <td><a href="#!" className="label theme-bg2 text-white f-12">Clear</a><a href="#!" className="label theme-bg text-white f-12">View</a>
                            </td>
                        </tr>
                       
        
        
            ) } )
}
                    </tbody>
                </table>
            </div>
                    
     </div>             
    )   ; 
}
export default StudentActivity