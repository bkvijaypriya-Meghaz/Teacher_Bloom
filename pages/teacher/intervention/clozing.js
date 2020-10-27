import React from 'react'
import { FiLock } from 'react-icons/fi'

function clozing() {
    return (
        <div>
            <div classNameName="card lessoncard">
                <div classNameName="row" style={{ "border-bottom": "1px solid #f1f1f1" }}>
                    <div classNameName="col-7">
                        <div classNameName="card-header" style={{ "border-bottom": "none" }}>
                            <h5>Question 1 </h5>
                        </div>
                    </div>
                    <div classNameName="col-5">
                        <div classNameName="headrytbtn">
                            <button type="button" classNameName="btn btn-primary" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Not Available In Preview"><i classNameName="feather"><FiLock /></i>Assign</button>
                        </div>
                    </div>
                </div>
                <div classNameName="card-block">
                    <div className="popuptxt">
                        <h6>Key Concept 1:</h6>
                        <p>There are different forms of energy, including mechanical, sound, electrical, light, and heat</p>
                        <h6>Passage:</h6>
                        <p>Energy exists in different forms, including light, thermal (or heat), mechanical, sound, and electrical energy. Light energy travels through space and allows us to see things by __________ off objects. Thermal energy can be added or taken away by increasing or decreasing the amount of __________. Mechanical energy is the energy of __________. Sound energy can be heard due to the __________ of molecules. Electrical energy involves the movement of charged particles through a  __________.                    .</p>
                        <h6>Answer:</h6>

                        <p>Energy exists in different forms, including light, thermal (or heat), mechanical, sound, and electrical energy. Light energy travels through space and allows us to see things by <span>reflecting</span> off objects. Thermal energy can be added or taken away by increasing or decreasing the amount of <span>heat</span> . Mechanical energy is the energy of <span>movement</span> . Sound energy can be heard due to the <span>vibration</span> of molecules. Electrical energy involves the movement of charged particles through a <span>circuit</span> .</p>
                    </div>
                </div>
            </div>
            <div className="card lessoncard">
                <div className="card-header">
                    <h5>Question 2</h5>
                </div>
                <div className="card-block">
                    <div className="popuptxt">
                        <h6>Key Concept 2:</h6>
                        <p>We can observe and differentiate forms of energy. Light bulbs, toasters, fans, and televisions are common, everyday objects that produce or use light, heat, mechanical, sound, and electrical energy.</p>
                        <h6>Passage:</h6>
                        <p>Appliances can use several __________ of energy at once. A laptop computer requires a plug to keep it charged. This is an example of  __________ energy. Once the power is turned on, the computer emits a soft glow, or __________ energy, so you can see. __________ energy is produced, which causes the bottom of the computer to feel very warm. A fan within the computer turns on to blow the heat off the internal parts of the computer. This is an example of  __________ energy. And of course, if we want to listen to a video or music on the computer, __________ energy must exist!.                    .</p>
                        <h6>Answer:</h6>

                        <p>Appliances can use several <span>types</span> of energy at once. A laptop computer requires a plug to keep it charged. This is an example of <span>electrical</span> energy. Once the power is turned on, the computer emits a soft glow, or <span>light</span> energy, so you can see. <span>thermal</span> energy is produced, which causes the bottom of the computer to feel very warm. A fan within the computer turns on to blow the heat off the internal parts of the computer. This is an example of <span>mechanical</span> energy. And of course, if we want to listen to a video or music on the computer, <span>sound</span> energy must exist!</p>
                    </div>
                </div>
            </div>
            <div className="card lessoncard">
                <div className="card-header">
                    <h5>Question 3</h5>
                </div>
                <div className="card-block">
                    <div className="popuptxt">
                        <h6>Key Concept 3:</h6>
                        <p>Energy can be transformed or changed from one form to another.</p>
                        <h6>Passage:</h6>
                        <p>Energy is never created or destroyed, but it does change from one form to another. If you were listening to music on your stereo CD player, electricity would be needed to power the stereo. The __________  energy travels through wires to the electric motor that spins the disc. The energy has become __________  energy, because of the spinning disc. An electrical signal travels through the wires to the speakers. The electrical energy now becomes  __________   energy which enables you to hear the music.                    .</p>
                        <h6>Answer:</h6>

                        <p>Energy is never created or destroyed, but it does change from one form to another. If you were listening to music on your stereo CD player, electricity would be needed to power the stereo. The <span>electrical</span> energy travels through wires to the electric motor that spins the disc. The energy has become <span>mechanical</span> energy, because of the spinning disc. An electrical signal travels through the wires to the speakers. The electrical energy now becomes <span>sound</span> energy which enables you to hear the music.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default clozing
