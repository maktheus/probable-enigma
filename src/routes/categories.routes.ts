import { Router } from "express";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

const router = Router();

const categoriesRepositories = new CategoriesRepositories();

router.post("/categories", (req, res) => {
    const { name, description } = req.body;

    const categoryAlredyExists = categoriesRepositories.findByName(name);
    if (categoryAlredyExists) {
        return res.status(400).json({ error: "Categoria ja existe" });
    }

    categoriesRepositories.create({ name, description });

    return res.status(201).send({
        message: "Categoria cadastrada com sucesso",
    });
});

router.get("/categories", (req, res) => {
    const list = categoriesRepositories.list();

    return res.json(list);
});

export { router as categoriesRouter };
