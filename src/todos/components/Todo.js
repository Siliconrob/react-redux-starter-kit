import React from "react";
import moment from "moment";

const Todo = ({ todo, index, onDelete }) => {
	let css = "todo";

	if (index % 2) {
		css += " odd";
	}

	return (
		<div className={css}>
			<div className="title">
				{index + 1}. {todo.title}
			</div>
			<label>{moment(todo.createdAt).format("DD MMM YYYY")}</label>
			<div><button onClick={() => onDelete(todo)}>Delete</button></div>
		</div>
	);
};

Todo.propTypes = {
	"todo": React.PropTypes.object,
	"index": React.PropTypes.number,
	"onDelete": React.PropTypes.func
}

export default Todo;