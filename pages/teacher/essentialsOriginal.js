export default function Essentials (props){
    return(
    <div>
    <div className="row">
        <div className="col-md-12 col-sm-12">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item tabhoriitem"><a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a></li>
                <li className="nav-item tabhoriitem"><a className="nav-link " id="pills-Scope-tab" data-toggle="pill" href="#pills-Scope" role="tab" aria-controls="pills-Scope" aria-selected="false">Bundle Summary</a></li>
                <li className="nav-item tabhoriitem"><a className="nav-link " id="pills-Teacher-tab" data-toggle="pill" href="#pills-Teacher" role="tab" aria-controls="pills-Teacher" aria-selected="false">Teacher Background</a></li>
                <li className="nav-item tabhoriitem"><a className="nav-link " id="pills-Material-tab" data-toggle="pill" href="#pills-Material" role="tab" aria-controls="pills-Material" aria-selected="false">Material List</a></li>
                <li className="nav-item tabhoriitem"><a className="nav-link " id="pills-Correlation-tab" data-toggle="pill" href="#pills-Correlation" role="tab" aria-controls="pills-Correlation" aria-selected="false">Standards Correlation</a></li>
                <li className="nav-item tabhoriitem"><a className="nav-link " id="pills-Answer-tab" data-toggle="pill" href="#pills-Answer" role="tab" aria-controls="pills-Answer" aria-selected="false">Answer Keys</a></li>
                <li className="nav-item tabhoriitem"><a className="nav-link " id="pills-Unwrapped-tab" data-toggle="pill" href="#pills-Unwrapped" role="tab" aria-controls="pills-Unwrapped" aria-selected="false">Stanards Unwrapped</a></li>
                <li className="nav-item tabhoriitem"><a className="nav-link " id="pills-Assessment-tab" data-toggle="pill" href="#pills-Assessment" role="tab" aria-controls="pills-Assessment" aria-selected="false">Pre-Assessment</a></li>
            </ul>
        </div>
        <div className="col-md-12 col-sm-12">
        {/* <!-- Home --> */}
            <div className="tab-content essentialspanel" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Student Expectation</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt"><p>The student is expected to differentiate among forms of energy, including mechanical, sound, electrical, light, and heat/thermal.</p></div>
                        </div>
                    </div>
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Key Concepts</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <p>There are different forms of energy including mechanical, sound, electrical, light, and heat.</p>
                                <p>We can observe and differentiate between forms of energy.</p>
                                <p>Light bulbs, toasters, fans, and televisions are common objects that produce or use light, heat, mechanical, sound, and electrical energy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Fundamental Questions</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <p>What are different forms of energy?</p>
                                <p>How can we observe and differentiate between forms of energy?</p>
                                <p>How do everyday objects produce or use energy?</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Scope Summary --> */}
                <div className="tab-pane fade" id="pills-Scope" role="tabpanel" aria-labelledby="pills-Scope-tab">
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Essentials</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                            <h6>Pre-Assessment</h6>
                            <p>Students answer five multiple choice questions drawing on general prior knowledge.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Engage</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <p>Students investigate sound energy by producing sound with stemmed glasses.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Explore</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <p>Students test and explore various items and identify what form or forms of energy they display.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Explain</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <h6>Question Prompts</h6>
                                <p>Question ideas specifically related to the Explore activity.</p>
                                <h6>Science Rock</h6>
                                <p>Students listen to and dance (using a computer keyboard or USB attached dance mat) to a song called Energy.</p>
                                <h6>Science Rock Interactive</h6>
                                <p>Interactive version of Science Rock.</p>
                                <h6>Vocabulary</h6>
                                <p>Picture Vocabulary with a Scope Vocabulary Game to learn and review key vocabulary for forms of energy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Elaborate</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <h6>Next Step Inquiry</h6>
                                <p>To foster students asking their own questions, the Next Step Inquiry further explores the concept in-depth, and helps students organize their thinking in order to carry out an investigation that seeks the answer to their questions.</p>
                                <h6>Reading Science</h6>
                                <p>“Powering Up Your Day": Students read a short story about the types of energy used by devices we use everyday and earlier versions of these devices.</p>
                                <p>A=500L<br/>
                                B=650L<br/>
                                C=810L</p>
                                <h6>Books on Topic</h6>
                                <p>A list of trade-books that are helpful for teachers, parents, and students.</p>
                                <h6>Math Connections</h6>
                                <p>Students apply the science content learned to math problems.</p>
                                <h6>Web Surfing Science</h6>
                                <p>Students search the provided internet resources for information on energy transfer and storage, solar power, and different forms of energy.</p>
                                <h6>Extensions</h6>
                                <p>Hands-on activities designed to expand on student understanding of forms of energy.</p>
                                <h6>Engineering Connections</h6>
                                <p>Students design and create a working thermometer using a systematic process to complete the engineering challenge.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Evaluate</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <h6>Scope Review Game</h6>
                                <p>An interactive game that can be played individually or as a class to review forms of energy.</p>
                                <h6>Writing Science</h6>
                                <p>Students are shown a picture and asked to write about the different types of energy needed to produce sound from instruments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Intervention</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <h6>Concept Builder</h6>
                                <p>Energy Cube: Students create a cube that depicts five types of energy.</p>
                                <h6>Concept Attainment Quiz</h6>
                                <p>A multi-format quiz that allows for retesting key concepts.</p>
                                <h6>CLOZE-ing in on Science</h6>
                                <p>A fill-in-the-blank paragraph to help with the mastery of vocabulary and concepts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Acceleration</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <h6>Science Applied</h6>
                                <p>Students must develop a plan to reduce the noise of a nearby highway and train.</p>
                                <h6>Science Art</h6>
                                <p>Students create a light switch plate with images representing the forms of energy.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Teacher Background --> */}
                
                <div className="tab-pane fade" id="pills-Teacher" role="tabpanel" aria-labelledby="pills-Teacher-tab">
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Explanation</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt"><p>Students had prior experience with energy in second grade. They investigated the effects on an object by increasing or decreasing amounts of light, heat, and sound energy, such as how the color of an object appears different in dimmer light, or how heat melts butter. In third grade, students explored different forms of energy, including mechanical, light, sound, and heat/thermal in everyday life. In fourth grade, students are introduced to electrical energy and will differentiate among the other forms of energy. To differentiate is a higher order reasoning skill in which students will be comparing and contrasting the various forms of energy.</p></div>
                        </div>
                    </div>
                    
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Key Concept 1 : There are different forms of energy, including mechanical, sound, electrical, light, and heat/thermal.</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <h6>Energy</h6>
                                <p>Energy is what is needed to do work or cause change. Although there is nuclear energy (produced when atoms fuse or split and produce radiation) and chemical energy (the energy released or absorbed during chemical reactions), fourth grade students will focus only on mechanical, sound, electrical, light, and heat/thermal energy.</p>
                                <h6>Mechanical Energy</h6>
                                <p>Mechanical energy is the energy of movement or the potential for movement. Every time anything moves, whether it’s a fan, wind, water, cars, engines, people, clocks, or animals running, it is mechanical energy that makes it happen. All movement is mechanical energy. Objects at rest that have the potential to move also have mechanical energy, it’s just stored, like a ball sitting still at the top of a hill. Some objects vibrate when they move, producing sound energy, such as a drum or guitar strings.</p>
                                <h6>Sound Energy</h6>
                                <p>Sound energy is produced by vibrating objects. Although sound is detected by the ear, students can feel sound vibrations when they touch their throats while talking, and see sound vibrations when they put a paper plate or some candy sprinkles on top of a loud radio that causes the sprinkles to bounce around. Sound is produced in nature when animals make sounds, the oceans pound the shore, and the wind blows through the trees. Sound is also produced by vibrating objects, such as musical instruments, radios, and moving machines.</p>
                                <h6>Electrical Energy</h6>
                                <p>Electrical energy is produced by the movement of electrons. If electrons flow in a complete circuit, that energy can be used to turn on a light bulb, TV, or any electronic device.</p>
    
                                <h6>Light Energy</h6>
                                <p>Light energy can be seen by the eye and also stored for use. Light energy is produced by glowing objects, such as the Sun, a match, light bulb, or a glow stick. We use light energy to see things, illuminate dark areas, make neon signs, etc.</p>
                                <h6>Thermal Energy</h6>
                                <p>Thermal Energy is the internal kinetic energy of a material due to its molecules movements. Thermal energy is caused by tiny particles in materials moving, measured by its temperature. Heat is the transfer of thermal energy from hotter to colder materials. Heat is used for warming ourselves, houses, cooking food, etc. Heat can be produced, for example, by the Sun, fire, friction, or from chemical reactions, such as the warmth created by activating a packaged heat wrap.</p>
                            </div>
                            <div className="popupimg">
                                <img src="../assets/images/popupimg/energy.png"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Key Concept 2: We can observe and differentiate forms of energy.</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                <p>Students can compare and contrast the various forms of energy. Several similarities exist, in that all energy forms have the following in common: 1) the ability to cause change or do work, 2) the dependence that all living things have on energy in order to survive, and 3) the large number of devices humans have invented that use each form of energy. However, forms of energy do vary in their source and their function. Different forms of energy occur naturally, such as the light and heat that come from the Sun or from a fire (heat energy) started by lightning; or flowing water and animals that make sound (sound energy) and move (mechanical energy). Other forms of energy are human-made, such as a toaster (heat energy), radio (sound energy), light bulb (light energy), a car (mechanical energy), or an extension cord (electrical energy). The biggest difference among forms of energy occurs in the infinite number of ways humans use both natural forms of energy and man-made energy devices to live, work, and play on this planet.</p>
                            </div>
                            <div className="popupimg">
                                <img src="../assets/images/popupimg/keyconcept2.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Key Concept 3: Light bulbs, toasters, fans, and televisions are common, everyday objects that produce or use light, heat, mechanical, sound, and electrical energy.</h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                
    
                                <p>To help students sort through everyday objects and to match those objects with their form of energy, alert them to the possibility that some objects can transfer or convert one energy source to one or more forms of energy.</p>
    
                                <p>For example, all devices that are plugged into a socket with a cord or use a battery are powered by electrical energy, yet the object may convert that electrical energy into a number of other energy forms, such as a light bulb (light and heat energy), radio (sound energy), television (sound and light energy), pop-up toaster (heat and mechanical energy), or fan (mechanical energy).</p>
                            </div>
                            <div className="popupimg">
                                <img src="../assets/images/popupimg/keyconcept3.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Material List --> */}
                <div className="tab-pane fade" id="pills-Material" role="tabpanel" aria-labelledby="pills-Material-tab">
                    {/* <?php include("essentials/material_list.php"); ?> */}
                </div>
                <div className="tab-pane fade" id="pills-Correlation" role="tabpanel" aria-labelledby="pills-Correlation-tab">
                    <div className="card lessoncard">
                        <div className="card-header">
                        <h5>Texas Essential Knowledge and Skills '('TEKS')'</h5>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                
            
    )
    }
