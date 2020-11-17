

import React from 'react'
import { useState, useEffect } from 'react';
import {getInfo} from '../services/GenricService';
import {STUDENT_ACTIVITY} from '../components/ConstFile';

export function Topics(props)  {
return(
    <div>
    <div class="card-block px-0 py-0">
        <div class="dashcurrbtn"><a href="curriculum"><button class="btn">Curriculum</button></a></div>
        <ul class="nav nav-tabs dashtab" id="myTab" role="tablist">
    
    <li class="nav-item">
        <a class="nav-link active" id="topics-tab" data-toggle="tab" href="#topics" role="tab" aria-controls="topics" aria-selected="true">Class Topics</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Recent</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Upcoming</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Bookmarks</a>
    </li>
</ul>
<div class="tab-content nopadding" id="myTabContent">
    <div class="tab-pane fade show active" id="topics" role="tabpanel" aria-labelledby="topics-tab">
        <div class="table-responsive">
            <table class="table table-hover dashcurrentass dashtopic">
                <tbody>
                        
                    <tr class="unread">
                        <td><a href="essentials/home.php"><img src="images/energy.png"></a></td>
                        <td>
                            <a href="essentials/home.php" style="color:#888;"><h6 class="mb-1">4.7C Energy</h6>
                            <p class="m-0 f-12">Classifying Matter</p></a>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5A Classifying Matter</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5B Changes from Heat</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5C Mixtures</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6A Forms of Energy</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6BC Electricity, Conductors, &amp; Insulators</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6D Experimenting with Forces</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.7A Properties of Soil</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.7B Changes to Land</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8A Weather</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8B The Sun and Water Cycle</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8C Patters on Earth</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div class="table-responsive">
            <table class="table table-hover dashcurrentass dashtopic">
                <tbody>
                        
                    <tr class="unread">
                        <td><a href="essentials/home.php"><img src="images/energy.png"></a></td>
                        <td>
                            <a href="essentials/home.php" style="color:#888;"><h6 class="mb-1">4.7C Energy</h6>
                            <p class="m-0 f-12">Classifying Matter</p></a>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5A Classifying Matter</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5B Changes from Heat</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5C Mixtures</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6A Forms of Energy</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6BC Electricity, Conductors, &amp; Insulators</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6D Experimenting with Forces</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.7A Properties of Soil</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.7B Changes to Land</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8A Weather</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8B The Sun and Water Cycle</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8C Patters on Earth</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="table-responsive">
            <table class="table table-hover dashcurrentass dashtopic">
                <tbody>
                        
                    <tr class="unread">
                        <td><a href="essentials/home.php"><img src="images/energy.png"></a></td>
                        <td>
                            <a href="essentials/home.php" style="color:#888;"><h6 class="mb-1">4.7C Energy</h6>
                            <p class="m-0 f-12">Classifying Matter</p></a>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5A Classifying Matter</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5B Changes from Heat</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5C Mixtures</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6A Forms of Energy</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6BC Electricity, Conductors, &amp; Insulators</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6D Experimenting with Forces</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.7A Properties of Soil</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.7B Changes to Land</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8A Weather</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8B The Sun and Water Cycle</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8C Patters on Earth</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="table-responsive ">
            <table class="table table-hover dashcurrentass dashtopic">
                <tbody>
                        
                    <tr class="unread">
                        <td><a href="essentials/home.php"><img src="images/energy.png"></a></td>
                        <td>
                            <a href="essentials/home.php" style="color:#888;"><h6 class="mb-1">4.7C Energy</h6>
                            <p class="m-0 f-12">Classifying Matter</p></a>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5A Classifying Matter</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5B Changes from Heat</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.5C Mixtures</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6A Forms of Energy</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6BC Electricity, Conductors, &amp; Insulators</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.6D Experimenting with Forces</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.7A Properties of Soil</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.7B Changes to Land</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8A Weather</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8B The Sun and Water Cycle</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    <tr class="unread disableopacity">
                        <td><img src="images/energy.png"></td>
                        <td>
                            <h6 class="mb-1">4.8C Patters on Earth</h6>
                            <p class="m-0 f-12">Classifying Matter</p>
                        </td>
                    </tr>
                    
                    
                    
                </tbody>
            </table>
        </div>
    </div>
</div>
    </div>
    </div>
)
}