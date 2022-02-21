import { SpecificationRepository } from "../../repositories/implementations/Specification.repository";
import { CreateSpecificationController } from "./CreateSpecification.controller";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    createSpecificationRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };
