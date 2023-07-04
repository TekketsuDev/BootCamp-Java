function replace(text) {
    let newText = text.replace(/a/g, 'o');
    return newText;
}

let changedString = replace("Las manzanas son azules");
console.log(changedString);

function startsWith(text){
    return text.startsWith('aca');
}
console.log("academia empieza por `aca` : " + startsWith('academia'));
console.log("escuela empieza por `aca` : " + startsWith('escuela')); 

function saludoTres(cadena) {
    let saludo = cadena.concat(" ");
    saludo = saludo.repeat(3);
    return saludo.trim();
}

console.log(saludoTres("Hola"));
