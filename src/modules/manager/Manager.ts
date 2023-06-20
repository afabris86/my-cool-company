import { Department } from "../department/department.types";
import { Developer } from "../developer/Developer";
import { TreeNode } from "../tree_node/TreeNode";

export class Manager extends TreeNode {
  deparment: Department;

  super(deparment: Department) {
    this.deparment = deparment;

    // TODO use constructor
    //this.children = children.map((child) => new TreeNode(child.name));
  }

  addChild(child: Developer | Manager): void {
    this.children.push(child);
  }

  getDepartment() {
    return this.deparment;
  }
}
