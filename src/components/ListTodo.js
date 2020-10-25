import React, { Fragment, useEffect, useState } from "react";
import EditTodo  from './EditTodo';
	

	const ListTodo = () => {
		const [ getAllTodo, setTodo ] = useState([]);

		// delTodo applied on table deleting entry by todo_id
		const  delTodo = async id => {
			try{
				const deleteTodo = await fetch(`https://guarded-earth-77991.herokuapp.com/deleteSelectTodo/${id}`, {
					method: "DELETE",
      				headers: {'Content-Type': 'application/json'}
				});
				setTodo(getAllTodo.filter(allTodo => allTodo.todo_id !== id))
				console.log(deleteTodo);
			} catch(err){
				console.error(err.message);
			}
		}

		const getTodo = async() => {
			try{
				const response = await fetch("https://guarded-earth-77991.herokuapp.com/getAllTodo");
				const jsonData = await response.json();
				
				setTodo(jsonData);
			}	catch(err){
				console.error(err.message);
			}
		};
		useEffect(() => {
			getTodo();
		}, []);

		return(
			<Fragment>
			{" "}
			<div className="mx-5">
				<table className="table mt-5 text-center">
					<thead>
						<tr>
							<th>Description</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>	
					</thead>
					<tbody>
						{getAllTodo.map(allTodo => (
							<tr key={allTodo.todo_id}>
								<td>{allTodo.description}</td>
								<td>
									<EditTodo allTodo={allTodo} />
								</td>
								<td><input className="btn btn-danger" 
								onClick={() => delTodo(allTodo.todo_id)}
								type="submit" value="Delete" /></td>
							</tr>
							) )}
					</tbody>
				</table>
			</div>
			</Fragment>
			);


	}

export default ListTodo;