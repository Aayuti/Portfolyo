"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/DataFetcher.js":
/*!***************************************!*\
  !*** ./src/components/DataFetcher.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction DataFetcher(param) {\n    var url = param.url, children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), userData = ref[0], setUserData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), skillsData = ref1[0], setSkillsData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), servicesData = ref2[0], setServicesData = ref2[1]; // Add state for services data\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), timelineData = ref3[0], setTimelineData = ref3[1]; // Add state for services data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n                var response, jsonData, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                3,\n                                ,\n                                4\n                            ]);\n                            return [\n                                4,\n                                fetch(url)\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            if (!response.ok) {\n                                throw new Error(\"Failed to fetch data\");\n                            }\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            jsonData = _state.sent();\n                            console.log(\"Fetched data:\", jsonData);\n                            setUserData(jsonData.user);\n                            setSkillsData(jsonData.user.skills);\n                            setServicesData(jsonData.user.services); // Set services data state\n                            setTimelineData(jsonData.user.timeline); // Set services data state\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.error(\"Error fetching data:\", error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, [\n        url\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children(userData, skillsData, servicesData)\n    }, void 0, false); // Pass servicesData to children\n}\n_s(DataFetcher, \"UUYC9u4QEEGu8m7jcKdMqvQ7wOU=\");\n_c = DataFetcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataFetcher);\nvar _c;\n$RefreshReg$(_c, \"DataFetcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXRhRmV0Y2hlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFBbUQ7QUFFbkQsU0FBU0csV0FBVyxDQUFDLEtBQWlCLEVBQUU7UUFBakJDLEdBQUcsR0FBTCxLQUFpQixDQUFmQSxHQUFHLEVBQUVDLFFBQVEsR0FBZixLQUFpQixDQUFWQSxRQUFROztJQUNsQyxJQUFnQ0gsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF2Q0ksUUFBUSxHQUFpQkosR0FBYyxHQUEvQixFQUFFSyxXQUFXLEdBQUlMLEdBQWMsR0FBbEI7SUFDNUIsSUFBb0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBM0NNLFVBQVUsR0FBbUJOLElBQWMsR0FBakMsRUFBRU8sYUFBYSxHQUFJUCxJQUFjLEdBQWxCO0lBQ2hDLElBQXdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQS9DUSxZQUFZLEdBQXFCUixJQUFjLEdBQW5DLEVBQUVTLGVBQWUsR0FBSVQsSUFBYyxHQUFsQixFQUFvQiw4QkFBOEI7SUFDdEYsSUFBd0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBL0NVLFlBQVksR0FBcUJWLElBQWMsR0FBbkMsRUFBRVcsZUFBZSxHQUFJWCxJQUFjLEdBQWxCLEVBQW9CLDhCQUE4QjtJQUV0RkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTWEsU0FBUzt1QkFBRywrRkFBWTtvQkFFcEJDLFFBQVEsRUFLUkMsUUFBUSxFQU1QQyxLQUFLOzs7Ozs7Ozs7OzRCQVhLOztnQ0FBTUMsS0FBSyxDQUFDZCxHQUFHLENBQUM7OEJBQUE7OzRCQUEzQlcsUUFBUSxHQUFHLGFBQWdCOzRCQUNqQyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0ksRUFBRSxFQUFFO2dDQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzRCQUMxQyxDQUFDOzRCQUVnQjs7Z0NBQU1MLFFBQVEsQ0FBQ00sSUFBSSxFQUFFOzhCQUFBOzs0QkFBaENMLFFBQVEsR0FBRyxhQUFxQjs0QkFDdENNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRVAsUUFBUSxDQUFDLENBQUM7NEJBQ3ZDVCxXQUFXLENBQUNTLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLENBQUM7NEJBQzNCZixhQUFhLENBQUNPLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs0QkFDcENkLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDUSxJQUFJLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUMsMEJBQTBCOzRCQUNuRWIsZUFBZSxDQUFDRyxRQUFRLENBQUNRLElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7Ozs7Ozs0QkFDNURWLEtBQUs7NEJBQ1pLLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUFFakQsQ0FBQzs0QkFoQktILFNBQVM7OztXQWdCZDtRQUVEQSxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUMsRUFBRTtRQUFDVixHQUFHO0tBQUMsQ0FBQyxDQUFDO0lBRVYscUJBQU87a0JBQUdDLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFRSxVQUFVLEVBQUVFLFlBQVksQ0FBRztxQkFBSSxDQUFDLENBQUMsZ0NBQWdDO0FBQ2hHLENBQUM7R0E3QlFQLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQStCcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EYXRhRmV0Y2hlci5qcz83YjVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRGF0YUZldGNoZXIoeyB1cmwsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtza2lsbHNEYXRhLCBzZXRTa2lsbHNEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzZXJ2aWNlc0RhdGEsIHNldFNlcnZpY2VzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gQWRkIHN0YXRlIGZvciBzZXJ2aWNlcyBkYXRhXHJcbiAgY29uc3QgW3RpbWVsaW5lRGF0YSwgc2V0VGltZWxpbmVEYXRhXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBBZGQgc3RhdGUgZm9yIHNlcnZpY2VzIGRhdGFcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBkYXRhOicsIGpzb25EYXRhKTtcclxuICAgICAgICBzZXRVc2VyRGF0YShqc29uRGF0YS51c2VyKTtcclxuICAgICAgICBzZXRTa2lsbHNEYXRhKGpzb25EYXRhLnVzZXIuc2tpbGxzKTtcclxuICAgICAgICBzZXRTZXJ2aWNlc0RhdGEoanNvbkRhdGEudXNlci5zZXJ2aWNlcyk7IC8vIFNldCBzZXJ2aWNlcyBkYXRhIHN0YXRlXHJcbiAgICAgICAgc2V0VGltZWxpbmVEYXRhKGpzb25EYXRhLnVzZXIudGltZWxpbmUpOyAvLyBTZXQgc2VydmljZXMgZGF0YSBzdGF0ZVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFt1cmxdKTtcclxuXHJcbiAgcmV0dXJuIDw+e2NoaWxkcmVuKHVzZXJEYXRhLCBza2lsbHNEYXRhLCBzZXJ2aWNlc0RhdGEsICl9PC8+OyAvLyBQYXNzIHNlcnZpY2VzRGF0YSB0byBjaGlsZHJlblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhRmV0Y2hlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEYXRhRmV0Y2hlciIsInVybCIsImNoaWxkcmVuIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInNraWxsc0RhdGEiLCJzZXRTa2lsbHNEYXRhIiwic2VydmljZXNEYXRhIiwic2V0U2VydmljZXNEYXRhIiwidGltZWxpbmVEYXRhIiwic2V0VGltZWxpbmVEYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJqc29uRGF0YSIsImVycm9yIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwic2tpbGxzIiwic2VydmljZXMiLCJ0aW1lbGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DataFetcher.js\n"));

/***/ })

});