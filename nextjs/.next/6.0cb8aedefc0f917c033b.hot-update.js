webpackHotUpdate(6,{

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _User = __webpack_require__(412);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\WebDev\\playground-react\\nextjs\\pages\\auth\\index.js?entry";


var authIndexPage = function authIndexPage(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "The Auth Index Page - ", props.appName), _react2.default.createElement(_User2.default, { name: "Jason", age: 32, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

authIndexPage.getInitialProps = function (context) {
  var promise = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve({ appName: "Amazing App (Auth)" });
    }, 1000);
  });
  return promise;
};

exports.default = authIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhdXRoXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlVzZXIiLCJhdXRoSW5kZXhQYWdlIiwicHJvcHMiLCJhcHBOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLGNBQUEsQUFBQyxPQUFEO3lCQUNwQixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUEyQixnQ0FEN0IsQUFDRSxBQUFpQyxBQUNqQywwQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxTQUFRLEtBQW5CLEFBQXdCO2dCQUF4QjtrQkFIa0IsQUFDcEIsQUFFRTtBQUFBOztBQUhKOztBQU9BLGNBQUEsQUFBYyxrQkFBa0IsbUJBQVcsQUFDekM7TUFBTSxnQ0FBc0IsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQy9DO2VBQVcsWUFBTSxBQUNmO2NBQVEsRUFBRSxTQUFWLEFBQVEsQUFBVyxBQUNwQjtBQUZELE9BQUEsQUFFRyxBQUNKO0FBSkQsQUFBZ0IsQUFLaEIsR0FMZ0I7U0FLaEIsQUFBTyxBQUNSO0FBUEQsQUFTQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9XZWJEZXYvcGxheWdyb3VuZC1yZWFjdC9uZXh0anMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\WebDev\\playground-react\\nextjs\\pages\\auth\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\WebDev\\playground-react\\nextjs\\pages\\auth\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(81)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/auth\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wY2I4YWVkZWZjMGY5MTdjMDMzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aD9lM2NiMGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlclwiO1xuXG5jb25zdCBhdXRoSW5kZXhQYWdlID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPlRoZSBBdXRoIEluZGV4IFBhZ2UgLSB7cHJvcHMuYXBwTmFtZX08L2gxPlxuICAgIDxVc2VyIG5hbWU9XCJKYXNvblwiIGFnZT17MzJ9IC8+XG4gIDwvZGl2PlxuKTtcblxuYXV0aEluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBjb250ZXh0ID0+IHtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoeyBhcHBOYW1lOiBcIkFtYXppbmcgQXBwIChBdXRoKVwiIH0pO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoSW5kZXhQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYXV0aD9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==