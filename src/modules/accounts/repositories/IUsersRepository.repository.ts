import ICreateUserDTO from "../dtos/ICreateUserDto.dto";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
