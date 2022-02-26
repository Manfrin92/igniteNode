import { CategoryRepository } from "../../repositories/implementations/Category.repository";
import { ImportCategoryController } from "./ImportCategory.controller";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
