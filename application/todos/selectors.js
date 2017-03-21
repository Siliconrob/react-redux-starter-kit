import { createSelector } from "reselect"

const todos = state => state.todos.items;

export const all = createSelector(
	todos,
	state => state.todos.search,
	(todos, search) => {
		return todos.filter(
			(todo) => {
				if (search === "") {
					return true;
				}

				return todo.title.indexOf(search) > -1;
			}
		)
	}
)
export const status = state => state.todos.isFetching ? "loading" : "ready";