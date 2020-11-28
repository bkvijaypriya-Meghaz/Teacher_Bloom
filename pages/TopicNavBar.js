import React from 'react'
import { useState, useEffect } from 'react';
import { Navbar, Dropdown, DropdownButton } from 'react-bootstrap'

export default function TopicNavBar(props) {

    const [navbarTopicList, setNavbarTopicList] = useState([])
    const [essentialsList, setEssentialsList] = useState([])
    const [engageList, setEngageList] = useState([])
    const [exploreList, setExploreList] = useState([])
    const [explainList, setExplainList] = useState([])
    const [elaborateList, setElaborateList] = useState([])
    const [evaluateList, setEvaluateList] = useState([])
    const [boostList, setBoostList] = useState([])
    const [advancementList, setAdvancementList] = useState([])

    useEffect(() => {
        console.log("props.navBarList : ",props.navBarList)
        console.log("Essentials list is : ",props.navBarList[0].essentials)

        //Can be created dynamically too... in furture. This is only for 5E and BA, here we have 6 E's  
        setEssentialsList(props.navBarList[0].essentials.essentialsList)
        setEngageList(props.navBarList[1].engage.engageList)
        setExploreList(props.navBarList[2].explore.exploreList)
        setExplainList(props.navBarList[3].explain.explainList)
        setElaborateList(props.navBarList[4].elaborate.elaborateList)
        setEvaluateList(props.navBarList[5].evaluate.evaluateList)
        setBoostList(props.navBarList[6].boost.boostList)
        setAdvancementList(props.navBarList[7].advancement.advancementList)
        
        return () => {
            console.log("Error : setting EssentialsList")
        }
    }, [])

    
    const displayCurriculumPage=()=>{
        //console.log("Coming inside display curriculum")
        props.displayCurriculum(true);
        props.displayContentPage(false);
    };
    
    const displayContentPage = () => {
        //console.log("Coming inside display content")
        props.displayContentPage(true);
        props.displayCurriculum(false);
    };

    return (
        <>
        <div className="btn-group mr-2" style={{paddingTop:"10px"}}>
            {/* To do : Need to display the selected topic heading here instead of Plan */}
            <a href="topicContent"><button className="btn btn-sm btn-secondary" onClick={displayCurriculumPage}>Plan</button> </a>
        </div>
        <div className="btn-group mb-2 mr-2">
            <Navbar>
                <DropdownButton id="Essentials" title="Essentials" variant ="secondary" style={{marginRight: "20px"}} className="dropdownbuttonTopic">
                {
                    essentialsList && essentialsList.map((essentialItem,index) => (
                        <Dropdown.Item as="button" onClick={displayContentPage}>
                            {essentialItem}
                        </Dropdown.Item>
                    ))
                }
                </DropdownButton>{' '}
                <DropdownButton id="Engage" title="Engage" variant ="secondary" className="dropdownbuttonTopic">
                {
                    engageList && engageList.map((engageItem,index) => (
                        <Dropdown.Item as="button">
                            {engageItem}
                        </Dropdown.Item>
                    ))
                }
                </DropdownButton>
                <DropdownButton id="Explore" title="Explore" variant ="secondary" className="dropdownbuttonTopic">
                {
                    exploreList && exploreList.map((exploreItem,index) => (
                        <Dropdown.Item as="button">
                            {exploreItem}
                        </Dropdown.Item>
                    ))
                }
                </DropdownButton>
                <DropdownButton id="Explain" title="Explain" variant ="secondary" className="dropdownbuttonTopic">
                {
                    explainList && explainList.map((explainItem,index) => (
                        <Dropdown.Item as="button">
                            {explainItem}
                        </Dropdown.Item>
                    ))
                }
                </DropdownButton>
                <DropdownButton id="Elaborate" title="Elaborate" variant ="secondary" className="dropdownbuttonTopic">
                {
                    elaborateList && elaborateList.map((elaborateItem,index) => (
                        <Dropdown.Item as="button">
                            {elaborateItem}
                        </Dropdown.Item>
                    ))
                }
                </DropdownButton>
                <DropdownButton id="Evaluate" title="Evaluate" variant ="secondary" className="dropdownbuttonTopic">
                {
                    evaluateList && evaluateList.map((evaluateItem,index) => (
                        <Dropdown.Item as="button">
                            {evaluateItem}
                        </Dropdown.Item>
                    ))
                }
                </DropdownButton>
                <DropdownButton id="Boost" title="Boost" variant ="secondary" className="dropdownbuttonTopic">
                {
                    boostList && boostList.map((boostItem,index) => (
                        <Dropdown.Item as="button">
                            {boostItem}
                        </Dropdown.Item>
                    ))
                }
                </DropdownButton>
                <DropdownButton id="Advancement" title="Advancement" variant ="secondary" className="dropdownbuttonTopic">
                {
                    advancementList && engageList.map((advancementItem,index) => (
                        <Dropdown.Item as="button">
                            {advancementItem}
                        </Dropdown.Item>
                    ))
                }
                </DropdownButton>
            </Navbar>
        </div>
        </>
    )
}
