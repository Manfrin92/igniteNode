import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategories.repository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/Categories.repository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
