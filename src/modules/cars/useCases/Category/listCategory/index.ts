import { CategoriesRepositories } from "../../../repositories/CategoriesRepositories"
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listcategoriesrepository =  null;
const listCategoriesusecase = new ListCategoriesUseCase(listcategoriesrepository);
const listcategoriescontroller = new ListCategoriesController(listCategoriesusecase);

export { listcategoriescontroller };