import CompanyTree from "../modules/company_tree/CompanyTree";
import { getChildrenByNodeId } from "../controllers/node.controller";
import { TreeNode } from "../modules/tree_node/treeNode.types";

const express = require("express");
const router = express.Router();

/* GET node children */
router.get("/nodes/:id/children", getChildrenByNodeId);

/* POST node */
router.post("/nodes", () => {
  // TODO
});

/* PATCH node */
router.patch("/nodes/:id", () => {
  // TODO
});

module.exports = router;
