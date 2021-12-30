import { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

        const list = await listCategoriesUseCase.execute();

        return res.json(list);
    }
}

export { ListCategoriesController };
