import { Request, Response, NextFunction } from "express";

import CompanyTree from "../modules/company_tree/CompanyTree";

export const getChildrenByNodeId = async (req: Request, res: Response) => {
  const nodeId = parseInt(req.params.id);

  const treeNode = CompanyTree.getInstance().find(nodeId);

  const children = treeNode?.getChildren() || [];

  res.send({ children: children });
};
