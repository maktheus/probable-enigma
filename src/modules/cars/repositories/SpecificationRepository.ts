import { SpecificationModel } from "../entities/SpecificationModel";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "./implemetantions/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private Specifications: SpecificationModel[];

    constructor() {
        this.Specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new SpecificationModel();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.Specifications.push(specification);
    }

    findByName(name: string): SpecificationModel {
        const specification = this.Specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}

export { SpecificationRepository };
