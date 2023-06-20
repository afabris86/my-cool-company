import { TreeNode } from "../modules/tree_node/treeNode.types";

const express = require("express");
const router = express.Router();

/* GET node children */
router.get("/nodes/:id/children", (): Promise<TreeNode[]> => {});

/* POST node */
router.post("/nodes", () => {
  // TODO
});

/* PATCH node */
router.patch("/nodes/:id", () => {
  // TODO
});

module.exports = router;
