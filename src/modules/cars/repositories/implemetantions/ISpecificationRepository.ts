import { SpecificationModel } from "../../entities/SpecificationModel";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string):  Promise<SpecificationModel>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
