import React from 'react'
import { FiLock } from 'react-icons/fi'

export default function concept_builder() {
    return (
        <div>
            <div class="card lessoncard">

                <div class="row" style={{"border-bottom": "1px solid #f1f1f1"}}>
                    <div class="col-7">
                        <div class="card-header" style={{"border-bottom":"none"}}>
                            <h5>Description (Concept Builder — Energy Cube)</h5>
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
                        <p>Students make a cube to depict five forms of energy. Students should include:</p>
                        <ol>
                            <li>One face of the cube must show a title and sketch appropriate to the task.</li>
                            <li>Each of the other faces should represent one of the five forms of energy.</li>
                            <li>Include three colored examples of the energy form on each face of the cube.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="card lessoncard">
                <div class="card-header">
                    <h5>Mission Instructions</h5>
                </div>
                <div class="card-block">
                    <div class="popuptxt">
                        <ol>
                            <li>Draw a rough plan of three sketches that show examples of each form of energy: light, thermal, mechanical, sound, and electrical.</li>

                            <li>Use the template provided by your teacher to trace the pattern for a cube. Use heavy paper like tagboard or construction paper. Cut the pattern around the outside edges. Fold on the inside dotted lines to check how it will go together.</li>

                            <li>Unfold the cube. On one face, create a title with your name and a sketch, ensuring it is energy-related!</li>

                            <li>Use the other five faces to represent each of the five forms of energy (light, thermal, mechanical, sound, and electrical). On each face of the cube, write the type of energy illustrated on that section and draw three examples of that type of energy.</li>

                            <li>When you are sure your sketches are complete, fold the faces to make a cube shape. Tape the open edges.</li>

                            <li>Display and discuss the different forms of energy. Which do you use the most? Which is the easiest to use? How do we get it?</li>
                        </ol>
                        <p></p>
                        <h6>Template for Cube</h6>
                        <ol>
                            <li>Cut on solid lines. Fold on dotted lines. Tape edges to make a cube.</li>
                            <li>Enlarge on copier with 11 X 17 paper to make a larger template.</li>
                        </ol>

                    </div>
                </div>
            </div>

            <div class="card lessoncard">
                <div class="card-header">
                    <h5>Materials</h5>
                </div>
                <div class="card-block">
                    <div class="popuptxt">
                        <p>
                            Pencil<br />
                            Crayons or map pencils<br />
                            Tagboard or construction paper<br />
                            Enlarged template (see page 2) on 11x17 paper<br />
                            Scissors
			            </p>

                    </div>
                </div>
            </div>


        </div>
    )
}
