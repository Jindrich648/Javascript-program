

function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b
        case "subtract":
            return a - b
        case "multiply":
            return a * b
        case "divide":
            if (b === 0) {
                return "Dělení nulou není možné!"
            }
            return a / b
        default:
            return "Neplatná operace."
    }
}

function vypocet() {
    let number1 = parseFloat(document.getElementById("number1").value)
    let number2 = parseFloat(document.getElementById("number2").value)
    let operation = document.getElementById("operation").value
    let vysledek = calculate(number1, number2, operation)
    document.getElementById("vystup").textContent = `Výsledek: ${vysledek}`
}

/*function generateRandomNumber(){
    min = 1
    max = 100
}
*/

function convertCurrency() {
    const amount = parseFloat(document.getElementById("počet").value);
    const currency = document.getElementById("mena").value;
    const rates = { EUR: 25, USD: 22, GBP: 30 };
    document.getElementById("vysledek").textContent = 
    `Převedená částka: ${(amount / rates[currency]).toFixed(2)} ${currency}`              
}