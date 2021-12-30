import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/implemetantions/ICategoriesRepository";
import { CategoriesRepositories } from "../../modules/cars/repositories/CategoriesRepositories";

import { ISpecificationRepository } from "../../modules/cars/repositories/implemetantions/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/SpecificationRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoriesRepositories
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);
