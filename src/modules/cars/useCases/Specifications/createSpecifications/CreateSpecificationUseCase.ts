import { ISpecificationRepository } from "../../../repositories/implemetantions/ISpecificationRepository"

interface IRequest {
    name:string;
    description:string;
}


class CreateSpecificationUseCase{
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


export {CreateSpecificationUseCase}