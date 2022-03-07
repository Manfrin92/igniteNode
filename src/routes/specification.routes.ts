import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecification.controller";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

// specificationsRoutes.get("/", (request, response) =>
//     listSpecificationController.handle(request, response)
// );

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
