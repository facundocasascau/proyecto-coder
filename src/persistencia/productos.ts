let productos = [
    { id: 1, nombre: "lapiz", precio: 200 },
    { id: 2, nombre: "lapiz2", precio: 300 },
    { id: 3, nombre: "lapiz3", precio: 400 }
]

interface newItem {
    nombre: string;
    precio: number;
}

interface item {
    id: number;
    nombre: string;
    precio: number;
}



class Productos {

    find(id: number): item | undefined {
        return productos.find((aProduct) => aProduct.id === Number(id));
    }

    get(id: Number | null = null) {
        if (id) {
            return productos.filter(e => e.id == id);
        }
        return productos;
    }

    add(data: newItem) {
        let idsProductos: any = [];
        productos.forEach(e => idsProductos.push(e.id))
        let max = Math.max(...idsProductos);
        const newProduct: item = {
            id: max + 1,
            nombre: data.nombre,
            precio: data.precio,
        }
        productos.push(newProduct)

        return newProduct;

    }

    // udpate(id, data) {

    // }

    delete(id: Number) {
        productos = productos.filter(e => e.id !== Number(id))
        return productos;

    }





}


export const productPersistencia = new Productos;