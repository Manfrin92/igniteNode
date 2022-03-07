import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecifications.repository";

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute(): any {
        // return this.specificationsRepository.list();
    }
}

export { ListSpecificationsUseCase };
