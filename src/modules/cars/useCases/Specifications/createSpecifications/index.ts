import { SpecificationRepository } from "../../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase= new CreateSpecificationUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };