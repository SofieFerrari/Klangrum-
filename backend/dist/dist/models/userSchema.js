"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
var Schema = _mongoose["default"].Schema,
  model = _mongoose["default"].model;
var userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: [{
      validator: function validator(value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value);
      },
      message: "Password must contain at least one uppercase letter, one lowercase letter, and a number"
    }]
  },
  accessToken: {
    type: String,
    "default": function _default() {
      return _bcrypt["default"].genSaltSync();
    }
  }
});
var User = exports.User = model("User", userSchema);

// Möjlig förbättring: accessToken-fältet
// Det kan vara bättre att generera ett riktigt accessToken (t.ex. en JWT-token eller något annat unikt värde) när användaren loggar in eller vid behov, snarare än att använda ett salt från bcrypt.genSaltSync(). Ett salt är mer lämpligt för hashning av lösenord än för användning som ett autentiseringstoken.