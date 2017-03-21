import * as selectors from "./selectors";
import * as constants from "./constants";
import * as actions from "./actions";
import reducer from "./reducer";

import ViewTodos from "./views/ViewTodos";

export default {
	actions,
	reducer,
	selectors,
	constants
}

export {
	ViewTodos
}