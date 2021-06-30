// 1 - CREAR XML REQUEST
let requestProductos = new XMLHttpRequest();

function compararPorPrecio( a, b) {
    if ( a.precio < b.precio ){
      return -1;
    }
    if ( a.precio > b.precio ){
      return 1;
    }
    return 0;
}

function compararPorFamilia( a, b ) {
    if ( a.familia < b.familia ){
        return -1;
    }
    if ( a.familia > b.familia ){
        return 1;
    }
    return 0;
}

function compararPorNombre( a, b ) {
    if ( a.nombre < b.nombre ){
        return -1;
    }
    if ( a.nombre > b.nombre ){
        return 1;
    }
    return 0;
}

let comparador = compararPorPrecio;

function ordernarPorTal(criterio){

    switch (criterio){
        case "precio" : comparador = compararPorPrecio;
                        break;
        case "familia": comparador = compararPorFamilia;
                        break;
        case "nombre":  comparador = compararPorNombre;  
                        break;                 
    }

    traerProductos();
}

function traerProductos(){
    
    if (requestProductos.readyState === 4){
        let productos = JSON.parse(requestProductos.responseText);

        productos = productos.sort(comparador);

        let tablaProductos = document.getElementById("bodyProductos");
        tablaProductos.innerHTML = "";

        productos.forEach(producto => {
           // console.log(producto.nombre);
            let tr = `   
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio.toFixed(2)} $</td>
                    <td>${producto.familia}</td>
                </tr>
            `
            tablaProductos.innerHTML += tr;
        });
    }
};

requestProductos.onreadystatechange = traerProductos;

//Primera Pedida
requestProductos.open("GET", "http://10.250.5.5:8080/pedigest/api/v1/productos");

requestProductos.send(null);

//Rodeandola con parentesis puedo autollamarla.
//Pero no la creas
(function setTiempo(segundos){

    setInterval(function(){
        
        requestProductos.open("GET", "http://10.250.5.5:8080/pedigest/api/v1/productos");
    
        requestProductos.send(null);
    }, (segundos * 1000))

})(8000);



  