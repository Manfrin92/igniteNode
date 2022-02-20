import { CategoryRepository } from "../repositories/category.repository";
import { ICategoryRepository } from "../repositories/ICategory.repository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute({ description, name }: IRequest): void {
        const isCategoryAlreadyRegistered =
            this.categoriesRepository.findByName(name);

        if (isCategoryAlreadyRegistered) {
            throw new Error("Category already exists");
        }

        this.categoriesRepository.create({
            description,
            name,
        });
    }
}

export { CreateCategoryService };
