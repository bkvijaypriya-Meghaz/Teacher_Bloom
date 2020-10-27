import React, { useState } from 'react'
import Nav from './Nav'

 const NavAndView = (props)=>{
    console.log("props \n",props);

    const [ currentView, setCurrentView] = useState(props.initialView)
     const changeView = (id)=>{
         setCurrentView(id.toString());
     }

    // console.log("type of props.views --> ", typeof props.views);
    // console.log("type of props.viewsList --> ", typeof props.viewsList);
    const views = props.views

    return (
        <div>
            <div className="card-block"> 
                <div className={ (props.cssClasses.activeClass==="level2Active" ? " nav nav-pills mb-3" : "nav nav-tabs")} id="myTab" role="tablist">
                    <Nav 
                        key="id"
                        views={props.viewsList}
                        changeView={changeView}
                        cssClasses={props.cssClasses}
                    />
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <hr />
                <div className="card-block">                                            
                 <div className="tab-content essentialspanel" id="pills-tabContent">   
                 <ul className="nav nav-tabs" id="myTab" role="tablist">
                {views[currentView]}
                </ul>
                </div>
                 </div> 
                </div>
            
        </div>
    )
}

export default NavAndView
