document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Zamezí odeslání formuláře

  let correctAnswers = 0;

  // Správné odpovědi ve formátu {otázka: správná hodnota}
  const correct = {
    q1: "true",
    q2: "true",
    q3: "true"
  };

  // Validace
  for (let key in correct) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (!selected) {
      alert("Please, answer every question.");
      return;
    }
  }

  // Pro každou otázku ověří odpověď
  for (let key in correct) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === correct[key]) {
      correctAnswers++;
    }
  }

  const totalQuestions = Object.keys(correct).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  // Zobrazí výsledky
  document.getElementById('result').innerText = `Correct answers: ${correctAnswers} (${percentage}%)`;
});

// Resetuje formulář
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  document.getElementById('result').innerText = ''; // Vymaže výsledek
});