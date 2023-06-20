"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../tree_node/TreeNode"));
class CompanyTree {
    constructor() {
        this.root = new TreeNode_1.default("Mr Ceo");
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new CompanyTree();
        return this.instance;
    }
    // reference for preOrderTraversal:  https://www.30secondsofcode.org/js/s/data-structures-tree/
    *preOrderTraversal(node = this.root) {
        yield node;
        const children = node.getChildren();
        if (children.length) {
            for (let child of children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }
    // reference for find:  https://www.30secondsofcode.org/js/s/data-structures-tree/
    find(id) {
        for (let node of this.preOrderTraversal()) {
            if (node.getId() === id)
                return node;
        }
    }
    insert(parentNodeId, name) {
        for (let node of this.preOrderTraversal()) {
            if (node.getId() === parentNodeId) {
                node.addChild(new TreeNode_1.default(name, parentNodeId));
                return true;
            }
        }
        return false;
    }
}
exports.default = CompanyTree;
