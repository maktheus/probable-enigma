import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../../repositories/implemetantions/ISpecificationRepository"

interface IRequest {
    name:string;
    description:string;
}

@injectable()
class CreateSpecificationUseCase{
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository){}

    async execute({name,description}:IRequest):Promise<void>{
        const AlredyExists = await this.specificationRepository.findByName(name)
        if(AlredyExists){
           throw new Error("ja existe")
        }

        await this.specificationRepository.create({
            name,
            description,
        });
    }
}


export {CreateSpecificationUseCase}