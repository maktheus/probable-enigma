import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";
import { CategoriesRepositories } from "../../../repositories/CategoriesRepositories";
import { ICategoryRepository } from "../../../repositories/implemetantions/ICategoriesRepository";

interface IImportCategory {
    name: String;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoriesRepository: CategoriesRepositories) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((res, rej) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            const parsefile = parse();
            stream.pipe(parsefile);

            parsefile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    res(categories);
                })
                .on("error", (err) => {
                    rej(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        
        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory = await this.categoriesRepository.findByName(name);
            if (!existCategory) {
                await this.categoriesRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export { ImportCategoryUseCase };
