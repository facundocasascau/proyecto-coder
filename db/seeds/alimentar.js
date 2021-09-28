exports.seed = function(knex) {
  const initCategories = [{
    id: 1,
    nombre: 'arquero'
  }, {
    id: 2,
    nombre: 'defensor'
  }, {
    id: 3,
    nombre: 'mediocampista'
  }, {
    id: 4,
    nombre: 'delantero'
  }, ];
  const initProducts = [
    {nombre: 'Lionel Messi',
    stock: 1,
    precio: 120000000,
    id_categoria: 4,
    imagen: 'https://as01.epimg.net/futbol/imagenes/2021/06/23/primera/1624440518_372415_1624440629_noticia_normal_recorte1.jpg'
  },
  {
    nombre: 'Juan Román Riquelme',
    stock: 1,
    precio: 50000000,
    id_categoria: 3,
    imagen:'https://www.futbolete.com/wp-content/uploads/2020/10/Riquelme-con-chances-de-volver-a-jugar.jpg'
  },
  {
    nombre: 'Ángel Di María',
    stock: 3,
    precio: 90000000,
    id_categoria: 3,
    imagen:'https://www.telam.com.ar/advf/imagenes/2021/07/60ea6b221f942_1004x564.jpg'
  },
  {
    nombre: 'Emiliano Martínez',
    stock: 2,
    precio: 35000000,
    id_categoria: 1,
    imagen:'https://media.ambito.com/p/71faba65d4b180ad50c76c027700660b/adjuntos/239/imagenes/039/088/0039088473/1200x1200/smart/dibu-martinezjpg.jpg'
  },
];
return knex('productos')
.del()
.then(() => knex('categorias').del())
.then(() => knex('categorias').insert(initCategories))
.then(() => knex('productos').insert(initProducts));
};
