import { Request, Response } from 'express';
import { productPersistencia } from '../persistencia/productos';



class Product {

    getProducts(req: Request, res: Response) {
        const { id } = req.params;
        if (id) {
            const producto = productPersistencia.get(Number(id));
            if (!producto) {
                res.status(404).json({
                    msg: "No se encontró el producto",
                })
            }
            res.json({
                data: producto
            })
        }


        res.json(
            {
                data: productPersistencia.get()
            })
    }

    addProducts(req: Request, res: Response) {
        const { nombre, precio } = req.body;

        if (!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)) {
            return res.status(400).json(
                {
                    msg: "Los datos ingresados son incorrectos"
                })
        }

        const newProduct = productPersistencia.add(req.body);

        res.json(
            {
                msg: "Producto agregado",
                data: newProduct
            })
    }

    updateProducts(req: Request, res: Response) {
        res.json(
            {
                msg: "Actualiza productos"
            })
    }

    deleteProducts(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                msg: "Número de identificación inválido"
            })
        }

        const producto = productPersistencia.find(Number(id));

        if (!producto) {
            return res.status(400).json({
                msg: "El producto no existe"
            })
        }

        const productos = productPersistencia.delete(Number(id))

        res.json(
            {
                msg: "Producto eliminado",
                productos
            })
    }

}

export const productsController = new Product();
