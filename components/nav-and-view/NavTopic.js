import React from 'react'

const NavTopic = (props) => {
    const viewList = props.views;

    // console.log("NavTopic : ",viewList)
    const handleClick = (e) => {
        const target = e.target;
        props.changeView(e.target.dataset.id);
    }
    
    return(
        viewList.map((viewItem, index) =>(
            <li className="nav-item">
                <a className={"nav-link"}
                    key={viewItem.id}
                    id={viewItem.id}
                    data-toggle="tab" 
                    role="tab" 
                    aria-controls="intro" 
                    aria-selected="true"
                
                    name={viewItem.name}
                    data-id={viewItem.id}
                    onClick={handleClick}
                >
                {viewItem.name}
                </a>
            </li>
        ))
    )
};

export default NavTopic;