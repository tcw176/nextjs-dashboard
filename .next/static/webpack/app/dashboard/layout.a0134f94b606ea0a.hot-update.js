"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/ui/dashboard/nav-links.tsx":
/*!****************************************!*\
  !*** ./app/ui/dashboard/nav-links.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavLinks)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-20240704/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-20240704/node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-20240704/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Map of links to display in the side navigation.\n// Depending on the size of the application, this would be stored in a database.\nconst links = [\n    {\n        name: 'Home',\n        href: '/dashboard',\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: 'Invoices',\n        href: '/dashboard/invoices',\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        name: 'Customers',\n        href: '/dashboard/customers',\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }\n];\nfunction NavLinks() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    console.log(pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((link)=>{\n            const LinkIcon = link.icon;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: link.href,\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3', {\n                    'bg-amber-100 text-blue-600': pathname === link.href\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkIcon, {\n                        className: \"w-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ty\\\\Documents\\\\aweb\\\\nextjs\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:block\",\n                        children: link.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ty\\\\Documents\\\\aweb\\\\nextjs\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, link.name, true, {\n                fileName: \"C:\\\\Users\\\\Ty\\\\Documents\\\\aweb\\\\nextjs\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(NavLinks, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavLinks;\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvbmF2LWxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBTXFDO0FBQ1I7QUFDaUI7QUFDdEI7QUFFeEIsa0RBQWtEO0FBQ2xELGdGQUFnRjtBQUNoRixNQUFNTSxRQUFRO0lBQ1o7UUFBRUMsTUFBTTtRQUFRQyxNQUFNO1FBQWNDLE1BQU1SLHNJQUFRQTtJQUFDO0lBQ25EO1FBQ0VNLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNUCxzSUFBcUJBO0lBQzdCO0lBQ0E7UUFBRUssTUFBTTtRQUFhQyxNQUFNO1FBQXdCQyxNQUFNVCxzSUFBYUE7SUFBQztDQUN4RTtBQUVjLFNBQVNVOztJQUN0QixNQUFNQyxXQUFXUCw0REFBV0E7SUFDNUJRLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDRTtrQkFDR0wsTUFBTVEsR0FBRyxDQUFDLENBQUNDO1lBQ1YsTUFBTUMsV0FBV0QsS0FBS04sSUFBSTtZQUMxQixxQkFDRSw4REFBQ04saURBQUlBO2dCQUVISyxNQUFNTyxLQUFLUCxJQUFJO2dCQUNmUyxXQUFXWixnREFBSUEsQ0FDYix3TEFDQTtvQkFDRSw4QkFBOEJNLGFBQWFJLEtBQUtQLElBQUk7Z0JBQ3REOztrQ0FJRiw4REFBQ1E7d0JBQVNDLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUFtQkYsS0FBS1IsSUFBSTs7Ozs7OztlQVhwQ1EsS0FBS1IsSUFBSTs7Ozs7UUFjcEI7O0FBR047R0ExQndCRzs7UUFDTE4sd0RBQVdBOzs7S0FETk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2Rhc2hib2FyZC9uYXYtbGlua3MudHN4PzU1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQge1xuICBVc2VyR3JvdXBJY29uLFxuICBIb21lSWNvbixcbiAgRG9jdW1lbnREdXBsaWNhdGVJY29uLFxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG4vLyBNYXAgb2YgbGlua3MgdG8gZGlzcGxheSBpbiB0aGUgc2lkZSBuYXZpZ2F0aW9uLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIHRoZSBhcHBsaWNhdGlvbiwgdGhpcyB3b3VsZCBiZSBzdG9yZWQgaW4gYSBkYXRhYmFzZS5cbmNvbnN0IGxpbmtzID0gW1xuICB7IG5hbWU6ICdIb21lJywgaHJlZjogJy9kYXNoYm9hcmQnLCBpY29uOiBIb21lSWNvbiB9LFxuICB7XG4gICAgbmFtZTogJ0ludm9pY2VzJyxcbiAgICBocmVmOiAnL2Rhc2hib2FyZC9pbnZvaWNlcycsXG4gICAgaWNvbjogRG9jdW1lbnREdXBsaWNhdGVJY29uLFxuICB9LFxuICB7IG5hbWU6ICdDdXN0b21lcnMnLCBocmVmOiAnL2Rhc2hib2FyZC9jdXN0b21lcnMnLCBpY29uOiBVc2VyR3JvdXBJY29uIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMaW5rcygpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zb2xlLmxvZyhwYXRobmFtZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgY29uc3QgTGlua0ljb24gPSBsaW5rLmljb247XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGtleT17bGluay5uYW1lfVxuICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAnZmxleCBoLVs0OHB4XSBncm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLW1kIGJnLWdyYXktNTAgcC0zIHRleHQtc20gZm9udC1tZWRpdW0gaG92ZXI6Ymctc2t5LTEwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwIG1kOmZsZXgtbm9uZSBtZDpqdXN0aWZ5LXN0YXJ0IG1kOnAtMiBtZDpweC0zJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdiZy1hbWJlci0xMDAgdGV4dC1ibHVlLTYwMCc6IHBhdGhuYW1lID09PSBsaW5rLmhyZWYsICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgLy9jbGFzc05hbWU9XCJmbGV4IGgtWzQ4cHhdIGdyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHJvdW5kZWQtbWQgYmctZ3JheS01MCBwLTMgdGV4dC1zbSBmb250LW1lZGl1bSBob3ZlcjpiZy1za3ktMTAwIGhvdmVyOnRleHQtYmx1ZS02MDAgbWQ6ZmxleC1ub25lIG1kOmp1c3RpZnktc3RhcnQgbWQ6cC0yIG1kOnB4LTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rSWNvbiBjbGFzc05hbWU9XCJ3LTZcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+e2xpbmsubmFtZX08L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVXNlckdyb3VwSWNvbiIsIkhvbWVJY29uIiwiRG9jdW1lbnREdXBsaWNhdGVJY29uIiwiTGluayIsInVzZVBhdGhuYW1lIiwiY2xzeCIsImxpbmtzIiwibmFtZSIsImhyZWYiLCJpY29uIiwiTmF2TGlua3MiLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJsaW5rIiwiTGlua0ljb24iLCJjbGFzc05hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/nav-links.tsx\n"));

/***/ })

});