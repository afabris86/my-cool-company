"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_controller_1 = require("../controllers/node.controller");
const router = express_1.default.Router();
/* GET node children */
router.get("/nodes/:id/children", node_controller_1.getChildrenByNodeId);
/* POST node */
router.post("/nodes", () => {
    // TODO
});
/* PATCH node */
router.patch("/nodes/:id", () => {
    // TODO
});
exports.default = router;
