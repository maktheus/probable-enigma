import { Category } from "../../cars/model/Category";
import {ICategoryRepository} from "../../cars/repositories/implemetantions/ICategoriesRepository";

class ListCategoriesUseCase{
    constructor(private categoriesRepositories: ICategoryRepository){}


    execute():Category[] {
        const categories = this.categoriesRepositories.list();
        return categories
       }
}

export {ListCategoriesUseCase};