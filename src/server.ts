import express from "express";
import { router } from "./routes";
import { categoriesRouter } from "./routes/categories.routes";
import { specificationRouter } from "./routes/specification.routes";
const app = express();
app.use(express.json());
app.use(router);




app.listen(3333, () => {
    console.log("server running on port 3333");
});
