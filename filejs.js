const URL = "http://10.250.5.10:8080/pedigest/api/v1/productos";
const TIME = 2;

let requestProducts = new XMLHttpRequest();

requestProducts.onreadystatechange = function () {

    if (requestProducts.readyState === 4) {
        let products = JSON.parse(requestProducts.responseText);
        populateProducts(products);
    }
};

setInterval(() => {
    requestProducts.open("GET", URL);
    requestProducts.send(null);
}, TIME * 1000);

function populateProducts(products) {
    let table = document.createElement("table");
    table.id = "table";
    let firstRow = true;

    let trHeader = document.createElement("tr");
    let thCode = document.createElement("th");
    thCode.innerHTML = "Código";
    trHeader.appendChild(thCode);
    let thName = document.createElement("th");
    thName.innerHTML = "Nombre";
    trHeader.appendChild(thName);
    let thPrice = document.createElement("th");
    thPrice.innerHTML = "Precio";
    trHeader.appendChild(thPrice);
    let thDescription = document.createElement("th");
    thDescription.innerHTML = "Descripción";
    trHeader.appendChild(thDescription);
    let thFamily = document.createElement("th");
    thFamily.innerHTML = "Familia";
    trHeader.appendChild(thFamily);
    let thDateOn = document.createElement("th");
    thDateOn.innerHTML = "Fecha de alta";
    trHeader.appendChild(thDateOn);
    let thDiscontinnued = document.createElement("th");
    thDiscontinnued.innerHTML = "Descatalogado";
    trHeader.appendChild(thDiscontinnued);

    table.appendChild(trHeader);

    products.forEach(product => {

        let trProduct = document.createElement("tr");
        let thCode = document.createElement("td");
        thCode.innerHTML = product.codigo;
        trProduct.appendChild(thCode);
        let thName = document.createElement("td");
        thName.innerHTML = product.nombre;
        trProduct.appendChild(thName);
        let thPrice = document.createElement("td");
        thPrice.innerHTML = product.precio;
        trProduct.appendChild(thPrice);
        let thDescription = document.createElement("td");
        thDescription.innerHTML = product.descripcion;
        trProduct.appendChild(thDescription);
        let thFamily = document.createElement("td");
        thFamily.innerHTML = product.familia;
        trProduct.appendChild(thFamily);
        let thDateOn = document.createElement("td");
        thDateOn.innerHTML = product.fechaAlta;
        trProduct.appendChild(thDateOn);
        let thDiscontinnued = document.createElement("td");
        thDiscontinnued.innerHTML = product.descatalogado;
        trProduct.appendChild(thDiscontinnued);

        table.appendChild(trProduct);
    });

    document.querySelector("#main").innerHTML = null;
    document.querySelector("#main").appendChild(table);
}
