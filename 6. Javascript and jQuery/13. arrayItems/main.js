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
    if (insertIndex <= myArray.length){
    let valueToAdd = getRandomEmoji();
    myArray.splice(insertIndex, 0 , valueToAdd);
    printArray();
    $("#insertIndex").css("background-color", "#ffffff");
    }
    else{
        $("#insertIndex").css("background-color", "#ffc107");
    }

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

    if (removeIndex <= myArray.length){
        myArray.splice(removeIndex, 1);
        printArray();
        $("#in2-num").css("background-color", "#ffffff");
    }else {
        $("#in2-num").css("background-color", "#ffc107");
    }
}

document.getElementById("push").addEventListener("click", performPush);
document.getElementById("unshift").addEventListener("click", performUnshift);
document.getElementById("insert").addEventListener("click", performInsertAt);
document.getElementById("pop").addEventListener("click", performPop);
document.getElementById("shift").addEventListener("click", performShift);
document.getElementById("remove").addEventListener("click", performRemoveAt);





