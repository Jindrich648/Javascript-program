// funkce pro samostatný výpočet, lze použít odděleně
function vypocet(weight, height) {
    return weight / (height * height)
} 
// funkce pro získání dat z html, použití funkce na výpočet a zobrazení výsledku
function vysledek() {
    // získá data pomocí getelementbyid
    // parsefloat je funkce, která konvertuje první argument na string(text) a bere ho jako číslo
    // ID chápu jako originální označení a bere se vždy to první
    // .value chápu jako hodnotu, která je obsažena v elementech a zadaná uživatelem. Text, čísla,...
    let weight = parseFloat(document.getElementById("number1").value)
    let height = parseFloat(document.getElementById("number2").value)
    // definuje co chceme počítat, BMI, a jak pomocí funkce vypocet
    let bmi = vypocet(weight, height)
    // zobrazí výsledek ve stylu: text+definovaný bmi+zaokrouhlý na 2 místa
    let zprava = `Vaše BMI je: ${bmi.toFixed(2)}.`
    // podmínka if s několika else if
    if (bmi < 18.5) {
        zprava += "Podváha"
    } else if (bmi >= 18.5 && bmi < 24.9) {
        zprava += "Normální váha"
    } else if (bmi >= 25 && bmi < 29.9) {
        zprava += "Nadváha"
    } else {
        zprava += "Obezita"
    }
// vezme element z html "vystup" textcontent vezme jenom text
    document.getElementById("vystup").textContent = zprava
}
// funkce resetování zadání a výsledku zároveň
function resetBMI(){
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
    document.getElementById("vystup").textContent = ""
}


//funkce na výpočet BMR s 5 parametry 
function calculateBMR(weight1, height1, age, gender, activityLevel) {
    // definice bmr pomocí podmínek
    let bmr;
    if (gender === "muž") {
        bmr = 88.362 + (13.397 * weight1) + (4.799 * height1) - (5.677 * age)
    } else if (gender === "žena") {
        bmr = 447.593 + (9.247 * weight1) + (3.098 * height1) - (4.330 * age)
    }
    // definice přijmu pomocí podmínek
    let prijem;
    if (activityLevel === "nízká") {
        prijem = bmr * 1.2;
    } else if (activityLevel === "střední") {
        prijem = bmr * 1.55;
    } else if (activityLevel === "vysoká") {
        prijem = bmr * 1.9;
    }
// ukončí podmínky a vrátí hodnotu tzn příjem
    return prijem;
}
//funkce na získání dat a zobrazení výsledku
function vysledek2() {
    let weight1 = parseFloat(document.getElementById("number1a").value)
    let height1 = parseFloat(document.getElementById("number2a").value)
    let age = parseFloat(document.getElementById("number3").value)
    let gender = document.getElementById("gender").value;
    let activityLevel = document.getElementById("aktivita").value
    let prijem = calculateBMR(weight1, height1, age, gender, activityLevel)
    let zprava = `Doporučený denní příjem kalorií je: ${prijem.toFixed(2)} kcal`
    document.getElementById("vystup1").textContent = zprava
}
//funkce pro resetování BMR
function resetBMR(){
    document.getElementById("number1a").value = ""
    document.getElementById("number2a").value = ""
    document.getElementById("number3").value = ""
    document.getElementById("gender").value = ""
    document.getElementById("aktivita").value = ""
    document.getElementById("vystup1").textContent = ""

}




