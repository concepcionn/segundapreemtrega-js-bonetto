let productos = [
   {id: 1, nombre: "hongos de pino", stock: 4, precio: 2200 },
   {id: 4, nombre: "aceitunas", stock: 10, precio: 2000 },
   {id: 7, nombre: "pasta de mani", stock: 15, precio: 800},
   {id: 9, nombre: "champignones", stock: 6, precio: 1800 },
   {id: 11, nombre: "frutos secos", stock: 8, precio: 3500 },
   {id: 15, nombre: "fideos secos", stock: 20, precio: 950 },
   {id: 18, nombre: "escabeche", stock: 9, precio: 1450 },
   {id: 24, nombre: "aceite de oliva extra virgen", stock: 10, precio: 2500 },
]


let nombre = prompt("Ingrese su nombre") .toLowerCase()
 while (!isNaN(nombre) || (nombre == " ")){
    nombre = (prompt("Por favor ingrese un nombre")) 
}
alert("Bienvenido/a, " + nombre)

let edad = Number(prompt("Ingrese su edad"))

let mensaje = "Seleccione una opción: \n1- Ver lista de productos \n2- Comprar productos \n3- Ver precio de cada producto \n4- Ver productos más económicos \n5- Ver carrito \n6- Ver total del carrito y finalizar compra \n0- Salir"

let respuesta

let carrito = []


while ((isNaN(edad)) || (edad == " ")) {
    edad = (prompt("Por favor ingrese su edad en números"))   
} 

if (edad < 18) {
        alert("Ud. no posee edad suficiente para realizar esta compra")
        alert("Muchas gracias por su visita")
} else {
        alert("A continuación se habilitará su carrito de compras")
        do {
            respuesta = Number(prompt(mensaje))
            if (respuesta === 1) {
                alert(listar(productos))
            } else if (respuesta === 2) {
                let id = Number(prompt("Escoja el ID de su producto:\n" + listar(productos)))
                let productoBuscado = productos.find(prod => prod.id === id)
                let posicionProductoCarrito = carrito.findIndex(prod => prod.id === productoBuscado.id)
                if (posicionProductoCarrito === -1){
                    carrito.push({
                    id: productoBuscado.id,
                    nombre: productoBuscado.nombre,
                    precioUnitario: productoBuscado.precio,
                    cantidad: 1,
                    subtotal: productoBuscado.precio
                }) 
                } else {
                    carrito[posicionProductoCarrito].cantidad++
                    carrito[posicionProductoCarrito].subtotal = [posicionProductoCarrito].precioUnitario * [posicionProductoCarrito].cantidad
                }
                console.log(carrito)

            } else if (respuesta === 3) {
                let productosPrecio = productos.map((producto) => producto.id + " - " + producto.nombre + " - $" + producto.precio + "\n")
                alert(productosPrecio)          
            } else if (respuesta === 4) {
                let productosEconomicos = productos.filter(((el) => el.precio < 2000))
                alert(listar(productosEconomicos))
            } else if (respuesta === 5) {
                 if (carrito.length > 0) {
                    alert(listar(carrito))
                } else {
                    alert("Primero debe ingresar un producto")
                }
            } else if (respuesta === 6){
                 let precioFinal = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)
                alert("El total de su carrito es de: " + precioFinal)
                validarTotal(precioFinal)
            } else {
                alert("Debe ingresar un número del 0 al 6") 
            }
        } while (respuesta !== 0)
alert("Muchas gracias por su visita") 
}



function validarTotal(total) {
    if (total === 0){
        return "Debe agregar al menos un producto"
    } else {
        return "Muchas gracias por su compra. Lo esperamos pronto"
    }
}

function listar (arrayListado){
    let opcion = "ID - Nombre\n"
    arrayListado.forEach(element => { opcion = opcion + element.id + " - " + element.nombre + "\n"    
    });
    return opcion
}


 





    



 

