import React from 'react'
import {FiLock} from 'react-icons/fi'

export default function writing_science() {
    return (
        <div>

            <div class="card lessoncard">
                <div class="row" style={{"border-bottom": "1px solid #f1f1f1"}}>
                    <div class="col-7">
                        <div class="card-header" style={{"border-bottom":"none"}}>
                            <h5>Question 1</h5>
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
                        <p>LOOK at this picture.</p>
                        <div class="popupimg1">
                            <img src="../assets/images/teacher/think.png" />
                        </div>
                        <p><b>THINK</b> about what kind of sound might come from an instrument like those in the picture. How many types of energy do you think are needed to make music with them?</p>

                        <p><b>WRITE</b> about playing an instrument like these. What must people do to play them? Do you think more than one part of the instrument can produce sound? How do you think you can make the sound that comes from the instrument louder or quieter?</p>
                        <h6>Answer:</h6>
                        <p>Answers may vary. These are string instruments, so you need to pluck the strings in order to make them make sound. The strings are the main part that produces sound, and you do not play any other part of the instrument, so the strings must be the only part that produces sound. You can make the sound louder or quieter by plucking the strings harder or softer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
