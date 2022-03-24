module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3zrx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = (initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

/* harmony default export */ __webpack_exports__["a"] = (useInput);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CH2o");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./components/MenuItems.js
const MenuItems = [{
  title: '물건 빌려줘'
}, {
  title: '물건 빌려줄께'
}, {
  title: '힘을 빌려줘'
}, {
  title: '힘을 빌려줄께'
}, {
  title: '같이 하자'
}];
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./components/logo2.png
var logo2 = __webpack_require__("X7II");
var logo2_default = /*#__PURE__*/__webpack_require__.n(logo2);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__("lFrT");

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__("vVTy");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__("3zrx");

// EXTERNAL MODULE: ./components/SearchLocation.js
var SearchLocation = __webpack_require__("G/SD");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./components/Layout.js
var __jsx = external_react_default.a.createElement;















const Topbar = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__Topbar",
  componentId: "sc-139bv3m-0"
})(["padding:1%;width:100%;height:40px;font-size:0.6em;border-bottom:solid #eeeeee;display:flex;justify-content:center;;background:RGB(255,255,255);padding:0 35px;"]);
const TopDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__TopDiv",
  componentId: "sc-139bv3m-1"
})(["padding:10px;display:flex;justify-content:flex-end;width:80%;backgounr:blue;font-size:1.6em;color:RGB(127,127,127);"]);
const NavBar = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__NavBar",
  componentId: "sc-139bv3m-2"
})(["width:100%;height:146px;display:flex;border-bottom:solid #eeeeee;padding:0 35px;align-items:center;flex-wrap:wrap;"]);
const NavBarDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__NavBarDiv",
  componentId: "sc-139bv3m-3"
})(["width:100%;height:30px;display:flex;align-content:center;align-items:center;padding-left:200px;"]);
const GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(["div{cursor:pointer;}input:focus{outline:none;}ul{list-style:none;}"]);
const SelcectDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__SelcectDiv",
  componentId: "sc-139bv3m-4"
})(["color:#212a4b;width:450px;height:30px;border:solid #212a4b;min-width:450px;display:flex;"]);
const SelectDropD = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__SelectDropD",
  componentId: "sc-139bv3m-5"
})(["width:60px;hieght:30px;padding-top:4px;font-size:13px;font-weight:600;border-right:solid #212a4b;align-items:center;padding-left:5px;min-width:60px;a{color:black;}a:hover{color:black;}"]);
const Select = external_styled_components_default.a.input.withConfig({
  displayName: "Layout__Select",
  componentId: "sc-139bv3m-6"
})(["padding:1.5%;width:250px;hieght:30px;border:none;float:left;"]);
const ProfileDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__ProfileDiv",
  componentId: "sc-139bv3m-7"
})(["width:400px;height:28px;display:flex;padding-left:50px;"]);
const UserDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__UserDiv",
  componentId: "sc-139bv3m-8"
})(["width:120px;height:26px;:nth-child(2){border-right:solid #e6e6e6;border-left:solid #e6e6e6;}padding-top:2px;padding-left:28px;"]);
const NavMenu = external_styled_components_default.a.ul.withConfig({
  displayName: "Layout__NavMenu",
  componentId: "sc-139bv3m-9"
})(["flex-direction:column;width:100%;position:absolute;transition:all .5s ease;"]);
const NavActive = external_styled_components_default.a.ul.withConfig({
  displayName: "Layout__NavActive",
  componentId: "sc-139bv3m-10"
})(["position:absolute;z-index:1;"]);
const MenuLi = external_styled_components_default.a.li.withConfig({
  displayName: "Layout__MenuLi",
  componentId: "sc-139bv3m-11"
})(["text-align:center;padding-top:40px;font-weight:600;font-size:20px;transition:all 0.25s ease;:hover{transform:scale(1.3,1.3);}a{color:black;}a:hover{color:black;}"]);
const MenuDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__MenuDiv",
  componentId: "sc-139bv3m-12"
})(["width:200px;flex-wrap:wrap;padding-top:30px;min-width:200px;"]);
const LogoDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__LogoDiv",
  componentId: "sc-139bv3m-13"
})(["width:260px;position:absolute;padding-top:25px;min-height:50px;"]);
const MenuA = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__MenuA",
  componentId: "sc-139bv3m-14"
})(["width:30px;padding-top:90px;"]);
const PlaceDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__PlaceDiv",
  componentId: "sc-139bv3m-15"
})(["position:fixed;width:130px;height:30px;bottom:440px;right:160px;text-align:center;font-weight:600;font-size:20px;justify-content:left;display:flex;flex-wrap:wrap;"]);
const PostDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__PostDiv",
  componentId: "sc-139bv3m-16"
})(["width:100%;position:relative;ant-card-crid:hover{padding-top:100px;}"]);
const LocalDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__LocalDiv",
  componentId: "sc-139bv3m-17"
})([""]);
const RecentView = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__RecentView",
  componentId: "sc-139bv3m-18"
})(["width:90px;text-align:center;height:200px;position:fixed;top:230px;right:190px;border:solid #eeeeee;border-botton:none;color:#d4d4d4;border-radius:4px;"]);

function Layout({
  children
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    me,
    location
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: isOpen,
    1: setMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: profile,
    1: SetProfile
  } = Object(external_react_["useState"])(false);
  const {
    0: place,
    1: SetPlace
  } = Object(external_react_["useState"])(false);
  const {
    0: select,
    1: setSelect
  } = Object(external_react_["useState"])("글제목");
  const [searchword, onSearchWord, setSearchWord] = Object(useInput["a" /* default */])("");
  const {
    0: rcView,
    1: SetRcview
  } = Object(external_react_["useState"])(false);

  const menu = __jsx(external_antd_["Menu"], null, __jsx(external_antd_["Menu"].Item, {
    key: "0"
  }, __jsx("a", {
    onClick: () => {
      setSelect("글제목");
    }
  }, "\uAE00\uC81C\uBAA9")), __jsx(external_antd_["Menu"].Item, {
    key: "1"
  }, __jsx("a", {
    onClick: () => {
      setSelect("글내용");
    }
  }, "\uAE00\uB0B4\uC6A9")));

  Object(external_react_["useEffect"])(() => {
    if (me && !location) {
      dispatch({
        type: user["x" /* UPDATE_LOCAL */],
        data: me.location
      });
    }
  }, [me]);

  const PlaceClick = () => {
    if (place == false) {
      SetPlace(true);
      console.log(place);
    }

    if (place == true) {
      SetPlace(false);
    }
  };

  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  const goProfile = () => {
    SetProfile(true);
    console.log(profile);
    router_default.a.push('/profile', undefined, {
      shallow: true
    });
  };

  const onWrite = Object(external_react_["useCallback"])(() => {
    router_default.a.push('/write', undefined, {
      shallow: true
    });
  }, []);
  const onLogIn = Object(external_react_["useCallback"])(() => {
    router_default.a.push('/loginpage', undefined, {
      shallow: true
    });
  }, []);
  const onTalk = Object(external_react_["useCallback"])(() => {
    router_default.a.push('/modify', undefined, {
      shallow: true
    });
  }, []);
  const onLogOut = Object(external_react_["useCallback"])(() => {
    dispatch(Object(user["A" /* logoutRequestAction */])());
    router_default.a.push('/objectreceive', undefined, {
      shallow: true
    });
  }, []);
  const onSearching = Object(external_react_["useCallback"])(() => {
    // dispatch({
    //   type:UPDATE_SEARCH,
    //   data:{select:select, searchword:searchword,}
    // });
    router_default.a.replace(`/search/${select}*${searchword}`);
  }, [select, searchword]);
  return __jsx("div", {
    style: {
      width: "100%"
    }
  }, __jsx("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, __jsx(GlobalStyle, null), __jsx("div", null, __jsx(Topbar, null, __jsx(TopDiv, null, !me ? __jsx("div", {
    onClick: onLogIn
  }, "\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785") : __jsx("div", {
    onClick: onLogOut
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx(link_default.a, {
    href: "/profile"
  }, __jsx("div", {
    style: {
      paddingLeft: "20px"
    }
  }, "\uB0B4 \uD504\uB85C\uD544")))), __jsx(NavBar, null, __jsx(NavBarDiv, null, __jsx(MenuDiv, null, __jsx(LogoDiv, null, __jsx(link_default.a, {
    href: "/objectreceive"
  }, __jsx("img", {
    alt: "",
    src: logo2_default.a,
    width: "245px;",
    height: "45px",
    className: "d-inline-block align-top",
    style: {
      paddingTop: "10px"
    }
  }))), __jsx(MenuA, {
    style: {
      paddingBottom: "20px"
    }
  }, !isOpen ? __jsx(icons_["MenuOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu
  }) : __jsx(icons_["CloseOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu
  }), isOpen ? __jsx(NavActive, null, MenuItems.map((item, index) => {
    return __jsx(external_react_default.a.Fragment, null, index === 0 && __jsx(link_default.a, {
      href: "/objectreceive"
    }, __jsx(MenuLi, {
      key: "a"
    }, __jsx("a", null, item.title))), index === 1 && __jsx(link_default.a, {
      href: "/objectsend"
    }, __jsx(MenuLi, {
      key: "b"
    }, __jsx("a", null, item.title))), index === 2 && __jsx(link_default.a, {
      href: "/talentreceive"
    }, __jsx(MenuLi, {
      key: "c"
    }, __jsx("a", null, item.title))), index === 3 && __jsx(link_default.a, {
      href: "/talentsend"
    }, __jsx(MenuLi, {
      key: "d"
    }, __jsx("a", null, item.title))), index === 4 && __jsx(link_default.a, {
      href: "/cooperate"
    }, __jsx(MenuLi, {
      key: "e"
    }, __jsx("a", null, item.title))), index === 5 && __jsx(link_default.a, {
      href: "/playground"
    }, __jsx(MenuLi, {
      key: "f"
    }, __jsx("a", null, item.title))));
  })) : __jsx(NavMenu, null))), __jsx("div", {
    style: {
      paddingLeft: "160px"
    }
  }, __jsx(SelcectDiv, null, __jsx(SelectDropD, null, __jsx(external_antd_["Dropdown"], {
    overlay: menu,
    trigger: ['click']
  }, __jsx("a", {
    className: "ant-dropdown-link"
  }, select, " ", __jsx(icons_["DownOutlined"], null)))), __jsx(Select, {
    placeholder: "지역, 상품명 입력",
    value: searchword,
    onChange: onSearchWord
  }), __jsx("div", {
    style: {
      paddingTop: "3px",
      paddingLeft: "115px"
    }
  }, __jsx(icons_["SearchOutlined"], {
    onClick: onSearching
  })))), __jsx(ProfileDiv, null, __jsx(UserDiv, {
    onClick: goProfile
  }, __jsx(icons_["UserOutlined"], null), " \uB0B4\uD504\uB85C\uD544"), __jsx(UserDiv, {
    onClick: onTalk
  }, __jsx(icons_["MailOutlined"], null), " \uC54C\uB9BC\uD1A1"), __jsx(UserDiv, {
    onClick: onWrite
  }, __jsx(icons_["FormOutlined"], null), " \uAE00 \uC4F0\uAE30"))))), __jsx(PostDiv, null, __jsx("div", {
    style: {
      marginTop: 0,
      zIndex: 5,
      width: '100%'
    }
  }, __jsx(external_antd_["Row"], {
    gutter: 8
  }, __jsx(external_antd_["Col"], {
    xs: 7,
    md: 6
  }), __jsx(external_antd_["Col"], {
    xs: 13,
    md: 13
  }, children), __jsx(external_antd_["Col"], {
    xs: 6,
    md: 5
  }))), __jsx(PlaceDiv, {
    onClick: PlaceClick
  }, __jsx(icons_["AimOutlined"], {
    style: {
      paddingRight: "10px",
      paddingTop: "5px"
    }
  }), !place ? __jsx("span", null, "\uB3D9\uB124 \uC124\uC815") : __jsx("span", null, "\uC7AC\uC124\uC815"), place ? __jsx("div", null, __jsx(SearchLocation["a" /* default */], null)) : __jsx(LocalDiv, null, location)), __jsx(RecentView, null, __jsx("div", {
    style: {
      borderBottom: "solid #e8e8e8"
    }
  }, "\uCD5C\uADFC\uBCF8\uC0C1\uD488"), !rcView ? __jsx("div", {
    style: {
      paddingTop: "30px"
    }
  }, __jsx("div", null, __jsx(icons_["EyeOutlined"], {
    style: {
      fontSize: "20px",
      color: "#e8e8e8"
    }
  })), "\uCD5C\uADFC \uBCF8 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.") : __jsx("div", null, "\uC788\uC5B4\uC6A9!")))));
}

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "5jdO":
/***/ (function(module, exports) {

module.exports = require("react-daum-postcode");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "A0h5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3zrx");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LAVF");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("X7II");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_logo2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("CBiN");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const ContainerDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "LoginForm__ContainerDiv",
  componentId: "sc-rtqzse-0"
})(["width:460px;height:310px;border:solid #C6C6C6;border-radius:10px;text-align:center;display:flex;justify-content:center;padding:80px;.ant-form-item-control-input-content{padding-left:140px;}"]);
const InputDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "LoginForm__InputDiv",
  componentId: "sc-rtqzse-1"
})(["width:420px;height:48px;border:solid #DADADA;border-radius:5px;padding-top:8px;display:flex;"]);
const RegiDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "LoginForm__RegiDiv",
  componentId: "sc-rtqzse-2"
})(["width:460px;height:50px;border:solid #C6C6C6;border-radius:10px;margin-top:20px;text-align:center;padding-top:13px;"]);
const GlobalDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(["div{cursor:pointer;}"]);

function LoginForm() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: email,
    1: onChangeEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: password,
    1: onChangePassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    logInLoading,
    logInError,
    logInDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (logInError) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        icon: 'error',
        title: 'Oops...',
        text: logInError,
        footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  }, [logInError]); // 로그인 에러 화면처리

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (logInDone) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    }
  }, [logInDone]); // 로그인 에러 화면처리

  const removeEHandle = () => {
    onChangeEmail('');
  };

  const removePHandle = () => {
    onChangePassword('');
  };

  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log(email, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__[/* loginRequestAction */ "z"])({
      email,
      password
    })); // Router.push('/',undefined,{ shallow:true });
  }, [email, password]);

  const emailHandle = e => {
    onChangeEmail(e.target.value);
  };

  const passwordHandle = e => {
    onChangePassword(e.target.value);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", null, __jsx(GlobalDiv, null), __jsx("div", {
    style: {
      paddingLeft: "80px"
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("img", {
    src: _logo2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    style: {
      width: "300px",
      paddingBottom: "20px"
    }
  }))), __jsx(ContainerDiv, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    name: "basic",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    },
    initialValues: {
      remember: true
    },
    onFinish: onSubmitForm,
    autoComplete: "off"
  }, __jsx(InputDiv, null, __jsx("div", {
    style: {
      width: "50px",
      textAlign: "start"
    }
  }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["UserOutlined"], {
    style: {
      width: "50px"
    }
  }))), __jsx("div", {
    style: {
      width: "280px",
      textAlign: "start"
    }
  }, __jsx("input", {
    value: email,
    onChange: emailHandle,
    type: "text",
    style: {
      border: "none",
      width: "250px"
    },
    placeholder: "\uC544\uC774\uB514"
  })), __jsx("div", {
    style: {
      textAlign: "end",
      width: "70px"
    }
  }, __jsx("button", {
    onClick: removeEHandle,
    style: {
      border: "solid 1px",
      borderRadius: "14px",
      color: "white"
    }
  }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["CloseOutlined"], null))))), __jsx(InputDiv, null, __jsx("div", {
    style: {
      width: "50px",
      textAlign: "start"
    }
  }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LockOutlined"], {
    style: {
      width: "50px"
    }
  }))), __jsx("div", {
    style: {
      width: "280px",
      textAlign: "start"
    }
  }, __jsx("input", {
    value: password,
    onChange: passwordHandle,
    type: "password",
    style: {
      border: "none",
      width: "250px"
    },
    placeholder: "\uBE44\uBC00\uBC88\uD638"
  })), __jsx("div", {
    style: {
      textAlign: "end",
      width: "70px"
    }
  }, __jsx("button", {
    onClick: removePHandle,
    style: {
      border: "solid 1px",
      borderRadius: "14px",
      color: "white"
    }
  }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["CloseOutlined"], null))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
    name: "remember",
    valuePropName: "checked",
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], null, "Remember me")), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "\uB85C\uADF8\uC778")))), __jsx(RegiDiv, null, __jsx("span", null, "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694? "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "signup"
  }, __jsx("a", null, "\uAC00\uC785\uD558\uAE30")))));
}

/* harmony default export */ __webpack_exports__["a"] = (LoginForm);

/***/ }),

/***/ "AKfN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wan_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uZWT");
/* harmony import */ var _wan_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wan_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ing_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FG/w");
/* harmony import */ var _ing_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ing_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const gridStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  margin: "10px"
};
const tradeDoneGridStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  margin: "10px",
  background: "grey",
  opacity: "40%",
  backgroundImage: `url(${_wan_png__WEBPACK_IMPORTED_MODULE_5___default.a})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};
const tradeIng = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  margin: "10px",
  // background: "blue",
  //opacity: "80%",
  backgroundImage: `url(${_ing_png__WEBPACK_IMPORTED_MODULE_6___default.a})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

const PostCard1 = ({
  post
}) => {
  const onPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/post/${post.id}*${post.boardNum}`);
  }, [post.id]);
  return __jsx("div", {
    onClick: post.status === 2 ? null : onPage
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Grid, {
    style: post.status === 2 ? tradeDoneGridStyle : post.status === 1 ? tradeIng : gridStyle
  }, __jsx("div", null, __jsx("p", {
    style: {
      fontSize: "1.05rem"
    }
  }, post.title), post.boardNum === 1 ? __jsx("p", null, "\uB80C\uD0C8\uC694\uAE08(\uFFE6): ", post.price) : null, post.boardNum === 2 ? __jsx("p", null, "\uB80C\uD0C8\uC694\uAE08(\uFFE6): ", post.price) : null, post.boardNum === 3 ? __jsx("p", null, "\uB80C\uD0C8\uC694\uAE08(\uFFE6): ", post.price) : null, post.boardNum === 4 ? __jsx("p", null, "\uB80C\uD0C8\uC694\uAE08(\uFFE6): ", post.price) : null, post.boardNum === 5 && post.category === "1+1" ? __jsx("p", null, "\uAC1C\uC778\uBD80\uB2F4\uC561(\uFFE6): ", post.sharedPrice, " / \uBB3C\uD488\uAE08\uC561(\uFFE6):", " ", post.originalPrice) : null, post.boardNum === 5 && post.category === "배달" ? __jsx("p", null, "\uAC1C\uC778\uBD80\uB2F4\uC561(\uFFE6): ", post.sharedPrice, " / \uBC30\uB2EC\uBE44(\uFFE6):", " ", post.originalPrice) : null, post.boardNum === 5 && post.category === "공동구매" ? __jsx("p", null, "\uACF5\uAD6C\uAC00(\uFFE6): ", post.sharedPrice, " / \uC815\uC0C1\uAC00(\uFFE6): ", post.originalPrice) : null, post.boardNum === 5 && post.category === "기타" ? __jsx("p", null, "\uBE44\uC6A9(\uFFE6): ", post.originalPrice) : null, __jsx("p", {
    className: "tradeStatus"
  }, (post.boardNum === 1 || post.boardNum === 2 || post.boardNum === 3 || post.boardNum === 4) && post.status === 0 ? __jsx("p", null, "\uAC70\uB798 \uC804") : null), __jsx("p", {
    className: "tradeStatus"
  }, (post.boardNum === 1 || post.boardNum === 2 || post.boardNum === 3 || post.boardNum === 4) && post.status === 1 ? __jsx("p", null, "\uAC70\uB798 \uC911") : null), __jsx("p", {
    className: "tradeStatus"
  }, (post.boardNum === 1 || post.boardNum === 2 || post.boardNum === 3 || post.boardNum === 4) && post.status === 2 ? __jsx("p", null, "\uAC70\uB798 \uC644\uB8CC") : null), __jsx("p", {
    className: "tradeStatus"
  }, post.boardNum === 5 && post.status === 0 ? __jsx("p", null, "\uBAA8\uC9D1 \uC804") : null), __jsx("p", {
    className: "tradeStatus"
  }, post.boardNum === 5 && post.status === 1 ? __jsx("p", null, "\uBAA8\uC9D1 \uC911") : null), __jsx("p", {
    className: "tradeStatus"
  }, post.boardNum === 5 && post.status === 2 ? __jsx("p", null, "\uBAA8\uC9D1 \uC644\uB8CC") : null)), __jsx("div", null, __jsx("p", null, "\uC791\uC131\uC790: ", post.user_nickname), __jsx("div", {
    style: {
      float: 'right'
    }
  }, moment__WEBPACK_IMPORTED_MODULE_7___default()(post.createdAt).format('YYYY.MM.DD')))));
};

/* harmony default export */ __webpack_exports__["a"] = (PostCard1);

/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js



 // (이전상태,액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return {...state,...action.payload};
    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          user: user["y" /* default */],
          post: post["mb" /* default */]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/post.js





function addPostAPI(data) {
  return external_axios_default.a.post('/post', data); // formdata 전송
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["a" /* ADD_POST_TO_ME */],
      data: result.data.id
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function sendDummyPostAPI(data) {
  return external_axios_default.a.post('/post/write', data); // formdata 전송
}

function* sendDummyPost(action) {
  try {
    const result = yield Object(effects_["call"])(sendDummyPostAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: post["Z" /* SEND_DUMMYPOST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["a" /* ADD_POST_TO_ME */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["X" /* SEND_DUMMYPOST_FAILURE */],
      error: err.response.data
    });
  }
}

function removePostAPI(postId, postBoardNum) {
  return external_axios_default.a.delete(`/post/delete?postId=${postId}&postBoardNum=${postBoardNum}`); // delete는 데이터를 가져갈 수 없다 data는 postId
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.postId, action.postBoardNum);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: post["W" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["t" /* REMOVE_POST_OF_ME */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["U" /* REMOVE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostAPI(data, lastId, boardNum, location) {
  console.log(data);
  return external_axios_default.a.get(`/posts/${encodeURIComponent(data)}/post?lastId=${lastId || 0}&boardNum=${boardNum || 0}&location=${encodeURIComponent(location)}`); // api 서버 요청은 /user/:userId/posts
}

function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.data, action.lastId, action.boardNum, action.location);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["u" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function changeTagAPI(data, boardNum, location) {
  console.log(data);
  return external_axios_default.a.get(`/posts/${encodeURIComponent(data)}/tag?boardNum=${boardNum || 0}&location=${encodeURIComponent(location)}`); // api 서버 요청은 /user/:userId/posts
}

function* changeTag(action) {
  try {
    const result = yield Object(effects_["call"])(changeTagAPI, action.data, action.boardNum, action.location);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["l" /* LOAD_CHANGE_TAG_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_CHANGE_TAG_FAILURE */],
      error: err.response.data
    });
  }
}

function loadSearchPostAPI(select, searchword, location, boardNum, lastId) {
  return external_axios_default.a.get(`/posts/search?select=${encodeURIComponent(select)}&location=${encodeURIComponent(location)}
  &searchword=${encodeURIComponent(searchword)}&boardNum=${boardNum}&lastId=${lastId || 0}`);
} // api 서버 요청은 GET/posts/search/


function* loadSearchPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadSearchPostAPI, action.select, action.searchword, action.location, action.boardNum, action.lastId);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["G" /* LOAD_SEARCH_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["E" /* LOAD_SEARCH_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadChangeSearchPostAPI(select, searchword, location, boardNum, lastId, tag) {
  return external_axios_default.a.get(`/posts/searchTag?select=${encodeURIComponent(select)}&location=${encodeURIComponent(location)}
  &searchword=${encodeURIComponent(searchword)}&boardNum=${boardNum}&lastId=${lastId || 0}&tag=${encodeURIComponent(tag)}`);
} // api 서버 요청은 GET/posts/search/


function* loadChangeSearchPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadChangeSearchPostAPI, action.select, action.searchword, action.location, action.boardNum, action.lastId, action.tag);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["D" /* LOAD_SCHANGE_TAG_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["B" /* LOAD_SCHANGE_TAG_FAILURE */],
      error: err.response.data
    });
  }
}

function rentalPostAPI(data, lastId) {
  // 대상유저 id
  console.log(data);
  return external_axios_default.a.get(`/posts/${data}/post?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* rentalPost(action) {
  try {
    const result = yield Object(effects_["call"])(rentalPostAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["A" /* LOAD_RENTAL_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["y" /* LOAD_RENTAL_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function writePostAPI(data, lastId) {
  // 대상유저 id
  console.log(data);
  return external_axios_default.a.get(`/posts/${data}/post?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* writePost(action) {
  try {
    const result = yield Object(effects_["call"])(writePostAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["P" /* LOAD_WRITE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["N" /* LOAD_WRITE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function loadSPostAPI(postId, postBoardNum) {
  return external_axios_default.a.get(`/post/singlepost?postId=${postId}&postBoardNum=${postBoardNum}`);
}

function* loadSPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadSPostAPI, action.postId, action.postBoardNum);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: post["J" /* LOAD_SPOST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["H" /* LOAD_SPOST_FAILURE */],
      error: err.response.data
    });
  }
}

function updateSPostAPI(postId, postBoardNum, postStatus) {
  return external_axios_default.a.get(`/post/status?postId=${postId}&postBoardNum=${postBoardNum}&postStatus=${postStatus}`);
}

