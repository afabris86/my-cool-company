import { Request, Response, NextFunction } from "express";

import CompanyTree from "../modules/company_tree/CompanyTree";

export const getChildrenByNodeId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const nodeId = parseInt(req.params.id);

  try {
    const treeNode = await CompanyTree.getInstance().find(nodeId);

    const children = treeNode?.getChildren() || [];

    res.json({ children: children });
  } catch (err) {
    console.error(`Error finding node id ${nodeId}`, err);
    next(err);
  }
};
