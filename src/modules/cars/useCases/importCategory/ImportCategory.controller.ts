import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUserCase: ImportCategoryUseCase) {}

    handle(request: Request, response: Response) {
        const { file } = request.body;

        this.importCategoryUserCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };
