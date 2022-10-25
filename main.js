(self["webpackChunkdata_entry"] = self["webpackChunkdata_entry"] || []).push([["main"],{

/***/ 7295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(6643);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6011);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _components_HeaderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1468);
/* harmony import */ var _styles_default_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6785);
/* harmony import */ var _styles_home_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9945);
/* harmony import */ var _styles_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2118);
/* harmony import */ var _styles_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2478);
/* harmony import */ var _styles_tab_styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(565);
/* harmony import */ var _styles_scenario_type_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9938);
/* harmony import */ var _styles_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7303);
/* harmony import */ var _styles_medications_styles_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9497);
/* harmony import */ var _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(592);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4733);
/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7472);
/* harmony import */ var _components_ScenarioTypeEditor_ScenarioTypeList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6542);
/* harmony import */ var _components_ScenarioTypeEditor_NewScenarioType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3301);
/* harmony import */ var _components_ScenarioTypeEditor_ScenarioType__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3259);
/* harmony import */ var _components_ScenarioEditor_ScenariosList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8034);
/* harmony import */ var _components_ScenarioEditor_NewScenario__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1470);
/* harmony import */ var _components_ScenarioEditor_EditScenario__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8866);
/* harmony import */ var _components_ScenarioEditor_CloneScenario__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7811);
/* harmony import */ var _components_ScenarioEditor_PublishScenario__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7586);
/* harmony import */ var _components_ClassCodes_ClassCodesList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9535);
/* harmony import */ var _components_ClassCodes_NewClassCode__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7486);
/* harmony import */ var _components_ClassCodes_ClassCode__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(8254);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/App.js";









 // import "./styles/problems-styles.scss";




















function App() {
  const {
    auth,
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebaseProject)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseProject);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.FirebaseContext.Provider, {
    value: {
      auth,
      db
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_28__.HashRouter, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_components_HeaderContext__WEBPACK_IMPORTED_MODULE_4__.HeaderContext.Provider, {
          value: {
            title: title,
            setTitle: setTitle
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Switch, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              exact: true,
              path: "/scenario-types",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ScenarioTypeEditor_ScenarioTypeList__WEBPACK_IMPORTED_MODULE_16__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              path: "/scenario-type/:scenarioTypeID",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ScenarioTypeEditor_ScenarioType__WEBPACK_IMPORTED_MODULE_18__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              exact: true,
              path: "/scenario-type",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ScenarioTypeEditor_NewScenarioType__WEBPACK_IMPORTED_MODULE_17__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              exact: true,
              path: "/scenarios",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ScenarioEditor_ScenariosList__WEBPACK_IMPORTED_MODULE_19__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              exact: true,
              path: "/scenario/",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ScenarioEditor_NewScenario__WEBPACK_IMPORTED_MODULE_20__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              path: "/scenario/:scenarioId/clone",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ScenarioEditor_CloneScenario__WEBPACK_IMPORTED_MODULE_22__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              path: "/scenario/:scenarioId/publish",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ScenarioEditor_PublishScenario__WEBPACK_IMPORTED_MODULE_23__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              path: "/scenario/:scenarioId",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ScenarioEditor_EditScenario__WEBPACK_IMPORTED_MODULE_21__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              exact: true,
              path: "/class-codes/",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ClassCodes_ClassCodesList__WEBPACK_IMPORTED_MODULE_24__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              exact: true,
              path: "/class-code/",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ClassCodes_NewClassCode__WEBPACK_IMPORTED_MODULE_25__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_2__.StaffRoute, {
              path: "/class-code/:classCode",
              authFlowLayout: _components_UnauthedLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
              component: _components_ClassCodes_ClassCode__WEBPACK_IMPORTED_MODULE_26__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.Route, {
              component: _components_HomePage__WEBPACK_IMPORTED_MODULE_15__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 8254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassCode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ClassCodes/ClassCode.js";






const COLLECTION_ID = 'class-codes'; // separate non-exported helper component, potentially refactor as reusable in it's own file

const ButtonBar = ({
  allowChangeOrder: _allowChangeOrder = true,
  n,
  of,
  moveUpHandler,
  moveDownHandler,
  removeHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      className: _allowChangeOrder ? "" : "hidden",
      disabled: 0 === n,
      onClick: () => moveUpHandler(n),
      children: "\u2191"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      className: _allowChangeOrder ? "" : "hidden",
      disabled: of === n,
      onClick: () => moveDownHandler(n),
      children: "\u2193"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: () => removeHandler(n),
      children: " X "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }, undefined)]
  }, void 0, true);
};

function ClassCode(props) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const {
    classCode
  } = props.match.params;
  const [scenarioVersions, setScenarioVersions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // used for everything other than assignments

  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [assignments, setAssignments] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  const getScenarioVersions = scen => scenarioVersions[scen];

  const getUnassignedScenarios = () => {
    const allScens = Object.keys(scenarioVersions);
    const assignedScens = assignments.map(assign => assign.name);
    return allScens.filter(scen => !assignedScens.includes(scen));
  };

  const getAssignmentIndex = scenName => assignments.findIndex(rec => rec.name === scenName);

  const addAssignment = scenName => {
    setAssignments([...assignments, {
      publishedScenarioID: "",
      name: scenName
    }]);
  };

  const removeAssignment = idx => {
    setAssignments([...assignments.slice(0, idx), ...assignments.slice(idx + 1)]);
  };

  const updateAssignment = (idx, newRecord) => {
    setAssignments([...assignments.slice(0, idx), newRecord, ...assignments.slice(idx + 1)]);
  };

  const swapAssignmentOrder = (idx1, idx2) => {
    const copy = assignments.slice();
    copy[idx1] = assignments[idx2];
    copy[idx2] = assignments[idx1];
    setAssignments(copy);
  };

  const handleMoveAssignmentUp = currIdx => swapAssignmentOrder(currIdx, currIdx - 1);

  const handleMoveAssignmentDown = currIdx => swapAssignmentOrder(currIdx, currIdx + 1);

  const handleChange = event => {
    const type = event.target.type;
    const name = event.target.name;
    const value = type === "checkbox" ? event.target.checked : event.target.value.trim(); // console.log(type, name, value)

    setState(prevState => Object.assign({}, prevState, {
      [name]: value
    }));
  };

  const handleAssignScenario = event => addAssignment(event.target.value);

  const handleSelectScenarioVersion = (event, scenarioName) => {
    const value = event.target.value.trim(); // console.log(scenarioName, value)

    const idx = getAssignmentIndex(scenarioName); // console.log(scenarioName, value, idx)

    if (-1 !== idx) {
      const newRecord = Object.assign({}, assignments[idx], {
        publishedScenarioID: value
      });
      updateAssignment(idx, newRecord);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if ("" === state.name) {
      setError("Please specify a name for this class code");
      return;
    } else if (!(0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.verifyDocNameUniqueness)(db, COLLECTION_ID, state.name, "name", "V2")) {
      setError("class code name must be unique");
      return;
    }

    assignments.forEach(assign => {
      if ("" === assign.publishedScenarioID) {
        setError(`please select which version of ${assign.name} you wish to use`);
      }
    });

    if (error) {
      return;
    }

    const data = {
      id: classCode,
      name: state.name,
      orderRequired: state.orderRequired,
      assignments: assignments
    };
    await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.saveDocument)(db, COLLECTION_ID, data);
    alert(`Assignments updated ${state.name}`);
    history.push('/class-codes-list/');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      // get list of published scenario versions and group then by scen name
      const scensAndVersions = {};
      const allScensAndVersions = await db.collection('published-scenarios').get();
      allScensAndVersions.forEach(doc => {
        // data is HUGE, we only need: id, name, datePublished, and version fields
        const {
          id,
          name,
          datePublished,
          version
        } = doc.data();

        if (!(name in scensAndVersions)) {
          scensAndVersions[name] = [];
        }

        scensAndVersions[name].push({
          id,
          datePublished,
          version
        });
      });
      setScenarioVersions(scensAndVersions);
    })();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (scenarioVersions) {
        const cc = await db.collection(COLLECTION_ID).doc(classCode).get();
        const ccData = cc.data();
        setState({
          name: ccData.name,
          orderRequired: ccData.orderRequired
        }); // filter out unpublished scenarios

        let tmp = ccData.assignments.filter(assign => Object.keys(scenarioVersions).includes(assign.name)); // set bad published versions IDs to "" to force either selection or removal by user

        tmp = tmp.map(assign => {
          const copy = Object.assign({}, assign);
          delete copy.order; // deal with legacy of field being id rather than publishedScenarioID

          if (copy.id) {
            copy.publishedScenarioID = copy.id;
            delete copy.id;
          }

          const versions = scenarioVersions[assign.name].map(ver => ver.id);

          if (!versions.includes(assign.publishedScenarioID)) {
            copy.publishedScenarioID = "";
          }

          return copy;
        });
        setAssignments(tmp);
      }
    })();
  }, [db, classCode, scenarioVersions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !!assignments && console.log(assignments);
  }, [assignments]);

  if (!assignments) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "scenario-assignment",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Class Code"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
      className: "assignment-title",
      children: ["Name:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "text",
        name: "name",
        value: state.name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
            children: "Scenario"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
            children: "Version"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 42
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 58
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
        children: assignments.map((assign, assignIdx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: assign.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
              value: assign.publishedScenarioID,
              onChange: event => handleSelectScenarioVersion(event, assign.name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                value: "",
                children: " - - -"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 33
              }, this), getScenarioVersions(assign.name).map(version => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                value: version.id,
                children: [version.version, " (", version.datePublished, ") "]
              }, version.id, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 37
              }, this))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ButtonBar, {
              n: assignIdx,
              of: assignments.length - 1,
              allowChangeOrder: state.orderRequired,
              moveUpHandler: handleMoveAssignmentUp,
              moveDownHandler: handleMoveAssignmentDown,
              removeHandler: removeAssignment
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, this)]
        }, assign.name, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: ["Add Scenario: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
        onChange: handleAssignScenario,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
          value: "",
          children: "---"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 17
        }, this), getUnassignedScenarios().map(scen => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
          children: scen
        }, scen, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 32
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
      className: "required-bttn",
      children: ["Order required:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "checkbox",
        name: "orderRequired",
        checked: state.orderRequired,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      type: "button",
      onClick: handleSubmit,
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 9
  }, this);
}
;

/***/ }),

/***/ 9535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassCodesList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6643);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ClassCodes/ClassCodesList.js";





const COLLECTION_ID = 'class-codes';
function ClassCodesList() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const [codes, setCodes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.getCollection)(db, COLLECTION_ID).then(result => {
      setCodes(result);
    }).catch(err => {
      console.log(err);
    });
  }, [db]);

  const handleDelete = async item => {
    let id = item.id;

    if (window.confirm('Are you sure you want to permanently this item? This cannot be undone!')) {
      await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.deleteDocument)(db, COLLECTION_ID, id);
      let dup = codes.slice();
      dup.splice(dup.indexOf(item), 1);
      setCodes(dup);
    } else console.log(`Delete of ${item.title} cancelled.`);
  };

  if (!codes) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "db-list",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Class Codes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: `/class-code/`,
      className: "new-bttn db-list-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        children: "New Class Code"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), codes.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "db-list-item",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        children: item.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "list-button-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
          to: `/class-code/${item.id}`,
          className: "action-bttn",
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          type: "button",
          className: "action-bttn delete-bttn",
          onClick: () => handleDelete(item),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this)]
    }, item.id, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 7486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewClassCode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ClassCodes/NewClassCode.js";






const COLLECTION_ID = "class_codes";
function NewClassCode() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if ("" === name) {
      setError("Please enter a name for this class code");
      return;
    }

    const isUnique = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.verifyDocNameUniqueness)(db, COLLECTION_ID, name, "name", "V2");

    if (!isUnique) {
      setError("Class code must be unique");
      return;
    }

    setError(null);
    const docRef = db.collection("class-codes").doc();
    await docRef.set({
      id: docRef.id,
      name: name,
      assignments: [],
      orderRequired: false,
      schemaVersion: "V2"
    }); // alert(`created ${name}`)

    history.push(`/class-codes/${docRef.id}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Create Class Code"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
      children: ["Title", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "text",
        value: name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      type: "button",
      onClick: handleSubmit,
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: error ? "" : "hidden",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 4733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6011);
/* harmony import */ var _HeaderContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1468);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/Header.js";






const Header = () => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();
  let location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
  const {
    currentUser,
    signOutUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.AuthContext);
  const {
    title
  } = (0,_HeaderContext__WEBPACK_IMPORTED_MODULE_2__.useHeader)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("header", {
    className: "title-bar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      onClick: () => history.push('/'),
      children: "MDBedit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }, undefined), !!title && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
      children: [location.pathname !== '/' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "button",
        className: "home-bttn",
        onClick: () => history.push('/'),
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 4
      }, undefined), currentUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "button",
        className: "sign-out-bttn",
        onClick: () => signOutUser(),
        children: "Sign Out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 1468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderContext": () => (/* binding */ HeaderContext),
/* harmony export */   "useHeader": () => (/* binding */ useHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const HeaderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  title: undefined,
  setTitle: undefined
});
const useHeader = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(HeaderContext);

/***/ }),

/***/ 7472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6643);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/HomePage.js";




const HomePage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("nav", {
    className: "home-nav-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/scenario-types",
      className: "home-nav-link",
      children: "Scenario Types"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/scenarios",
      className: "home-nav-link",
      children: "Scenarios"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/class-codes",
      className: "home-nav-link",
      children: "Class Codes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ 6152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3980);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/Modal.js";




const Modal = ({
  title,
  isOpen,
  close,
  children,
  closeButton: _closeButton = true
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("modal", isOpen ? "" : "hidden"),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "modal-dialog",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "modal-header",
        children: [!!_closeButton && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          className: "close-button",
          onClick: () => close(),
          children: "\xD7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 39
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "modal-title",
          children: [title, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "modal-body",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

Modal.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  __TYPE: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
Modal.defaultProps = {
  __TYPE: "MODAL"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ 3442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasicInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2774);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6635);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8913);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1835);
/* harmony import */ var _ScenarioEditorLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3724);
/* harmony import */ var _formUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5975);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/BasicInfo.js";










const pt = 'patientInformation';
function BasicInfo() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const {
    scenarioId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const {
    scenario,
    updateScenarioFld,
    saveScenario
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_5__.useScenarioEditor)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [origState, setOrigState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stateUpdated, setStateUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [hasChanges, setHasChanges] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [readyToSave, setReadyToSave] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const performValidation = () => {
    return (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.validateScenarioNameUniqueness)(db, state.name, scenario);
  };

  const saveHandler = async event => {
    if (!(await performValidation())) {
      alert("scenario name is not unique");
    } else {
      setReadyToSave(true);
    }
  };

  const updateState = (fldPath, value) => {
    setState(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().set(state, fldPath, value));
    setStateUpdated(true);
  };

  const blurNameHandler = async event => {
    if (!(await (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.validateScenarioNameUniqueness)(db, state.name, scenario))) {
      alert("scenario name is not unique");
    }
  };

  const radioChange = event => {
    const {
      name,
      value
    } = event.target;
    updateState(name, value === "true");
  };

  const changeHandler = event => {
    const {
      id: fldPath,
      value
    } = event.target;
    updateState(fldPath, value);
  };

  const changeNumericFieldHandler = event => {
    const {
      id: fldPath,
      value
    } = event.target;
    let val = parseInt(value, 10);
    updateState(fldPath, val);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!state) {
      // *should* only run on initial render
      const tmp = {
        name: scenario.name,
        info: scenario.info
      };
      setState(tmp);
      setOrigState(tmp);
    }
  }, [scenarioId, scenario, state]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stateUpdated) {
      // prevent endless loop
      setStateUpdated(false);
      setHasChanges(!lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqualWith(state, origState, _formUtils__WEBPACK_IMPORTED_MODULE_7__.ignoreTrailingSpaceInStrings));
    }
  }, [stateUpdated, state, origState]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (readyToSave) {
      setReadyToSave(false); // persist local state to scenario

      updateScenarioFld("name", state.name);
      updateScenarioFld("info", state.info); // set form to no longer have changes

      setOrigState(state);
      setHasChanges(false); //persist local state to db

      const saveToDB = async () => {
        // NOTE: only update the db with the data from our local state
        const scenData = Object.assign({}, await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.getScenarioByID)(db, scenarioId), {
          name: state.name,
          info: state.info
        });
        await saveScenario(scenData);
      };

      saveToDB();
    }
  }, [db, readyToSave, scenarioId, state, updateScenarioFld, saveScenario]);

  if (!state) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ScenarioEditorLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Save changes to Info",
    haveChanges: hasChanges,
    saveHandler: saveHandler,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      id: "basic-info",
      className: "info-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
        children: "Basic Information:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
        children: ["Scenario Name:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
          id: "name",
          type: "text",
          value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'name'),
          onChange: changeHandler,
          onBlur: blurNameHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        children: ["Followup with Debriefing:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          style: {
            display: "inline-flex"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            style: {
              display: "inline-flex"
            },
            type: "radio",
            name: "info.debriefing",
            value: true,
            checked: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.debriefing') === true,
            onChange: radioChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 7
          }, this), "Yes"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          style: {
            display: "inline-flex"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            style: {
              display: "inline-flex"
            },
            type: "radio",
            name: "info.debriefing",
            value: false,
            checked: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.debriefing') === false,
            onChange: radioChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 7
          }, this), "No"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
        children: ["Instructor Info:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("textarea", {
          id: "info.instructorInformation",
          value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.instructorInformation'),
          onChange: changeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
        children: ["Dispatch Info:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("textarea", {
          id: "info.dispatchInfo",
          value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.dispatchInfo'),
          onChange: changeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
        children: ["Scene assessment:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("textarea", {
          id: "info.sceneAssessment",
          value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.sceneAssessment'),
          onChange: changeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
        children: ["Maximum time for scenario:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
          id: "info.maxTime",
          type: "number",
          placeholder: "minutes",
          value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.maxTime'),
          onChange: changeNumericFieldHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
        children: "Patient Info:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        id: "pt-info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          children: ["Moulage:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            id: `info.${pt}.moulage`,
            value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.patientInformation.moulage'),
            onChange: changeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          children: ["Position:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            id: `info.${pt}.position`,
            value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.patientInformation.position'),
            onChange: changeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          children: ["Actions:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            id: `info.${pt}.actions`,
            value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.patientInformation.actions'),
            onChange: changeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          children: ["Age:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "number",
            id: `info.${pt}.age`,
            value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.patientInformation.age'),
            onChange: changeNumericFieldHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          children: ["Weight (kg):", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "number",
            id: `info.${pt}.weight`,
            value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.patientInformation.weight'),
            onChange: changeNumericFieldHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          children: ["Gender:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            id: `info.${pt}.gender`,
            value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, 'info.patientInformation.gender'),
            onChange: changeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 3
  }, this);
}
;

/***/ }),

/***/ 8123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckListCorrectness)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7267);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6635);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8913);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1835);
/* harmony import */ var _ScenarioEditorLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3724);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/CheckListCorrectness.js";










const getLabel = obj => {
  if (!!obj.abbrLabel && "" !== obj.abbrLabel) {
    return obj.abbrLabel;
  } else {
    return obj.label;
  }
};

function CheckListCorrectness() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const {
    scenarioId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const {
    scenario,
    saveScenario,
    updateScenarioFld,
    scenarioType
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_5__.useScenarioEditor)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // prompt ids mapped to option ids

  const [origState, setOrigState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // simply so we can compare to check for changes

  const [prompts, setPrompts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // list of prompts and their options, not their current values

  const [hasChanges, setHasChanges] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // used to enable/disable save btn

  const [stateUpdated, setStateUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // if true, the value of hasChanges will be determined

  const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // prompt ids -> bool to mark which aren't answered

  const [readyToSave, setReadyToSave] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // no validation errors present, ok to persist state

  const performValidation = () => {
    let haveErrors = false;
    const errs = {};
    Object.entries(state).forEach(([key, value]) => {
      if (!value) {
        haveErrors = true;
        errs[key] = true;
      } else {
        errs[key] = false;
      }
    });

    if (haveErrors) {
      setValidationErrors(errs);
    }

    return !haveErrors;
  };

  const saveHandler = event => {
    if (performValidation()) {
      setReadyToSave(true);
    }
  };

  const changeHandler = event => {
    const {
      name,
      value
    } = event.target;
    setState(prevState => Object.assign({}, prevState, {
      [name]: value
    }));
    setStateUpdated(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!prompts) {
      const tmp = scenario.checkListCorrectness;
      setState(tmp);
      setOrigState(tmp);
      const tmp2 = [];
      const valErrors = {};
      Object.entries(tmp).forEach(([key, value]) => {
        tmp2.push(scenarioType.getDecisionWithOptions(key));
        valErrors[key] = false;
      });
      setPrompts(tmp2);
      setValidationErrors(valErrors);
    }
  }, [scenarioId, prompts, scenario.checkListCorrectness, scenarioType]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stateUpdated) {
      // guard to prevent endless loop
      setStateUpdated(false);

      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(state, origState)) {
        setHasChanges(true);
      }
    }
  }, [stateUpdated, state, origState]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (readyToSave) {
      // prevent endless loop. particulary since this hits the db
      setReadyToSave(false);
      setHasChanges(false); // persist our local state to the scenario

      updateScenarioFld("checkListCorrectness", state);

      const saveToDB = async () => {
        const scenData = Object.assign({}, await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.getScenarioByID)(db, scenarioId), {
          checkListCorrectness: state
        });
        await saveScenario(scenData);
      };

      saveToDB();
    }
  }, [readyToSave, scenarioId, state, updateScenarioFld, saveScenario]);

  if (!state) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ScenarioEditorLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Save changes to Checklist Correctness",
    haveChanges: hasChanges,
    saveHandler: saveHandler,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      id: "checklist-options",
      className: "info-wrapper",
      children: prompts.map(prompt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        style: {
          paddingBottom: "20px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
          children: getLabel(prompt)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 50
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("error", {
            hidden: !validationErrors[prompt.id]
          }),
          children: "Please select an option"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }, this), prompt.options.map(opt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "radio",
              name: prompt.id,
              value: opt.id,
              checked: state[prompt.id] === opt.id,
              onChange: changeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 37
            }, this), getLabel(opt)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 33
          }, this)]
        }, opt.id, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 29
        }, this))]
      }, prompt.id, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 7811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloneScenario)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var _traumaScenario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1070);
/* harmony import */ var _SetScenarioNameForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6653);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/CloneScenario.js";






function CloneScenario(props) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const {
    scenarioId
  } = props.match.params;
  const [scenario, setScenario] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      const doc = await db.collection("scenarios").doc(scenarioId).get();
      const scenData = doc.data();
      const scenTypeData = await (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_2__.getScenarioTypeObject)(db, scenData.scenarioType, scenData.schemaVersion);
      delete scenData.id;
      delete scenData.name;
      setScenario((0,_traumaScenario__WEBPACK_IMPORTED_MODULE_3__.updateSchema)(scenData, scenTypeData));
    })();
  }, [db, scenarioId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: scenario ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SetScenarioNameForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      scenario: scenario,
      isTemplate: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 8866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditScenario)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7267);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6643);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var _traumaScenario_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1070);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1835);
/* harmony import */ var _HeaderContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1468);
/* harmony import */ var _BasicInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3442);
/* harmony import */ var _PatientStatus_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3414);
/* harmony import */ var _Steplist_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3517);
/* harmony import */ var _CheckListCorrectness_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8123);
/* harmony import */ var _Medications_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6171);
/* harmony import */ var _InterventionAnswers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4736);
/* harmony import */ var _ProblemsList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9362);
/* harmony import */ var _Problem2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6462);
/* harmony import */ var _Solution2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4297);
/* harmony import */ var _ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/EditScenario.js";


















const COLLECTION_ID = 'scenarios';
function EditScenario() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const {
    scenarioId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)();
  const {
    setTitle
  } = (0,_HeaderContext_js__WEBPACK_IMPORTED_MODULE_5__.useHeader)();
  const [scenario, setScenario] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [scenarioTypeData, setScenarioTypeData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [uniqueIDs, setUniqueIDs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const updateScenarioFld = (fldName, fldVal) => {
    setScenario(prevState => Object.assign({}, prevState, {
      [fldName]: fldVal
    }));
  };

  const problems = {
    add: obj => updateScenarioFld("problems", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.appendObjToArray)(scenario.problems, obj)),
    update: obj => updateScenarioFld("problems", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.updateObjInArray)(scenario.problems, obj)),
    remove: id => updateScenarioFld("problems", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.removeObjWithIdFromArray)(scenario.problems, id))
  };
  const solutions = {
    add: obj => updateScenarioFld("solutions", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.appendObjToArray)(scenario.solutions, obj)),
    update: obj => updateScenarioFld("solutions", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.updateObjInArray)(scenario.solutions, obj)),
    remove: id => updateScenarioFld("solutions", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.removeObjWithIdFromArray)(scenario.solutions, id))
  };
  const actions = {
    add: obj => updateScenarioFld("actions", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.appendObjToArray)(scenario.actions, obj)),
    update: obj => updateScenarioFld("actions", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.updateObjInArray)(scenario.actions, obj)),
    remove: id => updateScenarioFld("actions", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_15__.removeObjWithIdFromArray)(scenario.actions, id))
  };

  const saveScenario = async scenData => {
    // strips fields whose values are "undefined". there *must* be a better way
    // I imagine better field validation is in order
    const data = JSON.parse(JSON.stringify(scenData)); // setScenario(data)

    await (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_2__.saveDocument)(db, "scenarios", data);
    alert("changes saved");
  };

  const loadScenario = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const load = async () => {
      const scenData = await (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_2__.getDocument)(db, COLLECTION_ID, scenarioId);
      const scenTypeData = await (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_2__.getScenarioTypeObject)(db, scenData.scenarioType, scenData.schemaVersion); // make use of scenTypeData and other sources to ensure data from db is in sync
      // with latest schema

      const scen = (0,_traumaScenario_js__WEBPACK_IMPORTED_MODULE_3__.updateSchema)(scenData, scenTypeData);
      setTitle(`Scenario: ${scen.name}`);
      setScenarioTypeData(scenTypeData);
      setScenario(scen);
    };

    load();
  }, [db, scenarioId, setTitle]); // Load and apply selected scenario

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!scenario || scenario.id !== scenarioId) {
      loadScenario();
    }
  }, [scenarioId, setTitle, scenario, loadScenario]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (scenario) {
      // console.log(scenario)
      let ids = [...scenarioTypeData.uniqueIDs];
      ids = ids.concat(scenario.problems.map(e => e.id));
      scenario.problems.forEach(p => {
        // ids = ids.concat(p.assessments.map(e => e.id))
        ids = ids.concat(p.notes.map(e => e.id));
      });
      ids = ids.concat(scenario.solutions.map(e => e.id)); // ids = ids.concat(scenario.actions.map(e => e.id))

      setUniqueIDs(ids);
    }
  }, [scenarioTypeData, scenario]);

  if (!scenario || !scenarioTypeData) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }, this);
  } else {
    window.scenario = scenario;
    window.scenarioType = scenarioTypeData;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
    className: "scenario-editor",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("nav", {
      id: "tab-selector",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: `/scenario/${scenarioId}/basic-info`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: `/scenario/${scenarioId}/patient-status`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Patient Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: `/scenario/${scenarioId}/assessment-findings`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Assessment Findings"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: `/scenario/${scenarioId}/checklist-correctness`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Checklist Correctness"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: `/scenario/${scenarioId}/medications`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Medications"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: `/scenario/${scenarioId}/problems`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Problems"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: `/scenario/${scenarioId}/intervention-answers`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Intervention Answers"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_4__.ScenarioEditorContext.Provider, {
      value: {
        scenario,
        updateScenarioFld,
        problems,
        solutions,
        actions,
        uniqueIDs,
        uniqueLabels: scenarioTypeData.uniqueLabels,
        saveScenario,
        scenarioType: scenarioTypeData
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/basic-info",
          component: _BasicInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/patient-status",
          component: _PatientStatus_js__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/assessment-findings",
          component: _Steplist_js__WEBPACK_IMPORTED_MODULE_8__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/checklist-correctness",
          component: _CheckListCorrectness_js__WEBPACK_IMPORTED_MODULE_9__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/medications",
          component: _Medications_js__WEBPACK_IMPORTED_MODULE_10__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/problems/:probID/solutions/:solID",
          component: _Solution2__WEBPACK_IMPORTED_MODULE_14__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/problems/:probID",
          component: _Problem2__WEBPACK_IMPORTED_MODULE_13__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/problems",
          component: _ProblemsList__WEBPACK_IMPORTED_MODULE_12__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId/intervention-answers",
          component: _InterventionAnswers_js__WEBPACK_IMPORTED_MODULE_11__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
          path: "/scenario/:scenarioId",
          component: _BasicInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ 4736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InterventionAnswers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7267);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2774);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8913);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5558);
/* harmony import */ var _meddbriefer_scenario_data_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7414);
/* harmony import */ var _ScenarioEditorLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3724);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1835);
/* harmony import */ var _IntvVariantPrompts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2648);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/InterventionAnswers.js";

 // import classnames from "classnames";











const getLabel = obj => {
  let retVal = "Unable to find label for non-existant object";

  if (obj) {
    if ("abbrLabel" in obj && "" !== obj.abbrLabel) {
      retVal = obj.abbrLabel;
    } else {
      retVal = obj.label;
    }
  }

  return retVal;
};

function InterventionAnswers() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_2__.useFirebase)();
  const {
    scenarioId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const {
    scenario,
    scenarioType,
    updateScenarioFld,
    saveScenario
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_7__.useScenarioEditor)();
  const [intvs, setIntvs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [intvVariantContexts, setIntvVariantContexts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [readyToSave, setReadyToSave] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const saveHandler = async event => {
    // console.log("save handler clicked", state)
    updateScenarioFld("interventionVariantAnswers", state);
    const scen = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_3__.getScenarioByID)(db, scenarioId);
    scen.interventionVariantAnswers = state;
    await saveScenario(scen);
  };

  const getIntervention = intvID => intvs.find(rec => rec.id === intvID);

  const getIntvVariantPromptState = (intvID, variantJSON, promptID) => state[intvID][variantJSON][promptID];

  const setIntvVariantPromptState = (intvID, variantJSON, promptID, val) => {
    const fldPath = `${intvID}.${variantJSON}.${promptID}`; // console.log("settingState: ", fldPath, val)

    setState(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().set(state, fldPath, val));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( // on page load:
  // figure out the set of interventions by reviewing current problems, solutions and actions
  //  * only consider actions with protocol relationship of REQUIRED
  //  * then filter out interventions without prompts
  //  * then group them by intervention variant, resulting in intv variants mapped to the list of actions
  //    they are associated with, which is most likely one, but unfortunately we need to do this
  () => {
    if (!intvs) {
      // get set of all intervention IDs listed for REQUIRED actions
      const intvIDs = Array.from(new Set(scenario.actions.filter(act => [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_4__.PROTOCOL_RELATIONSHIPS.REQ, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_4__.PROTOCOL_RELATIONSHIPS.ALT, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_4__.PROTOCOL_RELATIONSHIPS.OPT].includes(act.protocolRelationship)).map(e => e.interventionID))); // console.log(intvIDs)
      // filter this down to only interventions which have prompts

      const intvIDsWithPrompts = intvIDs.filter(intvID => {
        const intv = scenarioType.getIntervention(intvID);
        return intv.prompts !== undefined && intv.prompts.length > 0;
      }); // console.log(intvIDsWithPrompts)

      setIntvs(intvIDsWithPrompts.map(intvID => scenarioType.getInterventionForm(intvID)));
    }
  }, [intvs, scenario.actions, scenarioType]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!!intvs && !intvVariantContexts) {
      const intvIDsWithPrompts = intvs.map(intv => intv.id); // console.log(intvIDsWithPrompts)
      // get all actions which refer to this filtered set of intervention IDs

      const relevantActions = scenario.actions.filter(act => intvIDsWithPrompts.includes(act.interventionID)).map(rec => Object.assign({}, rec, {
        interventionVariant: (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_3__.intvVariant2JSON)(rec.interventionVariant)
      })); // console.log(relevantActions)
      // group relevent actions by interventionID  intvID => action[]

      const actionsByIntvID = (0,_meddbriefer_scenario_data_utils__WEBPACK_IMPORTED_MODULE_5__.groupByKey)(relevantActions, "interventionID"); // console.log(actionsByIntvID)
      // create secondary index on interventionVariant  intvID => intvVarariant => action[]
      // const intvID2Variant2Actions = {}

      const ctxs = [];
      Object.entries(actionsByIntvID).forEach(([intvID, actions]) => {
        const actionsByIntvVariant = (0,_meddbriefer_scenario_data_utils__WEBPACK_IMPORTED_MODULE_5__.groupByKey)(actions, "interventionVariant");
        Object.entries(actionsByIntvVariant).forEach(([variantJSON, actions]) => {
          const variant = JSON.parse(variantJSON);
          let variantDesc = "";
          Object.entries(variant).forEach(([promptID, ansID]) => {
            const pt = scenarioType.getPrompt(promptID);

            if (!pt) {
              console.log(`prompt: ${promptID} not found`);
            }

            const promptLabel = getLabel(pt);
            const ans = scenarioType.getAnswer(ansID);

            if (!ans) {
              console.log(`intv: ${intvID} prompt ${promptID}: answer: ${ansID} not found`);
            }

            const ansLabel = getLabel(ans);
            variantDesc += ` ${promptLabel} ${ansLabel}`;
          }); // console.log(variantJSON, actions)

          const contexts = actions.map(action => {
            const prob = scenario.problems.find(rec => rec.id === action.problemID);
            const sol = scenario.solutions.find(rec => rec.id === action.solutionID);
            return `${prob.label} - ${sol.label}`;
          }).join(", ");
          ctxs.push({
            intvID,
            variantJSON,
            intvLabel: intvs.find(rec => rec.id === intvID).abbrLabel,
            variantDesc,
            contexts
          });
        }); // intvID2Variant2Actions[intvID] = actionsByIntvVariant
      }); // console.log(intvID2Variant2Actions)
      // console.log(ctxs)

      setIntvVariantContexts(ctxs);
    }
  }, [scenarioId, intvs, intvVariantContexts, scenario.problems, scenario.solutions, scenario.actions, scenarioType]); // const getDefaultAnswer = (prompt) => (prompt.selectionType === ST.ONE) ? "" : []

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( // on page load, after the computing of actions:
  // create non-filled out forms and clobber with any answers already stored in the db
  () => {
    if (!!intvVariantContexts && !state) {
      const intvAnswers = scenario.interventionVariantAnswers;
      const initState = {};
      intvVariantContexts.forEach(ctx => {
        const {
          intvID,
          variantJSON
        } = ctx;

        if (!(intvID in initState)) {
          initState[intvID] = {};
        }

        initState[intvID][variantJSON] = {};
        const intv = intvs.find(intv => intv.id === intvID);
        intv.prompts.forEach(prompt => {
          if (intvAnswers[intvID] && intvAnswers[intvID][variantJSON] && intvAnswers[intvID][variantJSON][prompt.id]) {
            let dbStoredAnswer = intvAnswers[intvID][variantJSON][prompt.id];

            if (!Array.isArray(dbStoredAnswer)) {
              //ensure all prompt answers are now arrays
              dbStoredAnswer = [dbStoredAnswer];
            }

            initState[intvID][variantJSON][prompt.id] = dbStoredAnswer;
          } else {
            // all answers are initialized to empty array, regardless of prompt selectionType value
            initState[intvID][variantJSON][prompt.id] = [];
          }
        });
      });
      setState(initState);
    }
  }, [state, scenario, intvs, intvVariantContexts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // whenever state changes determine whether all fields are filled out, and thus
    // ready to save
    if (state) {
      // console.log("state changed", state)
      let filledOut = true;
      Object.keys(state).forEach(intvID => {
        Object.keys(state[intvID]).forEach(variant => {
          Object.entries(state[intvID][variant]).forEach(([promptID, value]) => {
            if (value === "" || "object" === typeof value && value.length === 0) {
              filledOut = false;
            }
          });
        });
      });
      setReadyToSave(filledOut);
    }
  }, [state]);

  if (!state) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ScenarioEditorLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Save Changes to Intervention Answers",
    haveChanges: readyToSave,
    saveHandler: saveHandler,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      id: "intv-answers",
      className: "info-wrapper",
      children: intvVariantContexts.map((ctx, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        style: {
          marginBottom: "20px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_IntvVariantPrompts__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
          intvGetter: getIntervention,
          promptValueGetter: getIntvVariantPromptState,
          promptValueSetter: setIntvVariantPromptState
        }, ctx), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 25
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/IntvVariantPrompts.js";

 // import { useScenarioEditor } from "./ScenarioEditorContext"



const getLabel = obj => !obj.abbrLabel ? obj.label : obj.abbrLabel; // const escapeQuotes = (txt) => txt.replace(/"/g, '\\"')


const escapeQuotes = text => text;

const GroupWrapper = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
    style: {
      marginLeft: "5px",
      marginBottom: "10px",
      listStyle: "none"
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

const CheckboxGroup = ({
  name,
  options,
  getter,
  setter
}) => {
  const changeHandler = event => {
    const oldValue = getter();
    const {
      value,
      checked
    } = event.target;
    let newValue;

    if (checked) {
      if (!oldValue.includes(value)) {
        newValue = oldValue.concat(value);
      } else {
        // do nothing
        newValue = [...oldValue];
      }
    } else {
      newValue = oldValue.filter(e => e !== value);
    } // console.log(oldValue, value, checked, newValue)


    setter(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(GroupWrapper, {
    children: options.map((option, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "checkbox",
          name: escapeQuotes(name),
          value: option.value,
          checked: getter().includes(option.value),
          onChange: changeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, undefined), "\xA0 ", option.label]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
}; // eslint-disable-next-line @typescript-eslint/no-unused-vars


const RadioGroup = ({
  name,
  options,
  getter,
  setter
}) => {
  const changeHandler = event => {
    const {
      value
    } = event.target;
    setter(value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(GroupWrapper, {
    children: options.map((option, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "radio",
          name: escapeQuotes(name),
          value: option.value,
          checked: option.value === getter(),
          onChange: changeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, undefined), "\xA0 ", option.label]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, undefined);
};

const describeCorrectAnswerSemantics = selectionType => {
  switch (selectionType) {
    case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM_AND:
      return "Student correctness requires all answers selected below (logical AND)";

    case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM_OR:
      return "Student correctness requires at least one of the answers selected below (logical OR)";

    case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM:
      return "FIXME: THE SELECTION TYPE FOR THIS PROMPT MUST BE SET TO EITHER 'one-or-more-logical-and' OR 'one-or-more-logical-or";

    case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.ONE:
      return "Student correctness requires that one of the selected below is chosen";

    default:
      return "FIXME: UNSUPPORTED SELECTION TYPE. UPDATE THIS PROMPT";
  }
};

const IntvVariantPrompt = ({
  intv,
  variant,
  prompt,
  stateGetter,
  stateSetter
}) => {
  // console.log(prompt)
  const getValue = () => stateGetter(intv.id, variant, prompt.id);

  const setValue = value => stateSetter(intv.id, variant, prompt.id, value);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    style: {
      marginLeft: "10px"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
      children: prompt.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, undefined), "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      style: {
        fontSize: "smaller"
      },
      children: ["(", describeCorrectAnswerSemantics(prompt.selectionType), ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 36
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CheckboxGroup, {
      name: `${intv.id}.${variant}.${prompt.id}`,
      options: prompt.answers.map(ans => {
        return {
          value: ans.id,
          label: getLabel(ans)
        };
      }),
      getter: getValue,
      setter: setValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 9
  }, undefined);
}; // {prompt.selectionType === SELECTION_TYPES.ONE
//  ? <RadioGroup
//         name={`${intv.id}.${variant}.${prompt.id}`}
//         options={
//             prompt.answers.map(ans => {
//                 return {
//                     value: ans.id,
//                     label: getLabel(ans)
//                 }
//             })
//         }
//         getter={getValue}
//         setter={setValue}
//     />


const IntvVariantPrompts = ({
  intvID,
  variantJSON,
  intvLabel,
  variantDesc,
  contexts,
  intvGetter,
  promptValueGetter,
  promptValueSetter
}) => {
  // const {scenario, scenarioType} = useScenarioEditor()
  const [intv, setIntv] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!intv) {
      setIntv(intvGetter(intvID));
    }
  }, [intvID, intv, intvGetter]);

  if (!intv) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: "calculating"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
        children: "Intervention: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, undefined), " ", intvLabel, "" === variantDesc ? " " : `: ${variantDesc} `, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
        children: " Used By: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, undefined), " ", contexts]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      children: intv.prompts.map(prompt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(IntvVariantPrompt, {
          intv: intv,
          variant: variantJSON,
          prompt: prompt,
          stateGetter: promptValueGetter,
          stateSetter: promptValueSetter
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, undefined)
      }, prompt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntvVariantPrompts);

/***/ }),

/***/ 1424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contraindications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_contraindications_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1091);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/MedContraindications.js";



function Contraindications({
  parent,
  med,
  update
}) {
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [contraindications, setContraindications] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setContraindications(_data_contraindications_json__WEBPACK_IMPORTED_MODULE_1__.filter(indc => med.contraindications.includes(indc)));
  }, [med.contraindications]);

  const changeView = () => setExpanded(e => !e);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "contraindications",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "dropdown",
      onClick: changeView,
      children: "Contraindications \u2B9F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: `checklist ${!expanded ? "hidden" : ""}`,
      children: contraindications.map(c => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "contraindication",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
            type: "checkbox",
            onChange: update,
            value: c,
            name: "contraindications",
            defaultChecked: parent.contraindications.includes(c)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, this), c]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, this)
      }, c, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 6171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1835);
/* harmony import */ var _MedContraindications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1424);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/Medications.js";



 // import { processForm } from './formUtils';



const Medications = ({
  active
}) => {
  const {
    scenario,
    saveScenario,
    scenarioType
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioEditor)();
  const formEL = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isAdult = scenario.info.patientInformation.age >= 14;

  const clickHandler = async event => {
    event.preventDefault();
    await saveScenario(scenario);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "scenario-form-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("scenario-form", {
        "scenario-view-hidden": false
      }),
      ref: formEL,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: "save-changes",
        type: "submit",
        onClick: clickHandler,
        children: "Save Changes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "info-wrapper",
        id: "medications",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
          children: "Medication Dosages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "meds-wrapper",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("table", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                  children: "Medication"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                  children: "Administrative Route"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                  children: "Initial Dosage"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                  children: "Contraindications"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
              children: scenarioType._medications.map(med => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Med, {
                med: med,
                isAdult: isAdult,
                scenario: scenario
              }, med.id, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 37
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: "save-changes",
        type: "submit",
        onClick: clickHandler,
        children: "Save Changes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Medications);

const Med = ({
  scenario,
  med,
  isAdult
}) => {
  let self = scenario.correctMedicationDosages[med.id];
  const type = isAdult ? "adult" : "pediatric";
  if (!self.route) self.route = "";
  if (!self.contraindications) self.contraindications = [];

  const handleSelect = e => {
    console.log(e.target.value);
    self.route = e.target.value;
  };

  const handleInput = e => {
    self[e.target.name] = e.target.value;
  };

  const handleCheck = e => {
    const kind = e.target.name;
    const val = e.target.value;
    e.target.checked ? self[kind].push(val) : self[kind].splice(self[kind].indexOf(val), 1);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
      children: med.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "route-dropdown",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
          id: `correctMedicationDosages-${med.id}-route`,
          defaultValue: self.route,
          onChange: handleSelect,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
            hidden: true,
            children: "-- Select Route --"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, undefined), med[type].routes.map(route => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
            value: route,
            children: route
          }, route, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "value-hint",
        children: med[type].initialDosage || "None Set"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        type: "text",
        id: `correctMedicationDosages-${med.id}-initialDosage`,
        defaultValue: self["initialDosage"],
        name: "initialDosage",
        onChange: handleInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
      align: "center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MedContraindications__WEBPACK_IMPORTED_MODULE_3__["default"], {
        med: med,
        parent: self,
        update: handleCheck
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, undefined)]
  }, `${med.id}-row`, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ 1470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewScenario)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var _traumaScenario_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1070);
/* harmony import */ var _SetScenarioNameForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6653);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/NewScenario.js";






function NewScenario() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const [scenario, setScenario] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      const scenTypeData = await (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_2__.getScenarioTypeObject)(db, "trauma", "V2");
      setScenario((0,_traumaScenario_js__WEBPACK_IMPORTED_MODULE_3__.updateSchema)({}, scenTypeData));
    })();
  }, [db]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SetScenarioNameForm_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    scenario: scenario,
    isClone: false
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 3414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatientStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2774);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6635);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8913);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1835);
/* harmony import */ var _ScenarioEditorLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3724);
/* harmony import */ var _formUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5975);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/PatientStatus.js";










const VITALS = ["BP", "P", "R", "Skin", "Spo2", "ETCO2", "GCS", "Glucose", "Pain", "Temp"];
const TYPES = ["initial", "good", "bad"];
const SAMPLE = ["S", "A", "M", "P", "L", "E"];
const OPQRST = ["O", "P", "Q", "R", "S", "T"];
function PatientStatus() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_3__.useFirebase)();
  const {
    scenarioId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const {
    scenario,
    updateScenarioFld,
    saveScenario
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_5__.useScenarioEditor)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [origState, setOrigState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // so we can compare orig to current efficiently

  const [hasChanges, setHasChanges] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // if 'true', our save btn will be enabled

  const [stateUpdated, setStateUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // if 'true', a useEffect() determines the value of hasChanges

  const [readyToSave, setReadyToSave] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // set to 'true' after field values have been cleaned

  const cleanFieldValues = () => {
    let cleanedValues = Object.assign({}, state);
    VITALS.forEach(vital => {
      TYPES.forEach(typ => {
        const fldPath = `vitalSigns.${vital}.${typ}`;
        cleanedValues = (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.applyFieldDefaultValue)(cleanedValues, fldPath, "Unable to assess");
        cleanedValues = (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.trimFieldValue)(cleanedValues, fldPath);
      });
    });
    SAMPLE.forEach(fld => {
      const fldPath = `SAMPLE.${fld}`;
      cleanedValues = (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.applyFieldDefaultValue)(cleanedValues, fldPath, 'unknown');
      cleanedValues = (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.trimFieldValue)(cleanedValues, fldPath);
    });
    OPQRST.forEach(fld => {
      const fldPath = `OPQRST.${fld}`;
      cleanedValues = (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.applyFieldDefaultValue)(cleanedValues, fldPath, "unable to assess");
      cleanedValues = (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.trimFieldValue)(cleanedValues, fldPath);
    });

    if (!lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqual(state, cleanedValues)) {
      console.log("some fields were cleaned. updating state"); //update all changes in one fell swoop

      setState(cleanedValues);
    }
  };

  const saveHandler = event => {
    cleanFieldValues();
    setReadyToSave(true);
  };

  const updateState = (fldPath, value) => {
    setState(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().set(state, fldPath, value));
    setStateUpdated(true);
  };

  const changeHandler = event => {
    const {
      id: fldPath,
      value
    } = event.target;
    updateState(fldPath, value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // *should* only run on initial load
    if (!state) {
      const tmp = {
        vitalSigns: scenario.vitalSigns,
        SAMPLE: scenario.SAMPLE,
        OPQRST: scenario.OPQRST
      }; // unlike 'state', 'origState' only gets updated hear and when saving. It's purpose is to allow for
      // comparison (hasChanges)

      setOrigState(tmp);
      setState(tmp);
    }
  }, [scenarioId, scenario, state]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stateUpdated) {
      // hasChanges may change between true and false as we make changes/set things back to orig values
      const hc = !lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqualWith(origState, state, _formUtils__WEBPACK_IMPORTED_MODULE_7__.ignoreTrailingSpaceInStrings);
      setHasChanges(hc);
      console.log("state has changes", hc);
      setStateUpdated(false);
    }
  }, [stateUpdated, origState, state]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (readyToSave) {
      // saveHandler triggers the cleaning of field values, and then we end up here
      // set to false immediately so we don't end up in an endless loop and use all of our free firebase time
      setReadyToSave(false); // update the scenario object with our local state. the question is, should we be waiting until
      // now to do this.

      updateScenarioFld("vitalSigns", state.vitalSigns);
      updateScenarioFld("SAMPLE", state.SAMPLE);
      updateScenarioFld("OPQRST", state.OPQRST); // set the following so that we no longer have differences between origState and state

      setOrigState(state);
      setHasChanges(false);

      const saveFunc = async () => {
        // only persist this forms local state changes to the db
        // FIXME: I should update saveScenario() so that it's param
        // is an object of only fields to update, and have it handle this noise
        const scenData = Object.assign({}, await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_4__.getScenarioByID)(db, scenarioId), {
          vitalSigns: state.vitalSigns,
          SAMPLE: state.SAMPLE,
          OPQRST: state.OPQRST
        });
        await saveScenario(scenData);
      };

      saveFunc();
    }
  }, [db, readyToSave, saveScenario, updateScenarioFld, state, scenarioId]);

  if (!state) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ScenarioEditorLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Save changes to Patient Status",
    haveChanges: hasChanges,
    saveHandler: saveHandler,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "info-box vitals",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
        children: "Vital Signs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
              children: "Vital"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
              children: "Initial Value"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
              children: "Good Reassessment Value"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
              children: "Bad Reassessment Value"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
          children: VITALS.map(vital => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
              children: vital
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, this), TYPES.map(typ => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                id: `vitalSigns.${vital}.${typ}`,
                type: "text",
                value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, `vitalSigns.${vital}.${typ}`),
                onChange: changeHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 33
              }, this)
            }, `${vital}-${typ}`, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
            }, this))]
          }, vital, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        style: {
          flex: 1,
          width: "100%"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "info-wrapper",
          style: {
            width: "100%"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
            children: "SAMPLE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
            style: {
              width: "100%"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
              children: SAMPLE.map(fld => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                  children: fld
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                    id: `SAMPLE.${fld}`,
                    type: "text",
                    size: "80",
                    value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, `SAMPLE.${fld}`),
                    onChange: changeHandler
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 41
                }, this)]
              }, `SAMPLE-${fld}`, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 37
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        style: {
          flex: 1
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "info-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
            children: "OPQRST"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
              children: OPQRST.map(fld => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                  children: fld
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                    id: `OPQRST.${fld}`,
                    type: "text",
                    size: "80",
                    value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(state, `OPQRST.${fld}`),
                    onChange: changeHandler
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 37
                }, this)]
              }, `OPQRST-${fld}`, true, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 33
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 6462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7267);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6635);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5558);
/* harmony import */ var _ScenarioEditor_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1835);
/* harmony import */ var _ProblemsLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8630);
/* harmony import */ var _admins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9934);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2838);
/* harmony import */ var _ScenarioTypeEditor_InterventionsEditor_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1681);
/* harmony import */ var _ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8286);
/* harmony import */ var _ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/Problem2.js";












const VITALS_OPTIONS = ["BP", "P", "R", "Skin", "Sp02", "ETCO2", "GCS", "Glucose", "Pain", "Temp"].map(e => ({
  id: e,
  label: e
}));
const VARIANT_OPTIONS = ["initial", "good", "bad"].map(e => ({
  id: e,
  label: e
}));
const assessRE = /^problem-\d+-assessment-(\d+)$/;
const noteRE = /^problem-\d+-note-(\d+)$/;
const solutionRE = /^problem-\d+-solution-(\d+)$/;

const Problem2 = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    probID
  } = params;
  const {
    url
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useRouteMatch)();
  const {
    scenario,
    scenarioType,
    problems,
    solutions,
    actions,
    uniqueIDs
  } = (0,_ScenarioEditor_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_3__.useScenarioEditor)();
  const [problem, setProblem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [mySolutions, setMySolutions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [solutionsUpdated, setSolutionsUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [problemUpdated, setProblemUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const generateID = (records, re, fldName, recordsAreObjects = true) => {
    let nextNum = 1;
    let max;

    if (recordsAreObjects) {
      max = lodash__WEBPACK_IMPORTED_MODULE_1___default().max(records.map(e => parseInt(e.id.match(re)[1], 10)));
    } else {
      max = lodash__WEBPACK_IMPORTED_MODULE_1___default().max(records.map(e => parseInt(e.match(re)[1], 10)));
    }

    if (!!max) {
      nextNum = max + 1;
    }

    const newID = `${probID}-${fldName}-${nextNum}`;
    return newID;
  };

  const genAssessmentID = () => generateID(problem.assessments, assessRE, "assessment");

  const genNoteID = () => generateID(problem.notes, noteRE, "note");

  const genSolutionID = () => generateID(problem.solutions, solutionRE, "solution", false);

  const updateProblemFld = (id, fldName, fldVal) => {
    setProblem(prevState => Object.assign({}, prevState, {
      [fldName]: fldVal
    }));
    setProblemUpdated(true);
  };

  const addAssessment = (_unused1, _unused2, checkListItemID) => {
    const newRec = {
      id: genAssessmentID(),
      assessmentID: checkListItemID,
      feedback: ""
    };
    updateProblemFld(probID, "assessments", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.appendObjToArray)(problem.assessments, newRec));
  };

  const updateAssessmentFld = (assessID, fldName, fldVal) => {
    const rec = Object.assign({}, problem.assessments.find(e => e.id === assessID), {
      [fldName]: fldVal
    });
    updateProblemFld(probID, "assessments", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.updateObjInArray)(problem.assessments, rec));
  };

  const removeAssessment = item => updateProblemFld(probID, "assessments", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.removeObjWithIdFromArray)(problem.assessments, item.id));

  const addVital = (_unused1, _unused2, vitalSign) => {
    const newRec = {
      id: vitalSign,
      variant: ""
    };
    updateProblemFld(probID, "vitals", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.appendObjToArray)(problem.vitals, newRec));
  };

  const updateVitalFld = (vitalID, fldName, fldVal) => {
    const rec = Object.assign({}, problem.vitals.find(e => e.id === vitalID), {
      [fldName]: fldVal
    });
    updateProblemFld(probID, "vitals", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.updateObjInArray)(problem.vitals, rec));
  };

  const removeVital = item => updateProblemFld(probID, "vitals", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.removeObjWithIdFromArray)(problem.vitals, item.id));

  const addNote = (entityType, id, label) => {
    const newRec = {
      id,
      label
    };
    updateProblemFld(probID, "notes", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.appendObjToArray)(problem.notes, newRec));
  };

  const updateNoteFld = (noteID, fldName, fldVal) => {
    const rec = Object.assign({}, problem.notes.find(e => e.id === noteID), {
      [fldName]: fldVal
    });
    updateProblemFld(probID, "notes", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.updateObjInArray)(problem.notes, rec));
  };

  const removeNote = item => updateProblemFld(probID, "notes", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_9__.removeObjWithIdFromArray)(problem.notes, item.id));

  const addSolution = (entityType, id, label) => {
    solutions.add((0,_ScenarioTypeEditor_InterventionsEditor_types__WEBPACK_IMPORTED_MODULE_7__.genSolutionRec)(id, label, probID));
    updateProblemFld(probID, "solutions", problem.solutions.concat(id));
    setSolutionsUpdated(true);
  };

  const updateSolution = (solID, fldName, fldVal) => {
    const found = scenario.solutions.find(e => e.id === solID);

    if (!!found) {
      solutions.update(Object.assign({}, found, {
        [fldName]: fldVal
      }));
      setSolutionsUpdated(true);
    } else {
      console.log(`solution ${solID} not found`);
    }
  };

  const deleteSolutionHandler = item => {
    const sol = scenario.solutions.find(e => e.id === item.id);
    let msg = `Are you sure you want to delete the solution "${sol.label}"?`;
    const acts = scenario.actions.filter(e => e.solutionID === item.id);

    if (acts.length > 0) {
      msg += ` and all associated actions?\n`;
      msg += "Actions:\n==============\n";
      acts.forEach(act => msg += `${act.interventionID}\n`);
    }

    if (window.confirm(msg)) {
      removeSolution(item);
    }
  };

  const removeSolution = item => {
    // console.log("will remove solution", item)
    scenario.actions.filter(e => e.solutionID === item.id).forEach(act => actions.remove(act.id));
    solutions.remove(item.id);
    updateProblemFld(probID, "solutions", problem.solutions.filter(id => id !== item.id));
    setSolutionsUpdated(true);
  };

  const assessmentLabelGetter = (entity, fld) => {
    const found = scenarioType.getChecklistItem(entity.assessmentID);
    return !!found ? found.abbrLabel : null;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const prob = scenario.problems.find(e => e.id === probID);

    if (!prob) {
      console.log(`problem: ${probID} not found`);
    } else {
      prob.assessments.forEach(assess => {
        if (undefined === assess.feedback) {
          assess.feedback = "";
        }
      });
      setProblem(prob); // set solutions to updated on initial load

      setSolutionsUpdated(true);
    }
  }, [probID, scenario.problems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (solutionsUpdated) {
      const matches = scenario.solutions.filter(e => problem.solutions.includes(e.id));
      const tmp = [];
      problem.solutions.forEach(id => {
        const found = matches.find(e => e.id === id);

        if (!!found) {
          tmp.push(found);
        } else {
          console.log(`solution ${id} not found in matches. race condition??`);
        }
      });
      setMySolutions(tmp);
      setSolutionsUpdated(false);
    }
  }, [solutionsUpdated, scenario, problem]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (problemUpdated) {
      // persist state changes behond this form
      problems.update(problem);
      setProblemUpdated(false);
    }
  }, [problemUpdated, problems, problem]);

  if (!mySolutions) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ProblemsLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    breadcrumbs: [(0,_ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_8__.getProblemsBC)(params), (0,_ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_8__.getProblemBC)(params, problem.label)],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.ModelAdmin, {
      heading: "Problem",
      record: problem,
      fields: [{
        name: "id",
        label: "ID",
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.Text
      }, {
        name: "label",
        label: "Label",
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.TextInput,
        changeHandler: updateProblemFld
      }, {
        name: "lifeThreat",
        label: "Life Threat",
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.Checkbox,
        changeHandler: updateProblemFld
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.InlineModelAdmin, {
      heading: "Assessments",
      records: problem.assessments,
      fields: [{
        name: "assessmentID",
        label: "Assessment ID",
        colWidthPct: 20,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.Text,
        textSize: "smaller"
      }, {
        name: "label",
        label: "Assessment Label",
        colWidthPct: 40,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.Text,
        valueGetter: assessmentLabelGetter
      }, {
        name: "feedback",
        label: "Feedback",
        colWidthPct: 40,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.TextInput,
        size: 60,
        changeHandler: updateAssessmentFld
      }],
      editLink: false,
      onDelete: removeAssessment,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.AssociateModel, {
        model: {
          type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.ASSESS,
          name: "Assessment",
          labelsUnique: false
        },
        search: true,
        choices: scenarioType.checkListMetaData.filter(e => e.type === _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.ASSESS),
        addHandler: addAssessment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        style: {
          flex: "1 1 auto"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.InlineModelAdmin, {
          heading: "Vitals",
          records: problem.vitals,
          fields: [{
            name: "id",
            label: "ID",
            colWidthPct: 40,
            widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.Text,
            textSize: "small"
          }, {
            name: "variant",
            label: "Variant",
            colWidthPct: 60,
            widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.DropDown,
            options: VARIANT_OPTIONS,
            changeHandler: updateVitalFld
          }],
          allowChangeOrder: false,
          editLink: false,
          onDelete: removeVital,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.AssociateModel, {
            model: {
              type: "vitals",
              name: "Vital sign",
              labelsUnique: false
            },
            choices: VITALS_OPTIONS,
            addHandler: addVital,
            uniqueIDs: []
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        style: {
          flex: "1 1 auto"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.InlineModelAdmin, {
          heading: "Notes",
          records: problem.notes,
          fields: [// { name: "id", label: "ID", colWidthPct: 25, widget: Text, textSize: "small"},
          {
            name: "label",
            label: "Label",
            colWidthPct: 100,
            widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.TextArea,
            cols: 100,
            rows: 2,
            changeHandler: updateNoteFld
          }],
          allowChangeOrder: false,
          editLink: false,
          onDelete: removeNote,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.AddModel, {
            model: {
              type: "note",
              name: "Note",
              labelsUnique: false
            },
            addHandler: addNote,
            uniqueIDs: uniqueIDs,
            uniqueLabels: [],
            idGenerator: genNoteID
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.InlineModelAdmin, {
      heading: "Solutions",
      records: mySolutions,
      fields: [// { name: "id", label: "ID", colWidthPct: 10, widget: Text, textSize: "xx-small"},
      {
        name: "label",
        label: "Label",
        colWidthPct: 25,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.TextInput,
        changeHandler: updateSolution
      }, {
        name: "protocols",
        label: "Protocols",
        colWidthPct: 25,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.TextInput,
        changeHandler: updateSolution
      }, {
        name: "minimalWhy",
        label: "Minimal Why",
        colWidthPct: 50,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_6__.TextArea,
        cols: 70,
        rows: 2,
        changeHandler: updateSolution
      }],
      allowChangeOrder: true,
      editLink: true,
      editBaseURL: `${url}/solutions`,
      onDelete: deleteSolutionHandler,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_5__.AddModel, {
        model: {
          type: "solution",
          name: "Solution",
          labelsUnique: false
        },
        addHandler: addSolution,
        uniqueIDs: uniqueIDs,
        uniqueLabels: [],
        idGenerator: genSolutionID
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Problem2);

/***/ }),

/***/ 8630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProblemsLayout)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8913);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1835);
/* harmony import */ var _ScenarioTypeEditor_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6378);
/* harmony import */ var _ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6896);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/ProblemsLayout.js";








function ProblemsLayout({
  breadcrumbs = [],
  children
}) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_0__.useFirebase)();
  const {
    scenarioId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
  const {
    scenario,
    saveScenario
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioEditor)();

  const clickHandler = async event => {
    // update ONLY the problems-related content to the db
    const scen = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_1__.getScenarioByID)(db, scenarioId); // add in the problems-related content

    scen.problems = scenario.problems;
    scen.solutions = scenario.solutions;
    scen.actions = scenario.actions;
    await saveScenario(scen);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ScenarioTypeEditor_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      crumbs: breadcrumbs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Save changes to Problems and Solutions",
      haveChanges: true,
      clickHandler: clickHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Save changes to Problems and Solutions",
      haveChanges: true,
      clickHandler: clickHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 9362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6635);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1835);
/* harmony import */ var _ProblemsLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8630);
/* harmony import */ var _admins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9934);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2838);
/* harmony import */ var _ScenarioTypeEditor_InterventionsEditor_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1681);
/* harmony import */ var _ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8286);
/* harmony import */ var _ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/ProblemsList.js";










const problemRE = /^problem-(\d+)$/;

const ProblemsList = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const {
    url
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useRouteMatch)();
  const {
    scenario,
    problems,
    solutions,
    actions,
    uniqueIDs,
    uniqueLabels,
    updateScenarioFld
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_1__.useScenarioEditor)();

  const probIDGenerator = () => {
    let nextNum = 1;

    let max = lodash__WEBPACK_IMPORTED_MODULE_0___default().max(scenario.problems.map(e => parseInt(e.id.match(problemRE)[1], 10)));

    if (!!max) {
      nextNum = max + 1;
    }

    const newID = `problem-${nextNum}`;
    console.log(newID);
    return newID;
  };

  const moveProbUp = probIdx => {
    updateScenarioFld("problems", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_7__.swapUp)(scenario.problems, probIdx));
  };

  const moveProbDown = probIdx => {
    updateScenarioFld("problems", (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_7__.swapDown)(scenario.problems, probIdx));
  };

  const addProblemHandler = (entityType, id, label) => {
    const rec = (0,_ScenarioTypeEditor_InterventionsEditor_types__WEBPACK_IMPORTED_MODULE_5__.genProblemRec)(id, label);
    problems.add(rec);
  };

  const updateProblemFld = (probID, fldName, fldVal) => {
    console.log(probID, fldName, fldVal);
    const rec = Object.assign({}, scenario.problems.find(e => e.id === probID), {
      [fldName]: fldVal
    });
    problems.update(rec);
  };

  const deleteProblemHandler = item => {
    const prob = scenario.problems.find(e => e.id === item.id);
    let msg = `Are you sure you wish to delete problem "${prob.label}"`;
    const sols = scenario.solutions.filter(e => e.problemID === item.id);
    const acts = scenario.actions.filter(e => e.problemID === item.id);
    const solActions = (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_7__.groupByKey)(acts, "solutionID");

    if (sols.length > 0) {
      msg += " and all of it's children?\n";
      msg += "Solutions:\n------------------\n";
      sols.forEach(sol => {
        msg += `\t${sol.label}\n`;
        msg += `\tActions:\n`;
        solActions[sol.id].forEach(act => {
          msg += `\t\t${act.interventionID}\n`;
        });
      });
    }

    if (window.confirm(msg)) {
      acts.forEach(act => actions.remove(act.id));
      sols.forEach(sol => solutions.remove(sol.id));
      problems.remove(prob.id);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProblemsLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    breadcrumbs: [(0,_ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_6__.getProblemsBC)(params)],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_3__.InlineModelAdmin, {
      heading: "Problems",
      records: scenario.problems,
      fields: [// {name: "id", label: "ID", colWidthPct: 6, widget: Text, textSize: "xx-small"},
      {
        name: "label",
        label: "Label",
        colWidthPct: 94,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_4__.TextInput,
        size: 120,
        changeHandler: updateProblemFld
      }, {
        name: 'lifeThreat',
        label: "Is Life Threat",
        colWidthPct: 6,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_4__.Checkbox,
        changeHandler: updateProblemFld
      }],
      editLink: true,
      editBaseURL: url,
      allowChangeOrder: true,
      onMoveUp: moveProbUp,
      onMoveDown: moveProbDown,
      onDelete: deleteProblemHandler,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_3__.AddModel, {
        model: {
          type: "problem",
          name: "Problem",
          labelsUnique: false
        },
        addHandler: addProblemHandler,
        uniqueIDs: uniqueIDs,
        uniqueLabels: uniqueLabels,
        idGenerator: probIDGenerator
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProblemsList);

/***/ }),

/***/ 7586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PublishScenario)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8913);
/* harmony import */ var _traumaScenario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1070);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/PublishScenario.js";








const deepCopy = data => {
  // console.log(data)
  const copied = JSON.parse(JSON.stringify(data)); // console.log("success")

  return copied;
}; // const getSystemInterventions = (scenTypeData) => {
//     let tmp = scenTypeData._interventions
//                 .filter(e => !!e.system)
//                 .map(e => {return {id: e.id, type: MDB_TYPES.INTERV, label: e.label, system: e.system}})
//     const sysIntvs = groupByKey(tmp, "system")
//     console.log(sysIntvs)
//     return sysIntvs
// }


const mergeData = (scenarioData, scenarioTypeData) => {
  const scenario = deepCopy(scenarioData);
  scenario.checkListMetaData = deepCopy(scenarioTypeData._checklist);
  scenario.medications = deepCopy(scenarioTypeData._medications);
  scenario.interventions = deepCopy(scenarioTypeData._interventions); // FIXME: need to perform scenario-specfic value substitutions of some prompt/answer labels
  // (label/abbrLabels will begin/end with '{' and '}')

  scenario.interventionPrompts = deepCopy(scenarioTypeData._interventionPrompts);
  scenario.interventionPromptAnswers = deepCopy(scenarioTypeData._interventionPromptAnswers); // scenario.systemInterventions = deepCopy(getSystemInterventions(scenarioTypeData))

  scenario.interventionMenuCategories = deepCopy(scenarioTypeData._interventionMenuCategories);
  scenario.interventionMenuItems = deepCopy(scenarioTypeData._interventionMenuItems);
  return scenario;
};

function PublishScenario(props) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_2__.useFirebase)();
  const {
    scenarioId
  } = props.match.params;
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  const [versionName, setVersionName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [mergedData, setMergedData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [versions, setVersions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const changeFileName = event => {
    setVersionName(event.target.value);
  };

  const unpublish = async publishedScenarioID => {
    (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_3__.deleteDocument)(db, "published-scenarios", publishedScenarioID).then(loadPublishedScenarioVersions(mergedData.name));
  };

  const publishWithNewName = async event => {
    event.preventDefault();

    if ("" === versionName) {
      setError("Please provide a name to publish this version of the scenario data as.");
    } else {
      setError(null);
      await publishData(versionName);
      setVersionName("");
    }
  };

  const republishAs = versionName => {
    const existingVersion = versions.find(ver => ver.version === versionName);

    if (window.confirm(`Are you sure you wish to replace the data currently published as "${versionName}"?`)) {
      publishData(versionName, existingVersion.id);
    }
  };

  const publishData = async (versionName, versionID = null) => {
    const doc = Object.assign({}, mergedData, {
      version: versionName,
      datePublished: new Date().toLocaleString()
    });
    delete doc.id;

    if (versionID) {
      doc.id = versionID;
    }

    await (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_3__.saveDocument)(db, "published-scenarios", doc);
    await loadPublishedScenarioVersions(doc.name);
    alert(`scenario data published as ${versionName}`);
    history.push("/scenarios");
  };

  const loadPublishedScenarioVersions = async scenarioName => {
    let variants = [];
    const scenVersions = await db.collection("published-scenarios").where("name", "==", scenarioName).where("schemaVersion", "==", "V2").get();

    if (scenVersions.size > 0) {
      variants = scenVersions.docs.map(doc => {
        // data is HUGE, we only need: id, name, datePublished, and version fields
        const {
          id,
          name,
          datePublished,
          version
        } = doc.data();
        return {
          id,
          name,
          datePublished,
          version
        };
      });
    }

    setVersions(variants);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      const scenData = await (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_3__.getDocument)(db, "scenarios", scenarioId);
      const scenTypeData = await (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_3__.getScenarioTypeObject)(db, scenData.scenarioType, scenData.schemaVersion);
      const scen = (0,_traumaScenario__WEBPACK_IMPORTED_MODULE_4__.updateSchema)(scenData, scenTypeData);
      const merged = mergeData(scen, scenTypeData);
      console.log(merged);
      setMergedData(merged);
      loadPublishedScenarioVersions(scenData.name);
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [db, scenarioId]);

  if (!mergedData) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      children: ["Publish Scenario: \"", mergedData.name, "\" (type: \"", mergedData.scenarioType, "\") "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
      children: "First verify that the following pieces of information is ready for publication:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
        children: "findings for assessment steps are specified"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
        children: ["problems and solutions are specified: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("b", {
          children: (!!mergedData.problems).toString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 59
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
        children: "answers to intervention prompts are specified"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
        children: "medication-related info is specified"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
      children: "Published versions of this scenario:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("table", {
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
            children: "Version"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
            children: "Date Published"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tbody", {
        children: versions.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
            children: item.version
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
            children: item.datePublished
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              onClick: () => republishAs(item.version),
              children: " Republish using this name "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              onClick: () => unpublish(item.id),
              children: "Unpublish"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, this)]
        }, item.version, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
      children: [" Publish using name:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "text",
        placeholder: "Name for this version",
        value: versionName,
        onChange: changeFileName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      onClick: publishWithNewName,
      children: "Publish"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        "hidden": !error
      }),
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 1835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScenarioEditorContext": () => (/* binding */ ScenarioEditorContext),
/* harmony export */   "useScenarioEditor": () => (/* binding */ useScenarioEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ScenarioEditorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  scenario: undefined,
  updateScenarioFld: undefined,
  problems: undefined,
  solutions: undefined,
  actions: undefined,
  uniqueIDs: undefined,
  uniqueLabels: undefined,
  saveScenario: undefined,
  scenarioType: undefined
});
const useScenarioEditor = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScenarioEditorContext);

/***/ }),

/***/ 3724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/ScenarioEditorLayout.js";




const ScenarioEditorLayout = ({
  label,
  haveChanges,
  saveHandler,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: label,
      haveChanges: haveChanges,
      clickHandler: saveHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "scenario-form-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "scenario-form",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: label,
      haveChanges: haveChanges,
      clickHandler: saveHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScenarioEditorLayout);

/***/ }),

/***/ 8829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2774);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/ScenarioItem.js";




const computeDepth = item => {
  let depth = item.depth;

  if (!!item.subPhase) {
    depth += 1;
  }

  return `${depth * 20}px`;
};

const ScenarioItem = ({
  item,
  scenario,
  changeHandler
}) => {
  switch (item.type) {
    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.PHASE:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: "list-item header-item",
        children: item.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, undefined);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.SUB_PHASE:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        className: "list-item header-item",
        style: {
          paddingLeft: "20px"
        },
        children: item.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.CL_HEADING:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
        className: "list-item header-item",
        style: {
          paddingLeft: `${computeDepth(item)}`
        },
        children: item.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
        style: {
          paddingLeft: `${computeDepth(item)}`
        },
        children: [item.abbrLabel, ": \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: `assessmentFindings.${item.id}`,
          size: "80",
          value: dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default().get(scenario, `assessmentFindings.${item.id}`),
          onChange: changeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScenarioItem);

/***/ }),

/***/ 8034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenariosList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6643);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/ScenariosList.js";





const COLLECTION_ID = 'scenarios';
function ScenariosList() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const [scenarios, setScenarios] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  async function deleteScenario(index) {
    let id = scenarios[index].id;

    if (window.confirm(`Are you sure you want to delete this scenario? This cannot be undone!`)) {
      await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.deleteDocument)(db, COLLECTION_ID, id); // Hide in list of scenarios

      let newList = scenarios.slice(); // Deep copy

      newList.splice(index, 1);
      setScenarios(newList);
    } else {
      console.log(`Delete of ${id} cancelled.`);
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    db.collection(COLLECTION_ID).orderBy("name").get().then(snapShot => {
      let docs = [];
      snapShot.docs.forEach(doc => {
        let tmp = doc.data();
        let data = {
          id: doc.id,
          name: tmp.name,
          scenarioType: tmp.scenarioType,
          scenarioVersion: tmp.scenarioVersion
        };
        docs.push(data);
      });
      setScenarios(docs);
    }).catch(error => console.log(error));
  }, [db]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "db-list",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Scenario List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/scenario/",
      className: "new-bttn db-list-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        children: "New Scenario"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this), scenarios ? scenarios.map((item, index) => item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ListItem, {
      item: item,
      remove: deleteScenario,
      index: index
    }, `${item.name}-list`, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }, this);
}
;

const ListItem = ({
  item,
  remove,
  index
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "db-list-item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      id: "title",
      children: item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      className: "hint-text",
      children: item.scenarioType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "list-button-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: `/scenario/${item.id}`,
        className: "action-bttn",
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: `/scenario/${item.id}/clone`,
        className: "action-bttn",
        children: "Use as Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: `/scenario/${item.id}/publish`,
        className: "action-bttn",
        children: "Publish"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "button",
        className: "action-bttn delete-bttn",
        onClick: () => remove(index),
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ 6653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetScenarioNameForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8913);
/* harmony import */ var _formUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5975);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/SetScenarioNameForm.js";







function SetScenarioNameForm({
  scenario,
  isTemplate
}) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_2__.useFirebase)();
  const [nameIsUnique, setNameIsUnique] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [scenarioName, setScenarioName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const formEL = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();

  const changeHandler = async event => {
    console.log(event.target.name, event.target.value);
    const isUnique = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_3__.verifyDocNameUniqueness)(db, "scenarios", event.target.value, "name", "V2");
    console.log(isUnique);
    setNameIsUnique(isUnique);

    if (isUnique) {
      setScenarioName(event.target.value);
    } else {
      setScenarioName(null);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!scenarioName) {
      console.log("scenarioName is null");
      return;
    } // save pre-existing scenario data structure with new name and id


    const newScenObj = (0,_formUtils__WEBPACK_IMPORTED_MODULE_4__.deepCopy)(scenario);
    newScenObj.name = scenarioName; // I *believe* this doesn't return a promise, so no need for "await"

    const newDocRef = db.collection("scenarios").doc();
    newScenObj.id = newDocRef.id;
    await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_3__.saveDocument)(db, "scenarios", newScenObj); // redirect to edit route for this new scenario

    history.push(`/scenario/${newScenObj.id}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "scenario-form-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      className: "scenario-form",
      ref: formEL,
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "info-wrapper",
        children: [isTemplate ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
          children: "Please provide a new name for your cloned scenario"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 27
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
          children: "Please give your new scenario a name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          name: "scenario-name",
          required: true,
          autoComplete: "off",
          onChange: changeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("error", {
            "hidden": nameIsUnique
          }),
          children: "Scenario name is not unique"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 4297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1835);
/* harmony import */ var _ProblemsLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8630);
/* harmony import */ var _admins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9934);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2838);
/* harmony import */ var _ScenarioTypeEditor_InterventionsEditor_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1681);
/* harmony import */ var _ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8286);
/* harmony import */ var _ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/Solution2.js";












const PROT_REL_OPTS = [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.PROTOCOL_RELATIONSHIPS.REQ, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.PROTOCOL_RELATIONSHIPS.ALT, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.PROTOCOL_RELATIONSHIPS.OPT, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.PROTOCOL_RELATIONSHIPS.CONTRA, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.PROTOCOL_RELATIONSHIPS.IR, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.PROTOCOL_RELATIONSHIPS.UNN].map(e => ({
  id: e,
  label: e
}));

const PhaseDropDown = ({
  entity,
  name,
  changeHandler
}) => {
  const {
    scenario,
    scenarioType,
    actions
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioEditor)();
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!options) {
      const opts = scenarioType._checklist.filter(e => e.type === _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.PHASE);

      if (!opts.map(e => e.id).includes(entity.phase)) {
        // invalid phaseID stored in db, set both phase and subPhase values to ""
        const rec = Object.assign({}, scenario.actions.find(e => e.solutionID === entity.solutionID), {
          phase: "",
          subPhase: ""
        });
        actions.update(rec);
      }

      setOptions(opts);
    }
  }, [entity, scenario.actions, scenarioType._checklist, actions, options]);

  if (!options) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_widgets__WEBPACK_IMPORTED_MODULE_5__.DropDown, {
    entity: entity,
    name: name,
    options: options,
    changeHandler: changeHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }, undefined);
};

const SubPhaseDropDown = ({
  entity,
  name,
  changeHandler
}) => {
  const {
    scenario,
    scenarioType,
    actions
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioEditor)();
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [phaseUpdated, setPhaseUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPhaseUpdated(true);
  }, [entity.phase]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (phaseUpdated) {
      if ("" === entity.phase) {
        setOptions(null);
      } else {
        const opts = scenarioType._checklist.filter(e => e.type === _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.SUB_PHASE && e.phase === entity.phase);

        setOptions(opts);

        if (!opts.map(e => e.id).includes(entity.subPhase)) {
          // bad subPhase id, set to ""
          const rec = Object.assign({}, scenario.actions.find(e => e.solutionID === entity.solutionID && e.id === entity.id), {
            subPhase: ""
          });
          actions.update(rec);
        }
      }

      setPhaseUpdated(false);
    }
  }, [phaseUpdated, entity, scenarioType._checklist, scenario.actions, actions]);

  if (!options) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_widgets__WEBPACK_IMPORTED_MODULE_5__.DropDown, {
    entity: entity,
    name: name,
    options: options,
    changeHandler: changeHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, undefined);
};

const Select = ({
  id,
  multiple: _multiple = false,
  options,
  getValue,
  setValue
}) => {
  const handleChange = event => {
    const {
      id,
      value,
      options
    } = event.target;
    let newValue;

    if (!_multiple) {
      newValue = value;
    } else {
      newValue = Array.from(options).filter(opt => !!opt.selected).map(opt => opt.value);
    }

    console.log(newValue);
    setValue(id, newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
    id: id,
    multiple: _multiple,
    value: getValue(id),
    onChange: handleChange,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
      value: "",
      disabled: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, undefined), options.map(opt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
      value: opt.id,
      children: opt.abbrLabel
    }, opt.id, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, undefined);
};

const Prompt = ({
  prompt,
  getValue,
  setValue
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("i", {
      children: prompt.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Select, {
      id: prompt.id,
      multiple: prompt.selectionType === _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM,
      options: prompt.answers,
      getValue: getValue,
      setValue: setValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 9
  }, undefined);
};

const InterventionVariant = ({
  entity,
  name,
  changeHandler
}) => {
  const {
    scenarioType
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioEditor)();
  const [promptsAndOptions, setPromptsAndOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const getPromptValue = promptID => {
    return state[promptID];
  };

  const setPromptValue = (promptID, value) => {
    const newState = Object.assign({}, state, {
      [promptID]: value
    });
    setState(newState);
    changeHandler(entity.id, name, newState);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!promptsAndOptions) {
      const tmp = scenarioType.getIntervention(entity.interventionID, true).distPrompts;
      const tmp2 = entity[name];

      if (!tmp2) {
        const tmp3 = {};
        tmp.forEach(p => {
          tmp3[p.id] = "";
        });
        setState(tmp3);
        changeHandler(entity.id, name, tmp3);
      } else {
        setState(tmp2);
      }

      setPromptsAndOptions(tmp);
    }
  }, [entity, name, scenarioType, promptsAndOptions, changeHandler]);

  if (!promptsAndOptions || promptsAndOptions.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: promptsAndOptions.map(prompt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Prompt, {
      prompt: prompt,
      getValue: getPromptValue,
      setValue: setPromptValue
    }, prompt.id, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }, undefined))
  }, void 0, false);
};

const Solution2 = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const {
    probID,
    solID
  } = params;
  const {
    scenario,
    scenarioType,
    solutions,
    actions
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioEditor)();
  const [prob, setProb] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [solution, setSolution] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [solutionUpated, setSolutionUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [myActions, setMyActions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [actionsUpdated, setActionsUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const updateSolutionFld = (id, fldName, fldVal) => {
    setSolution(prevState => Object.assign({}, prevState, {
      [fldName]: fldVal
    }));
    setSolutionUpdated(true);
  };

  const addAction = (_unused1, _unused2, intvID) => {
    const rec = (0,_ScenarioTypeEditor_InterventionsEditor_types__WEBPACK_IMPORTED_MODULE_6__.genActionRec)(intvID, solID, probID);
    actions.add(rec);
    updateSolutionFld(solID, "actions", solution.actions.concat(rec.id));
    setActionsUpdated(true);
  };

  const updateAction = (actID, fldName, fldVal) => {
    if (fldName === "phase") {
      updateAction(actID, "subPhase", "");
    }

    const rec = Object.assign({}, scenario.actions.find(e => e.id === actID), {
      [fldName]: fldVal
    });
    actions.update(rec);
    setActionsUpdated(true);
  };

  const removeAction = item => {
    // this will be a no-op if the ID doesn't exist (in scenario-type)
    actions.remove(item.id); // regardless, we still need to remove item.id from our sorted list of action IDs

    updateSolutionFld(solID, "actions", solution.actions.filter(id => id !== item.id));
    setActionsUpdated(true);
  };

  const moveActionUp = actionIdx => {
    const after = (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_8__.swapUp)(solution.actions, actionIdx);
    updateSolutionFld(solID, "actions", after);
    setActionsUpdated(true);
  };

  const moveActionDown = actionIdx => {
    const after = (0,_ScenarioTypeEditor_utils__WEBPACK_IMPORTED_MODULE_8__.swapDown)(solution.actions, actionIdx);
    updateSolutionFld(solID, "actions", after);
    setActionsUpdated(true);
  };

  const intvLabelGetter = (rec, fld) => {
    return scenarioType.getIntervention(rec.interventionID).label;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tmp = scenario.problems.find(e => e.id === probID);
    setProb(tmp);
    const found = scenario.solutions.find(e => e.id === solID);

    if (found) {
      setSolution(Object.assign({}, found));
      setActionsUpdated(true);
    } else {
      console.log(`solution ${solID} not found`);
    }
  }, [probID, solID, scenario.problems, scenario.solutions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (solutionUpated) {
      solutions.update(solution);
      setSolutionUpdated(false);
    }
  }, [solutionUpated, solution, solutions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (actionsUpdated) {
      setActionsUpdated(false); // get data for this solution's actions

      const matches = scenario.actions.filter(e => solution.actions.includes(e.id)); // sort the data in the way we want it

      const tmp = [];
      const deletedIDs = [];
      solution.actions.forEach(actID => {
        const found = matches.find(e => e.id === actID);

        if (found) {
          tmp.push(found);
        } else {
          // cleanup kruft in db so I don't have to manually clean up bad deletions from the past
          deletedIDs.push(actID);
        }
      });

      if (deletedIDs.length > 0) {
        console.log(`removing non-existant actionID(s) (${deletedIDs.join(', ')}) from solution.actions array`);
        updateSolutionFld(solution.id, "actions", solution.actions.filter(id => !deletedIDs.includes(id)));
        setActionsUpdated(true);
      }

      setMyActions(tmp);
    }
  }, [actionsUpdated, solution, scenario]);

  if (!myActions) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ProblemsLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    breadcrumbs: [(0,_ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_7__.getProblemsBC)(params), (0,_ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_7__.getProblemBC)(params, prob.label), (0,_ScenarioTypeEditor_urls__WEBPACK_IMPORTED_MODULE_7__.getSolutionBC)(params, solution.label)],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_4__.ModelAdmin, {
      heading: "Solution",
      record: solution,
      fields: [{
        name: "id",
        label: "ID",
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.Text,
        textSize: "small"
      }, {
        name: "label",
        label: "Label",
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.TextInput,
        changeHandler: updateSolutionFld
      }, {
        name: "protocols",
        label: "Protocols",
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.TextInput,
        changeHandler: updateSolutionFld
      }, {
        name: "minimalWhy",
        label: "Minimal Why",
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.TextArea,
        changeHandler: updateSolutionFld
      }, {
        name: "strictActionOrdering",
        label: "Strict Action Ordering",
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.Checkbox,
        changeHandler: updateSolutionFld
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_4__.InlineModelAdmin, {
      heading: "Actions",
      records: myActions,
      fields: [{
        name: "interventionID",
        label: "Intervention ID",
        colWidthPct: 6,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.Text,
        textSize: "xx-small"
      }, {
        name: "label",
        label: "Intervention",
        colWidthPct: 17,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.Text,
        valueGetter: intvLabelGetter
      }, {
        name: "interventionVariant",
        label: "Intervention Variant",
        colWidthPct: 23,
        widget: InterventionVariant,
        changeHandler: updateAction
      }, {
        name: "phase",
        label: "Phase",
        colWidthPct: 5,
        widget: PhaseDropDown,
        changeHandler: updateAction
      }, {
        name: "subPhase",
        label: "SubPhase",
        colWidthPct: 7,
        widget: SubPhaseDropDown,
        changeHandler: updateAction
      }, {
        name: "protocolRelationship",
        label: "Protocol Relationship",
        colWidthPct: 12,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.DropDown,
        options: PROT_REL_OPTS,
        changeHandler: updateAction
      }, {
        name: "why",
        label: "Why",
        colWidthPct: 20,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.TextArea,
        cols: 30,
        rows: 3,
        changeHandler: updateAction
      }, {
        name: "contributesToSolution",
        label: "Contrib. to solution",
        colWidthPct: 5,
        widget: _widgets__WEBPACK_IMPORTED_MODULE_5__.Checkbox,
        changeHandler: updateAction
      }],
      allowChangeOrder: true,
      onMoveUp: moveActionUp,
      onMoveDown: moveActionDown,
      editLink: false,
      onDelete: removeAction,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_admins__WEBPACK_IMPORTED_MODULE_4__.AssociateModel, {
        model: {
          type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.INTERV,
          name: "Intervention"
        },
        choices: scenarioType._interventions,
        search: true,
        addHandler: addAction
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 310,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Solution2);

/***/ }),

/***/ 3517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Steplist)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7267);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2774);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6635);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5558);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8913);
/* harmony import */ var _ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1835);
/* harmony import */ var _formUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5975);
/* harmony import */ var _ScenarioItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8829);
/* harmony import */ var _ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6896);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioEditor/Steplist.js";












const UNWANTED_CHECKLIST_TYPES = [_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_3__.MDB_TYPES.AWO, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_3__.MDB_TYPES.CL_PROMPT, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_3__.MDB_TYPES.DECISION, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_3__.MDB_TYPES.DECISION_OPTION, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_3__.MDB_TYPES.REQURED];
function Steplist() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__.useFirebase)();
  const {
    scenarioId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    scenario,
    saveScenario,
    updateScenarioFld,
    scenarioType
  } = (0,_ScenarioEditorContext__WEBPACK_IMPORTED_MODULE_6__.useScenarioEditor)();
  const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [origState, setOrigState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stateUpdated, setStateUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [hasChanges, setHasChanges] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [readyToSave, setReadyToSave] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const cleanFieldValues = () => {
    let cleanedValues = Object.assign({}, state);
    Object.keys(state.assessmentFindings).forEach(fld => {
      const fldPath = `assessmentFindings.${fld}`;
      cleanedValues = (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.applyFieldDefaultValue)(cleanedValues, fldPath, "unremarkable");
      cleanedValues = (0,_formUtils__WEBPACK_IMPORTED_MODULE_7__.trimFieldValue)(cleanedValues, fldPath);
    });

    if (!lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqual(state, cleanedValues)) {
      // some fields were cleaned, update state in one fell swoop
      setState(cleanedValues);
    }
  };

  const saveHandler = event => {
    cleanFieldValues();
    setReadyToSave(true);
  };

  const changeHandler = event => {
    const {
      id: fldPath,
      value
    } = event.target;
    setState(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().set(state, fldPath, value));
    setStateUpdated(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!steps) {
      // this *should* only run on initial render
      // filter out checklist items, other than PHASEs and SUB_PHASEs
      // (for headings) which don't have findings
      const tmp = scenarioType.checkListMetaData.filter(rec => !UNWANTED_CHECKLIST_TYPES.includes(rec.type));
      setSteps(tmp);
      const tmp2 = {
        assessmentFindings: scenario.assessmentFindings
      };
      setState(tmp2);
      setOrigState(tmp2);
    }
  }, [scenarioId, steps, scenario, scenarioType]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stateUpdated) {
      setStateUpdated(false);

      if (!lodash__WEBPACK_IMPORTED_MODULE_2___default().isEqualWith(state, origState, _formUtils__WEBPACK_IMPORTED_MODULE_7__.ignoreTrailingSpaceInStrings)) {
        setHasChanges(true);
      }
    }
  }, [stateUpdated, state, origState]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (readyToSave) {
      // prevent endless loop with firebase changes
      setReadyToSave(false); //copy over our local state changes to scenario

      updateScenarioFld("assessmentFindings", state.assessmentFindings); // set things up so we don't have any changes anymore

      setOrigState(state);
      setHasChanges(false); //persist changes to the db

      const saveToDB = async () => {
        // we only want to persist changes to this form's local state
        const scenData = Object.assign({}, await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_5__.getScenarioByID)(db, scenarioId), {
          assessmentFindings: state.assessmentFindings
        });
        await saveScenario(scenData);
      };

      saveToDB();
    }
  }, [db, readyToSave, state, origState, scenarioId, saveScenario, updateScenarioFld]);

  if (!steps) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "scenario-form-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "Save changes to Findings",
      haveChanges: hasChanges,
      clickHandler: saveHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "scenario-form",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        id: "scenario-steps",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          children: "Assessment step findings"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 6
        }, this), steps.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ScenarioItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: item,
          scenario: state,
          changeHandler: changeHandler
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 7
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ScenarioTypeEditor_SaveButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "Save changes to Findings",
      haveChanges: hasChanges,
      clickHandler: saveHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 3
  }, this);
}
;

/***/ }),

/***/ 5975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyFieldDefaultValue": () => (/* binding */ applyFieldDefaultValue),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "ignoreTrailingSpaceInStrings": () => (/* binding */ ignoreTrailingSpaceInStrings),
/* harmony export */   "processForm": () => (/* binding */ processForm),
/* harmony export */   "processFormOrig": () => (/* binding */ processFormOrig),
/* harmony export */   "trimFieldValue": () => (/* binding */ trimFieldValue),
/* harmony export */   "validateScenarioNameUniqueness": () => (/* binding */ validateScenarioNameUniqueness)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6635);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2774);
/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);



async function validateScenarioNameUniqueness(db, candidateName, scenario) {
  if (candidateName === scenario.name) {
    return true;
  }

  const isUnique = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.verifyDocNameUniqueness)(db, "scenarios", candidateName, scenario.schemaVersion);
  return isUnique;
} // _.isEqualWith helper func which ignores strings which differ only by trailing space

function ignoreTrailingSpaceInStrings(objValue, othValue) {
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(objValue) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(othValue)) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().eq(objValue.trim(), othValue.trim());
  }
}
const applyFieldDefaultValue = (cleanedValues, fldPath, defaultValue) => {
  // sets to defaultValue if not set
  const val = dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(cleanedValues, fldPath);

  if (!val || "" === val) {
    console.debug(`set ${fldPath} to defaultValue: "${defaultValue}`);
    return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().set(cleanedValues, fldPath, defaultValue);
  } // no changes


  return cleanedValues;
};
const trimFieldValue = (cleanedValues, fldPath) => {
  // trims value if it 's a string
  const val = dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().get(cleanedValues, fldPath);

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(val)) {
    const trimmedVal = val.trim();

    if (trimmedVal !== val) {
      console.debug(`trimmed string value of ${fldPath}`);
      return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_1___default().set(cleanedValues, fldPath, trimmedVal);
    }
  } // no changes


  return cleanedValues;
};
function processForm(scenario, form) {
  let input,
      id,
      path,
      newScenario = deepCopy(scenario);

  for (const fld of form) {
    if ("submit" === fld.type) continue;
    id = fld.id;
    path = id.split('-');
    input = fld.type === "checkbox" ? fld.checked : fld.value; // console.log(id, input, fld.defaultValue)
    // Default inputs

    if (!input) {
      switch (path[0]) {
        case 'assessmentFindings':
          input = "Unremarkable";
          break;

        case 'OPQRST':
          input = "Unable to assess";
          break;

        case 'correctMedicationDosages':
          console.log(fld.dataset.isadministrationtype);
          if (!fld.dataset.isadministrationtype) input = "";
          break;

        default:
          break;
      }
    }

    if (input) {
      // Don't process empty fields
      // Reconstruct assessmentFindings path after split
      if (path[0] === 'assessmentFindings') path = [path[0], id.split('assessmentFindings-')[1]]; // Read numbers as integers (should we do floats and then determine if they are ints?)

      input = isNaN(input) ? input : parseInt(input) || input; // Handle different object depths

      switch (path.length) {
        case 1:
          newScenario[path[0]] = input;
          break;

        case 2:
          newScenario[path[0]][path[1]] = input;
          break;

        case 3:
          newScenario[path[0]][path[1]][path[2]] = input;
          break;

        case 4:
          newScenario[path[0]][path[1]][path[2]][path[3]] = input;
          break;

        default:
          console.error(`Path length '${path.length}' error:`, fld);
          break;
      }
    }
  }

  console.log(newScenario);
  return newScenario;
}
function processFormOrig(scenario, data, isEdit, asTemplate, scenarioId) {
  let input,
      id,
      path,
      newScenario = deepCopy(scenario);

  for (let item of data) {
    id = item.id;
    path = id.split('-'); // Default inputs

    if (!input) {
      switch (path[0]) {
        case 'assessmentFindings':
          input = "Unremarkable";
          break;

        case 'OPQRST':
          input = "Unable to assess";
          break;

        case 'correctMedicationDosages':
          if (!item.dataset.isadministrationtype) input = "default";
          break;

        default:
          break;
      }
    }

    if (input) {
      // Don't process empty fields
      // Reconstruct assessmentFindings path after split
      if (path[0] === 'assessmentFindings') path = [path[0], id.split('assessmentFindings-')[1]]; // Read numbers as numbers

      input = isNaN(input) ? input : parseInt(input); // Handle different object depths

      switch (path.length) {
        case 1:
          newScenario[path[0]] = input;
          break;

        case 2:
          newScenario[path[0]][path[1]] = input;
          break;

        case 3:
          newScenario[path[0]][path[1]][path[2]] = input;
          break;

        default:
          console.error(`Path length '${path.length}' error:`, item);
          break;
      }
    }
  }

  if (isEdit && !asTemplate) {
    newScenario.id = scenarioId;
  }

  return newScenario;
}
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/***/ }),

/***/ 1070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateSchema": () => (/* binding */ updateSchema)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6635);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);


const REC_TYPES_WITH_FINDINGS = [_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.ASSESS, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.ASSESS_OPTION];
const REC_TYPES_WITH_OPTIONS = [_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.AWO, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.DECISION];
const MED_DEFAULTS = {
  initialDosage: "",
  // repeatDosage: "",
  // repeatFrequency: "",
  // maxDosage: "",
  route: "",
  contraindications: []
};
/*
 *  copies data from right to left but only if key exists in the left object in the
 *  first place (left defines schema, right clobbers old values)
 *  - only clobbers scalar values, you'll need to deal with arrays yourself and subobjects
 *  as separate calls
 */

function leftMergeObjects(left, right) {
  // console.log(left, right)
  const obj = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(left);

  Object.keys(left).forEach(key => {
    if ("object" === typeof left[key] && null !== left[key]) {// skip all object children, noting that "null" is of type 'object'
      // console.log("skipping object key: " + key)
      // console.log(left[key])
    } else if (key in right) {
      // console.log(key, right[key])
      if (null !== right[key]) {
        obj[key] = right[key];
      } else {// console.log("not copying null value for " + key)
      }
    } else {// console.log(key + " not in right")
    }
  });
  return obj;
}

const VITALS = ["BP", "P", "R", "Skin", "Spo2", "ETCO2", "GCS", "Glucose", "Pain", "Temp"];
const DEFAULT_VITALS = {
  initial: "",
  good: "",
  bad: ""
};

function initializeScen(findings, checkListItemsWithOptions, meds) {
  const rec = {
    id: null,
    name: null,
    scenarioType: "trauma",
    schemaVersion: null,
    info: {
      debriefing: false,
      instructorInformation: "",
      dispatchInfo: "",
      maxTime: 20,
      sceneAssessment: "",
      patientInformation: {
        moulage: "",
        position: "",
        actions: "",
        age: 0,
        weight: 0,
        gender: ""
      }
    },
    SAMPLE: {
      S: "",
      A: "",
      M: "",
      P: "",
      L: "",
      E: ""
    },
    OPQRST: {
      O: "",
      P: "",
      Q: "",
      R: "",
      S: "",
      T: ""
    },
    vitalSigns: {},
    assessmentFindings: {},
    checkListCorrectness: {},
    correctMedicationDosages: {},
    problems: [],
    solutions: [],
    actions: [],
    interventionVariantAnswers: {}
  };
  VITALS.forEach(vital => {
    rec.vitalSigns[vital] = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(DEFAULT_VITALS);
  });
  findings.forEach(finding => {
    rec.assessmentFindings[finding.id] = "";
  });
  checkListItemsWithOptions.forEach(cli => {
    rec.checkListCorrectness[cli.id] = null;
  });
  meds.forEach(med => {
    rec.correctMedicationDosages[med.id] = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(MED_DEFAULTS);
  });
  return rec;
}

const updateSchema = (scen, scenType) => {
  // track IDs added/deleted since last db save (if any)
  const additions = [];
  const deletions = []; // get records for things of various types

  const CLMD = scenType._checklist;
  const MEDS = scenType._medications;
  const INTVS = scenType._interventions;
  const INTV_PROMPTS = scenType._interventionPrompts;
  const INTV_PROMPT_ANSWERS = scenType._interventionPromptAnswers;
  const FINDINGS = CLMD.filter(rec => REC_TYPES_WITH_FINDINGS.includes(rec.type));
  const CLI_W_OPTS = CLMD.filter(rec => REC_TYPES_WITH_OPTIONS.includes(rec.type)); // create a scenario object initialized with proper fields for current schema
  // along with default values

  const newScen = initializeScen(FINDINGS, CLI_W_OPTS, MEDS);
  newScen.schemaVersion = scenType.schemaVersion;

  if (scen.id) {
    newScen.id = scen.id;
  }

  if (scen.name) {
    newScen.name = scen.name;
  }

  if (scen.info) {
    newScen.info = leftMergeObjects(newScen.info, scen.info);

    if (scen.info.patientInformation) {
      newScen.info.patientInformation = leftMergeObjects(newScen.info.patientInformation, scen.info.patientInformation);
    }
  }

  if (scen.SAMPLE) {
    newScen.SAMPLE = leftMergeObjects(newScen.SAMPLE, scen.SAMPLE);
  }

  if (scen.OPQRST) {
    newScen.OPQRST = leftMergeObjects(newScen.OPQRST, scen.OPQRST);
  }

  if (scen.vitalSigns) {
    Object.keys(newScen.vitalSigns).forEach(vital => {
      if (vital in scen.vitalSigns) {
        newScen.vitalSigns[vital] = leftMergeObjects(newScen.vitalSigns[vital], scen.vitalSigns[vital]);
      }
    });
  }

  if (scen.assessmentFindings) {
    newScen.assessmentFindings = leftMergeObjects(newScen.assessmentFindings, scen.assessmentFindings); // find deleted findings ids

    Object.keys(scen.assessmentFindings).forEach(findingId => {
      const found = FINDINGS.find(rec => rec.id === findingId);

      if (!found) {
        deletions.push(findingId);
      }
    }); // find new IDs

    FINDINGS.forEach(finding => {
      if (!(finding.id in scen.assessmentFindings)) {
        additions.push(finding);
      }
    });
  }

  if (scen.checkListCorrectness) {
    newScen.checkListCorrectness = leftMergeObjects(newScen.checkListCorrectness, scen.checkListCorrectness); // find deletions

    Object.keys(scen.checkListCorrectness).forEach(itemId => {
      const found = CLI_W_OPTS.find(rec => rec.id === itemId);

      if (!found) {
        deletions.push(itemId);
      }
    }); // find new IDs

    CLI_W_OPTS.forEach(cli => {
      if (!(cli.id in scen.checkListCorrectness)) {
        additions.push(cli);
      }
    });
  }

  if (scen.correctMedicationDosages) {
    MEDS.forEach(med => {
      if (med.id in scen.correctMedicationDosages) {
        newScen.correctMedicationDosages[med.id] = leftMergeObjects(newScen.correctMedicationDosages[med.id], scen.correctMedicationDosages[med.id]);
      }
    });
  } // don't bother updating old schema - too much to change, keep problems, solutions,
  // and actions as empty lists if they don't exist as separate lists of objects


  if (undefined !== scen.actions && undefined !== scen.solutions) {
    scen.problems.forEach((prob, i) => {
      prob.assessments.forEach(rec => {
        // add new feedback field to assessments, if missing
        if (undefined === rec.feedback) {
          rec.feedback = "";
        } // copy over assessIDs if they still exist, else mark
        // as deleted (they will probably show up as dups, perhaps
        // I should search within deletions for matching ID instead)


        if (CLMD[rec.assessmentID] === undefined) {
          deletions.push(rec.assessmentID);
        }
      });
      newScen.problems.push(prob);
    });
    scen.solutions.forEach((sol, i) => {
      // add new field strictActionOrdering=false, if missing, to solutions
      if (undefined === sol.strictActionOrdering) {
        sol.strictActionOrdering = false;
      }

      newScen.solutions.push(sol); // console.log("solution", sol)
    });
    scen.actions.forEach((act, i) => {
      if (Object.keys(act.interventionVariant).length === 0) {
        // push as-is
        newScen.actions.push(act);
      } else {
        // sanity check action interventionVariant first
        Object.entries(act.interventionVariant).forEach(([promptID, promptAnswers]) => {
          const found = INTV_PROMPTS.find(e => e.id === promptID);

          if (!found) {//  handle error
          } else {
            const ansType = typeof promptAnswers;

            if (found.selectionType === _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM) {
              if ("string" === ansType) {
                // string value which should be array of string value
                act.interventionVariant[promptID] = [promptAnswers];
              }
            }
          }
        }); // push munged action

        newScen.actions.push(act);
      }

      if (!INTVS.find(e => e.id === act.interventionID)) {
        deletions.push(act.interventionID);
      }
    });
  }

  if (undefined === scen.interventionVariantAnswers) {
    // set to empty object so code below can simply iterate over nothing
    scen.interventionVariantAnswers = {};
  }

  Object.entries(scen.interventionVariantAnswers).forEach(([intvID, variantsObj]) => {
    const foundIntv = INTVS.find(e => e.id === intvID);

    if (!foundIntv) {
      deletions.push(intvID);
    } else {
      if (!(intvID in newScen.interventionVariantAnswers)) {
        newScen.interventionVariantAnswers[intvID] = {};
      }

      Object.entries(variantsObj).forEach(([variantJSON, variantData]) => {
        const variant = JSON.parse(variantJSON);
        let foundAll = true;
        Object.entries(variant).forEach(([promptID, answerID]) => {
          const foundPrompt = INTV_PROMPTS.find(e => e.id === promptID);

          if (!foundPrompt) {
            foundAll = false;
            deletions.push(promptID);
          } else {
            const foundAnswer = INTV_PROMPT_ANSWERS.find(e => e.id === answerID);

            if (!foundAnswer) {
              deletions.push(answerID);
            }
          }
        });

        if (foundAll) {
          newScen.interventionVariantAnswers[intvID][variantJSON] = {}; // get list of currrent promptIDs for intv

          let promptIDs = new Set(INTV_PROMPTS.filter(e => e.interventionID === intvID).map(e => e.id));
          Object.entries(scen.interventionVariantAnswers[intvID][variantJSON]).forEach(([promptID, ansIDs]) => {
            promptIDs.delete(promptID);
            const foundPrompt = INTV_PROMPTS.find(e => e.id === promptID);

            if (!foundPrompt) {
              deletions.push(promptID);
            } else {
              let foundAll = true;

              if ("string" === typeof ansIDs) {
                const foundAnswer = INTV_PROMPT_ANSWERS.find(e => e.id === ansIDs);

                if (!foundAnswer) {
                  foundAll = false;
                  deletions.push(ansIDs);
                }
              } else {
                ansIDs.forEach(ansID => {
                  const foundAnswer = INTV_PROMPT_ANSWERS.find(e => e.id === ansID);

                  if (!foundAnswer) {
                    foundAll = false;
                    deletions.push(ansID);
                  }
                });
              }

              if (foundAll) {
                newScen.interventionVariantAnswers[intvID][variantJSON][promptID] = ansIDs;
              }
            }
          });

          if (promptIDs.size > 0) {
            Array.from(promptIDs).forEach(promptID => {
              // set any missing promptIDs to have no assigned answers
              newScen.interventionVariantAnswers[intvID][variantJSON][promptID] = [];
            });
          }
        }
      });
    }
  });
  console.log("additions", additions);
  console.log("deletions", deletions); // console.log("AFTER", newScen)

  return newScen;
};

/***/ }),

/***/ 9707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/AddButton.js";


const AddButton = ({
  addHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "add-btn",
    onClick: addHandler,
    children: "+"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddButton);

/***/ }),

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9707);
/* harmony import */ var _InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6533);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/AddEntity.js";
 // import { useScenarioType } from "./ScenarioTypeContext"





const AddEntity = ({
  entitiesDesc,
  addHandler,
  uniqueIDs: _uniqueIDs = [],
  uniqueLabels: _uniqueLabels = []
}) => {
  // const {uniqueIDs, uniqueLabels} = useScenarioType()
  const [labelsUnique, setLabelsUnique] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [entityType, setEntityType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [entityName, setEntityName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [newID, setNewID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newIDErrMsg, setNewIDErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newLabel, setNewLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newLabelErrMsg, setNewLabelErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const changeID = event => {
    const {
      value
    } = event.target;
    setNewID(value);
    setNewIDErrMsg(!_uniqueIDs.includes(value) ? "" : "Not Unique");
  };

  const changeLabel = event => {
    const {
      value
    } = event.target;
    setNewLabel(value);

    if (labelsUnique) {
      setNewLabelErrMsg(!_uniqueLabels.includes(value) ? "" : "Not Unique");
    }
  };

  const onAdd = event => {
    if (newIDErrMsg !== "" || newLabelErrMsg !== "") {
      alert("Please correct errors before submitting");
    } else {
      addHandler(entityType, newID, newLabel);
      setNewID("");
      setNewIDErrMsg("");
      setNewLabel("");
      setNewLabelErrMsg("");
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!entityType) {
      setEntityType(entitiesDesc[0].type);
      setEntityName(entitiesDesc[0].name);
      setLabelsUnique(entitiesDesc[0].labelsUnique);
    }
  }, [entitiesDesc, entityType]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "add-entity",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
            children: "Label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
              children: ["Add ", entityName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: newID,
              errMsg: newIDErrMsg,
              onChange: changeID
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: newLabel,
              errMsg: newLabelErrMsg,
              onChange: changeLabel
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_AddButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
              addHandler: onAdd
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddEntity);

/***/ }),

/***/ 4288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9707);
/* harmony import */ var _InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6533);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/AssociateEntity.js";
 // import { useScenarioType } from "./ScenarioTypeContext"





const defaultLabelGenerator = id => `label-${id}`;

const AssociateEntity = ({
  entityDesc,
  choices: _choices = [],
  addHandler,
  genIDs: _genIDs = false,
  idGenerator: _idGenerator = defaultLabelGenerator,
  uniqueIDs: _uniqueIDs = []
}) => {
  // const { uniqueIDs } = useScenarioType()
  const [entityType, setEntityType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [entityName, setEntityName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedID, setSelectedID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [selectedIDErrMsg, setSelectedIDErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [id, setID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [idErrMsg, setIDErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const onAdd = event => {
    if ("" !== selectedID) {
      addHandler(entityType, id, selectedID);
      setSelectedID("");
      setSelectedIDErrMsg("");
      setID("");
      setIDErrMsg("");
    } else {
      setSelectedIDErrMsg(`Please select a/an ${entityName}`);
    }
  };

  const selectedIDChangeHandler = event => {
    const {
      value
    } = event.target;

    if (_genIDs) {
      const newID = _idGenerator(value);

      setID(newID);
      setIDErrMsg(_uniqueIDs.includes(newID) ? "Not unique" : "");
    }

    setSelectedID(value);
  };

  const idChangeHandler = event => {
    const {
      value
    } = event.target;
    setID(value);
    setIDErrMsg(_uniqueIDs.includes(value) ? "Not unique" : "");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!entityType) {
      setEntityType(entityDesc.type);
      setEntityName(entityDesc.name);
    }
  }, [entityDesc, entityType]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "add-entity",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
            children: entityDesc.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined), _genIDs && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
            children: "ID (auto-gen cross-listed will be dups, append number)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
              children: ["Add ", entityName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
              value: selectedID,
              onChange: selectedIDChangeHandler,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                value: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, undefined), _choices.map(choice => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
                value: choice.id,
                children: choice.label
              }, choice.id, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 37
              }, undefined))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              className: "err-msg",
              children: selectedIDErrMsg
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, undefined), _genIDs && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: id,
              errMsg: idErrMsg,
              size: 60,
              onChange: idChangeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_AddButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
              addHandler: onAdd
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssociateEntity);

/***/ }),

/***/ 6378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6643);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/Breadcrumbs.js";




const BreadCrumbs = ({
  crumbs: _crumbs = []
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
  className: "breadcrumbs",
  children: _crumbs.map((bc, idx, arr) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    children: idx === arr.length - 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "breadcrumb",
      children: [" ", bc.label, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 27
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        className: "breadcrumb",
        to: bc.href,
        children: [" ", bc.label, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 29
      }, undefined), " \xA0 > \xA0 "]
    }, void 0, true)
  }, idx, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }, undefined))
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumbs);

/***/ }),

/***/ 8020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _InterventionsEditor_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1681);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5124);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/AddCheckListItem.js";






const INITIAL_STATE = {
  newID: "",
  newLabel: "",
  newType: ""
};

const AddCheckListItem = ({
  index,
  phase,
  subPhase,
  parentID
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(INITIAL_STATE);
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    uniqueIDs,
    uniqueLabels,
    insertRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_3__.useCheckList)();

  const changeHandler = event => {
    const {
      id,
      value
    } = event.target;
    setState(prevState => Object.assign({}, prevState, {
      [id]: value
    }));
  };

  const addHandler = event => {
    event.preventDefault();

    if ("" === state.newID) {
      setErrMsg("Please enter an ID");
    } else if ("" === state.newLabel) {
      setErrMsg("Please enter a Label");
    } else if ("" === state.newType) {
      setErrMsg("Please select a type");
    } else if (uniqueIDs.includes(state.newID)) {
      setErrMsg("ID must be unique");
    } else if (uniqueLabels.includes(state.newLabel)) {
      setErrMsg("Label must be unique");
    } else {
      const newRec = (0,_InterventionsEditor_types__WEBPACK_IMPORTED_MODULE_2__.genCheckListItemRec)(state.newID, state.newType, state.newLabel, phase, subPhase, parentID); // console.log("adding", newRec, index)

      insertRec(newRec, index);
      setState(INITIAL_STATE);
      setErrMsg("");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "add-item",
    children: ["Add CheckList Item:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("b", {
      children: " ID: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
      type: "text",
      id: "newID",
      value: state.newID,
      size: 25,
      autoComplete: "off",
      onChange: changeHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 26
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("b", {
      children: " Label: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
      type: "text",
      id: "newLabel",
      value: state.newLabel,
      size: 60,
      autoComplete: "off",
      onChange: changeHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("b", {
      children: " Type: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
      id: "newType",
      value: state.newType,
      onChange: changeHandler,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
        value: "",
        children: "----- Select Type ----------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
        value: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.ASSESS,
        children: "Assessment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
        value: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.AWO,
        children: "Assessment w/options"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
        value: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.DECISION,
        children: "Decision"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
        value: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.NESTED_CHECKLIST,
        children: "Nested Checklist"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
        value: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.REQUIRED,
        children: "Required Action"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
        value: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.CL_PROMPT,
        children: "Prompt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      className: "add-btn",
      onClick: addHandler,
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        "hidden": "" === errMsg
      }),
      children: errMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCheckListItem);

/***/ }),

/***/ 7502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/AddOption.js";
 // import { MDB_TYPES } from "@meddbriefer/scenario-data/constants"




const AddOption = ({
  index,
  phase,
  subPhase: _subPhase = null,
  parentID,
  childType
}) => {
  const [newID, setNewID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newLabel, setNewLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    uniqueIDs,
    uniqueLabels,
    insertRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_1__.useCheckList)();

  const changeHandler = event => {
    const name = event.target.name;
    const val = event.target.value;

    switch (name) {
      case "newID":
        setNewID(val);
        break;

      case "newLabel":
        setNewLabel(val);
        break;

      default:
        console.log("unknown field name", name);
    }
  };

  const addHandler = event => {
    event.preventDefault();
    console.log(uniqueLabels);

    if ("" === newID) {
      console.log("Please enter an ID");
      return;
    }

    if ("" === newLabel) {
      console.log("Please enter a label");
      return;
    }

    if (uniqueIDs.includes(newID)) {
      console.log("id must be unique");
      return;
    }

    if (uniqueLabels.includes(newLabel)) {
      console.log("label must be unique");
      return;
    }

    const newRec = {
      id: newID,
      type: childType,
      label: newLabel,
      phase: phase,
      subPhase: _subPhase,
      parentID: parentID
    }; // console.log("adding", newRec, index)

    insertRec(newRec, index);
    setNewID("");
    setNewLabel("");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "add-item",
    children: ["Add new option:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
      children: " ID: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      type: "text",
      name: "newID",
      value: newID,
      onChange: changeHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 26
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
      children: " Label: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      type: "text",
      name: "newLabel",
      value: newLabel,
      onChange: changeHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 28
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
      className: "add-btn",
      onClick: addHandler,
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddOption);

/***/ }),

/***/ 4378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/AddSubPhase.js";





const INITIAL_STATE = {
  newID: "",
  newLabel: ""
};

const AddSubPhase = ({
  index,
  phase
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(INITIAL_STATE);
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    uniqueIDs,
    uniqueLabels,
    insertRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_2__.useCheckList)();

  const changeHandler = event => {
    const {
      id,
      value
    } = event.target;
    setState(prevState => Object.assign({}, prevState, {
      [id]: value
    }));
  };

  const addHandler = event => {
    event.preventDefault();

    if ("" === state.newID) {
      setErrMsg("Please enter an ID");
    } else if ("" === state.newLabel) {
      setErrMsg("Please enter a label");
    } else if (uniqueIDs.includes(state.newID)) {
      setErrMsg("ID must be unique");
    } else if (uniqueLabels.includes(state.newLabel)) {
      setErrMsg("Label must be unique");
    } else {
      const newRec = {
        id: state.newID,
        type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.SUB_PHASE,
        label: state.newLabel,
        phase: phase,
        parentID: phase
      };
      insertRec(newRec, index);
      setState(INITIAL_STATE);
      setErrMsg("");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "add-item",
      children: ["Add new Sub-Section:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
        children: " ID: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "text",
        id: "newID",
        value: state.newID,
        autoComplete: "off",
        onChange: changeHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 30
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
        children: " Label: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "text",
        id: "newLabel",
        value: state.newLabel,
        autoComplete: "off",
        onChange: changeHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 33
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        className: "add-btn",
        onClick: addHandler,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: errMsg === "" && "hidden",
      children: errMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddSubPhase);

/***/ }),

/***/ 1412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/ButtonBar.js";



const ButtonBar = ({
  rec
}) => {
  const {
    moveUp,
    moveDown
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_0__.useCheckList)();

  const upHandler = () => {
    // console.log("moveup", rec._ctx)
    moveUp(rec._ctx.prevBlock, rec._ctx);
  };

  const downHandler = () => {
    // console.log("movedown", rec._ctx)
    moveDown(rec._ctx, rec._ctx.nextBlock);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "button",
      className: "swap-btn",
      disabled: !rec._ctx.prevBlock,
      onClick: () => upHandler(),
      children: "\u2191"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "button",
      className: "swap-btn",
      disabled: !rec._ctx.nextBlock,
      onClick: () => downHandler(),
      children: "\u2193"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonBar);

/***/ }),

/***/ 5342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2459);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6152);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/ChangesModal.js";

 // import { MDB_TYPES } from "@meddbriefer/scenario-data/constants"





const ChangesModal = ({
  additions,
  deletions,
  isOpen
}) => {
  const {
    saveCheckList
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_0__.useScenarioType)();
  const {
    data,
    // hier,
    hideModal,
    getType
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_1__.useCheckList)();

  const continueEditing = event => {
    event.preventDefault();
    hideModal();
  }; // const recursivelyExpandChecklistItem = (item) => {
  //     const {index, options, items} = item
  //     const {id, type, label, abbrLabel, phase, subPhase} = data[index]
  //     const newItem = {id, type, label, abbrLabel, phase, subPhase}
  //     if (!!options) {
  //         // console.log(options)
  //         newItem.options = []
  //         options.forEach(op =>{
  //             const {index} = op
  //             const {id, type, label, abbrLabel, phase, subPhase} = data[index]
  //             const newOp = {id, type, label, abbrLabel, phase, subPhase}
  //             newItem.options.push(newOp)
  //         })
  //     } else if (!!items) {
  //         newItem.items = []
  //         items.forEach((it, i) => {
  //             newItem.items.push(recursivelyExpandChecklistItem(it))
  //         })
  //     }
  //     return newItem
  // }

  /*
   * trace the 'hier' tree to create the hierarchical structure used by the app, which
   * will be saved as phaseData (awful name)
  */
  // const traceHier = () => {
  //     const newHier = []
  //     hier.forEach((ph, i) => {
  //         const {index, items, subPhases} = ph
  //         const {id, type, label} = data[index]
  //         const newPh = {id, type, label}
  //         if (!!items) {
  //             newPh.items = []
  //             items.forEach((item, j) => {
  //                 newPh.items.push(recursivelyExpandChecklistItem(item))
  //             })
  //         } else if (!!subPhases) {
  //             newPh.subPhases = []
  //             subPhases.forEach((sp, j) => {
  //                 const {index, items} = sp
  //                 const {id, type, label, phase} = data[index]
  //                 const newSp = {id, type, label, phase, items: []}
  //                 if (!!items) {
  //                     items.forEach(it => {
  //                         newSp.items.push(recursivelyExpandChecklistItem(it))
  //                     })
  //                 }
  //                 newPh.subPhases.push(newSp)
  //             })
  //         }
  //         newHier.push(newPh)
  //     })
  //     // strips out fields whose value is "undefined".  There *must* be a better way
  //     const phaseData = JSON.parse(JSON.stringify(newHier))
  //     return phaseData
  // }


  const doneEditing = async event => {
    event.preventDefault(); // const newHier = traceHier()

    const result = await saveCheckList(data); //newHier)

    if (result) {
      console.log("changes saved successfully");
    } else {
      console.log("an error occured while saving");
    }

    hideModal();
  };

  const renderChangesTable = (label, recs) => {
    if (recs.length === 0) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 20
      }, undefined);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "changed-ids",
      children: [label, " items", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("colgroup", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("col", {
            span: "1",
            style: {
              width: "20%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("col", {
            span: "1",
            style: {
              width: "40%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("col", {
            span: "1",
            style: {
              width: "40%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 42
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
              children: "Label"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 53
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
          children: recs.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
              children: getType(item)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
              children: item.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
              children: item.label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, undefined)]
          }, item.id, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined);
  };

  const renderModificationsTable = (additions, deletions) => {
    if (additions.length === 0 && deletions.length === 0) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }, undefined);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "modifications",
          children: [renderChangesTable("Added", additions), renderChangesTable("Deleted", deletions)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, undefined)]
      }, void 0, true);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Save Changes",
    isOpen: isOpen,
    close: hideModal,
    closeButton: false,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
        children: "Warning:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, undefined), " your additions and deletions to the checklist are being tracked. Saving to the database will reset the tracking of additions and deletions."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      children: ["If you wish to make ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
        children: "more changes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 37
      }, undefined), ", click on the \"Continue editing\" button"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: ["If you're ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
        children: "done editing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 27
      }, undefined), ":", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: "copy the list of additions and deletions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: "paste into an email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: "send it to the appropriate people"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: "click on the \"I'm done\" button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }, undefined), renderModificationsTable(additions, deletions), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      type: "button",
      onClick: continueEditing,
      children: "Continue editing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      type: "button",
      onClick: doneEditing,
      children: "I'm Done"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangesModal);

/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckBoxField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/CheckBoxField.js";



function CheckBoxField({
  rec,
  fld,
  label = null,
  unique = false,
  size = 20
}) {
  const {
    updateRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_1__.useCheckList)();

  const changeHandler = event => {
    const newRec = Object.assign({}, rec, {
      [fld]: event.target.checked
    });
    updateRec(newRec);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
    type: "checkbox",
    name: fld,
    checked: rec[fld],
    onChange: changeHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7267);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6643);
/* harmony import */ var _meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6011);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5558);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2459);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5124);
/* harmony import */ var _Phase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(670);
/* harmony import */ var _PhaseList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3197);
/* harmony import */ var _SubPhase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6235);
/* harmony import */ var _ChangesModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5342);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/CheckList.js";











const CONTAINER_TYPES = [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.PHASE, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.SUB_PHASE, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.NESTED_CHECKLIST]; // takes a list of objects and fieldName (key) and returns an object who's attributes are
// the distinct values for that field mapped to a list objects which share that
// value

const groupByKey = (list, key) => list.reduce((hash, obj) => Object.assign({}, hash, {
  [obj[key]]: (hash[obj[key]] || []).concat(obj)
}), {});

const genPrevBlock = (array, index) => {
  if (index === 0) return null;
  const prevItem = array[index - 1];
  return {
    index: prevItem.index,
    lastIndex: prevItem.lastIndex
  };
};

const genNextBlock = (array, index) => {
  if (index === array.length - 1) return null;
  const nextItem = array[index + 1];
  return {
    index: nextItem.index,
    lastIndex: nextItem.lastIndex
  };
};

const recursivelyIndexItem = item => {
  if ("items" in item) {
    // embedded checklist
    item.items = item.items.map(child => recursivelyIndexItem(child));
    item.lastIndex = item.items[item.items.length - 1].lastIndex;
  } else if ("options" in item) {
    // decision or assessment-with-options
    item.options = item.options.map(child => recursivelyIndexItem(child));
    item.lastIndex = item.options[item.options.length - 1].lastIndex;
  } else {
    // simple checklist item type (no children such as items or options)
    item.lastIndex = item.index;
  }

  return item;
};

const recursivelyComputeBlocks = (item, i, arr) => {
  if ("items" in item) {
    item.items = item.items.map((sub, i, arr) => recursivelyComputeBlocks(sub, i, arr));
  } else if ("options" in item) {
    item.options = item.options.map((opt, i, arr) => recursivelyComputeBlocks(opt, i, arr));
  }

  item.prevBlock = genPrevBlock(arr, i);
  item.nextBlock = genNextBlock(arr, i);
  return item;
};

const CheckListEditor = () => {
  // const [rawData, setRawData] = useState(null)
  const {
    scenarioType
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_3__.useScenarioType)();
  const {
    path
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useRouteMatch)(); // the data which we'll be working on is contained within scenarioType.checklist

  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(scenarioType.checklist);
  const [uniqueIDs, setUniqueIDs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [uniqueLabels, setUniqueLabels] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [modifiedFlds, setModifiedFlds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}); // set to true initially, so that useEffect rebuilds the hierarchy

  const [hierUpdated, setHierUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [labelsUpdated, setLabelsUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // const [parentIDs, setParentIds] = useState(null)
  // const [hierarchy, setHierarchy] = useState(null)
  // const [hierarchyCreated, setHierarchyCreated] = useState(false)

  const [hier, setHier] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [modalIsShown, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const hideModal = () => setShowModal(false);

  const showModal = () => setShowModal(true);

  const genID = (rec, fldName) => `row-${rec._ctx.index}-${fldName}`;

  const getRec = ctx => {
    return Object.assign({}, data[ctx.index], {
      _ctx: ctx
    });
  };

  const insertRec = (rec, index) => {
    const copy = [...data];
    copy.splice(index, 0, rec); // console.log(copy)

    if (!!modifiedFlds[rec.id] && "deleted" === modifiedFlds[rec.id].status) {
      setModifiedFlds(prevState => {
        const dup = Object.assign({}, prevState);
        delete dup[rec.id];
        return dup;
      });
    } else {
      setModifiedFlds(prevState => {
        const newRec = Object.assign({}, rec, {
          status: "added"
        });
        return Object.assign({}, prevState, {
          [rec.id]: newRec
        });
      });
    }

    setData(copy);
    setHierUpdated(true);
    setLabelsUpdated(true);
  };

  const updateRec = rec => {
    const index = rec._ctx.index;
    delete rec._ctx;
    setData([...data.slice(0, index), rec, ...data.slice(index + 1)]);
  };

  const deleteRec = rec => {
    // rec may have children, so we need to look at index and lastIndex to determine how many to delete
    const copy = [...data];
    const start = rec._ctx.index;
    const numDelete = rec._ctx.lastIndex - start + 1;
    const deleted = copy.splice(start, numDelete);
    deleted.forEach(item => {
      if (!!modifiedFlds[item.id] && "added" === modifiedFlds[item.id].status) {
        // don't report a recently added (since last save) field as deleted
        setModifiedFlds(prevState => {
          const dup = Object.assign({}, prevState);
          delete dup[item.id];
          return dup;
        });
      } else {
        const newVal = Object.assign({}, item, {
          status: "deleted"
        });
        setModifiedFlds(prevState => Object.assign({}, prevState, {
          [item.id]: newVal
        }));
      }
    });
    setData(copy);
    setHierUpdated(true);
    setLabelsUpdated(true);
  };

  const moveUp = (init1stBlock, init2ndBlock) => {
    // will delete the 2nd block, and re-insert it before 1st block
    // each block can simply be of length 1 (lastIndex is undefined)
    const copy = [...data];
    const startDelete = init2ndBlock.index;
    const numDelete = init2ndBlock.lastIndex ? init2ndBlock.lastIndex - (startDelete - 1) : 1;
    const deleted = copy.splice(startDelete, numDelete);
    copy.splice(init1stBlock.index, 0, ...deleted);
    setData(copy);
    setHierUpdated(true);
  };

  const moveDown = (init1stBlock, init2ndBlock) => {
    // will delete the 1st block, and re-insert it after the 2nd block
    // each block can simply be of length 1 (lastIndex is undefined)
    const copy = [...data];
    const startDelete = init1stBlock.index;
    const numDelete = init1stBlock.lastIndex ? init1stBlock.lastIndex - (startDelete - 1) : 1;
    const reinsertAt = init2ndBlock.lastIndex ? init2ndBlock.lastIndex - (numDelete - 1) : init2ndBlock.index - (numDelete - 1);
    const deleted = copy.splice(startDelete, numDelete);
    copy.splice(reinsertAt, 0, ...deleted);
    setData(copy);
    setHierUpdated(true);
  };

  const getAdded = () => Object.values(modifiedFlds).filter(rec => rec.status === "added");

  const getRemoved = () => Object.values(modifiedFlds).filter(rec => rec.status === "deleted");

  const calcHierarchy1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const parent2Children = {};

    const recursivelyExpandChild = child => {
      if (child.index in parent2Children) {
        const childRec = parent2Children[child.index];
        delete parent2Children[child.index];

        if (childRec.items) {
          childRec.items.forEach((item, i) => {
            childRec.items[i] = recursivelyExpandChild(item);
          });
        }

        return childRec;
      }

      return child;
    };

    const copy = data.map((rec, i) => Object.assign({}, rec, {
      index: i
    })); // find records with a parentID property, and group them, mapping them to
    // parent2Children id => list

    const recsWithParents = copy.filter(rec => "parentID" in rec);

    for (const [parentID, children] of Object.entries(groupByKey(recsWithParents, "parentID"))) {
      const parent = copy.find(rec => rec.id === parentID);
      const newRec = {
        id: parent.id,
        type: parent.type,
        index: parent.index
      };
      const newChildren = children.map(child => {
        return {
          id: child.id,
          index: child.index,
          type: child.type
        };
      });

      switch (parent.type) {
        case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.PHASE:
          if (newChildren[0].type === _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.SUB_PHASE) {
            newRec.subPhases = newChildren;
          } else {
            newRec.items = newChildren;
          }

          parent2Children[parent.index] = newRec;
          break;

        case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.SUB_PHASE:
          newRec.items = newChildren;
          parent2Children[parent.index] = newRec;
          break;

        case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.NESTED_CHECKLIST:
          newRec.items = newChildren;
          parent2Children[parent.index] = newRec;
          break;

        case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.DECISION:
        case _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.AWO:
          newRec.options = newChildren;
          parent2Children[parent.index] = newRec;
          break;

        default:
          console.log(`unexpected parent type: ${parent.type} childtype: ${children[0].type}`);
      }
    } // add a new record to parent2children for newly added container types, so that they will get added
    // to the hierarchy


    const containers = copy.filter(rec => CONTAINER_TYPES.includes(rec.type));
    containers.forEach(rec => {
      if (!(rec.index in parent2Children)) {
        parent2Children[rec.index] = rec;
      }
    });
    const phases = Object.entries(parent2Children).filter(([k, v], idx) => v.type === _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.PHASE).map(([k, v]) => v); // start with phases and recursively add children, from parent2Children, removing the parent2children records afterwards.
    // at the end parent2Children should only contain the phases

    phases.forEach((phase, i) => {
      var _phase$items, _phase$subPhases;

      (_phase$items = phase.items) == null ? void 0 : _phase$items.forEach((item, i) => {
        phase.items[i] = recursivelyExpandChild(item);
      });
      (_phase$subPhases = phase.subPhases) == null ? void 0 : _phase$subPhases.forEach((sp, i) => {
        phase.subPhases[i] = recursivelyExpandChild(sp);
      });
    }); // compute lastIndices attribute for the entire tree

    phases.forEach((phase, i) => {
      if (phase.items) {
        phase.items.map(item => recursivelyIndexItem(item));
        phase.lastIndex = phase.items[phase.items.length - 1].lastIndex;
      } else if (phase.subPhases) {
        phase.subPhases = phase.subPhases.map(sp => {
          if (sp.items) {
            sp.items = sp.items.map(item => recursivelyIndexItem(item));
            sp.lastIndex = sp.items[sp.items.length - 1].lastIndex;
          } else {
            sp.lastIndex = sp.index;
          }

          return sp;
        });
        phase.lastIndex = phase.subPhases[phase.subPhases.length - 1].lastIndex;
      } else {
        // for either new phases or phases which just had all children deleted
        phase.lastIndex = phase.index;
      }
    }); // compute next/prev blocks for the entire tree

    phases.forEach((phase, i, arr) => {
      if (phase.items) {
        phase.items.map((item, _i, _arr) => recursivelyComputeBlocks(item, _i, _arr));
      } else if (phase.subPhases) {
        phase.subPhases = phase.subPhases.map((sp, _i, _arr) => {
          if (sp.items) {
            sp.items = sp.items.map((item, j, arr2) => recursivelyComputeBlocks(item, j, arr2));
          }

          sp.prevBlock = genPrevBlock(_arr, _i);
          sp.nextBlock = genNextBlock(_arr, _i);
          return sp;
        });
      }

      phase.prevBlock = genPrevBlock(arr, i);
      phase.nextBlock = genNextBlock(arr, i);
    });
    return phases;
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data) {
      if (hierUpdated) {
        setHier(calcHierarchy1()); // Id's have been already pre-checked to be unique and this
        // state var is used to make sure new ones are also unique

        setUniqueIDs(data.map(rec => rec.id));
        setHierUpdated(false);
      }

      if (labelsUpdated) {
        setUniqueLabels(data.map(rec => rec.label));
        setLabelsUpdated(false);
      }
    }
  }, [data, hierUpdated, labelsUpdated, calcHierarchy1]);

  const getType = rec => {
    const type = rec.type;
    let retVal = type;

    switch (type) {
      case "phase":
        retVal = "Section";
        break;

      case "sub-phase":
        retVal = "Sub-Section";
        break;

      default:
        break;
    }

    return retVal;
  };

  if (!hier) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.HashRouter, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_CheckListContext__WEBPACK_IMPORTED_MODULE_4__.CheckListContext.Provider, {
        value: {
          hier,
          uniqueIDs,
          uniqueLabels,
          setLabelsUpdated,
          data,
          getRec,
          insertRec,
          updateRec,
          deleteRec,
          setData,
          genID,
          moveUp,
          moveDown,
          showModal,
          hideModal,
          getType
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "checklist-editor",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Switch, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.StaffRoute, {
              path: `${path}/phase/:phaseIdx/subphase/:subPhaseIdx`,
              component: _SubPhase__WEBPACK_IMPORTED_MODULE_7__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.StaffRoute, {
              path: `${path}/phase/:phaseIdx`,
              component: _Phase__WEBPACK_IMPORTED_MODULE_5__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_meddbriefer_mdb_auth__WEBPACK_IMPORTED_MODULE_1__.StaffRoute, {
              path: "/scenario-type/:scenarioTypeID/checklist",
              component: _PhaseList__WEBPACK_IMPORTED_MODULE_6__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ChangesModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
            additions: getAdded(),
            deletions: getRemoved(),
            isOpen: modalIsShown
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 343,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckListEditor);

/***/ }),

/***/ 5124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckListContext": () => (/* binding */ CheckListContext),
/* harmony export */   "useCheckList": () => (/* binding */ useCheckList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CheckListContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  hier: undefined,
  uniqueIDs: undefined,
  uniqueLabels: undefined,
  setLabelsUpdated: undefined,
  data: undefined,
  setData: undefined,
  saveData: undefined,
  getRec: undefined,
  updateRec: undefined,
  deleteRec: undefined,
  insertRec: undefined,
  genID: undefined,
  moveUp: undefined,
  moveDown: undefined,
  showModal: undefined,
  hideModal: undefined,
  getType: undefined
});
const useCheckList = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CheckListContext);

/***/ }),

/***/ 3860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5558);
/* harmony import */ var _SimpleCheckListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3310);
/* harmony import */ var _CheckListItemWithOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6033);
/* harmony import */ var _NestedChecklist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6136);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/CheckListItem.js";






const CheckListItem = ({
  ctx,
  n,
  of,
  asTable: _asTable = false
}) => {
  switch (ctx.type) {
    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.ASSESS:
    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.REQUIRED:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SimpleCheckListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ctx: ctx,
        asTable: _asTable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 20
      }, undefined);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_PROMPT:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SimpleCheckListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ctx: ctx,
        hasAbbrLabel: false,
        hasGraded: false,
        hasFeedback: false,
        asTable: _asTable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 20
      }, undefined);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_NestedChecklist__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ctx: ctx,
        asTable: _asTable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 20
      }, undefined);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CheckListItemWithOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ctx: ctx,
        childType: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION,
        asTable: _asTable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 20
      }, undefined);

    case _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.AWO:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CheckListItemWithOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ctx: ctx,
        childType: _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.ASSESS_OPTION,
        asTable: _asTable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 20
      }, undefined);

    default:
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("pre", {
        children: JSON.stringify(ctx)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckListItem);

/***/ }),

/***/ 6033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var _AddOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7502);
/* harmony import */ var _ButtonBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1412);
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8307);
/* harmony import */ var _ReadOnlyField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9378);
/* harmony import */ var _SimpleCheckListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3310);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8283);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/CheckListItemWithOptions.js";











const CheckListItemWithOptions = ({
  ctx,
  childType,
  asTable: _asTable = false
}) => {
  const [rec, setRec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    getRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_1__.useCheckList)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !!ctx && setRec(getRec(ctx));
  }, [ctx, getRec]);

  if (!rec && _asTable) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
        colSpan: "7",
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, undefined);
  } else if (!rec) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }, undefined);
  }

  if (_asTable) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
            rec: rec
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: [rec.type, "  "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_5__["default"], {
            rec: rec,
            fld: "id",
            size: "18"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            rec: rec,
            fld: "label",
            size: "45",
            unique: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            rec: rec,
            fld: "abbrLabel",
            size: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            rec: rec,
            fld: "feedback",
            size: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            rec: rec
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          colSpan: "6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("fieldset", {
            className: "top-level",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("legend", {
              children: "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, undefined), !ctx.options ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              children: "There aren't currently any options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 23
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("thead", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "Type"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "ID"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "Label"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "Abbr. Label"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 33
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 33
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 30
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 26
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
                children: ctx.options.map((opt, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_SimpleCheckListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  ctx: opt,
                  hasPromptID: true,
                  hasFeedback: false,
                  asTable: true
                }, opt.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 34
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 26
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_AddOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
              index: rec._ctx.lastIndex + 1,
              phase: rec.phase,
              subPhase: rec.subPhase,
              childType: childType,
              parentID: rec.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined)]
    }, void 0, true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "item-with-options",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      rec: rec
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("b", {
        children: rec.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        rec: rec,
        fld: "id",
        label: "ID"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        rec: rec,
        fld: "label",
        label: "Label",
        unique: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        rec: rec,
        fld: "abbrLabel",
        label: "Abbr. Label"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rec: rec
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("fieldset", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("legend", {
        children: "Options"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, undefined), !!ctx.options ? ctx.options.map((opt, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_SimpleCheckListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ctx: opt,
        hasPromptID: true
      }, opt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        children: "There currently aren't any options"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_AddOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
        index: rec._ctx.lastIndex + 1,
        phase: rec.phase,
        subPhase: rec.subPhase,
        childType: childType,
        parentID: rec.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, undefined);
}; // index = { ctx.options[ctx.options.length - 1].index }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckListItemWithOptions);

/***/ }),

/***/ 8307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/DeleteButton.js";



const DeleteButton = ({
  rec
}) => {
  const {
    deleteRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_0__.useCheckList)();

  const clickHandler = event => {
    event.preventDefault();

    if (window.confirm(`Are you sure you wish to delete ${rec.label} (and all of it's children?`)) {
      deleteRec(rec);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
    type: "button",
    className: "delete-btn",
    onClick: clickHandler,
    children: "X"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteButton);

/***/ }),

/***/ 6136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var _AddCheckListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8020);
/* harmony import */ var _ButtonBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1412);
/* harmony import */ var _CheckListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3860);
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8307);
/* harmony import */ var _ReadOnlyField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9378);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8283);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/NestedChecklist.js";











const NestedChecklist = ({
  ctx,
  asTable: _asTable = true
}) => {
  const [rec, setRec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    getRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_1__.useCheckList)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !!ctx && setRec(getRec(ctx));
  }, [ctx, getRec]);

  if (_asTable) {
    if (!rec) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          colSpan: "8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, undefined);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
            rec: rec
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: rec.type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_6__["default"], {
            rec: rec,
            fld: "id",
            size: 18
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
            rec: rec,
            fld: "label",
            size: 45,
            unique: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            rec: rec
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
          colSpan: 7,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("fieldset", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("legend", {
              children: "Checklist items"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 19
            }, undefined), !ctx.items ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              children: "There currently aren't any checklist items."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 21
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("colgroup", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("col", {
                  span: 1,
                  style: {
                    width: "5%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("col", {
                  span: 1,
                  style: {
                    width: "10%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("col", {
                  span: 1,
                  style: {
                    width: "20%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("col", {
                  span: 1,
                  style: {
                    width: "20%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("col", {
                  span: 1,
                  style: {
                    width: "20%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("col", {
                  span: 1,
                  style: {
                    width: "5%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("col", {
                  span: 1,
                  style: {
                    width: "20%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("col", {
                  span: 1,
                  style: {
                    width: "5%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 25
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("thead", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "Type"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "ID"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "Label"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "Abbr. Label"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "Graded"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    children: "Feedback"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 27
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
                children: ctx.items.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_CheckListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  ctx: item,
                  index: i,
                  asTable: true
                }, item.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 27
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 23
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_AddCheckListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
              index: ctx.lastIndex + 1,
              phase: rec.phase,
              subPhase: rec.subPhase,
              parentID: rec.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined)]
    }, void 0, true);
  } else {
    if (!rec) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "nested-checklist",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ButtonBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        rec: rec
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("b", {
          children: rec.type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          rec: rec,
          fld: "id",
          label: "ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          rec: rec,
          fld: "label",
          label: "label",
          unique: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          rec: rec
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("fieldset", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("legend", {
          children: "Checklist items"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, undefined), ctx.items ? ctx.items.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_CheckListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          ctx: item,
          index: i
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          children: "There currently aren't any checklist items"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 23
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_AddCheckListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          index: ctx.lastIndex + 1,
          phase: rec.phase,
          subPhase: rec.subPhase,
          parentID: rec.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, undefined);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NestedChecklist);

/***/ }),

/***/ 670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7267);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6643);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var _AddCheckListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8020);
/* harmony import */ var _AddSubPhase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4378);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6378);
/* harmony import */ var _ButtonBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1412);
/* harmony import */ var _CheckListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3860);
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8307);
/* harmony import */ var _ReadOnlyField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9378);
/* harmony import */ var _SaveChecklistButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1647);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8283);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8286);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/Phase.js";

 // import classnames from "classnames"















const Phase = props => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)();
  const {
    phaseIdx
  } = params;
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useLocation)();
  const {
    hier,
    getRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_1__.useCheckList)();
  const [ctx, setCtx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [rec, setRec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    phaseIdx !== undefined && !!hier && setCtx(hier[phaseIdx]);
  }, [phaseIdx, hier, getRec]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !!ctx && setRec(getRec(ctx));
  }, [ctx, getRec]);

  const getSubPhaseHeading = (ctx, i) => {
    const sp = getRec(ctx);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
          rec: sp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
          to: `${location.pathname}/subphase/${i}`,
          children: "edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_8__["default"], {
          rec: sp,
          fld: "id",
          size: "40"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
          rec: sp,
          fld: "label",
          size: "80",
          unique: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          rec: sp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)]
    }, void 0, true);
  };

  const renderChildren = rec => {
    if (rec._ctx.subPhases) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("fieldset", {
        className: "top-level",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("legend", {
          children: "Sub-Sections"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("table", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("colgroup", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "40%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "45%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 42
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {
                children: "ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 51
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {
                children: "Label"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 62
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 76
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("tbody", {
            children: rec._ctx.subPhases.map((sp, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("tr", {
              children: getSubPhaseHeading(sp, i)
            }, sp.id, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_AddSubPhase__WEBPACK_IMPORTED_MODULE_3__["default"], {
          index: rec._ctx.lastIndex + 1,
          phase: rec._ctx.id,
          parentID: rec._ctx.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined);
    } else if (rec._ctx.items) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("fieldset", {
        className: "top-level",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("legend", {
          children: "Checklist Items"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("table", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("colgroup", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "10%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "15%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "20%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "20%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "20%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {
                children: "Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {
                children: "ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {
                children: "Label"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {
                children: "Abbr. Label"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {
                children: "Graded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {
                children: "Feedback"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("tbody", {
            children: rec._ctx.items.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_CheckListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
              ctx: item,
              asTable: true
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_AddCheckListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          index: rec._ctx.lastIndex + 1,
          phase: rec._ctx.id,
          parentID: rec._ctx.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("fieldset", {
        className: "top-level",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
          children: ["A section can have ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("i", {
            children: "either"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 44
          }, undefined), " Checklist Items ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("i", {
            children: "or"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 74
          }, undefined), " sub-sections, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("b", {
            children: "not both"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 98
          }, undefined), ". Decide which you'd like to add."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_AddCheckListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          index: rec._ctx.lastIndex + 1,
          phase: rec._ctx.id,
          parentID: rec._ctx.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_AddSubPhase__WEBPACK_IMPORTED_MODULE_3__["default"], {
          index: rec._ctx.lastIndex + 1,
          phase: rec._ctx.id,
          parentID: rec._ctx.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, undefined);
    }
  };

  if (!rec) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      crumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_11__.getChecklistBC)(params), (0,_urls__WEBPACK_IMPORTED_MODULE_11__.getPhaseBC)(params, rec.label)]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_SaveChecklistButton__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("b", {
      children: "Section"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "15%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "85%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
            style: {
              fontWeight: "bold",
              paddingRight: "10px",
              textAlign: "right"
            },
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_8__["default"], {
              rec: rec,
              fld: "id"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
            style: {
              fontWeight: "bold",
              paddingRight: "10px",
              textAlign: "right"
            },
            children: "Label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
              rec: rec,
              fld: "label",
              unique: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, undefined), renderChildren(rec), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_SaveChecklistButton__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Phase);

/***/ }),

/***/ 3197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7267);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6643);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5124);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2459);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6378);
/* harmony import */ var _ButtonBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1412);
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8307);
/* harmony import */ var _ReadOnlyField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9378);
/* harmony import */ var _SaveChecklistButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1647);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8283);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8286);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/PhaseList.js";














const INITIAL_STATE = {
  newID: "",
  newLabel: ""
};

const PhaseList = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useParams)();
  const {
    scenarioType
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_3__.useScenarioType)();
  const {
    getRec,
    uniqueIDs,
    uniqueLabels,
    insertRec,
    hier
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_2__.useCheckList)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(INITIAL_STATE);
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const changeHandler = event => {
    const {
      id,
      value
    } = event.target;
    setState(prevState => Object.assign({}, prevState, {
      [id]: value
    }));
  };

  const addPhase = event => {
    event.preventDefault();

    if ("" === state.newID) {
      setErrMsg("Please enter an ID");
    } else if ("" === state.newLabel) {
      setErrMsg("Please enter a label");
    } else if (uniqueIDs.includes(state.newID)) {
      setErrMsg("id is not unique");
    } else if (uniqueLabels.includes(state.newLabel)) {
      setErrMsg("label is not unique");
    } else {
      setErrMsg("");
      const newRec = {
        id: state.newID,
        type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.PHASE,
        label: state.newLabel
      };
      const index = hier[hier.length - 1].lastIndex + 1; // console.log("i will add at", index, newRec)

      insertRec(newRec, index);
      setState(INITIAL_STATE);
    }
  };

  const getPhaseHeading = (ctx, i) => {
    const rec = getRec(ctx);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
          rec: rec
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {
          to: `/scenario-type/${scenarioType.id}/checklist/phase/${i}`,
          children: "edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_7__["default"], {
          rec: rec,
          fld: "id",
          size: "40"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
          rec: rec,
          fld: "label",
          size: "80",
          unique: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          rec: rec
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)]
    }, void 0, true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      crumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_10__.getChecklistBC)(params)]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_SaveChecklistButton__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "5%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "5%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "40%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "45%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "5%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {
            children: "Label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tbody", {
        children: hier.map((ctx, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("tr", {
          children: getPhaseHeading(ctx, i)
        }, ctx.id, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      children: ["Add new Section: \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("b", {
        children: "ID: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("input", {
        type: "text",
        id: "newID",
        value: state.newID,
        autoComplete: "off",
        onChange: changeHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 29
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("b", {
        children: " Label: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("input", {
        type: "text",
        id: "newLabel",
        value: state.newLabel,
        autoComplete: "off",
        onChange: changeHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 33
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
        type: "button",
        className: "add-btn",
        onClick: addPhase,
        children: " + "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "" === errMsg && "hidden",
      children: errMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_SaveChecklistButton__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhaseList);

/***/ }),

/***/ 9378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/ReadOnlyField.js";


const ReadOnlyField = ({
  rec,
  fld,
  label: _label = null,
  size: _size = 20
}) => {
  if (!_label) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      value: rec[fld],
      size: _size,
      readOnly: true,
      disabled: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
    children: [" ", _label, ":", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      value: rec[fld],
      size: _size,
      readOnly: true,
      disabled: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadOnlyField);

/***/ }),

/***/ 1647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/SaveChecklistButton.js";
 // import { useScenarioType } from "../ScenarioTypeContext"



const SaveChecklistButton = () => {
  const {
    showModal
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_0__.useCheckList)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "save-button-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      className: "save-btn",
      type: "button",
      onClick: () => showModal(),
      children: "Save Changes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveChecklistButton);

/***/ }),

/***/ 3310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleCheckListItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var _ButtonBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1412);
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8307);
/* harmony import */ var _ReadOnlyField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9378);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8283);
/* harmony import */ var _CheckBoxField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(587);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/SimpleCheckListItem.js";








function SimpleCheckListItem({
  ctx,
  hasAbbrLabel = true,
  hasFeedback = true,
  hasGraded = true,
  hasPromptID = false,
  asTable = false
}) {
  const [rec, setRec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    getRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_1__.useCheckList)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !!ctx && setRec(getRec(ctx));
  }, [ctx, getRec]);

  if (!rec && asTable) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        colSpan: "7",
        children: "loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, this);
  } else if (!rec) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, this);
  }

  if (asTable) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ButtonBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
          rec: rec
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: rec.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_4__["default"], {
          rec: rec,
          fld: "id",
          size: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          rec: rec,
          fld: "label",
          size: "45",
          unique: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: hasAbbrLabel && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          rec: rec,
          fld: "abbrLabel",
          size: "20"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 38
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: [hasGraded && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CheckBoxField__WEBPACK_IMPORTED_MODULE_6__["default"], {
          rec: rec,
          fld: "graded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 35
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: hasFeedback && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          rec: rec,
          fld: "feedback",
          size: "20"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 37
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          rec: rec
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ButtonBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      rec: rec
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
        children: rec.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rec: rec,
        fld: "id",
        label: "ID",
        size: "30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
        rec: rec,
        fld: "label",
        label: "Label",
        size: "50",
        unique: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this), hasAbbrLabel && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
        rec: rec,
        fld: "abbrLabel",
        size: "30",
        label: "Abbr. Label"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 34
      }, this), hasFeedback && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
        rec: rec,
        fld: "feedback",
        size: "30",
        label: "Feedback"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        rec: rec
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 6235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7267);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var _AddCheckListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8020);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6378);
/* harmony import */ var _CheckListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3860);
/* harmony import */ var _ReadOnlyField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9378);
/* harmony import */ var _SaveChecklistButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1647);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8283);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8286);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/SubPhase.js";

 // import classnames from "classnames"











const SubPhase = props => {
  const params = (0,react_router__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const {
    phaseIdx,
    subPhaseIdx
  } = params;
  const {
    hier,
    getRec
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_1__.useCheckList)();
  const [phase, setPhase] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [ctx, setCtx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [rec, setRec] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const _phaseCtx = hier[phaseIdx];
    setPhase(getRec(_phaseCtx));
    const _ctx = hier[phaseIdx].subPhases[subPhaseIdx];
    setCtx(_ctx);
  }, [getRec, phaseIdx, subPhaseIdx, hier]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !!ctx && setRec(getRec(ctx));
  }, [ctx, getRec]);

  if (!rec) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "sub-phase",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      crumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_8__.getChecklistBC)(params), (0,_urls__WEBPACK_IMPORTED_MODULE_8__.getPhaseBC)(params, phase.label), (0,_urls__WEBPACK_IMPORTED_MODULE_8__.getSubPhaseBC)(params, rec.label)]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_SaveChecklistButton__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("b", {
        children: "SubSection"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("colgroup", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
            span: "1",
            style: {
              width: "15%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
            span: "1",
            style: {
              width: "85%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
              style: {
                fontWeight: "bold",
                paddingRight: "10px",
                textAlign: "right"
              },
              children: "ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ReadOnlyField__WEBPACK_IMPORTED_MODULE_5__["default"], {
                rec: rec,
                fld: "id"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
              style: {
                fontWeight: "bold",
                paddingRight: "10px",
                textAlign: "right"
              },
              children: "Label"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
                rec: rec,
                fld: "label",
                unique: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("fieldset", {
        className: "top-level",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("legend", {
          children: "CheckList Items"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined), !ctx.items ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          children: "No checklist items yet."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 27
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("table", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("colgroup", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "10%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "15%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "20%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "20%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "20%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("col", {
              span: "1",
              style: {
                width: "5%"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Label"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Abbr Label"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Graded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Feedback"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tbody", {
            children: ctx.items.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_CheckListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
              ctx: item,
              index: i,
              asTable: true
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 37
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 27
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_AddCheckListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          index: rec._ctx.lastIndex + 1,
          phase: rec.phase,
          subPhase: rec._ctx.id,
          parentID: rec._ctx.id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_SaveChecklistButton__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubPhase);

/***/ }),

/***/ 8283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5124);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/CheckListEditor/TextInput.js";






const TextInput = ({
  rec,
  fld,
  label: _label = null,
  unique: _unique = false,
  size: _size = 20
}) => {
  const {
    uniqueLabels,
    setLabelsUpdated,
    updateRec,
    genID
  } = (0,_CheckListContext__WEBPACK_IMPORTED_MODULE_2__.useCheckList)(); // data,

  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const changeHandler = event => {
    setError(null);
  }; // const labelIsUnique = (id, value) => {
  //     if (!uniqueLabels.includes(value)) {
  //         return true
  //     }
  //     // label is still considered unique if it's owned by 'this' (id)
  //     const found = data.find(e => e.label === value)
  //     return (!!found && found.id === id) ? true : false
  // }


  const blurHandler = event => {
    const {
      id,
      name,
      defaultValue,
      value
    } = event.target; // defaultValue is original field value (I think)

    if (defaultValue !== value) {
      console.log(`id: ${id} name: ${name} defaultValue ${defaultValue} value: ${value}`);
      console.log(uniqueLabels);
      console.log(`includes ${value}? ${uniqueLabels.includes(value)}`);

      if (_unique && "label" === fld && uniqueLabels.includes(value)) {
        setError("label is not unique");
      } else {
        setError(null);
        const newRec = Object.assign({}, rec, {
          [fld]: value
        });
        console.log(newRec);
        updateRec(newRec);
        setLabelsUpdated(true);
      }
    }
  };

  const renderInput = rec => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "text",
        id: genID(rec, fld),
        name: fld,
        size: _size,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
          "has-error": !!error
        }),
        defaultValue: rec[fld],
        onChange: changeHandler,
        onBlur: blurHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined), !!error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 28
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "error-message",
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 34
        }, undefined)]
      }, void 0, true)]
    }, void 0, true);
  }; // if (!label) {
  //     return renderInput(rec)
  // }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [!!_label && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
      children: [" ", _label, ": "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }, undefined), renderInput(rec)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

/***/ }),

/***/ 2571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/Checkbox.js";


const Checkbox = ({
  entity,
  fld
}) => {
  const defaultChangeHandler = event => {
    const {
      checked
    } = event.target;

    if (fld.changeHandler) {
      fld.changeHandler(entity.id, fld.name, checked);
    } else {
      console.log("defaultChangeHandler", fld.name, checked);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    type: "checkbox",
    checked: entity[fld.name],
    onChange: defaultChangeHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ 3856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/ComputedField.js";


const ComputedField = ({
  entity,
  fld
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    children: fld.valueGetter(entity)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComputedField);

/***/ }),

/***/ 3553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5350);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/ComputedSelect.js";




const ComputedSelect = ({
  entity,
  fld
}) => {
  const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tmp = fld.valueGetter(entity, fld);

    if (tmp) {
      setPrompt(tmp);
    }
  }, [entity, fld]);

  if (!prompt) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      children: "No distinguishing prompts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    entity: entity,
    fld: Object.assign({}, fld, {
      options: prompt.answers.map(a => [a.id, a.abbrLabel])
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComputedSelect);

/***/ }),

/***/ 1432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/DeleteButton.js";


const DeleteButton = ({
  item,
  onDelete
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    className: "delete-btn",
    onClick: () => onDelete(item),
    children: "X"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteButton);

/***/ }),

/***/ 6755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6951);
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5350);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2571);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5646);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/DetailsEditor.js";






const DetailsEditor = ({
  heading,
  entity,
  fields
}) => {
  const getWidget = (entity, fld) => {
    switch (fld.widget) {
      case "text":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_0__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, undefined);

      case "select":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_1__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }, undefined);

      case "checkbox":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, undefined);

      case "textArea":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TextArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }, undefined);

      default:
        return entity[fld.name];
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "details-editor",
    children: [!!heading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 27
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "15%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "85%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
        children: fields.map(fld => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
            style: {
              fontWeight: "bold",
              paddingRight: "10px",
              textAlign: "right"
            },
            children: fld.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
            children: getWidget(entity, fld)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, undefined)]
        }, fld.name, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsEditor);

/***/ }),

/***/ 5350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/DropDown.js";


const DropDown = ({
  entity,
  fld
}) => {
  const defaultChangeHandler = event => {
    const newVal = event.target.value; // console.log(entity.id)

    if (!!fld.changeHandler) {
      fld.changeHandler(entity.id, fld.name, newVal);
    } else {
      console.log("defaultChangeHandler", fld.name, newVal);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    value: entity[fld.name],
    onChange: defaultChangeHandler,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), fld.options.map(([val, lab]) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: val,
      children: lab
    }, val, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDown);

/***/ }),

/***/ 8989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/IndentedText.js";


const IndentedText = ({
  rec,
  fld,
  indentAttr
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    style: {
      paddingLeft: `${rec[indentAttr] * 20}px`
    },
    children: rec[fld.name]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndentedText);

/***/ }),

/***/ 4952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6643);
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1432);
/* harmony import */ var _IndentedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8989);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2571);
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5350);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5646);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6951);
/* harmony import */ var _ItemButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6994);
/* harmony import */ var _ComputedField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3856);
/* harmony import */ var _ComputedSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3553);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InlineEditor.js";













const noop = i => console.log("noop", i);

const InlineEditor = ({
  heading,
  records: _records = [],
  fields: _fields = [{
    name: "id",
    label: "ID",
    colWidthPct: 46,
    widget: null
  }, {
    name: "label",
    label: "Label",
    colWidthPct: 54,
    widget: null
  }],
  keyField: _keyField = true,
  allowChangeOrder: _allowChangeOrder = true,
  onMoveUp: _onMoveUp = noop,
  onMoveDown: _onMoveDown = noop,
  allowChangeIndent: _allowChangeIndent = false,
  changeIndentAttr: _changeIndentAttr = null,
  onMoveLeft: _onMoveLeft = noop,
  onMoveRight: _onMoveRight = noop,
  editLink: _editLink = true,
  editBaseURL,
  allowDelete: _allowDelete = true,
  onDelete: _onDelete = noop,
  children
}) => {
  const [columns, setColumns] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const getWidget = (entity, fld) => {
    switch (fld.widget) {
      case "smallText":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
          style: {
            fontSize: "smaller"
          },
          children: entity[fld.name]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }, undefined);

      case "text":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
          entity: entity,
          fld: fld,
          indentAttr: _changeIndentAttr
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined);

      case "indentedText":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_IndentedText__WEBPACK_IMPORTED_MODULE_2__["default"], {
          rec: entity,
          fld: fld,
          indentAttr: _changeIndentAttr
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined);

      case "select":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_4__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined);

      case "computedField":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ComputedField__WEBPACK_IMPORTED_MODULE_8__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined);

      case "textArea":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_TextArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined);

      case "checkbox":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined);

      case "computedSelect":
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ComputedSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
          entity: entity,
          fld: fld
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined);

      default:
        return entity[fld.name];
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setColumns(null);
  }, [heading]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!columns) {
      let changeCol = 0;
      let editCol = 0;
      let deleteCol = 0;

      if (_allowChangeOrder) {
        changeCol = 3;

        if (_allowChangeIndent) {
          changeCol = 6;
        }
      }

      if (_editLink) {
        editCol = 4;
      }

      if (_allowDelete) {
        deleteCol = 1;
      }

      const dfltFldsPct = changeCol + editCol + deleteCol;
      const remainingPct = 100 - dfltFldsPct; // console.log(`changeCol: ${changeCol}, editCol: ${editCol} deleteCol: ${deleteCol} remainingPct: ${remainingPct}`)

      const numFlds = _fields.length;

      const fieldsWithWidths = _fields.filter(f => undefined !== f.colWidthPct).map(f => f.colWidthPct);

      const numFldsWithWidths = fieldsWithWidths.length;
      let desiredWidth = 0;

      if (numFldsWithWidths > 0) {
        desiredWidth = fieldsWithWidths.reduce((prevVal, currVal) => prevVal + currVal, 0);
      } // console.log(`numFlds: ${numFlds} numFldsWithWidths: ${numFldsWithWidths} desiredWidth: ${desiredWidth}`)


      const cols = [];

      if (changeCol > 0) {
        cols.push({
          label: "",
          width: `${changeCol}%`
        });
      }

      if (editCol > 0) {
        cols.push({
          label: "",
          width: `${editCol}%`
        });
      }

      let dfltColWidthPct = 0;

      if (numFldsWithWidths < numFlds) {
        const numMissingWidths = numFlds - numFldsWithWidths;
        const remUnnormalizedWidth = 100 - desiredWidth;
        dfltColWidthPct = remUnnormalizedWidth / numMissingWidths;
      }

      _fields.forEach(fld => {
        // console.log(fld)
        let {
          label,
          colWidthPct
        } = fld;

        if (colWidthPct === undefined) {
          colWidthPct = dfltColWidthPct;
        }

        const normWidth = 0.01 * remainingPct * colWidthPct;
        cols.push({
          label,
          width: `${normWidth}%`
        });
      });

      if (deleteCol > 0) {
        cols.push({
          label: "",
          width: `${deleteCol}%`
        });
      } // console.log(cols)


      setColumns(cols);
    }
  }, [columns, _allowChangeOrder, _allowChangeIndent, _editLink, _allowDelete, _fields]);

  if (!columns) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "inline-editor",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("fieldset", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("legend", {
        children: heading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined), _records.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
        children: ["There currently aren't any ", heading.toLowerCase()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 25
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("colgroup", {
          children: columns.map((c, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("col", {
            span: "1",
            style: {
              width: c.width
            }
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 37
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 29
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("tr", {
            children: columns.map((c, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("th", {
              children: [" ", c.label, " "]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 41
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 29
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("tbody", {
          children: _records.map((rec, i, arr) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("tr", {
            children: [_allowChangeOrder && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("td", {
              style: {
                borderBottom: "1px solid black"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ItemButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
                n: i,
                of: arr.length - 1,
                depth: rec[_changeIndentAttr] ? rec[_changeIndentAttr] : 1,
                allowChangeIndent: _allowChangeIndent,
                onMoveUp: _onMoveUp,
                onMoveDown: _onMoveDown,
                onMoveLeft: _onMoveLeft,
                onMoveRight: _onMoveRight
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 49
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 45
            }, undefined), _editLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("td", {
              style: {
                borderBottom: "1px solid black"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.NavLink, {
                to: `${editBaseURL}/${rec.id}`,
                children: "edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 49
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 45
            }, undefined), _fields.map(fld => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("td", {
              style: {
                borderBottom: "1px solid black"
              },
              children: getWidget(rec, fld)
            }, fld.name, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 45
            }, undefined)), _allowDelete && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("td", {
              style: {
                borderBottom: "1px solid black"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_DeleteButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
                item: rec,
                onDelete: _onDelete
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 49
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 45
            }, undefined)]
          }, _keyField ? rec.id : i, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 37
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 25
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineEditor);

/***/ }),

/***/ 6533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InputWithErrorMessage.js";



const InputWithErrorMessage = ({
  value,
  errMsg: _errMsg = "",
  onChange,
  size: _size = 40
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      size: _size,
      autoComplete: "off",
      value: value,
      onChange: onChange,
      style: {
        backgroundColor: "" === _errMsg ? "white" : "pink"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      style: {
        color: "red"
      },
      children: [" ", _errMsg, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputWithErrorMessage);

/***/ }),

/***/ 6160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2459);
/* harmony import */ var _InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _InlineEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4952);
/* harmony import */ var _AddEntity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1681);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8286);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/DistPromptsList.js";
 // import classNames from "classnames"











const DistPromptsList = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const {
    url
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useRouteMatch)();
  const {
    scenarioType,
    intvPrompts,
    intvPromptAnswers,
    uniqueIDs,
    uniqueLabels
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioType)();
  const [distPrompts, setDistPrompts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const addDistPrompt = (entityType, newID, newLabel) => {
    intvPrompts.add((0,_types__WEBPACK_IMPORTED_MODULE_6__.genDistinguishingPromptRec)(newID, newLabel));
  };

  const deleteHandler = item => {
    const myAnswers = scenarioType.interventionPromptAnswers.filter(e => e.promptID === item.id);
    let msg = `Are you sure you wish to delete the prompt ${item.label} and all of of it's children?\n`;

    if (myAnswers.length > 0) {
      msg += `\nAnswers:\n`;
      msg += myAnswers.map(e => e.label).join('\n');
    }

    if (window.confirm(msg)) {
      myAnswers.forEach(e => intvPromptAnswers.remove(e.id));
      intvPrompts.remove(item.id);
    } else {
      alert("deletion aborted");
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setDistPrompts(scenarioType.interventionPrompts.filter(e => e.type === _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.DIST_PROMPT));
  }, [scenarioType.interventionPrompts]);

  if (!distPrompts) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    breadcrumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_7__.getDistPromptsBC)(params)],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_InlineEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: "Distiguishing Prompts",
      records: distPrompts,
      fields: [{
        name: "id",
        label: "ID",
        colWidthPct: 48,
        widget: null
      }, {
        name: "label",
        label: "Label",
        colWidthPct: 52,
        widget: null
      }],
      allowChangeOrder: false,
      editLink: true,
      editBaseURL: url,
      onDelete: deleteHandler,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_AddEntity__WEBPACK_IMPORTED_MODULE_5__["default"], {
        entitiesDesc: [{
          type: "distinguishingPrompt",
          name: "Distinguishing Prompt",
          labelsUnique: true
        }],
        addHandler: addDistPrompt,
        uniqueIDs: uniqueIDs,
        uniqueLabels: uniqueLabels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DistPromptsList);

/***/ }),

/***/ 4407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2459);
/* harmony import */ var _InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _DetailsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6755);
/* harmony import */ var _InlineEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4952);
/* harmony import */ var _AddEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1681);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8286);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/EditDistPrompt.js";













const EditDistPrompt = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    distPromptID
  } = params;
  const {
    scenarioType,
    intvPrompts,
    intvPromptAnswers,
    uniqueIDs,
    uniqueLabels
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioType)();
  const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [promptUpdated, setPromptUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [promptAnswers, setPromptAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [promptAnswersUpdated, setPromptAnswersUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const updatePromptField = (entityID, fldName, newVal) => {
    setPrompt(prevState => Object.assign({}, prevState, {
      [fldName]: newVal
    }));
    setPromptUpdated(true);
  };

  const updateAnswerField = (entityID, fldName, newVal) => {
    const rec = Object.assign({}, promptAnswers.find(e => e.id === entityID), {
      [fldName]: newVal
    });
    intvPromptAnswers.update(rec);
    setPromptAnswersUpdated(true);
  };

  const addAnswer = (entityType, newID, newLabel) => {
    const newRec = (0,_types__WEBPACK_IMPORTED_MODULE_7__.genInterventionPromptAnswerRec)(newID, newLabel, prompt.id);
    intvPromptAnswers.add(newRec);
    updatePromptField(prompt.id, "answers", prompt.answers.concat(newRec.id));
    setPromptAnswersUpdated(true);
  };

  const deleteAnswer = item => {
    updatePromptField(prompt.id, "answers", prompt.answers.filter(e => e !== item.id));
    intvPromptAnswers.remove(item.id);
    setPromptAnswersUpdated(true);
  };

  const moveAnswerUp = i => {
    updatePromptField(prompt.id, "answers", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.swapUp)(prompt.answers, i));
    setPromptAnswersUpdated(true);
  };

  const moveAnswerDown = i => {
    updatePromptField(prompt.id, "answers", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.swapDown)(prompt.answers, i));
    setPromptAnswersUpdated(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!!distPromptID) {
      const found = scenarioType.interventionPrompts.find(e => e.id === distPromptID);

      if (!!found) {
        setPrompt(found);
        setPromptAnswersUpdated(true);
      } else {
        alert(`prompt lookup for ${distPromptID} failed`);
      }
    }
  }, [scenarioType.interventionPrompts, distPromptID]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (promptAnswersUpdated) {
      // triggered on initial load, add/remove answers and re-ordering of answers
      let tmp = []; // get answers associated with promptID

      const matches = scenarioType.interventionPromptAnswers.filter(e => e.promptID === prompt.id); // sort the matching answers in the order of the ids with <prompt>.answers

      prompt.answers.forEach(ansID => {
        // need to deal with race condition prompt.answers still has ansID of deleted answer
        const match = matches.find(e => e.id === ansID);

        if (!!match) {
          tmp.push(match);
        }
      });
      setPromptAnswers(tmp);
      setPromptAnswersUpdated(false);
    }
  }, [prompt, promptAnswersUpdated, scenarioType.interventionPromptAnswers]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // persist local state changes to scenarioType state
    // we set promptUpdated to true when we make local changes
    if (promptUpdated) {
      intvPrompts.update(prompt);
      setPromptUpdated(false);
    }
  }, [promptUpdated, prompt, intvPrompts]);

  if (!prompt) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    breadcrumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_8__.getDistPromptsBC)(params), (0,_urls__WEBPACK_IMPORTED_MODULE_8__.getDistPromptBC)(params, prompt.label)],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_DetailsEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      entity: prompt,
      fields: [{
        name: "id",
        label: "ID",
        widget: null
      }, {
        name: "label",
        label: "Label",
        widget: "text",
        size: 80,
        changeHandler: updatePromptField
      }, {
        name: "abbrLabel",
        label: "Abbr. Label",
        widget: "text",
        size: 80,
        changeHandler: updatePromptField
      }, {
        name: "selectionType",
        label: "Selection Type",
        widget: "select",
        options: [[_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.ONE, "One"], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM, "One-or-more"], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.NONE, "None"]],
        changeHandler: updatePromptField
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_InlineEditor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      heading: "Answers",
      records: promptAnswers,
      fields: [{
        name: "id",
        label: "ID",
        colWidthPct: 40,
        widget: null
      }, {
        name: "label",
        label: "Label",
        colWidthPct: 37,
        widget: "text",
        size: 55,
        changeHandler: updateAnswerField
      }, {
        name: "abbrLabel",
        label: "Abbr. Label",
        colWidthPct: 23,
        widget: "text",
        size: 34,
        changeHandler: updateAnswerField
      }],
      allowChangeOrder: true,
      allowChangeIndent: false,
      onMoveUp: moveAnswerUp,
      onMoveDown: moveAnswerDown,
      editLink: false,
      onDelete: deleteAnswer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_AddEntity__WEBPACK_IMPORTED_MODULE_6__["default"], {
        entitiesDesc: [{
          type: "interventionPromptAnswer",
          name: "Answer",
          labelUnique: true
        }],
        addHandler: addAnswer,
        uniqueIDs: uniqueIDs,
        uniqueLabels: uniqueLabels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditDistPrompt);

/***/ }),

/***/ 4995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2459);
/* harmony import */ var _InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _DetailsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6755);
/* harmony import */ var _InlineEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4952);
/* harmony import */ var _AddEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _AssociateEntity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4288);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1681);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8286);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/EditIntervention.js";














const sortRelatedRecsByForeignKeyFldOrder = (relatedRecs, sortedForeignKeyValues) => {
  const tmp = [];
  sortedForeignKeyValues.forEach(id => {
    const found = relatedRecs.find(rec => rec.id === id);

    if (!!found) {
      tmp.push(found);
    } else {
      console.log(`sortRelatedRecsByForeignKeyFldOrder() id ${id} not found`);
      console.log(relatedRecs, sortedForeignKeyValues);
    }
  });
  return tmp;
};

const EditIntervention = () => {
  const {
    scenarioType,
    intvs,
    intvPrompts,
    intvPromptAnswers,
    uniqueIDs,
    uniqueLabels
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioType)();
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useParams)();
  const {
    interventionID
  } = params;
  const {
    url
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useRouteMatch)();
  const [intv, setIntv] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [intvUpdated, setIntvUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [myDistPrompts, setMyDistPrompts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [distPromptsUpdated, setDistPromptsUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [myPrompts, setMyPrompts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [promptsUpdated, setPromptsUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const updateIntvField = (entityID, fldName, newVal) => {
    setIntv(prevState => Object.assign({}, prevState, {
      [fldName]: newVal
    }));
    setIntvUpdated(true);
  };

  const moveDistPromptUp = promptIdx => {
    updateIntvField(intv.id, "distPrompts", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.swapUp)(intv.distPrompts, promptIdx));
    setDistPromptsUpdated(true);
  };

  const moveDistPromptDown = promptIdx => {
    updateIntvField(intv.id, "distPrompts", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.swapDown)(intv.distPrompts, promptIdx));
    setDistPromptsUpdated(true);
  };

  const movePromptUp = promptIdx => {
    updateIntvField(intv.id, "prompts", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.swapUp)(intv.prompts, promptIdx));
    setPromptsUpdated(true);
  };

  const movePromptDown = promptIdx => {
    updateIntvField(intv.id, "prompts", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.swapDown)(intv.prompts, promptIdx));
    setPromptsUpdated(true);
  };

  const associateDistPrompt = (entityType, _unused, associatedID) => {
    updateIntvField(intv.id, "distPrompts", intv.distPrompts.concat(associatedID));
    setDistPromptsUpdated(true);
  };

  const disassociateDistPrompt = item => {
    updateIntvField(intv.id, "distPrompts", intv.distPrompts.filter(id => id !== item.id));
    setDistPromptsUpdated(true);
  };

  const addPrompt = (entityType, newID, newLabel) => {
    intvPrompts.add((0,_types__WEBPACK_IMPORTED_MODULE_8__.genInterventionPromptRec)(newID, newLabel, intv.id));
    updateIntvField(intv.id, "prompts", intv.prompts.concat(newID));
    setPromptsUpdated(true);
  };

  const deletePrompt = item => {
    const myAnswers = scenarioType.interventionPromptAnswers.filter(e => e.promptID === item.id);
    let msg = `Are you sure you wish to delete the prompt "${item.label}" and it's children?`;

    if (myAnswers.length > 0) {
      msg += "\nAnswers\n";
      msg += myAnswers.map(e => e.label).join("\n");
    }

    if (window.confirm(msg)) {
      myAnswers.forEach(e => intvPromptAnswers.remove(e.id));
      intvPrompts.remove(item.id);
      updateIntvField(intv.id, "prompts", intv.prompts.filter(id => id !== item.id));
      setPromptsUpdated(true);
    } else {
      console.log("deletion aborted");
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!!interventionID && !intv) {
      const found = scenarioType.interventions.find(e => e.id === interventionID);

      if (!!found) {
        setIntv(found); // I *think* we only want to setIntvUpdated on actual updates, not the initial load
        // setIntvUpdated(true)

        if (!intv) {
          // set both to true to trigger loading of associated records
          setDistPromptsUpdated(true);
          setPromptsUpdated(true);
        }
      } else {
        alert(`intervention ${interventionID} lookup failed!`);
      }
    }
  }, [interventionID, intv, scenarioType.interventions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (distPromptsUpdated) {
      const matches = scenarioType.interventionPrompts.filter(e => intv.distPrompts.includes(e.id));
      setMyDistPrompts(sortRelatedRecsByForeignKeyFldOrder(matches, intv.distPrompts));
      setDistPromptsUpdated(false);
    }

    if (promptsUpdated) {
      let matches = scenarioType.interventionPrompts.filter(e => e.interventionID === intv.id);
      setMyPrompts(sortRelatedRecsByForeignKeyFldOrder(matches, intv.prompts));
      setPromptsUpdated(false);
    }
  }, [intv, distPromptsUpdated, promptsUpdated, scenarioType.interventionPrompts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!!intv && intvUpdated) {
      intvs.update(intv);
      setIntvUpdated(false);
    }
  }, [intv, intvs, intvUpdated]);

  if (!intv) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    breadcrumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_9__.getIntvsBC)(params), (0,_urls__WEBPACK_IMPORTED_MODULE_9__.getIntvBC)(params, intv.label)],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_DetailsEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      heading: "Intervention",
      entity: intv,
      fields: [{
        name: "id",
        label: "ID",
        widget: null
      }, {
        name: "label",
        label: "Label",
        widget: "text",
        changeHandler: updateIntvField,
        unique: true,
        uniqueValues: uniqueLabels,
        records: scenarioType.interventions
      }, {
        name: "abbrLabel",
        label: "Abbr. Label",
        widget: "text",
        changeHandler: updateIntvField
      }, {
        name: "system",
        label: "System",
        widget: "select",
        options: [[_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SYSTEMS.AW, "Airway"], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SYSTEMS.BR, "Breathing"], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SYSTEMS.BL, "Bleeding"], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SYSTEMS.SH, "Shock"], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SYSTEMS.OTH, "Other"]],
        changeHandler: updateIntvField
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_InlineEditor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      heading: "Distinguishing Prompts",
      records: myDistPrompts,
      fields: [{
        name: "id",
        label: "ID",
        colWidthPct: 40,
        widget: "smallText"
      }, {
        name: "label",
        label: "Label",
        colWidthPct: 60,
        widget: null
      }],
      allowChangeOrder: true,
      allowChangeIndent: false,
      onMoveUp: moveDistPromptUp,
      onMoveDown: moveDistPromptDown,
      editLink: false,
      allowDelete: true,
      onDelete: disassociateDistPrompt,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_AssociateEntity__WEBPACK_IMPORTED_MODULE_7__["default"], {
        entityDesc: {
          type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.DIST_PROMPT,
          name: "Distinguishing Prompt"
        },
        choices: scenarioType.interventionPrompts.filter(e => e.type === _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.DIST_PROMPT),
        addHandler: associateDistPrompt,
        uniqueIDs: uniqueIDs
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_InlineEditor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      heading: "Prompts",
      records: myPrompts,
      fields: [{
        name: "id",
        label: "ID",
        colWidthPct: 40,
        widget: "smallText"
      }, {
        name: "label",
        label: "Label",
        colWidthPct: 60,
        widget: null
      }],
      allowChangeOrder: true,
      allowChangeIndent: false,
      onMoveUp: movePromptUp,
      onMoveDown: movePromptDown,
      editLink: true,
      editBaseURL: `${url}/prompt`,
      allowDelete: true,
      onDelete: deletePrompt,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_AddEntity__WEBPACK_IMPORTED_MODULE_6__["default"], {
        entitiesDesc: [{
          type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.PROMPT,
          name: "Prompt",
          labelsUnique: true
        }],
        addHandler: addPrompt,
        uniqueIDs: uniqueIDs,
        uniqueLabels: uniqueLabels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditIntervention);

/***/ }),

/***/ 6808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2459);
/* harmony import */ var _InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _DetailsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6755);
/* harmony import */ var _InlineEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4952);
/* harmony import */ var _AddEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1681);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8286);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/EditPrompt.js";













const EditPrompt = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    interventionID,
    promptID
  } = params;
  const {
    url
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useRouteMatch)();
  const {
    scenarioType,
    intvPrompts,
    intvPromptAnswers,
    uniqueIDs,
    uniqueLabels
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioType)();
  const [intv, setIntv] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [promptUpdated, setPromptUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [promptAnswers, setPromptAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [promptAnswersUpdated, setPromptAnswersUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const updatePromptField = (entityID, fldName, newVal) => {
    setPrompt(prevState => Object.assign({}, prevState, {
      [fldName]: newVal
    }));
    setPromptUpdated(true);
  };

  const updateAnswerField = (entityID, fldName, newVal) => {
    const answer = Object.assign({}, promptAnswers.find(a => a.id === entityID));
    answer[fldName] = newVal;
    intvPromptAnswers.update(answer);
    setPromptAnswersUpdated(true);
  };

  const addAnswer = (entityType, newID, newLabel) => {
    intvPromptAnswers.add((0,_types__WEBPACK_IMPORTED_MODULE_7__.genInterventionPromptAnswerRec)(newID, newLabel, prompt.id));
    updatePromptField(prompt.id, "answers", prompt.answers.concat(newID));
    setPromptAnswersUpdated(true);
  };

  const deleteAnswer = item => {
    updatePromptField(prompt.id, "answers", prompt.answers.filter(e => e !== item.id));
    intvPromptAnswers.remove(item.id);
    setPromptAnswersUpdated(true);
  };

  const moveAnswerUp = i => {
    updatePromptField(prompt.id, "answers", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.swapUp)(prompt.answers, i));
    setPromptAnswersUpdated(true);
  };

  const moveAnswerDown = i => {
    updatePromptField(prompt.id, "answers", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.swapDown)(prompt.answers, i));
    setPromptAnswersUpdated(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!!interventionID && !!promptID) {
      const foundIntv = scenarioType.interventions.find(e => e.id === interventionID);

      if (foundIntv) {
        setIntv(foundIntv);
        const foundPrompt = scenarioType.interventionPrompts.find(e => e.id === promptID);

        if (foundPrompt) {
          setPrompt(foundPrompt); // trigger the initial loading of prompt answers

          setPromptAnswersUpdated(true);
        } else {
          alert(`prompt lookup for ${promptID} failed`);
        }
      } else {
        alert(`intervention lookup for ${interventionID} failed`);
      }
    }
  }, [interventionID, promptID, scenarioType.interventions, scenarioType.interventionPrompts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (promptAnswersUpdated) {
      // triggered on initial load, add/remove answers and re-ordering of answers
      // console.log("recalculating ")
      let tmp = []; // get answers associated with promptID
      // console.log(prompt.answers)

      const matches = scenarioType.interventionPromptAnswers.filter(e => e.promptID === prompt.id); // console.log(matches)
      // sort the matching answers in the order of the ids with <prompt>.answers

      prompt.answers.forEach(ansID => {
        // need to deal with race condition prompt.answers still has ansID of deleted answer
        const match = matches.find(e => e.id === ansID);

        if (match) {
          tmp.push(match);
        }
      }); // console.log(tmp)

      setPromptAnswers(tmp);
      setPromptAnswersUpdated(false);
    }
  }, [prompt, promptAnswersUpdated, scenarioType.interventionPromptAnswers]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // persist local state changes to scenarioType state
    // we set promptUpdated to true when we make local changes
    if (promptUpdated) {
      intvPrompts.update(prompt);
      setPromptUpdated(false);
    }
  }, [promptUpdated, prompt, intvPrompts]);

  if (!prompt) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    breadcrumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_8__.getIntvsBC)(params), (0,_urls__WEBPACK_IMPORTED_MODULE_8__.getIntvBC)(params, intv.label), (0,_urls__WEBPACK_IMPORTED_MODULE_8__.getPromptBC)(params, prompt.label)],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_DetailsEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      entity: prompt,
      fields: [{
        name: "id",
        label: "ID",
        widget: null
      }, {
        name: "label",
        label: "Label",
        widget: "text",
        size: 80,
        changeHandler: updatePromptField
      }, {
        name: "abbrLabel",
        label: "Abbr. Label",
        widget: "text",
        size: 80,
        changeHandler: updatePromptField
      }, {
        name: "feedback",
        label: "Feedback",
        widget: "text",
        size: 80,
        changeHandler: updatePromptField
      }, {
        name: "selectionType",
        label: "Selection Type",
        widget: "select",
        options: [[_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.ONE, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPE_LABELS[_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.ONE]], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPE_LABELS[_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM]], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM_AND, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPE_LABELS[_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM_AND]], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM_OR, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPE_LABELS[_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.OOM_OR]], [_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.NONE, _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPE_LABELS[_meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.SELECTION_TYPES.NONE]]],
        changeHandler: updatePromptField
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_InlineEditor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      heading: "Answers",
      records: promptAnswers,
      fields: [{
        name: "id",
        label: "ID",
        colWidthPct: 40,
        widget: null
      }, {
        name: "label",
        label: "Label",
        colWidthPct: 37,
        widget: "text",
        size: 60,
        changeHandler: updateAnswerField
      }, {
        name: "abbrLabel",
        label: "Abbr. Label",
        colWidthPct: 23,
        widget: "text",
        size: 34,
        changeHandler: updateAnswerField
      }],
      allowChangeOrder: true,
      onMoveUp: moveAnswerUp,
      onMoveDown: moveAnswerDown,
      editLink: false,
      editBaseURL: url,
      onDelete: deleteAnswer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_AddEntity__WEBPACK_IMPORTED_MODULE_6__["default"], {
        entitiesDesc: [{
          type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.ANSWER,
          name: "Answer",
          labelUnique: true
        }],
        addHandler: addAnswer,
        uniqueIDs: uniqueIDs,
        uniqueLabels: uniqueLabels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditPrompt);

/***/ }),

/***/ 1492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6378);
/* harmony import */ var _SaveInterventionsButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6282);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/InterventionEditorLayout.js";





const InterventionsEditorLayout = ({
  breadcrumbs: _breadcrumbs = [],
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"], {
      crumbs: _breadcrumbs
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SaveInterventionsButton__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SaveInterventionsButton__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsEditorLayout);

/***/ }),

/***/ 1685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2459);
/* harmony import */ var _InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _AddEntity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _InlineEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4952);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1681);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8286);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);

const _excluded = ["items"];
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/InterventionsList.js";










const InterventionsList = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const {
    url
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useRouteMatch)();
  const {
    scenarioType,
    intvs,
    intvPrompts,
    intvPromptAnswers,
    intvMenuItems,
    intvMenuCategories,
    uniqueIDs,
    uniqueLabels
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioType)();
  const [sortedIntvs, setSortedIntvs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const addHandler = (entityType, newID, newLabel) => {
    intvs.add((0,_types__WEBPACK_IMPORTED_MODULE_6__.genInterventionRec)(newID, newLabel));
  };

  const deleteHandler = item => {
    const myPrompts = scenarioType.interventionPrompts.filter(e => e.interventionID === item.id);
    const myPromptIDs = myPrompts.map(e => e.id);
    const myAnswers = scenarioType.interventionPromptAnswers.filter(e => myPromptIDs.includes(e.promptID));
    const myMenuItems = scenarioType.interventionMenuItems.filter(e => e.interventionID === item.id);
    const myMenuItemIDs = myMenuItems.map(mi => mi.id);
    const myMenuCats = Array.from(new Set(myMenuItems.map(mi => scenarioType.interventionMenuCategories.find(e => e.id === mi.intvCategoryID))));
    let msg = `Are you sure you wish to delete the intervention "${item.label}" and all of it's children?`;

    if (myPrompts.length > 0) {
      msg += "\nPrompts:\n";
      msg += myPrompts.map(e => `\t${e.label}`).join("\n");
      msg += "\nAnswers:\n";
      msg += myAnswers.map(e => `\t${e.label}`).join("\n");
    }

    if (myMenuItems.length > 0) {
      msg += "\nIntervention menu items:\n";
      myMenuCats.forEach(cat => {
        msg += `\t${cat.label}:\n`;
        cat.items.forEach(itemID => {
          myMenuItems.forEach(mi => {
            if (mi.id === itemID) {
              msg += `\t\t${mi.id}\n`;
            }
          });
        });
      });
    }

    if (window.confirm(msg)) {
      myAnswers.forEach(e => intvPromptAnswers.remove(e.id));
      myPrompts.forEach(e => intvPrompts.remove(e.id));
      myMenuItems.forEach(e => intvMenuItems.remove(e.id));
      myMenuCats.forEach(cat => {
        const {
          items
        } = cat,
              newCat = (0,_Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cat, _excluded);

        const newCatItems = items.filter(itemID => !myMenuItemIDs.includes(itemID));
        newCat.items = newCatItems;
        intvMenuCategories.update(newCat);
      });
      intvs.remove(item.id);
    } else {
      alert("deletion aborted");
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setSortedIntvs(intvs.getSorted());
  }, [scenarioType.interventions, intvs]);

  if (!sortedIntvs) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      children: "sorting interventions"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    breadcrumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_7__.getIntvsBC)(params)],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_InlineEditor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      heading: "Interventions",
      records: sortedIntvs,
      fields: [{
        name: "id",
        label: "ID",
        colWidthPct: 44,
        widget: "smallText"
      }, {
        name: "label",
        label: "Label",
        colWidthPct: 48,
        widget: null
      }, {
        name: "system",
        label: "System",
        colWidthPct: 8,
        widget: "smallText"
      }],
      allowChangeOrder: false,
      editLink: true,
      editBaseURL: url,
      onDelete: deleteHandler,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_AddEntity__WEBPACK_IMPORTED_MODULE_4__["default"], {
        entitiesDesc: [{
          type: "intervention",
          name: "Intervention",
          labelsUnique: true
        }],
        addHandler: addHandler,
        uniqueIDs: uniqueIDs,
        uniqueLabels: uniqueLabels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsList);

/***/ }),

/***/ 3192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7267);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2459);
/* harmony import */ var _InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _AddEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _InlineEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4952);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1681);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8286);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/InterventionsMenu.js";










const InterventionsMenu = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const {
    url
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useRouteMatch)();
  const {
    scenarioType,
    intvMenuCategories,
    intvMenuItems,
    uniqueIDs,
    uniqueLabels
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_0__.useScenarioType)();

  const addIntvMenuCategory = (entityType, newID, newLabel) => intvMenuCategories.add((0,_types__WEBPACK_IMPORTED_MODULE_4__.genInterventionMenuCategoryRec)(newID, newLabel));

  const moveCatUp = idx => intvMenuCategories.reorder((0,_utils__WEBPACK_IMPORTED_MODULE_6__.swapUp)(scenarioType.interventionMenuCategories, idx));

  const moveCatDown = idx => intvMenuCategories.reorder((0,_utils__WEBPACK_IMPORTED_MODULE_6__.swapDown)(scenarioType.interventionMenuCategories, idx));

  const onDeleteCategory = item => {
    console.log(`onDelete(${JSON.stringify(item)})`);
    const myMenuItems = scenarioType.interventionMenuItems.filter(e => e.intvCategoryID === item.id);
    let msg = `Are you sure you wish to delete menu category ${item.label} and it's children?\n`;

    if (myMenuItems.length > 0) {
      msg += '\nMenu Items:\n';
      msg += myMenuItems.map(mi => mi.label).join('\n');
    }

    if (window.confirm(msg)) {
      myMenuItems.forEach(e => intvMenuItems.remove(e.id));
      intvMenuCategories.remove(item.id);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    breadcrumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_5__.getIntvMenusBC)(params)],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_InlineEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      heading: "Intervention Menu Categories",
      records: scenarioType.interventionMenuCategories,
      allowChangeOrder: true,
      onMoveUp: moveCatUp,
      onMoveDown: moveCatDown,
      editLink: true,
      editBaseURL: url,
      onDelete: onDeleteCategory,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_AddEntity__WEBPACK_IMPORTED_MODULE_2__["default"], {
        entitiesDesc: [{
          type: "interventioMenuCategory",
          name: "Intervention Menu Category",
          labelsUnique: false
        }],
        addHandler: addIntvMenuCategory,
        uniqueIDs: uniqueIDs,
        uniqueLabels: uniqueLabels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsMenu);

/***/ }),

/***/ 9878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5558);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2459);
/* harmony import */ var _InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _DetailsEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6755);
/* harmony import */ var _InlineEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4952);
/* harmony import */ var _AddEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _AssociateEntity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4288);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1681);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8286);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/InterventionsMenuCategory.js";














const InterventionsMenuCategory = () => {
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useParams)();
  const {
    intvMenuCategoryID
  } = params;
  const {
    scenarioType,
    intvs,
    intvMenuCategories,
    intvMenuItems,
    uniqueIDs,
    uniqueLabels
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_2__.useScenarioType)();
  const [cat, setCat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [catUpdated, setCatUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [catItems, setCatItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [catItemsUpdated, setCatItemsUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const updateCatField = (entityID, fld, val) => {
    setCat(prevState => Object.assign({}, prevState, {
      [fld]: val
    }));
    setCatUpdated(true);
  };

  const updateMenuItemField = (entityID, fldName, val) => {
    const itemRec = Object.assign({}, scenarioType.interventionMenuItems.find(e => e.id === entityID));
    itemRec[fldName] = val;
    intvMenuItems.update(itemRec);
  };

  const moveItemUp = idx => {
    updateCatField(cat.id, "items", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.swapUp)(cat.items, idx));
    setCatItemsUpdated(true);
  };

  const moveItemDown = idx => {
    updateCatField(cat.id, "items", (0,_utils__WEBPACK_IMPORTED_MODULE_10__.swapDown)(cat.items, idx));
    setCatItemsUpdated(true);
  };

  const moveItemLeft = idx => {
    const item = Object.assign({}, catItems[idx]);
    item.depth -= 1;
    intvMenuItems.update(item);
    setCatItemsUpdated(true);
  };

  const moveItemRight = idx => {
    const item = Object.assign({}, catItems[idx]);
    item.depth += 1;
    intvMenuItems.update(item);
    setCatItemsUpdated(true);
  };

  const addMenuItem = newMenuItem => {
    intvMenuItems.add(newMenuItem);
    updateCatField(cat.id, "items", cat.items.concat(newMenuItem.id));
    setCatItemsUpdated(true);
  };

  const addInterventionMenuItem = (entityType, newID, interventionID) => {
    addMenuItem((0,_types__WEBPACK_IMPORTED_MODULE_8__.genInterventionMenuItemRec)(newID, getIntvLabel(interventionID), _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_1__.MDB_TYPES.INTERV, cat.id, interventionID));
  };

  const addHeadingMenuItem = (entityType, newID, newLabel) => {
    addMenuItem((0,_types__WEBPACK_IMPORTED_MODULE_8__.genInterventionMenuItemRec)(newID, newLabel, "heading", cat.id));
  };

  const handleDeleteMenuItem = item => {
    intvMenuItems.remove(item.id);
    updateCatField(cat.id, "items", cat.items.filter(id => id !== item.id));
    setCatItemsUpdated(true);
  };

  const getIntvLabel = intvID => {
    const intv = scenarioType.interventions.find(e => e.id === intvID);

    if (!intv) {
      return `intervention "${intvID}" not found`;
    } // return abbrLabel if it's defined and not empty string, else return label


    return !intv.abbrLabel || "" === intv.abbrLabel ? intv.label : intv.abbrLabel;
  };

  const menuIDGenerator = id => id.replace("intv-", "menu-item-");

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (undefined !== intvMenuCategoryID) {
      setCat(scenarioType.interventionMenuCategories.find(e => e.id === intvMenuCategoryID));
      setCatItemsUpdated(true);
    }
  }, [intvMenuCategoryID, scenarioType.interventionMenuCategories]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (catItemsUpdated) {
      const tmp = [];
      const catMenuItems = scenarioType.interventionMenuItems.filter(e => e.intvCategoryID === cat.id);
      cat.items.forEach(intvMenuItemID => {
        const match = catMenuItems.find(e => e.id === intvMenuItemID);

        if (match) {
          tmp.push(match);
        } else {
          console.log(`${cat.label} menu item ${intvMenuItemID} not found`);
        }
      });
      setCatItems(tmp);
      setCatItemsUpdated(false);
    }
  }, [cat, catItemsUpdated, scenarioType.interventionMenuItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (catUpdated) {
      intvMenuCategories.update(cat);
      setCatUpdated(false);
    }
  }, [cat, catUpdated, intvMenuCategories]);

  if (!catItems) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_InterventionEditorLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    breadcrumbs: [(0,_urls__WEBPACK_IMPORTED_MODULE_9__.getIntvMenusBC)(params), (0,_urls__WEBPACK_IMPORTED_MODULE_9__.getIntvMenuCatBC)(params, cat.label)],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_DetailsEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      entity: cat,
      fields: [{
        name: "id",
        label: "ID",
        widget: null
      }, {
        name: "label",
        label: "Label",
        widget: "text",
        changeHandler: updateCatField
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_InlineEditor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      heading: "Menu Items",
      records: catItems,
      fields: [{
        name: "id",
        label: "ID",
        colWidthPct: 35,
        widget: "smallText"
      }, {
        name: "type",
        label: "Type",
        colWidthPct: 10,
        widget: "smallText"
      }, {
        name: "label",
        label: "Label",
        colWidthPct: 55,
        widget: "text",
        changeHandler: updateMenuItemField
      }],
      allowChangeOrder: true,
      onMoveUp: moveItemUp,
      onMoveDown: moveItemDown,
      allowChangeIndent: true,
      changeIndentAttr: "depth",
      onMoveLeft: moveItemLeft,
      onMoveRight: moveItemRight,
      editLink: false,
      onDelete: handleDeleteMenuItem,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_AddEntity__WEBPACK_IMPORTED_MODULE_6__["default"], {
        entitiesDesc: [{
          type: "heading",
          name: "Heading"
        }],
        addHandler: addHeadingMenuItem,
        uniqueIDs: uniqueIDs,
        uniqueLabels: uniqueLabels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_AssociateEntity__WEBPACK_IMPORTED_MODULE_7__["default"], {
        entityDesc: {
          type: "intervention",
          name: "Intervention"
        },
        choices: intvs.getSorted(),
        addHandler: addInterventionMenuItem,
        genIDs: true,
        idGenerator: menuIDGenerator,
        uniqueIDs: uniqueIDs
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsMenuCategory);

/***/ }),

/***/ 6282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2459);
/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6896);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/SaveInterventionsButton.js";




const SaveInterventionsButton = () => {
  const {
    saveInterventions
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_0__.useScenarioType)();

  const saveHandler = async event => {
    event.preventDefault();
    const res = await saveInterventions();

    if (true === res) {
      alert("Interventions save successfully");
    } else {
      alert(res);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_SaveButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    haveChanges: true,
    clickHandler: saveHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveInterventionsButton);

/***/ }),

/***/ 7732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7267);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6643);
/* harmony import */ var _DistPromptsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6160);
/* harmony import */ var _EditDistPrompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4407);
/* harmony import */ var _EditIntervention__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4995);
/* harmony import */ var _EditPrompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6808);
/* harmony import */ var _InterventionsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1685);
/* harmony import */ var _InterventionsMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3192);
/* harmony import */ var _InterventionsMenuCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9878);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8286);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/InterventionsEditor/index.js";











const InterventionsEditor = () => {
  const {
    url
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useRouteMatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "interventions-editor",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("nav", {
      id: "tab-selector",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
        to: `${url}`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Interventions List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
        to: `${url}/distinguishing-prompts`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Distinguishing Prompts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
        to: `${url}/menu`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Interventions Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
        path: _urls__WEBPACK_IMPORTED_MODULE_7__.PATHS.DIST_PROMPT_EDIT,
        component: _EditDistPrompt__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
        path: _urls__WEBPACK_IMPORTED_MODULE_7__.PATHS.DIST_PROMPTS_LIST,
        component: _DistPromptsList__WEBPACK_IMPORTED_MODULE_0__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
        path: _urls__WEBPACK_IMPORTED_MODULE_7__.PATHS.INTV_MENU_CAT_EDIT,
        component: _InterventionsMenuCategory__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
        path: _urls__WEBPACK_IMPORTED_MODULE_7__.PATHS.INTV_MENUS_LIST,
        component: _InterventionsMenu__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
        path: _urls__WEBPACK_IMPORTED_MODULE_7__.PATHS.PROMPT_EDIT,
        component: _EditPrompt__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
        path: _urls__WEBPACK_IMPORTED_MODULE_7__.PATHS.INTV_EDIT,
        component: _EditIntervention__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
        path: _urls__WEBPACK_IMPORTED_MODULE_7__.PATHS.INTVS_LIST,
        component: _InterventionsList__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          children: "click on a tab above"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterventionsEditor);

/***/ }),

/***/ 1681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genActionRec": () => (/* binding */ genActionRec),
/* harmony export */   "genCheckListItemRec": () => (/* binding */ genCheckListItemRec),
/* harmony export */   "genDistinguishingPromptRec": () => (/* binding */ genDistinguishingPromptRec),
/* harmony export */   "genInterventionMenuCategoryRec": () => (/* binding */ genInterventionMenuCategoryRec),
/* harmony export */   "genInterventionMenuItemRec": () => (/* binding */ genInterventionMenuItemRec),
/* harmony export */   "genInterventionPromptAnswerRec": () => (/* binding */ genInterventionPromptAnswerRec),
/* harmony export */   "genInterventionPromptRec": () => (/* binding */ genInterventionPromptRec),
/* harmony export */   "genInterventionRec": () => (/* binding */ genInterventionRec),
/* harmony export */   "genProblemRec": () => (/* binding */ genProblemRec),
/* harmony export */   "genSolutionRec": () => (/* binding */ genSolutionRec)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5558);

const genCheckListItemRec = (id, type, label, phase, subPhase, parentID) => {
  return {
    id,
    type,
    label,
    abbrLabel: "",
    feedback: "",
    phase,
    subPhase,
    parentID
  };
};
const genInterventionRec = (id, label) => {
  return {
    id,
    type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.INTERV,
    label,
    abbrLabel: label,
    distPrompts: [],
    prompts: []
  };
};
const genInterventionPromptRec = (id, label, intvID, type = _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT, selectionType = _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE) => {
  return {
    id,
    type,
    interventionID: intvID,
    label,
    abbrLabel: "",
    feedback: "",
    selectionType,
    answers: []
  };
};
const genDistinguishingPromptRec = (id, label) => {
  return {
    id,
    type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DIST_PROMPT,
    label,
    abbrLabel: "",
    selectionType: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
    answers: []
  };
};
const genInterventionPromptAnswerRec = (id, label, promptID) => {
  return {
    id,
    type: _meddbriefer_scenario_data_constants__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.ANSWER,
    promptID,
    label,
    abbrLabel: ""
  };
};
const genInterventionMenuCategoryRec = (id, label) => {
  return {
    id,
    label,
    items: []
  };
};
const genInterventionMenuItemRec = (id, label, type, intvCategoryID, interventionID = null) => {
  const rec = {
    id,
    label,
    type,
    intvCategoryID,
    depth: 1
  };

  if (!!interventionID) {
    rec.interventionID = interventionID;
  }

  return rec;
};
const genProblemRec = (id, label) => {
  return {
    id,
    label,
    lifeThreat: false,
    assessments: [],
    vitals: [],
    notes: [],
    solutions: []
  };
};
const genSolutionRec = (id, label, problemID) => {
  return {
    id,
    label,
    problemID,
    actions: [],
    protocols: "",
    minimalWhy: ""
  };
};
const genActionRec = (interventionID, solutionID, problemID) => {
  return {
    id: `${solutionID}-action-${interventionID}`,
    interventionID,
    interventionVariant: {},
    solutionID,
    problemID,
    phase: "",
    why: "",
    protocolRelationship: "",
    contributesToSolution: false
  };
};

/***/ }),

/***/ 6994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/ItemButtons.js";



const noop = i => console.log("noop", i);

const ItemButtons = ({
  n,
  of,
  depth: _depth = 1,
  onMoveUp: _onMoveUp = noop,
  onMoveDown: _onMoveDown = noop,
  allowChangeIndent: _allowChangeIndent = false,
  onMoveLeft: _onMoveLeft = noop,
  onMoveRight: _onMoveRight = noop
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      disabled: n === 0,
      onClick: () => _onMoveUp(n),
      className: "swap-btn",
      children: "^"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      disabled: n === of,
      onClick: () => _onMoveDown(n),
      className: "swap-btn",
      children: "v"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), _allowChangeIndent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        disabled: _depth === 1,
        className: "swap-btn",
        onClick: () => _onMoveLeft(n),
        children: "<"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "swap-btn",
        onClick: () => _onMoveRight(n),
        children: ">"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined)]
    }, void 0, true)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemButtons);

/***/ }),

/***/ 4406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contraindications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_contraindications_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1091);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/MedicationsEditor/Contraindications.js";



function Contraindications({
  med
}) {
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const changeView = () => setExpanded(e => !e);

  const update = e => {
    if (e.target.checked) {
      med.contraindications.push(e.target.name);
    } else {
      med.contraindications.splice(med.contraindications.indexOf(e.target.name), 1);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "contraindications",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "dropdown",
      onClick: changeView,
      children: "Contraindications \u2B9F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: `checklist ${!expanded ? "hidden" : ""}`,
      children: _data_contraindications_json__WEBPACK_IMPORTED_MODULE_1__.map((c, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "contraindication",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
            type: "checkbox",
            onChange: update,
            "data-type": "generic",
            "data-index": idx,
            "data-key": "contraindications",
            name: c,
            defaultChecked: med.contraindications.includes(c)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 29
          }, this), c]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, this)
      }, c, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Indications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/MedicationsEditor/Indications.js";


function Indications({
  med
}) {
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const indications = ["Analgesic", "Sedated Intubation ", "Hypotension", "Sedation", "Nausea/vomiting", "Fever", "Neurogenic shock", "Fluid refractory hypotension", "Suspected kidney stone", "Dehydration", "Acidosis", "Crush injury", "Compartment syndrome", "Hyperkalemia"];

  const changeView = () => setExpanded(e => !e);

  const update = e => {
    if (e.target.checked) {
      med.indications.push(e.target.name);
    } else {
      med.indications.splice(med.indications.indexOf(e.target.name), 1);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "indications",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "dropdown",
      onClick: changeView,
      children: "Indications \u2B9F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: `checklist ${!expanded ? "hidden" : ""}`,
      children: indications.map((c, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "indication",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            type: "checkbox",
            onChange: update,
            "data-type": "generic",
            "data-index": idx,
            "data-key": "indications",
            name: c,
            defaultChecked: med.indications.includes(c)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, this), c]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this)
      }, c, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 6402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_expand_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397);
/* harmony import */ var _assets_collapse_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1781);
/* harmony import */ var _Contraindications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4406);
/* harmony import */ var _Indications_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(756);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/MedicationsEditor/Medication.js";








const Medication = ({
  med,
  index,
  medState
}) => {
  var _self$label;

  const [meds, setMeds] = medState;
  const [self, setSelf] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(med);
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mightExpand, setMightExpand] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const updateCheckbox = e => {
    let updated = Object.assign({}, self);
    const item = e.target;
    const type = item.dataset.type;
    const checked = e.target.checked;
    const name = item.name.split('-')[0];

    if (checked) {
      updated[type][name].push(item.value);
    } else {
      updated[type][name].splice(updated[type][name].indexOf(item.value), 1);
    }

    setSelf(updated);
  };

  const updateTextbox = e => {
    let updated = Object.assign({}, self);
    const item = e.target;
    const type = item.dataset.type;

    if (type === "generic") {
      updated[item.name] = item.value;
      setSelf(updated);
    } else {
      updated[type][item.name] = item.value;
    }
  };

  const deleteSelf = () => {
    if (window.confirm("Are you sure you want to delete this medication?")) {
      meds.splice(index, 1);
      setMeds(meds.slice());
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "medication",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "main-area",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        type: "button",
        className: "delete-bttn",
        onClick: deleteSelf,
        children: "\u2715"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
        children: (_self$label = self.label) != null ? _self$label : "New Medication"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "text",
        className: "id",
        id: `${self.id}-id`,
        placeholder: "ID",
        name: "id",
        onChange: updateTextbox,
        "data-type": "generic",
        defaultValue: med.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "text",
        className: "label",
        id: `${self.id}-label`,
        placeholder: "Label",
        name: "label",
        onChange: updateTextbox,
        "data-type": "generic",
        defaultValue: med.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        type: "button",
        className: `expand-bttn ${expanded ? "expanded" : ""}`,
        onClick: () => setExpanded(!expanded),
        onMouseEnter: () => setMightExpand(true),
        onMouseLeave: () => setMightExpand(false),
        children: !expanded && mightExpand || expanded && !mightExpand ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_assets_expand_svg__WEBPACK_IMPORTED_MODULE_1__.ReactComponent, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 81
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_assets_collapse_svg__WEBPACK_IMPORTED_MODULE_2__.ReactComponent, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 97
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: `expanded-area ${expanded ? "expanded" : "collapsed"}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "generic-data",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Contraindications_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          med: med
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Indications_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          med: med
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Initial Dosage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Repeat Dosage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Max/Dosage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Max Total Dosage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Repeat Interval (minutes)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Contraindicated?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          children: "Repeatable?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "adult-data",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "basic-info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Adult:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MedGroup, {
            isAdult: true,
            group: med.adult
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "administration-routes",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Routes:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "IV/IO",
            isadult: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "IM",
            isadult: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "IN",
            isadult: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "PO",
            isadult: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "Inhalation",
            isadult: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "pediatric-data",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "basic-info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Pediatric:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(MedGroup, {
            isAdult: false,
            group: med.pediatric
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "administration-routes",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Routes:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "IV/IO",
            isadult: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "IM",
            isadult: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "IN",
            isadult: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "PO",
            isadult: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Route, {
            route: "Inhalation",
            isadult: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, undefined);

  function Route({
    route,
    isadult
  }) {
    const type = isadult ? "adult" : "pediatric";
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox",
        id: `${self.id}-route-${route}-${type}`,
        onChange: updateCheckbox,
        "data-type": type,
        name: `routes-${type}`,
        value: route,
        defaultChecked: med[type].routes.includes(route)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, this), route]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, this);
  }

  function MedGroup({
    group,
    isAdult
  }) {
    const type = isAdult ? "adult" : "pediatric";
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "text",
        name: "initialDosage",
        id: `${self.id}-initialDosage-${type}`,
        placeholder: "Initial Dosage",
        "data-type": type,
        onChange: updateTextbox,
        defaultValue: group.initialDosage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "text",
        name: "repeatDosage",
        id: `${self.id}-repeatDosage-${type}`,
        placeholder: "Repeat Dosage",
        "data-type": type,
        onChange: updateTextbox,
        defaultValue: group.repeatDosage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "text",
        name: "maxDosage",
        id: `${self.id}-max/Dosage-${type}`,
        placeholder: "Max/Dosage",
        "data-type": type,
        onChange: updateTextbox,
        defaultValue: group.maxDosage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "text",
        name: "maxTotalDosage",
        id: `${self.id}-maxTotalDosage-${type}`,
        placeholder: "Max Total Dosage",
        "data-type": type,
        onChange: updateTextbox,
        defaultValue: group.maxTotalDosage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "number",
        name: "repeatInterval",
        id: `${self.id}-repeatInterval-${type}`,
        placeholder: "Interval (minutes)",
        "data-type": type,
        onChange: updateTextbox,
        defaultValue: group.repeatInterval
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox",
        id: `${self.id}-contraindicated-${type}`,
        name: "contraindicated",
        "data-type": type,
        onChange: updateCheckbox,
        defaultChecked: group.contraindicated
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "checkbox",
        id: `${self.id}-repeatable-${type}`,
        name: "repeatable",
        "data-type": type,
        onChange: updateCheckbox,
        defaultChecked: group.repeatable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Medication);

/***/ }),

/***/ 3049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2459);
/* harmony import */ var _scripts_custom_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5375);
/* harmony import */ var _Medication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6402);
/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2647);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/MedicationsEditor/Medications.js";








const copyObj = obj => JSON.parse(JSON.stringify(obj));

const Medications = () => {
  const {
    scenarioType,
    saveMedications
  } = (0,_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_1__.useScenarioType)();
  const [meds, setMeds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(scenarioType.medications);
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_scripts_custom_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useDebug)(() => console.log(meds));

  const saveHandler = async event => {
    event.preventDefault();
    const result = await saveMedications(sortMeds());

    if (result) {
      console.log("changes saved successfully");
      alert("Changes saved.");
    } else {
      console.log("an error occured while saving");
    }
  };

  const nonGeneralFields = {
    contraindicated: false,
    repeatable: false,
    routes: [],
    initialDosage: "",
    repeatDosage: "",
    maxDosage: "",
    maxTotalDosage: "",
    repeatInterval: ""
  };

  const addMed = () => setMeds([...meds, {
    id: "",
    label: "",
    contraindications: [],
    indications: [],
    adult: copyObj(nonGeneralFields),
    pediatric: copyObj(nonGeneralFields)
  }]);

  const sortMeds = () => {
    let sorted = meds.slice();
    sorted.sort((a, b) => a.id.localeCompare(b.id));
    setMeds(sorted);
    return sorted;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SaveButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        clickHandler: saveHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        type: "button",
        onClick: sortMeds,
        children: "Sort A to Z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "medications-form",
      ref: formRef,
      children: [meds && meds.map((med, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Medication__WEBPACK_IMPORTED_MODULE_3__["default"], {
        med: med,
        index: i,
        medState: [meds, setMeds]
      }, med.id || i, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        type: "button",
        onClick: addMed,
        children: "New Medication"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SaveButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        clickHandler: saveHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Medications);

/***/ }),

/***/ 2647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/MedicationsEditor/SaveButton.js";


const SaveButton = ({
  clickHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    className: "save-btn",
    onClick: clickHandler,
    children: "Save Changes"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveButton);

/***/ }),

/***/ 3301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewScenarioType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/NewScenarioType.js";






const COLLECTION_ID = "scenario-types";
function NewScenarioType() {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if ("" === name) {
      setError("Please enter a name for this class code");
      return;
    }

    const isUnique = await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.verifyDocNameUniqueness)(db, COLLECTION_ID, name, "name", "V2");

    if (!isUnique) {
      setError("Class code must be unique");
      return;
    }

    setError(null);
    const docRef = db.collection(COLLECTION_ID).doc();
    await docRef.set({
      id: docRef.id,
      name: name,
      schemaVersion: "V2",
      checklist: [],
      medications: []
    }); // alert(`created ${name}`)

    history.push(`/scenario-type/${docRef.id}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Create Scenario Type"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
      children: ["Title", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "text",
        value: name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      type: "button",
      onClick: handleSubmit,
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: error ? "" : "hidden",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ 6896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/SaveButton.js";


const SaveButton = ({
  label: _label = "Save Changes",
  haveChanges: _haveChanges = false,
  clickHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "save-button-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "save-btn",
      type: "button",
      disabled: !_haveChanges,
      onClick: clickHandler,
      children: _label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveButton);

/***/ }),

/***/ 3259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenarioType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7267);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6643);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5558);
/* harmony import */ var _meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8913);
/* harmony import */ var _ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2459);
/* harmony import */ var _HeaderContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1468);
/* harmony import */ var _CheckListEditor_CheckList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(527);
/* harmony import */ var _MedicationsEditor_Medications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3049);
/* harmony import */ var _InterventionsEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7732);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8463);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/ScenarioType.js";

 // import classnames from "classnames"











const COLLECTION_ID = "scenario-types";
function ScenarioType(props) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    scenarioTypeID
  } = params;
  const [scenarioType, setScenarioType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [uniqueIDs, setUniqueIDs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [uniqueLabels, setUniqueLabels] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    path
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useRouteMatch)();
  const {
    setTitle
  } = (0,_HeaderContext__WEBPACK_IMPORTED_MODULE_5__.useHeader)(); // wrapper around setScenarioType() to only update a specified fldName/fldVal

  const updateScenTypeFld = (fldName, fldVal) => setScenarioType(prevState => Object.assign({}, prevState, {
    [fldName]: fldVal
  })); // objects containing functions to update/access specific portions of scenarioType state


  const intvs = {
    add: newObj => updateScenTypeFld("interventions", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendObjToArray)(scenarioType.interventions, newObj)),
    update: newObj => updateScenTypeFld("interventions", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.updateObjInArray)(scenarioType.interventions, newObj)),
    remove: id => updateScenTypeFld("interventions", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.removeObjWithIdFromArray)(scenarioType.interventions, id)),
    getSorted: () => {
      const sortByLabel = (a, b) => a.label.localeCompare(b.label);

      let sorted = [];
      const order = [_meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_2__.SYSTEMS.AW, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_2__.SYSTEMS.BR, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_2__.SYSTEMS.BL, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_2__.SYSTEMS.SH, _meddbriefer_scenario_data_constants_js__WEBPACK_IMPORTED_MODULE_2__.SYSTEMS.OTH, undefined];
      order.forEach(sys => {
        sorted = sorted.concat(scenarioType.interventions.filter(e => e.system === sys).sort(sortByLabel));
      });
      return sorted;
    }
  };
  const intvPrompts = {
    add: newObj => updateScenTypeFld("interventionPrompts", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendObjToArray)(scenarioType.interventionPrompts, newObj)),
    update: newObj => updateScenTypeFld("interventionPrompts", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.updateObjInArray)(scenarioType.interventionPrompts, newObj)),
    remove: id => updateScenTypeFld("interventionPrompts", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.removeObjWithIdFromArray)(scenarioType.interventionPrompts, id))
  };
  const intvPromptAnswers = {
    add: newObj => updateScenTypeFld("interventionPromptAnswers", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendObjToArray)(scenarioType.interventionPromptAnswers, newObj)),
    update: newObj => updateScenTypeFld("interventionPromptAnswers", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.updateObjInArray)(scenarioType.interventionPromptAnswers, newObj)),
    remove: id => updateScenTypeFld("interventionPromptAnswers", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.removeObjWithIdFromArray)(scenarioType.interventionPromptAnswers, id))
  };
  const intvMenuCategories = {
    add: newObj => updateScenTypeFld("interventionMenuCategories", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendObjToArray)(scenarioType.interventionMenuCategories, newObj)),
    update: newObj => updateScenTypeFld("interventionMenuCategories", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.updateObjInArray)(scenarioType.interventionMenuCategories, newObj)),
    remove: id => updateScenTypeFld("interventionMenuCategories", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.removeObjWithIdFromArray)(scenarioType.interventionMenuCategories, id)),
    reorder: newArray => updateScenTypeFld("interventionMenuCategories", newArray)
  };
  const intvMenuItems = {
    add: newObj => updateScenTypeFld("interventionMenuItems", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.appendObjToArray)(scenarioType.interventionMenuItems, newObj)),
    update: newObj => updateScenTypeFld("interventionMenuItems", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.updateObjInArray)(scenarioType.interventionMenuItems, newObj)),
    remove: id => updateScenTypeFld("interventionMenuItems", (0,_utils__WEBPACK_IMPORTED_MODULE_9__.removeObjWithIdFromArray)(scenarioType.interventionMenuItems, id))
  };

  const saveCheckList = metaData => {
    // , hierarchy
    // filter out fields with 'undefined' as a value
    const cleanedMD = JSON.parse(JSON.stringify(metaData));
    setScenarioType(prevState => Object.assign({}, prevState, {
      checklist: cleanedMD // phaseData: hierarchy

    }));
    return db.collection(COLLECTION_ID).doc(scenarioTypeID).update({
      checklist: cleanedMD // phaseData: hierarchy

    }).then(() => true).catch(error => {
      alert("an error occured saving scenario-type changes");
      console.log(error);
      return false;
    });
  };

  const saveMedications = data => {
    setScenarioType(prevState => Object.assign({}, prevState, {
      medications: data
    }));
    return db.collection(COLLECTION_ID).doc(scenarioTypeID).update({
      medications: data
    }).then(() => true).catch(error => {
      console.log(error);
      return false;
    });
  };

  const saveInterventions = () => {
    // saves all interventions related state
    return db.collection(COLLECTION_ID).doc(scenarioTypeID).update({
      interventions: scenarioType.interventions,
      interventionPrompts: scenarioType.interventionPrompts,
      interventionPromptAnswers: scenarioType.interventionPromptAnswers,
      interventionMenuCategories: scenarioType.interventionMenuCategories,
      interventionMenuItems: scenarioType.interventionMenuItems
    }).then(() => true).catch(error => {
      console.log(error);
      return false;
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (scenarioTypeID) {
      (0,_meddbriefer_scenario_data_index_js__WEBPACK_IMPORTED_MODULE_3__.getScenarioTypeByID)(db, scenarioTypeID).then(data => {
        setScenarioType(data);
        setTitle(`Scenario Type: ${data.name}`);
      });
    }
  }, [db, scenarioTypeID, setTitle]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (scenarioType) {
      // all objects must have uniqueIDs
      let ids = scenarioType.interventions.map(e => e.id);
      ids = ids.concat(scenarioType.interventionPrompts.map(e => e.id));
      ids = ids.concat(scenarioType.interventionPromptAnswers.map(e => e.id));
      ids = ids.concat(scenarioType.interventionMenuCategories.map(e => e.id));
      ids = ids.concat(scenarioType.interventionMenuItems.map(e => e.id));
      ids = ids.concat(scenarioType.medications.map(e => e.id));
      ids = ids.concat(scenarioType.checklist.map(e => e.id)); // console.log(ids)

      setUniqueIDs(ids); // only interventions and checklist items require unique labels (searchable label -> id)

      let labels = scenarioType.interventions.map(e => e.label);
      labels = labels.concat(scenarioType.checklist.map(e => e.label)); // console.log(labels)

      setUniqueLabels(labels);
    }
  }, [scenarioType]);

  if (!scenarioType) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 16
    }, this);
  } else {
    window.scenarioType = scenarioType;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "scenario-type-editor",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("nav", {
      id: "tab-selector",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.NavLink, {
        to: `/scenario-type/${scenarioTypeID}/checklist`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Checklist"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.NavLink, {
        to: `/scenario-type/${scenarioTypeID}/medications`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Medications"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.NavLink, {
        to: `/scenario-type/${scenarioTypeID}/interventions`,
        className: "tab-button",
        activeClassName: "active-tab",
        children: "Interventions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ScenarioTypeContext__WEBPACK_IMPORTED_MODULE_4__.ScenarioTypeContext.Provider, {
      value: {
        scenarioType,
        uniqueIDs,
        uniqueLabels,
        intvs,
        intvPrompts,
        intvPromptAnswers,
        intvMenuCategories,
        intvMenuItems,
        saveCheckList,
        saveMedications,
        saveInterventions
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: `${path}/checklist`,
          component: _CheckListEditor_CheckList__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: `${path}/medications`,
          component: _MedicationsEditor_Medications__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          path: `${path}/interventions`,
          component: _InterventionsEditor__WEBPACK_IMPORTED_MODULE_8__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
          exact: true,
          path: path,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            children: "Click on one of the tabs above to make changes."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 2459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScenarioTypeContext": () => (/* binding */ ScenarioTypeContext),
/* harmony export */   "useScenarioType": () => (/* binding */ useScenarioType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ScenarioTypeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  scenarioType: undefined,
  uniqueIDs: undefined,
  uniqueLabels: undefined,
  intvs: {
    add: undefined,
    update: undefined,
    remove: undefined,
    getSorted: undefined
  },
  intvPrompts: {
    add: undefined,
    update: undefined,
    remove: undefined
  },
  intvPromptAnswers: {
    add: undefined,
    update: undefined,
    remove: undefined
  },
  intvMenuCategories: {
    add: undefined,
    update: undefined,
    remove: undefined,
    reorder: undefined
  },
  intvMenuItems: {
    add: undefined,
    update: undefined,
    remove: undefined
  },
  saveCheckList: undefined,
  saveMedications: undefined,
  saveInterventions: undefined
});
const useScenarioType = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScenarioTypeContext);

/***/ }),

/***/ 6542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenarioTypeList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6643);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9526);
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8913);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/ScenarioTypeList.js";





const COLLECTION_ID = "scenario-types";
function ScenarioTypeList(props) {
  const {
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_1__.useFirebase)();
  const [scenarioTypes, setScenarioTypes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      const cursor = await db.collection(COLLECTION_ID).get();
      let scenTypes = [];
      cursor.forEach(doc => {
        const data = doc.data();
        scenTypes.push({
          id: doc.id,
          name: data.name,
          schemaVersion: data.schemaVersion
        });
      });
      setScenarioTypes(scenTypes);
    })();
  }, [db]);

  const handleDelete = async item => {
    let id = item.id;

    if (window.confirm('Are you sure you want to permanently this item? This cannot be undone!')) {
      await (0,_meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_2__.deleteDocument)(db, COLLECTION_ID, id);
      let dup = scenarioTypes.slice();
      dup.splice(dup.indexOf(item), 1);
      setScenarioTypes(dup);
    } else console.log(`Delete of ${item.name} cancelled.`);
  };

  if (!scenarioTypes) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "db-list",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      children: "Scenario Types"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: `/scenario-type`,
      className: "new-bttn db-list-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        children: "New Scenario Type"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), scenarioTypes.map(st => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "db-list-item",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        children: st.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "list-button-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
          to: `/scenario-type/${st.id}`,
          className: "action-bttn",
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          type: "button",
          className: "action-bttn delete-bttn",
          onClick: () => handleDelete(st),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, this)]
    }, st.id, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ 5646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/TextArea.js";


const TextArea = ({
  entity,
  fld
}) => {
  const defaultChangeHandler = event => {
    const {
      value
    } = event.target;

    if (!!fld.changeHandler) {
      fld.changeHandler(entity.id, fld.name, value);
    } else {
      console.log("defaultChangeHandler", fld.name, value);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
    cols: !!fld.cols ? fld.cols : 40,
    rows: !!fld.rows ? fld.rows : 2,
    value: entity[fld.name],
    onChange: defaultChangeHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

/***/ }),

/***/ 6951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/ScenarioTypeEditor/TextInput.js";




const TextInput = ({
  entity,
  fld,
  indentAttr: _indentAttr = null
}) => {
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // console.log(fld)

  const defaultChangeHandler = event => {
    // console.log(entity.id)
    setError(null);
    const newVal = event.target.value;

    if (!!fld.changeHandler) {
      fld.changeHandler(entity.id, fld.name, newVal);
    } else {
      console.log("defaultChangeHandler", fld.name, newVal);
    }
  };

  const defaultBlur = event => {
    if (!!fld.unique && !!fld.uniqueValues && !!fld.records) {
      const {
        value
      } = event.target;

      if (!fld.uniqueValues.includes(value)) {
        return;
      } // if it isn't unique, it's OK if the value
      // is associated THIS entities fld


      const potentialDups = fld.records.filter(e => e[fld.name] === value).filter(e => e.id !== entity.id);

      if (potentialDups.length > 0) {
        setError("value is not unique");
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      type: "text",
      name: fld.name,
      size: !!fld.size ? fld.size : 40,
      value: entity[fld.name],
      onChange: defaultChangeHandler,
      onBlur: defaultBlur,
      style: {
        marginLeft: !_indentAttr ? "0" : `${entity[_indentAttr] * 20}px`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), !!error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "error-message",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, undefined)]
    }, void 0, true)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

/***/ }),

/***/ 8286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PATHS": () => (/* binding */ PATHS),
/* harmony export */   "getCheckListEdit": () => (/* binding */ getCheckListEdit),
/* harmony export */   "getChecklistBC": () => (/* binding */ getChecklistBC),
/* harmony export */   "getDistPromptBC": () => (/* binding */ getDistPromptBC),
/* harmony export */   "getDistPromptEdit": () => (/* binding */ getDistPromptEdit),
/* harmony export */   "getDistPromptsBC": () => (/* binding */ getDistPromptsBC),
/* harmony export */   "getDistPromptsEdit": () => (/* binding */ getDistPromptsEdit),
/* harmony export */   "getIntvBC": () => (/* binding */ getIntvBC),
/* harmony export */   "getIntvEdit": () => (/* binding */ getIntvEdit),
/* harmony export */   "getIntvMenuCatBC": () => (/* binding */ getIntvMenuCatBC),
/* harmony export */   "getIntvMenuCatEdit": () => (/* binding */ getIntvMenuCatEdit),
/* harmony export */   "getIntvMenusBC": () => (/* binding */ getIntvMenusBC),
/* harmony export */   "getIntvMenusEdit": () => (/* binding */ getIntvMenusEdit),
/* harmony export */   "getIntvsBC": () => (/* binding */ getIntvsBC),
/* harmony export */   "getIntvsEdit": () => (/* binding */ getIntvsEdit),
/* harmony export */   "getPhaseBC": () => (/* binding */ getPhaseBC),
/* harmony export */   "getPhaseEdit": () => (/* binding */ getPhaseEdit),
/* harmony export */   "getProblemBC": () => (/* binding */ getProblemBC),
/* harmony export */   "getProblemEdit": () => (/* binding */ getProblemEdit),
/* harmony export */   "getProblemsBC": () => (/* binding */ getProblemsBC),
/* harmony export */   "getProblemsEdit": () => (/* binding */ getProblemsEdit),
/* harmony export */   "getPromptBC": () => (/* binding */ getPromptBC),
/* harmony export */   "getPromptEdit": () => (/* binding */ getPromptEdit),
/* harmony export */   "getSolutionBC": () => (/* binding */ getSolutionBC),
/* harmony export */   "getSolutionEdit": () => (/* binding */ getSolutionEdit),
/* harmony export */   "getSubPhaseBC": () => (/* binding */ getSubPhaseBC),
/* harmony export */   "getSubPhaseEdit": () => (/* binding */ getSubPhaseEdit)
/* harmony export */ });
// p is short for 'params' in an attempt to make paths and urls similar in length
const getCheckListEdit = p => `/scenario-type/${p.scenarioTypeID}/checklist`;
const getPhaseEdit = p => `/scenario-type/${p.scenarioTypeID}/checklist/phase/${p.phaseIdx}`;
const getSubPhaseEdit = p => `/scenario-type/${p.scenarioTypeID}/checklist/phase/${p.phaseIdx}/subphase/${p.subPhaseIdx}`;
const editDistPromptPath = "/scenario-type/:scenarioTypeID/interventions/distinguishing-prompts/:distPromptID";
const getDistPromptEdit = p => `/scenario-type/${p.scenarioTypeID}/interventions/distinguishing-prompts/${p.distPromptID}`;
const editDistPromptsPath = "/scenario-type/:scenarioTypeID/interventions/distinguishing-prompts";
const getDistPromptsEdit = p => `/scenario-type/${p.scenarioTypeID}/interventions/distinguishing-prompts`;
const editIntvMenuCatPath = "/scenario-type/:scenarioTypeID/interventions/menu/:intvMenuCategoryID";
const getIntvMenuCatEdit = p => `/scenario-type/${p.scenarioTypeID}/interventions/menu/${p}`;
const editIntvsMenuPath = "/scenario-type/:scenarioTypeID/interventions/menu";
const getIntvMenusEdit = p => `/scenario-type/${p.scenarioTypeID}/interventions/menu`;
const editPromptPath = "/scenario-type/:scenarioTypeID/interventions/:interventionID/prompt/:promptID";
const getPromptEdit = p => `/scenario-type/${p.scenarioTypeID}/interventions/${p.interventionID}/prompt/${p.promptID}`;
const editIntvPath = "/scenario-type/:scenarioTypeID/interventions/:interventionID";
const getIntvEdit = p => `/scenario-type/${p.scenarioTypeID}/interventions/${p.interventionID}`;
const editIntvsPath = "/scenario-type/:scenarioTypeID/interventions";
const getIntvsEdit = p => `/scenario-type/${p.scenarioTypeID}/interventions`;
const getChecklistBC = p => ({
  href: getCheckListEdit(p),
  label: "Sections"
});
const getPhaseBC = (p, label) => ({
  href: getPhaseEdit(p),
  label
});
const getSubPhaseBC = (p, label) => ({
  href: getSubPhaseEdit(p),
  label
});
const getIntvsBC = p => ({
  href: getIntvsEdit(p),
  label: "Interventions"
});
const getIntvBC = (p, label) => ({
  href: getIntvEdit(p),
  label
});
const getPromptBC = (p, label) => ({
  href: getPromptEdit(p),
  label
});
const getDistPromptsBC = p => ({
  href: getDistPromptsEdit(p),
  label: "Distinguishing Prompts"
});
const getDistPromptBC = (p, label) => ({
  href: getDistPromptEdit(p),
  label
});
const getIntvMenusBC = p => ({
  href: getIntvMenusEdit(p),
  label: "Intervention Menu Categories"
});
const getIntvMenuCatBC = (p, label) => ({
  href: getIntvMenuCatEdit(p),
  label
});
const getProblemsEdit = p => `/scenario/${p.scenarioId}/problems`;
const getProblemEdit = p => `/scenario/${p.scenarioId}/problems/${p.probID}`;
const getSolutionEdit = p => `/scenario/${p.scenarioId}/problems/${p.probID}/solutions/${p.solID}`;
const getProblemsBC = p => ({
  href: getProblemsEdit(p),
  label: "Problems"
});
const getProblemBC = (p, label) => ({
  href: getProblemEdit(p),
  label
});
const getSolutionBC = (p, label) => ({
  href: getSolutionEdit(p),
  label
});
const PATHS = {
  INTVS_LIST: editIntvsPath,
  INTV_EDIT: editIntvPath,
  PROMPT_EDIT: editPromptPath,
  INTV_MENUS_LIST: editIntvsMenuPath,
  INTV_MENU_CAT_EDIT: editIntvMenuCatPath,
  DIST_PROMPTS_LIST: editDistPromptsPath,
  DIST_PROMPT_EDIT: editDistPromptPath
};

/***/ }),

/***/ 8463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendObjToArray": () => (/* binding */ appendObjToArray),
/* harmony export */   "groupByKey": () => (/* binding */ groupByKey),
/* harmony export */   "immutableAddOrUpdateObjectKey": () => (/* binding */ immutableAddOrUpdateObjectKey),
/* harmony export */   "immutableRemoveObjectKey": () => (/* binding */ immutableRemoveObjectKey),
/* harmony export */   "removeObjWithIdFromArray": () => (/* binding */ removeObjWithIdFromArray),
/* harmony export */   "swapDown": () => (/* binding */ swapDown),
/* harmony export */   "swapUp": () => (/* binding */ swapUp),
/* harmony export */   "updateObjInArray": () => (/* binding */ updateObjInArray)
/* harmony export */ });
/* harmony import */ var _Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1461);


function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const immutableAddOrUpdateObjectKey = (prevState, key, value) => {
  return Object.assign({}, prevState, {
    [key]: value
  });
};
const immutableRemoveObjectKey = (prevState, key) => {
  const remainingProperties = (0,_Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState, [key].map(_toPropertyKey));

  return remainingProperties;
};
const appendObjToArray = (array, obj) => array.concat(obj);
const updateObjInArray = (array, obj) => {
  const tmp = [...array];
  const idx = array.findIndex(e => e.id === obj.id);
  tmp[idx] = obj;
  return tmp;
};
const removeObjWithIdFromArray = (array, id) => array.filter(e => e.id !== id); // ({
//     const tmp = [...array]
//     const idx = array.findIndex(e => e.id === id)
//     // ignore unfound IDs
//     if (idx > -1) {
//         tmp.splice(idx, 1)
//     }
//     return tmp
// }

const swapUp = (array, idx) => {
  const tmp = [...array];
  const removed = tmp.splice(idx, 1)[0];
  tmp.splice(idx - 1, 0, removed);
  return tmp;
};
const swapDown = (array, idx) => {
  const tmp = [...array];
  const removed = tmp.splice(idx, 1)[0];
  tmp.splice(idx + 1, 0, removed);
  return tmp;
}; // takes a list of objects and fieldName (key) and returns an object who's attributes are
// the distinct values for that field mapped to a list objects which share that
// value

const groupByKey = (list, key) => list.reduce((hash, obj) => Object.assign({}, hash, {
  [obj[key]]: (hash[obj[key]] || []).concat(obj)
}), {});

/***/ }),

/***/ 592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);



const UnauthedLayout = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: props.children
}, void 0, false);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnauthedLayout);

/***/ }),

/***/ 6591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScenarioTypeEditor_AddButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9707);
/* harmony import */ var _ScenarioTypeEditor_InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6533);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/admins/AddModel.js";





const AddModel = ({
  model,
  addHandler,
  uniqueIDs: _uniqueIDs = [],
  uniqueLabels: _uniqueLabels = [],
  idGenerator: _idGenerator = null
}) => {
  const [labelsUnique, setLabelsUnique] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [entityType, setEntityType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [newID, setNewID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [newIDErrMsg, setNewIDErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newLabel, setNewLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newLabelErrMsg, setNewLabelErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [readyToAdd, setReadyToAdd] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const validateForm = () => {
    if ("" === newID) {
      setNewIDErrMsg("Please enter an ID");
    }

    if ("" === newLabel) {
      setNewLabelErrMsg("Please enter a label");
    }
  };

  const changeID = event => {
    const {
      value
    } = event.target;
    setNewID(value);
    setNewIDErrMsg(!_uniqueIDs.includes(value) ? "" : "Not Unique");
  };

  const changeLabel = event => {
    const {
      value
    } = event.target;
    setNewLabel(value);

    if (!!_idGenerator) {
      setNewID(_idGenerator());
    }

    if (labelsUnique) {
      setNewLabelErrMsg(!_uniqueLabels.includes(value) ? "" : "Not Unique");
    }
  };

  const onAdd = event => {
    validateForm();
    setReadyToAdd(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!entityType || entityType !== model.type) {
      setEntityType(model.type);
      setLabelsUnique(model.labelsUnique);
      setNewLabel("");
      setNewID("");
    }
  }, [model, entityType]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (readyToAdd) {
      // prevent endless loop
      setReadyToAdd(false);

      if (newIDErrMsg !== "" || newLabelErrMsg !== "") {
        alert("Please correct errors before submitting");
      } else {
        //add item
        addHandler(entityType, newID, newLabel); // set fields to default values

        setNewID("");
        setNewIDErrMsg("");
        setNewLabel("");
        setNewLabelErrMsg("");
      }
    }
  }, [readyToAdd, addHandler, entityType, newID, newLabel, newIDErrMsg, newLabelErrMsg]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "add-entity",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("table", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, undefined), !_idGenerator && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 42
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {
            children: "Label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("b", {
              children: ["Add ", model.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, undefined), !_idGenerator && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ScenarioTypeEditor_InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: newID,
              errMsg: newIDErrMsg,
              onChange: changeID
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ScenarioTypeEditor_InputWithErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: newLabel,
              size: "80",
              errMsg: newLabelErrMsg,
              onChange: changeLabel
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ScenarioTypeEditor_AddButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
              addHandler: onAdd
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddModel);

/***/ }),

/***/ 8672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScenarioTypeEditor_AddButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9707);
/* harmony import */ var _SearchEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3196);
/* harmony import */ var _SelectEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5513);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/admins/AssociateModel.js";






const AssociateModel = ({
  model,
  choices: _choices = [],
  search: _search = false,
  addHandler
}) => {
  const [id, setID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [listName, setListName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const onAdd = event => {
    if ("" !== id) {
      addHandler(model.type, "", id);
      setID("");
      setErrMsg("");
    } else {
      setErrMsg(`Please make a selection.`);
    }
  };

  const changeHandler = event => setID(event.target.value);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!listName) {
      setListName(`${model.type}-list`);
    }
  }, [model, listName]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "add-entity",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("table", {
      style: {
        width: "100%"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("b", {
              children: ["Add ", model.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 30
            }, undefined), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
            children: [!!_search ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SearchEntity__WEBPACK_IMPORTED_MODULE_2__["default"], {
              listName: listName,
              currValue: id,
              choices: _choices,
              changeHandler: changeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SelectEntity__WEBPACK_IMPORTED_MODULE_3__["default"], {
              currValue: id,
              choices: _choices,
              changeHandler: changeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "err-msg",
              children: [" ", errMsg, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ScenarioTypeEditor_AddButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
              addHandler: onAdd
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 30
            }, undefined), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssociateModel);

/***/ }),

/***/ 7931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6643);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2838);
/* harmony import */ var _ScenarioTypeEditor_ItemButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6994);
/* harmony import */ var _ScenarioTypeEditor_DeleteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1432);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/admins/InlineModelAdmin.js";







const noop = i => console.log("noop", i);

const InlineModelAdmin = ({
  heading,
  records,
  fields,
  keyField: _keyField = true,
  allowChangeOrder: _allowChangeOrder = false,
  onMoveUp: _onMoveUp = noop,
  onMoveDown: _onMoveDown = noop,
  allowChangeIndent: _allowChangeIndent = false,
  changeIndentAttr: _changeIndentAttr = null,
  onMoveLeft: _onMoveLeft = noop,
  onMoveRight: _onMoveRight = noop,
  editLink: _editLink = true,
  editBaseURL,
  allowDelete: _allowDelete = true,
  onDelete: _onDelete = noop,
  children
}) => {
  const [columns, setColumns] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setColumns(null);
  }, [heading]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!columns) {
      let changeCol = 0;
      let editCol = 0;
      let deleteCol = 0;

      if (_allowChangeOrder) {
        changeCol = 3;

        if (_allowChangeIndent) {
          changeCol = 6;
        }
      }

      if (_editLink) {
        editCol = 4;
      }

      if (_allowDelete) {
        deleteCol = 1;
      }

      const dfltFldsPct = changeCol + editCol + deleteCol;
      const remainingPct = 100 - dfltFldsPct; // console.log(`changeCol: ${changeCol}, editCol: ${editCol} deleteCol: ${deleteCol} remainingPct: ${remainingPct}`)

      const numFlds = fields.length;
      const fieldsWithWidths = fields.filter(f => undefined !== f.colWidthPct).map(f => f.colWidthPct);
      const numFldsWithWidths = fieldsWithWidths.length;
      let desiredWidth = 0;

      if (numFldsWithWidths > 0) {
        desiredWidth = fieldsWithWidths.reduce((prevVal, currVal) => prevVal + currVal, 0);
      } // console.log(`numFlds: ${numFlds} numFldsWithWidths: ${numFldsWithWidths} desiredWidth: ${desiredWidth}`)


      const cols = [];

      if (changeCol > 0) {
        cols.push({
          label: "",
          width: `${changeCol}%`
        });
      }

      if (editCol > 0) {
        cols.push({
          label: "",
          width: `${editCol}%`
        });
      }

      let dfltColWidthPct = 0;

      if (numFldsWithWidths < numFlds) {
        const numMissingWidths = numFlds - numFldsWithWidths;
        const remUnnormalizedWidth = 100 - desiredWidth;
        dfltColWidthPct = remUnnormalizedWidth / numMissingWidths;
      }

      fields.forEach(fld => {
        // console.log(fld)
        let {
          label,
          colWidthPct
        } = fld;

        if (colWidthPct === undefined) {
          colWidthPct = dfltColWidthPct;
        }

        const normWidth = 0.01 * remainingPct * colWidthPct;
        cols.push({
          label,
          width: `${normWidth}%`
        });
      });

      if (deleteCol > 0) {
        cols.push({
          label: "",
          width: `${deleteCol}%`
        });
      } // console.log(cols)


      setColumns(cols);
    }
  }, [columns, _allowChangeOrder, _allowChangeIndent, _editLink, _allowDelete, fields]);

  if (!columns) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "inline-editor",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("fieldset", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("legend", {
        children: heading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, undefined), records.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: ["There currently aren't any ", heading.toLowerCase()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("colgroup", {
          children: columns.map((c, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("col", {
            span: "1",
            style: {
              width: c.width
            }
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 51
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
            children: columns.map((c, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
              children: [" ", c.label, " "]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 56
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
          children: records.map((rec, i, arr) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
            children: [_allowChangeOrder && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              style: {
                borderBottom: "1px solid black"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ScenarioTypeEditor_ItemButtons__WEBPACK_IMPORTED_MODULE_2__["default"], {
                n: i,
                of: arr.length - 1,
                depth: !!rec[_changeIndentAttr] ? rec[_changeIndentAttr] : 1,
                allowChangeIndent: _allowChangeIndent,
                onMoveUp: _onMoveUp,
                onMoveDown: _onMoveDown,
                onMoveLeft: _onMoveLeft,
                onMoveRight: _onMoveRight
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 41
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 37
            }, undefined), _editLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              style: {
                borderBottom: "1px solid black"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                to: `${editBaseURL}/${rec.id}`,
                children: "edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 41
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 38
            }, undefined), fields.map(fld => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              style: {
                borderBottom: "1px solid black"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_widgets__WEBPACK_IMPORTED_MODULE_1__.Field, {
                entity: rec,
                fld: fld
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 41
              }, undefined)
            }, fld.name, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 37
            }, undefined)), _allowDelete && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
              style: {
                borderBottom: "1px solid black"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ScenarioTypeEditor_DeleteButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
                item: rec,
                onDelete: _onDelete
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 41
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 37
            }, undefined)]
          }, !!_keyField ? rec.id : i, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineModelAdmin);

/***/ }),

/***/ 8557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2838);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/admins/ModelAdmin.js";



const ModelAdmin = ({
  heading,
  record,
  fields
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "details-editor",
    children: [!!heading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      children: [heading, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 27
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "15%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("col", {
          span: "1",
          style: {
            width: "85%"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tbody", {
        children: fields.map(fld => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            style: {
              fontWeight: "bold",
              paddingRight: "10px",
              textAlign: "right"
            },
            children: fld.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widgets__WEBPACK_IMPORTED_MODULE_0__.Field, {
              entity: record,
              fld: fld
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 29
          }, undefined)]
        }, fld.name, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelAdmin);

/***/ }),

/***/ 3196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/admins/SearchEntity.js";



const SearchEntity = ({
  listName,
  currValue,
  choices,
  changeHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      list: listName,
      size: "120",
      onChange: changeHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("datalist", {
      id: listName,
      children: choices.map(opt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
        value: opt.id,
        children: opt.label
      }, opt.id, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchEntity);

/***/ }),

/***/ 5513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/admins/SelectEntity.js";


const SelectEntity = ({
  currValue,
  choices,
  changeHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    value: currValue,
    onChange: changeHandler,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, undefined), choices.map(opt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: opt.id,
      children: opt.label
    }, opt.id, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectEntity);

/***/ }),

/***/ 9934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddModel": () => (/* reexport safe */ _AddModel__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "AssociateModel": () => (/* reexport safe */ _AssociateModel__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "InlineModelAdmin": () => (/* reexport safe */ _InlineModelAdmin__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ModelAdmin": () => (/* reexport safe */ _ModelAdmin__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ModelAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8557);
/* harmony import */ var _InlineModelAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7931);
/* harmony import */ var _AddModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6591);
/* harmony import */ var _AssociateModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8672);





/***/ }),

/***/ 5844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/widgets/Checkbox.js";


const Checkbox = ({
  entity,
  name,
  changeHandler
}) => {
  const changeHandlerWrapper = event => {
    const {
      checked
    } = event.target;
    changeHandler(entity.id, name, checked);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    type: "checkbox",
    checked: entity[name],
    onChange: changeHandlerWrapper
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ 3186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/widgets/DropDown.js";


const DropDown = ({
  entity,
  name,
  options: _options = [],
  valueAttr: _valueAttr = "id",
  labelAttr: _labelAttr = "label",
  changeHandler
}) => {
  const changeHandlerWrapper = event => {
    const {
      value
    } = event.target;
    changeHandler(entity.id, name, value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    value: entity[name],
    onChange: changeHandlerWrapper,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), _options.map(opt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: opt[_valueAttr],
      children: opt[_labelAttr]
    }, opt[_valueAttr], false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDown);

/***/ }),

/***/ 888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1461);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);

const _excluded = ["widget"];
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/widgets/Field.js";


const Field = ({
  entity,
  fld
}) => {
  const {
    widget: Component
  } = fld,
        rest = (0,_Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fld, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, Object.assign({
    entity: entity
  }, rest), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);

/***/ }),

/***/ 6292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/widgets/Text.js";





const Text = ({
  entity,
  name,
  valueGetter: _valueGetter = null,
  textSize: _textSize = "medium",
  indentAttr: _indentAttr = null
}) => {
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!value) {
      const val = !!_valueGetter ? _valueGetter(entity, name) : entity[name];

      if (!val) {
        setValue("");
        setError("item no longer exists");
      } else {
        setValue(val);
        setError(null);
      }
    }
  }, [entity, name, value, _valueGetter]);

  if (!value) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      style: {
        fontSize: _textSize,
        paddingLeft: !_indentAttr ? 0 : `${entity[_indentAttr] * 20}px`
      },
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("err-msg", {
        "hidden": !error
      }),
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ 3858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/widgets/TextArea.js";


const TextArea = ({
  entity,
  name,
  cols: _cols = "40",
  rows: _rows = "1",
  changeHandler,
  valueGetter: _valueGetter = null
}) => {
  const changeHandlerWrapper = event => {
    const {
      value
    } = event.target;
    changeHandler(entity.id, name, value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
    cols: _cols,
    rows: _rows,
    value: !!_valueGetter ? _valueGetter(entity, name) : entity[name],
    onChange: changeHandlerWrapper
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

/***/ }),

/***/ 6075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/components/widgets/TextInput.js";


const TextInput = ({
  entity,
  name,
  size: _size = "40",
  changeHandler,
  valueGetter: _valueGetter = null,
  indentAttr: _indentAttr = null
}) => {
  const changeHandlerWrapper = event => {
    const {
      value
    } = event.target;
    changeHandler(entity.id, name, value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    type: "text",
    size: _size,
    value: !!_valueGetter ? _valueGetter(entity, name) : entity[name],
    onChange: changeHandlerWrapper,
    style: {
      paddingLeft: !_indentAttr ? 0 : `${entity[_indentAttr] * 20}px`
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* reexport safe */ _Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "DropDown": () => (/* reexport safe */ _DropDown__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Field": () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Text": () => (/* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "TextArea": () => (/* reexport safe */ _TextArea__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "TextInput": () => (/* reexport safe */ _TextInput__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(888);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5844);
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3186);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6292);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3858);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6075);







/***/ }),

/***/ 3015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.
const environment = {
  production: false,
  firebaseProject: "PamDev" || 0
};

/***/ }),

/***/ 7645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7029);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7295);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/apps/data-entry/src/main.js";




const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 25
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 13
}, undefined));

/***/ }),

/***/ 5375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDebug": () => (/* binding */ useDebug)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const targetIsBody = e => e.target.nodeName === "BODY";
/**
 * Calls the callback function when the _Shift_ and _`_ keys are pressed simultaneously.
 * @param {function} callback Callback function
 */


function useDebug(callback) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.onkeydown = e => {
      if (targetIsBody(e) && e.key === "~") callback();
    };
  }, [callback]);
}

/***/ }),

/***/ 6011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": () => (/* reexport safe */ _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__.AuthContext),
/* harmony export */   "AuthFlow": () => (/* reexport safe */ _lib_components_AuthFlow__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "AuthProvider": () => (/* reexport safe */ _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),
/* harmony export */   "PrivateRoute": () => (/* reexport safe */ _lib_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "StaffRoute": () => (/* reexport safe */ _lib_routes_StaffRoute__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _lib_contexts_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5600);
/* harmony import */ var _lib_components_AuthFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2956);
/* harmony import */ var _lib_routes_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9585);
/* harmony import */ var _lib_routes_StaffRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(609);






/***/ }),

/***/ 2956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5600);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9907);
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5032);
/* harmony import */ var _ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4516);
/* harmony import */ var _EmailVerification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7650);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/AuthFlow.js";








const DEFAULT_HEADING = "You must be logged in to access this page";

const AuthFlow = ({
  heading: _heading = DEFAULT_HEADING
}) => {
  const {
    currAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AuthContext);

  const getCurrComponent = () => {
    switch (currAuthComponent) {
      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.REGISTER:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 24
        }, undefined);

      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.FORGOT_PASSWD:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 24
        }, undefined);

      case _contexts_Auth__WEBPACK_IMPORTED_MODULE_1__.AUTH_FLOW_COMPONENTS.EMAIL_VERIFY:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_EmailVerification__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 24
        }, undefined);

      default:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 24
        }, undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]["text-center"],
      children: _heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), getCurrComponent()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthFlow);

/***/ }),

/***/ 7650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7122);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4292);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5600);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/EmailVerification.js";
 // useCallback, 

 // import cn from "classnames"




const MAX_ATTEMPTS = 3;
const RETRY_INTERVAL = 5000;

const EmailVerification = () => {
  const {
    authMsg,
    currentUser,
    emailVerified,
    setCurrAuthComponent,
    setAuthMsg,
    setEmailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext);

  const resendVerificationEmail = () => {
    if (!currentUser.emailVerified) {
      // console.log("Resending verification email")
      currentUser.sendEmailVerification().then(() => console.log("email verification message sent")) //recheckEmailVerification())
      .catch(error => console.log(error));
    } else {
      console.log("email address already verified");
    }
  };

  const checkForEmailVerification = () => {
    let intervalID;
    let attempt = 0; // check every RETRY_INTERVAL seconds that the email is verified, a max of MAX_ATTEMPTS times

    intervalID = setInterval(() => {
      console.log("checking for email verification attempt:", attempt + 1);
      currentUser.reload().then(() => {
        if (currentUser.emailVerified) {
          console.log("email verification confirmed");
          setEmailVerified(true);
          clearInterval(intervalID);
        }

        if (++attempt === MAX_ATTEMPTS) {
          console.log("email verifiction max attempts exceeded");
          clearInterval(intervalID);
        }
      });
    }, attempt === 0 ? 10 : RETRY_INTERVAL); // console.log("checking if user email is verified")
    // currentUser.reload()
    //     .then(() => {
    //         if (currentUser.emailVerified) {
    //             // setEmailVerified(true)
    //             // setCurrAuthComponent(AUTH_FLOW_COMPONENTS.LOGIN)
    //             // setAuthMsg("")
    //         } else {
    //             recheckEmailVerification()
    //         }
    //     })
  }; // const recheckEmailVerification = useCallback(
  //     () => {
  //         if(!currentUser.emailVerified) {
  //             setTimeout(() => checkVerification(), 10000);
  //         }
  //     },
  //     [currentUser.emailVerified, checkVerification]
  // )
  // useEffect(
  //     () => {
  //         if (currentUser.emailVerified) {
  //         //     setEmailVerified(false)
  //         //     recheckEmailVerification()
  //         // } else {
  //             setEmailVerified(true)
  //             setAuthMsg("")
  //             setCurrAuthComponent(AUTH_FLOW_COMPONENTS.LOGIN)
  //         }
  //     },
  //     [currentUser.emailVerified, setCurrAuthComponent, setAuthMsg, setEmailVerified]
  // )


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (emailVerified) {
      setAuthMsg("");
      setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__.AUTH_FLOW_COMPONENTS.LOGIN);
      window.location.reload();
    }
  }, [emailVerified, setAuthMsg, setCurrAuthComponent]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
        children: authMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: ["After following that link to verify your email address, Click", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: "link",
          size: "sm",
          onClick: checkForEmailVerification,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined), "to continue."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("dl", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("dt", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "text-danger",
            children: "Didn't recieve a verification email? Verification link expired?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("dd", {
          style: {
            marginLeft: "20px"
          },
          children: ["Click", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            size: "sm",
            color: "primary" //   className={cn(as.btn, as["btn-small"], as["btn-primary"])}
            ,
            onClick: resendVerificationEmail,
            children: "Resend Verification Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, undefined), " ", "and then follow the instructions on this page."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailVerification);

/***/ }),

/***/ 4516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5600);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/ForgotPasswordForm.js";






const ForgotPasswordForm = () => {
  const {
    sendOutPasswordReset,
    passwdResetError,
    setLoginError,
    setPasswdResetError,
    setCurrAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext); // const haveError = () => "" !== passwdResetError

  const handleRememberedPasswd = event => {
    event.preventDefault();
    setLoginError("");
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_2__.AUTH_FLOW_COMPONENTS.LOGIN);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const {
      email
    } = event.target.elements;
    setLoginError("");
    sendOutPasswordReset(email.value).then(() => {
      console.log("password reset set");
    }).catch(error => {
      setPasswdResetError(error.message);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
            children: "MedDBriefer Password Reset Form"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 24
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "email",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-sm-1"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-form-label"]),
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["col-sm-11"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              id: "email",
              name: "email",
              type: "email",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["form-control"],
              placeholder: "Enter email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["text-danger"],
            children: passwdResetError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            type: "submit",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["btn-primary"]),
            children: "Send Password Reset Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            type: "button",
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]["btn-link"]),
            onClick: handleRememberedPasswd,
            children: "I remembered my password!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPasswordForm);

/***/ }),

/***/ 9907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5600);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4292);
/* harmony import */ var _icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3391);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/LoginForm.js";









const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    authMsg,
    loginError,
    loginUserWithEmailAndPassword,
    setCurrAuthComponent
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext); // const haveMessage = () => "" !== loginError

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleForgotPassword = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_FLOW_COMPONENTS.FORGOT_PASSWD);
  };

  const handleLogin = event => {
    event.preventDefault();
    const {
      email,
      password
    } = event.target.elements;
    loginUserWithEmailAndPassword(email.value, password.value);
  };

  const handleRegister = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_FLOW_COMPONENTS.REGISTER);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      onSubmit: handleLogin,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "email",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-2"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-form-label"]),
            children: "Email address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-10"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "email",
              name: "email",
              type: "email",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form-control"],
              placeholder: "Enter email",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "password",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-2"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-form-label"]),
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["col-sm-10"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "password",
              name: "password",
              type: passwordVisible ? "text" : "password",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["form-control"],
              placeholder: "Enter password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: passwordVisible,
              stateToggler: togglePasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["text-danger"],
            children: loginError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            children: authMsg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "submit",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-primary"]),
          children: "Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-link"]),
          onClick: handleForgotPassword,
          children: "I forgot my Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]["btn-link"]),
          onClick: handleRegister,
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ 5032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4292);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5600);
/* harmony import */ var _icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3391);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/RegistrationForm.js";









const RegistrationForm = () => {
  const [passwordVisible, setPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  const {
    setCurrAuthComponent,
    registerErrorMsg,
    registerUserWithEmailAndPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_5__.AuthContext);

  const alreadyHaveAccount = event => {
    event.preventDefault();
    setCurrAuthComponent(_contexts_Auth__WEBPACK_IMPORTED_MODULE_5__.AUTH_FLOW_COMPONENTS.LOGIN); // console.log("I already have an account")
  };

  const handleSignUp = event => {
    event.preventDefault();
    const {
      classCode,
      email,
      password
    } = event.target.elements;
    registerUserWithEmailAndPassword(email.value, password.value, classCode.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      onSubmit: handleSignUp,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
            children: "Sign up for MedDBriefer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "classCode",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Class Code"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "classCode",
              name: "classCode",
              type: "text",
              placeholder: "example: demo",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "emailAddress",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"],
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "emailAddress",
              name: "email",
              type: "email",
              placeholder: "example: john.doe@gmail.com",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "password",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              id: "password",
              name: "password",
              type: passwordVisible ? "text" : "password",
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              placeholder: "Enter password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: passwordVisible,
              stateToggler: togglePasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            htmlFor: "confirmPassword",
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-3"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-form-label"]),
            children: "Confirm Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["col-sm-9"], _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["input-group"]),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["form-control"],
              id: "confirmPassword",
              name: "confirmPassword",
              type: confirmPasswordVisible ? "text" : "password",
              placeholder: "Password",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_icons_PasswordVisibilityIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
              visible: confirmPasswordVisible,
              stateToggler: toggleConfirmPasswordVisibility
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            className: _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["text-danger"],
            children: registerErrorMsg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "submit",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["btn-primary"]),
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].btn, _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["btn-link"]),
          onClick: alreadyHaveAccount,
          children: "I already have an account."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationForm);

/***/ }),

/***/ 3391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2779);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4292);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/components/icons/PasswordVisibilityIcon.js";





const PasswordVisibilityIcon = ({
  visible,
  stateToggler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_auth_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]["input-group-text"], "material-icons-outlined"),
    onClick: stateToggler,
    children: visible ? "visibility" : "visibility_off"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordVisibilityIcon);

/***/ }),

/***/ 5600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_FLOW_COMPONENTS": () => (/* binding */ AUTH_FLOW_COMPONENTS),
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext),
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9526);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/contexts/Auth.js";




 // for development purposes, expose db to the dev console
// window.db = db


const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createContext({});
const PASSWORD_RESET_SUCCESS_MSG = "You should soon recieve an email with a password reset link it. " + "After reseting you password, you will be able to sign in."; // const EMAIL_VERIFY_MESSAGE =
//   "A message has been sent to your email address. It contains a link which will " +
//   "verify that you are the owner of that email address"

const ERROR_CODE_UNKNOWN_USER = "auth/user-not-found";
const ERROR_CODE_WRONG_PASSWD = "auth/wrong-password";
const ERROR_CODE_ACCT_ALREADY_EXISTS = "auth/email-already-in-use";
const ERROR_CODE_NETWORK_ERROR = "auth/network-request-failed";
const UNKNOWN_USER_ERROR_MSG = "Sorry, we have no record of a user with your email address";
const WRONG_PASSWD_ERROR_MSG = "Incorrect Password. Try again.";
const ACCT_ALREADY_EXISTS_ERROR_MSG = "An account already exists with that email address";
const NETWORK_ERROR_MSG = "A Network Error has occurred. Try again later.";
const AUTH_FLOW_COMPONENTS = {
  LOGIN: "signin",
  REGISTER: "register",
  FORGOT_PASSWD: "forgot-passwd",
  EMAIL_VERIFY: "email-verify"
};
function AuthProvider({
  children
}) {
  const {
    auth,
    db
  } = (0,_meddbriefer_mdb_firebase__WEBPACK_IMPORTED_MODULE_4__.useFirebase)();
  const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [authMsg, setAuthMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [currAuthComponent, setCurrAuthComponent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(AUTH_FLOW_COMPONENTS.LOGIN);
  const [registerErrorMsg, setRegisterErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [loginError, setLoginError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [passwdResetError, setPasswdResetError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const [isStaff, setIsStaff] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [emailVerified, setEmailVerified] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [userPrefs, setUserPrefs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});

  const userIsStaff = async user => {
    // returns bool regarding whether user is authenticated and whether they have
    // "staff" privileges.
    // if a user has staff privs, a document will exist in the "staff" db collection
    // whose document id represents their uid
    if (!user) {
      return false;
    }

    const docRef = db.collection("staff").doc(user.uid);
    const doc = await docRef.get();
    return doc.exists;
  };

  const signOutUser = () => {
    return auth.signOut().then(() => {
      setUnauthedState();
    }).catch(error => console.log(error));
  };

  const setUnauthedState = () => {
    setIsAuthenticated(false);
    setIsStaff(false);
    setUserName(null);
    setEmailVerified(false);
  };

  const registerUserWithEmailAndPassword = (email, password, classCode) => {
    auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
      // userCredential.user.sendEmailVerification();
      setRegisterErrorMsg("");
      return getUserRecord(userCredential.user.uid);
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_ACCT_ALREADY_EXISTS:
          setRegisterErrorMsg(ACCT_ALREADY_EXISTS_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setRegisterErrorMsg(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setRegisterErrorMsg(error.message);
          break;
      }
    }).then(userRec => {
      updateUserRecord(userRec, "email", email);
      return userRec;
    }).then(userRec => {
      updateUserRecord(userRec, "classCode", classCode);
      return userRec;
    }).then(() => console.log("users document created with email and classcode"));
  };

  const loginUserWithEmailAndPassword = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      setLoginError("");
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_WRONG_PASSWD:
          setLoginError(WRONG_PASSWD_ERROR_MSG);
          break;

        case ERROR_CODE_UNKNOWN_USER:
          setLoginError(UNKNOWN_USER_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setLoginError(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setLoginError(error.message);
          break;
      }
    });
  };

  const sendOutPasswordReset = email => {
    auth.sendPasswordResetEmail(email).then(() => {
      setAuthMsg(PASSWORD_RESET_SUCCESS_MSG);
      setCurrAuthComponent(AUTH_FLOW_COMPONENTS.LOGIN);
    }).catch(error => {
      switch (error.code) {
        case ERROR_CODE_UNKNOWN_USER:
          setPasswdResetError(UNKNOWN_USER_ERROR_MSG);
          break;

        case ERROR_CODE_NETWORK_ERROR:
          setPasswdResetError(NETWORK_ERROR_MSG);
          break;

        default:
          // some error code I have yet to handle
          console.log(error.code);
          setPasswdResetError(error.message);
          break;
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    auth.onAuthStateChanged(user => {
      // handle changes in auth state - does this include emailVerified changes???
      setCurrentUser(user);

      if (user) {
        setIsAuthenticated(true); // set userName to whatever is before the "@" in the user's email address

        setUserName(user.email.substr(0, user.email.indexOf("@"))); // if (!user.emailVerified) {
        //   setAuthMsg(EMAIL_VERIFY_MESSAGE)
        //   setCurrAuthComponent(AUTH_FLOW_COMPONENTS.EMAIL_VERIFY)
        // } else {

        setEmailVerified(true); // }

        userIsStaff(user).then(res => {
          setIsStaff(res);
        }).catch(err => console.error(err));
      } else {
        setUnauthedState();
      }
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [] // only run on first render
  );

  const getUserRecord = uid => db.collection("users").doc(uid);

  const updateUserRecord = async (userDoc, field, value) => {
    await userDoc.set({
      [field]: value
    }, {
      merge: true
    });
  }; // Return current users document


  const getUserDoc = () => db.collection("users").doc(currentUser.uid) || null; // Update or create user data in db


  const saveUserData = (field, data) => {
    return getUserDoc().set({
      [field]: data
    }, {
      merge: true
    });
  };

  const getUserData = async () => {
    let data = await getUserDoc().get();
    return data.data();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(AuthContext.Provider, {
    value: {
      auth,
      currentUser,
      authMsg,
      setAuthMsg,
      registerErrorMsg,
      setRegisterErrorMsg,
      registerUserWithEmailAndPassword,
      loginError,
      setLoginError,
      loginUserWithEmailAndPassword,
      passwdResetError,
      setPasswdResetError,
      sendOutPasswordReset,
      currAuthComponent,
      setCurrAuthComponent,
      signOutUser,
      userName,
      isAuthenticated,
      isStaff,
      emailVerified,
      setEmailVerified,
      userPrefs,
      setUserPrefs,
      saveUserData,
      getUserData
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 218,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 9585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1461);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5600);
/* harmony import */ var _components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2956);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);

const _excluded = ["component", "authFlowLayout"];
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/routes/PrivateRoute.js";


/* eslint-disable no-extra-boolean-cast */






const PrivateRoute = _ref => {
  let {
    component: RouteComponent,
    authFlowLayout: Layout
  } = _ref,
      rest = (0,_Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const {
    emailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);

  if (emailVerified) {
    // user is logged in, proceed normally, wrap as normal route as RouteComponent
    // may be depending on standard props passed to routes
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
      render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(RouteComponent, Object.assign({}, routeProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 33
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined);
  } else if (!!Layout) {
    // return AuthFlow embeded within provided layout
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, rest, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined);
  } else {
    // simply return AuthFlow with out any wrapping layout
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 14
    }, undefined);
  } // if (!unauthedComponent) {
  //   unauthedComponent = (
  //     <>
  //     <AuthFlow />
  //     </>
  //   )
  // }
  // return (
  //   <Route
  //     {...rest}
  //     render={routeProps =>
  //       !!currentUser ? (
  //         <RouteComponent {...routeProps} />
  //       ) : (
  //         unauthedComponent
  //       )
  //     }
  //   />
  // );

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

/***/ }),

/***/ 609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1461);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7267);
/* harmony import */ var _contexts_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5600);
/* harmony import */ var _components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2956);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);

const _excluded = ["component", "authFlowLayout"];
var _jsxFileName = "/Users/user/Projects/monorepo/libs/mdb-auth/src/lib/routes/StaffRoute.js";




 // non-exported component which displays message (modififiable by prop) that the
// user does not have staff privileges



const NotStaff = ({
  msg: _msg = "Staff Privileges are required to access this page."
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: _msg
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

const StaffRoute = _ref => {
  let {
    component: RouteComponent,
    authFlowLayout: Layout
  } = _ref,
      rest = (0,_Users_user_Projects_monorepo_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const {
    isAuthenticated,
    isStaff,
    emailVerified
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_Auth__WEBPACK_IMPORTED_MODULE_3__.AuthContext);

  if (isStaff && emailVerified) {
    // user is logged in and is staff. proceed normally, wrap as normal route as RouteComponent
    // may be depending on standard props passed to routes
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
      render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(RouteComponent, Object.assign({}, routeProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, undefined)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined);
  } else if (isAuthenticated && emailVerified) {
    // display message that the user needs a staff privileges to access this page
    if (Layout) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, routeProps, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NotStaff, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NotStaff, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 20
      }, undefined);
    }
  } else {
    if (Layout) {
      // return AuthFlow embeded within provided layout
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Layout, Object.assign({}, routeProps, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 29
          }, undefined)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined);
    } else {
      // simply return AuthFlow with out any wrapping layout
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, Object.assign({}, rest, {
        render: routeProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_AuthFlow__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaffRoute);

/***/ }),

/***/ 4781:
/***/ ((module) => {

module.exports = [[module.id, ".modal {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  z-index: 1;\n  overflow: auto;\n}\n.modal p {\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.modal ul {\n  list-style: inside;\n}\n.modal.hidden {\n  display: none;\n}\n.modal .modal-dialog {\n  margin: 15% auto; /* 15% from the top and centered */\n  border: 1px solid #888;\n  background-color: white;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n.modal .modal-dialog .modal-header {\n  font-size: larger;\n  background-color: #353535;\n  width: 100%;\n}\n.modal .modal-dialog .modal-header .close-button {\n  float: right;\n  padding: 1px;\n}\n.modal .modal-dialog .modal-header .modal-title {\n  color: white;\n  text-align: center;\n  margin-left: auto;\n  width: 100%;\n}\n.modal .modal-dialog .modal-header .modal-body {\n  padding: 40px;\n}\n.checklist-editor {\n  /*button:disabled {\n      background-color: lightgray;\n      pointer-events: none;\n  }*/\n}\n.checklist-editor hr {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.checklist-editor b {\n  font-weight: bold;\n}\n.checklist-editor a {\n  color: purple;\n}\n.checklist-editor colgroup {\n  width: 100%;\n}\n.checklist-editor fieldset {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 45px;\n}\n.checklist-editor fieldset.top-level {\n  margin-left: 5px;\n}\n.checklist-editor legend {\n  padding-left: 5px;\n}\n.checklist-editor div.changed-ids {\n  margin-top: 20px;\n}\n.checklist-editor table {\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.checklist-editor th {\n  text-align: left;\n  font-weight: bold;\n}\n.checklist-editor label {\n  padding-left: 5px;\n}\n.checklist-editor button {\n  background-color: white;\n}\n.checklist-editor button.swap-btn {\n  font-size: smaller;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 3px;\n  padding-right: 3px;\n  border-radius: 0;\n}\n.checklist-editor button.delete-btn {\n  margin-left: 10px;\n  background-color: red;\n  color: white;\n  border: 1px solid red;\n  font-size: smaller;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 3px;\n  padding-right: 3px;\n  border-radius: 0;\n}\n.checklist-editor button.add-btn {\n  margin-left: 10px;\n  color: white;\n  background-color: green;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 3px;\n  padding-right: 3px;\n  border: 1px solid green;\n  border-radius: 0;\n}\n.checklist-editor button.save-btn {\n  background-color: red;\n  color: white;\n  flex: 1;\n  justify-content: flex-end;\n  flex-grow: 0;\n}\n.checklist-editor .breadcrumbs {\n  border: 1px solid black;\n  padding: 2px;\n  margin-bottom: 20px;\n}\n.checklist-editor .has-error {\n  border: 1 px solid red;\n  background-color: pink;\n}\n.checklist-editor .error-message {\n  color: red;\n}\n.checklist-editor .phase {\n  border: 1px solid black;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.checklist-editor .sub-phase {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.checklist-editor .assessment-with-options {\n  border: 1px solid red;\n}\n.checklist-editor .decision {\n  border: 1px solid blue;\n}\n.checklist-editor .add-item {\n  margin-top: 10px;\n  margin-bottom: 4px;\n}\n.checklist-editor .indent-1 {\n  margin-left: 20px;\n}\n.checklist-editor .indent-2 {\n  margin-left: 40px;\n}\n.checklist-editor .indent-3 {\n  margin-left: 60px;\n}\n.checklist-editor .indent-4 {\n  margin-left: 80px;\n}\n.scenario-type-selector {\n  padding: 1.5rem;\n}\n.scenario-type-selector a {\n  display: inline-block;\n  padding: 2rem 3rem;\n  border: 1px solid #333;\n  border-radius: 0.5rem;\n  font-size: 1.25rem;\n  margin: 0.5rem 0;\n}\n.scenario-type-selector a:hover {\n  background-color: #ddd;\n}\n.hidden {\n  display: none;\n}", '', {"version":3,"sources":["/Users/user/Projects/monorepo/apps/data-entry/src/styles/checklist-styles.scss","/Users/user/Projects/monorepo/apps/data-entry/src/styles/_variables.scss"],"names":[],"mappings":"AAEA;EACI,cAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA,EAAA,qBAAA;EACA,UAAA;EACA,cAAA;AADJ;AAGI;EACI,gBAAA;EACA,mBAAA;AADR;AAGI;EACI,kBAAA;AADR;AAGI;EACI,aAAA;AADR;AAII;EACI,gBAAA,EAAA,kCAAA;EAEA,sBAAA;EACA,uBAAA;EACA,UAAA,EAAA,oDAAA;AAHR;AAKQ;EACI,iBAAA;EACA,yBCjCG;EDkCH,WAAA;AAHZ;AAKY;EACI,YAAA;EACA,YAAA;AAHhB;AAKY;EACI,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;AAHhB;AAKY;EACI,aAAA;AAHhB;AASA;EAoDI;;;IAAA;AAtDJ;AAII;EACI,eAAA;EACA,kBAAA;AAFR;AAKI;EACI,iBAAA;AAHR;AAMI;EACI,aAAA;AAJR;AAOI;EACI,WAAA;AALR;AAQI;EACI,gBAAA;EACA,mBAAA;EACA,iBAAA;AANR;AAQI;EACI,gBAAA;AANR;AASI;EACI,iBAAA;AAPR;AAUI;EACI,gBAAA;AARR;AAWI;EACI,WAAA;EACA,eAAA;EACA,kBAAA;AATR;AAWI;EACI,gBAAA;EACA,iBAAA;AATR;AAWI;EACI,iBAAA;AATR;AAYI;EACI,uBAAA;AAVR;AAgBI;EACI,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAdR;AAgBI;EACI,iBAAA;EACA,qBAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAdR;AAgBI;EACI,iBAAA;EAEA,YAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,gBAAA;AAfR;AAiBI;EACI,qBAAA;EACA,YAAA;EACA,OAAA;EACA,yBAAA;EAEA,YAAA;AAhBR;AAkBI;EACI,uBAAA;EACA,YAAA;EACA,mBAAA;AAhBR;AAmBI;EACI,sBAAA;EACA,sBAAA;AAjBR;AAoBI;EACI,UAAA;AAlBR;AAoBI;EACI,uBAAA;EACA,iBAAA;EACA,oBAAA;EACA,eAAA;EACA,kBAAA;AAlBR;AAqBI;EACI,iBAAA;EACA,oBAAA;EACA,eAAA;EACA,kBAAA;AAnBR;AAsBI;EACI,qBAAA;AApBR;AAsBI;EACI,sBAAA;AApBR;AAuBI;EACI,gBAAA;EACA,kBAAA;AArBR;AAwBI;EACI,iBAAA;AAtBR;AAwBI;EACI,iBAAA;AAtBR;AAwBI;EACI,iBAAA;AAtBR;AAwBI;EACI,iBAAA;AAtBR;AAkCA;EACI,eAAA;AA/BJ;AAiCI;EACI,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;AA/BR;AAiCQ;EACI,sBAAA;AA/BZ;AAoCA;EACI,aAAA;AAjCJ","sourcesContent":["@import 'variables';\n\n.modal {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    z-index: 1;\n    overflow: auto;\n\n    p {\n        padding-top: 7px;\n        padding-bottom: 7px;\n    }\n    ul {\n        list-style: inside;\n    }\n    &.hidden {\n        display: none;\n    }\n\n    .modal-dialog {\n        margin: 15% auto; /* 15% from the top and centered */\n        // padding: 20px;\n        border: 1px solid #888;\n        background-color: white;\n        width: 80%; /* Could be more or less, depending on screen size */\n\n        .modal-header {\n            font-size: larger;\n            background-color: $header-color;\n            width: 100%;\n\n            .close-button {\n                float: right;\n                padding: 1px;\n            }\n            .modal-title {\n                color: white;\n                text-align: center;\n                margin-left: auto;\n                width: 100%;\n            }\n            .modal-body {\n                padding: 40px;\n            }\n        }\n    }\n}\n\n.checklist-editor {\n\n    hr {\n        margin-top: 5px;\n        margin-bottom: 5px;\n    }\n\n    b {\n        font-weight: bold;\n    }\n\n    a {\n        color: purple;\n    }\n\n    colgroup {\n        width: 100%;\n    }\n\n    fieldset {\n        padding-top: 5px;\n        padding-bottom: 5px;\n        margin-left: 45px;\n    }\n    fieldset.top-level {\n        margin-left: 5px;\n    }\n\n    legend {\n        padding-left: 5px;\n    }\n\n    div.changed-ids {\n        margin-top: 20px;\n    }\n\n    table {\n        width: 100%;\n        margin-top: 5px;\n        margin-bottom: 5px;\n    }\n    th {\n        text-align: left;\n        font-weight: bold;\n    }\n    label {\n        padding-left: 5px;\n    }\n\n    button {\n        background-color: white;\n    }\n    /*button:disabled {\n        background-color: lightgray;\n        pointer-events: none;\n    }*/\n    button.swap-btn {\n        font-size: smaller;\n        padding-top: 2px;\n        padding-bottom: 2px;\n        padding-left: 3px;\n        padding-right: 3px;\n        border-radius: 0;\n    }\n    button.delete-btn {\n        margin-left: 10px;\n        background-color: red;\n        color: white;\n        border: 1px solid red;\n        font-size: smaller;\n        padding-top: 1px;\n        padding-bottom: 1px;\n        padding-left: 3px;\n        padding-right: 3px;\n        border-radius: 0;\n    }\n    button.add-btn {\n        margin-left: 10px;\n        // font-size: smaller;\n        color: white;\n        background-color: green;\n        padding-top: 0;\n        padding-bottom: 0;\n        padding-left: 3px;\n        padding-right: 3px;\n        border: 1px solid green;\n        border-radius: 0;\n    }\n    button.save-btn {\n        background-color: red;\n        color: white;\n        flex: 1;\n        justify-content: flex-end;\n        // width: 60px;\n        flex-grow: 0;\n    }\n    .breadcrumbs {\n        border: 1px solid black;\n        padding: 2px;\n        margin-bottom: 20px;\n    }\n\n    .has-error {\n        border: 1 px solid red;\n        background-color: pink;\n    }\n\n    .error-message {\n        color: red;\n    }\n    .phase {\n        border: 1px solid black;\n        padding-top: 10px;\n        padding-bottom: 10px;\n        margin-top: 2px;\n        margin-bottom: 2px;\n    }\n\n    .sub-phase {\n        padding-top: 10px;\n        padding-bottom: 10px;\n        margin-top: 2px;\n        margin-bottom: 2px;\n    }\n\n    .assessment-with-options {\n        border: 1px solid red;\n    }\n    .decision {\n        border: 1px solid blue;\n    }\n\n    .add-item {\n        margin-top: 10px;\n        margin-bottom: 4px;\n    }\n\n    .indent-1 {\n        margin-left: 20px;\n    }\n    .indent-2 {\n        margin-left: 40px\n    }\n    .indent-3 {\n        margin-left: 60px;\n    }\n    .indent-4 {\n        margin-left: 80px;\n    }\n\n    // .save-button-wrapper {\n    //     display: flex;\n    //     flex-flow: row-reverse;\n    // }\n\n}\n\n\n\n.scenario-type-selector {\n    padding: 1.5rem;\n\n    a {\n        display: inline-block;\n        padding: 2rem 3rem;\n        border: 1px solid #333;\n        border-radius: 0.5rem;\n        font-size: 1.25rem;\n        margin: 0.5rem 0;\n\n        &:hover {\n            background-color: #ddd;\n        }\n    }\n}\n\n.hidden {\n    display: none;\n}\n","$header-color: #353535;\n$header-dark: #222;\n$pastel-blue: rgb(90, 90, 195);\n$light-blue: rgb(150, 150, 255);"],"sourceRoot":""}]]

/***/ }),

/***/ 4912:
/***/ ((module) => {

module.exports = [[module.id, ".scenario-assignment {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin: 1rem 0;\n  padding: 1rem;\n}\n.scenario-assignment * input {\n  margin-left: 0.5rem;\n}\n.scenario-assignment .assignment-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.scenario-assignment .assignment-list label {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.scenario-assignment .assignment-list label input[type=number] {\n  width: 5em;\n}\n.scenario-assignment .assignment-list label span {\n  margin-left: auto;\n  white-space: nowrap;\n}\n.scenario-assignment button {\n  background-color: rgb(150, 150, 255);\n}", '', {"version":3,"sources":["/Users/user/Projects/monorepo/apps/data-entry/src/styles/class-codes-styles.scss","/Users/user/Projects/monorepo/apps/data-entry/src/styles/_variables.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,cAAA;EACA,aAAA;AADJ;AAGI;EACI,mBAAA;AADR;AAII;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAFR;AAIQ;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAFZ;AAIY;EACI,UAAA;AAFhB;AAKY;EACI,iBAAA;EACA,mBAAA;AAHhB;AAQI;EACI,oCClCK;AD4Bb","sourcesContent":["@import 'variables';\n\n.scenario-assignment {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    margin: 1rem 0;\n    padding: 1rem;\n\n    * input {\n        margin-left: 0.5rem;\n    }\n\n    .assignment-list {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n\n        label {\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n\n            input[type=\"number\"] {\n                width: 5em;\n            }\n\n            span {\n                margin-left: auto;\n                white-space: nowrap;\n            }\n        }\n    }\n\n    button {\n        background-color: $light-blue;\n    }\n}","$header-color: #353535;\n$header-dark: #222;\n$pastel-blue: rgb(90, 90, 195);\n$light-blue: rgb(150, 150, 255);"],"sourceRoot":""}]]

/***/ }),

/***/ 5943:
/***/ ((module) => {

module.exports = [[module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Noto Sans JP\", sans-serif;\n  text-decoration: none;\n  color: #333;\n}\n\n#root {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nbutton {\n  display: inline-block;\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 0.6em 1em;\n  cursor: pointer;\n  font-size: 1em;\n  white-space: nowrap;\n  background-color: #fff;\n}\n\nbutton:disabled {\n  opacity: 50%;\n  pointer-events: none;\n}\n\ninput[type=text],\ninput[type=number],\ninput[type=password],\ntextarea {\n  padding: 0.25em;\n}\n\nheader {\n  background-color: #353535;\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  gap: 1rem;\n}\n\nheader h1 {\n  color: #ddd;\n  cursor: pointer;\n  font-size: 2.5em;\n}\n\nheader h2 {\n  color: #ddd;\n  cursor: pointer;\n  font-size: 2em;\n}\n\nheader nav {\n  margin-left: auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\nheader nav button {\n  color: #353535;\n  background-color: #ddd;\n  margin-left: auto;\n  border: none;\n}\n\nheader nav .sign-out-bttn {\n  color: #ddd;\n  background-color: rgb(150, 0, 0);\n}\n\n.hint-text {\n  font-style: italic;\n  color: #999;\n}\n\n.db-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem 0;\n  gap: 1rem;\n  padding: 0 5rem 2rem 5rem;\n}\n\n.db-list .new-bttn {\n  font-style: italic;\n}\n\n.db-list .new-bttn:hover {\n  background-color: #ddd;\n}\n\n.db-list .db-list-item {\n  display: flex;\n  border: 2px solid #353535;\n  border-radius: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1rem;\n  width: 100%;\n  min-width: min-content;\n}\n\n.db-list .db-list-item .list-button-wrapper {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n\n.db-list .db-list-item .list-button-wrapper button {\n  all: unset;\n}\n\n.db-list .db-list-item .list-button-wrapper .action-bttn {\n  display: inline-block;\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 0.6em 1em;\n  cursor: pointer;\n  font-size: 1em;\n  white-space: nowrap;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.db-list .db-list-item .list-button-wrapper .action-bttn:hover {\n  background-color: #ddd;\n}\n\n.db-list .db-list-item .list-button-wrapper .delete-bttn {\n  border-color: rgb(150, 0, 0);\n  color: rgb(150, 0, 0);\n}\n\n.db-list .db-list-item .list-button-wrapper .delete-bttn:hover {\n  background-color: rgb(150, 0, 0);\n  color: #fff;\n}", '', {"version":3,"sources":["/Users/user/Projects/monorepo/apps/data-entry/src/styles/default-styles.scss","/Users/user/Projects/monorepo/apps/data-entry/src/styles/_variables.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,uCAAA;EACA,qBAAA;EACA,WAAA;AADJ;;AAIA;EACI,aAAA;EACA,sBAAA;EACA,aAAA;AADJ;;AAeA;EAVI,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,sBAAA;AADJ;;AAOA;EACI,YAAA;EACA,oBAAA;AAJJ;;AAMA;;;;EAII,eAAA;AAHJ;;AAOA;EACI,yBC5CW;ED6CX,aAAA;EACA,mBAAA;EACA,aAAA;EACA,SAAA;AAJJ;;AAMI;EACI,WAAA;EACA,eAAA;EACA,gBAAA;AAJR;;AAOI;EACI,WAAA;EACA,eAAA;EACA,cAAA;AALR;;AAQI;EACI,iBAAA;EACA,aAAA;EACA,eAAA;EACA,QAAA;AANR;;AAQQ;EACI,cCrEG;EDsEH,sBAAA;EACA,iBAAA;EACA,YAAA;AANZ;;AASQ;EACI,WAAA;EACA,gCAAA;AAPZ;;AAYA;EACI,kBAAA;EACA,WAAA;AATJ;;AAYA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EAEA,cAAA;EACA,SAAA;EACA,yBAAA;AAVJ;;AAYI;EACI,kBAAA;AAVR;;AAYQ;EACI,sBAAA;AAVZ;;AAcI;EACI,aAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;AAZR;;AAcQ;EACI,aAAA;EACA,WAAA;EACA,iBAAA;AAZZ;;AAcY;EACI,UAAA;AAZhB;;AAeY;EA3GR,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,sBAAA;EAsGY,sBAAA;AANhB;;AAQgB;EACI,sBAAA;AANpB;;AAUY;EACI,4BAAA;EACA,qBAAA;AARhB;;AAUgB;EACI,gCAAA;EACA,WAAA;AARpB","sourcesContent":["@import 'variables';\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Noto Sans JP', sans-serif;\n    text-decoration: none;\n    color: #333;\n}\n\n#root {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n@mixin bttn {\n    display: inline-block;\n    border: 1px solid;\n    border-radius: 5px;\n    padding: 0.6em 1em;\n    cursor: pointer;\n    font-size: 1em;\n    white-space: nowrap;\n    background-color: #fff;\n}\n\nbutton {\n    @include bttn;\n}\nbutton:disabled {\n    opacity: 50%;\n    pointer-events: none;\n}\ninput[type=\"text\"],\ninput[type=\"number\"],\ninput[type=\"password\"],\ntextarea {\n    padding: 0.25em;\n}\n\n\nheader {\n    background-color: $header-color;\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    gap: 1rem;\n\n    h1 {\n        color: #ddd;\n        cursor: pointer;\n        font-size: 2.5em;\n    }\n\n    h2 {\n        color: #ddd;\n        cursor: pointer;\n        font-size: 2em;\n    }\n\n    nav {\n        margin-left: auto;\n        display: flex;\n        flex-wrap: wrap;\n        gap: 1em;\n\n        button {\n            color: $header-color;\n            background-color: #ddd;\n            margin-left: auto;\n            border: none;\n        }\n\n        .sign-out-bttn {\n            color: #ddd;\n            background-color: rgb(150, 0, 0);\n        }\n    }\n}\n\n.hint-text {\n    font-style: italic;\n    color: #999;\n}\n\n.db-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin: 1rem 0;\n    gap: 1rem;\n    padding: 0 5rem 2rem 5rem;\n\n    .new-bttn {\n        font-style: italic;\n\n        &:hover {\n            background-color: #ddd;\n        }\n    }\n\n    .db-list-item {\n        display: flex;\n        border: 2px solid $header-color;\n        border-radius: 0.5rem;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 1rem;\n        padding: 1rem;\n        width: 100%;\n        min-width: min-content;\n\n        .list-button-wrapper {\n            display: flex;\n            gap: 0.5rem;\n            margin-left: auto;\n\n            button {\n                all: unset;\n            }\n\n            .action-bttn {\n                @include bttn;\n                border: 1px solid #ddd;\n\n                &:hover {\n                    background-color: #ddd;\n                }\n            }\n\n            .delete-bttn {\n                border-color: rgb(150, 0, 0);\n                color: rgb(150, 0, 0);\n\n                &:hover {\n                    background-color: rgb(150, 0, 0);\n                    color: #fff;\n                }\n            }\n        }\n    }\n}","$header-color: #353535;\n$header-dark: #222;\n$pastel-blue: rgb(90, 90, 195);\n$light-blue: rgb(150, 150, 255);"],"sourceRoot":""}]]

/***/ }),

/***/ 4846:
/***/ ((module) => {

module.exports = [[module.id, ".home-nav-wrapper {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.home-nav-wrapper .home-nav-link {\n  border-color: #353535;\n  border-width: 2px 2px 2px 0.75em;\n  border-style: solid;\n  border-radius: 0.25rem;\n  padding: 0.3em 0.6em;\n  font-size: 3em;\n}\n.home-nav-wrapper .home-nav-link:hover {\n  background-color: #ddd;\n}", '', {"version":3,"sources":["/Users/user/Projects/monorepo/apps/data-entry/src/styles/home-styles.scss","/Users/user/Projects/monorepo/apps/data-entry/src/styles/_variables.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AADJ;AAGI;EACI,qBCTO;EDUP,gCAAA;EACA,mBAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;AADR;AAGQ;EACI,sBAAA;AADZ","sourcesContent":["@import 'variables';\n\n.home-nav-wrapper {\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    \n    .home-nav-link {\n        border-color: $header-color;\n        border-width: 2px 2px 2px 0.75em;\n        border-style: solid;\n        border-radius: 0.25rem;\n        padding: 0.3em 0.6em;\n        font-size: 3em;\n\n        &:hover {\n            background-color: #ddd;\n        }\n    }\n}","$header-color: #353535;\n$header-dark: #222;\n$pastel-blue: rgb(90, 90, 195);\n$light-blue: rgb(150, 150, 255);"],"sourceRoot":""}]]

/***/ }),

/***/ 5848:
/***/ ((module) => {

module.exports = [[module.id, ".medications-form {\n  padding: 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.medications-form .medication .main-area {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.medications-form .medication h3 {\n  color: rgb(90, 90, 195);\n  text-align: center;\n  min-width: 10rem;\n  width: 13rem;\n}\n.medications-form .medication .expanded-area {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.medications-form .medication .expanded-area .generic-data {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.medications-form .medication .expanded-area .generic-data .contraindications, .medications-form .medication .expanded-area .generic-data .indications {\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.medications-form .medication .expanded-area .generic-data .contraindications .hidden, .medications-form .medication .expanded-area .generic-data .indications .hidden {\n  display: none !important;\n}\n.medications-form .medication .expanded-area .generic-data .contraindications .dropdown, .medications-form .medication .expanded-area .generic-data .indications .dropdown {\n  background: #eee;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n  width: min-content;\n  white-space: nowrap;\n  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.5);\n}\n.medications-form .medication .expanded-area .generic-data .contraindications .checklist, .medications-form .medication .expanded-area .generic-data .indications .checklist {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #999;\n  border-radius: 0.5rem;\n  max-height: 15rem;\n  overflow-y: auto;\n  z-index: 99;\n}\n.medications-form .medication .expanded-area .generic-data .contraindications .checklist .contraindication, .medications-form .medication .expanded-area .generic-data .contraindications .checklist .indication, .medications-form .medication .expanded-area .generic-data .indications .checklist .contraindication, .medications-form .medication .expanded-area .generic-data .indications .checklist .indication {\n  padding: 0.2rem;\n  white-space: nowrap;\n}\n.medications-form .medication .expanded-area .generic-data .contraindications .checklist .contraindication label, .medications-form .medication .expanded-area .generic-data .contraindications .checklist .indication label, .medications-form .medication .expanded-area .generic-data .indications .checklist .contraindication label, .medications-form .medication .expanded-area .generic-data .indications .checklist .indication label {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  padding: 0 0.5rem;\n}\n.medications-form .medication .expanded-area .generic-data .contraindications .checklist .contraindication label input[type=checkbox], .medications-form .medication .expanded-area .generic-data .contraindications .checklist .indication label input[type=checkbox], .medications-form .medication .expanded-area .generic-data .indications .checklist .contraindication label input[type=checkbox], .medications-form .medication .expanded-area .generic-data .indications .checklist .indication label input[type=checkbox] {\n  margin-top: 0.5em;\n}\n.medications-form .medication .expanded-area .headings {\n  display: grid;\n  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;\n  gap: 1rem;\n  align-items: center;\n  justify-items: center;\n  padding: 0.25rem 0;\n}\n.medications-form .medication .expanded-area .headings p {\n  font-weight: bold;\n  text-align: center;\n}\n.medications-form .medication .expanded-area .adult-data, .medications-form .medication .expanded-area .pediatric-data {\n  display: flex;\n  flex-direction: column;\n  background: #f5f5f5;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n.medications-form .medication .expanded-area .adult-data .basic-info, .medications-form .medication .expanded-area .pediatric-data .basic-info {\n  display: grid;\n  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;\n  gap: 0.5rem;\n  align-items: center;\n}\n.medications-form .medication .expanded-area .adult-data .basic-info input[type=text],\n.medications-form .medication .expanded-area .adult-data .basic-info input[type=number], .medications-form .medication .expanded-area .pediatric-data .basic-info input[type=text],\n.medications-form .medication .expanded-area .pediatric-data .basic-info input[type=number] {\n  width: 100%;\n}\n.medications-form .medication .expanded-area .adult-data .basic-info input[type=checkbox], .medications-form .medication .expanded-area .pediatric-data .basic-info input[type=checkbox] {\n  margin: 0 auto;\n}\n.medications-form .medication .expanded-area .adult-data .basic-info p, .medications-form .medication .expanded-area .pediatric-data .basic-info p {\n  font-weight: bold;\n  text-decoration: underline;\n}\n.medications-form .medication .expanded-area .administration-routes {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.medications-form .medication .expanded-area .administration-routes p {\n  font-weight: bold;\n}\n.medications-form .medication .expanded-area .administration-routes label {\n  display: flex;\n  gap: 0.25rem;\n  align-items: center;\n}\n.medications-form .expand-bttn {\n  border: none;\n  display: flex;\n  align-items: center;\n}\n.medications-form .expand-bttn:hover {\n  background-color: #ddd;\n}\n.medications-form .expand-bttn svg {\n  height: 1rem;\n  width: 1rem;\n}\n.medications-form .expand-bttn.expanded {\n  background-color: #ddd;\n}\n.medications-form .expand-bttn.expanded:hover {\n  background-color: #999;\n}\n.medications-form .expanded-area.collapsed {\n  display: none;\n}\n.medications-form .delete-bttn {\n  all: unset;\n  background-color: #ddd;\n  padding: 0 1rem;\n  max-width: min-content;\n  cursor: pointer;\n}\n.medications-form .delete-bttn:hover {\n  background-color: aquamarine;\n}\n.medications-form button {\n  margin: 0;\n  align-self: flex-start;\n}", '', {"version":3,"sources":["/Users/user/Projects/monorepo/apps/data-entry/src/styles/medications-styles.scss","/Users/user/Projects/monorepo/apps/data-entry/src/styles/_variables.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AADJ;AAIQ;EACI,aAAA;EACA,WAAA;EACA,mBAAA;AAFZ;AAKQ;EACI,uBCdE;EDeF,kBAAA;EACA,gBAAA;EACA,YAAA;AAHZ;AAMQ;EACI,aAAA;EACA,sBAAA;EACA,WAAA;AAJZ;AAOY;EACI,aAAA;EACA,SAAA;EACA,gBAAA;AALhB;AAOgB;EACI,kBAAA;EACA,yBAAA;UAAA,iBAAA;AALpB;AAOoB;EAAU,wBAAA;AAJ9B;AAMoB;EACI,gBAAA;EACA,qBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EAEA,0CAAA;AALxB;AAQoB;EACI,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;AANxB;AAQwB;EACI,eAAA;EACA,mBAAA;AAN5B;AAQ4B;EACI,aAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;AANhC;AAQgC;EACI,iBAAA;AANpC;AAcY;EACI,aAAA;EACA,sDAtDM;EAuDN,SAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;AAZhB;AAcgB;EACI,iBAAA;EACA,kBAAA;AAZpB;AAgBY;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,WAAA;AAdhB;AAgBgB;EACI,aAAA;EACA,sDA3EE;EA4EF,WAAA;EACA,mBAAA;AAdpB;AAgBoB;;;EAEI,WAAA;AAbxB;AAgBoB;EACI,cAAA;AAdxB;AAiBoB;EACI,iBAAA;EACA,0BAAA;AAfxB;AAoBY;EACI,aAAA;EACA,SAAA;EACA,mBAAA;AAlBhB;AAoBgB;EACI,iBAAA;AAlBpB;AAqBgB;EACI,aAAA;EACA,YAAA;EACA,mBAAA;AAnBpB;AAyBI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;AAvBR;AAyBQ;EACI,sBAAA;AAvBZ;AA0BQ;EACI,YAAA;EACA,WAAA;AAxBZ;AA4BI;EACI,sBAAA;AA1BR;AA4BQ;EACI,sBAAA;AA1BZ;AA8BI;EACI,aAAA;AA5BR;AA+BI;EACI,UAAA;EACA,sBAAA;EACA,eAAA;EACA,sBAAA;EACA,eAAA;AA7BR;AA+BQ;EACI,4BAAA;AA7BZ;AAiCI;EACI,SAAA;EACA,sBAAA;AA/BR","sourcesContent":["@import 'variables';\n\n.medications-form {\n    padding: 1rem 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n    .medication {\n        .main-area {\n            display: flex;\n            gap: 0.5rem;\n            align-items: center;\n        }\n\n        h3 {\n            color: $pastel-blue;\n            text-align: center;\n            min-width: 10rem;\n            width: 13rem;\n        }\n\n        .expanded-area {\n            display: flex;\n            flex-direction: column;\n            gap: 0.5rem;\n            $columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;\n\n            .generic-data {\n                display: flex;\n                gap: 1rem;\n                margin-top: 1rem;\n\n                .contraindications, .indications {\n                    position: relative;\n                    user-select: none;\n\n                    .hidden { display: none !important; }\n\n                    .dropdown {\n                        background: #eee;\n                        border-radius: 0.5rem;\n                        padding: 0.25rem 0.5rem;\n                        cursor: pointer;\n                        width: min-content;\n                        white-space: nowrap;\n\n                        box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.5);\n                    }\n\n                    .checklist {\n                        position: absolute;\n                        background-color: #fff;\n                        border: 1px solid #999;\n                        border-radius: 0.5rem;\n                        max-height: 15rem;\n                        overflow-y: auto;\n                        z-index: 99;\n\n                        .contraindication, .indication {\n                            padding: 0.2rem;\n                            white-space: nowrap;\n                            \n                            label {\n                                display: flex;\n                                gap: 0.5rem;\n                                align-items: center;\n                                padding: 0 0.5rem;\n\n                                input[type=checkbox] {\n                                    margin-top: 0.5em;\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n\n            .headings {\n                display: grid;\n                grid-template-columns: $columns;\n                gap: 1rem;\n                align-items: center;\n                justify-items: center;\n                padding: 0.25rem 0;\n                \n                p {\n                    font-weight: bold;\n                    text-align: center;\n                }\n            }\n            \n            .adult-data, .pediatric-data {\n                display: flex;\n                flex-direction: column;\n                background: #f5f5f5;\n                padding: 0.5rem;\n                gap: 0.5rem;\n                \n                .basic-info {\n                    display: grid;\n                    grid-template-columns: $columns;\n                    gap: 0.5rem;\n                    align-items: center;\n\n                    input[type=text],\n                    input[type=number] {\n                        width: 100%;\n                    }\n\n                    input[type=checkbox] {\n                        margin: 0 auto;\n                    }\n\n                    p {\n                        font-weight: bold;\n                        text-decoration: underline;\n                    }\n                }\n            }\n\n            .administration-routes {\n                display: flex;\n                gap: 1rem;\n                align-items: center;\n\n                p {\n                    font-weight: bold;\n                }\n    \n                label {\n                    display: flex;\n                    gap: 0.25rem;\n                    align-items: center;\n                }\n            }\n        }\n    }\n\n    .expand-bttn {\n        border: none;\n        display: flex;\n        align-items: center;\n\n        &:hover {\n            background-color: #ddd;\n        }\n\n        svg {\n            height: 1rem;\n            width: 1rem;\n        }\n    }\n\n    .expand-bttn.expanded {\n        background-color: #ddd;\n\n        &:hover {\n            background-color: #999;\n        }\n    }\n\n    .expanded-area.collapsed {\n        display: none;\n    }\n\n    .delete-bttn {\n        all: unset;\n        background-color: #ddd;\n        padding: 0 1rem;\n        max-width: min-content;\n        cursor: pointer;\n\n        &:hover {\n            background-color: aquamarine;\n        }\n    }\n\n    button {\n        margin: 0;\n        align-self: flex-start;\n    }\n}","$header-color: #353535;\n$header-dark: #222;\n$pastel-blue: rgb(90, 90, 195);\n$light-blue: rgb(150, 150, 255);"],"sourceRoot":""}]]

/***/ }),

/***/ 7032:
/***/ ((module) => {

module.exports = [[module.id, ".modal {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  z-index: 1;\n  overflow: auto;\n}\n.modal p {\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.modal ul {\n  list-style: inside;\n}\n.modal.hidden {\n  display: none;\n}\n.modal .modal-dialog {\n  margin: 15% auto; /* 15% from the top and centered */\n  border: 1px solid #888;\n  background-color: white;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n.modal .modal-dialog .modal-header {\n  font-size: larger;\n  background-color: #353535;\n  width: 100%;\n}\n.modal .modal-dialog .modal-header .close-button {\n  float: right;\n  padding: 1px;\n}\n.modal .modal-dialog .modal-header .modal-title {\n  color: white;\n  text-align: center;\n  margin-left: auto;\n  width: 100%;\n}\n.modal .modal-dialog .modal-header .modal-body {\n  padding: 40px;\n}\n.scenario-editor fieldset {\n  margin: 5px;\n  margin-bottom: 15px;\n  padding: 5px;\n}\n.scenario-editor legend {\n  padding-left: 5px;\n  font-weight: bold;\n  font-size: x-large;\n}\n.scenario-editor button {\n  background-color: white;\n}\n.scenario-editor button.swap-btn {\n  font-size: smaller;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 3px;\n  padding-right: 3px;\n  border-radius: 0;\n}\n.scenario-editor button.delete-btn {\n  background-color: red;\n  color: white;\n  border: 1px solid red;\n  font-size: smaller;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 3px;\n  padding-right: 3px;\n  border-radius: 0;\n}\n.scenario-editor button.add-btn {\n  margin-left: 10px;\n  color: white;\n  background-color: green;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 3px;\n  padding-right: 3px;\n  border: 1px solid green;\n  border-radius: 0;\n}\n.scenario-editor button.save-btn {\n  background-color: red;\n  color: white;\n  flex: 1;\n  justify-content: flex-end;\n  flex-grow: 0;\n}\n.scenario-editor .breadcrumbs {\n  border: 1px solid black;\n  padding: 2px;\n  margin-bottom: 20px;\n}\n.scenario-editor .details-editor table {\n  border: 0;\n}\n.scenario-editor .inline-editor {\n  padding-top: 20px;\n}\n.scenario-editor .inline-editor table {\n  border-bottom: 0;\n}\n.scenario-editor .inline-editor thead {\n  background-color: lightgray;\n}\n.scenario-editor .inline-editor th {\n  border-bottom: 1px solid black;\n}\n.scenario-editor .add-entity {\n  padding: 20px;\n}\n.scenario-editor .add-entity table {\n  border: 0;\n}\n.scenario-editor .add-entity thead {\n  background-color: white;\n}\n.scenario-editor .add-entity th {\n  border-bottom: 0;\n}\n.scenario-editor .add-entity td {\n  vertical-align: top;\n}\n.scenario-editor .err-msg {\n  color: red;\n}\n.scenario-editor #tab-selector {\n  display: flex;\n  flex-flow: row wrap;\n  background-color: #353535;\n}\n.scenario-editor #tab-selector button {\n  all: unset;\n}\n.scenario-editor #tab-selector .active-tab {\n  background-color: #222;\n}\n.scenario-editor #tab-selector .tab-button {\n  color: #ddd;\n  cursor: pointer;\n  padding: 0.75em 1.25em;\n}\n.scenario-editor #tab-selector .tab-button:hover {\n  background-color: #222;\n}\n.scenario-form-wrapper {\n  border-top: 1px solid #222;\n  width: 100%;\n  height: 100% -106px;\n  overflow-y: scroll;\n}\n.scenario-form-wrapper .scenario-form {\n  padding: 0.5rem;\n}\n.scenario-form-wrapper .scenario-form.scenario-view-hidden {\n  display: none !important;\n}\n.scenario-form-wrapper .scenario-form .save-changes {\n  float: right;\n}\n.scenario-form-wrapper .scenario-form .info-wrapper h1 {\n  color: rgb(90, 90, 195);\n}\n.scenario-form-wrapper .scenario-form #basic-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.scenario-form-wrapper .scenario-form #basic-info h1 {\n  color: rgb(90, 90, 195);\n}\n.scenario-form-wrapper .scenario-form #basic-info label {\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n}\n.scenario-form-wrapper .scenario-form #sample,\n.scenario-form-wrapper .scenario-form #opqrst {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.scenario-form-wrapper .scenario-form #sample label,\n.scenario-form-wrapper .scenario-form #opqrst label {\n  display: flex;\n}\n.scenario-form-wrapper .scenario-form #sample label input,\n.scenario-form-wrapper .scenario-form #opqrst label input {\n  display: inline-block;\n  margin: 0 1rem;\n  width: 100%;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table {\n  width: 100%;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table th {\n  font-weight: bold;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table thead th {\n  text-align: center;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody tr {\n  outline: 1px solid #333;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody td {\n  padding: 0.35rem;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody input[type=text] {\n  width: 100%;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .value-hint {\n  font-size: 0.9rem;\n  color: #bbb;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .route-dropdown {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .contraindications {\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  margin: auto;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .contraindications .hidden {\n  display: none !important;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .contraindications .dropdown {\n  background: #eee;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n  width: min-content;\n  white-space: nowrap;\n  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.5);\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .contraindications .checklist {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #999;\n  border-radius: 0.5rem;\n  max-height: 15rem;\n  overflow-y: auto;\n  z-index: 99;\n  text-align: left;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .contraindications .checklist .contraindication {\n  white-space: nowrap;\n  width: 100%;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .contraindications .checklist .contraindication label {\n  display: block;\n  width: 100%;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper table tbody .contraindications .checklist .contraindication input[type=checkbox] {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper label {\n  border: 1px solid #ddd;\n  border-style: none none solid none;\n  padding: 0.5em;\n}\n.scenario-form-wrapper .scenario-form #medications .meds-wrapper label input {\n  max-width: 15em;\n  margin-left: auto;\n  margin-right: 3em;\n}\n.scenario-form-wrapper .scenario-form .vitals table {\n  width: 100%;\n}\n.scenario-form-wrapper .scenario-form .vitals table th {\n  font-weight: bold;\n}\n.scenario-form-wrapper .scenario-form .vitals table thead th {\n  text-align: center;\n}\n.scenario-form-wrapper .scenario-form .vitals table tbody input {\n  width: 100%;\n}\n.scenario-form-wrapper .scenario-form .vitals .vital-wrapper {\n  border: 1px solid #353535;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  max-width: calc(100vw - 1rem);\n}\n.scenario-form-wrapper .scenario-form .vitals .vital-wrapper h1 {\n  color: rgb(90, 90, 195);\n}\n.scenario-form-wrapper .scenario-form .vitals .vital-wrapper .vitals-box {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.scenario-form-wrapper .scenario-form .vitals .vital-wrapper .vitals-box label {\n  display: flex;\n  font-weight: 500;\n}\n.scenario-form-wrapper .scenario-form .vitals .vital-wrapper .vitals-box label input {\n  display: inline-block;\n  margin: 0 0 0 1rem;\n  width: 100%;\n}\n.scenario-form-wrapper .scenario-form #scenario-steps {\n  display: flex;\n  flex-direction: column;\n}\n.scenario-form-wrapper .scenario-form #scenario-steps h1 {\n  color: rgb(90, 90, 195);\n}\n.scenario-form-wrapper .scenario-form #scenario-steps .header-item h2 {\n  color: rgb(90, 90, 195);\n}\n.scenario-form-wrapper .scenario-form #scenario-steps .step-item {\n  border: 1px solid #333;\n  border-style: none none solid none;\n  padding: 0.5rem;\n}\n.scenario-form-wrapper .scenario-form #scenario-steps .step-item:nth-child(odd) {\n  background-color: #eee;\n}\n.scenario-form-wrapper .scenario-form #scenario-steps .step-item label {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.scenario-form-wrapper .scenario-form #scenario-steps .step-item label input {\n  display: inline-block;\n  max-height: min-content;\n  align-self: flex-end;\n  margin-left: 1em;\n  width: 100%;\n}\n.scenario-form-wrapper #submit-next {\n  background-color: rgb(90, 90, 195);\n  padding: 0.75em 1.25em;\n  color: #ddd;\n  margin-left: auto;\n  cursor: pointer;\n}\n.hidden {\n  display: none;\n}\n.error {\n  color: red;\n}", '', {"version":3,"sources":["/Users/user/Projects/monorepo/apps/data-entry/src/styles/scenario-editor-styles.scss","/Users/user/Projects/monorepo/apps/data-entry/src/styles/_variables.scss"],"names":[],"mappings":"AAEA;EACI,cAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA,EAAA,qBAAA;EACA,UAAA;EACA,cAAA;AADJ;AAGI;EACI,gBAAA;EACA,mBAAA;AADR;AAGI;EACI,kBAAA;AADR;AAGI;EACI,aAAA;AADR;AAII;EACI,gBAAA,EAAA,kCAAA;EAEA,sBAAA;EACA,uBAAA;EACA,UAAA,EAAA,oDAAA;AAHR;AAKQ;EACI,iBAAA;EACA,yBCjCG;EDkCH,WAAA;AAHZ;AAKY;EACI,YAAA;EACA,YAAA;AAHhB;AAKY;EACI,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;AAHhB;AAKY;EACI,aAAA;AAHhB;AAWI;EACI,WAAA;EACA,mBAAA;EACA,YAAA;AARR;AAWI;EACI,iBAAA;EACA,iBAAA;EACA,kBAAA;AATR;AAYI;EACI,uBAAA;AAVR;AAkBI;EACI,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAhBR;AAmBI;EAEI,qBAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAlBR;AAqBI;EACI,iBAAA;EACA,YAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,gBAAA;AAnBR;AAsBI;EACI,qBAAA;EACA,YAAA;EACA,OAAA;EACA,yBAAA;EAEA,YAAA;AArBR;AAwBI;EACI,uBAAA;EACA,YAAA;EACA,mBAAA;AAtBR;AA0BQ;EACI,SAAA;AAxBZ;AA4BI;EACI,iBAAA;AA1BR;AA4BQ;EACI,gBAAA;AA1BZ;AA6BQ;EACI,2BAAA;AA3BZ;AA8BQ;EACI,8BAAA;AA5BZ;AAgCI;EACI,aAAA;AA9BR;AAgCQ;EACI,SAAA;AA9BZ;AAiCQ;EACI,uBAAA;AA/BZ;AAkCQ;EACI,gBAAA;AAhCZ;AAmCQ;EACI,mBAAA;AAjCZ;AAqCI;EACI,UAAA;AAnCR;AAsCI;EACI,aAAA;EACA,mBAAA;EACA,yBC9KO;AD0If;AAsCQ;EACI,UAAA;AApCZ;AAuCQ;EACI,sBCpLE;AD+Id;AAwCQ;EACI,WAAA;EACA,eAAA;EACA,sBAAA;AAtCZ;AAwCY;EACI,sBC7LF;ADuJd;AA8CA;EACI,0BAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;AA3CJ;AA6CI;EACI,eAAA;AA3CR;AA6CQ;EACY,wBAAA;AA3CpB;AA8CQ;EACI,YAAA;AA5CZ;AAgDY;EACI,uBCvNF;ADyKd;AAkDQ;EACI,aAAA;EACA,sBAAA;EACA,WAAA;AAhDZ;AAkDY;EACI,uBCjOF;ADiLd;AAmDY;EACI,aAAA;EACA,sBAAA;EACA,gBAAA;AAjDhB;AAqDQ;;EAEI,aAAA;EACA,sBAAA;EACA,WAAA;AAnDZ;AAqDY;;EACI,aAAA;AAlDhB;AAoDgB;;EACI,qBAAA;EACA,cAAA;EACA,WAAA;AAjDpB;AA+DgB;EACI,WAAA;AA7DpB;AA8DoB;EACI,iBAAA;AA5DxB;AA+DwB;EACI,kBAAA;AA7D5B;AAiEwB;EACI,uBAAA;AA/D5B;AAkEwB;EACI,gBAAA;AAhE5B;AAmEwB;EACI,WAAA;AAjE5B;AAoEwB;EACI,iBAAA;EACA,WAAA;AAlE5B;AAqEwB;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AAnE5B;AAsEwB;EACI,kBAAA;EACA,yBAAA;UAAA,iBAAA;EACA,YAAA;AApE5B;AAsE4B;EAAU,wBAAA;AAnEtC;AAqE4B;EACI,gBAAA;EACA,qBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EAEA,0CAAA;AApEhC;AAuE4B;EACI,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;AArEhC;AAuEgC;EACI,mBAAA;EACA,WAAA;AArEpC;AAuEoC;EACI,cAAA;EACA,WAAA;AArExC;AAwEoC;EACI,sBAAA;EACA,oBAAA;AAtExC;AA8EgB;EACI,sBAAA;EACA,kCAAA;EACA,cAAA;AA5EpB;AA8EoB;EACI,eAAA;EACA,iBAAA;EACA,iBAAA;AA5ExB;AAsFY;EACI,WAAA;AApFhB;AAqFiB;EACO,iBAAA;AAnFxB;AAsFoB;EACI,kBAAA;AApFxB;AAwFoB;EACI,WAAA;AAtFxB;AA0FY;EACI,yBAAA;EACA,qBAAA;EACA,eAAA;EACA,6BAAA;AAxFhB;AA0FgB;EACI,uBC/XN;ADuSd;AA2FgB;EACI,aAAA;EACA,8BAAA;EACA,SAAA;AAzFpB;AA2FoB;EACI,aAAA;EACA,gBAAA;AAzFxB;AA2FwB;EACI,qBAAA;EACA,kBAAA;EACA,WAAA;AAzF5B;AAgGQ;EACI,aAAA;EACA,sBAAA;AA9FZ;AAgGY;EACI,uBC1ZF;AD4Td;AAkGgB;EACI,uBC/ZN;AD+Td;AAoGY;EACI,sBAAA;EACA,kCAAA;EACA,eAAA;AAlGhB;AAoGgB;EACI,sBAAA;AAlGpB;AAqGgB;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;AAnGpB;AAqGoB;EACI,qBAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,WAAA;AAnGxB;AAyGO;EACK,kCC7bE;ED8bF,sBAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;AAvGZ;AA4GA;EACI,aAAA;AAzGJ;AA4GA;EACI,UAAA;AAzGJ","sourcesContent":["@import 'variables';\n\n.modal {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    z-index: 1;\n    overflow: auto;\n\n    p {\n        padding-top: 7px;\n        padding-bottom: 7px;\n    }\n    ul {\n        list-style: inside;\n    }\n    &.hidden {\n        display: none;\n    }\n\n    .modal-dialog {\n        margin: 15% auto; /* 15% from the top and centered */\n        // padding: 20px;\n        border: 1px solid #888;\n        background-color: white;\n        width: 80%; /* Could be more or less, depending on screen size */\n\n        .modal-header {\n            font-size: larger;\n            background-color: $header-color;\n            width: 100%;\n\n            .close-button {\n                float: right;\n                padding: 1px;\n            }\n            .modal-title {\n                color: white;\n                text-align: center;\n                margin-left: auto;\n                width: 100%;\n            }\n            .modal-body {\n                padding: 40px;\n            }\n        }\n    }\n}\n\n.scenario-editor {\n\n    fieldset {\n        margin: 5px;\n        margin-bottom: 15px;\n        padding: 5px;\n    }\n\n    legend {\n        padding-left: 5px;\n        font-weight: bold;\n        font-size: x-large;\n    }\n\n    button {\n        background-color: white;\n    }\n\n    // button:disabled {\n    //     background-color: lightgray;\n    //     pointer-events: none;\n    // }\n\n    button.swap-btn {\n        font-size: smaller;\n        padding-top: 2px;\n        padding-bottom: 2px;\n        padding-left: 3px;\n        padding-right: 3px;\n        border-radius: 0;\n    }\n\n    button.delete-btn {\n        // margin-left: 10px;\n        background-color: red;\n        color: white;\n        border: 1px solid red;\n        font-size: smaller;\n        padding-top: 1px;\n        padding-bottom: 1px;\n        padding-left: 3px;\n        padding-right: 3px;\n        border-radius: 0;\n    }\n\n    button.add-btn {\n        margin-left: 10px;\n        color: white;\n        background-color: green;\n        padding-top: 0;\n        padding-bottom: 0;\n        padding-left: 3px;\n        padding-right: 3px;\n        border: 1px solid green;\n        border-radius: 0;\n    }\n\n    button.save-btn {\n        background-color: red;\n        color: white;\n        flex: 1;\n        justify-content: flex-end;\n        // width: 60px;\n        flex-grow: 0;\n    }\n\n    .breadcrumbs {\n        border: 1px solid black;\n        padding: 2px;\n        margin-bottom: 20px;\n    }\n\n    .details-editor {\n        table {\n            border: 0;\n        }\n    }\n\n    .inline-editor {\n        padding-top: 20px;\n        // padding-bottom: 20px;\n        table {\n            border-bottom: 0;\n        }\n\n        thead {\n            background-color: lightgray;\n        }\n\n        th {\n            border-bottom: 1px solid black;\n        }\n    }\n\n    .add-entity {\n        padding: 20px;\n\n        table {\n            border: 0;\n        }\n\n        thead {\n            background-color: white;\n        }\n\n        th {\n            border-bottom: 0;\n        }\n\n        td {\n            vertical-align: top;\n        }\n    }\n\n    .err-msg {\n        color: red;\n    }\n\n    #tab-selector {\n        display: flex;\n        flex-flow: row wrap;\n        background-color: $header-color;\n\n        button {\n            all: unset;\n        }\n\n        .active-tab {\n            background-color: $header-dark;\n        }\n\n        .tab-button {\n            color: #ddd;\n            cursor: pointer;\n            padding: 0.75em 1.25em;\n\n            &:hover {\n                background-color: $header-dark;\n            }\n        }\n    }\n\n\n}\n\n.scenario-form-wrapper {\n    border-top: 1px solid #222;\n    width: 100%;\n    height: 100% -58px - 48px; //subtract header and tab heights\n    overflow-y: scroll;\n\n    .scenario-form {\n        padding: 0.5rem;\n\n        &.scenario-view-hidden {\n                    display: none !important;\n            }\n\n        .save-changes {\n            float: right;\n        }\n\n        .info-wrapper {\n            h1 {\n                color: $pastel-blue;\n            }\n        }\n\n        #basic-info {\n            display: flex;\n            flex-direction: column;\n            gap: 0.5rem;\n\n            h1 {\n                color: $pastel-blue;\n            }\n\n            label {\n                display: flex;\n                flex-direction: column;\n                font-weight: 500;\n            }\n        }\n\n        #sample,\n        #opqrst {\n            display: flex;\n            flex-direction: column;\n            gap: 0.5rem;\n\n            label {\n                display: flex;\n\n                input {\n                    display: inline-block;\n                    margin: 0 1rem;\n                    width: 100%;\n                }\n            }\n        }\n\n        #medications {\n            // display: flex;\n            // flex-direction: column;\n            // gap: 0.5rem;\n\n            .meds-wrapper {\n                // display: grid;\n                // grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));\n                // gap: 0.5rem;\n                table {\n                    width: 100%;\n                    th {\n                        font-weight: bold;\n                    }\n                    thead {\n                        th {\n                            text-align: center;\n                        }\n                    }\n                    tbody {\n                        tr {\n                            outline: 1px solid #333;\n                        }\n\n                        td {\n                            padding: 0.35rem;\n                        }\n\n                        input[type=text] {\n                            width: 100%;\n                        }\n\n                        .value-hint {\n                            font-size: 0.9rem;\n                            color: #bbb;\n                        }\n\n                        .route-dropdown {\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                        }\n\n                        .contraindications {\n                            position: relative;\n                            user-select: none;\n                            margin: auto;\n\n                            .hidden { display: none !important; }\n\n                            .dropdown {\n                                background: #eee;\n                                border-radius: 0.5rem;\n                                padding: 0.25rem 0.5rem;\n                                cursor: pointer;\n                                width: min-content;\n                                white-space: nowrap;\n\n                                box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.5);\n                            }\n\n                            .checklist {\n                                position: absolute;\n                                background-color: #fff;\n                                border: 1px solid #999;\n                                border-radius: 0.5rem;\n                                max-height: 15rem;\n                                overflow-y: auto;\n                                z-index: 99;\n                                text-align: left;\n\n                                .contraindication {\n                                    white-space: nowrap;\n                                    width: 100%;\n\n                                    label {\n                                        display: block;\n                                        width: 100%;\n                                    }\n\n                                    input[type=checkbox] {\n                                        vertical-align: middle;\n                                        margin-right: 0.5rem;\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n\n                label {\n                    border: 1px solid #ddd;\n                    border-style: none none solid none;\n                    padding: 0.5em;\n\n                    input {\n                        max-width: 15em;\n                        margin-left: auto;\n                        margin-right: 3em;\n                    }\n                }\n            }\n        }\n\n        .vitals {\n            // display: grid;\n            // grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));\n            // gap: 1rem;\n            table {\n                width: 100%;\n                 th {\n                        font-weight: bold;\n                    }\n                thead {\n                    th {\n                        text-align: center;\n                    }\n                }\n                tbody {\n                    input {\n                        width: 100%;\n                    }\n                }\n            }\n            .vital-wrapper {\n                border: 1px solid $header-color;\n                border-radius: 0.5rem;\n                padding: 0.5rem;\n                max-width: calc(100vw - 1rem);\n\n                h1 {\n                    color: $pastel-blue;\n                }\n\n                .vitals-box {\n                    display: grid;\n                    grid-template-columns: 1fr 1fr;\n                    gap: 1rem;\n\n                    label {\n                        display: flex;\n                        font-weight: 500;\n\n                        input {\n                            display: inline-block;\n                            margin: 0 0 0 1rem;\n                            width: 100%;\n                        }\n                    }\n                }\n            }\n        }\n\n        #scenario-steps {\n            display: flex;\n            flex-direction: column;\n\n            h1 {\n                color: $pastel-blue;\n            }\n\n            .header-item {\n                h2 {\n                    color: $pastel-blue;\n                }\n            }\n\n            .step-item {\n                border: 1px solid #333;\n                border-style: none none solid none;\n                padding: 0.5rem;\n\n                &:nth-child(odd) {\n                    background-color: #eee;\n                }\n\n                label {\n                    display: flex;\n                    align-items: center;\n                    white-space: nowrap;\n\n                    input {\n                        display: inline-block;\n                        max-height: min-content;\n                        align-self: flex-end;\n                        margin-left: 1em;\n                        width: 100%;\n                    }\n                }\n            }\n        }\n    }\n       #submit-next {\n            background-color: $pastel-blue;\n            padding: 0.75em 1.25em;\n            color: #ddd;\n            margin-left: auto;\n            cursor: pointer;\n        }\n}\n\n\n.hidden {\n    display: none;\n}\n\n.error {\n    color: red;\n}\n","$header-color: #353535;\n$header-dark: #222;\n$pastel-blue: rgb(90, 90, 195);\n$light-blue: rgb(150, 150, 255);"],"sourceRoot":""}]]

/***/ }),

/***/ 8881:
/***/ ((module) => {

module.exports = [[module.id, ".scenario-type-editor b {\n  font-weight: bold;\n}\n.scenario-type-editor a {\n  color: purple;\n}\n.scenario-type-editor table {\n  width: 100%;\n  border: 1px solid black;\n  border-spacing: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.scenario-type-editor colgroup {\n  width: 100%;\n}\n.scenario-type-editor th {\n  text-align: left;\n  font-weight: bold;\n}\n.scenario-type-editor fieldset {\n  margin: 5px;\n  margin-bottom: 15px;\n  padding: 5px;\n}\n.scenario-type-editor legend {\n  padding-left: 5px;\n  font-weight: bold;\n}\n.scenario-type-editor button {\n  background-color: white;\n}\n.scenario-type-editor button.swap-btn {\n  font-size: smaller;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 3px;\n  padding-right: 3px;\n  border-radius: 0;\n}\n.scenario-type-editor button.delete-btn {\n  background-color: red;\n  color: white;\n  border: 1px solid red;\n  font-size: smaller;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 3px;\n  padding-right: 3px;\n  border-radius: 0;\n}\n.scenario-type-editor button.add-btn {\n  margin-left: 10px;\n  color: white;\n  background-color: green;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 3px;\n  padding-right: 3px;\n  border: 1px solid green;\n  border-radius: 0;\n}\n.scenario-type-editor button.save-btn {\n  background-color: red;\n  color: white;\n  flex: 1;\n  justify-content: flex-end;\n  flex-grow: 0;\n}\n.scenario-type-editor .breadcrumbs {\n  border: 1px solid black;\n  padding: 2px;\n  margin-bottom: 20px;\n}\n.scenario-type-editor .details-editor table {\n  border: 0;\n}\n.scenario-type-editor .inline-editor table {\n  border-bottom: 0;\n}\n.scenario-type-editor .inline-editor thead {\n  background-color: lightgray;\n}\n.scenario-type-editor .inline-editor th {\n  border-bottom: 1px solid black;\n}\n.scenario-type-editor .add-entity table {\n  border: 0;\n}\n.scenario-type-editor .add-entity thead {\n  background-color: white;\n}\n.scenario-type-editor .add-entity th {\n  border-bottom: 0;\n}\n.scenario-type-editor .add-entity td {\n  vertical-align: top;\n}\n.scenario-type-editor .err-msg {\n  color: red;\n}\n.scenario-type-editor .save-button-wrapper {\n  display: flex;\n  flex-flow: row-reverse;\n}\n.scenario-type-editor #tab-selector {\n  display: flex;\n  flex-flow: row wrap;\n  background-color: #353535;\n}\n.scenario-type-editor #tab-selector button {\n  all: unset;\n}\n.scenario-type-editor #tab-selector .active-tab {\n  background-color: #222;\n}\n.scenario-type-editor #tab-selector .tab-button {\n  color: #ddd;\n  cursor: pointer;\n  padding: 0.75em 1.25em;\n}\n.scenario-type-editor #tab-selector .tab-button:hover {\n  background-color: #222;\n}", '', {"version":3,"sources":["/Users/user/Projects/monorepo/apps/data-entry/src/styles/scenario-type.scss","/Users/user/Projects/monorepo/apps/data-entry/src/styles/_variables.scss"],"names":[],"mappings":"AAII;EACI,iBAAA;AAHR;AAMI;EACI,aAAA;AAJR;AAOI;EACI,WAAA;EACA,uBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AALR;AAOI;EACI,WAAA;AALR;AAOI;EACI,gBAAA;EACA,iBAAA;AALR;AAQI;EACI,WAAA;EACA,mBAAA;EACA,YAAA;AANR;AAQI;EACI,iBAAA;EACA,iBAAA;AANR;AAQI;EACI,uBAAA;AANR;AAcI;EACI,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAZR;AAeI;EAEI,qBAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAdR;AAiBI;EACI,iBAAA;EACA,YAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,gBAAA;AAfR;AAkBI;EACI,qBAAA;EACA,YAAA;EACA,OAAA;EACA,yBAAA;EAEA,YAAA;AAjBR;AAoBI;EACI,uBAAA;EACA,YAAA;EACA,mBAAA;AAlBR;AAsBQ;EACI,SAAA;AApBZ;AAwBQ;EACI,gBAAA;AAtBZ;AAwBQ;EACI,2BAAA;AAtBZ;AAwBQ;EACI,8BAAA;AAtBZ;AA0BQ;EACI,SAAA;AAxBZ;AA0BQ;EACI,uBAAA;AAxBZ;AA0BQ;EACI,gBAAA;AAxBZ;AA0BQ;EACI,mBAAA;AAxBZ;AA4BI;EACI,UAAA;AA1BR;AA6BI;EACI,aAAA;EACA,sBAAA;AA3BR;AA8BI;EACI,aAAA;EACA,mBAAA;EACA,yBCzIO;AD6Gf;AA8BQ;EACI,UAAA;AA5BZ;AA+BQ;EACI,sBC/IE;ADkHd;AAgCQ;EACI,WAAA;EACA,eAAA;EACA,sBAAA;AA9BZ;AAgCY;EACI,sBCxJF;AD0Hd","sourcesContent":["@import 'variables';\n\n.scenario-type-editor {\n\n    b {\n        font-weight: bold;\n    }\n\n    a {\n        color: purple;\n    }\n\n    table {\n        width: 100%;\n        border: 1px solid black;\n        border-spacing: 0;\n        margin-top: 5px;\n        margin-bottom: 5px;\n    }\n    colgroup {\n        width: 100%;\n    }\n    th {\n        text-align: left;\n        font-weight: bold;\n    }\n\n    fieldset {\n        margin: 5px;\n        margin-bottom: 15px;\n        padding: 5px;\n    }\n    legend {\n        padding-left: 5px;\n        font-weight: bold;\n    }\n    button {\n        background-color: white;\n    }\n\n    // button:disabled {\n    //     background-color: lightgray;\n    //     pointer-events: none;\n    // }\n\n    button.swap-btn {\n        font-size: smaller;\n        padding-top: 2px;\n        padding-bottom: 2px;\n        padding-left: 3px;\n        padding-right: 3px;\n        border-radius: 0;\n    }\n\n    button.delete-btn {\n        // margin-left: 10px;\n        background-color: red;\n        color: white;\n        border: 1px solid red;\n        font-size: smaller;\n        padding-top: 1px;\n        padding-bottom: 1px;\n        padding-left: 3px;\n        padding-right: 3px;\n        border-radius: 0;\n    }\n\n    button.add-btn {\n        margin-left: 10px;\n        color: white;\n        background-color: green;\n        padding-top: 0;\n        padding-bottom: 0;\n        padding-left: 3px;\n        padding-right: 3px;\n        border: 1px solid green;\n        border-radius: 0;\n    }\n\n    button.save-btn {\n        background-color: red;\n        color: white;\n        flex: 1;\n        justify-content: flex-end;\n        // width: 60px;\n        flex-grow: 0;\n    }\n\n    .breadcrumbs {\n        border: 1px solid black;\n        padding: 2px;\n        margin-bottom: 20px;\n    }\n\n    .details-editor {\n        table {\n            border: 0;\n        }\n    }\n    .inline-editor {\n        table {\n            border-bottom: 0;\n        }\n        thead {\n            background-color: lightgray;\n        }\n        th {\n            border-bottom: 1px solid black;\n        }\n    }\n    .add-entity {\n        table {\n            border: 0;\n        }\n        thead {\n            background-color: white;\n        }\n        th {\n            border-bottom: 0;\n        }\n        td {\n            vertical-align: top;\n        }\n    }\n\n    .err-msg {\n        color: red;\n    }\n\n    .save-button-wrapper {\n        display: flex;\n        flex-flow: row-reverse;\n    }\n\n    #tab-selector {\n        display: flex;\n        flex-flow: row wrap;\n        background-color: $header-color;\n\n        button {\n            all: unset;\n        }\n\n        .active-tab {\n            background-color: $header-dark;\n        }\n\n        .tab-button {\n            color: #ddd;\n            cursor: pointer;\n            padding: 0.75em 1.25em;\n\n            &:hover {\n                background-color: $header-dark;\n            }\n        }\n    }\n\n}\n","$header-color: #353535;\n$header-dark: #222;\n$pastel-blue: rgb(90, 90, 195);\n$light-blue: rgb(150, 150, 255);"],"sourceRoot":""}]]

/***/ }),

/***/ 2165:
/***/ ((module) => {

module.exports = [[module.id, ".tab-notebook {\n  background-color: #222;\n  width: 100%;\n  height: 100%;\n}\n.tab-notebook .tab-list {\n  width: 100%;\n  height: 50px;\n}\n.tab-notebook .tab-list .tab-button {\n  position: relative;\n  background-color: darkgray;\n  color: white;\n}\n.tab-notebook .tab-list .tab-button .change-indicator {\n  position: absolute;\n  top: -15px;\n  right: 5px;\n  font-size: xx-large;\n  color: white;\n}\n.tab-notebook .tab-list .tab-button.active {\n  background-color: royalblue;\n}\n.tab-notebook .tabs-content {\n  display: block;\n  width: 100%;\n  height: calc(100% - 50px);\n  background-color: white;\n}\n.tab-notebook .tabs-content .tab-pane {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}", '', {"version":3,"sources":["/Users/user/Projects/monorepo/apps/data-entry/src/styles/tab-styles.scss","/Users/user/Projects/monorepo/apps/data-entry/src/styles/_variables.scss"],"names":[],"mappings":"AAEA;EACI,sBCFU;EDGV,WAAA;EACA,YAAA;AADJ;AAGI;EACI,WAAA;EACA,YAAA;AADR;AAGQ;EACI,kBAAA;EACA,0BAAA;EACA,YAAA;AADZ;AAGY;EACI,kBAAA;EACA,UAAA;EACA,UAAA;EACA,mBAAA;EACA,YAAA;AADhB;AAGY;EACI,2BAAA;AADhB;AAMI;EACI,cAAA;EACA,WAAA;EACA,yBAAA;EACA,uBAAA;AAJR;AAMQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;AAJZ","sourcesContent":["@import 'variables';\n\n.tab-notebook {\n    background-color: $header-dark;\n    width: 100%;\n    height: 100%;\n\n    .tab-list {\n        width: 100%;\n        height: 50px;\n\n        .tab-button {\n            position: relative;\n            background-color: darkgray;\n            color: white;\n\n            .change-indicator {\n                position: absolute;\n                top: -15px;\n                right: 5px;\n                font-size: xx-large;\n                color: white;\n            }\n            &.active {\n                background-color: royalblue;\n            }\n        }\n\n    }\n    .tabs-content {\n        display: block;\n        width: 100%;\n        height: calc(100% - 50px);\n        background-color: white;\n\n        .tab-pane {\n            width: 100%;\n            height: 100%;\n            padding: 10px;\n        }\n\n    }\n}","$header-color: #353535;\n$header-dark: #222;\n$pastel-blue: rgb(90, 90, 195);\n$light-blue: rgb(150, 150, 255);"],"sourceRoot":""}]]

/***/ }),

/***/ 1781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var SvgCollapse = function SvgCollapse(_ref, ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 339.411 339.411",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon", {
    points: "339.411,21.213 318.198,0 226.274,91.924 176.022,41.672 176.022,163.596 297.946,163.596 247.487,113.137  "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon", {
    points: "163.595,176.022 41.672,176.022 91.924,226.275 0,318.198 21.213,339.411 113.137,247.488 163.596,297.947  "
  }))));
};

var ForwardRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(SvgCollapse);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZwoJdmVyc2lvbj0iMS4xIgoJaWQ9IkxheWVyXzEiCgl4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgl4PSIwcHgiCgl5PSIwcHgiCgl2aWV3Qm94PSIwIDAgMzM5LjQxMSAzMzkuNDExIgo+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjMzOS40MTEsMjEuMjEzIDMxOC4xOTgsMCAyMjYuMjc0LDkxLjkyNCAxNzYuMDIyLDQxLjY3MiAxNzYuMDIyLDE2My41OTYgMjk3Ljk0NiwxNjMuNTk2IDI0Ny40ODcsMTEzLjEzNyAJIi8+CgkJPHBvbHlnb24gcG9pbnRzPSIxNjMuNTk1LDE3Ni4wMjIgNDEuNjcyLDE3Ni4wMjIgOTEuOTI0LDIyNi4yNzUgMCwzMTguMTk4IDIxLjIxMywzMzkuNDExIDExMy4xMzcsMjQ3LjQ4OCAxNjMuNTk2LDI5Ny45NDcgCSIvPgoJPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactComponent": () => (/* binding */ ForwardRef),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

var _excluded = ["title", "titleId"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var SvgExpand = function SvgExpand(_ref, ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 352.054 352.054",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon", {
    points: "144.206,186.634 30,300.84 30,238.059 0,238.059 0,352.054 113.995,352.054 113.995,322.054 51.212,322.054 165.419,207.847"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon", {
    points: "238.059,0 238.059,30 300.84,30 186.633,144.208 207.846,165.42 322.054,51.213 322.054,113.995 352.054,113.995 352.054,0"
  }))));
};

var ForwardRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(SvgExpand);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZwoJdmVyc2lvbj0iMS4xIgoJaWQ9IkxheWVyXzEiCgl4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgl4PSIwcHgiCgl5PSIwcHgiCgl2aWV3Qm94PSIwIDAgMzUyLjA1NCAzNTIuMDU0Igo+Cgk8Zz4KCQk8cG9seWdvbgoJCQlwb2ludHM9IjE0NC4yMDYsMTg2LjYzNCAzMCwzMDAuODQgMzAsMjM4LjA1OSAwLDIzOC4wNTkgMCwzNTIuMDU0IDExMy45OTUsMzUyLjA1NCAxMTMuOTk1LDMyMi4wNTQgNTEuMjEyLDMyMi4wNTQgMTY1LjQxOSwyMDcuODQ3IgoJCS8+CgkJPHBvbHlnb24KCQkJcG9pbnRzPSIyMzguMDU5LDAgMjM4LjA1OSwzMCAzMDAuODQsMzAgMTg2LjYzMywxNDQuMjA4IDIwNy44NDYsMTY1LjQyIDMyMi4wNTQsNTEuMjEzIDMyMi4wNTQsMTEzLjk5NSAzNTIuMDU0LDExMy45OTUgMzUyLjA1NCwwIgoJCS8+Cgk8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 4292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"auth-styles_container__10AGD","container-fluid":"auth-styles_container-fluid__fwIkl","container-xl":"auth-styles_container-xl__3ys0F","container-lg":"auth-styles_container-lg__5IrFs","container-md":"auth-styles_container-md__30y2c","container-sm":"auth-styles_container-sm__3rV-I","row":"auth-styles_row__2mDwO","no-gutters":"auth-styles_no-gutters__2JKk5","col":"auth-styles_col__3ldCj","col-xl":"auth-styles_col-xl__2Y9VE","col-xl-auto":"auth-styles_col-xl-auto__1NU79","col-xl-12":"auth-styles_col-xl-12__2cHm3","col-xl-11":"auth-styles_col-xl-11__3NJtT","col-xl-10":"auth-styles_col-xl-10__2KsYU","col-xl-9":"auth-styles_col-xl-9__1xLiS","col-xl-8":"auth-styles_col-xl-8__3erd8","col-xl-7":"auth-styles_col-xl-7__2fcIl","col-xl-6":"auth-styles_col-xl-6__1sdz8","col-xl-5":"auth-styles_col-xl-5__3RtO0","col-xl-4":"auth-styles_col-xl-4__1Tdlx","col-xl-3":"auth-styles_col-xl-3__1eyqY","col-xl-2":"auth-styles_col-xl-2__3Q8G3","col-xl-1":"auth-styles_col-xl-1__2L8ID","col-lg":"auth-styles_col-lg__27OgK","col-lg-auto":"auth-styles_col-lg-auto__37EzL","col-lg-12":"auth-styles_col-lg-12__1UdqO","col-lg-11":"auth-styles_col-lg-11__WDNJE","col-lg-10":"auth-styles_col-lg-10__1Q9Mt","col-lg-9":"auth-styles_col-lg-9__1sq-o","col-lg-8":"auth-styles_col-lg-8__3Opus","col-lg-7":"auth-styles_col-lg-7__2bxn2","col-lg-6":"auth-styles_col-lg-6__1R-_o","col-lg-5":"auth-styles_col-lg-5__keq_w","col-lg-4":"auth-styles_col-lg-4__BOl7q","col-lg-3":"auth-styles_col-lg-3__c4ose","col-lg-2":"auth-styles_col-lg-2__2Ldvo","col-lg-1":"auth-styles_col-lg-1__2eOCB","col-md":"auth-styles_col-md__280Kr","col-md-auto":"auth-styles_col-md-auto__3b9B1","col-md-12":"auth-styles_col-md-12__1d6nc","col-md-11":"auth-styles_col-md-11__3dcqK","col-md-10":"auth-styles_col-md-10__rLZ-p","col-md-9":"auth-styles_col-md-9__OvPfP","col-md-8":"auth-styles_col-md-8__3WMD0","col-md-7":"auth-styles_col-md-7__2oSlY","col-md-6":"auth-styles_col-md-6__3peJd","col-md-5":"auth-styles_col-md-5__31sX_","col-md-4":"auth-styles_col-md-4__2J1-h","col-md-3":"auth-styles_col-md-3__1KjCA","col-md-2":"auth-styles_col-md-2__-yWxg","col-md-1":"auth-styles_col-md-1__VXFTn","col-sm":"auth-styles_col-sm__2ySNy","col-sm-auto":"auth-styles_col-sm-auto__1qooL","col-sm-12":"auth-styles_col-sm-12__2oSEw","col-sm-11":"auth-styles_col-sm-11__1GFbu","col-sm-10":"auth-styles_col-sm-10__3xeeR","col-sm-9":"auth-styles_col-sm-9__2G2BH","col-sm-8":"auth-styles_col-sm-8__16wvo","col-sm-7":"auth-styles_col-sm-7__8Gwhq","col-sm-6":"auth-styles_col-sm-6__2PLpR","col-sm-5":"auth-styles_col-sm-5__3FYYp","col-sm-4":"auth-styles_col-sm-4__vU45W","col-sm-3":"auth-styles_col-sm-3__2rUc2","col-sm-2":"auth-styles_col-sm-2__3tlGJ","col-sm-1":"auth-styles_col-sm-1__1gSFk","col-auto":"auth-styles_col-auto__mOtLf","col-12":"auth-styles_col-12__HkJhz","col-11":"auth-styles_col-11__1TZkf","col-10":"auth-styles_col-10__2PHE5","col-9":"auth-styles_col-9__3upp1","col-8":"auth-styles_col-8__3OMmH","col-7":"auth-styles_col-7__3y0BG","col-6":"auth-styles_col-6__z2OvX","col-5":"auth-styles_col-5__1bmv4","col-4":"auth-styles_col-4__ooaUD","col-3":"auth-styles_col-3__3md1A","col-2":"auth-styles_col-2__ZG0mP","col-1":"auth-styles_col-1__3vw5D","row-cols-1":"auth-styles_row-cols-1__1FgYA","row-cols-2":"auth-styles_row-cols-2__T22x2","row-cols-3":"auth-styles_row-cols-3__33SFY","row-cols-4":"auth-styles_row-cols-4__1Upyr","row-cols-5":"auth-styles_row-cols-5__3s0l2","row-cols-6":"auth-styles_row-cols-6__195mx","order-first":"auth-styles_order-first__32Xyg","order-last":"auth-styles_order-last__1gpEV","order-0":"auth-styles_order-0__37anm","order-1":"auth-styles_order-1__1cYTz","order-2":"auth-styles_order-2__2WgEu","order-3":"auth-styles_order-3__1c1Ge","order-4":"auth-styles_order-4__7ses6","order-5":"auth-styles_order-5__OPIHT","order-6":"auth-styles_order-6__2EExL","order-7":"auth-styles_order-7__-LNNy","order-8":"auth-styles_order-8__17xHi","order-9":"auth-styles_order-9__3KedA","order-10":"auth-styles_order-10__2Rcp7","order-11":"auth-styles_order-11__1ldSL","order-12":"auth-styles_order-12__QYXvE","offset-1":"auth-styles_offset-1__S_yky","offset-2":"auth-styles_offset-2__3L8fT","offset-3":"auth-styles_offset-3__1R6FV","offset-4":"auth-styles_offset-4__1uA9L","offset-5":"auth-styles_offset-5__2pHj2","offset-6":"auth-styles_offset-6__1WM7j","offset-7":"auth-styles_offset-7__2l8T6","offset-8":"auth-styles_offset-8__2PX1q","offset-9":"auth-styles_offset-9__NHkNE","offset-10":"auth-styles_offset-10__3A8Zk","offset-11":"auth-styles_offset-11__q7vhc","row-cols-sm-1":"auth-styles_row-cols-sm-1__2IW8N","row-cols-sm-2":"auth-styles_row-cols-sm-2__2TmMR","row-cols-sm-3":"auth-styles_row-cols-sm-3__1Bcpm","row-cols-sm-4":"auth-styles_row-cols-sm-4__2Jgca","row-cols-sm-5":"auth-styles_row-cols-sm-5__1wTaB","row-cols-sm-6":"auth-styles_row-cols-sm-6__N7dM_","order-sm-first":"auth-styles_order-sm-first__1LHjA","order-sm-last":"auth-styles_order-sm-last__1OG2P","order-sm-0":"auth-styles_order-sm-0__3VAGC","order-sm-1":"auth-styles_order-sm-1__3zlDN","order-sm-2":"auth-styles_order-sm-2__2Id98","order-sm-3":"auth-styles_order-sm-3__15b2I","order-sm-4":"auth-styles_order-sm-4__170Pr","order-sm-5":"auth-styles_order-sm-5__1TtxJ","order-sm-6":"auth-styles_order-sm-6__9pb2G","order-sm-7":"auth-styles_order-sm-7__SIm6q","order-sm-8":"auth-styles_order-sm-8__2t0hf","order-sm-9":"auth-styles_order-sm-9__17vw7","order-sm-10":"auth-styles_order-sm-10__31bMw","order-sm-11":"auth-styles_order-sm-11__2ReIr","order-sm-12":"auth-styles_order-sm-12__1ViJl","offset-sm-0":"auth-styles_offset-sm-0__UP_Ye","offset-sm-1":"auth-styles_offset-sm-1__3svSJ","offset-sm-2":"auth-styles_offset-sm-2__3POI4","offset-sm-3":"auth-styles_offset-sm-3__1w0kW","offset-sm-4":"auth-styles_offset-sm-4__3JWGY","offset-sm-5":"auth-styles_offset-sm-5__2EEPf","offset-sm-6":"auth-styles_offset-sm-6__22GCC","offset-sm-7":"auth-styles_offset-sm-7__2q_3d","offset-sm-8":"auth-styles_offset-sm-8__2HZtt","offset-sm-9":"auth-styles_offset-sm-9__2Y-bk","offset-sm-10":"auth-styles_offset-sm-10__3jNcV","offset-sm-11":"auth-styles_offset-sm-11__3Q0ul","row-cols-md-1":"auth-styles_row-cols-md-1__xFmDr","row-cols-md-2":"auth-styles_row-cols-md-2__qZ_pn","row-cols-md-3":"auth-styles_row-cols-md-3__3uzyG","row-cols-md-4":"auth-styles_row-cols-md-4__1xY6o","row-cols-md-5":"auth-styles_row-cols-md-5__ir_PD","row-cols-md-6":"auth-styles_row-cols-md-6__37Dx8","order-md-first":"auth-styles_order-md-first__PXmJ9","order-md-last":"auth-styles_order-md-last__18UQ7","order-md-0":"auth-styles_order-md-0__RcECW","order-md-1":"auth-styles_order-md-1__3Ixnl","order-md-2":"auth-styles_order-md-2__m1tAM","order-md-3":"auth-styles_order-md-3__QDe0k","order-md-4":"auth-styles_order-md-4__31o0n","order-md-5":"auth-styles_order-md-5__3WXPf","order-md-6":"auth-styles_order-md-6__3ULOf","order-md-7":"auth-styles_order-md-7__3VjfE","order-md-8":"auth-styles_order-md-8__3u3G9","order-md-9":"auth-styles_order-md-9__20_DE","order-md-10":"auth-styles_order-md-10__3nlP7","order-md-11":"auth-styles_order-md-11__21LDw","order-md-12":"auth-styles_order-md-12__k3d-a","offset-md-0":"auth-styles_offset-md-0__328EE","offset-md-1":"auth-styles_offset-md-1__1Pv38","offset-md-2":"auth-styles_offset-md-2__EkZRk","offset-md-3":"auth-styles_offset-md-3__1QwfK","offset-md-4":"auth-styles_offset-md-4__2qkvS","offset-md-5":"auth-styles_offset-md-5__2-1Sl","offset-md-6":"auth-styles_offset-md-6__1foUV","offset-md-7":"auth-styles_offset-md-7__1lT_G","offset-md-8":"auth-styles_offset-md-8__3LqIe","offset-md-9":"auth-styles_offset-md-9__2NZK4","offset-md-10":"auth-styles_offset-md-10__1-I-n","offset-md-11":"auth-styles_offset-md-11__30FC1","row-cols-lg-1":"auth-styles_row-cols-lg-1__2BeEB","row-cols-lg-2":"auth-styles_row-cols-lg-2__1-duX","row-cols-lg-3":"auth-styles_row-cols-lg-3__1Ppur","row-cols-lg-4":"auth-styles_row-cols-lg-4__vslwG","row-cols-lg-5":"auth-styles_row-cols-lg-5__34Bqy","row-cols-lg-6":"auth-styles_row-cols-lg-6__17nYq","order-lg-first":"auth-styles_order-lg-first__2KPTW","order-lg-last":"auth-styles_order-lg-last__sd62e","order-lg-0":"auth-styles_order-lg-0__14g0P","order-lg-1":"auth-styles_order-lg-1__1-Fi6","order-lg-2":"auth-styles_order-lg-2__1UeSK","order-lg-3":"auth-styles_order-lg-3__2Bnqq","order-lg-4":"auth-styles_order-lg-4__3wLF4","order-lg-5":"auth-styles_order-lg-5__3BWET","order-lg-6":"auth-styles_order-lg-6__22vzu","order-lg-7":"auth-styles_order-lg-7__1q4YC","order-lg-8":"auth-styles_order-lg-8__2Wn2X","order-lg-9":"auth-styles_order-lg-9__2zwR0","order-lg-10":"auth-styles_order-lg-10__3S5Kf","order-lg-11":"auth-styles_order-lg-11__3lViv","order-lg-12":"auth-styles_order-lg-12__1HbM4","offset-lg-0":"auth-styles_offset-lg-0__3vXRO","offset-lg-1":"auth-styles_offset-lg-1__1qpeE","offset-lg-2":"auth-styles_offset-lg-2__2VlLm","offset-lg-3":"auth-styles_offset-lg-3__29oiZ","offset-lg-4":"auth-styles_offset-lg-4__3zPy2","offset-lg-5":"auth-styles_offset-lg-5__3NNON","offset-lg-6":"auth-styles_offset-lg-6__14HL7","offset-lg-7":"auth-styles_offset-lg-7__fw7as","offset-lg-8":"auth-styles_offset-lg-8__26zm0","offset-lg-9":"auth-styles_offset-lg-9__3lGAr","offset-lg-10":"auth-styles_offset-lg-10__1jr81","offset-lg-11":"auth-styles_offset-lg-11__SABrM","row-cols-xl-1":"auth-styles_row-cols-xl-1__2KEIY","row-cols-xl-2":"auth-styles_row-cols-xl-2__2Q9jD","row-cols-xl-3":"auth-styles_row-cols-xl-3__serpJ","row-cols-xl-4":"auth-styles_row-cols-xl-4__17lXh","row-cols-xl-5":"auth-styles_row-cols-xl-5__se3PY","row-cols-xl-6":"auth-styles_row-cols-xl-6__3Dv0I","order-xl-first":"auth-styles_order-xl-first__2cXN7","order-xl-last":"auth-styles_order-xl-last__3Bu_n","order-xl-0":"auth-styles_order-xl-0__QNT-4","order-xl-1":"auth-styles_order-xl-1__2uJW9","order-xl-2":"auth-styles_order-xl-2__1urQz","order-xl-3":"auth-styles_order-xl-3__HrnTR","order-xl-4":"auth-styles_order-xl-4__lqyBd","order-xl-5":"auth-styles_order-xl-5__1boyL","order-xl-6":"auth-styles_order-xl-6__2ljrn","order-xl-7":"auth-styles_order-xl-7__sAp62","order-xl-8":"auth-styles_order-xl-8__3QIeu","order-xl-9":"auth-styles_order-xl-9__30U3w","order-xl-10":"auth-styles_order-xl-10__1ST15","order-xl-11":"auth-styles_order-xl-11__pbkTF","order-xl-12":"auth-styles_order-xl-12__1s6HJ","offset-xl-0":"auth-styles_offset-xl-0__1BSft","offset-xl-1":"auth-styles_offset-xl-1__2paww","offset-xl-2":"auth-styles_offset-xl-2__6PmLy","offset-xl-3":"auth-styles_offset-xl-3__3Z-Tv","offset-xl-4":"auth-styles_offset-xl-4__2FFWB","offset-xl-5":"auth-styles_offset-xl-5__31OSu","offset-xl-6":"auth-styles_offset-xl-6__3s_gh","offset-xl-7":"auth-styles_offset-xl-7__uzLWG","offset-xl-8":"auth-styles_offset-xl-8__MUIfK","offset-xl-9":"auth-styles_offset-xl-9__3FedX","offset-xl-10":"auth-styles_offset-xl-10__6N_6d","offset-xl-11":"auth-styles_offset-xl-11__jdWF2","form-control":"auth-styles_form-control__TWWjx","form-control-file":"auth-styles_form-control-file__2hM0e","form-control-range":"auth-styles_form-control-range__1L_5t","col-form-label":"auth-styles_col-form-label__nwIeC","col-form-label-lg":"auth-styles_col-form-label-lg__3_NoG","col-form-label-sm":"auth-styles_col-form-label-sm__30gfe","form-control-plaintext":"auth-styles_form-control-plaintext__35RzL","form-control-sm":"auth-styles_form-control-sm__2XZXA","form-control-lg":"auth-styles_form-control-lg__3X3MG","form-group":"auth-styles_form-group__11rq4","form-text":"auth-styles_form-text__2dVxs","form-row":"auth-styles_form-row__kAOLu","form-check":"auth-styles_form-check__2OFdL","form-check-input":"auth-styles_form-check-input__3P2bC","form-check-label":"auth-styles_form-check-label__1v1JV","form-check-inline":"auth-styles_form-check-inline__3rsW7","valid-feedback":"auth-styles_valid-feedback__1_T7-","valid-tooltip":"auth-styles_valid-tooltip__dSCQM","was-validated":"auth-styles_was-validated__1foJB","is-valid":"auth-styles_is-valid__30FJs","custom-select":"auth-styles_custom-select__EDd2g","custom-control-input":"auth-styles_custom-control-input__34O46","custom-control-label":"auth-styles_custom-control-label__3M8RN","custom-file-input":"auth-styles_custom-file-input__24wnE","custom-file-label":"auth-styles_custom-file-label__b7a1j","invalid-feedback":"auth-styles_invalid-feedback__mhQo-","invalid-tooltip":"auth-styles_invalid-tooltip__DQUyl","is-invalid":"auth-styles_is-invalid__2jvIP","form-inline":"auth-styles_form-inline__2VVKx","input-group":"auth-styles_input-group__1a2ep","custom-control":"auth-styles_custom-control__1rlbV","btn":"auth-styles_btn__2MeMF","focus":"auth-styles_focus__3tRPo","disabled":"auth-styles_disabled__3SfTf","btn-primary":"auth-styles_btn-primary__2kI78","active":"auth-styles_active__j6Q1A","show":"auth-styles_show__1auI0","dropdown-toggle":"auth-styles_dropdown-toggle__BJr6U","btn-secondary":"auth-styles_btn-secondary__3c7Cl","btn-success":"auth-styles_btn-success__3k5kU","btn-info":"auth-styles_btn-info__1Jo-l","btn-warning":"auth-styles_btn-warning__kZ8UD","btn-danger":"auth-styles_btn-danger__3hHi0","btn-light":"auth-styles_btn-light__35KKO","btn-dark":"auth-styles_btn-dark__2qjsW","btn-outline-primary":"auth-styles_btn-outline-primary__l7U0o","btn-outline-secondary":"auth-styles_btn-outline-secondary__1Y7Jb","btn-outline-success":"auth-styles_btn-outline-success__bORqD","btn-outline-info":"auth-styles_btn-outline-info__3xoZY","btn-outline-warning":"auth-styles_btn-outline-warning__2yk0b","btn-outline-danger":"auth-styles_btn-outline-danger__2lsp0","btn-outline-light":"auth-styles_btn-outline-light__PFtsK","btn-outline-dark":"auth-styles_btn-outline-dark__26zGm","btn-link":"auth-styles_btn-link__2ucDw","btn-lg":"auth-styles_btn-lg__2IBeZ","btn-sm":"auth-styles_btn-sm__YTkcH","btn-block":"auth-styles_btn-block__3afcY","custom-file":"auth-styles_custom-file__3ftOJ","has-validation":"auth-styles_has-validation__2_Ce9","input-group-prepend":"auth-styles_input-group-prepend__1qaRA","input-group-append":"auth-styles_input-group-append__3pS8K","input-group-text":"auth-styles_input-group-text__1Qb29","input-group-lg":"auth-styles_input-group-lg__1wXEc","input-group-sm":"auth-styles_input-group-sm__18rhn","text-monospace":"auth-styles_text-monospace__1X9A_","text-justify":"auth-styles_text-justify__10_Ve","text-wrap":"auth-styles_text-wrap__1WwEN","text-nowrap":"auth-styles_text-nowrap__1brBE","text-truncate":"auth-styles_text-truncate__2sYj6","text-left":"auth-styles_text-left__2Svts","text-right":"auth-styles_text-right__2_2vI","text-center":"auth-styles_text-center__1z62y","text-sm-left":"auth-styles_text-sm-left__rDHNS","text-sm-right":"auth-styles_text-sm-right__2Q3uT","text-sm-center":"auth-styles_text-sm-center__14hl_","text-md-left":"auth-styles_text-md-left__3qN5c","text-md-right":"auth-styles_text-md-right__2_J53","text-md-center":"auth-styles_text-md-center__35czq","text-lg-left":"auth-styles_text-lg-left__2hmZb","text-lg-right":"auth-styles_text-lg-right__3ow46","text-lg-center":"auth-styles_text-lg-center__1c_KS","text-xl-left":"auth-styles_text-xl-left__GAexL","text-xl-right":"auth-styles_text-xl-right__1lwhB","text-xl-center":"auth-styles_text-xl-center__1Y5yA","text-lowercase":"auth-styles_text-lowercase__2WcMH","text-uppercase":"auth-styles_text-uppercase__EUzPY","text-capitalize":"auth-styles_text-capitalize__2JLp5","font-weight-light":"auth-styles_font-weight-light__OLEh9","font-weight-lighter":"auth-styles_font-weight-lighter__sWCNg","font-weight-normal":"auth-styles_font-weight-normal__229q5","font-weight-bold":"auth-styles_font-weight-bold__1pMRf","font-weight-bolder":"auth-styles_font-weight-bolder__95d11","font-italic":"auth-styles_font-italic__2jtAw","text-white":"auth-styles_text-white__1N8Wd","text-primary":"auth-styles_text-primary__1qUwM","text-secondary":"auth-styles_text-secondary__2B2Ge","text-success":"auth-styles_text-success__3b9Jf","text-info":"auth-styles_text-info__jr8Pv","text-warning":"auth-styles_text-warning__3P8Kl","text-danger":"auth-styles_text-danger__eLgOG","text-light":"auth-styles_text-light__33Ovy","text-dark":"auth-styles_text-dark__RWLO_","text-body":"auth-styles_text-body__3rlQl","text-muted":"auth-styles_text-muted__20KiX","text-black-50":"auth-styles_text-black-50__3ivKm","text-white-50":"auth-styles_text-white-50__1hVag","text-hide":"auth-styles_text-hide__3xzc6","text-decoration-none":"auth-styles_text-decoration-none__3NGqL","text-break":"auth-styles_text-break__2ghoE","text-reset":"auth-styles_text-reset__2elij"});

/***/ }),

/***/ 7303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4781);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_checklist_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 2478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4912);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_class_codes_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 6785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5943);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_default_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 9945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4846);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_home_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 9497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5848);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_medications_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 2118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7032);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_editor_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 9938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8881);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_scenario_type_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4036);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6793);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7892);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2464);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2165);
/* harmony import */ var _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_nrwl_web_src_utils_webpack_plugins_raw_css_loader_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_oneOf_5_use_3_tab_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ 9526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseContext": () => (/* binding */ FirebaseContext),
/* harmony export */   "useFirebase": () => (/* binding */ useFirebase),
/* harmony export */   "useFirebaseProject": () => (/* binding */ useFirebaseProject)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9748);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2094);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8790);



 // simple switch returning the config for one one of meddbriefer.orgs firebase projects,
// defaults to 'MedDebriefer' (production)

function getProjectConfig(projectName) {
  switch (projectName) {
    case "PamDev":
      return {
        apiKey: "AIzaSyB9eVT-fu4TOjxHoPAXqsnz9tCcbTJkTOw",
        authDomain: "pamdev-ea800.firebaseapp.com",
        projectId: "pamdev-ea800",
        storageBucket: "pamdev-ea800.appspot.com",
        messagingSenderId: "366450927885",
        appId: "1:366450927885:web:caa5f022ef1de182a0e844",
        measurementId: "G-JC5XZEPYT1"
      };

    case "ScottDev":
      return {
        apiKey: "AIzaSyBEhbIdVW2F2vvvfvpNb2SsCDP9Yoc__z8",
        authDomain: "scottdev-f6528.firebaseapp.com",
        projectId: "scottdev-f6528",
        storageBucket: "scottdev-f6528.appspot.com",
        messagingSenderId: "447730403122",
        appId: "1:447730403122:web:1727020dbac4ad4cf6f92b"
      };

    case "MedDBriefer-dev":
      return {
        apiKey: "AIzaSyBqnEMwEstp4D7Mvtbw9OTAiNJ7qza0Ses",
        authDomain: "meddbriefer-dev.firebaseapp.com",
        projectId: "meddbriefer-dev",
        storageBucket: "meddbriefer-dev.appspot.com",
        messagingSenderId: "144940722070",
        appId: "1:144940722070:web:4de179ebb58d84a7679fb7"
      };

    default:
      //MedDBriefer (production)
      return {
        apiKey: "AIzaSyBOgWAbXUGckpad2sk0IUo00hZsV4WxG0E",
        authDomain: "meddbriefer-68cd4.firebaseapp.com",
        projectId: "meddbriefer-68cd4",
        storageBucket: "meddbriefer-68cd4.appspot.com",
        messagingSenderId: "1087114796018",
        appId: "1:1087114796018:web:679fbab38dbf78af0ce96b",
        measurementId: "G-Q7QZKC9KHW"
      };
  }
}

const getApp = appID => {
  const matches = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].apps.filter(app => app.options.appId === appID); // console.log("matches", matches)

  return matches.length === 1 ? matches[0] : null;
};

const getOrInitializeApp = appCfg => {
  const app = getApp(appCfg.appId); // simply log which project is initialized (or about to be)

  console.log(`using ${appCfg.projectId}`); // console.log(`${appCfg.appId} already exists: ${!!app}`)

  return app ? app : firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(appCfg, appCfg.projectId);
};

function useFirebaseProject(projectName = "MedDBriefer") {
  // don't reinitialize app if it already exists
  //   projectName comes from App process.env.NX_FIREBASE_PROJECT
  //
  const projectConfig = getProjectConfig(projectName);
  const firebaseApp = getOrInitializeApp(projectConfig);
  return {
    auth: firebaseApp.auth(),
    db: firebaseApp.firestore()
  };
} // to inject firebase app into child react components

const FirebaseContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  auth: undefined,
  db: undefined
}); // for child react components to access the firebase app

const useFirebase = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FirebaseContext);

/***/ }),

/***/ 5558:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANALYSIS_TYPES": () => (/* binding */ ANALYSIS_TYPES),
/* harmony export */   "ANSWER": () => (/* binding */ ANSWER),
/* harmony export */   "ASSESS": () => (/* binding */ ASSESS),
/* harmony export */   "ASSESSO": () => (/* binding */ ASSESSO),
/* harmony export */   "ASSESS_OPTION": () => (/* binding */ ASSESS_OPTION),
/* harmony export */   "AWO": () => (/* binding */ AWO),
/* harmony export */   "CB": () => (/* binding */ CB),
/* harmony export */   "CHECKLIST_STEP_TYPES": () => (/* binding */ CHECKLIST_STEP_TYPES),
/* harmony export */   "CL_HEADING": () => (/* binding */ CL_HEADING),
/* harmony export */   "CL_PROMPT": () => (/* binding */ CL_PROMPT),
/* harmony export */   "CRIT_FAIL": () => (/* binding */ CRIT_FAIL),
/* harmony export */   "DECISION": () => (/* binding */ DECISION),
/* harmony export */   "DECISION_OPTION": () => (/* binding */ DECISION_OPTION),
/* harmony export */   "DIST_PROMPT": () => (/* binding */ DIST_PROMPT),
/* harmony export */   "HEADING": () => (/* binding */ HEADING),
/* harmony export */   "INTERV": () => (/* binding */ INTERV),
/* harmony export */   "INTV_FORM": () => (/* binding */ INTV_FORM),
/* harmony export */   "MDB_TYPES": () => (/* binding */ MDB_TYPES),
/* harmony export */   "NESTED_CHECKLIST": () => (/* binding */ NESTED_CHECKLIST),
/* harmony export */   "NONE": () => (/* binding */ NONE),
/* harmony export */   "ONE": () => (/* binding */ ONE),
/* harmony export */   "OOM": () => (/* binding */ OOM),
/* harmony export */   "OPTION": () => (/* binding */ OPTION),
/* harmony export */   "OPTION_TYPES": () => (/* binding */ OPTION_TYPES),
/* harmony export */   "PHASE": () => (/* binding */ PHASE),
/* harmony export */   "PREFIXES": () => (/* binding */ PREFIXES),
/* harmony export */   "PROMPT": () => (/* binding */ PROMPT),
/* harmony export */   "PROMPT_SET": () => (/* binding */ PROMPT_SET),
/* harmony export */   "PROTOCOL_RELATIONSHIPS": () => (/* binding */ PROTOCOL_RELATIONSHIPS),
/* harmony export */   "REQUIRED": () => (/* binding */ REQUIRED),
/* harmony export */   "REQURED": () => (/* binding */ REQURED),
/* harmony export */   "SELECTION_TYPES": () => (/* binding */ SELECTION_TYPES),
/* harmony export */   "SELECTION_TYPE_LABELS": () => (/* binding */ SELECTION_TYPE_LABELS),
/* harmony export */   "SUB_PHASE": () => (/* binding */ SUB_PHASE),
/* harmony export */   "SYSTEMS": () => (/* binding */ SYSTEMS),
/* harmony export */   "SYSTEM_LABELS": () => (/* binding */ SYSTEM_LABELS)
/* harmony export */ });
// the following constants are deprecated (need to figure out how to handle this)
// use MDB_TYPES, SELECTION_TYPES, PREFIXES, and SYSTEMS instead
const ANSWER = "answer";
const ASSESS = "assessment";
const ASSESSO = "assessment-option";
const ASSESS_OPTION = "assessment-option";
const AWO = "assessment-with-options";
const CB = "checkbox";
const CL_HEADING = "checklist-heading";
const CL_PROMPT = "checklist-prompt";
const CRIT_FAIL = "critical-criteria";
const DECISION = "decision";
const DECISION_OPTION = "decision-option";
const DIST_PROMPT = "distinguishing-prompt";
const HEADING = "heading"; //not a leaf node, simply a step which has child steps

const INTERV = "intervention"; // an action performed on the patient

const INTV_FORM = "intervention-form";
const NESTED_CHECKLIST = "nested-checklist";
const NONE = "none";
const ONE = "one";
const OOM = "one-or-more";
const OOM_AND = "one-or-more-logical-and";
const OOM_OR = "one-or-more-logical-or";
const OPTION = "option";
const PHASE = "phase";
const PROMPT = "prompt";
const PROMPT_SET = "prompt-set";
const REQUIRED = "required-action"; // an action the EMT performs, but not on the patient
// keeping as I had a typo. need to deprecate somehow

const REQURED = REQUIRED;
const SUB_PHASE = "sub-phase";
const MDB_TYPES = Object.freeze({
  PHASE: PHASE,
  SUB_PHASE: SUB_PHASE,
  ASSESS: ASSESS,
  AWO: AWO,
  ASSESS_OPTION: ASSESS_OPTION,
  ASSESSO: ASSESS_OPTION,
  CL_HEADING: CL_HEADING,
  CL_PROMPT: CL_PROMPT,
  DECISION: DECISION,
  DECISION_OPTION: DECISION_OPTION,
  DIST_PROMPT: DIST_PROMPT,
  NESTED_CHECKLIST: NESTED_CHECKLIST,
  REQUIRED: REQUIRED,
  REQURED: REQUIRED,
  INTERV: INTERV,
  PROMPT_SET: PROMPT_SET,
  PROMPT: PROMPT,
  ANSWER: ANSWER
});
const SELECTION_TYPES = Object.freeze({
  ONE: ONE,
  OOM: OOM,
  OOM_AND: OOM_AND,
  OOM_OR: OOM_OR,
  NONE: NONE
});
const SELECTION_TYPE_LABELS = Object.freeze({
  "one": "One",
  "one-or-more": "One or more",
  "one-or-more-logical-and": "One or more (logical AND)",
  "one-or-more-logical-or": "One or more (logical OR)",
  "none": "None"
});
const PREFIXES = Object.freeze({
  PHASE: "",
  SUB_PHASE: "",
  ANSWER: "answer-",
  ASSESS: "assess-",
  AWO: "assessment-with-options-",
  ASSESS_OPTION: "assess-option-",
  CL_PROMPT: "cl-prompt-",
  DECISION: "decision-",
  DECISION_OPTION: "decision-option-",
  INTERV: "intv-",
  PROMPT_SET: "prompt-set-",
  PROMPT: "prompt-",
  REQUIRED: "required-action-"
});
const SYSTEMS = Object.freeze({
  AW: "airway",
  BR: "breathing",
  BL: "bleeding",
  SH: "shock",
  OTH: "other"
});
const SYSTEM_LABELS = Object.freeze({
  AW: "Airway",
  BR: "Breathing",
  BL: "Bleeding",
  SH: "Shock",
  OTH: "Other"
});
const CHECKLIST_STEP_TYPES = [ASSESS, AWO, DECISION, REQUIRED];
const OPTION_TYPES = [ASSESS_OPTION, DECISION_OPTION];
const ANALYSIS_TYPES = [ASSESS, AWO, DECISION, REQUIRED, INTERV, PHASE, SUB_PHASE];
const PROTOCOL_RELATIONSHIPS = Object.freeze({
  NONE: "",
  MIN: "minimal",
  OPT: "optional",
  REQ: "required",
  CONTRA: "contraindicated",
  UNN: "unnecessary",
  IR: "irrelevant",
  ALT: "alternative"
});

/***/ }),

/***/ 8913:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANALYSIS_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.ANALYSIS_TYPES),
/* harmony export */   "CHECKLIST_STEP_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.CHECKLIST_STEP_TYPES),
/* harmony export */   "MDB_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES),
/* harmony export */   "OPTION_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.OPTION_TYPES),
/* harmony export */   "PublishedScenario": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.PublishedScenario),
/* harmony export */   "SELECTION_TYPES": () => (/* reexport safe */ _constants_js__WEBPACK_IMPORTED_MODULE_2__.SELECTION_TYPES),
/* harmony export */   "ScenarioType": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.ScenarioType),
/* harmony export */   "createCond1Comments": () => (/* binding */ createCond1Comments),
/* harmony export */   "createCond2Debriefing": () => (/* binding */ createCond2Debriefing),
/* harmony export */   "createInterventionVariant": () => (/* binding */ createInterventionVariant),
/* harmony export */   "deleteAnaDocument": () => (/* binding */ deleteAnaDocument),
/* harmony export */   "deleteAndArchiveDocument": () => (/* binding */ deleteAndArchiveDocument),
/* harmony export */   "deleteCommentDocument": () => (/* binding */ deleteCommentDocument),
/* harmony export */   "deleteCond1CommentDocument": () => (/* binding */ deleteCond1CommentDocument),
/* harmony export */   "deleteDocument": () => (/* binding */ deleteDocument),
/* harmony export */   "deleteDocumentNoArchive": () => (/* binding */ deleteDocumentNoArchive),
/* harmony export */   "deleteObsAndAnaDocuments": () => (/* binding */ deleteObsAndAnaDocuments),
/* harmony export */   "deleteObsDocument": () => (/* binding */ deleteObsDocument),
/* harmony export */   "getAnalyses": () => (/* binding */ getAnalyses),
/* harmony export */   "getAnalysisCond1Comments": () => (/* binding */ getAnalysisCond1Comments),
/* harmony export */   "getAnalysisCond2Debriefings": () => (/* binding */ getAnalysisCond2Debriefings),
/* harmony export */   "getAnalysisLog": () => (/* binding */ getAnalysisLog),
/* harmony export */   "getCollection": () => (/* binding */ getCollection),
/* harmony export */   "getCond1CommentLog": () => (/* binding */ getCond1CommentLog),
/* harmony export */   "getCond1CommentLogs": () => (/* binding */ getCond1CommentLogs),
/* harmony export */   "getCond2DebriefingLog": () => (/* binding */ getCond2DebriefingLog),
/* harmony export */   "getDebriefCommentLog": () => (/* binding */ getDebriefCommentLog),
/* harmony export */   "getDebriefCommentLogs": () => (/* binding */ getDebriefCommentLogs),
/* harmony export */   "getDebriefLog": () => (/* binding */ getDebriefLog),
/* harmony export */   "getDebriefLogWithName": () => (/* binding */ getDebriefLogWithName),
/* harmony export */   "getDocument": () => (/* binding */ getDocument),
/* harmony export */   "getDocumentWithName": () => (/* binding */ getDocumentWithName),
/* harmony export */   "getLog": () => (/* binding */ getLog),
/* harmony export */   "getLogs": () => (/* binding */ getLogs),
/* harmony export */   "getObserverLog": () => (/* binding */ getObserverLog),
/* harmony export */   "getObserverLogAnalyses": () => (/* binding */ getObserverLogAnalyses),
/* harmony export */   "getObserverLogList": () => (/* binding */ getObserverLogList),
/* harmony export */   "getPromptAndOptions": () => (/* binding */ getPromptAndOptions),
/* harmony export */   "getPubScenarios": () => (/* binding */ getPubScenarios),
/* harmony export */   "getPublishedScenarioByID": () => (/* binding */ getPublishedScenarioByID),
/* harmony export */   "getPublishedScenarioObjectByID": () => (/* binding */ getPublishedScenarioObjectByID),
/* harmony export */   "getScenarioByID": () => (/* binding */ getScenarioByID),
/* harmony export */   "getScenarioByName": () => (/* binding */ getScenarioByName),
/* harmony export */   "getScenarioType": () => (/* binding */ getScenarioType),
/* harmony export */   "getScenarioTypeByID": () => (/* binding */ getScenarioTypeByID),
/* harmony export */   "getScenarioTypeObject": () => (/* binding */ getScenarioTypeObject),
/* harmony export */   "getScenarioTypeObjectByID": () => (/* binding */ getScenarioTypeObjectByID),
/* harmony export */   "getScenarios": () => (/* binding */ getScenarios),
/* harmony export */   "interventionVariantsAreEqual": () => (/* binding */ interventionVariantsAreEqual),
/* harmony export */   "intvVariant2JSON": () => (/* binding */ intvVariant2JSON),
/* harmony export */   "listDocumentNames": () => (/* binding */ listDocumentNames),
/* harmony export */   "loadIntvPromptAnswers": () => (/* binding */ loadIntvPromptAnswers),
/* harmony export */   "loadIntvPrompts": () => (/* binding */ loadIntvPrompts),
/* harmony export */   "loadIntvs": () => (/* binding */ loadIntvs),
/* harmony export */   "publishDocument": () => (/* binding */ publishDocument),
/* harmony export */   "saveDocument": () => (/* binding */ saveDocument),
/* harmony export */   "updateDocument": () => (/* binding */ updateDocument),
/* harmony export */   "verifyDocNameUniqueness": () => (/* binding */ verifyDocNameUniqueness),
/* harmony export */   "verifyDocument": () => (/* binding */ verifyDocument)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6635);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2117);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5558);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7237);
/* harmony import */ var _intvs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4028);
/* harmony import */ var _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3836);
/* harmony import */ var _intvPromptAnswers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7246);
/* harmony import */ var _intvMenusCats_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6308);
/* harmony import */ var _intvMenuItems_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1722);



 // the rest of these imports can go away soon. simply allows me to delete objects form the db
// and reload with files. not used if records exist in db








const loadIntvs = () => {
  const tmp = _intvs_js__WEBPACK_IMPORTED_MODULE_4__["default"].map(e => {
    const rec = { ...e
    };

    if (!e.abbrLabel) {
      rec.abbrLabel = e.label;
    }

    if (!e.distPrompts) {
      rec.distPrompts = [];
    }

    if (!e.prompts) {
      rec.prompts = [];
    }

    return rec;
  });
  return tmp;
};
const loadIntvPrompts = () => {
  const tmp = _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__["default"].map(e => {
    const rec = { ...e
    };

    if (!!e.interventionID) {
      const found = _intvs_js__WEBPACK_IMPORTED_MODULE_4__["default"].find(i => i.id === e.interventionID);

      if (!found) {
        console.log(`loadIntvPrompts(${e.id}) ${e.interventionID} not found`);
      }
    }

    if (!e.abbrLabel) {
      rec.abbrLabel = "";
    }

    if (!e.feedback) {
      rec.feedback = rec.label;
    }

    if (!e.answers) {
      rec.answers = [];
    }

    return rec;
  });
  return tmp;
};
const loadIntvPromptAnswers = () => {
  const tmp = _intvPromptAnswers_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(e => {
    if (!e.abbrLabel) {
      e.abbrLabel = "";
    }

    const found = _intvPrompts_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(p => p.id === e.promptID);

    if (!found) {
      console.log(`loadIntvPromptAnswers(${e.id}) ${e.promptID} not found`);
    }

    return e;
  });
  return tmp;
};
const getScenarios = (db, scenarioType, schemaVersion) => {
  const query = db.collection("scenarios").where("scenarioType", "==", scenarioType).where("schemaVersion", "==", schemaVersion);
  return query.get().then(snapShot => {
    const scenarios = [];

    if (snapShot.size > 0) {
      snapShot.docs.forEach(doc => {
        const data = doc.data();
        scenarios.push({
          id: data.id,
          name: data.name,
          scenarioType: data.scenarioType,
          schemaVersion: data.schemaVersion
        });
      });
    }

    return scenarios;
  });
};
const getPublishedScenarioObjectByID = async (db, scenarioID) => {
  const data = await getPublishedScenarioByID(db, scenarioID);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.PublishedScenario(data);
};
const getPublishedScenarioByID = (db, scenarioID) => {
  return db.collection("published-scenarios").doc(scenarioID).get().then(doc => doc.data());
};
const getScenarioByID = (db, scenarioID) => {
  return db.collection("scenarios").doc(scenarioID).get().then(doc => doc.data());
};
const getScenarioByName = (db, scenarioName, schemaVersion) => {
  return db.collection("scenarios").where("name", "==", scenarioName).where("schemaVersion", "==", schemaVersion).limit(1).get().then(snapShot => {
    if (snapShot.size === 1) {
      return snapShot.docs[0].data();
    } else {
      throw new Error("document not found");
    }
  });
};

const addMissingScenarioTypeFields = scenTypeData => {
  const msgs = [];

  if (scenTypeData.checklist) {
    // console.log(CHECKLIST_STEP_TYPES)
    scenTypeData.checklist.forEach(clItem => {
      if (!("graded" in clItem)) {
        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__.CHECKLIST_STEP_TYPES.includes(clItem.type)) {
          clItem["graded"] = true;
          msgs.push(`set 'graded' to true for ${clItem.id}`);
        } else {
          clItem["graded"] = false;
          msgs.push(`set 'graded' to false for ${clItem.id}`);
        }
      }
    });
  }

  if (!scenTypeData.interventions) {
    msgs.push("loading intvs from file");
    scenTypeData.interventions = loadIntvs();
  }

  if (!scenTypeData.interventionPrompts) {
    const errs = [];
    const tmpPrompts = loadIntvPrompts();
    tmpPrompts.forEach(e => {
      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.PROMPT) {
        // ignore this check if distinguishing prompt (not associated with a single intv)
        if (undefined === scenTypeData.interventions.find(rec => rec.id === e.interventionID)) {
          errs.push(`bad interventionID ${e.interventionID}`);
        }
      }
    });
    let msg = "loading intv prompts from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionPrompts = tmpPrompts;
  }

  if (!scenTypeData.interventionPromptAnswers) {
    const errs = [];
    const tmpPromptAnswers = loadIntvPromptAnswers();
    tmpPromptAnswers.forEach(e => {
      if (undefined === scenTypeData.interventionPrompts.find(rec => rec.id === e.promptID)) {
        errs.push(`bad promptID ${e.promptID}`);
      }
    });
    let msg = "loading intv prompt answers from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionPromptAnswers = tmpPromptAnswers;
  }

  if (!scenTypeData.interventionMenuCategories) {
    msgs.push("loading intv menu categories from file");
    scenTypeData.interventionMenuCategories = _intvMenusCats_js__WEBPACK_IMPORTED_MODULE_7__["default"];
  }

  if (!scenTypeData.interventionMenuItems) {
    const errs = [];
    const tmpIntvMenuItems = _intvMenuItems_js__WEBPACK_IMPORTED_MODULE_8__["default"].map(e => {
      const found = scenTypeData.interventionMenuCategories.find(cat => cat.id === e.intvCategoryID);

      if (!found) {
        errs.push(`bad intvCategoryID ${e.intvCategoryID}`);
      } else {
        if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_2__.MDB_TYPES.INTERV) {
          const intv = scenTypeData.interventions.find(i => i.id === e.interventionID);

          if (!intv) {
            errs.push(`bad interventionID ${e.interventionID}`);
          } else {
            e.label = intv.label;
          }
        }

        return e;
      }
    });
    let msg = "loading intv menu items from file...";

    if (errs.length > 0) {
      msgs.push(msg);
      errs.forEach(e => msgs.push(e));
    } else {
      msg += "no errors found";
      msgs.push(msg);
    }

    scenTypeData.interventionMenuItems = tmpIntvMenuItems;
  }

  if (msgs.length > 0) {
    msgs.forEach(m => console.log(m));
  } else {
    console.log("all data loaded from db. files not needed");
  }

  return scenTypeData;
};

const getScenarioTypeObjectByID = async (db, scenarioTypeID) => {
  const data = await getScenarioTypeByID(db, scenarioTypeID);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.ScenarioType(data);
};
const getScenarioTypeObject = async (db, scenarioType, schemaVersion) => {
  const data = await getScenarioType(db, scenarioType, schemaVersion);
  return new _types_js__WEBPACK_IMPORTED_MODULE_3__.ScenarioType(data);
};
const getScenarioTypeByID = (db, scenarioTypeID) => {
  return db.collection("scenario-types").doc(scenarioTypeID).get().then(doc => {
    const data = doc.data();
    data.id = doc.id;
    return addMissingScenarioTypeFields(data);
  }).catch(error => {
    console.log(error);
    return error;
  });
};
const getScenarioType = (db, scenarioType, schemaVersion) => {
  return db.collection("scenario-types").where("name", "==", scenarioType).where("schemaVersion", "==", schemaVersion).limit(1).get().then(snapShot => {
    if (snapShot.size === 1) {
      return addMissingScenarioTypeFields(snapShot.docs[0].data());
    } else {
      throw new Error("document not found");
    }
  });
}; // FIXME: this needs to go away, although I need to figure out if it's in use anywhere first

const getPromptAndOptions = (scenarioTypeOrPubScenario, promptID) => {
  const scenType = scenarioTypeOrPubScenario;
  const prompt = scenType.interventionPrompts.find(e => e.id === promptID);

  if (!!prompt) {
    const options = prompt.answers.map(ansID => scenType.interventionPromptAnswers.find(a => a.id === ansID));
    prompt.options = options.map(opt => {
      return { ...opt,
        prompt: prompt.label
      };
    });
  }

  return prompt;
}; // moved over from apps/data-entry/src/scripts/connect-firebase
// added 'db' as first param so that these functions can be used either from web or server firebase APIs

/**
 * Verify document doesn't already exist in database.
 * @param {object} db instance
 * @param {string} collectionId
 * @param {string} documentId
 * @returns True if document with given ID doesn't exist yet.
 */

const verifyDocument = async (db, collectionId, documentId) => {
  const set = await db.collection(collectionId).where("id", "==", `${documentId}`).get();
  return set.empty;
}; // returns true if combo of name and schemaVersion fields is unique

const verifyDocNameUniqueness = async (db, collectionID, candidateName, dbNameField, schemaVersion) => {
  const snapshot = await db.collection(collectionID).where(dbNameField, "==", candidateName).where("schemaVersion", "==", schemaVersion).get();
  return snapshot.empty;
}; // Upload document object to database

const publishDocument = async (db, collectionId, documentObject, documentId) => {
  documentId ? await db.collection(collectionId).doc(documentId).set(documentObject) : await db.collection(collectionId).doc().set(documentObject);
}; // Update document with given id

const updateDocument = async (db, collectionId, documentId, documentObject) => {
  const set = await db.collection(collectionId).where("id", "==", `${documentId}`).get();
  set.empty ? publishDocument(collectionId, documentObject) : await db.collection(collectionId).doc(set.docs[0].id).set(documentObject);
};
/**
 * Will save document, using auto-generated IDs if documentObject doesn't have
 * an 'id' attribute.
 * @param {object} db instance
 * @param {string} collectionId
 * @param {object} documentObject
 */

const saveDocument = async (db, collectionId, documentObject) => {
  const doc = !documentObject.id ? db.collection(collectionId).doc() : db.collection(collectionId).doc(documentObject.id);
  documentObject.id = doc.id;
  await doc.set(documentObject);
  return documentObject.id;
};
/**
 * Query collection for document with id
 * @param {object} db instance
 * @param {string} collectionId
 * @param {string} documentId
 * @returns {object} Object containing document data.
 */

const getDocument = async (db, collectionId, documentId) => {
  const doc = await db.collection(collectionId).doc(documentId).get();
  return doc.data();
};
/**
 * Query collection for document with name
 * @param {string} collectionId
 * @param {string} documentName
 * @returns {object} Object containing document data.
 */

const getDocumentWithName = async (db, collectionId, documentName) => {
  const set = await db.collection(collectionId).where("name", "==", `${documentName}`).get();
  return set.docs[0]?.data();
};
/**
 * Delete document from collectio
 * @param {string} collectionId
 * @param {string} documentId
 */

const deleteDocument = async (db, collectionId, documentId) => {
  await db.collection(collectionId).doc(documentId).delete();
};
const deleteAndArchiveDocument = (db, collectionId, documentId) => {
  if (window.confirm("Are you sure you want to delete this file?  It will be archived but you will need help to retrieve it.")) {
    const data = getDocument(db, collectionId, documentId);
    let archiveId = "archive-" + collectionId;
    saveDocument(db, archiveId, data);
    deleteDocument(db, collectionId, documentId);
  }
};
const deleteDocumentNoArchive = async (db, collectionId, documentId) => {
  if (window.confirm("Are you sure you want to delete this file?")) {
    await db.collection(collectionId).doc(documentId).delete();
  }

  ;
};
const deleteObsAndAnaDocuments = (db, id) => {
  deleteAndArchiveDocument(db, "logs", id); //deleteDocument(db,"debriefing-feedback-logs",id)
};
const deleteObsDocument = (db, id) => {
  deleteAndArchiveDocument(db, "logs", id);
};
const deleteAnaDocument = (db, id) => {
  deleteDocument(db, "analyzed-logs", id);
};
const deleteCond1CommentDocument = (db, id) => {
  deleteDocument(db, "cond1-comments", id);
};
const deleteCommentDocument = (db, id) => {
  deleteAndArchiveDocument(db, "debriefing-comment-logs", id);
};
/**
 * Pull collection from database as array of document objects
 * @param {string} collectionId
 * @returns {object[]} An array containing all of the document in the collection.
 */

const getCollection = async (db, collectionId) => {
  const collection = await db.collection(collectionId).get();
  return collection.docs?.map(item => item.data());
}; // copied over from /apps/debriefer/src/scripts/connect-firebase and 'db' param added as first param
// Get a list of document names and a copy of each document

const listDocumentNames = async (db, collectionId) => {
  let documentList = db.collectionGroup(collectionId);
  let documentDictionary = {};
  documentList.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      documentDictionary[doc.id] = doc.data();
    });
  });
  return documentDictionary;
};

function exportObserverLogMetaData(doc) {
  const data = doc.data();
  return {
    id: doc.id,
    label: data.label,
    scenario: data.scenarioName,
    scenarioID: data.scenarioID,
    userName: data.userName,
    timestamp: data.timestamp
  };
}

const getLogs = db => {
  return db.collection("logs").get().then(querySnapshot => querySnapshot.docs.map(doc => exportObserverLogMetaData(doc))).catch(error => {
    console.error(error);
    return [];
  });
};
const getObserverLogAnalyses = (db, observerLogID) => {
  return db.collection("analyzed-logs").where("observerLogID", "==", observerLogID).get().then(querySnapShot => {
    return querySnapShot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        observerLogID: data.observerLogID,
        analyzer: data.analyzer,
        timestamp: data.timestamp
      };
    });
  }).catch(error => {
    console.error(error);
    return [];
  });
};

const getPublishedScenarios = (logs, pubScens, pubScenIDs, onlyPublished) => {
  let filtered = [];

  for (let log of logs) {
    if (pubScenIDs.includes(log.scenarioID)) {
      let version = pubScens.find(s => s.id === log.scenarioID).version;
      log.publishedVersion = version;
      filtered.push(log);
    }
  }

  if (onlyPublished) {
    return filtered.sort((a, b) => a.publishedVersion.localeCompare(b.publishedVersion));
  } else {
    return logs.sort((a, b) => a.publishedVersion.localeCompare(b.publishedVersion));
  }
};

const getObserverLogList = async (db, onlyPublished = true) => {
  // by default, only lists observer logs which don't refer to currently 
  // published scenarioIDs
  const pubScens = await getPubScenarios(db);
  const pubScenIDs = pubScens.map(e => e.id);
  return db.collection("logs").get().then(querySnapshot => querySnapshot.docs.map(doc => exportObserverLogMetaData(doc))).then(logs => getPublishedScenarios(logs, pubScens, pubScenIDs, onlyPublished)).catch(error => {
    console.error(error);
    return [];
  });
};
const getPubScenarios = db => {
  let results = [];
  return db.collection("published-scenarios").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        version: data.version
      };
    });
  });
};
const createCond1Comments = async (db, analysis, userName) => {
  const docRef = await db.collection("cond1-comments").doc();
  const id = docRef.id;
  const data = {
    id,
    comments: Array(analysis.events.length).fill(""),
    scenarioName: analysis.scenarioName,
    classCode: analysis.classCode || "",
    condition: analysis.condition || "",
    label: analysis.label || null,
    reviewer: userName,
    id: id,
    analysisLogID: analysis.id,
    observerLogID: analysis.observerLogID,
    scenarioID: analysis.scenarioID || "",
    timestamp: Date()
  };
  await docRef.set(data);
  return id;
};
const createCond2Debriefing = async (db, analysis, userName) => {
  const docRef = await db.collection("cond2-debriefings").doc();
  const id = docRef.id;
  const data = {
    id,
    analysisLogID: analysis.id,
    observerLogID: analysis.observerLogID,
    reviewer: userName,
    comments: {},
    timestamp: Date()
  };
  await docRef.set(data);
  return id;
};
const getAnalysisCond1Comments = (db, analysisLogID) => {
  return db.collection("cond1-comments").where("analysisLogID", "==", analysisLogID).get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data
      };
    });
  });
};
const getAnalysisCond2Debriefings = (db, analysisLogID) => {
  return db.collection("cond2-debriefings").where("analysisLogID", "==", analysisLogID).get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data
      };
    });
  });
};
const getDebriefCommentLogs = db => {
  return db.collection("debriefing-comment-logs").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        scenario: data.scenarioName,
        scenarioID: data.scenarioID,
        commenter: data.commenter,
        timestamp: data.timestamp
      };
    });
  });
};
const getAnalyses = db => {
  return db.collection("analyzed-logs").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        observerLogID: data.observerLogID,
        analyzer: data.analyzer,
        timestamp: data.timestamp
      };
    });
  });
};
const getCond1CommentLogs = db => {
  return db.collection("cond1-comments").get().then(querySnapshot => {
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        label: data.label,
        analysisLogID: data.analysisLogID,
        commenter: data.commenter,
        timestamp: data.timestamp
      };
    });
  });
};
const getLog = (db, logID) => {
  return db.collection("logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getDebriefLog = (db, logID) => {
  return db.collection("debriefing-feedback-logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getDebriefCommentLog = (db, logID) => {
  return db.collection("debriefing-comment-logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return false;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getAnalysisLog = (db, logID) => {
  return db.collection("analyzed-logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      //data.id = doc.id
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getCond1CommentLog = (db, logID) => {
  return db.collection("cond1-comments").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getCond2DebriefingLog = (db, debriefingID) => {
  return db.collection("cond2-debriefings").doc(debriefingID).get().then(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data
    };
  });
};
const getObserverLog = (db, logID) => {
  return db.collection("logs").doc(logID).get().then(doc => {
    const data = doc.data();

    if (!!data) {
      data.id = doc.id;
      return data;
    } else {
      return null;
    }
  }).catch(error => {
    console.error(error);
    return null;
  });
};
const getDebriefLogWithName = async (db, documentName) => {
  const set = await db.collection("debriefing-feedback-logs").where("ObserverFileName", "==", `${documentName}`).get();
  return set.docs[0]?.data();
};
const createInterventionVariant = distPromptIds2OptIds => {
  // the list of opt IDs mapped to each distPromptID needs to be sorted in order
  // to make them comparable
  const retVal = {};
  Object.entries(distPromptIds2OptIds).forEach(([distPromptID, optionsArray]) => {
    retVal[distPromptID] = optionsArray.sort();
  });
  return retVal;
};
const interventionVariantsAreEqual = (intvVariant1, intvVariant2) => {
  return lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual(intvVariant1, intvVariant2);
};
const intvVariant2JSON = intvVariant => {
  return json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__(intvVariant);
};

/***/ }),

/***/ 1722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_MENU_ITEMS = [{
  "depth": 1,
  "type": "heading",
  "id": "heading-als",
  "label": "ALS",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-amputation",
  "label": "Manage amputation",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-bls",
  "label": "BLS",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-crico",
  "label": "Cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-establish-patency",
  "label": "Establish patency",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-insert-adjunct",
  "label": "Insert adjunct",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-intubation",
  "label": "Intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-manage-internal-bleeding",
  "label": "Manage suspected internal bleeding",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-manage-shock",
  "label": "Manage hemorrhagic shock",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 3,
  "type": "heading",
  "id": "heading-medication-facilitated-intubation",
  "label": "Medication Facilitated Intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "heading",
  "id": "heading-open-airway",
  "label": "Open airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "heading",
  "id": "heading-remove-foreign-body-obstructions",
  "label": "Remove foreign body obstructions",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-severe-external-bleeding",
  "label": "Manage severe external bleeding",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-transfer",
  "label": "Transfer patient to EMS vehicle",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 1,
  "type": "heading",
  "id": "heading-transport",
  "label": "Transport to care facility",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-advanced-airway-adjunct",
  interventionID: "intv-advanced-airway-adjunct",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-airway-patency-technique-suction-airway",
  interventionID: "intv-airway-patency-technique-suction-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-apply-sterile-dressings",
  interventionID: "intv-apply-sterile-dressings",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-back-blows-and-chest-thrusts",
  interventionID: "intv-back-blows-and-chest-thrusts",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-direct-pressure",
  interventionID: "intv-control-severe-bleeding-technique-direct-pressure",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-tourniquet",
  interventionID: "intv-control-severe-bleeding-technique-tourniquet",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-2nd-tourniquet",
  interventionID: "intv-control-severe-bleeding-technique-2nd-tourniquet",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-pack-wound-with-gauze",
  interventionID: "intv-control-severe-bleeding-technique-pack-wound-with-gauze",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-pressure-bandage",
  interventionID: "intv-control-severe-bleeding-technique-pressure-bandage",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-severe-bleeding-technique-load-and-go",
  interventionID: "intv-control-severe-bleeding-technique-load-and-go",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-keep-patient-warm",
  interventionID: "intv-control-shock-technique-keep-patient-warm",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-administer-high-concentration-o2",
  interventionID: "intv-control-shock-technique-administer-high-concentration-o2",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-place-patient-supine-position",
  interventionID: "intv-control-shock-technique-place-patient-supine-position",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-control-shock-technique-administer-iv-boluses",
  interventionID: "intv-control-shock-technique-administer-iv-boluses",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-heimlich-maneuver",
  interventionID: "intv-heimlich-maneuver",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-keep-body-part-cool",
  interventionID: "intv-keep-body-part-cool",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-magill-forceps-assisted",
  interventionID: "intv-magill-forceps-assisted",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-manual-finger-sweep",
  interventionID: "intv-manual-finger-sweep",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-nasopharyngeal-airway",
  interventionID: "intv-nasopharyngeal-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  interventionID: "intv-nasotracheal-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-needle-cricothyrotomy",
  interventionID: "intv-needle-cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-occlusive-dressing",
  interventionID: "intv-occlusive-dressing",
  intvCategoryID: "intv-cat-manage-thoracic-trauma"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-open-airway-method-head-tilt",
  interventionID: "intv-open-airway-method-head-tilt",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-open-airway-method-modified-jaw-thrust",
  interventionID: "intv-open-airway-method-modified-jaw-thrust",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-oropharyngeal-airway",
  interventionID: "intv-oropharyngeal-airway",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-orotracheal-intubation",
  interventionID: "intv-orotracheal-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-place-body-part-in-bag",
  interventionID: "intv-place-body-part-in-bag",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-place-immobilized-patient-on-stretcher",
  interventionID: "intv-place-immobilized-patient-on-stretcher",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-pleural-decompression",
  interventionID: "intv-pleural-decompression",
  intvCategoryID: "intv-cat-manage-thoracic-trauma"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-prepare-and-administer-pain-nausea-vomiting-medications",
  interventionID: "intv-prepare-and-administer-pain-nausea-vomiting-medications",
  intvCategoryID: "intv-cat-manage-pain-nausea-vomiting"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-prepare-and-administer-sedative",
  interventionID: "intv-prepare-and-administer-sedative",
  intvCategoryID: "intv-cat-sedate-agitated-or-combatitive-patient"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  interventionID: "intv-rapid-sequence-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-retrieve-amputated-body-part",
  interventionID: "intv-retrieve-amputated-body-part",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-sedation-assisted-intubation",
  interventionID: "intv-sedation-assisted-intubation",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 4,
  "type": "intervention",
  "id": "menu-item-slat",
  interventionID: "intv-slat",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-attach-cid",
  interventionID: "intv-spinal-immobilization-technique-attach-cid",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-cervical-collar",
  interventionID: "intv-spinal-immobilization-technique-cervical-collar",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-manual-c-spine",
  interventionID: "intv-spinal-immobilization-technique-manual-c-spine",
  intvCategoryID: "intv-cat-manual-c-spine-stabilization"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-manual-c-spine2",
  interventionID: "intv-spinal-immobilization-technique-manual-c-spine",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-spinal-immobilization-technique-transfer-to-device",
  interventionID: "intv-spinal-immobilization-technique-transfer-to-device",
  intvCategoryID: "intv-cat-spinal-motion-restriction"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-splint-fractures",
  interventionID: "intv-splint-fractures",
  intvCategoryID: "intv-cat-circulation-management"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-splint-fractures2",
  interventionID: "intv-splint-fractures",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-sterile-dressing-soft-tissue",
  interventionID: "intv-sterile-dressing-soft-tissue",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-supplemental-oxygen-device-nasal-cannula",
  interventionID: "intv-supplemental-oxygen-device-nasal-cannula",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-supplemental-oxygen-device-non-rebreather-mask",
  interventionID: "intv-supplemental-oxygen-device-non-rebreather-mask",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 3,
  "type": "intervention",
  "id": "menu-item-surgical-cricothyrotomy",
  interventionID: "intv-surgical-cricothyrotomy",
  intvCategoryID: "intv-cat-airway"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transfers-patient-method-walk-patient",
  interventionID: "intv-transfers-patient-method-walk-patient",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transfers-patient-method-place-directly-on-stretcher",
  interventionID: "intv-transfers-patient-method-place-directly-on-stretcher",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transport",
  interventionID: "intv-transport",
  intvCategoryID: "intv-cat-extrication-and-transport"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-transport-body-part-to-receiving-facility",
  interventionID: "intv-transport-body-part-to-receiving-facility",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}, {
  "depth": 1,
  "type": "intervention",
  "id": "menu-item-ventilation-technique-bag-valve-mask",
  interventionID: "intv-ventilation-technique-bag-valve-mask",
  intvCategoryID: "intv-cat-manage-oxygenation-and-ventilation"
}, {
  "depth": 2,
  "type": "intervention",
  "id": "menu-item-wrap-body-part-in-saline-soaked-gauze",
  interventionID: "intv-wrap-body-part-in-saline-soaked-gauze",
  intvCategoryID: "intv-cat-manage-wounds-and-specific-injuries"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_MENU_ITEMS);

/***/ }),

/***/ 6308:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_MENU_CATS = [{
  "id": "intv-cat-manual-c-spine-stabilization",
  "label": "Manual c-spine stabilization",
  "items": ["menu-item-spinal-immobilization-technique-manual-c-spine"]
}, {
  "id": "intv-cat-airway",
  "label": "Airway",
  "items": ["heading-bls", "heading-open-airway", "menu-item-open-airway-method-head-tilt", "menu-item-open-airway-method-modified-jaw-thrust", "heading-establish-patency", "menu-item-airway-patency-technique-suction-airway", "heading-remove-foreign-body-obstructions", "menu-item-manual-finger-sweep", "menu-item-magill-forceps-assisted", "menu-item-slat", "menu-item-heimlich-maneuver", "menu-item-back-blows-and-chest-thrusts", "heading-insert-adjunct", "menu-item-oropharyngeal-airway", "menu-item-nasopharyngeal-airway", "heading-als", "heading-intubation", "menu-item-advanced-airway-adjunct", "menu-item-orotracheal-intubation", "menu-item-nasotracheal-intubation", "heading-medication-facilitated-intubation", "menu-item-rapid-sequence-intubation", "menu-item-sedation-assisted-intubation", "heading-crico", "menu-item-needle-cricothyrotomy", "menu-item-surgical-cricothyrotomy"]
}, {
  "id": "intv-cat-manage-oxygenation-and-ventilation",
  "label": "Manage oxygenation and ventilation",
  "items": ["menu-item-supplemental-oxygen-device-nasal-cannula", "menu-item-supplemental-oxygen-device-non-rebreather-mask", "menu-item-ventilation-technique-bag-valve-mask"]
}, {
  "id": "intv-cat-circulation-management",
  "label": "Circulation management",
  "items": ["heading-severe-external-bleeding", "menu-item-control-severe-bleeding-technique-direct-pressure", "menu-item-control-severe-bleeding-technique-tourniquet", "menu-item-control-severe-bleeding-technique-2nd-tourniquet", "menu-item-control-severe-bleeding-technique-pack-wound-with-gauze", "menu-item-control-severe-bleeding-technique-pressure-bandage", "menu-item-control-severe-bleeding-technique-load-and-go", "heading-manage-internal-bleeding", "menu-item-splint-fractures", "heading-manage-shock", "menu-item-control-shock-technique-keep-patient-warm", "menu-item-control-shock-technique-administer-high-concentration-o2", "menu-item-control-shock-technique-place-patient-supine-position", "menu-item-control-shock-technique-administer-iv-boluses"]
}, {
  "id": "intv-cat-manage-thoracic-trauma",
  "label": "Manage thoracic trauma",
  "items": ["menu-item-occlusive-dressing", "menu-item-pleural-decompression"]
}, {
  "id": "intv-cat-spinal-motion-restriction",
  "label": "Spinal motion restriction",
  "items": ["menu-item-spinal-immobilization-technique-manual-c-spine2", "menu-item-spinal-immobilization-technique-cervical-collar", "menu-item-spinal-immobilization-technique-transfer-to-device", "menu-item-spinal-immobilization-technique-attach-cid"]
}, {
  "id": "intv-cat-extrication-and-transport",
  "label": "Extrication and transport",
  "items": ["heading-transfer", "menu-item-transfers-patient-method-walk-patient", "menu-item-transfers-patient-method-place-directly-on-stretcher", "menu-item-place-immobilized-patient-on-stretcher", "heading-transport", "menu-item-transport"]
}, {
  "id": "intv-cat-manage-wounds-and-specific-injuries",
  "label": "Manage wounds and specific injuries",
  "items": ["menu-item-apply-sterile-dressings", "menu-item-splint-fractures2", "heading-amputation", "menu-item-sterile-dressing-soft-tissue", "menu-item-retrieve-amputated-body-part", "menu-item-wrap-body-part-in-saline-soaked-gauze", "menu-item-place-body-part-in-bag", "menu-item-keep-body-part-cool", "menu-item-transport-body-part-to-receiving-facility"]
}, {
  "id": "intv-cat-manage-pain-nausea-vomiting",
  "label": "Manage pain, nausea, vomiting",
  "items": ["menu-item-prepare-and-administer-pain-nausea-vomiting-medications"]
}, {
  "id": "intv-cat-sedate-agitated-or-combatitive-patient",
  "label": "Sedate agitated or combatitive patient",
  "items": ["menu-item-prepare-and-administer-sedative"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_MENU_CATS);

/***/ }),

/***/ 7246:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTV_PROMPT_ANSWERS = [{
  id: "answer-wound-location-head",
  label: "Wound located at head",
  abbrLabel: "Head",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-neck",
  label: "Wound located at neck",
  abbrLabel: "Neck",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-chest",
  label: "Wound located at chest",
  abbrLabel: "Chest",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-abdomen-pelvis",
  label: "Wound located at abdomen/pelvis",
  abbrLabel: "Abdomen/Pelvis",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-posterior",
  label: "Wound located at posterior thorax, lumbar, or buttocks",
  abbrLabel: "Posterior",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-genitalia",
  label: "Wound located at genitalia",
  abbrLabel: "Genitalia",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-left-lower-extremity",
  label: "Wound located at left lower extremity",
  abbrLabel: "Left lower extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-right-lower-extremity",
  label: "Wound located at right lower extremity",
  abbrLabel: "Right lower extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-left-upper-extremity",
  label: "Wound located at left upper extremity",
  abbrLabel: "Left upper extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-right-upper-extremity",
  label: "Wound located at right upper extremity",
  abbrLabel: "Right upper-extremity",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-location-other",
  label: "Other wound location",
  abbrLabel: "Other",
  promptID: "prompt-wound-location"
}, {
  id: "answer-wound-locations-head",
  label: "Wound located at head",
  abbrLabel: "Head",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-neck",
  label: "Wound located at neck",
  abbrLabel: "Neck",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-chest",
  label: "Wound located at chest",
  abbrLabel: "Chest",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-abdomen-pelvis",
  label: "Wound located at abdomen/pelvis",
  abbrLabel: "Abdomen/Pelvis",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-posterior",
  label: "Wound located at posterior thorax, lumbar, or buttocks",
  abbrLabel: "Posterior",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-genitalia",
  label: "Wound located at genitalia",
  abbrLabel: "Genitalia",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-left-lower-extremity",
  label: "Wound located at left lower extremity",
  abbrLabel: "Left lower extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-right-lower-extremity",
  label: "Wound located at right lower extremity",
  abbrLabel: "Right lower extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-left-upper-extremity",
  label: "Wound located at left upper extremity",
  abbrLabel: "Left upper extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-right-upper-extremity",
  label: "Wound located at right upper extremity",
  abbrLabel: "Right upper-extremity",
  promptID: "prompt-wound-locations"
}, {
  id: "answer-wound-locations-other",
  label: "Other wound location",
  abbrLabel: "Other",
  promptID: "prompt-wound-locations"
}, {
  "id": "answer-airway-patency-suction-yankauer",
  "label": "Yankauer",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-airway-patency-suction-long-multiuse",
  "label": "Long, multiuse",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-airway-patency-suction-other",
  "label": "Other",
  "promptID": "prompt-airway-patency-suction-device"
}, {
  "id": "answer-alternative-rescue-airway-type-ett",
  "label": "Endotracheal tube (ETT)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-combitube",
  "label": "Combitube",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-lta",
  "label": "Laryngeal tube airway (LTA; King tube)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-lma",
  "label": "Laryngeal mask airway (LMA)",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-igel",
  "label": "Igel",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-rescue-airway-type-other",
  "label": "Other",
  "promptID": "prompt-advanced-airway-adjunct-type"
}, {
  "id": "answer-alternative-airway-tube-size-7",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "7.0"
}, {
  "id": "answer-alternative-airway-tube-size-8",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "8.0"
}, {
  "id": "answer-alternative-airway-tube-size-age-div-4-plus-4",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "((age/4 + 4))"
}, {
  "id": "answer-alternative-airway-tube-size--age-div-4-plus-4-minus-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "((age/4 + 4) - 5"
}, {
  "id": "answer-alternative-airway-tube-size-37f",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "37F"
}, {
  "id": "answer-alternative-airway-tube-size-41f",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "41F"
}, {
  "id": "answer-alternative-airway-tube-size-0",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "0"
}, {
  "id": "answer-alternative-airway-tube-size-1",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "1"
}, {
  "id": "answer-alternative-airway-tube-size-1-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "1.5"
}, {
  "id": "answer-alternative-airway-tube-size-2",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "2"
}, {
  "id": "answer-alternative-airway-tube-size-2-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "2.5"
}, {
  "id": "answer-alternative-airway-tube-size-3",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "3"
}, {
  "id": "answer-alternative-airway-tube-size-4",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "4"
}, {
  "id": "answer-alternative-airway-tube-size-5",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "5"
}, {
  "id": "answer-alternative-airway-tube-size-6",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "6"
}, {
  "id": "answer-alternative-airway-tube-size-other",
  "promptID": "prompt-advanced-airway-tube-size",
  "label": "Other"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-21cm",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "21cm"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-23cm",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "23cm"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-3-times-tube-size",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "3 x tube size"
}, {
  "id": "answer-orotracheal-intubation-tube-insertion-depth-other",
  "promptID": "prompt-orotracheal-intubation-tube-insertion-depth",
  "label": "Other"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-6-to-6-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "6.0 - 6.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-7-to-7-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "7.0 - 7.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus1",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "(age/4 - 4)-1"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus0-5",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "(age/4 -4) - 0.5"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-0-5-1cm-less-than-oro-size",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": ".5 - 1cm less then size for orotracheal tube size"
}, {
  "id": "answer-nasotracheal-intubation-tube-size-other",
  "promptID": "prompt-nasotracheal-intubation-tube-size",
  "label": "Other"
}, {
  "id": "answer-nasal-cannula-flow-rate-1-6-lpm",
  "promptID": "prompt-nasal-cannula-flow-rate",
  "label": "Nasal cannula flow rate 1-6 liters/min",
  "abbrLabel": "1-6 liters/min"
}, {
  "id": "answer-nasal-cannula-flow-rate-other",
  "promptID": "prompt-nasal-cannula-flow-rate",
  "label": "Nasal cannula flow rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-nasal-cannula-target-saturation-gt-90-pct",
  "promptID": "prompt-nasal-cannula-target-saturation",
  "label": "Nasal cannula target saturation: 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-nasal-cannula-target-saturation-other",
  "promptID": "prompt-nasal-cannula-target-saturation",
  "label": "Nasal cannula target saturation: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-non-rebreather-mask-flow-rate-10-15-liters-min",
  "promptID": "prompt-non-rebreather-mask-flow-rate",
  "label": "Non-rebreather mask flow rate 10-15 L/min",
  "abbrLabel": "10-15 L/min"
}, {
  "id": "answer-non-rebreather-mask-flow-rate-other",
  "promptID": "prompt-non-rebreather-mask-flow-rate",
  "label": "Non-rebreather mask flow rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-non-rebreather-mask-target-saturation-gt-90-pct",
  "promptID": "prompt-non-rebreather-mask-target-saturation",
  "label": "Non-rebreather mask target O2 saturation: 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-non-rebreather-mask-target-saturation-other",
  "promptID": "prompt-non-rebreather-mask-target-saturation",
  "label": "Non-rebreather mask target O2 saturation: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-ventilation-rate-10-12-bpm",
  "promptID": "prompt-bvm-ventilation-rate",
  "label": "BVM ventilation rate: 10-12 BPM",
  "abbrLabel": "10-12 breaths/minute"
}, {
  "id": "answer-bvm-ventilation-rate-other",
  "promptID": "prompt-bvm-ventilation-rate",
  "label": "BVM ventilation rate: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-flow-rate-15-ltm-or-gt",
  "promptID": "prompt-bvm-flow-rate",
  "label": "BVM flow rate: 15 liters/min or greater",
  "abbrLabel": "15 liters/min or greater"
}, {
  "id": "answer-bvm-flow-rate-other",
  "promptID": "prompt-bvm-flow-rate",
  "label": "BVM flow rate: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-bvm-target-saturation-rate-gt-90-pct",
  "promptID": "prompt-bvm-target-saturation",
  "label": "BVM target O2 saturation rate 90% or greater",
  "abbrLabel": "90% or greater"
}, {
  "id": "answer-bvm-target-saturation-rate-other",
  "promptID": "prompt-bvm-target-saturation",
  "label": "BVM target O2 saturation rate other",
  "abbrLabel": "Other"
}, {
  "id": "answer-tourniquet-placement-close-to-core-far-from-wound",
  "promptID": "prompt-tourniquet-placement",
  "label": "Tourniquet placement as far from wound and close to the core as possible",
  "abbrLabel": "As far from wound and close to the core as possible"
}, {
  "id": "answer-tourniquet-placement-other",
  "promptID": "prompt-tourniquet-placement",
  "label": "Tourniquet placement other",
  "abbrLabel": "Other"
}, {
  "id": "answer-2nd-tourniquet-placement-adjacent-to-initial-tourniquet",
  "promptID": "prompt-2nd-tourniquet-placement",
  "label": "Second tourniquet location: adjacent to initial tourniquet",
  "abbrLabel": "Adjacent to initial tourniquet"
}, {
  "id": "answer-2nd-tourniquet-placement-other",
  "promptID": "prompt-2nd-tourniquet-placement",
  "label": "Second tourniquet location: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-occulsivive-dressing-injury-type-open-pneumothorax",
  "promptID": "prompt-occlusive-dressing-injury-type",
  "label": "Occlusive dressing injury type: Open pnuemothorax (sucking chest wound)",
  "abbrLabel": "Open pnuemothorax (sucking chest wound)"
}, {
  "id": "answer-occulsivive-dressing-injury-type-other",
  "promptID": "prompt-occlusive-dressing-injury-type",
  "label": "Occlusive dressing injury type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-occulsive-dressing-method-leave-one-side-untaped",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: Leave one side untaped",
  "abbrLabel": "Leave one side untaped"
}, {
  "id": "answer-occulsive-dressing-method-leave-dressing-with-one-way-valve",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: Dressing with one-way valve (e.g. Hyfin chest seal, Asherman chest seal)",
  "abbrLabel": "Dressing with one-way valve (e.g. Hyfin chest seal, Asherman chest seal)"
}, {
  "id": "answer-occulsive-dressing-method-other",
  "promptID": "prompt-occlusive-dressing-method",
  "label": "Occlusive dressing method: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-injury-type-tension-pneumothorax",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: tension pneumothorax",
  "abbrLabel": "Tension pneumothorax"
}, {
  "id": "answer-pleural-decompression-injury-type-open-pneumothorax",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: Open pnuemothorax (sucking chest wound)",
  "abbrLabel": "Open pnuemothorax (sucking chest wound)"
}, {
  "id": "answer-pleural-decompression-injury-type-other",
  "promptID": "prompt-pleural-decompression-injury-type",
  "label": "Pleural decompression injury type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-placement-side-of-the-body-right",
  "promptID": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "label": "Pleural Decompression needle placement: right side",
  "abbrLabel": "Right"
}, {
  "id": "answer-pleural-decompression-needle-placement-side-of-the-body-left",
  "promptID": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "label": "Pleural Decompression needle placement: left side",
  "abbrLabel": "Left"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-2nd-or-3rd-intercostal-space-mid-clavicular",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: Second or third intercostal space mid-clavicular line",
  "abbrLabel": "Second or third intercostal space mid-clavicular line"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-4th-or-5th-intercostal-space-mid-axillary",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: Fourth or fifth intercostal space mid-axillary line",
  "abbrLabel": "Fourth or fifth intercostal space mid-axillary line"
}, {
  "id": "answer-pleural-decompression-needle-placement-anatomical-landmark-other",
  "promptID": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "label": "Pleural decompression anatomical landmark: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-size-large-bore",
  "promptID": "prompt-pleural-decompression-needle-size",
  "label": "Pleural decompression needle size: Large bore (14 or 16 gauge)",
  "abbrLabel": "Large bore (14 or 16 gauge)"
}, {
  "id": "answer-pleural-decompression-needle-size-other",
  "promptID": "prompt-pleural-decompression-needle-size",
  "label": "Pleural decompression needle size: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-pleural-decompression-needle-length-2-inches-or-longer",
  "promptID": "prompt-pleural-decompression-needle-length",
  "label": "Pleural Decompression needle size: 2 inches or more",
  "abbrLabel": "2 inches or more"
}, {
  "id": "answer-pleural-decompression-needle-length-other",
  "promptID": "prompt-pleural-decompression-needle-length",
  "label": "Pleural Decompression needle size: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-transport-facility-choice-level-1-or-2-trauma-center",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closest level 1 or 2 trauma center",
  "abbrLabel": "Closest level 1 or 2 trauma center"
}, {
  "id": "answer-transport-facility-choice-level-3-or-4-trauma-center",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closet level 3 or 4 trauma center",
  "abbrLabel": "Closet level 3 or 4 trauma center"
}, {
  "id": "answer-transport-facility-choice-closest",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: Closest receiving facility",
  "abbrLabel": "Closest receiving facility"
}, {
  "id": "answer-transport-facility-choice-other",
  "promptID": "prompt-transport-facility-choice",
  "label": "Receiving facility type: other",
  "abbrLabel": "Other"
}, {
  "id": "answer-transport-method-ambulance",
  "promptID": "prompt-transport-method",
  "label": "Ambulance",
  "abbrLabel": "Ambulance"
}, {
  "id": "answer-transport-method-helicopter",
  "promptID": "prompt-transport-method",
  "label": "Helicopter",
  "abbrLabel": "Helicopter"
}, {
  "id": "answer-transport-lights-sirens-yes",
  "promptID": "prompt-transport-lights-siren-decision",
  "label": "Use lights and sirens",
  "abbrLabel": "Yes"
}, {
  "id": "answer-transport-lights-sirens-no",
  "promptID": "prompt-transport-lights-siren-decision",
  "label": "Do not use lights and sirens",
  "abbrLabel": "No"
}, {
  "id": "answer-splint-type-board",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Board splint",
  "abbrLabel": "Board splint"
}, {
  "id": "answer-splint-type-moldable",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Moldable splint",
  "abbrLabel": "Moldable splint"
}, {
  "id": "answer-splint-type-traction",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Traction splint",
  "abbrLabel": "Traction splint"
}, {
  "id": "answer-splint-type-pelvic-binder",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Pelvic binder",
  "abbrLabel": "Pelvic binder"
}, {
  "id": "answer-splint-type-other",
  "promptID": "prompt-splint-type",
  "label": "Splint type: Other",
  "abbrLabel": "Other"
}];
/*
    {
        "id": "",
        "promptID": "",
        "label": "",
        "abbrLabel": ""
    },
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_PROMPT_ANSWERS);

/***/ }),

/***/ 3836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8913);

const INTV_PROMPTS = [{
  "id": "prompt-wound-location",
  type: _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DIST_PROMPT,
  selectionType: _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  label: "Where is the wound located?",
  abbrLabel: "Wound location?",
  answers: ["answer-wound-location-head", "answer-wound-location-neck", "answer-wound-location-chest", "answer-wound-location-abdomen-pelvis", "answer-wound-location-posterior", "answer-wound-location-genitalia", "answer-wound-location-left-lower-extremity", "answer-wound-location-right-lower-extremity", "answer-wound-location-left-upper-extremity", "answer-wound-location-right-upper-extremity", "answer-wound-location-other"]
}, {
  "id": "prompt-wound-locations",
  type: _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DIST_PROMPT,
  selectionType: _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.OOM,
  label: "Where are the wound(s) located?",
  abbrLabel: "Wound location(s)?",
  answers: ["answer-wound-locations-head", "answer-wound-locations-neck", "answer-wound-locations-chest", "answer-wound-locations-abdomen-pelvis", "answer-wound-locations-posterior", "answer-wound-locations-genitalia", "answer-wound-locations-left-lower-extremity", "answer-wound-locations-right-lower-extremity", "answer-wound-locations-left-upper-extremity", "answer-wound-locations-right-upper-extremity", "answer-wound-locations-other"]
}, {
  "id": "prompt-airway-patency-suction-device",
  "interventionID": "intv-airway-patency-technique-suction-airway",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What kind of suction catheter will you use?",
  "abbrLabel": "Suction catheter type?",
  "answers": ["answer-airway-patency-suction-yankauer", "answer-airway-patency-suction-long-multiuse", "answer-airway-patency-suction-other"]
}, {
  "id": "prompt-advanced-airway-adjunct-type",
  "interventionID": "intv-advanced-airway-adjunct",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of advanced airway adjunct would you use?",
  "abbrLabel": "Which advanced airway?",
  "answers": ["answer-alternative-rescue-airway-type-ett", "answer-alternative-rescue-airway-type-combitube", "answer-alternative-rescue-airway-type-lta", "answer-alternative-rescue-airway-type-lma", "answer-alternative-rescue-airway-type-igel", "answer-alternative-rescue-airway-type-other"]
}, {
  "id": "prompt-advanced-airway-tube-size",
  "interventionID": "intv-advanced-airway-adjunct",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": "one",
  "label": "What tube size for advanced airway?",
  "abbrLabel": "What size?",
  "answers": ["answer-alternative-airway-tube-size-7", "answer-alternative-airway-tube-size-8", "answer-alternative-airway-tube-size-age-div-4-plus-4", "answer-alternative-airway-tube-size--age-div-4-plus-4-minus-5", "answer-alternative-airway-tube-size-37f", "answer-alternative-airway-tube-size-41f", "answer-alternative-airway-tube-size-0", "answer-alternative-airway-tube-size-1", "answer-alternative-airway-tube-size-1-5", "answer-alternative-airway-tube-size-2", "answer-alternative-airway-tube-size-2-5", "answer-alternative-airway-tube-size-3", "answer-alternative-airway-tube-size-4", "answer-alternative-airway-tube-size-5", "answer-alternative-airway-tube-size-6", "answer-alternative-airway-tube-size-other"]
}, {
  "id": "prompt-orotracheal-intubation-tube-insertion-depth",
  "interventionID": "intv-orotracheal-intubation",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what depth would you insert the tube?",
  "abbrLabel": "Tube insertion depth?",
  "answers": ["answer-orotracheal-intubation-tube-insertion-depth-21cm", "answer-orotracheal-intubation-tube-insertion-depth-23cm", "answer-orotracheal-intubation-tube-insertion-depth-3-times-tube-size", "answer-orotracheal-intubation-tube-insertion-depth-other"]
}, {
  "id": "prompt-nasotracheal-intubation-tube-size",
  "interventionID": "intv-nasotracheal-intubation",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What tube size would you use?",
  "abbrLabel": "Tube size?",
  "answers": ["answer-nasotracheal-intubation-tube-size-6-to-6-5", "answer-nasotracheal-intubation-tube-size-7-to-7-5", "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus1", "answer-nasotracheal-intubation-tube-size-age-div-4+4-minus0-5", "answer-nasotracheal-intubation-tube-size-0-5-1cm-less-than-oro-size", "answer-nasotracheal-intubation-tube-size-other"]
}, {
  "id": "prompt-nasal-cannula-flow-rate",
  "interventionID": "intv-supplemental-oxygen-device-nasal-cannula",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What oxygen flow rate would you administer?",
  "abbrLabel": "Oxygen flow rate?",
  "answers": ["answer-nasal-cannula-flow-rate-1-6-lpm", "answer-nasal-cannula-flow-rate-other"]
}, {
  "id": "prompt-nasal-cannula-target-saturation",
  "interventionID": "intv-supplemental-oxygen-device-nasal-cannula",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-nasal-cannula-target-saturation-gt-90-pct", "answer-nasal-cannula-target-saturation-other"]
}, {
  "id": "prompt-non-rebreather-mask-flow-rate",
  "interventionID": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What oxygen flow rate would you administer?",
  "abbrLabel": "Oxygen flow rate?",
  "answers": ["answer-non-rebreather-mask-flow-rate-10-15-liters-min", "answer-non-rebreather-mask-flow-rate-other"]
}, {
  "id": "prompt-non-rebreather-mask-target-saturation",
  "interventionID": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-non-rebreather-mask-target-saturation-gt-90-pct", "answer-non-rebreather-mask-target-saturation-other"]
}, {
  "id": "prompt-bvm-ventilation-rate",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what rate will you ventilate the patient?",
  "abbrLabel": "",
  "answers": ["answer-bvm-ventilation-rate-10-12-bpm", "answer-bvm-ventilation-rate-other"]
}, {
  "id": "prompt-bvm-flow-rate",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What flow rate would you administer?",
  "abbrLabel": "Flow rate?",
  "answers": ["answer-bvm-flow-rate-15-ltm-or-gt", "answer-bvm-flow-rate-other"]
}, {
  "id": "prompt-bvm-target-saturation",
  "interventionID": "intv-ventilation-technique-bag-valve-mask",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What is your target oxygen saturation range?",
  "abbrLabel": "Target O2 saturation?",
  "answers": ["answer-bvm-target-saturation-rate-gt-90-pct", "answer-bvm-target-saturation-rate-other"]
}, {
  "id": "prompt-tourniquet-placement",
  "interventionID": "intv-control-severe-bleeding-technique-tourniquet",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Where would you place the tourniquet?",
  "abbrLabel": "Tourniquet location?",
  "answers": ["answer-tourniquet-placement-close-to-core-far-from-wound", "answer-tourniquet-placement-other"]
}, {
  "id": "prompt-2nd-tourniquet-placement",
  "interventionID": "intv-control-severe-bleeding-technique-2nd-tourniquet",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Where would you place the second tourniquet?",
  "abbrLabel": "Tourniquet location?",
  "answers": ["answer-2nd-tourniquet-placement-adjacent-to-initial-tourniquet", "answer-2nd-tourniquet-placement-other"]
}, {
  "id": "prompt-occlusive-dressing-injury-type",
  "interventionID": "intv-occlusive-dressing",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of injury are you trying to manage?",
  "abbrLabel": "For what type of injury?",
  "answers": ["answer-occulsivive-dressing-injury-type-open-pneumothorax", "answer-occulsivive-dressing-injury-type-other"]
}, {
  "id": "prompt-occlusive-dressing-method",
  "interventionID": "intv-occlusive-dressing",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "How would you create a release valve on an occlusive dressing?",
  "abbrLabel": "How would you create a release valve?",
  "answers": ["answer-occulsive-dressing-method-leave-one-side-untaped", "answer-occulsive-dressing-method-leave-dressing-with-one-way-valve", "answer-occulsive-dressing-method-other"]
}, {
  "id": "prompt-pleural-decompression-injury-type",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of injury are you trying to manage?",
  "abbrLabel": "For what type of injury?",
  "answers": ["answer-pleural-decompression-injury-type-tension-pneumothorax", "answer-pleural-decompression-injury-type-open-pneumothorax", "answer-pleural-decompression-injury-type-other"]
}, {
  "id": "prompt-pleural-decompression-needle-placement-side-of-the-body",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "On which side of the body would you place the needle?",
  "abbrLabel": "Which side would you place the needle?",
  "answers": ["answer-pleural-decompression-needle-placement-side-of-the-body-right", "answer-pleural-decompression-needle-placement-side-of-the-body-left"]
}, {
  "id": "prompt-pleural-decompression-needle-placement-anatomical-landmark",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "At what anatomical landmark?",
  "abbrLabel": "At what anatomical landmark?",
  "answers": ["answer-pleural-decompression-needle-placement-anatomical-landmark-2nd-or-3rd-intercostal-space-mid-clavicular", "answer-pleural-decompression-needle-placement-anatomical-landmark-4th-or-5th-intercostal-space-mid-axillary", "answer-pleural-decompression-needle-placement-anatomical-landmark-other"]
}, {
  "id": "prompt-pleural-decompression-needle-size",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What size needle do you want to use?",
  "abbrLabel": "Needle size?",
  "answers": ["answer-pleural-decompression-needle-size-large-bore", "answer-pleural-decompression-needle-size-other"]
}, {
  "id": "prompt-pleural-decompression-needle-length",
  "interventionID": "intv-pleural-decompression",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "How long a needle would you use?",
  "abbrLabel": "Needle length?",
  "answers": ["answer-pleural-decompression-needle-length-2-inches-or-longer", "answer-pleural-decompression-needle-length-other"]
}, {
  "id": "prompt-transport-facility-choice",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of care facility will you transport the patient to?",
  "abbrLabel": "Type of receiving facility",
  "answers": ["answer-transport-facility-choice-level-1-or-2-trauma-center", "answer-transport-facility-choice-level-3-or-4-trauma-center", "answer-transport-facility-choice-closest", "answer-transport-facility-choice-other"]
}, {
  "id": "prompt-transport-method",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Would you transport this patient by air or ground ambulance?",
  "abbrLabel": "Air or ground ambulance?",
  "answers": ["answer-transport-method-ambulance", "answer-transport-method-helicopter"]
}, {
  "id": "prompt-transport-lights-siren-decision",
  "interventionID": "intv-transport",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "Would you use lights and sirens with this patient?",
  "abbrLabel": "Lights and sirens?",
  "answers": ["answer-transport-lights-sirens-yes", "answer-transport-lights-sirens-no"]
}, {
  "id": "prompt-splint-type",
  "interventionID": "intv-splint-fractures",
  "type": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PROMPT,
  "selectionType": _meddbriefer_scenario_data__WEBPACK_IMPORTED_MODULE_0__.SELECTION_TYPES.ONE,
  "label": "What type of splint would you use?",
  "abbrLabel": "Type of splint?",
  "answers": ["answer-splint-type-board", "answer-splint-type-moldable", "answer-splint-type-traction", "answer-splint-type-pelvic-binder", "answer-splint-type-other"]
}];
/*
    {
        "id": "",
        "interventionID": "",
        "type": MDB_TYPES.PROMPT,
        "selectionType": ST.ONE,
        "label": "",
        "abbrLabel": "",
        "answers": [
        ]
    },
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTV_PROMPTS);

/***/ }),

/***/ 4028:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const INTVS = [{
  "id": "intv-open-airway-method-head-tilt",
  "system": "airway",
  "label": "Head tilt chin lift"
}, {
  "id": "intv-open-airway-method-modified-jaw-thrust",
  "system": "airway",
  "label": "Modified jaw thrust"
}, {
  "id": "intv-airway-patency-technique-suction-airway",
  "system": "airway",
  "label": "Suction airway",
  "prompts": ["prompt-airway-patency-suction-device"]
}, {
  "id": "intv-manual-finger-sweep",
  "system": "airway",
  "label": "Manual (finger sweep)"
}, {
  "id": "intv-magill-forceps-assisted",
  "system": "airway",
  "label": "Magill forceps assisted"
}, {
  "id": "intv-slat",
  "system": "airway",
  "label": "SLAT"
}, {
  "id": "intv-heimlich-maneuver",
  "system": "airway",
  "label": "Heimlich maneuver"
}, {
  "id": "intv-back-blows-and-chest-thrusts",
  "system": "airway",
  "label": "Back blows and chest thrusts"
}, {
  "id": "intv-oropharyngeal-airway",
  "system": "airway",
  "label": "Oropharyngeal airway (OPA)"
}, {
  "id": "intv-nasopharyngeal-airway",
  "system": "airway",
  "label": "Nasopharyngeal airway (NPA)"
}, {
  "id": "intv-advanced-airway-adjunct",
  "system": "airway",
  "label": "Insert advanced airway adjunct",
  "prompts": ["prompt-advanced-airway-adjunct-type", "prompt-advanced-airway-tube-size"]
}, {
  "id": "intv-orotracheal-intubation",
  "system": "airway",
  "label": "Orotracheal intubation",
  "prompts": ["prompt-orotracheal-intubation-tube-insertion-depth"]
}, {
  "id": "intv-nasotracheal-intubation",
  "system": "airway",
  "label": "Nasotracheal intubation",
  "prompts": ["prompt-nasotracheal-intubation-tube-size"]
}, {
  "id": "intv-rapid-sequence-intubation",
  "system": "airway",
  "label": "Rapid sequence intubation (RSI)"
}, {
  "id": "intv-sedation-assisted-intubation",
  "system": "airway",
  "label": "Sedation-assisted intubation",
  "prompts": []
}, {
  "id": "intv-needle-cricothyrotomy",
  "system": "airway",
  "label": "Needle cricothyrotomy"
}, {
  "id": "intv-surgical-cricothyrotomy",
  "system": "airway",
  "label": "Surgical cricothyrotomy"
}, {
  "id": "intv-supplemental-oxygen-device-nasal-cannula",
  "system": "breathing",
  "label": "Nasal cannula",
  "prompts": ["prompt-nasal-cannula-o2-flow-rate", "prompt-nasal-cannula-target-saturation"]
}, {
  "id": "intv-supplemental-oxygen-device-non-rebreather-mask",
  "system": "breathing",
  "label": "Non-rebreather mask",
  "prompts": ["prompt-non-rebreather-mask-flow-rate", "prompt-non-rebreather-mask-target-saturation"]
}, {
  "id": "intv-ventilation-technique-bag-valve-mask",
  "system": "breathing",
  "label": "Bag-valve mask",
  "prompts": ["prompt-bvm-ventilation-rate", "prompt-bvm-flow-rate", "prompt-bvm-target-saturation"]
}, {
  "id": "intv-control-severe-bleeding-technique-direct-pressure",
  "system": "bleeding",
  "label": "Apply direct pressure",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-tourniquet",
  "system": "bleeding",
  "label": "Apply tourniquet",
  distPrompts: ["prompt-wound-location"],
  prompts: ["prompt-tourniquet-placement"]
}, {
  "id": "intv-control-severe-bleeding-technique-2nd-tourniquet",
  "system": "bleeding",
  "label": "Apply second tourniquet",
  distPrompts: ["prompt-wound-location"],
  prompts: ["prompt-2nd-tourniquet-placement"]
}, {
  "id": "intv-control-severe-bleeding-technique-pack-wound-with-gauze",
  "system": "bleeding",
  "label": "Pack wound with gauze or hemostatic gauze",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-pressure-bandage",
  "system": "bleeding",
  "label": "Pressure dressing",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-control-severe-bleeding-technique-load-and-go",
  "system": "bleeding",
  "label": "Load and go (if uncontrolled)"
}, {
  "id": "intv-control-shock-technique-keep-patient-warm",
  "system": "shock",
  "label": "Keep patient warm (e.g., apply blankets)"
}, {
  "id": "intv-control-shock-technique-administer-high-concentration-o2",
  "system": "shock",
  "label": "Administer high concentration of oxygen"
}, {
  "id": "intv-control-shock-technique-place-patient-supine-position",
  "system": "shock",
  "label": "Place or maintain patient in supine position"
}, {
  "id": "intv-control-shock-technique-administer-iv-boluses",
  "system": "shock",
  "label": "IV fluid resuscitation",
  prompts: []
}, {
  "id": "intv-occlusive-dressing",
  "system": "breathing",
  "label": "Occlusive dressing",
  prompts: ["prompt-occlusive-dressing-injury-type", "prompt-occlusive-dressing-method"]
}, {
  "id": "intv-pleural-decompression",
  "system": "breathing",
  "label": "Needle decompression",
  prompts: ["prompt-pleural-decompression-injury-type", "prompt-pleural-decompression-needle-placement-side-of-the-body", "prompt-pleural-decompression-needle-placement-anatomical-landmark", "prompt-pleural-decompression-needle-size", "prompt-pleural-decompression-needle-length"]
}, {
  "id": "intv-spinal-immobilization-technique-manual-c-spine",
  "label": "Manual c-spine stabilization"
}, {
  "id": "intv-spinal-immobilization-technique-cervical-collar",
  "label": "Cervical collar"
}, {
  "id": "intv-spinal-immobilization-technique-transfer-to-device",
  "label": "Transfer patient to immobilization device",
  prompts: []
}, {
  "id": "intv-spinal-immobilization-technique-attach-cid",
  "label": "Attach cervical immobilization device (CID)"
}, {
  "id": "intv-transfers-patient-method-walk-patient",
  "label": "Walk patient to ambulance"
}, {
  "id": "intv-transfers-patient-method-place-directly-on-stretcher",
  "label": "Place directly on stretcher"
}, {
  id: "intv-place-immobilized-patient-on-stretcher",
  label: "Place immobilized patient on stretcher"
},
/*
{
   "id": "intv-transfers-patient-method-long-backboard",
   "label": "Place on long back board (LBB)"
},
{
   "id": "intv-transfers-patient-method-short-board",
   "label": "Place on short board (e.g., KED)"
},
{
   "id": "intv-transfers-patient-method-scoop-stretcher",
   "label": "Place on scoop stretcher"
},
*/
{
  "id": "intv-transport",
  "label": "Transport",
  prompts: ["prompt-transport-facility-choice", "prompt-transport-method", "prompt-transport-lights-siren-decision"]
}, {
  "id": "intv-apply-sterile-dressings",
  "label": "Apply sterile dressings",
  distPrompts: ["prompt-wound-locations"]
}, {
  "id": "intv-splint-fractures",
  "system": "bleeding",
  "label": "Splint fractures" // distPrompts: [
  // ],
  // prompts: [
  //    "prompt-splint-type"
  // ]

}, {
  id: "intv-sterile-dressing-soft-tissue",
  label: "Apply sterile dressing over soft tissue",
  distPrompts: ["prompt-wound-location"]
}, {
  "id": "intv-retrieve-amputated-body-part",
  "label": "Retrieve avulsed/amputated part",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-wrap-body-part-in-saline-soaked-gauze",
  label: "Wrap part in gauze soaked in saline",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-place-body-part-in-bag",
  label: "Place part in bag",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-keep-body-part-cool",
  label: "Keep cool but do not pack directly on ice",
  distPrompts: ["prompt-wound-location"]
}, {
  id: "intv-transport-body-part-to-receiving-facility",
  label: "Transport part to receiving facility",
  distPrompts: ["prompt-wound-location"]
}, // {
//    "id": "intv-establish-ivs",
//    "label": "Establish IVs"
// },
// {
//    "id": "intv-replace-bls-airway-with-als-airway",
//    "label": "Replace basic airway with advanced airway"
// },
// {
//    "id": "intv-replace-bandages",
//    "label": "Replace bandages"
// },
// {
//    "id": "intv-replace-oxygen-tank",
//    "label": "Replace oxygen tank"
// },
// {
//    "id": "intv-adjust-iv-replace-bolus",
//    "label": "Adjust an IV (e.g., hang second bag)"
// },
// {
//    "id": "intv-turn-up-heat-in-ambulance",
//    "label": "Turn up heat in ambulance"
// },
// {
//    "id": "intv-reassess-intv-other",
//    "label": "Reassess other intervention"
// },
// {
//    "id": "intv-reassess-vital-signs",
//    "label": "Reassess vital signs"
// }
{
  id: "intv-prepare-and-administer-pain-nausea-vomiting-medications",
  label: "Prepare and administer medications"
}, {
  id: "intv-prepare-and-administer-sedative",
  label: "Prepare and administer medications"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTVS);

/***/ }),

/***/ 7237:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublishedScenario": () => (/* binding */ PublishedScenario),
/* harmony export */   "ScenarioType": () => (/* binding */ ScenarioType)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5558);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7414);


class ScenarioType {
  constructor(data) {
    const {
      id,
      name,
      schemaVersion,
      checklist,
      interventions,
      interventionPrompts,
      interventionPromptAnswers,
      interventionVariantAnswers,
      interventionMenuCategories,
      interventionMenuItems,
      medications,
      hierarchy,
      phaseData,
      ...remaining
    } = data; // console.log(checklist)

    this.id = id;
    this.name = name;
    this.schemaVersion = schemaVersion;
    this._checklist = checklist;
    this._interventions = interventions;
    this._interventionPrompts = interventionPrompts;
    this._interventionPromptAnswers = interventionPromptAnswers;
    this.interventionVariantAnswers = interventionVariantAnswers;
    this._interventionMenuCategories = interventionMenuCategories;
    this._interventionMenuItems = interventionMenuItems;
    this._medications = medications;
    this.checkListMetaData = this.genCheckListMetaData();
    this.uniqueIDs = this.genUniqueIDs();
    this.uniqueLabels = this.genUniqueLabels();
  }

  genUniqueIDs() {
    let ids = this._interventions.map(e => e.id);

    ids = ids.concat(this._interventionPrompts.map(e => e.id));
    ids = ids.concat(this._interventionPromptAnswers.map(e => e.id));
    ids = ids.concat(this._interventionMenuCategories.map(e => e.id));
    ids = ids.concat(this._interventionMenuItems.map(e => e.id));
    ids = ids.concat(this._medications.map(e => e.id));
    ids = ids.concat(this._checklist.map(e => e.id));
    return ids;
  }

  genUniqueLabels() {
    let labels = this._interventions.map(e => e.label);

    labels = labels.concat(this._checklist.map(e => e.label));
    return labels;
  }

  genCheckListMetaData() {
    const metaData = [];
    const CHECKLIST = [...this._checklist].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      if (undefined === e.phase) e.phase = null;
      if (undefined === e.subPhase) e.subPhase = null;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e) && !OPTIONS.includes(e));
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null];
    SUB_PHASES.forEach(sp => sp.items = clItemsBySubPhase[sp.id].map(i => i.id)); //

    return CHECKLIST;
  }

  genHierarchy() {
    const CHECKLIST = [...this._checklist].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e));
    CL_ITEMS.forEach(e => {
      if (undefined === e.subPhase) {
        // FIXME: we should set this up in the data-structure itself
        e.subPhase = null;
      }
    });
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null];
    SUB_PHASES.forEach(sp => sp.items = clItemsBySubPhase[sp.id].map(i => i.id));
    const hierarchy = [];
    PHASES.forEach(ph => {
      const {
        subPhases,
        items,
        ...newPh
      } = ph;

      if (undefined !== items) {
        newPh.items = items.map(itemID => {
          const {
            options,
            ...newItem
          } = CL_ITEMS.find(e => e.id === itemID);

          if (undefined !== options) {
            newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
          }

          return newItem;
        });
        hierarchy.push(newPh);
      } else {
        newPh.subPhases = subPhases.map(sphID => {
          const {
            items,
            ...newSph
          } = SUB_PHASES.find(sp => sp.id === sphID);
          newSph.items = items.map(itemID => {
            const {
              options,
              ...newItem
            } = CL_ITEMS.find(i => i.id === itemID);

            if (undefined !== options) {
              newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
            }

            return newItem;
          });
          return newSph;
        });
        hierarchy.push(newPh);
      }
    });
    return hierarchy;
  }

  getChecklistItem(id) {
    return this._checklist.find(e => e.id === id);
  }

  getInterventionForm(interventionID) {
    return this.getIntervention(interventionID, true);
  }

  getIntervention(interventionID, expand = false) {
    const found = this._interventions.find(e => e.id === interventionID);

    if (!found) {
      return {};
    }

    const {
      distPrompts,
      prompts,
      ...intv
    } = found;

    if (!expand) {
      intv.distPrompts = distPrompts;
      intv.prompts = prompts;
      return intv;
    }

    intv.distPrompts = distPrompts.map(distPromptID => this.getPrompt(distPromptID, true));
    intv.prompts = prompts.map(promptID => this.getPrompt(promptID, true));
    return intv;
  }

  getDecisionWithOptions(id) {
    const found = this.getChecklistItem(id);

    if (!found) {
      return {};
    }

    const {
      options,
      ...decision
    } = found; // console.log(decision)

    decision.options = options.map(optID => this.getChecklistItem(optID));
    return decision;
  }

  getPrompt(promptID, expand = false) {
    const found = this._interventionPrompts.find(e => e.id === promptID);

    if (!found) {
      return {};
    }

    const {
      answers,
      ...prompt
    } = found;

    if (!expand) {
      prompt.answers = answers;
    } else {
      prompt.answers = answers.map(answerID => this.getAnswer(answerID));
    }

    return prompt;
  }

  getAnswer(answerID) {
    return this._interventionPromptAnswers.find(e => e.id === answerID);
  }

  getInterventionMenus() {
    return this._interventionMenuCategories.map(e => {
      const {
        items,
        ...newRec
      } = e;
      newRec.items = items.map(itemID => this._interventionMenuItems.find(mi => mi.id === itemID));
      return newRec;
    });
  }

}
class PublishedScenario {
  constructor(data) {
    const {
      id,
      name,
      version,
      datePublished,
      scenarioType,
      schemaVersion,
      info,
      vitalSigns,
      OPQRST,
      SAMPLE,
      assessmentFindings,
      checkListCorrectness,
      correctMedicationDosages,
      problems,
      solutions,
      actions,
      interventionVariantAnswers,
      checkListMetaData,
      medications,
      interventions,
      interventionPrompts,
      interventionPromptAnswers,
      interventionMenuCategories,
      interventionMenuItems,
      ...rest
    } = data;
    this.id = id;
    this.name = name;
    this.version = version;
    this.datePublished = datePublished;
    this.scenarioType = scenarioType;
    this.schemaVersion = schemaVersion;
    this.info = info;
    this.vitalSigns = vitalSigns;
    this.OPQRST = OPQRST;
    this.SAMPLE = SAMPLE;
    this.assessmentFindings = assessmentFindings;
    this.checkListCorrectness = checkListCorrectness;
    this.correctMedicationDosages = correctMedicationDosages;
    this.problems = problems;
    this.solutions = solutions;
    this.actions = actions;
    this.interventionVariantAnswers = interventionVariantAnswers;
    this._checkListMetaData = checkListMetaData;
    this.medications = medications;
    this._interventions = interventions;
    this._interventionPrompts = interventionPrompts;
    this._interventionPromptAnswers = interventionPromptAnswers;
    this._interventionMenuCategories = interventionMenuCategories;
    this._interventionMenuItems = interventionMenuItems; // console.log(rest)

    this.phaseData = this.genPhaseData();
    this.interventionMenus = this.genInterventionMenus();
    this.systemInterventions = this.genSystemInterventions();
  }

  genSystemInterventions() {
    let tmp = this._interventions.filter(e => !!e.system).map(e => {
      return {
        id: e.id,
        type: _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.INTERV,
        label: e.label,
        system: e.system
      };
    });

    const sysIntvs = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(tmp, "system"); // console.log(sysIntvs)

    return sysIntvs;
  }

  genInterventionMenus() {
    return this._interventionMenuCategories.map(cat => {
      const {
        items,
        ...menuCat
      } = cat;
      menuCat.items = items.map(itemID => this._interventionMenuItems.find(mi => mi.id === itemID));
      return menuCat;
    });
  }

  genPhaseData() {
    const CHECKLIST = [...this._checkListMetaData].map(e => {
      // remove obsolete attributes
      delete e.promptID;
      delete e.relation;
      delete e.verboseLabel;
      return e;
    });
    const PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.PHASE);
    const SUB_PHASES = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.SUB_PHASE);
    const OPTIONS = CHECKLIST.filter(e => e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION_OPTION);
    const CL_ITEMS = CHECKLIST.filter(e => !PHASES.includes(e) && !SUB_PHASES.includes(e) && !OPTIONS.includes(e));
    CL_ITEMS.forEach(e => {
      if (undefined === e.subPhase) {
        // FIXME: we should set this up in the data-structure itself
        e.subPhase = null;
      }
    });
    const phaseSubPhases = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(SUB_PHASES, "phase");
    PHASES.forEach(p => {
      if (p.id in phaseSubPhases) {
        p.subPhases = phaseSubPhases[p.id].map(e => e.id);
      }
    });
    const decisionOpts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(OPTIONS, "parentID");
    CL_ITEMS.forEach(i => {
      if (i.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.DECISION) {
        i.options = decisionOpts[i.id].map(o => o.id);
      }
    });
    const clDepth = {};
    CL_ITEMS.forEach(e => {
      const rel = !!e.subPhase ? e.subPhase : e.phase;

      if (rel === e.parentID) {
        clDepth[e.id] = 1;
      } else {
        clDepth[e.id] = clDepth[e.parentID] + 1;
      }

      if (e.type === _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.NESTED_CHECKLIST) {
        e.type = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MDB_TYPES.CL_HEADING;
      }

      e.parentID = rel;
      e.depth = clDepth[e.id];
    });
    const clItemsBySubPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(CL_ITEMS, "subPhase");
    const phaseItems = [...clItemsBySubPhase[null]];
    const itemsByPhase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.groupByKey)(phaseItems, "phase");
    PHASES.forEach(p => {
      if (p.id in itemsByPhase) {
        p.items = itemsByPhase[p.id].map(i => i.id);
      }
    });
    delete clItemsBySubPhase[null]; // console.log(clItemsBySubPhase)

    SUB_PHASES.forEach(sp => {
      // console.log(sp)
      const items = clItemsBySubPhase[sp.id].map(i => i.id); // console.log()

      sp.items = items;
    });
    const hierarchy = [];
    PHASES.forEach(ph => {
      const {
        subPhases,
        items,
        ...newPh
      } = ph;

      if (undefined !== items) {
        newPh.items = items.map(itemID => {
          const {
            options,
            ...newItem
          } = CL_ITEMS.find(e => e.id === itemID);

          if (undefined !== options) {
            newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
          }

          return newItem;
        });
        hierarchy.push(newPh);
      } else {
        newPh.subPhases = subPhases.map(sphID => {
          const {
            items,
            ...newSph
          } = SUB_PHASES.find(sp => sp.id === sphID);
          newSph.items = items.map(itemID => {
            const {
              options,
              ...newItem
            } = CL_ITEMS.find(i => i.id === itemID);

            if (undefined !== options) {
              newItem.options = options.map(optID => OPTIONS.find(o => o.id === optID));
            }

            return newItem;
          });
          return newSph;
        });
        hierarchy.push(newPh);
      }
    });
    return hierarchy;
  }

  getChecklistItem(id) {
    return this._checkListMetaData.find(e => e.id === id);
  }

  getInterventionForm(intvID) {
    return this.getIntervention(intvID, true);
  }

  getIntervention(interventionID, expand = false) {
    const found = this._interventions.find(e => e.id === interventionID);

    if (!found) {
      return {};
    }

    const {
      distPrompts,
      prompts,
      ...intv
    } = found;

    if (!expand) {
      intv.distPrompts = distPrompts;
      intv.prompts = prompts;
      return intv;
    }

    intv.distPrompts = distPrompts.map(distPromptID => this.getPrompt(distPromptID, true));
    intv.prompts = prompts.map(promptID => this.getPrompt(promptID, true));
    return intv;
  }

  getPrompt(promptID, expand = false) {
    const found = this._interventionPrompts.find(e => e.id === promptID);

    if (!found) {
      return {};
    }

    const {
      answers,
      ...prompt
    } = found;

    if (!expand) {
      prompt.answers = answers;
    } else {
      prompt.answers = answers.map(answerID => this.getAnswer(answerID));
    }

    return prompt;
  }

  getAnswer(answerID) {
    return this._interventionPromptAnswers.find(e => e.id === answerID);
  }

}

/***/ }),

/***/ 7414:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anyHaveValues": () => (/* binding */ anyHaveValues),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "getRecsOfType": () => (/* binding */ getRecsOfType),
/* harmony export */   "groupByKey": () => (/* binding */ groupByKey)
/* harmony export */ });
const deepCopy = object => {
  return JSON.parse(JSON.stringify(object));
}; // returns subset of records from array 'arr' whose type field matches 'type'

const getRecsOfType = (arr, type) => {
  return arr.filter(rec => rec.type === type);
}; // returns if any of the arrays passed to this have lengths > 0
// perhaps this should be written as a non-1-liner for clarity

const anyHaveValues = (...arrs) => {
  return arrs.map(arr => arr.length > 0).filter(val => val === true).length > 0;
}; // takes a list of objects and fieldName (key) and returns an object who's attributes are
// the distinct values for that field mapped to a list objects which share that
// value

const groupByKey = (list, key) => list.reduce((hash, obj) => ({ ...hash,
  [obj[key]]: (hash[obj[key]] || []).concat(obj)
}), {});

/***/ }),

/***/ 1091:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["active bleeding (internal or external)","alcohol/drug use","altered mental status","central nervous system (CNS) depression","chronic heart failure","chronic lung disease","gastrointestinal bleeding","geriatric","head injury","hemophilia","hepatic issues or failure","hypersensitivity/allergy","hypertension","hypotension","hypovolemia","infant/toddler","intoxication","intracranial mass or bleeding","pediatric","peptic ulcers","pregnancy","recent dosage","renal issues or failure","respiratory depression","SBP > 70-90 with uncontrolled bleeding","suspected bowel obstruction","suspected pneumothorax","vascular bleeding","active seizing","septic shock","stroke","acute stroke"]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7645)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map