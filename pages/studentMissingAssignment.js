import React from 'react'

function studentMissingAssignment() {
    return (
        
            <div className="card Recent-Users">
                <div className="card-header">
                    <h5>Student Missing Assignment</h5>
                    
                </div>
                <div className="card-block px-0 py-0">
                    <div className="table-responsive">
                        <table className="display table nowrap table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Students</th>
                                    <th>No. of Missing Assignments</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>Ann Doe</td>
                                    <td><span data-toggle="popover" data-html="true" data-placement="top" title="" data-content="" data-original-title="Assignment Name : Science Rock <br> Due Date : 11/20/2020<hr>Assignment Name : Energy <br> Due Date : 11/20/2020">2</span></td>
                                </tr>
                                <tr>
                                    <td>Brian Orr</td>
                                    <td><span data-toggle="popover" data-html="true" data-placement="top" title="" data-content="" data-original-title="Assignment Name : Science Rock <br> Due Date : 11/20/2020">1</span></td>
                                </tr>
                                <tr>
                                    <td>Ali Zari</td>
                                    <td>3</td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
       
    )
}

export default studentMissingAssignment
