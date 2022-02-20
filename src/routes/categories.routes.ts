import { Router } from "express";
import { CategoryRepository } from "../repositories/category.repository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.get("/", (request, response) => {
    return response
        .status(200)
        .json({ categories: categoriesRepository.list() });
});

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const isCategoryAlreadyRegistered = categoriesRepository.findByName(name);

    if (isCategoryAlreadyRegistered) {
        return response
            .status(400)
            .json({ error: "Category already registered" });
    }

    categoriesRepository.create({
        description,
        name,
    });

    return response.status(201).json({ ok: true });
});

export { categoriesRoutes };
