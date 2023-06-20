import { ProgrammingLanguage } from "../programming_language/programmingLanguage.types";
import { TreeNode } from "../tree_node/TreeNode";

export class Developer extends TreeNode {
  programming_language: ProgrammingLanguage;

  super(programming_language: ProgrammingLanguage) {
    this.programming_language = programming_language;
  }

  addChild(child: Developer): void {
    this.children.push(child);
  }
}
