import React from 'react'

const Nav = (props) => {
    const viewList = props.views;

    const handleClick = (e) => {
        const target = e.target;
        if(target && target.parentNode) {
            console.log("setting active class... for targetSiblings");
            console.log("props.cssClasses... : ", props.cssClasses);

            const targetSiblingListItems = Array.from(target.parentNode.parentNode.childNodes);
            const targetSiblingAnchors = targetSiblingListItems.map((li) => li.childNodes[0]);
            targetSiblingAnchors.forEach((navItemAnchor, index) => {
                navItemAnchor.classList.remove(props.cssClasses.activeClass);
            });
            target.classList.add(props.cssClasses.activeClass);
        }
        props.changeView(e.target.dataset.id);
    }
    
    return(
        viewList.map((viewItem, index) =>(
            <li className="nav-item">
                <a className={"nav-link text-uppercase" + (index===0 ? " "+props.cssClasses.activeClass : "")}
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

export default Nav;