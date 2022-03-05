import { CategoriesRepository } from "../../repositories/implementations/Categories.repository";
import { ListCategoriesController } from "./ListCategories.controller";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };
