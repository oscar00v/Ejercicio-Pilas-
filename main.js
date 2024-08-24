console.log("Eje 1")
let resultado;

resultado = devArrey(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'], 4);

console.log(resultado);  // Debería imprimir ['Manzana', 'Cebolla', 'Apio', 'Naranja']

function devArrey(pilas, numero){
    let sublista = pilas.slice(0, numero);
    return sublista;
}
////////////////////////////////////////////////////////////////////////////
console.log("Eje 2")
let resultado2 = remplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2)

console.log(resultado2);  // Debería imprimir [3, 2, 3, 4, 6, 8, 1, 7]

function remplazar(pila, nuevo, viejo){
    console.log(pila)
    for(let i = 0; i < pila.length; i++){
        if(pila[i] === viejo) {
            pila[i] = nuevo;
            break
        }
    }

    for (let i = 0; i < pila.length; i++) {
        if (pila[i] === viejo) {
            pila[i] = nuevo;
            index = i;
            break;
        }
    }


    while (pila.length > index + 1) {
        pila.pop();
    }

    return pila

}

//////////////////////////////////////////////////////////////////////////////
console.log("Eje 3")

function mostrarRecorrido(pueblos){
    let ida = [];
    let regreso = []
    // Recorrido de ida

    for(let i = 0; i< pueblos.length; i++ ){
        ida.push(pueblos[i]);
    }

    console.log(`Recorrido de ida: ${pueblos}`);
    
    while(ida.length  > 0){
        regreso.push(ida.pop());
    }

    console.log(`Recorrido de regreso: ${regreso}`)
}



let pueblos = ["Pueblo Origen", "pueblo 1", "pueblo 2", "destino"];
mostrarRecorrido(pueblos);


//////////////////////////////////////////////////////////////////////////
console.log("Eje 4")

function retirarContenedor(almacen, idContenedor) {
    let auxiliar = [];  // Pila auxiliar para mover temporalmente los contenedores

    // Mover contenedores a la pila auxiliar hasta encontrar el contenedor deseado
    while (almacen.length > 0) {
        let contenedor = almacen.pop();
        
        if (contenedor === idContenedor) {
            break;  // Encontramos y retiramos el contenedor deseado
        } else {
            auxiliar.push(contenedor);  // Movemos los demás contenedores a la pila auxiliar
        }
    }

    // Regresar los contenedores a la pila principal
    while (auxiliar.length > 0) {
        almacen.push(auxiliar.pop());
    }

    return almacen;  // Devolvemos el estado final del almacén
}

// Probemos la función con un ejemplo
let almacen = [1, 2, 3, 4, 5];
console.log("Almacén antes:", almacen);
retirarContenedor(almacen, 3);
console.log("Almacén después:", almacen);