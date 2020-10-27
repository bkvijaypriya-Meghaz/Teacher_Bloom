import React, {useEffect, useState } from 'react';
import {FiBell, FiMail, FiLock, FiUser, FiClock} from 'react-icons/fi'
import {FiLogOut} from 'react-icons/fi'
import {FiSettings} from 'react-icons/fi'

function Header  () {

    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);

    const notificationDisplay = () => {
       document.getElementById("notiDrop-1").classList.toggle("show");
       document.getElementById("notiDrop-2").classList.toggle("show");
       var x = document.getElementById("toggleDisplay").getAttribute("aria-expanded");
       if (x=="true"){
           x = "false"
       } else {
           x = "true"
       }
       document.getElementById("toggleDisplay").setAttribute("aria-expanded", x);
    }

    const settingsDisplay = () => {
     document.getElementById("notiDrop-3").classList.toggle("show");
     document.getElementById("notiDrop-4").classList.toggle("show");
     var x = document.getElementById("toggleDisplay1").getAttribute("aria-expanded");
     if (x=="true"){
         x = "false"
     } else {
         x = "true"
     }
     document.getElementById("toggleDisplay1").setAttribute("aria-expanded", x);
     }

       const chatboxDisplay = () => {
        document.getElementById("chatboxDisplay").classList.add("open");
       }
   
       const chatboxClose = () => {
        document.getElementById("chatboxDisplay").classList.remove("open");
       } 

       const chatboxTextDisplay =() => {
        document.getElementById("textChatDisplay").classList.add("open");
       }

       const chatboxTextClose =() => {
        document.getElementById("textChatDisplay").classList.remove("open");
       }
            
    return(
        <>
           <header className="navbar pcoded-header navbar-expand-lg navbar-light">
             
              <div className="headerborder">
                <div className="headerborderinner"></div>
              </div>
              
              <div className="m-header d-block d-sm-none ">
                    <div className="navbar-brand header-logo">
                            <a href="dashboard" className="b-brand">
                            <img src="../assets/images/bloom-logo.png" className="bloomlogo"/>
                            <span className="b-title bloomtitle">Bloom</span>
                            </a>
                    <div onClick={handleClick}>
                        <a className ={click ? 'mobile-menu on' : 'mobile-menu'}>
                        <span></span></a>
                   </div>
                   </div>          
                   <nav className={click ? ' pcoded-navbar theme-horizontal-dis mob-open':'pcoded-navbar theme-horizontal-dis'}>         
                        <div className="navbar-wrapper">
                             <div className="navbar-content sidenav-horizontal" id=" navbar-wdt-ht">  
                               <ul className="nav pcoded-inner-navbar  sidenav-inner menucenter">
                                    <li className="nav-item ">
                                        <a href="my-classes" className="nav-link">
                                            <span className="pcoded-micon">
                                                <i className="mdi mdi-teach"></i>
                                            </span>
                                            <span className="pcoded-mtext">My Classes</span>
                                        </a>
                                    </li>
                                    
                                    <li className="nav-item ">                                    
                                         <a href="lessonplans" className="nav-link">
                                                <span className="pcoded-micon">
                                                    <i className="mdi mdi-clipboard-text-outline"></i>
                                                </span>
                                                <span className="pcoded-mtext">Lesson Plans</span>
                                         </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                          <a href="dashboard" className="nav-link">
                                                <span className="pcoded-micon">
                                                    <i className="icon-rocket"></i>    
                                                </span>
                                                 <span className="pcoded-mtext">Launch Pad</span>
                                           </a>
                                                <b className=""></b>
                                    </li>

                                     <li className="nav-item ">
                                         <a href="grade_gradebook" className="nav-link">
                                             <span className="pcoded-micon">
                                                 <i className="mdi mdi-file-document-outline"></i>
                                             </span>
                                             <span className="pcoded-mtext">Grade Book</span>
                                         </a>
                                     </li>
                                     
                                     <li className="nav-item ">
                                            <a href="resources" className="nav-link">
                                                <span className="pcoded-micon">
                                                    <i className="mdi mdi-toolbox"></i>
                                                </span>
                                                <span className="pcoded-mtext">Resources</span>
                                            </a>
                                     </li>
                                </ul>
                            </div> 
                        </div>
                 </nav> 
                 </div>
              

                {/* <a className="mobile-menu" id="mobile-header" href="#!"></a> */}
                
                <div className="collapse navbar-collapse">
                      <div className="d-none d-sm-block">
                        <ul className="navbar-nav mr-auto ">
                              <a href="dashboard" className="b-brand">
                                 <img src="../assets/images/bloom-logo.png" className="bloomlogo"/>
                                 <span className="b-title bloomtitle">Bloom</span>
                              </a>
                        </ul>
                       </div>                                    
                            
                        <ul className="navbar-nav ml-auto">
                                <li>
                                     <div className="dropdown" id="notiDrop-1">
                                          <a className="dropdown-toggle" id="toggleDisplay" href="#" data-target="#notiDrop-2" data-toggle="collapse" onClick={notificationDisplay} aria-expanded="false">
                                              <i><FiBell/></i>
                                          </a>
                                         <div className="dropdown-menu-right notification dropdown-menu" id="notiDrop-2">
                                             <div className="noti-head">
                                                 <h6 className="d-inline-block m-b-0">Notifications</h6>
                                                    <div className="float-right">
                                                        <a href="#!" className="m-r-10">mark as read</a>
                                                        <a href="#!">clear all</a>
                                                    </div>
                                             </div>
                                             <ul className="noti-body"> 
                                                  <li className="notification">
                                                      <div className="media">
                                                          <img className="img-radius" src="../assets/images/bloom-logo.png" alt="Bloom"/>
                                                              <div className="media-body">
                                                                  <p><strong>Bloom Admin</strong>
                                                                  <span className="n-time text-muted">
                                                                  <i className="m-r-10"><FiClock/></i>30 min</span>
                                                                  </p>
                                                                  <p>New questions added to assessment bank!</p>                                                                 </div>
                                                              </div>
                                                   </li>                            
                                             </ul>
                                             <div className="noti-footer">
                                                 <a href="#!">show all</a>
                                             </div>
                                         </div>
                                     </div>
                                 </li>

                                 <li>
                                     <a href="#!" className="displayChatbox" onClick={chatboxDisplay}>
                                         <i><FiMail/></i>
                                     </a>
                                 <section className="header-user-list" id="chatboxDisplay">
                                        <div className="h-list-header">
                                            <div className="input-group">
                                                <input type="text" id="search-friends" className="form-control" placeholder="Search for Student . . ."/>
                                            </div>
                                        </div>
                            <div className="h-list-body">
                                <a href="#!" className="h-close-text" onClick={chatboxClose}>
                                    <i className="feather icon-chevrons-right"></i></a>
                                <div className="main-friend-cont scroll-div ps ps">
                                    <div className="main-friend-list">
                                        <div className="media userlist-box" onClick={chatboxTextDisplay} data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image "/>
                                                <div className="live-status">3</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a class="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-4.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image "/>
                                                <div className="live-status">3</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-4.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image "/>
                                                <div className="live-status">3</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-4.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image "/>
                                                <div className="live-status">3</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Josephin Doe<small className="d-block text-c-green">Typing . . </small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Lary Doe<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alice<small className="d-block text-c-green">online</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="offline" data-username="Alia">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                <div className="live-status">1</div>
                                            </a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Alia<small className="d-block text-muted">10 min ago</small></h6>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="offline" data-username="Suzen">
                                            <a className="media-left" href="#!"><img className="media-object img-radius" src="../assets/images/user/avatar-4.jpg" alt="Generic placeholder image"/></a>
                                            <div className="media-body">
                                                <h6 className="chat-header">Suzen<small className="d-block text-muted">15 min ago</small></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                                  <li>
                                  <section className="header-chat" id="textChatDisplay">
                                        <div className="h-list-header">
                                            <h6>Josephin Doe</h6>
                                            <a href="#!" className="h-back-user-list" onClick={chatboxTextClose}>
                                                <i class="feather icon-chevron-left"></i></a>
                                        </div>
                                        <div className="h-list-body">
                                            <div className="main-chat-cont scroll-div">
                                                <div className="main-friend-chat">
                                                    <div className="media chat-messages">
                                                        <a className="media-left photo-table" href="#!">
                                                          <img class="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/></a>
                                                        <div className="media-body chat-menu-content">
                                                            <div className="">
                                                                <p className="chat-cont">hello Datta! Will you tell me something</p>
                                                                <p className="chat-cont">about yourself?</p>
                                                            </div>
                                                            <p className="chat-time">8:20 a.m.</p>
                                                        </div>
                                                    </div>
                                                    <div className="media chat-messages">
                                                        <div className="media-body chat-menu-reply">
                                                            <div className="">
                                                                <p className="chat-cont">Ohh! very nice</p>
                                                            </div>
                                                            <p className="chat-time">8:22 a.m.</p>
                                                        </div>
                                                    </div>
                                                    <div className="media chat-messages">
                                                        <a className="media-left photo-table" href="#!">
                                                        <img class="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/></a>
                                                        <div className="media-body chat-menu-content">
                                                            <div className="">
                                                                <p className="chat-cont">can you help me?</p>
                                                            </div>
                                                            <p className="chat-time">8:20 a.m.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-list-footer">
                                            <div className="input-group">
                                                <input type="file" className="chat-attach"/>
                                                <a href="#!" className="input-group-prepend btn btn-success btn-attach">
                                                    <i className="feather icon-paperclip"></i>
                                                </a>
                                                <input type="text" name="h-chat-text" className="form-control h-send-chat" placeholder="Write hear . . "/>
                                                <button type="submit" className="input-group-append btn-send btn btn-primary">
                                                    <i className="feather icon-message-circle"></i>
                                                </button>
                                            </div>
                                        </div>
                                     </section>
                                 </li>
                             </li>

                     

                                                         
                                 <li>
                                     <div className=" dropdown drp-user" id="notiDrop-3" >
                                          <a href="#" className="dropdown-toggle" id="toggleDisplay1" onClick={settingsDisplay} data-target="#notiDrop-4" data-toggle="collapse" aria-expanded="false">
                                            <i><FiSettings/></i>
                                          </a>
                                        <div className="dropdown-menu dropdown-menu-right profile-notification" id="notiDrop-4" >                                            <div className="pro-head">
                                                    <img src="../assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image"/>
                                                        <span>Jane Doe</span>
                                                        <a href="logout" className="dud-logout" title="Logout">
                                                            <i><FiLogOut/></i>
                                                        </a>
                                            </div>
                                                <ul className="pro-body">
                                                     <li>
                                                         <a href="#!" className="dropdown-item disablecursoronly">
                                                         <i><FiSettings/></i> Settings</a>
                                                         <i className="settinglockicon"><FiLock/></i>
                                                     </li>
                                                    <li>
                                                        <a href="#!" className="dropdown-item disablecursoronly">
                                                        <i><FiUser/></i> Profile</a>
                                                        <i className="settinglockicon"><FiLock/></i></li>
                                                    <li>
                                                        <a href="#!" className="dropdown-item">
                                                        <i><FiMail/></i> My Messages</a>
                                                    </li>
                                                </ul>
                                        </div>
                                      </div>
                                  </li>
                             </ul> 
                   </div>
            </header>
                 
            <nav className="pcoded-navbar theme-horizontal d-none d-lg-block">         
                        <div className="">
                             <div className="navbar-content sidenav-horizontal" id="layout-sidenav">  
                               <ul className="nav pcoded-inner-navbar sidenav-inner menucenter">
                                    <li className="nav-item ">
                                        <a href="my-classes" className="nav-link">
                                            <span className="pcoded-micon">
                                                <i className="mdi mdi-teach"></i>
                                            </span>
                                            <span className="pcoded-mtext">My Classes</span>
                                        </a>
                                    </li>
                                    
                                    <li className="nav-item ">                                    
                                         <a href="lessonplans" className="nav-link">
                                                <span className="pcoded-micon">
                                                    <i className="mdi mdi-clipboard-text-outline"></i>
                                                </span>
                                                <span className="pcoded-mtext">Lesson Plans</span>
                                         </a>
                                    </li>
                                    
                                    <li className="nav-item rocketicondiv">
                                        <span className="pcoded-micon">
                                                <a href="dashboard">
                                                    <i className="icon-rocket rocketicon"></i>
                                                </a>
                                        </span>
                                                <b className="dashmenuiconactive"></b>
                                    </li>

                                     <li className="nav-item ">
                                         <a href="grade_gradebook" className="nav-link">
                                             <span className="pcoded-micon">
                                                 <i className="mdi mdi-file-document-outline"></i>
                                             </span>
                                             <span className="pcoded-mtext">Grade Book</span>
                                         </a>
                                     </li>
                                     
                                     <li className="nav-item ">
                                            <a href="resources" className="nav-link">
                                                <span className="pcoded-micon">
                                                    <i className="mdi mdi-toolbox"></i>
                                                </span>
                                                <span className="pcoded-mtext">Resources</span>
                                            </a>
                                     </li>
                                </ul>
                            </div> 
                        </div>
                 </nav> 
    </>
    );
}

export default Header 