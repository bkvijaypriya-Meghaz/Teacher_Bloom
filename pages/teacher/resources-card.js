export default function ResourcesCard({title, imageUrl}) {
    //console.log("\nResourcesCard ----------- ",title, imageUrl);
    return(
        <div className="card">
        <div className="card-block lessonbg" style={{'background':imageUrl}}>
            <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                    <h2 className="mb-2 f-w-300 f-33 resourceitem"><span>{title}</span></h2>
                </div>
                <div className="col text-right">
                <i className="feather icon-lock f-20 text-white text-white lockicon"></i>
                </div>
            </div>
            <div className="resourcenotavail">not available in preview</div>
        </div>
    </div>
    )
}