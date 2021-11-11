import { Router } from "express";

const router = Router();

const categories = [];

router.post("/categories", (req, res) => {

    const { name,description } = req.body;

    categories.push({
        name,
        description
    });

    return res.status(201).send({
        message: "Categoria cadastrada com sucesso",
        data: categories
    });
    
});






export {router as categoriesRouter};