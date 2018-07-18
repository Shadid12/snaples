webpackHotUpdate(5,{

/***/ "./db/db.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCampaign;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var config = {
  apiKey: "AIzaSyAJnfn3nFpQvl7gt8yRlZ5J49EKWOGMTkI",
  authDomain: "shadid-13de0.firebaseapp.com",
  databaseURL: "https://shadid-13de0.firebaseio.com",
  projectId: "shadid-13de0",
  storageBucket: "shadid-13de0.appspot.com",
  messagingSenderId: "271658865323"
};
function createCampaign(_x, _x2) {
  return _createCampaign.apply(this, arguments);
}

function _createCampaign() {
  _createCampaign = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(address, description) {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('address', address);
            console.log('description', description);
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.initializeApp(config);
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('contracts').set({
              address: address,
              description: description
            });
            console.log('----> Done');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _createCampaign.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=5.e9895ca3f5dbe24c8ada.hot-update.js.map