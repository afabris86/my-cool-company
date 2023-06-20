class TreeNode {
  private name: string;
  private id: number;
  private children: TreeNode[];
  private parentNodeId: number | undefined;

  constructor(name: string, parentNodeId?: number) {
    this.name = name;
    this.id = Math.random();
    this.children = [];
    this.parentNodeId = parentNodeId;
  }

  addChild(child: TreeNode) {
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

export default TreeNode;
