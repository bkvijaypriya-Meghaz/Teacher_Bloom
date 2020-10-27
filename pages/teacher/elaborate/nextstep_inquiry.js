import React from 'react'

const NextStepInquiry = () => {
    return (
        <div>
            <div className="card lessoncard">
                <div className="card-header">
                    <h5>Purpose</h5>
                </div>
                <div className="card-block">
                    <div className="popuptxt"><p>The purpose of the Next Step Inquiry is to foster students asking their own question, which further explores the concept in-depth, and to help the students organize their thinking in order to carry out an investigation that seeks the answer to their question.</p></div>
                </div>
            </div>

            <div className="card lessoncard">
                <div className="card-header">
                    <h5>Examples of Student Questions</h5>
                </div>
                <div className="card-block">
                    <div className="popuptxt">
                    <ul>
                        <li>Descriptive</li>
                        <ul>
                            <li>What kinds of energy do things in my house use?</li>
                            <li>What are some ways we could use less electrical energy in our house?</li>
                        </ul>
                        <li>Comparative</li>
                        <ul>
                            <li>Do some types of light bulbs shine brighter than others?</li>
                            <li>Will a stem glass make a different noise if I put something besides water in it?</li>
                        </ul>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextStepInquiry;