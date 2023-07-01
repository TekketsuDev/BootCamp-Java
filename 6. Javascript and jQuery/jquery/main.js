// JavaScript
const myArray = [];
let emojis = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🫐','🥝','🍅','🫒','🥥','🥑','🍆','🥔','🥕','🌽','🌶','🫑','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🫘','🌰','🍞','🥐','🥖','🫓','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🥚','🍳','🥘','🍲','🫕','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🦀','🦞','🦐','🦑','🦪','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🫖','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🫗','🥤','🧋','🧃','🧉','🧊'];

function printArray(){
    document.getElementById("displayArray").innerHTML =  '[' + myArray + ']' ;
}

function getRandomEmoji() {
    let randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

function performPush() {
    let valueToAdd = getRandomEmoji();
    myArray.push(valueToAdd);
    printArray();
}

function performUnshift() {
    let valueToAdd = getRandomEmoji();
    myArray.unshift(valueToAdd);
    printArray();

}

function performInsertAt() {
    let insertIndex = document.getElementById("insertIndex").value;
    let valueToAdd = getRandomEmoji();
    printArray();
}

function performPop() {
    let removedValue = myArray.pop();
    printArray();
}

function performShift() {
    let removedValue = myArray.shift();
    printArray();
}

function performRemoveAt() {
    let removeIndex = document.getElementById("removeIndex").value;
    let removedValue = myArray.splice(removeIndex, 1)[0];
    printArray();
}

document.getElementById("push").addEventListener("click", performPush);
document.getElementById("unshift").addEventListener("click", performUnshift);
document.getElementById("insertat").addEventListener("click", performInsertAt);
document.getElementById("pop").addEventListener("click", performPop);
document.getElementById("shift").addEventListener("click", performShift);
document.getElementById("removeat").addEventListener("click", performRemoveAt);










