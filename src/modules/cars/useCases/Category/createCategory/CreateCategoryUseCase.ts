
import { ICategoryRepository } from '../../../repositories/implemetantions/ICategoriesRepository';
interface IRequest{
    name: string;
    description:string;
}

class CreateCategoryUseCase {
    
    constructor(private categoriesRepositories: ICategoryRepository){}


    async execute({name,description}:IRequest):Promise<void> {
        const categoryAlredyExists = await this.categoriesRepositories.findByName(name);

        if (categoryAlredyExists) {
            throw new Error("Categoria ja existe")
        }

        this.categoriesRepositories.create({ name, description });
    }
}

export { CreateCategoryUseCase };
