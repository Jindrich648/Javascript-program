
function vypocet(weight, height) {
    return weight / (height * height)
}
function vysledek() {
    let weight = parseFloat(document.getElementById("number1").value)
    let height = parseFloat(document.getElementById("number2").value)
    let bmi = vypocet(weight, height)
    let zprava = `Vaše BMI je: ${bmi.toFixed(2)}.`

    if (bmi < 18.5) {
        zprava += "Podváha"
    } else if (bmi >= 18.5 && bmi < 24.9) {
        zprava += "Normální váha"
    } else if (bmi >= 25 && bmi < 29.9) {
        zprava += "Nadváha"
    } else {
        zprava += "Obezita"
    }

    document.getElementById("vystup").textContent = zprava
}




function calculateBMR(weight1, height1, age, gender, activityLevel) {
    let bmr;
    if (gender === "muž") {
        bmr = 88.362 + (13.397 * weight1) + (4.799 * height1) - (5.677 * age);
    } else if (gender === "žena") {
        bmr = 447.593 + (9.247 * weight1) + (3.098 * height1) - (4.330 * age);
    }
    let prijem;
    if (activityLevel === "nízká") {
        prijem = bmr * 1.2;
    } else if (activityLevel === "střední") {
        prijem = bmr * 1.55;
    } else if (activityLevel === "vysoká") {
        prijem = bmr * 1.9;
    }

    return prijem;
}
function vysledek2() {
    let weight1 = parseFloat(document.getElementById("number1a").value);
    let height1 = parseFloat(document.getElementById("number2a").value);
    let age = parseFloat(document.getElementById("number3").value);
    let gender = document.getElementById("gender").value;
    let activityLevel = document.getElementById("aktivita").value;
    let prijem = calculateBMR(weight1, height1, age, gender, activityLevel);
    let zprava = `Doporučený denní příjem kalorií je: ${prijem.toFixed(2)} kcal`;
    document.getElementById("vystup1").textContent = zprava;
}





