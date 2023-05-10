"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Person = /*#__PURE__*/(0, _createClass2["default"])(function Person(id, name, role) {
  (0, _classCallCheck2["default"])(this, Person);
  this.id = id;
  this.name = name;
  this.role = role;
});
var Student = /*#__PURE__*/function (_Person) {
  (0, _inherits2["default"])(Student, _Person);
  var _super = _createSuper(Student);
  function Student(id, name) {
    (0, _classCallCheck2["default"])(this, Student);
    return _super.call(this, id, name, 'Student');
  }
  return (0, _createClass2["default"])(Student);
}(Person);
var Professor = /*#__PURE__*/function (_Person2) {
  (0, _inherits2["default"])(Professor, _Person2);
  var _super2 = _createSuper(Professor);
  function Professor(id, name) {
    (0, _classCallCheck2["default"])(this, Professor);
    return _super2.call(this, id, name, 'Professor');
  }
  return (0, _createClass2["default"])(Professor);
}(Person);
var Admin = /*#__PURE__*/function (_Person3) {
  (0, _inherits2["default"])(Admin, _Person3);
  var _super3 = _createSuper(Admin);
  function Admin(id, name) {
    (0, _classCallCheck2["default"])(this, Admin);
    return _super3.call(this, id, name, 'Admin');
  }
  return (0, _createClass2["default"])(Admin);
}(Person);
function createPerson(personData) {
  switch (personData.role) {
    case 'Student':
      return new Student(personData.id, personData.name);
    case 'Professor':
      return new Professor(personData.id, personData.name);
    case 'Admin':
      return new Admin(personData.id, personData.name);
    default:
      throw new Error("Invalid role: ".concat(personData.role));
  }
}
module.exports = {
  createPerson: createPerson
};