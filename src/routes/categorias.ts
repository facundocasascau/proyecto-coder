import { Router } from "express";
import { CategoriesController } from "../controllers/categorias";
import { checkAdmin } from "../middleware/admin";

const router = Router();

router.get('/', CategoriesController.getProducts)

router.get('/:id', CategoriesController.getProducts)

router.post('/', checkAdmin, CategoriesController.addProducts)

router.put('/:id', checkAdmin, CategoriesController.updateProducts)

router.delete('/:id', checkAdmin, CategoriesController.deleteProducts)

export default router;
