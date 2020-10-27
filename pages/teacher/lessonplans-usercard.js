export default function UserCard({title, imageUrl}) {
    //console.log(title, imageUrl);
    return(
        <div className="card user-card">
            <div className="card-block disablecursoronly lessonbg" style={{'background':imageUrl}} >
                <div className="row align-items-center justify-content-center">
                    <div className="col-auto">
                        <h5 className="m-b-15 text-uppercase text-white lessonplanhead text-white">{title}</h5>
                    </div>
                    <div className="col text-right">
                    <i className="feather icon-lock f-20 text-white text-white lockicon"></i>
                    </div>
                </div>
                <span className="text-white">
                    <label className="label theme-bg text-white f-12 f-w-400">
                        thu
                    {/* <?php echo date('D', strtotime(' +1 day')); ?> */}
                    </label>
                    10th Sep 2020
                    {/* <?php echo date('dS M Y', strtotime(' +1 day')); ?> */}
                </span>
                <div className="notavailtxt">not available in preview</div>
            </div>
        </div>
    )
}