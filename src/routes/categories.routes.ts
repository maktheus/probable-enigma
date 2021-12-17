import { Router } from "express";
import { CategoriesRepositories } from "../modules/cars/repositories/CategoriesRepositories";
import { createCategoryControler } from "../modules/cars/useCases/Category/createCategory";
import { listcategoriescontroller } from "../modules/cars/useCases/Category/listCategory";

const router = Router();


router.post("/categories", (req, res) => {
    return createCategoryControler.handle(req,res);
});

router.get("/categories", (req, res) => {
   return listcategoriescontroller.handle(req,res);
});

export { router as categoriesRouter };
