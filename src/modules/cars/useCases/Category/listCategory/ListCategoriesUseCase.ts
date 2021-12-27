import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/implemetantions/ICategoriesRepository";

class ListCategoriesUseCase{
    constructor(private categoriesRepositories: ICategoryRepository){}


    execute():Category[] {
        const categories = this.categoriesRepositories.list();
        return categories
       }
}

export {ListCategoriesUseCase};