import {  Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/Specifications/createSpecifications";

const router = Router();

const specificationRepository = new SpecificationRepository();

router.post("/specification",(req,res)=>{
    return createSpecificationController.handle(req,res);
})

export {router as specificationRouter  };
