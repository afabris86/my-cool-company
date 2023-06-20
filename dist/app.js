"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_route_1 = __importDefault(require("./src/routes/node.route"));
const app = (0, express_1.default)();
const port = 3000;
// serve up production assets
app.use(express_1.default.static("client/build"));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.use("/", node_route_1.default);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
