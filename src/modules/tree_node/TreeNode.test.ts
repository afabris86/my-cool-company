import TreeNode from "./TreeNode";

describe("TreeNode", () => {
  let node: TreeNode;

  beforeEach(() => {
    node = new TreeNode("CEO");
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
      const child = new TreeNode("VP");

      node.addChild(child);

      expect(node.getChildren()).toEqual([child]);
    });
  });
});
