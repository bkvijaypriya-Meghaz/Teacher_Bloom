import React from 'react'
import { useState, useEffect } from 'react';
import {getInfo} from '../services/GenricService';
import {TOPICS_URL} from '../components/ConstFile';
export default function View(props)  {
    //console.log("************ Props in view component is : ",props.heading)
    //Todo : call api and display the values
    const [curriculumList, setCurriculumList] = useState(0);
    const[topicList,setTopicList]=useState([])
    useEffect(() => {
        //Todo : we have to assign refresh(sessionid) to dynamic URL - url ends by appending props.heading
        //Todo : Need to discuss about caching the values and on section selection how to pass the props to useEffect
        console.log("Topic : section id : ",props.refresh)
        getInfo(`${TOPICS_URL}/topics`).then((data) => {
            //console.log('curriculum data for heading [',props.heading,'] is : ',data);
            setCurriculumList(data);
            setTopicList(data.topics);
        })
    }, [props.heading])
    return(
        <div className="tab-content nopadding" style={{width: '940px'}}     id="myTabContent">
            <div className="tab-pane fade show active" id="topics" role="tabpanel" aria-labelledby="topics-tab">
                <div className="table-responsive">
                    <table className="table table-hover dashcurrentass dashtopic">
                        <tbody>
                            {
                                topicList.map((topicItem) =>(
                                    <tr className="unread">
                                        <td><a href=""><img src="assets/images/lesson/energy.png"/></a></td>
                                        <td>
                                            <a href="" style={{color:'#888'}}><h6 className="mb-1">{topicItem.name}</h6>
                                            <p className="m-0 f-12">Classifying Matter</p></a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}