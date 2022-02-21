import { SpecificationRepository } from "../../repositories/implementations/Specification.repository";
import { ListSpecificationController } from "./ListSpecification.controller";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const listSpecificationsRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
    listSpecificationsRepository
);
const listSpecificationController = new ListSpecificationController(
    listSpecificationsUseCase
);

export { listSpecificationController };
