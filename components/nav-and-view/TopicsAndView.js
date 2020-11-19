import React, { useState } from 'react'
import NavTopic from './NavTopic'

 const TopicsAndView = (props)=>{
    // console.log("props \n",props);
    // console.log("props in TopicsAndView : ",props.initialView)

    const [ currentView, setCurrentView] = useState(props.initialView)
     const changeView = (id)=>{
         setCurrentView(id.toString());
     }

    // console.log("type of props.views --> ", typeof props.views);
    // console.log("type of props.viewsList --> ", typeof props.viewsList);
    const views = props.views

    return (
        <>
            <ul class="nav nav-tabs dashtab" id="myTab" role="tablist">
                <NavTopic 
                    key="id"
                    views={props.viewsList}
                    changeView={changeView}
                    //cssClasses={props.cssClasses}
                />
            </ul>
            <ul className="nav nav-tabs dashtab" id="myTab" role="tablist">
                {views[currentView]}
            </ul>
        </>
    )
}

export default TopicsAndView
