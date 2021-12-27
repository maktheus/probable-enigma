import { SpecificationModel } from "../../entities/SpecificationModel";

interface ICreateSpecificationDTO {
    name: String;
    description: String;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): SpecificationModel;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
