const btn_push = document.getElementById("push");
const btn_un = document.getElementById("un");
const btn_insert = document.getElementById("insert");

const btn_pop = document.getElementById("pop");
const btn_shift = document.getElementById("shift");
const btn_rem = document.getElementById("rem");

let arr = [];

btn_push.onclick = function (){
    arr.push("🍕");
    print(arr);
};

btn_un.onclick = function (){
    arr.unshift("🍍");
    print(arr);
}

btn_insert.onclick = function(){
    var index = document.getElementById("in-num").value;
    console.log(index);
    if (index <= arr.length){
        arr.splice(index, 0 , "🍺");
        print(arr);
        $("#in-num").css("background-color", "#ffffff");
    }else {
        $("#in-num").css("background-color", "#ffc107");
    }
}

btn_pop.onclick = function(){
    arr.pop();
    print(arr);
}

btn_shift.onclick = function(){
    arr.shift();
    print(arr);
}

btn_rem.onclick = function(){
    var index = document.getElementById("in2-num").value;
    console.log(index);
    if (index <= arr.length){
        arr.splice(index, 1);
        print(arr);
        $("#in2-num").css("background-color", "#ffffff");
    }else {
        $("#in2-num").css("background-color", "#ffc107");
    }
}
function print(){
    document.getElementById("show").innerHTML =  '[' + arr + ']' ;
    console.log(arr);
}