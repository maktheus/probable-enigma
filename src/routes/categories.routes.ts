import { Router } from "express";
import { CategoriesRepositories } from "../modules/cars/repositories/CategoriesRepositories";
import { createCategoryControler } from "../modules/useCases/createCategory";

const router = Router();

const categoriesRepositories = new CategoriesRepositories();

router.post("/categories", (req, res) => {
    return createCategoryControler.handle(req,res);
});

router.get("/categories", (req, res) => {
    const list = categoriesRepositories.list();

    return res.json(list);
});

export { router as categoriesRouter };
