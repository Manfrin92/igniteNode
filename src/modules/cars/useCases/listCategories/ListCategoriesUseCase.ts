import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategory.repository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute(): Category[] {
        return this.categoriesRepository.list();
    }
}

export { ListCategoriesUseCase };
