import { Request, Response } from 'express';
import { DBService } from '../service/db';

class Category {

  getCategory(req: Request, res: Response) {
    const { id } = req.params;
    if (id) {
      const category = categoryPersistencia.get(Number(id));
      if (!category) {
        res.status(404).json({
          msg: "No se encontró el producto",
        })
      }
      res.json({
        data: category
      })
    }


    res.json(
      {
        data: categoryPersistencia.get()
      })
    }

    addCategory(req: Request, res: Response) {
      const { nombre, precio } = req.body;

      if (!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)) {
        return res.status(400).json(
          {
            msg: "Los datos ingresados son incorrectos"
          })
        }

        const newProduct = categoryPersistencia.add(req.body);

        res.json(
          {
            msg: "Categoría creada",
            data: newProduct
          })
        }

        updateCategories(req: Request, res: Response) {
          res.json(
            {
              msg: "Categoría actualizada"
            })
          }

          deleteCategories(req: Request, res: Response) {
            const { id } = req.params;

            if (!id) {
              return res.status(400).json({
                msg: "Número de identificación inválido"
              })
            }

            const categories = categoryPersistencia.find(Number(id));

            if (!producto) {
              return res.status(400).json({
                msg: "La categoría no existe"
              })
            }

            const categories = productPersistencia.delete(Number(id))

            res.json(
              {
                msg: "Categoria eliminado",
                categories
              })
            }

          }

          export const CategoriesController = new Product();
