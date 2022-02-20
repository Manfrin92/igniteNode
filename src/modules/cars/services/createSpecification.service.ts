import { ISpecificationRepository } from "../repositories/ISpecification.repository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({ description, name }: IRequest) {
        const specificationAlreadyRegistered =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyRegistered) {
            throw new Error("Specification already registered");
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationService };
