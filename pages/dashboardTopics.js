import React from 'react'
import TopicsAndView from '../components/nav-and-view/TopicsAndView'
import View from './View'

export default function Topics(props)  {

    const viewsList = [
        { name: "Class Topics", id: "topics" },
        { name: "Recent", id: "recent" },
        { name: "Upcoming", id: "upcoming" },
        { name: "Bookmarks", id: "bookmarks" },
    ];

    const views = {
        "topics": <View heading='topics' />,
        "recent": <View heading='recent' />,
        "upcoming": <View heading='upcoming' />,
        "bookmarks": <View heading='bookmarks' />,
    };
    return(
        <div className="Recent-Users dashfirstrowheight">
            <div className="dashcurrbtn">
                <div className="btn"><a href="curriculum">Curriculum</a></div>
            </div>
            <TopicsAndView
                viewsList={viewsList}
                views={views}
                initialView = {"topics"}
                cssClasses={{
                    activeClass: "level2Active",
                    inactiveClass: "level2Inactive"
                }}
            />
        </div>
    )
}