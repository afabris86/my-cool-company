import { Department } from "../department/department.types";
import { Developer } from "../developer/Developer";
import TreeNode from "../tree_node/TreeNode";

export class Manager extends TreeNode {
  deparment: Department;

  super(deparment: Department) {
    this.deparment = deparment;
  }

  getDepartment() {
    return this.deparment;
  }
}
