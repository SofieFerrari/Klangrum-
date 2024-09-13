"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Illustration = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Schema = _mongoose["default"].Schema,
  model = _mongoose["default"].model;
var illustrationsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  technique: {
    type: String,
    required: true
  }
});
var Illustration = exports.Illustration = model("Illustration", illustrationsSchema);