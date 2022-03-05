import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        return response
            .status(200)
            .json({ categories: this.listCategoriesUseCase.execute() });
    }
}

export { ListCategoriesController };
