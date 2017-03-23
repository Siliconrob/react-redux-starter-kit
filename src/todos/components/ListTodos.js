import React from "react";
import Todo from "./Todo";

const ListTodos = ({ todos, onDelete }) => {
	console.log(todos);
	return (
		<div className="todos">
			{
				todos.map(
					(todo, index) => <Todo key={index} todo={todo} index={index} onDelete={onDelete} />
				)
			}
		</div>
	);
};

ListTodos.propTypes = {
	"todos": React.PropTypes.array,
	"onDelete": React.PropTypes.func
}

export default ListTodos;