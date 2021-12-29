import { response, Router } from "express";
import multer from "multer";


import { CreateCategoryControler } from "../modules/cars/useCases/Category/createCategory/CreateCategory";
import { importCategoryController } from "../modules/cars/useCases/Category/importCategory";
import { listcategoriescontroller } from "../modules/cars/useCases/Category/listCategory";

const router = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryControler  = new CreateCategoryControler();


router.post("/categories", createCategoryControler.handle);


router.get("/categories", (req, res) => {
   return listcategoriescontroller.handle(req,res);
});

router.post("/import", upload.single("file"),(req, res) => {
     return importCategoryController.handle(req,res);
});


// router.post("/categories/:id", (req, res) => {
//     return updateCategoryControler.handle(req,res);
// });


export { router as categoriesRouter };
