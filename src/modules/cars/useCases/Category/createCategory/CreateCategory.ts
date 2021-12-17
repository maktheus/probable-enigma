import { Request, Response } from "express";
import {  CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryControler {
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}
    

    handle(req: Request, res: Response) {
        const { name, description } = req.body;
        
        this.createCategoryUseCase.execute({ name, description });

        return res.status(201).send({
            message: "Categoria cadastrada com sucesso",
        });
    }
}

export { CreateCategoryControler };
