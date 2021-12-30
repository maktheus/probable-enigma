import { getRepository, Repository } from "typeorm";
import { SpecificationModel } from "../entities/SpecificationModel";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "./implemetantions/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<SpecificationModel>;

    constructor() {
        this.repository = getRepository(SpecificationModel);
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<SpecificationModel> {
        const specification = this.repository.findOne({
            where: {
                name,
            },
        });
        return specification;
    }
}

export { SpecificationRepository };
