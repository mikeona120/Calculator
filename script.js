function operate(a,b,operator){
    let result = 0;
    if(operator == "+"){
        result = Math.add(a,b);
    }
    else if(operator == "-"){
        result = Math.subtract(a,b);
    }
    else if(operator == "*"){
        result = Math.multiply(a,b);
    }
    else if(operator == "/"){
        result = Math.divide(a,b);
    }
    return result;
}







function clearDisplay(){
    document.getElementById("display").innerHTML = "";
}




var previousNumber = "";

var elements = document.getElementsByClassName("button");

function displayValue(){
    var attribute = this.getAttribute("value");
    if(attribute=="/" || attribute=="*" || attribute=="-" || attribute=="+"){
        var value = "";
        previousNumber = "";
    }
    else{
        var value=previousNumber+attribute;
    }

    document.getElementById("display").innerHTML = value;
    previousNumber = value;
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', displayValue, false);
}