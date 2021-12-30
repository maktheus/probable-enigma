import {Request,Response} from 'express';
import { container } from 'tsyringe';
import {ImportCategoryUseCase} from "./ImportCategoryUseCase"
class ImportCategoryController{
   

    async handle(req:Request, res:Response):Promise<Response>{
        const {file} = req;

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        importCategoryUseCase.execute(file);
        return res.send({ message: file });
    }
}

export{ImportCategoryController}