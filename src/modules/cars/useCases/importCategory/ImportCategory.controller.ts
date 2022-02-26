import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUserCase: ImportCategoryUseCase) {}

    handle(request: Request, response: Response) {
        const file = request.file;

        this.importCategoryUserCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };
