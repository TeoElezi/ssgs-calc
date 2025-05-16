function pow(base, exponent) {
    
    return Math.pow(base, exponent);
}
function sum(a, b) {
    
    return a + b;
}
function subtract(a, b) {
    
    return a - b;
}
function multiply(a, b) {
    
    return a * b;
}
function divide(a, b) {
    
    return a / b;
}

/* istanbul ignore next */
function runCalculatorCLI() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askOperation() {
        console.log("\nBenvenuto nella calcolatrice CLI!");
        console.log("Operazioni disponibili:");
        console.log("1. Addizione");
        console.log("2. Sottrazione");
        console.log("3. Moltiplicazione");
        console.log("4. Divisione");
        console.log("5. Potenza");
        
        rl.question("Seleziona un'operazione (1-5): ", (operation) => {
            if (!["1", "2", "3", "4", "5"].includes(operation)) {
                console.log("Errore: operazione non valida. Riprova.");
                return askOperation();
            }
            askNumbers(operation);
        });
    }

    function askNumbers(operation) {
        rl.question("Inserisci il primo numero: ", (num1) => {
            rl.question("Inserisci il secondo numero: ", (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);

                if (isNaN(a) || isNaN(b)) {
                    console.log("Errore: inserisci numeri validi.");
                    return askNumbers(operation);
                }

                let result;
                try {
                    switch (operation) {
                        case "1": result = sum(a,b); break;
                        case "2": result = subtract(a,b); break;
                        case "3": result = multiply(a,b); break;
                        case "4": result = divide(a,b); break;
                        case "5": result = pow(a, b); break;
                    }
                    console.log(`Risultato: ${result}`);
                } catch (error) {
                    console.log(error.message);
                }
                askContinue();
            });
        });
    }

    function askContinue() {
        rl.question("Vuoi eseguire un'altra operazione? (s/n): ", (answer) => {
            if (answer.toLowerCase() === 's') {
                askOperation();
            } else if (answer.toLowerCase()!== 'n' && answer.toLowerCase() !== 's') {
                console.log("Errore: risposta non valida. Riprova.");
                askContinue();
            } else {
                console.log("Grazie per aver usato la calcolatrice CLI!");
                rl.close();
            }
        });
    }

    askOperation();
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    pow,
    runCalculatorCLI
};

/* istanbul ignore next */
if (require.main === module) {
    runCalculatorCLI();
}