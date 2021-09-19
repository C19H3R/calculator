const addNums = (a, b) => a + b;
const substractNums = (a, b) => a - b;
const multiplyNums = (a, b) => a * b;
const divideNums = (a, b) => Math.round(a * 100.0 / b) / 100;

const takeInput=(currentButton)=>{
    let number=currentButton.textContent;
    if(firstOperand==undefined){
        firstOperand="";
    }
    if(secondOperand==undefined){
        secondOperand="";
    }
    if(!firstInputTaken){
        firstOperand+=number+"";
    }else{
        secondOperand+=number+"";
    }
    console.log(number);
    updateDisplays()
}

const onOperatorClick=(op)=>{
    currentOperator=op.textContent;

    console.log(currentOperator);
    if(firstOperand==undefined){
        alert("invalidInput")
    }
    firstOperand=parseInt(firstOperand);
    firstInputTaken=true;
    updateDisplays()
}

const getResult=()=>{
    console.log(currentOperator);
    if(firstOperand!= undefined &&secondOperand!=undefined&&currentOperator!=undefined){
        result=operate(parseInt(firstOperand),parseInt(secondOperand),currentOperator);
        reset();
    }else{
        alert("Invalid Input");
    }
    console.log("hola");
    updateDisplays();
}

const reset=()=>{
    currentDisplay.textContent="";
    firstOperand=undefined;
    secondOperand=undefined;
    firstInputTaken=false;
    currentOperator=undefined;
    updateDisplays();
}
const updateDisplays = ()=>{
    if(result!=undefined){
        resultDisplay.textContent=result;
    }
    let displayString=`${firstOperand!=undefined?firstOperand:""}${currentOperator!=undefined?currentOperator:""}${secondOperand!=undefined?secondOperand:""}`;
    if(currentNumer!=undefined){
        displayString=currentNumer;
    }
    currentDisplay.textContent=displayString
    currentNumer=undefined;
}

const ADD_OP = "+";
const SUBTRACT_OP = "-";
const MULTIPLY_OP = "*";
const DIVIDE_OP = "/";

const operate = (a, b, operator) => {
    console.log(operator);
    switch (operator) {
        case ADD_OP:
            return addNums(a, b);
            break;
        case SUBTRACT_OP:
            return substractNums(a, b);
            break;
        case MULTIPLY_OP:
            return multiplyNums(a, b);
            break;
        case DIVIDE_OP:
            return divideNums(a, b);
            break;
        default:
            console.log("WrongOperator");
            break;
    }
}


let currentNumer=undefined;
let firstOperand=undefined;
let secondOperand=undefined;
let currentOperator=""
let firstInputTaken=false;
let result=undefined;

//get all buttons
//get current Display
//get result Display
//get clear button
//get result button

//get all buttons

const numberButtons=[...document.querySelectorAll(".regular-numbers")];

const operatorButtons=[...document.querySelectorAll(".operator-buttons")];

const resultDisplay=document.querySelector(".current-txt");

const currentDisplay=document.querySelector(".result-txt");

const clrButton=document.querySelector("#clear-button")

const resultButton=document.querySelector("#result-btn");


numberButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{takeInput(btn)})
})

operatorButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{onOperatorClick(btn)})
})

resultButton.addEventListener("click",getResult)

clrButton.addEventListener("click",()=>{
    reset()
    updateDisplays()
    result=""
    resultDisplay.textContent=""
})