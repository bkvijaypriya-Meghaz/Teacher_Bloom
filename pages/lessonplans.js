
import { FaPlus } from 'react-icons/fa';
import TeacherLayout from '../layout/TeacherLayout';
import UserCard from './lessonplans-usercard';

export default function Lessonplan(props){

    const currentDate = () =>{
        
        const today = new Date();
        console.log(today.toLocaleString);
        console.log(today.getDay);
        console.log(today.toDateString);
        console.log(today.toTimeString);
        
    }

    function createLessonDropdown() {
        var x = document.getElementById("createlesson");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    return(
    
	<TeacherLayout {...props}>
            {/* <!-- [ Main Content ] start --> */}
    <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/* <!-- [ breadcrumb ] start --> */}

                    {/* <!-- [ breadcrumb ] end --> */}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/* <!-- [ Main Content ] start --> */}
                            <div className="row">
                                {/* <!-- [ daily sales section ] start --> */}
                                
								<div className="col-md-12 col-xl-3">
                                    <a href="energy_lessonplancall">
									<div className="card user-card">
                                        <div className="card-block lessonbg">
                                            <h5 className="m-b-15 text-uppercase lessonplanhead text-white">Energy</h5>
                                            <span className="text-white">
												<label className="label theme-bg text-white f-12 f-w-400">
                                                    Thu
													{/* <?php echo date('D'); ?> */}
                                                </label>
                                                20th Sep 2020
                                                {/* <?php echo date('dS M Y'); ?> */}
											</span>
                                        </div>
                                    </div>
									</a>
                                </div>
								<div className="col-md-12 col-xl-3">
									<UserCard title='space' imageUrl="url('assets/images/lesson/space.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Photosynthesis' imageUrl="url('assets/images/lesson/photosynthesis.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Chemistry' imageUrl="url('assets/images/lesson/chemistry.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='IPC' imageUrl="url('assets/images/lesson/ipc.png');"/>
                                </div>
								<div className="col-md-12 col-xl-3">
									<UserCard title='Weight & Scales' imageUrl="url('assets/images/lesson/weight.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Photons' imageUrl="url('assets/images/lesson/photons.png');"/>
                                </div>
								<div className="col-md-12 col-xl-3">
									<UserCard title='Atoms' imageUrl="url('assets/images/lesson/atom.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Time & Space' imageUrl="url('assets/images/lesson/time.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Electricity' imageUrl="url('assets/images/lesson/electricity.png');"/>
                                </div>
                                <div className="col-md-12 col-xl-3">
                                     <div className="card user-card"   onClick={createLessonDropdown}  >
                                          <div className="card-block  lessonbg" style={{background: '#fff'}} >
                                              <div className="row align-items-center justify-content-center">
                                                   <div className="createlesson" >          
                                                       <i className="feather icon-plus f-20" ><FaPlus/> </i>
                                                            Create Lesson
                                                   </div>
                                             </div>        
                                          </div>
                                     </div>  
                                     <div className="lessonplanform" id="createlesson" style={{ display: createLessonDropdown ? "block" : "none" }} >
                                         <h6>Pick a topic to create a Lesson Plan</h6>
                                         <div className="lessonfielddiv">
                                             <label>Grade</label>
                                             <select className="form-control">
                                                 <option value="1st Grade" disabled>1st Grade</option>
                                                 <option value="2nd Grade" disabled>2nd Grade</option>
                                                 <option value="3rd Grade"disabled >3rd Grade</option>
                                                 <option value="4th Grade" selected>4th Grade</option>
                                                 <option value="5th Grade"  disabled>5th Grade</option>
                                                 <option value="6th Grade"  disabled>6th Grade</option>
                                                 <option value="7th Grade"  disabled>7th Grade</option>
                                                 <option value="8th Grade"  disabled>8th Grade</option>
                                                 <option value="9th Grade"  disabled>9th Grade</option>
                                                 <option value="10th Grade" disabled>10th Grade</option>
                                                 <option value="11th Grade" disabled>11th Grade</option>
                                                 <option value="12th Grade" disabled>12th Grade</option>
                                             </select>
                                         </div>
                                         <div className="lessonfielddiv">
                                             <label>Title</label>
                                             <select className="form-control">
                                                 <option value="1st Grade" >4.5A Classifying Matter</option>
                                                 <option value="2nd Grade" >4.5B Changes from Heat</option>
                                                 <option value="3rd Grade" >4.5C Mixtures</option>
                                                 <option value="Forms of Energy" >4.6A Forms of Energy</option>
                                                 <option value="5th Grade" >4.6BC Electricity,Conductors, & Insulators</option>
                                                 <option value="6th Grade" >4.6D Experimenting with Forces</option>
                                                 <option value="7th Grade" >4.7A Properties of Soil</option>
                                                 <option value="7th Grade" >4.7B Changes of Land</option>
                                                 <option value="Energy" >4.7C Energy</option>
                                                 <option value="7th Grade">4.8A Weather</option>
                                                 <option value="7th Grade">4.8B The Sun and Water Cycle</option>
                                                 <option value="7th Grade">4.8C Patterns on Earth</option>
                                             </select>
                                         </div>
                                     </div>
                                 </div>
                            </div>
                            {/* <!-- [ Main Content ] end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- [ Main Content ] end --> */}
    </TeacherLayout>
    )
}