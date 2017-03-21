import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as selectors from "../selectors";
import * as actions from "../actions";

import ListTodos from "../components/ListTodos";
import SearchTodo from "../components/SearchTodo";

class ViewTodos extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { onReady } = this.props;
		onReady();
	}

	render() {
		const { todos, status, onDeleteTodo, onSearch } = this.props;

		return (
			<div>
				<SearchTodo onSearch={onSearch} />
				{status == "loading"
					? <div>Loading...</div>
					: (
						<div>
							<ListTodos todos={todos} onDelete={onDeleteTodo} />
						</div>
					)
				}
			</div>
		);
	}
};

ViewTodos.propTypes = {
	"todos": PropTypes.array,
	"status": PropTypes.string,
	"onReady": PropTypes.func,
	"onDeleteTodo": PropTypes.func,
	"onSearch": PropTypes.func,
}

const mapState = (state) => {
	return {
		"todos": selectors.all(state),
		"status": selectors.status(state)
	}
}

const mapDispatch = (dispatch) => {
	return {
		"onReady": () => {
			dispatch(actions.loadTodos());
		},
		"onDeleteTodo": (todo) => {
			dispatch(actions.removeTodo(todo.id));
		},
		"onSearch": (value) => {
			dispatch(actions.search(value));
		}
	}
}

export default connect(mapState, mapDispatch)(ViewTodos);