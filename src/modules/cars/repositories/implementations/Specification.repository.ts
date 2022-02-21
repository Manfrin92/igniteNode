import { Specification } from "../../model/Specification";
import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "../ISpecification.repository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];
    private static INSTANCE: SpecificationRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationRepository {
        if (!this.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        return this.specifications.find(
            (registeredSpecification) => registeredSpecification.name === name
        );
    }

    create({ description, name }: ISpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }
}

export { SpecificationRepository };