function* updateSPost(action) {
  try {
    const result = yield Object(effects_["call"])(updateSPostAPI, action.postId, action.postBoardNum, action.postStatus);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: post["cb" /* STATUS_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["ab" /* STATUS_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return external_axios_default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: post["i" /* LIKE_POST_SUCCESS */],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["g" /* LIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: post["fb" /* UNLIKE_POST_SUCCESS */],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["db" /* UNLIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post('/post/images', data); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["lb" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["jb" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["M" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["K" /* LOAD_USER_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function RelatedPostAPI(lastId) {
  return external_axios_default.a.get(`/posts/related?lastId=${lastId || 0}`);
}

function* RelatedPost(action) {
  try {
    const result = yield Object(effects_["call"])(RelatedPostAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["x" /* LOAD_RELATED_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["v" /* LOAD_RELATED_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["o" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadLikedPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/liked?lastId=${lastId || 0}`);
}

function* loadLikedPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadLikedPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: post["r" /* LOAD_LIKED_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_LIKED_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function modifyPostAPI(data) {
  return external_axios_default.a.patch('/post/edit', data);
}

function* modifyPost(action) {
  try {
    const result = yield Object(effects_["call"])(modifyPostAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: post["S" /* MODIFY_POST_SUCCESS */],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["Q" /* MODIFY_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["V" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["t" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["h" /* LIKE_POST_REQUEST */], likePost);
}

function* watchUnLikePost() {
  yield Object(effects_["takeLatest"])(post["eb" /* UNLIKE_POST_REQUEST */], unlikePost);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["kb" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchLoadSPost() {
  yield Object(effects_["takeLatest"])(post["I" /* LOAD_SPOST_REQUEST */], loadSPost);
}

function* watchLoadUserPosts() {
  yield Object(effects_["takeLatest"])(post["L" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["takeLatest"])(post["n" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function* watchModifyPost() {
  yield Object(effects_["takeLatest"])(post["R" /* MODIFY_POST_REQUEST */], modifyPost);
}

function* watchLoadRelatedPost() {
  yield Object(effects_["takeLatest"])(post["w" /* LOAD_RELATED_POST_REQUEST */], RelatedPost);
}

function* watchLoadLikedtagPosts() {
  yield Object(effects_["takeLatest"])(post["q" /* LOAD_LIKED_POSTS_REQUEST */], loadLikedPosts);
}

function* watchLoadRentalPost() {
  yield Object(effects_["takeLatest"])(post["z" /* LOAD_RENTAL_POST_REQUEST */], rentalPost);
}

function* watchLoadWritePost() {
  yield Object(effects_["takeLatest"])(post["O" /* LOAD_WRITE_POST_REQUEST */], writePost);
}

function* watchLoadSearchPost() {
  yield Object(effects_["takeLatest"])(post["F" /* LOAD_SEARCH_POSTS_REQUEST */], loadSearchPost);
}

function* watchSendDummyPost() {
  yield Object(effects_["takeLatest"])(post["Y" /* SEND_DUMMYPOST_REQUEST */], sendDummyPost);
}

function* watchLoadChangeTag() {
  yield Object(effects_["takeLatest"])(post["k" /* LOAD_CHANGE_TAG_REQUEST */], changeTag);
}

function* watchloadChangeSearchPost() {
  yield Object(effects_["takeLatest"])(post["C" /* LOAD_SCHANGE_TAG_REQUEST */], loadChangeSearchPost);
}

function* watchupdateSPost() {
  yield Object(effects_["takeLatest"])(post["bb" /* STATUS_POST_REQUEST */], updateSPost);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchLoadSPost), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLoadRelatedPost), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadLikedtagPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnLikePost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchModifyPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchLoadRentalPost), Object(effects_["fork"])(watchLoadWritePost), Object(effects_["fork"])(watchLoadSearchPost), Object(effects_["fork"])(watchSendDummyPost), Object(effects_["fork"])(watchLoadChangeTag), Object(effects_["fork"])(watchloadChangeSearchPost), Object(effects_["fork"])(watchupdateSPost)]);
}
// CONCATENATED MODULE: ./sagas/user.js




function loadMyInfoAPI() {
  return external_axios_default.a.get('/user');
}

function SignUpAPI(data) {
  return external_axios_default.a.post('/user', data);
}

function loadUserAPI(data) {
  return external_axios_default.a.get(`/user/${data}`);
}

function loadUsersAPI() {
  return external_axios_default.a.get('/user/all');
}

function ChangeNickNameAPI(data) {
  return external_axios_default.a.patch('/user/nickname', {
    nickname: data
  });
}

function logInAPI(data) {
  return external_axios_default.a.post('/user/login', data);
}

function logOutAPI(data) {
  return external_axios_default.a.post('/user/logout', data);
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: user["g" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["e" /* LOAD_MY_INFO_FAILURE */],
      error: err.response.data
    });
  }
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: user["m" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["k" /* LOAD_USER_FAILURE */],
      error: err.response.data
    });
  }
}

function* loadUsers(action) {
  try {
    const result = yield Object(effects_["call"])(loadUsersAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: user["j" /* LOAD_USERS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_USERS_FAILURE */],
      error: err.response.data
    });
  }
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: user["p" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["n" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }
}

function* logOut(action) {
  try {
    yield Object(effects_["call"])(logOutAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: user["s" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["q" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
  }
}

function* signUp(action) {
  try {
    yield Object(effects_["call"])(SignUpAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: user["w" /* SIGN_UP_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["u" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }
}

function* changeNickName(action) {
  try {
    const result = yield Object(effects_["call"])(ChangeNickNameAPI, action.data);
    yield Object(effects_["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: user["d" /* CHANGE_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["b" /* CHANGE_NICKNAME_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchLogin() {
  yield Object(effects_["takeLatest"])(user["o" /* LOG_IN_REQUEST */], logIn);
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["r" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["v" /* SIGN_UP_REQUEST */], signUp);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(user["f" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* watchChangenickName() {
  yield Object(effects_["takeLatest"])(user["c" /* CHANGE_NICKNAME_REQUEST */], changeNickName);
}

function* watchLoadUserInfo() {
  yield Object(effects_["takeLatest"])(user["l" /* LOAD_USER_REQUEST */], loadUser);
}

function* watchLoadUsersInfo() {
  yield Object(effects_["takeLatest"])(user["i" /* LOAD_USERS_REQUEST */], loadUsers);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchLoadUserInfo), Object(effects_["fork"])(watchLoadUsersInfo), Object(effects_["fork"])(watchChangenickName)]);
}
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = 'http://115.85.180.157:3065';
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.js







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "CBiN":
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "CH2o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AQn3");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("p1tF");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1fKG");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uUeM");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("A0h5");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("LAVF");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("p+NB");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("OoXJ");
/* harmony import */ var _components_PostCard1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("AKfN");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("5Yp1");
/* harmony import */ var _components_PostCard2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("zykw");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("I2Is");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _write__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("N708");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















const PostCarDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_16___default.a.div.withConfig({
  displayName: "home__PostCarDiv2",
  componentId: "sc-hpssxr-0"
})(["width:100%;display:flex;flex-wrap:wrap;"]);

function SSRPAGE() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    me,
    location
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePost,
    loadPostLoading,
    reTweetError,
    id,
    object_TagsData,
    selectedTag
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    0: view,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const onSwitch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setView(!view);
  }, [view]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__[/* LOAD_MY_INFO_REQUEST */ "f"]
    });
  }, []); // useEffect(()=>{
  //   if(location === null)
  //   dispatch({
  //     type:UPDATE_LOCAL,
  //     data:me.location,
  //   })
  // },[me]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onScroll = () => {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100) {
        if (hasMorePost && !loadPostLoading) {
          var _mainPosts;

          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로

          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__[/* LOAD_POST_REQUEST */ "t"],
            data: selectedTag,
            boardNum: 1,
            lastId: lastId
          });
        } // 지역변수를 건드려봣자 어차피 렌더링이 되지 않는다. 실제 동작으로 테스트 해야할듯

      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostLoading]);
  return __jsx("div", null, __jsx(_write__WEBPACK_IMPORTED_MODULE_17__["default"], null));
}

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = cookie;
  axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    // 타 유저간 쿠키가 공유되는 문제를 방지하기 위함
    axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__[/* UPDATE_TAG */ "ib"],
    data: "전체"
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__[/* UPDATE_BOARD */ "gb"],
    data: 1
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__[/* LOAD_POST_REQUEST */ "t"],
    data: "전체",
    boardNum: 1
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_4__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (SSRPAGE);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FG/w":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ing-fed0e7f6603d143d4f6da08bba3c6c2a.png";

/***/ }),

/***/ "G/SD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5jdO");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_daum_postcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LAVF");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SearchLocation = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    location
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const handleComplete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }

      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    const finalAddress = fullAddress.split("(")[0];
    setAddress(finalAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }, [address]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (address !== "") {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[/* UPDATE_LOCAL */ "x"],
        data: address
      });
    }
  }, [address]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_daum_postcode__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onComplete: handleComplete,
    adress: address
  }), __jsx("h2", null, location));
};

/* harmony default export */ __webpack_exports__["a"] = (SearchLocation);

/***/ }),

/***/ "I2Is":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uUeM");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("p+NB");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3zrx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("5Yp1");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("lFrT");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_logo2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("X7II");
/* harmony import */ var _components_logo2_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_logo2_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_3__["Input"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];

