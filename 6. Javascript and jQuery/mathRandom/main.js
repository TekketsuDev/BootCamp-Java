function lanzarMoneda() {
    var resultado = Math.random();
    console.log(resultado);
    if (resultado >= 0.5) {
        return "cara";
    } else {
        return "cruz";
    }
}
var resultadoLanzamiento = lanzarMoneda(); // Invoca la función para obtener el resultado
console.log(resultadoLanzamiento); 