"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var app = (0, express_1["default"])();
dotenv_1["default"].config();
app.use((0, cors_1["default"])());
app.use((0, express_1.json)());
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("App running on port ".concat(port));
});
