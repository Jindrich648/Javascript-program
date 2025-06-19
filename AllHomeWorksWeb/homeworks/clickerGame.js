let clickCounter = 0

// Funkce na zvětšení skóre při kliknutí
function clickMouse() {
    // Zvětší skóre o 1
    clickCounter++

    // Aktualizuje skóre na stránce
    document.getElementById("clickCounter").innerText = "Skóre: " + clickCounter;

    // Přidá animaci při kliknutí
    let animace = document.querySelector(".animace");
    animace.style.display = "block"; // Zobrazí animaci
    setTimeout(() => {
        animace.style.display = "none"; // Po chvíli skryje animaci
    }, 500);
}

// Funkce na resetování 
function resetCounter(){
    clickCounter = 0
    document.getElementById("clickCounter").textContent = clickCounter
}