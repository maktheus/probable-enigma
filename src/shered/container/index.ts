import { container } from "tsyringe";
import{ICategoryRepository} from '../../modules/cars/repositories/implemetantions/ICategoriesRepository';
import {CategoriesRepositories} from '../../modules/cars/repositories/CategoriesRepositories';



container.registerSingleton<ICategoryRepository>("CategoryRepository",CategoriesRepositories);
