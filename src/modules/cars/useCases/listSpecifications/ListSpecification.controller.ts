import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

    handle(request: Request, response: Response): Response {
        return response
            .status(200)
            .json({ categories: this.listSpecificationsUseCase.execute() });
    }
}

export { ListSpecificationController };
