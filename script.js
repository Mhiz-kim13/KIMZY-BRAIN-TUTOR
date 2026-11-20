const questions = [
  {
    id: 1, exam: "BECE", year: "2022", topic: "Number and numeration",
    keywords: "percentage percentages",
    prompt: "Find 15% of ₦240.",
    options: ["₦24", "₦36", "₦40", "₦48"], answer: 1,
    solution: ["Convert the percentage to a decimal: 15% = 0.15.", "Multiply by the amount: 0.15 × ₦240 = ₦36."]
  },
  {
    id: 2, exam: "NECO", year: "2022", topic: "Algebra",
    keywords: "equations solve for x",
    prompt: "Solve 3x + 7 = 25.",
    options: ["x = 4", "x = 5", "x = 6", "x = 8"], answer: 2,
    solution: ["Subtract 7 from both sides: 3x + 7 − 7 = 25 − 7, so 3x = 18.", "Divide both sides by 3: x = 18 ÷ 3 = 6."]
  },
  {
    id: 3, exam: "BECE", year: "2023", topic: "Geometry",
    keywords: "angles triangle",
    prompt: "Two angles in a triangle are 45° and 65°. Find the third angle.",
    options: ["60°", "70°", "80°", "90°"], answer: 1,
    solution: ["The angles in a triangle add up to 180°.", "Subtract the known angles: 180° − 45° − 65° = 70°."]
  },
  {
    id: 4, exam: "NECO", year: "2023", topic: "Mensuration",
    keywords: "volume cuboid rectangular prism",
    prompt: "A cuboid is 8 cm long, 5 cm wide and 3 cm high. What is its volume?",
    options: ["40 cm³", "80 cm³", "120 cm³", "240 cm³"], answer: 2,
    solution: ["Use the cuboid volume formula: length × width × height.", "Substitute the measurements: 8 × 5 × 3 = 120 cm³."]
  },
  {
    id: 5, exam: "BECE", year: "2024", topic: "Statistics",
    keywords: "data average mean",
    prompt: "Find the mean of 4, 6, 8, 10 and 12.",
    options: ["6", "7", "8", "10"], answer: 2,
    solution: ["Add the five values: 4 + 6 + 8 + 10 + 12 = 40.", "Divide the total by the number of values: 40 ÷ 5 = 8."]
  },
  {
    id: 6, exam: "NECO", year: "2024", topic: "Probability",
    keywords: "chance dice outcomes",
    prompt: "A fair six-sided die is rolled. What is the probability of getting an even number?",
    options: ["1/6", "1/3", "1/2", "2/3"], answer: 2,
    solution: ["The even outcomes are 2, 4 and 6: 3 favourable outcomes.", "There are 6 possible outcomes, so the probability is 3/6 = 1/2."]
  },
  {
    id: 7, exam: "BECE", year: "2025", topic: "Financial mathematics",
    keywords: "money discount sale price",
    prompt: "A bag costs ₦1,500. It is sold at a 20% discount. What is the sale price?",
    options: ["₦1,000", "₦1,200", "₦1,300", "₦1,350"], answer: 1,
    solution: ["Find the discount: 20% × ₦1,500 = ₦300.", "Subtract the discount from the original price: ₦1,500 − ₦300 = ₦1,200."]
  },
  {
    id: 8, exam: "NECO", year: "2025", topic: "Number and numeration",
    keywords: "ratio sharing proportion",
    prompt: "The ratio of red counters to blue counters is 2:3. If there are 40 counters altogether, how many are red?",
    options: ["12", "16", "20", "24"], answer: 1,
    solution: ["Add the ratio parts: 2 + 3 = 5. Each part is 40 ÷ 5 = 8 counters.", "Red counters make up 2 parts: 2 × 8 = 16."]
  },
  {
    id: 9, exam: "BECE", year: "2026", topic: "Graphs and coordinates",
    keywords: "coordinate plane points x y",
    prompt: "A point is 4 units to the right of the origin and 3 units up. What are its coordinates?",
    options: ["(3, 4)", "(−4, 3)", "(4, 3)", "(4, −3)"], answer: 2,
    solution: ["Moving right gives a positive x-coordinate: x = 4.", "Moving up gives a positive y-coordinate: y = 3. The coordinates are (4, 3)."]
  },
  {
    id: 10, exam: "NECO", year: "2026", topic: "Mensuration",
    keywords: "circle area pi",
    prompt: "Find the area of a circle with radius 7 cm. Use π = 22/7.",
    options: ["44 cm²", "77 cm²", "144 cm²", "154 cm²"], answer: 3,
    solution: ["Use the circle area formula: A = πr².", "Substitute π = 22/7 and r = 7: A = 22/7 × 7 × 7 = 154 cm²."]
  }
];

