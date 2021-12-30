import { inject, injectable } from "tsyringe";
import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/implemetantions/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoriesRepositories: ICategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = this.categoriesRepositories.list();
        return categories;
    }
}

export { ListCategoriesUseCase };
