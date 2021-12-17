
import { ICategoryRepository } from "../../cars/repositories/implemetantions/ICategoriesRepository";

interface IRequest{
    name: string;
    description:string;
}

class CreateCategoryUseCase {
    
    constructor(private categoriesRepositories: ICategoryRepository){}


    execute({name,description}:IRequest):void {
        const categoryAlredyExists = this.categoriesRepositories.findByName(name);

        if (categoryAlredyExists) {
            throw new Error("Categoria ja existe")
        }

        this.categoriesRepositories.create({ name, description });
    }
}

export { CreateCategoryUseCase };
