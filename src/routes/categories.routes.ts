import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategory.controller";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategory.controller";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategories.controller";

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

const categoriesRoutes = Router();

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categoriesRoutes };
