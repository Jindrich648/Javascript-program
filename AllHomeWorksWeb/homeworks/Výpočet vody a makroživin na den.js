// funkce pro výpočet 
function calculateWaterIntake(weight, activityLevel){
return (weight*0.03)+(activityLevel*0.5)
}
// funkce pro vytáhnutí hodnot z html, zpracování a zobrazení na stránku
function calculateWaterIntakeResult(){
    /* event.preventDefault() zabrání obnovení stránky, možnost použít i <form onsubmit="return false">*/
    let weight = parseFloat(document.getElementById("weight1").value)
    let activityLevel = parseFloat(document.getElementById("activitylevel1").value)
    let intake = calculateWaterIntake(weight, activityLevel)
    let message = `${intake.toFixed(2)}`
    if (intake < 2){
        message += " Nízký příjem vody"
    } else if (intake >= 2 && intake < 3){
        message += " Dostatečný příjem vody"
    } else {
        message += " Vysoký příjem vody, doporučuje se přizpůsobit."
    }
    document.getElementById("result1").textContent = message
}


//funkce pro tlačítko reset formuláře
function resetWaterIntake(){
    document.getElementById("weight1").value = ""
    document.getElementById("activitylevel1").value = ""
    document.getElementById("result1").textContent = ""
}
/*funkce pro výpočet živin. Takhle funkce má výpočet i hodnoty z html v jednom. 
Prvně se definují a získají z formuláře
pak je výpočet pomocí if, else if
výpočet by šel i pomocí switch case, protože ve formuláři je select
zobrazení výsledku na stránku musí být zapsáno uvnitř funkce
jinak by nevěděl, co má vypsat jako výsledek. */
function calculateMacros(){
    let weight2 = parseFloat(document.getElementById("weight2").value)
    let gender = document.getElementById("gender").value
    let goal = document.getElementById("goal").value
    let protein, carbs, fats
// pokud se pohlaví rovná muži nebo ženě, a cíl je zhubnout, přidat nebo udržet
// tak se jednotlivé živiny rovnají nějaké hodnotě
    if (gender === "male") {
        if (goal === "less"){
            protein = weight2*1.6
            carbs = weight2*2
            fats = weight2*0.8
        } else if (goal === "more"){
            protein = weight2*2
            carbs = weight2*4
            fats = weight2*1
        } else if (goal === "stable"){
            protein = (weight2*1.6 + weight2*2)/2
            carbs = (weight2*2 + weight2*4)/2
            fats = (weight2*0.8 + weight2*1)/2
        } 

    } else if (gender === "female") {
        if (goal === "less"){
            protein = weight2*1.4
            carbs = weight2*1.8
            fats = weight2*0.7
        } else if (goal === "more"){
            protein = weight2*1.8
            carbs = weight2*3.6
            fats = weight2*0.9
        } else if (goal === "stable"){
            protein = (weight2*1.4 + weight2*1.8)/2
            carbs = (weight2*1.8 + weight2*3.6)/2
            fats = (weight2*0.7 + weight2*0.9)/2
        }
     
    } 
// tahle část vypíše výsledek na html
    document.getElementById("result").textContent = `Denní příjem: Protein: ${protein.toFixed(2)} g, Sacharidy: ${carbs.toFixed(2)} g, Tuky: ${fats.toFixed(2)} g.`
    document.getElementById("inputForm").style.display = "block";
    document.getElementById("repeat").style.display = "block";
}
// resetuje váhu a výsledek
function repeatCalculation(){
    document.getElementById("result").textContent= ""
    document.getElementById("weight2").value= ""
    document.getElementById("inputForm").style.display = "block"
    document.getElementById("repeat").style.display = "none"
}
// zavře okno 
function exitProgram(){
    window.close()
}