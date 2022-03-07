import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecifications.repository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationsRepository
    ) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const specificationAlreadyRegistered =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyRegistered) {
            throw new Error("Specification already registered");
        }

        await this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
