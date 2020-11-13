import React from 'react'

export default function CurriculumCard({ title, grade, icon,status }) {
    return (
        
            <div className="card rides-bar disablecursoronly">
                <div className="card-block">
                    <div className="row d-flex align-items-center">
                        <div className="col-auto">
                            <i className= {icon}></i>
                        </div>
                        <div className="col">
                            <h3 className="f-w-300 curricumhead">{title}</h3>
                            <h6 className="fourthgrade">{grade}</h6>
                        </div>
                        <div className="col-auto text-right">
                            <i className="feather icon-lock f-20 lockicon"></i>
                        </div>
                        <div className="curricumnotavail" style = {{visibility: status }}>not available in preview</div>
                    </div>
                </div>
            </div>
        
    )
}


