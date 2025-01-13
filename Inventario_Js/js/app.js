const inventario = new Map([
    [1, {
        producto: 'Queso',
        cantidad: 7,
        valor: 11000
    }],
    [2, {
        producto: 'Jamon',
        cantidad: 5,
        valor: 10000
    }],
    [3, {
        producto: 'Pechuga',
        cantidad: 6,
        valor: 15000
    }],
    [4, {
        producto: 'Vinagreta',
        cantidad: 8,
        valor: 6000
    }],
    [5, {
        producto: 'Chorizos',
        cantidad: 15,
        valor: 3000
    }]
]);

const venderProducto = (cod, cantidadVendida) => {
    if (inventario.has(cod)) {
        const producto = inventario.get(cod);
        const nuevaCantidad = producto.cantidad - cantidadVendida;
        producto.cantidad = nuevaCantidad;
        console.log(`Se han vendido ${cantidadVendida} unidades del producto ${inventario.get(cod).producto} quedan ${nuevaCantidad} unidades disponibles`)
    } else {
        console.log(`El codigo ${cod} ingresado no se encuentra`);
    }
}


