
import TeacherLayout from '../../layout/TeacherLayout';
import UserCard from './lessonplans-usercard';

export default function Lessonplan(props){

    const currentDate = () =>{
        
        const today = new Date();
        console.log(today.toLocaleString);
        console.log(today.getDay);
        console.log(today.toDateString);
        console.log(today.toTimeString);
        
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
									<UserCard title='space' imageUrl="url('../assets/images/lesson/space.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Photosynthesis' imageUrl="url('../assets/images/lesson/photosynthesis.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Chemistry' imageUrl="url('../assets/images/lesson/chemistry.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='IPC' imageUrl="url('../assets/images/lesson/ipc.png');"/>
                                </div>
								<div className="col-md-12 col-xl-3">
									<UserCard title='Weight & Scales' imageUrl="url('../assets/images/lesson/weight.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Photons' imageUrl="url('../assets/images/lesson/photons.png');"/>
                                </div>
								<div className="col-md-12 col-xl-3">
									<UserCard title='Atoms' imageUrl="url('../assets/images/lesson/atom.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Time & Space' imageUrl="url('../assets/images/lesson/time.png');"/>
                                </div>
								
								<div className="col-md-12 col-xl-3">
									<UserCard title='Electricity' imageUrl="url('../assets/images/lesson/electricity.png');"/>
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