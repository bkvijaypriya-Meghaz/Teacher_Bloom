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
        <div className="card-block px-0 py-0">
            <div className="dashcurrbtn">
                <a href="curriculum">
                    <button className="btn">Curriculum</button>
                </a>
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