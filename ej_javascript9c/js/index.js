var colores = ["Rojo", "Verde", "Azul", "Amarillo"];
var colours = ["red", "green", "blue", "yellow"];

for (var i = 0; i < colores.length; i++) {
    document.getElementById("botones").innerHTML += "<button type=button onclick=cambiarColor('" + colours[i] + "')>" + colores[i] + "</button>";
}
document.getElementById("botones").insertAdjacentHTML("beforeend", "<button type=button onclick=botonMas()>M&aacute;s</button>");

function cambiarColor(colour) {
    document.body.style.backgroundColor = colour;
}

function botonMas() {

    var posicionColorActual = colours.indexOf(document.body.style.backgroundColor);

    if (posicionColorActual == colours.length - 1) {
        document.body.style.backgroundColor = colours[0];
    } else {
        document.body.style.backgroundColor = colours[++posicionColorActual];
    }
}