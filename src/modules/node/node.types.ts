import { Department } from "../department/department.types";
import { ProgrammingLanguage } from "../programming_language/programmingLanguage.types";

interface Node {
  id: number;
  name: string;
  parent_node: Node;
  height: number;
}

interface Manager extends Node {
  department: Department;
}

interface Developer extends Node {
  programming_language: ProgrammingLanguage;
}
