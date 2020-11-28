import React from 'react'

export default function topicDisplayLeftPane() {
    return (
        <div>
            <ul className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <li><a className="nav-link text-left active" id="v-pills-Essentials-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-Essentials" aria-selected="true">Essentials</a></li>
                <li><a className="nav-link text-left" id="v-pills-Engage-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-Engage" aria-selected="false">Engage</a></li>
                <li><a className="nav-link text-left" id="v-pills-Explore-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-Explore" aria-selected="false">Explore</a></li>
                <li><a className="nav-link text-left" id="v-pills-Explain-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-Explain" aria-selected="false">Explain</a></li>
                <li><a className="nav-link text-left" id="v-pills-Elaborate-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-Elaborate" aria-selected="false">Elaborate</a></li>
                <li><a className="nav-link text-left" id="v-pills-Evaluate-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-Evaluate" aria-selected="false">Evaluate</a></li>
                <li><a className="nav-link text-left" id="v-pills-Intervention-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-Intervention" aria-selected="false">Intervention</a></li>
                <li><a className="nav-link text-left" id="v-pills-Acceleration-tab" data-toggle="pill" href="" role="tab" aria-controls="v-pills-Acceleration" aria-selected="false">Acceleration</a></li>
            </ul>
        </div>
    )
}
