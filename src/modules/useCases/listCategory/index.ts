import { CategoriesRepositories } from "../../cars/repositories/CategoriesRepositories";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listcategoriesrepository = new CategoriesRepositories();
const listCategoriesusecase = new ListCategoriesUseCase(listcategoriesrepository);
const listcategoriescontroller = new ListCategoriesController(listCategoriesusecase);

export { listcategoriescontroller };