import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/category.repository";
import { CreateCategoryService } from "../modules/cars/services/createCategory.service";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.get("/", (request, response) => {
    return response
        .status(200)
        .json({ categories: categoriesRepository.list() });
});

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoryService.execute({ name, description });

    return response.status(201).json({ ok: true });
});

export { categoriesRoutes };
