import React from 'react'


const Home = () => {
    return (
        <div>
           
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
				
				{/* not needed code as of now */}
				<div className="tab-pane fade">
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
			
				
				
			</div>
        
    )
};

export default Home;
 
