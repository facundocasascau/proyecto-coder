import { Router } from "express";
import productsRouter from './productos';
import cartRouter from './carrito';
import categoriesRouter from '/categorias'

const router = Router()



router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/cart', cartRouter);

export default router
