import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { container } from "tsyringe";
class ImportCategoryController {
    async handle(request: Request, response: Response) {
        const file = request.file;

        const importCategoryUserCase = container.resolve(ImportCategoryUseCase);

        await importCategoryUserCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoryController };
