import { Request, Response } from "express";
import { container } from "tsyringe"; 
import {  CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryControler {
    

    async handle(req: Request, res: Response) {
        const { name, description } = req.body;
        
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

        await createCategoryUseCase.execute({ name, description });

        return res.status(201).send({
            message: "Categoria cadastrada com sucesso",
        });
    }
}

export { CreateCategoryControler };
