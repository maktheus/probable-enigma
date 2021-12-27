import { CategoriesRepositories } from "../../../repositories/CategoriesRepositories"
import { CreateCategoryControler } from "./CreateCategory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


export default ():CreateCategoryControler => {

const categoriesRepository = new CategoriesRepositories();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryControler = new CreateCategoryControler(createCategoryUseCase);

return createCategoryControler;

};