function SearchBar() {
  const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "0"
  }, __jsx("a", {
    onClick: () => {
      setSelect("닉네임");
    }
  }, "\uB2C9\uB124\uC784")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "1"
  }, __jsx("a", {
    onClick: () => {
      setSelect("글제목");
    }
  }, "\uAE00\uC81C\uBAA9")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "2"
  }, __jsx("a", {
    onClick: () => {
      setSelect("글내용");
    }
  }, "\uAE00\uB0B4\uC6A9")));

  const {
    0: select,
    1: setSelect
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("글제목");
  const onCategory = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setSelect(value);
  }, []);
  const [searchword, onSearchWord, setSearchWord] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])("asdfasdf");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(select);
  }, [select]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(searchword);
  }, [searchword]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const onSearching = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // dispatch({
    //   type:UPDATE_SEARCH,
    //   data:{select:select, searchword:searchword,}
    // });
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(`/search/${select}*${searchword}`);
  }, [select, searchword]);
  return __jsx("div", {
    style: {
      width: "100%"
    }
  }, __jsx("div", null, __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu,
    trigger: ['click']
  }, __jsx("a", {
    className: "ant-dropdown-link"
  }, select, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["DownOutlined"], null)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
    placeholder: "지역, 상품명 입력",
    value: searchword,
    onChange: onSearchWord,
    onSearch: onSearching
  }), __jsx("div", {
    style: {
      paddingTop: "3px",
      paddingLeft: "115px"
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["SearchOutlined"], {
    onClick: onSearching
  }))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SearchBar);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UPDATE_LOCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadUserLoading: false,
  // 다른 이용자 정보 로딩
  loadUserDone: false,
  loadUserError: null,
  loadUsersLoading: false,
  // 전체 이용자 리스트 로딩
  loadUsersDone: false,
  loadUsersError: null,
  loadMyInfoLoading: false,
  // 내정보 로딩 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  userInfo: null,
  me: null,
  location: null,
  usersInfo: {},
  signUpData: {},
  loginData: {}
};
const UPDATE_LOCAL = 'UPDATE_LOCAL';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
}); // (이전상태,액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case UPDATE_LOCAL:
      draft.location = action.data;
      break;

    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case LOAD_USERS_REQUEST:
      draft.loadUsersLoading = true;
      draft.loadUsersError = null;
      draft.loadUsersDone = false;
      break;

    case LOAD_USERS_SUCCESS:
      draft.loadUsersLoading = false;
      draft.usersInfo = action.data;
      draft.loadUsersDone = true;
      break;

    case LOAD_USERS_FAILURE:
      draft.loadUsersLoading = false;
      draft.loadUsersError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      draft.logInLoading = false; // 로그인 시도중

      draft.logInDone = false;
      draft.logInError = null;
      draft.logOutLoading = false; // 로그아웃 시도중

      draft.logOutDone = false;
      draft.logOutError = null;
      draft.signUpLoading = false; // 회원가입 시도중

      draft.signUpDone = false;
      draft.signUpError = null;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      draft.location = action.data.location;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      console.log(action.data);

      if (action.data.boardNum === 1 || 2) {
        console.log("1/2"); //console.log(draft.me);

        draft.me.ProdPosts.push({
          id: action.data.id
        });
      } else if (action.data.boardNum === 3 || 4) {
        console.log("3/4");
        draft.me.PowerPosts.push({
          id: action.data.id
        });
      } else if (action.data.boardNum === 5) {
        console.log("5");
        draft.me.TogetherPosts.push({
          id: action.data.id
        });
      }

      break;

    case REMOVE_POST_OF_ME:
      if (action.data.boardNum === 1 || 2) draft.me.ProdPosts = draft.me.ProdPosts.filter(v => v.id !== action.data.PostId);
      if (action.data.boardNum === 3 || 4) draft.me.PowerPosts = draft.me.PowerPosts.filter(v => v.id !== action.data.PostId);
      if (action.data.boardNum === 5) draft.me.TogetherPosts = draft.me.TogetherPosts.filter(v => v.id !== action.data.PostId);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["y"] = (reducer);

/***/ }),

/***/ "N708":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uUeM");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("p+NB");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3zrx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("5Yp1");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("LAVF");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_3__["Input"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];

function Write() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    object_TagsData,
    talent_TagsData,
    cooperate_tagsData,
    play_tagsData,
    imagePaths,
    addPostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const [title, onTitle, setTitle] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])('');
  const [content, onContent, setContent] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])('');
  const [price, onPrice, setPrice] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(0);
  const [originalPrice, onOriginalPrice, setOriginalPrice] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(0);
  const [sharedPrice, onSharedPrice, setSharedPrice] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(0);
  const provinceData = ['물건빌려줘', '물건빌려줄게', '힘을빌려줘', '힘을빌려줄게', '같이하자', '동네놀이터'];
  const tags1 = object_TagsData.filter((e, i) => i > 0); // 전체 태그를 제외한 나머지 태그들을 불러옴

  const tags2 = object_TagsData.filter((e, i) => i > 0); // 전체 태그를 제외한 나머지 태그들을 불러옴

  const tags3 = talent_TagsData.filter((e, i) => i > 0); // 전체 태그를 제외한 나머지 태그들을 불러옴

  const tags4 = talent_TagsData.filter((e, i) => i > 0); // 전체 태그를 제외한 나머지 태그들을 불러옴

  const tags5 = cooperate_tagsData.filter((e, i) => i > 0); // 전체 태그를 제외한 나머지 태그들을 불러옴

  const tags6 = play_tagsData.filter((e, i) => i > 0); // 전체 태그를 제외한 나머지 태그들을 불러옴

  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__[/* LOAD_MY_INFO_REQUEST */ "f"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/objectreceive', undefined, {
        shallow: true
      });
    }
  }, [me && me.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addPostDone) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/objectreceive', undefined, {
        shallow: true
      });
    }
  }, [addPostDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPrice(null);
    setOriginalPrice(null);
    setSharedPrice(null);
  }, []);

  if (!me) {
    return '내 정보 로딩중...';
  }

  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();
  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(provinceData[0]);
  const onBoard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setBoard(value);
  }, []);
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tags1[0]);
  const onCategory = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setCategory(value);
  }, []);
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[/* UPLOAD_IMAGES_REQUEST */ "kb"],
      data: imageFormData
    });
  });
  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[/* REMOVE_IMAGE */ "T"],
      data: index
    });
  });
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!content || !content.trim()) {
      return alert('게시글을 작성하세요.');
    }

    if (!price) setPrice(0);
    if (!originalPrice) setOriginalPrice(0);
    if (!sharedPrice) setSharedPrice(0);
    const formData = new FormData();
    imagePaths.forEach(i => {
      formData.append('image', i);
    });
    formData.append('content', content);
    formData.append('userid', me.id);
    formData.append('location', me.location);
    formData.append('nickname', me.nickname);
    formData.append('category', category);
    formData.append('title', title);
    formData.append('originalPrice', originalPrice);
    formData.append('sharedPrice', sharedPrice);
    formData.append('price', price);
    if (board == provinceData[0]) formData.append('boardNum', 1);else if (board == provinceData[1]) formData.append('boardNum', 2);else if (board == provinceData[2]) formData.append('boardNum', 3);else if (board == provinceData[3]) formData.append('boardNum', 4);else if (board == provinceData[4]) formData.append('boardNum', 5);else if (board == provinceData[5]) formData.append('boardNum', 6);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[/* SEND_DUMMYPOST_REQUEST */ "Y"],
      data: formData
    });
  }, [content, imagePaths]);
  const onCancel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/objectreceive', undefined, {
      shallow: true
    });
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, __jsx("div", null, __jsx("br", null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    layout: "horizontal",
    form: form,
    initialValues: {
      layout: 'horizontal'
    },
    onFinish: onSubmit
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Group, {
    compact: true
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '69%'
    },
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: title,
    onChange: onTitle
  }), ' ', board === provinceData[0] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uB80C\uD0C8\uBE44\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: price,
    onChange: onPrice
  }), board === provinceData[1] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uB80C\uD0C8\uBE44\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: price,
    onChange: onPrice
  }), board === provinceData[2] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uB80C\uD0C8\uBE44\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: price,
    onChange: onPrice
  }), board === provinceData[3] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uB80C\uD0C8\uBE44\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: price,
    onChange: onPrice
  }), board === provinceData[4] && category == tags5[0] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Group, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uBB3C\uD488\uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: originalPrice,
    onChange: onOriginalPrice
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uAC1C\uC778\uBD80\uB2F4\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: sharedPrice,
    onChange: onSharedPrice
  })), board === provinceData[4] && category == tags5[1] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Group, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uBC30\uB2EC\uBE44\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: originalPrice,
    onChange: onOriginalPrice
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uAC1C\uC778\uBD80\uB2F4\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: sharedPrice,
    onChange: onSharedPrice
  })), board === provinceData[4] && category == tags5[2] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Group, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uC815\uC0C1\uAC00\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: originalPrice,
    onChange: onOriginalPrice
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uACF5\uAD6C\uAC00\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: sharedPrice,
    onChange: onSharedPrice
  })), board === provinceData[4] && category == tags5[3] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    style: {
      width: '30%'
    },
    placeholder: "\uB80C\uD0C8\uBE44\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: originalPrice,
    onChange: onOriginalPrice
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: provinceData,
    style: {
      width: 120
    },
    onChange: onBoard
  }, provinceData.map(province => __jsx(Option, {
    key: province
  }, province))), board === provinceData[0] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    style: {
      width: 120
    },
    defaultValue: tags1[0],
    onChange: onCategory
  }, tags1.map(tag => __jsx(Option, {
    value: tag
  }, tag))), board === provinceData[1] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    style: {
      width: 120
    },
    defaultValue: tags2[0],
    onChange: onCategory
  }, tags2.map(city => __jsx(Option, {
    value: city
  }, city))), board === provinceData[2] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    style: {
      width: 120
    },
    defaultValue: tags3[0],
    onChange: onCategory
  }, tags3.map(city => __jsx(Option, {
    value: city
  }, city))), board === provinceData[3] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    style: {
      width: 120
    },
    defaultValue: tags4[0],
    onChange: onCategory
  }, tags4.map(city => __jsx(Option, {
    value: city
  }, city))), board === provinceData[4] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    style: {
      width: 120
    },
    defaultValue: null,
    onChange: onCategory
  }, tags5.map(city => __jsx(Option, {
    value: city
  }, city))), board === provinceData[5] && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    style: {
      width: 120
    },
    defaultValue: tags6[0],
    onChange: onCategory
  }, tags6.map(city => __jsx(Option, {
    value: city
  }, city)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, __jsx("div", null, __jsx("input", {
    type: "file",
    name: "image",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC")), __jsx("div", null, imagePaths.map((v, i) => __jsx("div", {
    key: v,
    style: {
      display: 'inline-block'
    }
  }, __jsx("img", {
    src: `http://localhost:3065/${v}`,
    style: {
      width: '200px'
    },
    alt: v
  }), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onRemoveImage(i)
  }, "\uC81C\uAC70")))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, __jsx(TextArea, {
    placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
    autoSize: {
      minRows: 7,
      maxRows: 7
    },
    value: content,
    onChange: onContent
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    style: {
      textAlign: 'center'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "\uB4F1\uB85D"), ' ', __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    onClick: onCancel
  }, "\uCDE8\uC18C"))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ }),

