import {  Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";


const router = Router();

const specificationRepository = new SpecificationRepository();

router.post("/specification",(req,res)=>{
    const{name,description}= req.body;
    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    createSpecificationService.execute({name,description})
    return res.status(201).send({
        message:"ok", 
    })
})

export {router as specificationRouter  };
