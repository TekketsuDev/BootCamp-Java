function sum(num1, num2, num3) {
    let resul = num1 + num2 + num3;
    return resul;
}

console.log(sum(1,3,4));

function nombreCompleto(nombre, apellido1, apellido2) {
    let resul = nombre  + " " +  apellido1  + " "+  apellido2;
    return resul;
}

console.log(nombreCompleto("Victor","Jamet","Soler"));

function highNum(num1, num2) {
    if(num1 == num2){
        return "Es el mismo numero";
    }
    if(num1 > num2){
        return "El " + num1 + " es mas grande que el " + num2;
    }
    else{
        return "El " + num2 + " es mas grande que el " + num1;
    }
    
}

console.log(highNum(5,7));
