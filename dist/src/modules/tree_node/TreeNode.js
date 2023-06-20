"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(name, parentNodeId) {
        this.name = name;
        this.id = Math.random();
        this.children = [];
        this.parentNodeId = parentNodeId;
    }
    addChild(child) {
        this.children.push(child);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getChildren() {
        return this.children;
    }
    getParentNodeId() {
        return this.parentNodeId;
    }
}
exports.default = TreeNode;