/***/ "OoXJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("p+NB");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Tags({
  tagsData,
  boardNum
}) {
  const {
    CheckableTag
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Tag"];
  const {
    location
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: selectedTags,
    1: setSelectedTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((tag, checked) => {
    const nextSelectedTags = checked ? [tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags([...nextSelectedTags]);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* LOAD_CHANGE_TAG_REQUEST */ "k"],
      data: nextSelectedTags[0],
      // 현재 선택한 태그명
      boardNum: boardNum,
      location: location
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* UPDATE_TAG */ "ib"],
      data: nextSelectedTags[0] // 전역적으로 현재 선택한 태그를 공유한다.

    });
    console.log('You are interested in: ', nextSelectedTags);
    console.log('You are interested in: ', nextSelectedTags[0]);
  }, [location]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSelectedTags(['전체']);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tagsData.map(tag => __jsx(CheckableTag, {
    key: tag,
    checked: selectedTags.indexOf(tag) > -1,
    onChange: checked => handleChange(tag, checked)
  }, tag)));
}

/* harmony default export */ __webpack_exports__["a"] = (Tags);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "X7II":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo2-c1ec6c58c6de0dd4aaa9de099ff1f4ca.png";

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "lFrT":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export UPDATE_SEARCH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return UPDATE_BOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return UPDATE_CHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_CHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_CHANGE_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_CHANGE_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return SEND_DUMMYPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return SEND_DUMMYPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return SEND_DUMMYPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return LOAD_SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return LOAD_SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return LOAD_SEARCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return MODIFY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return MODIFY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return MODIFY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_RELATED_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_RELATED_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_RELATED_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_LIKED_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_LIKED_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_LIKED_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return LOAD_SPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return LOAD_SPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return LOAD_SPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return STATUS_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return STATUS_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return STATUS_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LOAD_RENTAL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LOAD_RENTAL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOAD_RENTAL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return LOAD_WRITE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return LOAD_WRITE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return LOAD_WRITE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return LOAD_SCHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LOAD_SCHANGE_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LOAD_SCHANGE_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return UPDATE_TAG; });
/* unused harmony export addPost */
/* unused harmony export addComment */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  searchPosts: [],
  imagePaths: [],
  mainTalks: [],
  talkUsers: [],
  object_TagsData: ['전체', '공구', '의류', '전자기기', '서적', '게임/취미', '차량', '스포츠/래저', '뷰티/미용', '반려동물', '기타'],
  talent_TagsData: ['전체', '미술', '구충', '설치', '코칭', '촬영', '일손', '기타'],
  cooperate_tagsData: ['전체', '1+1', '배달', '공동구매', '기타'],
  play_tagsData: ['전체', '질문', '자유'],
  boardNum: null,
  inputSearch: null,
  select: null,
  selectedTag: null,
  category: null,
  searchResultId: null,
  singlePost: null,
  hasMorePost: true,
  searchPostLoading: false,
  searchPostDone: false,
  searchPostError: null,
  loadProfilePostLoading: false,
  loadProfilePostDone: false,
  loadProfilePostError: null,
  upLoadImagesLoading: false,
  upLoadImagesDone: false,
  upLoadImagesError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadSPostLoading: false,
  loadSPostDone: false,
  loadSPostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  modifyPostLoading: false,
  modifyPostDone: false,
  modifyPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_BOARD = 'UPDATE_BOARD';
