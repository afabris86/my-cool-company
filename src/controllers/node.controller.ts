import CompanyTree from "../modules/company_tree/CompanyTree";

export const getChildrenByNodeId = async (req, res, next) => {
  const nodeId = req.params.id;

  try {
    const treeNode = await CompanyTree.getInstance().find(nodeId);

    res.json(treeNode.getChildren());
  } catch (err) {
    console.error(`Error finding node id ${nodeId}`, err.message);
    next(err);
  }
};
