import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";
import {ICreateCategoryDTO } from "./implemetantions/ICategoriesRepository"



class CategoriesRepositories {
    
    private repository : Repository<Category>;

    private static INSTANCE : CategoriesRepositories;

     constructor() {
        this.repository = getRepository(Category);
       
    }

    // public static getInstance(): CategoriesRepositories {
    //     if (!CategoriesRepositories.INSTANCE) {
    //         CategoriesRepositories.INSTANCE = new CategoriesRepositories();
    //     }
    //     return CategoriesRepositories.INSTANCE;
    // }

    async create({name,description}:ICreateCategoryDTO):Promise<void> {

        const category = this.repository.create({
            name,
            description
        });
        
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const list =  await this.repository.find();
        return list;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({
            where: {
                name
            }
        });
        return category;
    }
}

export { CategoriesRepositories };
