import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repositories/implementations/UsersRepository.repository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository.repository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategories.repository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/Categories.repository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/Specifications.repository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecifications.repository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UserRepository
);
