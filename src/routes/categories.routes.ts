import { Router } from "express";
import { Category } from "../model/Category";

const router = Router();

const categories: Category[] = [];

router.post("/categories", (req, res) => {
    const { name, description } = req.body;

    const category = new Category();

    Object.assign(category, { name, description,created_at: new Date()});

    categories.push(category);

    return res.status(201).send({
        message: "Categoria cadastrada com sucesso",
        data: categories,
    });
});

export { router as categoriesRouter };
