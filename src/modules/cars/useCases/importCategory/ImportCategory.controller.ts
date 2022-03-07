import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { container } from "tsyringe";
class ImportCategoryController {
    handle(request: Request, response: Response) {
        const file = request.file;

        const importCategoryUserCase = container.resolve(ImportCategoryUseCase);

        importCategoryUserCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };
