let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
//const buttons = document.querySelectorAll('button');


var elements = document.getElementsByClassName("button");
var previousDigit = "";
var currentValue = "";
var evaluateFlag = false;
var operandFlag = false;


function displayValue(){
    var buttonValue = this.getAttribute("value");

    if(buttonValue == "/" || buttonValue == "*" || buttonValue == "-" || buttonValue == "+"){

        if(evaluateFlag){
            currentValue = operate(Number(firstOperand),Number(secondOperand),buttonValue);
            firstOperand = currentValue; //iffy about this
            operandFlag = true;
        }

        document.getElementById("display").innerHTML = currentValue;
        currentValue = "";
        previousDigit = "";
        evaluateFlag = true;

    }
    else{


        currentValue = previousDigit + buttonValue;
        document.getElementById("display").innerHTML = currentValue;
        previousDigit = currentValue;

        if(evaluateFlag){
            secondOperand = currentValue;
        }
        else{
            firstOperand = currentValue;
            console.log(firstOperand);
        }
        

    }

    
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', displayValue, false);
}


function clearDisplay(){
    document.getElementById("display").innerHTML = "";
    previousDigit = "";
    currentValue = "";
    evaluateFlag = false;
}

function operate(a,b,operator){
    if(operator == "+"){
        return a+b;
    }
    else if(operator == "-"){
        return a-b;
    }
    else if(operator == "*"){
        return a*b;
    }
    else if(operator == "/"){
        if(y==0){
            return "yikes";
        }
        else
            return a/b;  
    }
 
}