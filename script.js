let inputNumbers1 = [];
let op1;
let op2;
let result
let operation;

function getNumbers(){
    return (inputNumbers1.join(''))
};

function showInInput(p1){
    if(!p1){
        p1 = getNumbers();
      }
      document.getElementById("input1").value = p1;
}

let calcnums = document.getElementsByClassName("numbtn");
[...calcnums].forEach(element => {
    element.onclick = function() {
        if (element.dataset.num == ".") {
            if (inputNumbers1. includes(".")){
                return;
            }
        }
        inputNumbers1.push(element.dataset.num);
        showInInput();
    }
});
let ravno = document.getElementById("equal");
ravno.onclick = function(){
    switch (operation) {
        case "minus":
            op2 = parseFloat(getNumbers())    
            result = op1 - op2;
            // console.log(result)
            showInInput(result);
            break;
    
        case "plus":
            op2 = parseFloat(getNumbers())
            result = op1 + op2;
            showInInput(result);
            break;
        
        case "mult":
            op2 = parseFloat(getNumbers())
            result = op1 * op2;
            showInInput(result);
            break;
        case "div":
            op2 = parseFloat(getNumbers())
            if(op2 == 0){
                showInInput("Ты кто такой сука, чтобы это делать?")
            } 
            else{
                result = op1 / op2;
                showInInput(result);
            }
        break;
        
    }
}

let minus = document.getElementById("minus");
minus.onclick = function(){
    op1 = parseFloat(getNumbers());
    operation = "minus";
    deleteFromInput();
}
let plus = document.getElementById("plus");
plus.onclick = function(){
    op1 = parseFloat(getNumbers());
    operation = "plus";
    deleteFromInput();
}
let mult = document.getElementById("mult");
mult.onclick = function(){
    op1 = parseFloat(getNumbers());
    operation = "mult";
    deleteFromInput();
}
let div = document.getElementById("div");
div.onclick = function(){
    op1 = parseFloat(getNumbers());
    operation = "div";
    deleteFromInput();
}


function deleteFromInput(){
    inputNumbers1 = [];
    // inputNumbers1.splice(0,inputNumbers1.length);
    showInInput();
};
document.getElementById("delet").onclick = deleteFromInput;
