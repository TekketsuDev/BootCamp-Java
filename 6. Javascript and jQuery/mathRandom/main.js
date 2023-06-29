function lanzarMoneda() {
    var resultado = Math.round(Math.random());
    console.log(resultado);
    if (resultado == 1) {
        return "cara";
    } else {
        return "cruz";
    }
}
var resultadoLanzamiento = lanzarMoneda(); // Invoca la función para obtener el resultado
console.log(resultadoLanzamiento); 