const questionList = document.querySelector("#question-list");
const questionCount = document.querySelector("#question-count");
const examSelect = document.querySelector("#exam-select");
const yearSelect = document.querySelector("#year-select");
const searchInput = document.querySelector("#question-search");

function getVisibleQuestions() {
  const exam = examSelect.value;
  const year = yearSelect.value;
  const search = searchInput.value.trim().toLowerCase();

  return questions.filter((question) => {
    const matchesExam = exam === "all" || question.exam === exam;
    const matchesYear = year === "all" || question.year === year;
    const searchableText = `${question.topic} ${question.keywords} ${question.prompt}`.toLowerCase();
    return matchesExam && matchesYear && (!search || searchableText.includes(search));
  });
}

function renderQuestions() {
  const visibleQuestions = getVisibleQuestions();
  questionCount.textContent = `${visibleQuestions.length} ${visibleQuestions.length === 1 ? "question" : "questions"} to practise`;

  if (visibleQuestions.length === 0) {
    questionList.innerHTML = '<div class="empty-state">No questions match those filters yet. Try another topic or reset your filters.</div>';
    return;
  }

  questionList.innerHTML = visibleQuestions.map((question, index) => `
    <article class="question-card" data-id="${question.id}">
      <div class="question-meta">
        <span class="tag">${question.topic}</span>
        <span class="tag tag-board">${question.exam} style</span>
        <span class="tag tag-year">${question.year} practice set</span>
        <span class="question-number">QUESTION ${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 class="question-text">${question.prompt}</h3>
      <div class="question-options">
        ${question.options.map((option, optionIndex) => `
          <label class="option-label">
            <input type="radio" name="question-${question.id}" value="${optionIndex}">
            <span>${String.fromCharCode(65 + optionIndex)}.</span> ${option}
          </label>
        `).join("")}
      </div>
      <div class="question-actions"><span class="answer-hint">Pick an option to reveal the answer and worked solution.</span></div>
      <div class="answer-result" data-result="${question.id}" role="status" hidden></div>
    </article>
  `).join("");
}

[examSelect, yearSelect].forEach((select) => select.addEventListener("change", renderQuestions));
searchInput.addEventListener("input", renderQuestions);

questionList.addEventListener("change", (event) => {
  const selected = event.target;
  if (!selected.matches('input[type="radio"][name^="question-"]')) return;

  const questionId = Number(selected.name.replace("question-", ""));
  const question = questions.find((item) => item.id === questionId);
  const card = selected.closest(".question-card");
  const result = card.querySelector(`[data-result="${question.id}"]`);
  const selectedIndex = Number(selected.value);
  const isCorrect = selectedIndex === question.answer;

  card.querySelectorAll(".option-label").forEach((label, index) => {
    label.classList.toggle("option-correct", index === question.answer);
    label.classList.toggle("option-incorrect", index === selectedIndex && !isCorrect);
  });

  result.hidden = false;
  result.className = `answer-result ${isCorrect ? "correct" : "incorrect"}`;
  result.innerHTML = `
    <strong>${isCorrect ? "That’s right!" : "Not quite—here’s the correct answer."}</strong>
    <p class="answer-picked">Your answer: ${String.fromCharCode(65 + selectedIndex)}. ${question.options[selectedIndex]}</p>
    <p class="answer-correct">Correct answer: ${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}</p>
    <strong class="solution-title">Worked solution</strong>
    <ol>${question.solution.map((step) => `<li>${step}</li>`).join("")}</ol>
  `;
});

document.querySelector("#reset-filters").addEventListener("click", () => {
  examSelect.value = "all";
  yearSelect.value = "all";
  searchInput.value = "";
  renderQuestions();
});

document.querySelector("#topic-grid").addEventListener("click", (event) => {
  const topicCard = event.target.closest("[data-topic]");
  if (!topicCard) return;
  searchInput.value = topicCard.dataset.topic;
  renderQuestions();
  document.querySelector("#practice").scrollIntoView({ behavior: "smooth" });
});

renderQuestions();