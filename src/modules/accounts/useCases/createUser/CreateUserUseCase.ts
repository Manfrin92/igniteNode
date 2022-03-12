import { inject, injectable } from "tsyringe";

import ICreateUserDTO from "../../dtos/ICreateUserDto.dto";
import { IUsersRepository } from "../../repositories/IUsersRepository.repository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        driver_license,
        email,
        name,
        password,
        username,
    }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            driver_license,
            email,
            name,
            password,
            username,
        });
    }
}

export { CreateUserUseCase };
