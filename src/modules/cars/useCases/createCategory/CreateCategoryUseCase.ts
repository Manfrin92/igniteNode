import { CategoryRepository } from "../../repositories/implementations/Category.repository";
import { ICategoryRepository } from "../../repositories/ICategory.repository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
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

export { CreateCategoryUseCase };
