import {  Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/Specifications/createSpecifications/createSpecificationController";




const router = Router();

const specificationRepository = new CreateSpecificationController();

router.post("/specification", specificationRepository.handle)

export {router as specificationRouter  };
