class TreeNode {
  private name: string;
  private id: number;
  private children: TreeNode[];

  constructor(name: string) {
    this.name = name;
    this.id = Math.random();
    this.children = [];
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
}

export default TreeNode;
