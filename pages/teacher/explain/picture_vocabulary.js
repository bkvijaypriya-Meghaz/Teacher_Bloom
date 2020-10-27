import React from 'react'

const PictureVocabulary=()=> {
    return (
        <div>
            <div className="card lessoncard">
	<div className="row" style={{borderBottom: '1px solid #f1f1f1'}}>
		<div className="col-12">
			<div className="card-header" style={{borderBottom: 'none'}}>
				<h5>Picture Vocabulary</h5>
			</div>
		</div>
		
	</div>
	<div className="card-block">
		<div className="popuptxt">
			
			<div className="table-responsive">
				<table className="table table-bordered pictureslide">
                    <thead></thead>
                    <tbody>
					<tr>
						<td rowSpan="2" style={{textAlign: 'center'}} ><img src="images/picture.jpg"/></td>
						<td className="picturetxt1">Energy</td>
					</tr>
					<tr>
						<td className="picturetxt2">That which is needed to do work.</td>
					</tr>
                    </tbody>
				</table>
			</div>
			<p>Challenge yourself! Here are some extra vocabulary words for this topic. Can you relate them to what you've already learned? Click on the term to see the video. If there is a Spanish version available, you can see it by clicking on "Spanish."</p>

			<ul>
			<li>Energy</li>
			<li>Heat</li>
			<li>Thermal</li>
			</ul>
		</div>


		
	</div>
</div>
        </div>
    )
}

export default PictureVocabulary;
