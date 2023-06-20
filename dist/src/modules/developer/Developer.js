"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
const TreeNode_1 = __importDefault(require("../tree_node/TreeNode"));
class Developer extends TreeNode_1.default {
    super(programming_language) {
        this.programming_language = programming_language;
    }
    addChild(child) {
        super.addChild(child);
    }
    getProgrammingLanguage() {
        this.programming_language;
    }
}
exports.Developer = Developer;
