const printname = (name, surname) => {
    console.log("Nombre: " + name + " Apellidos: "  + surname);
};

printname("Juan", "Perez Diablo");

function printBool(bool) {
    console.log(bool);
}
printBool(true);


const infiniteNums = function(...values) {
    values.forEach(element => {
        console.log(element);
    });
};

infiniteNums('1','2','3','4','5');