import React from "react";

class SearchTodo extends React.Component {

	constructor(props) {
		super(props);
	}

	handleKeyPress(e) {
		const { onSearch } = this.props;

		if (e.key === "Enter") {
			if (onSearch) {
				onSearch(e.target.value);
			}
		}
	}

	render() {
		const { onSearch } = this.props;
		
		return (
			<div className="search-todo">
				<input ref="search" type="text" placeholder="Enter todo name" onKeyDown={(e) => this.handleKeyPress(e)} />
				<button onClick={() => onSearch(this.refs.search.value)}>Search</button>
			</div>
		);
	}
};

SearchTodo.propTypes = {
	"onSearch": React.PropTypes.func
}

export default SearchTodo;