import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Specification.repository";
import { CreateSpecificationService } from "../modules/cars/services/createSpecification.service";

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.get("/", (request, response) => {
    return response
        .status(200)
        .json({ categories: specificationRepository.list() });
});

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
        specificationRepository
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };
