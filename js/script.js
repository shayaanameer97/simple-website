const quizForm = document.getElementById('quizForm');

if (quizForm) {
  const result = document.getElementById('result');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');

  const correctAnswers = {
    q1: 'b',
    q2: 'a',
    q3: 'b',
    q4: 'b',
    q5: 'a',
    q6: 'b',
    q7: 'c',
    q8: 'a'
  };

  const total = Object.keys(correctAnswers).length;

  const updateProgress = () => {
    let answered = 0;

    for (const question of Object.keys(correctAnswers)) {
      const chosen = new FormData(quizForm).get(question);
      if (chosen) {
        answered += 1;
      }
    }

    const percent = Math.round((answered / total) * 100);
    progressBar.style.width = `${percent}%`;
    progressText.textContent = `${answered}/${total} answered`;
  };

  quizForm.addEventListener('change', updateProgress);

  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let score = 0;
    for (const [question, answer] of Object.entries(correctAnswers)) {
      if (new FormData(quizForm).get(question) === answer) {
        score += 1;
      }
    }

    const percentage = Math.round((score / total) * 100);
    result.textContent = `Score: ${score}/${total} (${percentage}%).`;
  });
}
