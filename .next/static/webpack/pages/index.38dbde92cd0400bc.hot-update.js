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

/***/ "./src/components/Flow.jsx":
/*!*********************************!*\
  !*** ./src/components/Flow.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Flow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.mjs\");\n/* harmony import */ var reactflow_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow/dist/style.css */ \"./node_modules/reactflow/dist/style.css\");\n/* harmony import */ var reactflow_dist_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactflow_dist_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Card,Col,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Button,Card,Col,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _StartNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StartNode */ \"./src/components/StartNode.jsx\");\n/* harmony import */ var _HelloNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HelloNode */ \"./src/components/HelloNode.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst initialNodes = [\n    {\n        id: \"1\",\n        type: \"start\",\n        position: {\n            x: 0,\n            y: 0\n        },\n        data: {\n            label: \"Начало\"\n        }\n    },\n    {\n        id: \"2\",\n        type: \"hello\",\n        position: {\n            x: 200,\n            y: 0\n        },\n        data: {\n            label: \"Начало\"\n        }\n    },\n    {\n        id: \"2a\",\n        data: {\n            label: \"Node A.1\"\n        },\n        position: {\n            x: 10,\n            y: 50\n        },\n        parentNode: \"2\"\n    }\n];\nconst initialEdges = [\n    {\n        id: \"1-2a\",\n        source: \"1\",\n        target: \"2\"\n    },\n    {\n        id: \"2-2a\",\n        source: \"2\",\n        target: \"2a\"\n    }\n];\nconst nodeTypes = {\n    start: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StartNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            ...props,\n            additionalProp: \"valueForStart\"\n        }, void 0, false, {\n            fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n            lineNumber: 44,\n            columnNumber: 21\n        }, undefined),\n    hello: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HelloNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            ...props,\n            additionalProp: \"valueForHello\"\n        }, void 0, false, {\n            fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n            lineNumber: 45,\n            columnNumber: 21\n        }, undefined)\n};\nfunction Flow() {\n    _s();\n    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.useNodesState)(initialNodes);\n    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.useEdgesState)(initialEdges);\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>{\n        const newEdge = {\n            id: \"e-\".concat(params.source, \"-\").concat(params.target),\n            source: params.source,\n            target: params.target\n        };\n        setEdges((prevEdges)=>[\n                ...prevEdges,\n                newEdge\n            ]);\n    }, [\n        setEdges\n    ]);\n    const handleAddStartNode = ()=>{\n        const newNode = {\n            id: \"startNode\",\n            type: \"start\",\n            position: {\n                x: 0,\n                y: 0\n            },\n            data: {\n                label: \"Начало\"\n            }\n        };\n        setNodes((prevNodes)=>[\n                ...prevNodes,\n                newNode\n            ]);\n    };\n    const handleAddHelloNode = ()=>{\n        const randomSuffix = Math.floor(Math.random() * 1000);\n        const newNode = {\n            id: \"helloNode-\".concat(randomSuffix),\n            type: \"hello\",\n            position: {\n                x: 200,\n                y: 0\n            },\n            data: {\n                label: \"Привет! \".concat(randomSuffix)\n            }\n        };\n        setNodes((prevNodes)=>[\n                ...prevNodes,\n                newNode\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n        className: \"w-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                xs: 8,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"100%\",\n                        height: \"100vh\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        nodes: nodes,\n                        edges: edges,\n                        onNodesChange: onNodesChange,\n                        onEdgesChange: onEdgesChange,\n                        onConnect: onConnect,\n                        nodeTypes: nodeTypes,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_5__.Controls, {}, void 0, false, {\n                                fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_5__.MiniMap, {}, void 0, false, {\n                                fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_5__.Background, {\n                                variant: \"dots\",\n                                gap: 12,\n                                size: 1\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                    className: \"h-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Title, {\n                                children: \"Редактор\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                        md: 6,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                            className: \"mb-2 w-100\",\n                                            onClick: handleAddStartNode,\n                                            children: 'Добавить \"Старт\"'\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                        md: 6,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                            className: \"mb-2 w-100\",\n                                            onClick: handleAddHelloNode,\n                                            children: 'Добавить \"Привет\"'\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dmitrijsacko/Work/g-code/block_diagram/src/components/Flow.jsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"mmoxFmHOvuuD77aIm5gUqDEdUKU=\", false, function() {\n    return [\n        reactflow__WEBPACK_IMPORTED_MODULE_5__.useNodesState,\n        reactflow__WEBPACK_IMPORTED_MODULE_5__.useEdgesState\n    ];\n});\n_c = Flow;\nvar _c;\n$RefreshReg$(_c, \"Flow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVQTtnQ0FBQ29ELFNBQVE7Z0NBQU9DLEtBQUs7Z0NBQUlDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWhELDhEQUFDbEQsMkZBQUdBOzBCQUNGLDRFQUFDQyw0RkFBSUE7b0JBQUN5QyxXQUFVOzhCQUNkLDRFQUFDekMsNEZBQUlBLENBQUNrRCxJQUFJOzswQ0FDUiw4REFBQ2xELDRGQUFJQSxDQUFDbUQsS0FBSzswQ0FBQzs7Ozs7OzBDQUNaLDhEQUFDbEQsMkZBQUdBOztrREFDRiw4REFBQ0YsMkZBQUdBO3dDQUFDcUQsSUFBSTtrREFDUCw0RUFBQ2xELDhGQUFNQTs0Q0FBQ3VDLFdBQVU7NENBQWFZLFNBQVNwQjtzREFBb0I7Ozs7Ozs7Ozs7O2tEQUk5RCw4REFBQ2xDLDJGQUFHQTt3Q0FBQ3FELElBQUk7a0RBQ1AsNEVBQUNsRCw4RkFBTUE7NENBQUN1QyxXQUFVOzRDQUFhWSxTQUFTakI7c0RBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUU7R0E5RXdCZDs7UUFDbUIxQixvREFBYUE7UUFDYkMsb0RBQWFBOzs7S0FGaEN5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GbG93LmpzeD83Y2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdEZsb3csIHtcbiAgTWluaU1hcCxcbiAgQ29udHJvbHMsXG4gIEJhY2tncm91bmQsXG4gIHVzZU5vZGVzU3RhdGUsXG4gIHVzZUVkZ2VzU3RhdGUsXG4gIGFkZEVkZ2UsXG59IGZyb20gJ3JlYWN0Zmxvdyc7XG5pbXBvcnQgJ3JlYWN0Zmxvdy9kaXN0L3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBDb2wsIENhcmQsIFJvdywgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBTdGFydE5vZGUgZnJvbSAnLi9TdGFydE5vZGUnO1xuaW1wb3J0IEhlbGxvTm9kZSBmcm9tICcuL0hlbGxvTm9kZSc7XG5cbmNvbnN0IGluaXRpYWxOb2RlcyA9IFtcbiAge1xuICAgIGlkOiAnMScsXG4gICAgdHlwZTogJ3N0YXJ0JyxcbiAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgZGF0YTogeyBsYWJlbDogJ9Cd0LDRh9Cw0LvQvicgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnMicsXG4gICAgdHlwZTogJ2hlbGxvJyxcbiAgICBwb3NpdGlvbjogeyB4OiAyMDAsIHk6IDAgfSxcbiAgICBkYXRhOiB7IGxhYmVsOiAn0J3QsNGH0LDQu9C+JywgfSxcbiAgfSxcblxuICB7XG4gICAgaWQ6ICcyYScsXG4gICAgZGF0YTogeyBsYWJlbDogJ05vZGUgQS4xJyB9LFxuICAgIHBvc2l0aW9uOiB7IHg6IDEwLCB5OiA1MCB9LFxuICAgIHBhcmVudE5vZGU6ICcyJyxcbiAgfSxcblxuXG5dO1xuY29uc3QgaW5pdGlhbEVkZ2VzID0gW1xuICB7IGlkOiAnMS0yYScsIHNvdXJjZTogJzEnLCB0YXJnZXQ6ICcyJyB9LFxuICB7IGlkOiAnMi0yYScsIHNvdXJjZTogJzInLCB0YXJnZXQ6ICcyYScgfSxcbl07XG5cbmNvbnN0IG5vZGVUeXBlcyA9IHtcbiAgc3RhcnQ6IChwcm9wcykgPT4gPFN0YXJ0Tm9kZSB7Li4ucHJvcHN9IGFkZGl0aW9uYWxQcm9wPVwidmFsdWVGb3JTdGFydFwiIC8+LFxuICBoZWxsbzogKHByb3BzKSA9PiA8SGVsbG9Ob2RlIHsuLi5wcm9wc30gYWRkaXRpb25hbFByb3A9XCJ2YWx1ZUZvckhlbGxvXCIgLz4sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbG93KCkge1xuICBjb25zdCBbbm9kZXMsIHNldE5vZGVzLCBvbk5vZGVzQ2hhbmdlXSA9IHVzZU5vZGVzU3RhdGUoaW5pdGlhbE5vZGVzKTtcbiAgY29uc3QgW2VkZ2VzLCBzZXRFZGdlcywgb25FZGdlc0NoYW5nZV0gPSB1c2VFZGdlc1N0YXRlKGluaXRpYWxFZGdlcyk7XG5cbiAgY29uc3Qgb25Db25uZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHBhcmFtcykgPT4ge1xuICAgICAgY29uc3QgbmV3RWRnZSA9IHtcbiAgICAgICAgaWQ6IGBlLSR7cGFyYW1zLnNvdXJjZX0tJHtwYXJhbXMudGFyZ2V0fWAsXG4gICAgICAgIHNvdXJjZTogcGFyYW1zLnNvdXJjZSxcbiAgICAgICAgdGFyZ2V0OiBwYXJhbXMudGFyZ2V0LFxuICAgICAgfTtcbiAgICAgIHNldEVkZ2VzKChwcmV2RWRnZXMpID0+IFsuLi5wcmV2RWRnZXMsIG5ld0VkZ2VdKTtcbiAgICB9LFxuICAgIFtzZXRFZGdlc11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVBZGRTdGFydE5vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IHtcbiAgICAgIGlkOiAnc3RhcnROb2RlJyxcbiAgICAgIHR5cGU6ICdzdGFydCcsXG4gICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICBkYXRhOiB7IGxhYmVsOiAn0J3QsNGH0LDQu9C+JyB9LFxuICAgIH07XG4gICAgc2V0Tm9kZXMoKHByZXZOb2RlcykgPT4gWy4uLnByZXZOb2RlcywgbmV3Tm9kZV0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZEhlbGxvTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21TdWZmaXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcblxuICAgIGNvbnN0IG5ld05vZGUgPSB7XG4gICAgICBpZDogYGhlbGxvTm9kZS0ke3JhbmRvbVN1ZmZpeH1gLFxuICAgICAgdHlwZTogJ2hlbGxvJyxcbiAgICAgIHBvc2l0aW9uOiB7IHg6IDIwMCwgeTogMCB9LFxuICAgICAgZGF0YTogeyBsYWJlbDogYNCf0YDQuNCy0LXRgiEgJHtyYW5kb21TdWZmaXh9YCB9LFxuICAgIH07XG4gICAgc2V0Tm9kZXMoKHByZXZOb2RlcykgPT4gWy4uLnByZXZOb2RlcywgbmV3Tm9kZV0pO1xuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICA8Q29sIHhzPXs4fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgPFJlYWN0Rmxvd1xuICAgICAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICAgICAgZWRnZXM9e2VkZ2VzfVxuICAgICAgICAgICAgb25Ob2Rlc0NoYW5nZT17b25Ob2Rlc0NoYW5nZX1cbiAgICAgICAgICAgIG9uRWRnZXNDaGFuZ2U9e29uRWRnZXNDaGFuZ2V9XG4gICAgICAgICAgICBvbkNvbm5lY3Q9e29uQ29ubmVjdH1cbiAgICAgICAgICAgIG5vZGVUeXBlcz17bm9kZVR5cGVzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb250cm9scyAvPlxuICAgICAgICAgICAgPE1pbmlNYXAgLz5cbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHZhcmlhbnQ9XCJkb3RzXCIgZ2FwPXsxMn0gc2l6ZT17MX0gLz5cbiAgICAgICAgICA8L1JlYWN0Rmxvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2w+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxDYXJkLlRpdGxlPtCg0LXQtNCw0LrRgtC+0YA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1iLTIgdy0xMDBcIiBvbkNsaWNrPXtoYW5kbGVBZGRTdGFydE5vZGV9PlxuICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjCBcItCh0YLQsNGA0YJcIlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtYi0yIHctMTAwXCIgb25DbGljaz17aGFuZGxlQWRkSGVsbG9Ob2RlfT5cbiAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0YwgXCLQn9GA0LjQstC10YJcIlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3RGbG93IiwiTWluaU1hcCIsIkNvbnRyb2xzIiwiQmFja2dyb3VuZCIsInVzZU5vZGVzU3RhdGUiLCJ1c2VFZGdlc1N0YXRlIiwiYWRkRWRnZSIsIkNvbCIsIkNhcmQiLCJSb3ciLCJCdXR0b24iLCJTdGFydE5vZGUiLCJIZWxsb05vZGUiLCJpbml0aWFsTm9kZXMiLCJpZCIsInR5cGUiLCJwb3NpdGlvbiIsIngiLCJ5IiwiZGF0YSIsImxhYmVsIiwicGFyZW50Tm9kZSIsImluaXRpYWxFZGdlcyIsInNvdXJjZSIsInRhcmdldCIsIm5vZGVUeXBlcyIsInN0YXJ0IiwicHJvcHMiLCJhZGRpdGlvbmFsUHJvcCIsImhlbGxvIiwiRmxvdyIsIm5vZGVzIiwic2V0Tm9kZXMiLCJvbk5vZGVzQ2hhbmdlIiwiZWRnZXMiLCJzZXRFZGdlcyIsIm9uRWRnZXNDaGFuZ2UiLCJvbkNvbm5lY3QiLCJwYXJhbXMiLCJuZXdFZGdlIiwicHJldkVkZ2VzIiwiaGFuZGxlQWRkU3RhcnROb2RlIiwibmV3Tm9kZSIsInByZXZOb2RlcyIsImhhbmRsZUFkZEhlbGxvTm9kZSIsInJhbmRvbVN1ZmZpeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNsYXNzTmFtZSIsInhzIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInZhcmlhbnQiLCJnYXAiLCJzaXplIiwiQm9keSIsIlRpdGxlIiwibWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Flow.jsx\n"));

/***/ })

});