const UPDATE_CHANGE_TAG_REQUEST = 'UPDATE_CHANGE_TAG_REQUEST';
const LOAD_CHANGE_TAG_REQUEST = 'LOAD_CHANGE_TAG_REQUEST';
const LOAD_CHANGE_TAG_SUCCESS = 'LOAD_CHANGE_TAG_SUCCESS';
const LOAD_CHANGE_TAG_FAILURE = 'LOAD_CHANGE_TAG_FAILURE';
const SEND_DUMMYPOST_REQUEST = 'SEND_DUMMYPOST_REQUEST';
const SEND_DUMMYPOST_SUCCESS = 'SEND_DUMMYPOST_SUCCESS';
const SEND_DUMMYPOST_FAILURE = 'SEND_DUMMYPOST_FAILURE';
const LOAD_SEARCH_POSTS_REQUEST = 'LOAD_SEARCH_POSTS_REQUEST';
const LOAD_SEARCH_POSTS_SUCCESS = 'LOAD_SEARCH_POSTS_SUCCESS';
const LOAD_SEARCH_POSTS_FAILURE = 'LOAD_SEARCH_POSTS_FAILURE';
const MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
const MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
const MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_RELATED_POST_REQUEST = 'LOAD_RELATED_POST_REQUEST';
const LOAD_RELATED_POST_SUCCESS = 'LOAD_RELATED_POST_SUCCESS';
const LOAD_RELATED_POST_FAILURE = 'LOAD_RELATED_POST_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_LIKED_POSTS_REQUEST = 'LOAD_LIKED_POSTS_REQUEST';
const LOAD_LIKED_POSTS_SUCCESS = 'LOAD_LIKED_POSTS_SUCCESS';
const LOAD_LIKED_POSTS_FAILURE = 'LOAD_LIKED_POSTS_FAILURE';
const LOAD_SPOST_REQUEST = 'LOAD_SPOST_REQUEST';
const LOAD_SPOST_SUCCESS = 'LOAD_SPOST_SUCCESS';
const LOAD_SPOST_FAILURE = 'LOAD_SPOST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const STATUS_POST_REQUEST = 'STATUS_POST_REQUEST';
const STATUS_POST_SUCCESS = 'STATUS_POST_SUCCESS';
const STATUS_POST_FAILURE = 'STATUS_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const LOAD_RENTAL_POST_REQUEST = 'LOAD_RENTAL_POST_REQUEST';
const LOAD_RENTAL_POST_SUCCESS = 'LOAD_RENTAL_POST_SUCCESS';
const LOAD_RENTAL_POST_FAILURE = 'LOAD_RENTAL_POST_FAILURE';
const LOAD_WRITE_POST_REQUEST = 'LOAD_WRITE_POST_REQUEST';
const LOAD_WRITE_POST_SUCCESS = 'LOAD_WRITE_POST_SUCCESS';
const LOAD_WRITE_POST_FAILURE = 'LOAD_WRITE_POST_FAILURE';
const LOAD_SCHANGE_TAG_REQUEST = 'LOAD_SCHANGE_TAG_REQUEST';
const LOAD_SCHANGE_TAG_SUCCESS = 'LOAD_SCHANGE_TAG_SUCCESS';
const LOAD_SCHANGE_TAG_FAILURE = 'LOAD_SCHANGE_TAG_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const UPDATE_TAG = 'UPDATE_TAG';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // (이전상태,액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case UPDATE_BOARD:
      draft.boardNum = action.data;
      draft.mainPosts.length = 0;
      draft.imagePaths.length = 0;
      draft.searchPostLoading = false;
      draft.searchPostDone = false;
      draft.searchPostError = null;
      draft.loadProfilePostLoading = false;
      draft.loadProfilePostDone = false;
      draft.loadProfilePostError = null;
      draft.upLoadImagesLoading = false;
      draft.upLoadImagesDone = false;
      draft.upLoadImagesError = null;
      draft.likePostLoading = false;
      draft.likePostDone = false;
      draft.likePostError = null;
      draft.unlikePostLoading = false;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      draft.loadSPostLoading = false;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      draft.loadPostLoading = false;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      draft.loadUserPostsLoading = false;
      draft.loadUserPostsDone = false;
      draft.loadUserPostsError = null;
      draft.addPostLoading = false;
      draft.addPostDone = false;
      draft.addPostError = null;
      draft.removePostLoading = false;
      draft.removePostDone = false;
      draft.removePostError = null;
      draft.modifyPostLoading = false;
      draft.modifyPostDone = false;
      draft.modifyPostError = null;
      draft.addCommentLoading = false;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case UPDATE_CHANGE_TAG_REQUEST:
      draft.searchPosts = draft.mainPosts.filter(v => v.category === action.data);
      break;

    case UPDATE_SEARCH:
      draft.inputSearch = action.data.searchword;
      draft.select = action.data.select;
      break;

    case LOAD_SCHANGE_TAG_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_SCHANGE_TAG_SUCCESS:
      draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.

      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      break;

    case LOAD_SCHANGE_TAG_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case LOAD_CHANGE_TAG_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_CHANGE_TAG_SUCCESS:
      draft.hasMorePost = true;
      draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.

      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      break;

    case LOAD_CHANGE_TAG_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case LOAD_SEARCH_POSTS_REQUEST:
      draft.searchPostLoading = true;
      draft.searchPostDone = false;
      draft.searchPostError = null;
      break;

    case LOAD_SEARCH_POSTS_SUCCESS:
      draft.mainPosts = action.data;
      draft.searchPostLoading = false;
      draft.searchPostDone = true;
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_SEARCH_POSTS_FAILURE:
      draft.searchPostError = action.error;
      draft.searchPostLoading = false;
      break;

    case LOAD_RENTAL_POST_REQUEST:
      draft.loadProfilePostLoading = true;
      draft.loadProfilePostDone = false;
      draft.loadProfilePostError = null;
      break;

    case LOAD_RENTAL_POST_SUCCESS:
      {
        if (action.data[0].board_boardnum === 1 || 2 || 3 || 4) {
          // 렌탈 게시물이 쌓이고 있는경우
          draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          // 주제가 다른 게시물 덩어리를 가져올 경우
          draft.mainPosts = action.data;
        }

        draft.loadProfilePostLoading = false;
        draft.loadProfilePostDone = true;
        break;
      }

    case LOAD_RENTAL_POST_FAILURE:
      draft.loadProfilePostError = action.error;
      draft.loadProfilePostLoading = false;
      break;

    case LOAD_WRITE_POST_REQUEST:
      draft.loadProfilePostLoading = true;
      draft.loadProfilePostDone = false;
      draft.loadProfilePostError = null;
      break;

    case LOAD_WRITE_POST_SUCCESS:
      {
        if (action.data[0].boardNum === 5 || 6) {
          // 렌탈 게시물이 쌓이고 있는경우
          draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          // 주제가 다른 게시물 덩어리를 가져올 경우
          draft.mainPosts = action.data;
        }

        draft.loadProfilePostLoading = false;
        draft.loadProfilePostDone = true;
        break;
      }

    case LOAD_WRITE_POST_FAILURE:
      draft.loadProfilePostError = action.error;
      draft.loadProfilePostLoading = false;
      break;

    case UPDATE_TAG:
      draft.selectedTag = action.data;
      draft.hasMorePost = true;
      break;

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.upLoadImagesLoading = true;
      draft.upLoadImagesDone = false;
      draft.upLoadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.upLoadImagesLoading = false;
        draft.upLoadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.upLoadImagesError = action.error;
      draft.upLoadImagesLoading = false;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostError = action.error;
      draft.likePostLoading = false;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostError = action.error;
      draft.unlikePostLoading = false;
      break;

    case STATUS_POST_REQUEST:
      draft.loadSPostLoading = true;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      break;

    case STATUS_POST_SUCCESS:
      draft.singlePost.status = action.data.status;
      draft.loadSPostLoading = false;
      draft.loadSPostDone = true;
      break;

    case STATUS_POST_FAILURE:
      draft.loadSPostError = action.error;
      draft.loadSPostLoading = false;
      break;

    case LOAD_SPOST_REQUEST:
      draft.loadSPostLoading = true;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      break;

    case LOAD_SPOST_SUCCESS:
      draft.singlePost = action.data;

      if (action.data.boardNum === 1 || action.data.boardNum === 2) {
        const totalPath = action.data.ProdPostImages.map(v => draft.imagePaths.concat(v.src.toString()));

        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths = draft.imagePaths.concat(totalPath[i][0]);
        }
      } else if (action.data.boardNum === 3 || action.data.boardNum === 4) {
        const totalPath = action.data.PowerPostImages.map(v => draft.imagePaths.concat(v.src.toString()));

        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths = draft.imagePaths.concat(totalPath[i][0]);
        }
      } else if (action.data.boardNum === 5) {
        const totalPath = action.data.TogetherPostImages.map(v => draft.imagePaths.concat(v.src.toString()));

        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths = draft.imagePaths.concat(totalPath[i][0]);
        }
      }

      draft.loadSPostLoading = false;
      draft.loadSPostDone = true;
      break;

    case LOAD_SPOST_FAILURE:
      draft.loadSPostError = action.error;
      draft.loadSPostLoading = false;
      break;

    case LOAD_LIKED_POSTS_REQUEST:
    case LOAD_RELATED_POST_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_LIKED_POSTS_SUCCESS:
    case LOAD_RELATED_POST_SUCCESS:
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.concat(action.data); // 같은속성의 게시물을 쌓고있는 경우

      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_LIKED_POSTS_FAILURE:
    case LOAD_RELATED_POST_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POST_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case SEND_DUMMYPOST_REQUEST:
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case SEND_DUMMYPOST_SUCCESS:
    case ADD_POST_SUCCESS:
      draft.mainPosts.unshift(action.data);
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.imagePaths = [];
      break;

    case SEND_DUMMYPOST_FAILURE:
    case ADD_POST_FAILURE:
      draft.addPostError = action.error;
      draft.addPostLoading = false;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostError = action.error;
      draft.removePostLoading = false;
      break;

    case MODIFY_POST_REQUEST:
      draft.modifyPostLoading = true;
      draft.modifyPostDone = false;
      draft.modifyPostError = null;
      break;

    case MODIFY_POST_SUCCESS:
      for (let i = 0; i < draft.mainPosts.length; i++) {
        if (draft.mainPosts[i].id == action.data.id) {
          draft.mainPosts = draft.mainPosts(i, 1, action.data);
        }
      }

      draft.modifyPostLoading = false;
      draft.modifyPostDone = true;
      break;

    case MODIFY_POST_FAILURE:
      draft.modifyPostError = action.error;
      draft.modifyPostLoading = false;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["mb"] = (reducer);

/***/ }),

/***/ "p1tF":
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "uUeM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__("TpwP");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__("3zrx");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/AppLayout/styles.js


