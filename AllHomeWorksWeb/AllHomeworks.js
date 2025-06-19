
// Skript pro rozbalovací nabídku

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

// Přidání posluchače události pro každý prvek s třídou "dropdown-btn"
// Při kliknutí na prvek se rozbalí nebo sbalí jeho obsah

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// jednolitvé stránky s jejich URL
const pages = {
  page1: {  
      url: "http://127.0.0.1:5500/homeworks/Kalkula%C4%8Dka.html"   
  },
  page2: {
      url: "http://127.0.0.1:5500/homeworks/BMI.html"
  },
  page3: {
      url: "http://127.0.0.1:5500/homeworks/V%C3%BDpo%C4%8Det%20vody%20a%20makro%C5%BEivin%20na%20den.html"
  },
  page4: {
      url: "http://127.0.0.1:5500/homeworks/kvizovaAplikace.html"
  },
  page5: {
      url: "http://127.0.0.1:5500/homeworks/VintageBazar.html"
  },
  page6: {
      url: "http://127.0.0.1:5500/homeworks/objednavkovySystem.html"
  },
  page7: {
      url: "http://127.0.0.1:5500/homeworks/OnePageWebUkol.html"
  },
  page8: {
      url: "http://127.0.0.1:5500/homeworks/clickerGame.html"
  }
}

        // Přepnutí kanálu
        function switchPage(page) {
          const iframe = document.getElementById("content-frame");

          // Změna obsahu iframe
          iframe.src = pages[page].url;
        }