let displayValue="0";

function updateDisplay(){

    document.getElementById("display").innerHTML=displayValue

}

function appendToDisplay(val){
    // console.log(val)
    if(displayValue==="0" && val !=="-"){
        displayValue = val;
    }
    else {
        displayValue += val;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

// function calculate() {
//     try {
//         displayValue = eval(displayValue).toString();
//     } catch (error) {
//         displayValue = 'Error';
//     }
//     updateDisplay();
// }
function calculate() {
    // Expresión matemática ingresada por el usuario
    const expression = displayValue;

    // Utilizamos expresiones regulares para analizar la entrada del usuario
    const regex = /([-+]?\d+(\.\d+)?)\s*([-+*/])\s*([-+]?\d+(\.\d+)?)/;
    const match = expression.match(regex);

    if (match) {
        const num1 = parseFloat(match[1]); // Primer número
        const operator = match[3]; // Operador (+, -, *, /)
        const num2 = parseFloat(match[4]); // Segundo número

        let result;

        // Realizar la operación según el operador
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error: División por cero';
                }
                break;
            default:
                result = 'Error: Operador inválido';
                break;
        }

        // Actualizar el valor en el display
        displayValue = result.toString();
    } else {
        // Expresión no válida
        displayValue = 'Error: Expresión no válida';
    }

    // Actualizar el display
    updateDisplay();
}