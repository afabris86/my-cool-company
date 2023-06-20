"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildrenByNodeId = void 0;
const CompanyTree_1 = __importDefault(require("../modules/company_tree/CompanyTree"));
const getChildrenByNodeId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nodeId = parseInt(req.params.id);
    const treeNode = CompanyTree_1.default.getInstance().find(nodeId);
    const children = (treeNode === null || treeNode === void 0 ? void 0 : treeNode.getChildren()) || [];
    res.send({ children: children });
});
exports.getChildrenByNodeId = getChildrenByNodeId;
