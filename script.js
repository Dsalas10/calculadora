let valorDefault="0";

function updateDisplay(){

    document.getElementById("display").innerHTML=valorDefault

}

function addDisplay(val){
    if (val === '.') {
        // Si la pantalla ya contiene un punto, no hacemos nada
        if (valorDefault.includes('.')) {
            return; // Salir de la función sin hacer ningún cambio
        }
    }
    if(valorDefault==="0" && val !=='.'){
        valorDefault = val;
    }
    else {
        valorDefault += val;
    }
    updateDisplay();
}

function clearDisplay() {
    valorDefault = '0';
    updateDisplay();
}

// function calcular() {
//     try {
//         displayValue = eval(displayValue).toString();
//     } catch (error) {
//         displayValue = 'Error';
//     }
//     updateDisplay();
// }
function calcular() {
    // Expresión matemática ingresada por el usuario
    const expression = valorDefault;

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
        valorDefault = parseFloat(result.toFixed(3)).toString()
    } else {
        // Expresión no válida
        valorDefault = 'Error: Expresión no válida';
    }

    // Actualizar el display
    updateDisplay();
}