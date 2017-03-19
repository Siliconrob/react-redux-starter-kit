(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	console.log(container);

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

},{"./pages":4,"./store":6,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux"}],2:[function(require,module,exports){
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

},{"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var TodosPage = function TodosPage(_ref) {
	_objectDestructuringEmpty(_ref);

	return _react2.default.createElement(
		"div",
		{ className: "page" },
		"Todos page"
	);
};

exports.default = TodosPage;

},{"react":"react"}],4:[function(require,module,exports){
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

},{"./components/ProjectsPage":2,"./components/TodosPage":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

exports.default = (0, _redux.combineReducers)({
	"routing": _reactRouterRedux.routerReducer
});

},{"react-router-redux":"react-router-redux","redux":"redux"}],6:[function(require,module,exports){
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

},{"./rootReducer":5,"redux":"redux","redux-thunk":"redux-thunk"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBsaWNhdGlvblxcaW5kZXguanMiLCJhcHBsaWNhdGlvblxccGFnZXNcXGNvbXBvbmVudHNcXFByb2plY3RzUGFnZS5qcyIsImFwcGxpY2F0aW9uXFxwYWdlc1xcY29tcG9uZW50c1xcVG9kb3NQYWdlLmpzIiwiYXBwbGljYXRpb25cXHBhZ2VzXFxpbmRleC5qcyIsImFwcGxpY2F0aW9uXFxyb290UmVkdWNlci5qcyIsImFwcGxpY2F0aW9uXFxzdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUdBOzs7O0FBR0E7O0FBQ0E7O0FBR0E7Ozs7QUFSQTtBQVVBLFNBQVMsUUFBVCxHQUFvQixVQUFVLFNBQVYsRUFBcUI7QUFDeEMsS0FBTSxRQUFRLHNCQUFkO0FBQ0EsS0FBTSxVQUFVLHNFQUFrQyxLQUFsQyxDQUFoQjs7QUFFQSxTQUFRLEdBQVIsQ0FBWSxTQUFaOztBQUVBLG9CQUFTLE1BQVQsQ0FDQztBQUFBO0FBQUEsSUFBVSxPQUFPLEtBQWpCO0FBQ0M7QUFBQTtBQUFBLEtBQVEsU0FBUyxPQUFqQjtBQUNDLHVEQUFPLE1BQUssR0FBWixFQUFnQiwyQkFBaEIsR0FERDtBQUVDLHVEQUFPLE1BQUssV0FBWixFQUF3Qiw4QkFBeEI7QUFGRDtBQURELEVBREQsRUFPQyxTQVBEO0FBU0EsQ0FmRDs7QUFpQkE7OztBQXBCQTs7O0FBSkE7QUF5QkEsU0FBUyxRQUFULENBQWtCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFsQjs7Ozs7Ozs7O0FDaENBOzs7Ozs7OztBQUVBLElBQU0sZUFBZSxTQUFmLFlBQWUsT0FBUztBQUFBOztBQUU3QixRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUsTUFBZjtBQUFBO0FBQUEsRUFERDtBQUdBLENBTEQ7O2tCQU9lLFk7Ozs7Ozs7OztBQ1RmOzs7Ozs7OztBQUVBLElBQU0sWUFBWSxTQUFaLFNBQVksT0FBUztBQUFBOztBQUUxQixRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUsTUFBZjtBQUFBO0FBQUEsRUFERDtBQUdBLENBTEQ7O2tCQU9lLFM7Ozs7Ozs7Ozs7QUNUZjs7OztBQUNBOzs7Ozs7UUFHQyxTO1FBQ0EsWTs7Ozs7Ozs7O0FDTEQ7O0FBQ0E7O2tCQUVlLDRCQUFnQjtBQUM5QjtBQUQ4QixDQUFoQixDOzs7Ozs7Ozs7a0JDR0EsWUFBWTtBQUMxQixLQUFJLGFBQWEsaURBQWpCO0FBQ0EsS0FBSSxRQUFRLCtDQUF5QixZQUF6QixFQUF1QyxVQUF2QyxDQUFaOztBQUVBLFFBQU8sS0FBUDtBQUNBLEM7O0FBWEQ7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxlQUFlLEVBQXJCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbi8qKiBTdG9yZSAqL1xyXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcclxuXHJcbi8qKiBSb3V0aW5nICovXHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGhhc2hIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcclxuXHJcbi8qKiBQYWdlcyAqL1xyXG5pbXBvcnQgeyBUb2Rvc1BhZ2UsIFByb2plY3RzUGFnZSB9IGZyb20gXCJwYWdlc1wiO1xyXG5cclxuZG9jdW1lbnQuc3RhcnRBcHAgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XHJcblx0Y29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSgpO1xyXG5cdGNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShoYXNoSGlzdG9yeSwgc3RvcmUpO1xyXG5cdFxyXG5cdGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XHJcblxyXG5cdFJlYWN0RE9NLnJlbmRlcihcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHQ8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17VG9kb3NQYWdlfSAvPlxyXG5cdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL3Byb2plY3RzXCIgY29tcG9uZW50PXtQcm9qZWN0c1BhZ2V9IC8+XHJcblx0XHRcdDwvUm91dGVyPlxyXG5cdFx0PC9Qcm92aWRlcj4sXHJcblx0XHRjb250YWluZXJcclxuXHQpO1xyXG59XHJcblxyXG4vKiogU3RhcnQgYXBwICovXHJcbmRvY3VtZW50LnN0YXJ0QXBwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQcm9qZWN0c1BhZ2UgPSAoeyB9KSA9PiB7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5Qcm9qZWN0cyBwYWdlPC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1BhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVG9kb3NQYWdlID0gKHsgfSkgPT4ge1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+VG9kb3MgcGFnZTwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb3NQYWdlOyIsImltcG9ydCBUb2Rvc1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2Rvc1BhZ2VcIjtcclxuaW1wb3J0IFByb2plY3RzUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RzUGFnZVwiO1xyXG5cclxuZXhwb3J0IHtcclxuXHRUb2Rvc1BhZ2UsXHJcblx0UHJvamVjdHNQYWdlXHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0XCJyb3V0aW5nXCI6IHJvdXRlclJlZHVjZXJcclxufSkiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yb290UmVkdWNlclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcblx0bGV0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKTtcclxuXHRsZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBtaWRkbGV3YXJlKTtcclxuXHJcblx0cmV0dXJuIHN0b3JlO1xyXG59Il19
