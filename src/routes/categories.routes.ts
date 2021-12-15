import { Router } from "express";
import { CategoriesRepositories } from "../modules/cars/repositories/CategoriesRepositories";
import { createCategoryControler } from "../modules/useCases/createCategory";
import { listcategoriescontroller } from "../modules/useCases/listCategory";

const router = Router();

const categoriesRepositories = new CategoriesRepositories();

router.post("/categories", (req, res) => {
    return createCategoryControler.handle(req,res);
});

router.get("/categories", (req, res) => {
   return listcategoriescontroller.handle(req,res);
});

export { router as categoriesRouter };
