import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategories.repository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const isCategoryAlreadyRegistered =
            await this.categoriesRepository.findByName(name);

        if (isCategoryAlreadyRegistered) {
            console.log("Category already exists");
            return;
        }

        await this.categoriesRepository.create({
            description,
            name,
        });
    }
}

export { CreateCategoryUseCase };
