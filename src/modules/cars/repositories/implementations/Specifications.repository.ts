import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
    ISpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecifications.repository";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async list(): Promise<Specification[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Specification> {
        return await this.repository.findOne({
            name,
        });
    }

    async create({ description, name }: ISpecificationDTO): Promise<void> {
        const specification = this.repository.create({ name, description });

        await this.repository.save(specification);
    }
}

export { SpecificationsRepository };
