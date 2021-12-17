import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationRouter } from "./specification.routes";

const router = Router();


router.use(categoriesRouter);
router.use(specificationRouter);

export {router}