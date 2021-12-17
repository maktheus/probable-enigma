import { CategoriesRepositories } from "../../../repositories/CategoriesRepositories";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


const categoriesRepository = CategoriesRepositories.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };