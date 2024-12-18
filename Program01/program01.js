let uživatel = prompt("Zadejte věk")

if (uživatel >= 18){
    alert("přístup povolen")
    for (let i = 1; i <= 10; i++) {
        document.getElementById("vystup").innerHTML += i
          }
    }
else { alert("přístup zamítnut")
}


function vypocet(){
    let number1 = parseFloat(document.getElementById("number1").value)
    let number2 = parseFloat(document.getElementById("number2").value)
    let sum = number1 + number2;

    document.getElementById("output").textContent = `Výsledek je: ${sum}`
}
/*
// parseFloat = pro získání čísla ze stringu(textu) např vstup uživatele
// cyklus for
for(let y = 0; y<=5; y++){
    console.log("testovací")
}
*/
