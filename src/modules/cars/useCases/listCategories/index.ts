import { CategoryRepository } from "../../repositories/implementations/Category.repository";
import { ListCategoriesController } from "./ListCategories.controller";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };
