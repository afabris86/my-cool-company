import TreeNode from "../tree_node/TreeNode";

interface InsertProps {
  parentNodeId: number;
  nodeId: number;
  name: string;
}

class CompanyTree {
  private static instance: CompanyTree;

  private root: TreeNode;

  private constructor() {
    this.root = new TreeNode("Mr Ceo", 0);
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new CompanyTree();
    return this.instance;
  }

  // reference for preOrderTraversal:  https://www.30secondsofcode.org/js/s/data-structures-tree/
  *preOrderTraversal(node = this.root): Generator<TreeNode | undefined> {
    yield node;
    const children = node.getChildren();
    if (children.length) {
      for (let child of children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }
  // reference for find:  https://www.30secondsofcode.org/js/s/data-structures-tree/
  find(id: number): TreeNode | undefined {
    for (let node of this.preOrderTraversal()) {
      if ((node as TreeNode).getId() === id) {
        return node;
      }
    }
  }

  insert({ parentNodeId, nodeId, name }: InsertProps) {
    for (let node of this.preOrderTraversal()) {
      if ((node as TreeNode).getId() === parentNodeId) {
        (node as TreeNode).addChild(new TreeNode(name, nodeId, parentNodeId));
        return true;
      }
    }
    return false;
  }
}

export default CompanyTree;
