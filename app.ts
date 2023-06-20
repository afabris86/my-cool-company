import express, { Express, Request, Response } from "express";
import router from "./src/routes/node.route";
import CompanyTree from "./src/modules/company_tree/CompanyTree";

const app: Express = express();
const port = 3000;

app.use("/", router);

// app.get("/nodes/:id/children", (req: Request, res: Response) => {
//   console.log("...... APPGET getChildrenByNodeId");
//   const nodeId = parseInt(req.params.id);

//   const treeNode = CompanyTree.getInstance().find(nodeId);

//   const children = treeNode?.getChildren() || [];

//   res.json({ children: children });
// });

// serve up production assets
app.use(express.static("client/build"));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

CompanyTree.getInstance().insert({ parentNodeId: 0, nodeId: 1, name: "CTO" });
CompanyTree.getInstance().insert({
  parentNodeId: 1,
  nodeId: 2,
  name: "Head of engineering",
});
CompanyTree.getInstance().insert({
  parentNodeId: 2,
  nodeId: 3,
  name: "Backend Developer",
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
