(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function defaultEqualityCheck(a, b) {
  return a === b;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
      return equalityCheck(value, lastArgs[index]);
    })) {
      lastResult = func.apply(undefined, args);
    }
    lastArgs = args;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    memoizeOptions[_key2 - 1] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      funcs[_key3] = arguments[_key3];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      return resultFunc.apply(undefined, arguments);
    }].concat(memoizeOptions));

    var selector = function selector(state, props) {
      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      var params = dependencies.map(function (dependency) {
        return dependency.apply(undefined, [state, props].concat(args));
      });
      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
    };

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      values[_key5] = arguments[_key5];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}
},{}],2:[function(require,module,exports){
"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

var _reactRouter = require("react-router");

var _reactRouterRedux = require("react-router-redux");

var _pages = require("./pages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Store */
document.startApp = function (container) {
	var store = (0, _store2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store);

	_reactDom2.default.render(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: history },
			_react2.default.createElement(_reactRouter.Route, { path: "/", component: _pages.TodosPage }),
			_react2.default.createElement(_reactRouter.Route, { path: "/projects", component: _pages.ProjectsPage })
		)
	), container);
};

/** Start app */


/** Pages */


/** Routing */
document.startApp(document.getElementById("app"));

},{"./pages":5,"./store":7,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var ProjectsPage = function ProjectsPage(_ref) {
	_objectDestructuringEmpty(_ref);

	return _react2.default.createElement(
		"div",
		{ className: "page" },
		"Projects page"
	);
};

exports.default = ProjectsPage;

},{"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _todos = require("../../todos");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var TodosPage = function TodosPage(_ref) {
	_objectDestructuringEmpty(_ref);

	return _react2.default.createElement(
		"div",
		{ className: "page" },
		_react2.default.createElement(_todos.ViewTodos, null)
	);
};

exports.default = TodosPage;

},{"../../todos":13,"react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProjectsPage = exports.TodosPage = undefined;

var _TodosPage = require("./components/TodosPage");

var _TodosPage2 = _interopRequireDefault(_TodosPage);

var _ProjectsPage = require("./components/ProjectsPage");

var _ProjectsPage2 = _interopRequireDefault(_ProjectsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TodosPage = _TodosPage2.default;
exports.ProjectsPage = _ProjectsPage2.default;

},{"./components/ProjectsPage":3,"./components/TodosPage":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _todos = require("./todos");

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	"routing": _reactRouterRedux.routerReducer,
	"todos": _todos2.default.reducer
});

},{"./todos":13,"react-router-redux":"react-router-redux","redux":"redux"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
	var store = (0, _redux.createStore)(_rootReducer2.default, initialState, middleware);

	return store;
};

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _rootReducer = require("./rootReducer");

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

},{"./rootReducer":6,"redux":"redux","redux-thunk":"redux-thunk"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loadTodos = exports.search = exports.removeTodo = exports.addTodo = undefined;

var _constants = require("./constants");

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addTodo = exports.addTodo = function addTodo(todo) {
	return {
		type: constants.ADD,
		payload: todo
	};
};

var removeTodo = exports.removeTodo = function removeTodo(id) {
	return {
		type: constants.DELETE,
		payload: id
	};
};

var search = exports.search = function search(value) {
	return {
		type: constants.SEARCH,
		payload: value
	};
};

var fetching = function fetching() {
	return {
		type: constants.LOAD
	};
};

var fetchComplete = function fetchComplete(todos) {
	return {
		type: constants.LOAD_SUCCESS,
		payload: todos
	};
};

// Mockup data
// This data should be loaded form server
var todos = [{
	id: 1,
	title: "You should do this",
	createdAt: new Date()
}, {
	id: 2,
	title: "Another todo for @username",
	createdAt: new Date()
}];

var loadTodos = exports.loadTodos = function loadTodos() {
	return function (dispatch) {
		dispatch(fetching());

		// This is a test to show you how to use
		// async action. Replace setTimeout wit a call 
		// to a REST api. eg. fetch(`https://www.reddit.com/r/${subreddit}.json`)
		setTimeout(function () {
			dispatch(fetchComplete(todos));
		}, 1000);
	};
};

},{"./constants":12}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Todo = require("./Todo");

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListTodos = function ListTodos(_ref) {
	var todos = _ref.todos,
	    onDelete = _ref.onDelete;

	console.log(todos);
	return _react2.default.createElement(
		"div",
		{ className: "todos" },
		todos.map(function (todo, index) {
			return _react2.default.createElement(_Todo2.default, { key: index, todo: todo, index: index, onDelete: onDelete });
		})
	);
};

