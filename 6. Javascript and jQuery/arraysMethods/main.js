let myArray = ["🍔","🌯","🥯","🍕","🍜","🍱","🍙","🍚","🍫"]


const pizzaIndex = myArray.indexOf("🍕");

myArray.fill("🍺", pizzaIndex);

console.log(myArray + "\n");


let myArray2 = ["🍕","🍕","🍍","🍕","🍕"];

if(myArray2.includes("🍍")){
    console.log("MyArray2 contine 🍍" + "\n");
}

const pineappleIndex = myArray2.indexOf("🍍");
myArray2.splice(pineappleIndex, 1);
console.log(myArray2 + "\n");


let myArray3 = ["🍓","🍐","🍓","🍐","🍓"];

myArray3.forEach(function(elemento, indice) {
    if (elemento === "🍓") {
        myArray3[indice] = "🍄";
    }
});
console.log(myArray3 + "\n");


let myArray4 = ["🥣","🥤","🥣","🥤","🥣"];

for (let i = 0; i < myArray4.length; i++) {
    if (myArray4[i] === "🥣") {
        myArray4.splice(i + 1, 0, "🥵");
        i++;
    }
}
console.log(myArray4 + "\n");



let myArray5 = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];

for (let i = 0; i < myArray5.length; i++) {
    myArray5.splice(i + 1, 0, "🃏");
    i++;
}
console.log(myArray5 + "\n");
