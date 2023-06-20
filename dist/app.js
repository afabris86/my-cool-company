"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_route_1 = __importDefault(require("./src/routes/node.route"));
const CompanyTree_1 = __importDefault(require("./src/modules/company_tree/CompanyTree"));
const app = (0, express_1.default)();
const port = 3000;
app.use("/", node_route_1.default);
// app.get("/nodes/:id/children", (req: Request, res: Response) => {
//   console.log("...... APPGET getChildrenByNodeId");
//   const nodeId = parseInt(req.params.id);
//   const treeNode = CompanyTree.getInstance().find(nodeId);
//   const children = treeNode?.getChildren() || [];
//   res.json({ children: children });
// });
// serve up production assets
app.use(express_1.default.static("client/build"));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
CompanyTree_1.default.getInstance().insert({ parentNodeId: 0, nodeId: 1, name: "CTO" });
CompanyTree_1.default.getInstance().insert({
    parentNodeId: 1,
    nodeId: 2,
    name: "Head of engineering",
});
CompanyTree_1.default.getInstance().insert({
    parentNodeId: 2,
    nodeId: 3,
    name: "Backend Developer",
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
