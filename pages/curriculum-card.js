import React from 'react'
import { FiLock } from 'react-icons/fi'
import {useState, useEffect} from 'react'

export default function CurriculumCard({ title, grade, icon,status }) {

    const [lockFlag, setLockFlag] = useState(false)

    useEffect(() => {
        // Todo: Need to change this lockFlag in future depends on the values and its functionality
        if(title=="4.7C Energy"){
            setLockFlag(true)
        }
    }, [])
    return (
        
        // disablecursoronly
            <div className="card rides-bar ">
                <div className="card-block">
                    <div className="row d-flex align-items-center">
                        <div className="col-auto">
                            <i className= {icon}></i>
                        </div>
                        {
                            // Todo: Need to change this lockFlag in future depends on the values and its functionality
                            lockFlag===false ? 
                            <>
                                <div className="col">
                                    <h3 className="f-w-300 curricumhead">{title}</h3>
                                    <h6 className="fourthgrade">{grade}</h6>
                                </div>
                                <div className="col-auto text-right">
                                    <i className="feather icon-lock f-20 lockicon"><FiLock/></i>
                                </div> 
                                <div className="curricumnotavail" style = {{visibility: status }}>not available in preview</div> 
                            </>
                                : 
                                <>
                                    <div className="col">
                                        <h3 className="f-w-300 curricumhead">{title}</h3>
                                        <h6 className="fourthgrade"><a href="topicContent">{grade}</a></h6>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        
    )
}