const SidebarImg = external_styled_components_default.a.img.withConfig({
  displayName: "styles__SidebarImg",
  componentId: "sc-g48kqf-0"
})(["width:40px;role:presantation;"]);
const SidebarUl = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__SidebarUl",
  componentId: "sc-g48kqf-1"
})(["list-style-type:none;line-height:1;color:black;"]);
const SidebarLi = external_styled_components_default.a.li.withConfig({
  displayName: "styles__SidebarLi",
  componentId: "sc-g48kqf-2"
})(["cursor:pointer;transition:all 0.25s ease;line-height:70px;:hover{transform:scale(1.3,1.3);}color:black;"]);
const SidebarDiv = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SidebarDiv",
  componentId: "sc-g48kqf-3"
})(["left:0px;border-radius:2rem;color:black;width:300px;height:1500px;font-weight:bold;line-height:250%;background:skyblue !important;"]);
const LeftSidebar = external_styled_components_default.a.div.withConfig({
  displayName: "styles__LeftSidebar",
  componentId: "sc-g48kqf-4"
})(["position:fixed;float:left;top:0px;left:9%;width:220px;height:1000px;background:skyblue !important;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]);
const Navbar = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Navbar",
  componentId: "sc-g48kqf-5"
})(["position:fixed;float:left;top:0px;left:29%;width:1800px;background:skyblue !important;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]);
const RightSidebar = external_styled_components_default.a.div.withConfig({
  displayName: "styles__RightSidebar",
  componentId: "sc-g48kqf-6"
})(["position:fixed;top:1%;left:40%;padding:0px 0;overflow:hidden;color:black;font-size:20px;z-index:10;"]);
const SearchInput = external_styled_components_default()(external_antd_["Input"].Search).withConfig({
  displayName: "styles__SearchInput",
  componentId: "sc-g48kqf-7"
})(["vertical-align:middle;"]);
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./components/AppLayout/AppLayout.js
var __jsx = external_react_default.a.createElement;










function AppLayout({
  children
}) {
  const [searchInput, onChangeSearchInput] = Object(useInput["a" /* default */])('');
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const writeButtonStyle = {
    left: "70%",
    top: "2%",
    zIndex: 20
  };
  const onSearch = Object(external_react_["useCallback"])(() => {
    router_default.a.push(`/hashtag/${searchInput}`, undefined, {
      shallow: true
    });
  }, [searchInput]);
  const onWrite = Object(external_react_["useCallback"])(() => {
    router_default.a.push('/write', undefined, {
      shallow: true
    });
  }, []);
  const onLogOut = Object(external_react_["useCallback"])(() => {
    dispatch(Object(user["A" /* logoutRequestAction */])());
    router_default.a.push('/', undefined, {
      shallow: true
    });
  }, []);
  return __jsx("div", null, __jsx("div", {
    style: {
      position: 'relative'
    }
  }, __jsx(Navbar, null, __jsx(external_antd_["Menu"], {
    mode: "horizontal"
  }, __jsx(external_antd_["Menu"].Item, {
    key: 1
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("h2", null, "\uD648")))))), __jsx("div", null, __jsx(LeftSidebar, null, __jsx(SidebarDiv, null, __jsx(SidebarUl, null, __jsx(link_default.a, {
    href: "/"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uC6B0\uB9AC\uB3D9\uB124 \uB80C\uD0C8\uB300\uC7A5"))), __jsx(link_default.a, {
    href: "/objectreceive"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uBB3C\uAC74\uC744 \uBE4C\uB824\uC918"))), __jsx(link_default.a, {
    href: "/objectsend"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uBB3C\uAC74\uC744 \uBE4C\uB824\uC904\uAC8C"))), __jsx(link_default.a, {
    href: "/talentreceive"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uD798\uC744 \uBE4C\uB824\uC918"))), __jsx(link_default.a, {
    href: "/talentsend"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uD798\uC744 \uBE4C\uB824\uC904\uAC8C"))), __jsx(link_default.a, {
    href: "/cooperate"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uAC19\uC774 \uD558\uC790"))), __jsx(link_default.a, {
    href: "/playground"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uB3D9\uB124 \uB180\uC774\uD130"))), __jsx(link_default.a, {
    href: "/search"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uB3D9\uB124 \uCE5C\uAD6C \uCC3E\uAE30"))), __jsx(link_default.a, {
    href: "/profile"
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uD504\uB85C\uD544"))), __jsx("div", {
    onClick: onLogOut
  }, __jsx(SidebarLi, null, __jsx("a", null, " \uB85C\uADF8\uC544\uC6C3"))))))), __jsx("div", null, __jsx(RightSidebar, null, __jsx(SearchInput, {
    enterButton: true,
    value: searchInput,
    onChange: onChangeSearchInput,
    onSearch: onSearch
  })), __jsx(external_antd_["Button"], {
    style: writeButtonStyle,
    onClick: onWrite
  }, "\uAE00\uC4F0\uAE30"))), __jsx("div", {
    style: {
      marginTop: 100,
      zIndex: 5
    }
  }, __jsx(external_antd_["Row"], {
    gutter: 8
  }, __jsx(external_antd_["Col"], {
    xs: 7,
    md: 7
  }), __jsx(external_antd_["Col"], {
    xs: 11,
    md: 11
  }, children), __jsx(external_antd_["Col"], {
    xs: 6,
    md: 6
  }))));
}

/* harmony default export */ var AppLayout_AppLayout = (AppLayout);

/***/ }),

/***/ "uZWT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wan-35d8930ebdd51ddb98b4718421aa9f40.png";

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vVTy":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zykw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("X7II");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logo2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PoastDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostCard2__PoastDiv",
  componentId: "sc-1m8gw32-0"
})(["width:200px;display:flex;flex-wrap:wrap;"]);
const TextDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostCard2__TextDiv",
  componentId: "sc-1m8gw32-1"
})(["width:100%;height:25px;text-align:start;font-size:1rem;"]);
const PriceDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostCard2__PriceDiv",
  componentId: "sc-1m8gw32-2"
})(["height:4px;width:50%;flex-wrap:wrap;padding-top:40px;color:#a7a7a7;font-weight:600;"]);
const TimeDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(PriceDiv).withConfig({
  displayName: "PostCard2__TimeDiv",
  componentId: "sc-1m8gw32-3"
})(["text-align:end;font-weight:400;"]);
const PostCardDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostCard2__PostCardDiv2",
  componentId: "sc-1m8gw32-4"
})([".ant-card-body{height:120px;}"]);

function PostCard2({
  post
}) {
  const onPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/post/${post.id}*${post.boardNum}`, undefined, {
      shallow: true
    });
  }, [post.id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(PostCardDiv2, null, __jsx("div", {
    style: {
      padding: "30px"
    },
    onClick: onPage
  }, post.boardNum === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    hoverable: true,
    style: {
      width: "244px"
    },
    cover: __jsx("img", {
      alt: "example",
      style: {
        width: "100%",
        height: "198px"
      },
      src: post.ProdPostImages[0] ? `http://localhost:3065/${post.ProdPostImages[0].src}` : _logo2_png__WEBPACK_IMPORTED_MODULE_3___default.a
    })
  }, __jsx(PoastDiv, null, __jsx(TextDiv, null, post.title), __jsx(PriceDiv, null, post.price, "\uC6D0"), __jsx(TimeDiv, null, moment__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format('YYYY.MM.DD')))), post.boardNum === 2 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    hoverable: true,
    style: {
      width: "244px"
    },
    cover: __jsx("img", {
      alt: "example",
      style: {
        width: "100%",
        height: "198px"
      },
      src: post.ProdPostImages[0] ? `http://localhost:3065/${post.ProdPostImages[0].src}` : _logo2_png__WEBPACK_IMPORTED_MODULE_3___default.a
    })
  }, __jsx(PoastDiv, null, __jsx(TextDiv, null, post.title), __jsx(PriceDiv, null, post.price, "\uC6D0"), __jsx(TimeDiv, null, moment__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format('YYYY.MM.DD')))), post.boardNum === 3 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    hoverable: true,
    style: {
      width: "244px"
    },
    cover: __jsx("img", {
      alt: "example",
      style: {
        width: "100%",
        height: "198px"
      },
      src: post.PowerPostImages[0] ? `http://localhost:3065/${post.PowerPostImages[0].src}` : _logo2_png__WEBPACK_IMPORTED_MODULE_3___default.a
    })
  }, __jsx(PoastDiv, null, __jsx(TextDiv, null, post.title), __jsx(PriceDiv, null, post.price, "\uC6D0"), __jsx(TimeDiv, null, moment__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format('YYYY.MM.DD')))), post.boardNum === 4 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    hoverable: true,
    style: {
      width: "244px"
    },
    cover: __jsx("img", {
      alt: "example",
      style: {
        width: "100%",
        height: "198px"
      },
      src: post.PowerPostImages[0] ? `http://localhost:3065/${post.PowerPostImages[0].src}` : _logo2_png__WEBPACK_IMPORTED_MODULE_3___default.a
    })
  }, __jsx(PoastDiv, null, __jsx(TextDiv, null, post.title), __jsx(PriceDiv, null, post.price, "\uC6D0"), __jsx(TimeDiv, null, moment__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format('YYYY.MM.DD')))), post.boardNum === 5 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    hoverable: true,
    style: {
      width: "244px"
    },
    cover: __jsx("img", {
      alt: "example",
      style: {
        width: "100%",
        height: "198px"
      },
      src: post.TogetherPostImages[0] ? `http://localhost:3065/${post.TogetherPostImages[0].src}` : _logo2_png__WEBPACK_IMPORTED_MODULE_3___default.a
    })
  }, __jsx(PoastDiv, null, __jsx(TextDiv, null, post.title), __jsx(PriceDiv, null, post.originalPrice, "\uC6D0"), __jsx(TimeDiv, null, moment__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format('YYYY.MM.DD')))))));
}

/* harmony default export */ __webpack_exports__["a"] = (PostCard2);

/***/ })

/******/ });