ListTodos.propTypes = {
	"todos": _react2.default.PropTypes.array,
	"onDelete": _react2.default.PropTypes.func
};

exports.default = ListTodos;

},{"./Todo":11,"react":"react"}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchTodo = function (_React$Component) {
	_inherits(SearchTodo, _React$Component);

	function SearchTodo(props) {
		_classCallCheck(this, SearchTodo);

		return _possibleConstructorReturn(this, (SearchTodo.__proto__ || Object.getPrototypeOf(SearchTodo)).call(this, props));
	}

	_createClass(SearchTodo, [{
		key: "handleKeyPress",
		value: function handleKeyPress(e) {
			var onSearch = this.props.onSearch;


			if (e.key === "Enter") {
				if (onSearch) {
					onSearch(e.target.value);
				}
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var onSearch = this.props.onSearch;


			return _react2.default.createElement(
				"div",
				{ className: "search-todo" },
				_react2.default.createElement("input", { ref: "search", type: "text", placeholder: "Enter todo name", onKeyDown: function onKeyDown(e) {
						return _this2.handleKeyPress(e);
					} }),
				_react2.default.createElement(
					"button",
					{ onClick: function onClick() {
							return onSearch(_this2.refs.search.value);
						} },
					"Search"
				)
			);
		}
	}]);

	return SearchTodo;
}(_react2.default.Component);

;

SearchTodo.propTypes = {
	"onSearch": _react2.default.PropTypes.func
};

exports.default = SearchTodo;

},{"react":"react"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
	var todo = _ref.todo,
	    index = _ref.index,
	    onDelete = _ref.onDelete;

	var css = "todo";

	if (index % 2) {
		css += " odd";
	}

	return _react2.default.createElement(
		"div",
		{ className: css },
		_react2.default.createElement(
			"div",
			{ className: "title" },
			index + 1,
			". ",
			todo.title
		),
		_react2.default.createElement(
			"label",
			null,
			(0, _moment2.default)(todo.createdAt).format("DD MMM YYYY")
		),
		_react2.default.createElement(
			"div",
			null,
			_react2.default.createElement(
				"button",
				{ onClick: function onClick() {
						return onDelete(todo);
					} },
				"Delete"
			)
		)
	);
};

Todo.propTypes = {
	"todo": _react2.default.PropTypes.object,
	"index": _react2.default.PropTypes.number,
	"onDelete": _react2.default.PropTypes.func
};

