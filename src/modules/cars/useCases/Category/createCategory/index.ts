import { CategoriesRepositories } from "../../../repositories/CategoriesRepositories"
import { CreateCategoryControler } from "./CreateCategory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepositories.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryControler = new CreateCategoryControler(createCategoryUseCase);

export{createCategoryControler};