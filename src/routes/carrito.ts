import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json("GET a carrito")
})

router.post('/', (req, res) => {
    res.json("POST a carrito")
})

router.put('/', (req, res) => {
    res.json("PUT a carrito")
})

router.delete('/', (req, res) => {
    res.json("DELETE a carrito")
})

export default router;