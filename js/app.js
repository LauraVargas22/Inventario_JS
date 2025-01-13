//Crecación de los productos
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


//Función para vender productos teniendo como parámetros el código del producto y la cantidad a vender
const venderProducto = (cod, cantidadVendida) => {
    //Válida si el código ingresado pertenece al inventario
    if (inventario.has(cod)) {
        //El codigo ingresado hace referencia al producto
        const producto = inventario.get(cod);
        //En caso de que la cantidad a vender sea mayor al stock
        if (cantidadVendida > producto.cantidad) {
            console.log(`Lo sentimos en este momento solo tenemos ${inventario.get(cod).cantidad} de ${inventario.get(cod).producto} disponibles`); 
        //Si la cantidad a vender se menor se puede realizar la venta
        } else {
            //Cambiar la cantidad actual al restarla con la cantidad vendida
            const nuevaCantidad = producto.cantidad - cantidadVendida;
            //Se actualiza el stock
            producto.cantidad = nuevaCantidad;
            console.log(`Se han vendido ${cantidadVendida} unidades del producto ${inventario.get(cod).producto} quedan ${nuevaCantidad} unidades disponibles`)
        }
    //Cuando el código no se encuentra en el inventario
    } else {
        console.log(`El código ${cod} ingresado no se encuentra`);
    }
}

//Función para comprar productos, teniendo como parámetros el código del producto y la cantidad a comprar
const comprarProducto = (cod, cantidadComprada) => {
    //Válida si el código ingresado pertenece al inventario
    if (inventario.has(cod)) {
        //El codigo ingresado hace referencia al producto
        const producto = inventario.get(cod);
        //Cambiar la cantidad actual al sumarla con la cantidad comprada
        const nuevaCantidad = producto.cantidad + cantidadComprada;
        //Se actualiza el stock
        producto.cantidad = nuevaCantidad;
        console.log(`Se han comprado ${cantidadComprada} unidades del producto ${inventario.get(cod).producto} ahora hay ${nuevaCantidad} unidades disponibles`);
    //Cuando el código no se encuentra en el inventario
    } else {
        console.log(`El codigo ${cod} ingresado no se encuentra`);
    } 
}

//Función para conocer el valor total de mi inventario
const totalizarInventario = () => {
    //Inicializar variable que va a contener el valor de mi inventario
    let valorInventario = 0;
    //Recorrer cada producto dentro del inventario
    for (const [cod, producto] of inventario) {
        //Sacar el valor total del producto en stock
        const valorProducto = producto.cantidad * producto.valor;
        //Sumar el valor total del producto al valor del inventario
        valorInventario += valorProducto;
    }
    //Imprimir el valor total del inventario
    console.log(`El valor total de su inventario es de ${valorInventario}`)
}