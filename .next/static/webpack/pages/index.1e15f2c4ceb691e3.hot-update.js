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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction DataFetcher(param) {\n    var url = param.url, children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), userData = ref[0], setUserData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), skillsData = ref1[0], setSkillsData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n                var response, jsonData, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                3,\n                                ,\n                                4\n                            ]);\n                            return [\n                                4,\n                                fetch(url)\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            if (!response.ok) {\n                                throw new Error(\"Failed to fetch data\");\n                            }\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            jsonData = _state.sent();\n                            setUserData(jsonData.user);\n                            setSkillsData(jsonData.skills); // Assuming skills data is located at jsonData.skills\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.error(\"Error fetching data:\", error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, [\n        \"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children(userData, skillsData)\n    }, void 0, false);\n}\n_s(DataFetcher, \"TzMbx2bAjDhvCkrav3tHkEymkoI=\");\n_c = DataFetcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataFetcher);\nvar _c;\n$RefreshReg$(_c, \"DataFetcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXRhRmV0Y2hlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFBbUQ7QUFFbkQsU0FBU0csV0FBVyxDQUFDLEtBQWlCLEVBQUU7UUFBakJDLEdBQUcsR0FBTCxLQUFpQixDQUFmQSxHQUFHLEVBQUVDLFFBQVEsR0FBZixLQUFpQixDQUFWQSxRQUFROztJQUNsQyxJQUFnQ0gsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF2Q0ksUUFBUSxHQUFpQkosR0FBYyxHQUEvQixFQUFFSyxXQUFXLEdBQUlMLEdBQWMsR0FBbEI7SUFDNUIsSUFBb0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBM0NNLFVBQVUsR0FBbUJOLElBQWMsR0FBakMsRUFBRU8sYUFBYSxHQUFJUCxJQUFjLEdBQWxCO0lBRWhDRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNUyxTQUFTO3VCQUFHLCtGQUFZO29CQUVwQkMsUUFBUSxFQUlSQyxRQUFRLEVBR1BDLEtBQUs7Ozs7Ozs7Ozs7NEJBUEs7O2dDQUFNQyxLQUFLLENBQUNWLEdBQUcsQ0FBQzs4QkFBQTs7NEJBQTNCTyxRQUFRLEdBQUcsYUFBZ0I7NEJBQ2pDLElBQUksQ0FBQ0EsUUFBUSxDQUFDSSxFQUFFLEVBQUU7Z0NBQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7NEJBQzFDLENBQUM7NEJBQ2dCOztnQ0FBTUwsUUFBUSxDQUFDTSxJQUFJLEVBQUU7OEJBQUE7OzRCQUFoQ0wsUUFBUSxHQUFHLGFBQXFCOzRCQUN0Q0wsV0FBVyxDQUFDSyxRQUFRLENBQUNNLElBQUksQ0FBQyxDQUFDOzRCQUMzQlQsYUFBYSxDQUFDRyxRQUFRLENBQUNPLE1BQU0sQ0FBQyxDQUFDLENBQUMscURBQXFEOzs7Ozs7NEJBQzlFTixLQUFLOzRCQUNaTyxPQUFPLENBQUNQLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1lBRWpELENBQUM7NEJBWktILFNBQVM7OztXQVlkO1FBRURBLFNBQVMsRUFBRSxDQUFDO0lBQ2QsQ0FBQyxFQUFFO1FBQUMsc0ZBQXNGO0tBQUMsQ0FBQyxDQUFDO0lBRTdGLHFCQUFPO2tCQUFHTCxRQUFRLENBQUNDLFFBQVEsRUFBRUUsVUFBVSxDQUFDO3FCQUFJLENBQUM7QUFDL0MsQ0FBQztHQXZCUUwsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBeUJwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RhdGFGZXRjaGVyLmpzPzdiNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBEYXRhRmV0Y2hlcih7IHVybCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NraWxsc0RhdGEsIHNldFNraWxsc0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGRhdGEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VXNlckRhdGEoanNvbkRhdGEudXNlcik7XHJcbiAgICAgICAgc2V0U2tpbGxzRGF0YShqc29uRGF0YS5za2lsbHMpOyAvLyBBc3N1bWluZyBza2lsbHMgZGF0YSBpcyBsb2NhdGVkIGF0IGpzb25EYXRhLnNraWxsc1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFsnaHR0cHM6Ly9wb3J0Zm9saW8tYmFja2VuZC0zMG1wLm9ucmVuZGVyLmNvbS9hcGkvdjEvZ2V0L3VzZXIvNjViM2EyMmMwMWQ5MDBlOTZjNDIxOWFlJ10pO1xyXG5cclxuICByZXR1cm4gPD57Y2hpbGRyZW4odXNlckRhdGEsIHNraWxsc0RhdGEpfTwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUZldGNoZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGF0YUZldGNoZXIiLCJ1cmwiLCJjaGlsZHJlbiIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJza2lsbHNEYXRhIiwic2V0U2tpbGxzRGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwianNvbkRhdGEiLCJlcnJvciIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJ1c2VyIiwic2tpbGxzIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DataFetcher.js\n"));

/***/ })

});