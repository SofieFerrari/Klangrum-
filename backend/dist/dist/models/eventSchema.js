"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var Schema = _mongoose["default"].Schema,
  model = _mongoose["default"].model;
var eventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  }
});
var Event = exports.Event = model("Event", eventSchema);