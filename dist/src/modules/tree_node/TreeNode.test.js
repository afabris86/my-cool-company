"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
describe("TreeNode", () => {
    let node;
    beforeEach(() => {
        node = new TreeNode_1.default("CEO", 0);
    });
    describe("getId", () => {
        it("returns the node id", () => {
            expect(node.getId()).toBeGreaterThanOrEqual(0);
        });
    });
    describe("getName", () => {
        it("returns the node name", () => {
            expect(node.getName()).toEqual("CEO");
        });
    });
    describe("getChildren", () => {
        it("returns the node children", () => {
            expect(node.getChildren()).toEqual([]);
        });
    });
    describe("addChild", () => {
        it("adds child to a node", () => {
            const child = new TreeNode_1.default("VP", 1);
            node.addChild(child);
            expect(node.getChildren()).toEqual([child]);
        });
    });
});
