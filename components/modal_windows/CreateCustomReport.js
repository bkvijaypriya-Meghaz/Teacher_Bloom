import React ,{useState}  from 'react'

function CreateCustomReport(props) {    
    const initialStudentList = [
        {
          id: 'a',
          name: 'Ann Doe',    
          lists:'leftList'      
        },
        {
          id: 'b',
          name: 'Johnson williams',
          lists:'leftList' 
        },
        {
            id: 'c',
            name: 'son williams',
            lists:'leftList' 
          },
          {
            id: 'd',
            name: 'Johnson',
            lists:'leftList' 
          },
      ];       
     
       const [list, setList] = useState(initialStudentList);
       const handleClick = id => {      
        setList(list.map((student) => {
            if(student.id===id){                
                   student.lists= (student.lists==="leftList") ? "rightList" : "leftList"  
                  }        
               return student;  
         })) 
         };     
    return(
    <div>
		<div>
			<div className="modal-content">	
           		
				<div className="modal-body">
					<div className="row">
						<div className="col-md-6 col-sm-12 col-xs-12">
							<div className="form-group">
								<label htmlFor="">From</label>
								<input type="date" className="form-control fromtotxtbox" id="" placeholder=""/>
							</div>
						</div>
						<div className="col-md-6 col-sm-12 col-xs-12">
							<div className="form-group">
								<label htmlFor="">To</label>
								<input type="date" className="form-control fromtotxtbox" id="" placeholder=""/>
							</div>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="form-group m-t-10">
								<label htmlFor=""></label>
								<div className="form-group d-inline">
									<div className="radio radio-primary d-inline">
										<input type="radio" name="custumradio-p-fill-5" id="custumradio-p-fill-5" checked/>
										<label htmlFor="custumradio-p-fill-5" className="cr">All Student</label>
									</div>
								</div>
								<div className="form-group d-inline">
									<div className="radio radio-primary d-inline">
										<input type="radio" name="custumradio-p-fill-5" id="custumradio-p-fill-6"/>
										<label htmlFor="custumradio-p-fill-6" className="cr">Custom List</label>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="form-group">
								<select multiple="multiple" id="my-select" name="my-select[]" style={{position:"absolute",left:"-9999px"}}>
									<option value='elem_1' selected>Ann Doe</option>
									<option value='elem_2'>Johnson William</option>
									<option value='elem_3'>John Nokes</option>
								</select>
                                <div className="ms-container" id="ms-my-select" >
                                    <div className="ms-selectable">


                                    <ul className="ms-list">
                                     {list.filter(std=>std.lists==="leftList").map((item)=> (
                                     
                                       <li className="ms-elem-selectable" key={item.id}  onClick={() => handleClick(item.id)}>
                                          <label>{item.name}</label>
                                               
                                        </li>
                                     ))}
                                    </ul>   
                                    </div>
                                    <div className="ms-selection">        
                                      <ul className="ms-list">                                     
                                      {list.filter(std=>std.lists==="rightList").map((item) => (
                                         <li className="ms-elem-selectable" key={item.id}  onClick={() => handleClick(item.id)}>
                                          <label>{item.name}</label>
                                               
                                        </li>
                                     ))}
                                      </ul>                                        
                                    </div>
                                </div>
							</div>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="form-group m-t-10">
								<label htmlFor=""></label>
								<div className="form-group d-inline">
									<div className="radio radio-primary d-inline">
										<input type="radio" name="cradio-p-fill-5" id="cradio-p-fill-5" checked/>
										<label htmlFor="radio-p-fill-5" className="cr">Async Time</label>
									</div>
								</div>
								<div className="form-group d-inline">
									<div className="radio radio-primary d-inline">
										<input type="radio" name="cradio-p-fill-5" id="cradio-p-fill-6"/>
										<label htmlFor="radio-p-fill-6" className="cr">Sync Time</label>
									</div>
								</div>
                                <div className="form-group d-inline">
									<div className="radio radio-primary d-inline">
										<input type="radio" name="cradio-p-fill-5" id="cradio-p-fill-7"/>
										<label htmlFor="radio-p-fill-7" className="cr">Both</label>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-primary">Generate Report</button>
				</div>
			</div>
		</div>
	</div>    
    ) 
}
export default CreateCustomReport ; 