exports.default = Todo;

},{"moment":"moment","react":"react"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD = exports.ADD = "todos/ADD";
var DELETE = exports.DELETE = "todos/DELETE";
var SEARCH = exports.SEARCH = "todos/SEARCH";
var LOAD = exports.LOAD = "todos/LOAD";
var LOAD_ERROR = exports.LOAD_ERROR = "todos/LOAD_ERROR";
var LOAD_SUCCESS = exports.LOAD_SUCCESS = "todos/LOAD_SUCCESS";

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ViewTodos = undefined;

var _selectors = require("./selectors");

var selectors = _interopRequireWildcard(_selectors);

var _constants = require("./constants");

var constants = _interopRequireWildcard(_constants);

var _actions = require("./actions");

var actions = _interopRequireWildcard(_actions);

var _reducer = require("./reducer");

var _reducer2 = _interopRequireDefault(_reducer);

var _ViewTodos = require("./views/ViewTodos");

var _ViewTodos2 = _interopRequireDefault(_ViewTodos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
	actions: actions,
	reducer: _reducer2.default,
	selectors: selectors,
	constants: constants
};
exports.ViewTodos = _ViewTodos2.default;

},{"./actions":8,"./constants":12,"./reducer":14,"./selectors":15,"./views/ViewTodos":16}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require("./constants");

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
	isFetching: false,
	error: null,
	search: "",
	items: []
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var _ref = arguments[1];
	var type = _ref.type,
	    payload = _ref.payload;

	switch (type) {

		case constants.ADD:
			return _extends({}, state, {
				items: [].concat(_toConsumableArray(state.items), [payload])
			});

		case constants.DELETE:
			return _extends({}, state, {
				items: state.items.filter(function (value) {
					return value.id !== payload;
				})
			});

		case constants.LOAD:
			return _extends({}, state, {
				isFetching: true
			});

		case constants.SEARCH:
			return _extends({}, state, {
				search: payload
			});

		case constants.LOAD_SUCCESS:
			return _extends({}, state, {
				isFetching: false,
				items: payload
			});

		default:
			return state;

	}
};

},{"./constants":12}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.status = exports.all = undefined;

var _reselect = require("reselect");

var todos = function todos(state) {
	return state.todos.items;
};

var all = exports.all = (0, _reselect.createSelector)(todos, function (state) {
	return state.todos.search;
}, function (todos, search) {
	return todos.filter(function (todo) {
		if (search === "") {
			return true;
		}

		return todo.title.indexOf(search) > -1;
	});
});
var status = exports.status = function status(state) {
	return state.todos.isFetching ? "loading" : "ready";
};

},{"reselect":1}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _selectors = require("../selectors");

var selectors = _interopRequireWildcard(_selectors);

var _actions = require("../actions");

var actions = _interopRequireWildcard(_actions);

var _ListTodos = require("../components/ListTodos");

var _ListTodos2 = _interopRequireDefault(_ListTodos);

var _SearchTodo = require("../components/SearchTodo");

var _SearchTodo2 = _interopRequireDefault(_SearchTodo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewTodos = function (_React$Component) {
	_inherits(ViewTodos, _React$Component);

	function ViewTodos(props) {
		_classCallCheck(this, ViewTodos);

		return _possibleConstructorReturn(this, (ViewTodos.__proto__ || Object.getPrototypeOf(ViewTodos)).call(this, props));
	}

	_createClass(ViewTodos, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var onReady = this.props.onReady;

			onReady();
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    todos = _props.todos,
			    status = _props.status,
			    onDeleteTodo = _props.onDeleteTodo,
			    onSearch = _props.onSearch;


			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_SearchTodo2.default, { onSearch: onSearch }),
				status == "loading" ? _react2.default.createElement(
					"div",
					null,
					"Loading..."
				) : _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(_ListTodos2.default, { todos: todos, onDelete: onDeleteTodo })
				)
			);
		}
	}]);

	return ViewTodos;
}(_react2.default.Component);

;

ViewTodos.propTypes = {
	"todos": _react.PropTypes.array,
	"status": _react.PropTypes.string,
	"onReady": _react.PropTypes.func,
	"onDeleteTodo": _react.PropTypes.func,
	"onSearch": _react.PropTypes.func
};

var mapState = function mapState(state) {
	return {
		"todos": selectors.all(state),
		"status": selectors.status(state)
	};
};

var mapDispatch = function mapDispatch(dispatch) {
	return {
		"onReady": function onReady() {
			dispatch(actions.loadTodos());
		},
		"onDeleteTodo": function onDeleteTodo(todo) {
			dispatch(actions.removeTodo(todo.id));
		},
		"onSearch": function onSearch(value) {
			dispatch(actions.search(value));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(ViewTodos);

},{"../actions":8,"../components/ListTodos":9,"../components/SearchTodo":10,"../selectors":15,"react":"react","react-redux":"react-redux"}]},{},[2]);
