
// funkce pro výpočet a zobrazení
function calculation(){
    let steak = parseInt(document.getElementById("Steak").value) || 0
    let steakPrice = 300
    let hamburger = parseInt(document.getElementById("Hamburger").value) || 0
    let hamburgerPrice = 200
    let pasta = parseInt(document.getElementById("Pasta").value) || 0 
    let pastaPrice = 180
    let icecream = parseInt(document.getElementById("Icecream").value) || 0
    let icecreamPrice = 50
// výpočet 
    let overallPrice = (steak* steakPrice) + (hamburger * hamburgerPrice) + (pasta * pastaPrice) + (icecream * icecreamPrice)
// zobrazení na stránku
// jednotlivé položky
    document.getElementById("calculationCheck").textContent = `Celková cena: ${overallPrice} Kč`
    if (steak > 0){
        document.getElementById("steakCount").textContent = `Počet steaku: ${steak}`
    } 
    if (hamburger > 0){
        document.getElementById("hamburgerCount").textContent = `Počet hamburgeru: ${hamburger}`
    }
    if (pasta > 0){
        document.getElementById("pastaCount").textContent = `Počet těstovin: ${pasta}`
    }
    if (icecream > 0){
        document.getElementById("icecreamCount").textContent = `Počet zmrzlin: ${icecream}`
    } 
// celkový počet
    let summary = steak + hamburger + pasta + icecream
    document.getElementById("orderSummary").textContent = `Celkem položek: ${summary}`
    return overallPrice
}
// funkce pro resetování formuláře i výsledku
function reset(){
    document.getElementById("Steak").value = ""
    document.getElementById("Hamburger").value = ""
    document.getElementById("Pasta").value = ""
    document.getElementById("Icecream").value = ""
    document.getElementById("steakCount").textContent = ""
    document.getElementById("hamburgerCount").textContent = ""
    document.getElementById("pastaCount").textContent = ""
    document.getElementById("icecreamCount").textContent = ""
    document.getElementById("calculationCheck").textContent = `Celková cena: 0 Kč`
    document.getElementById("orderSummary").textContent = `Celkem položek: 0`
    /*for (let i = 0; i > 4; i++){
    }*/
}