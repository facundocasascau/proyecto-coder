exports.up = function(knex) {
    return knex.schema.createTable('categorias', (categoriasTable) => {
        categoriasTable.increments();
        categoriasTable.string('nombre').notNullable();
        categoriasTable.timestamp('fecha_creacion').defaultTo(knex.fn.now());
    }).createTable('productos', (productosTable) => {
        productosTable.increments();
        productosTable.string('nombre').notNullable();
        productosTable.string('descripcion').notNullable();
        productosTable.integer('stock').notNullable();
        productosTable.integer('precio');
        productosTable.timestamp('fecha_creacion').defaultTo(knex.fn.now());
        productosTable.string('imagen');
        productosTable.integer('id_categoria').unsigned().references('id').inTable('categorias');
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('productos').dropTable('categorias');
};
