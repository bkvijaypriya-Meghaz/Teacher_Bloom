import React from 'react'
import { FiLock } from 'react-icons/fi'

export default function claim_evidence() {
    return (
        <div>
            <div class="card lessoncard">
                <div class="row" style={{"border-bottom": "1px solid #f1f1f1"}}>
                    <div class="col-7">
                        <div class="card-header" style={{"border-bottom": "none"}}>
                            <h5>Claim-Evidence Reasoning </h5>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="headrytbtn">
                            <button type="button" class="btn btn-primary" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview"><i class="feather"><FiLock /></i>Assign</button>
                        </div>
                    </div>
                </div>
                 <div class="card-block">
                    <div class="popuptxt">
                        <h4 class="rytpanelhead">Scenario:</h4>
                        <p>Jose and his mother are baking cookies. They use the mixer to make the cookie dough, use a spoon to dip out pieces of dough onto a cookie sheet, then put the cookie sheets into the oven.</p>
                        <div class="popupimg">
                            <img src="../assets/images/teacher/claim.jpg" />
                        </div>
                        <h4 class="rytpanelhead">Prompt:</h4>
                        <p>Write a scientific explanation describing the different forms of energy being used in this process of baking cookies.</p>
                        <h4 class="rytpanelhead">Claim:</h4>
                        <h6>Answer</h6>
                        <p>Mechanical, electrical, light, and thermal energies are being used when making cookies. *Note: Sound energy is produced, but it is not involved in the actual process of making the cookies.</p>

                        <h4 class="rytpanelhead">Evidence:</h4>
                        <h6>Answer</h6>
                        <ol>
                            <li>The mixer blades use mechanical energy to turn.</li>
                            <li>Mechanical energy is needed to move the cookie dough to the cookie sheet.</li>
                            <li>It takes mechanical energy to open the door of the oven. The oven uses thermal energy to bake the cookies, and there is a light (light energy) that comes on in the oven.</li>
                            <li>The mixer and the oven work because of electricity (electrical energy).</li>
                        </ol>
                        <h4 class="rytpanelhead">Reasoning:</h4>
                        <h6>Answer</h6>
                        <p>Mechanical energy is the energy of movement. The blades move, and it takes movement to use the spoon and open the oven door.</p>

                        <p>The mixer and the oven need electricity to operate.</p>

                        <p>We can feel the heat from the oven that is needed to bake the cookies, which is thermal energy.</p>

                        <p>The oven door acts like a light switch. When the door opens, the light bulb turns on.</p>
                        <h4 class="rytpanelhead text-center">Forms of Energy CER</h4>
                        <p class="text-center">Rubric for writing a scientific explanation</p>
                        <div class="popupimg">
                            <img src="../assets/images/teacher/claimtable.png" />
                        </div>
                    </div>



                </div> 
            </div>
        </div>
    )
}
