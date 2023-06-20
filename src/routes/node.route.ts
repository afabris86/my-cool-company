import express from "express";

import { getChildrenByNodeId } from "../controllers/node.controller";

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

export default router;
