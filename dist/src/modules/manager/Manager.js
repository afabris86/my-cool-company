"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const TreeNode_1 = __importDefault(require("../tree_node/TreeNode"));
class Manager extends TreeNode_1.default {
    super(deparment) {
        this.deparment = deparment;
    }
    getDepartment() {
        return this.deparment;
    }
}
exports.Manager = Manager;
