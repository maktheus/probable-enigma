import { response, Router } from "express";
import multer from "multer";


import { CreateCategoryControler } from "../modules/cars/useCases/Category/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/Category/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/Category/listCategory/listCategoriesController";

const router = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryControler  = new CreateCategoryControler(); 
const importCategoryController  = new ImportCategoryController();             
const listCategoriesController  = new ListCategoriesController();


router.post("/categories", createCategoryControler.handle);


router.get("/categories", listCategoriesController.handle);

router.post("/import", upload.single("file"), importCategoryController.handle);



export { router as categoriesRouter };
