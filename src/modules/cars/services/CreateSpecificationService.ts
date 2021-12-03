import { ISpecificationRepository } from "../repositories/ISpecificationRepository"

interface IRequest {
    name:string;
    description:string;
}


class CreateSpecificationService{
    constructor(private specificationRepository: ISpecificationRepository){}

    execute({name,description}:IRequest):void{
        const AlredyExists = this.specificationRepository.findByName(name)
        if(AlredyExists){
           throw new Error("ja existe")
        }

        this.specificationRepository.create({
            name,
            description,
        });
    }
}


export {CreateSpecificationService}