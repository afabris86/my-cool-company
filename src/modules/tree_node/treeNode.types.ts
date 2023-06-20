import { Department } from "../department/department.types";
import { ProgrammingLanguage } from "../programming_language/programmingLanguage.types";

export interface TreeNode {
  id: number;
  name: string;
  parent_node: Node;
  height: number;
  children: Node[];
}

export interface Manager extends TreeNode {
  department: Department;
}

export interface Developer extends TreeNode {
  programming_language: ProgrammingLanguage;
}
