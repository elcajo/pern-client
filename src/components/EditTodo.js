import React, { Fragment, useState } from "react";

	const EditTodo = ({allTodo}) => {
		const [description, setDescription] = useState(allTodo.description);
		const [ getAllTodo, setTodo ] = useState([]);

		//edit description function 
		const updateDescription = async e => {
			e.preventDefault();
			try{
				const body = { description };
				const response = await fetch(`https://guarded-earth-77991.herokuapp.com/updateSelectTodo/${allTodo.todo_id}`, {
					method: "PUT",
      				headers: {'Content-Type': 'application/json'},
      				body: JSON.stringify(body)
				} );
				window.location = "/";
				console.log(response);
			} catch(err){

			}
		}


		// ---
		return (
			<Fragment>
					<button type="button" className="btn btn-warning" 
					data-toggle="modal" data-target={`#id${allTodo.todo_id}`}>
					  Edit
					</button>

					<div className="modal" id={`id${allTodo.todo_id}`} onClick={() => setDescription(allTodo.description)}>
					  <div className="modal-dialog">
					    <div className="modal-content">

					      <div className="modal-header">
					        <h4 className="modal-title">Update Todo</h4>
					        <button type="button" className="close" 
					        data-dismiss="modal"
					        onClick={() => setDescription(allTodo.description)}
					        >&times;</button>
					      </div>

					      <div className="modal-body">
					        <input type="text" className="form-control"
					        id="upddescription" value={description} 
					        onChange={ e=> setDescription(e.target.value) } />
					      </div>

					      <div className="modal-footer">
					        <button type="button" className="btn btn-warning" 
					        data-dismiss="modal"
					        onClick={e => updateDescription(e)}
					        >Edit</button>
					        <button type="button" className="btn btn-danger" data-dismiss="modal"
					        onClick={() => setDescription(allTodo.description)}>Cancel</button>
					      </div>

					    </div>
					  </div>
					</div>
			</Fragment>
			)
	}
export default EditTodo;