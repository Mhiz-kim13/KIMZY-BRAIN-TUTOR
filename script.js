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

const beceRevisionEntries = [
  { year: "2022", topic: "Number and numeration", keywords: "fractions addition", prompt: "Calculate 2/3 + 1/6.", options: ["3/9", "5/6", "1/2", "1"], answer: 1, solution: ["Write both fractions with denominator 6: 2/3 = 4/6.", "Add: 4/6 + 1/6 = 5/6."] },
  { year: "2022", topic: "Number and numeration", keywords: "decimal multiplication", prompt: "Calculate 2.4 × 5.", options: ["1.2", "7.4", "12", "120"], answer: 2, solution: ["Multiply 24 × 5 = 120.", "There is one decimal place in 2.4, so the answer is 12."] },
  { year: "2022", topic: "Number and numeration", keywords: "ratio sharing", prompt: "Share 35 in the ratio 2:5. What is the smaller share?", options: ["5", "10", "14", "25"], answer: 1, solution: ["There are 2 + 5 = 7 parts, so each part is 35 ÷ 7 = 5.", "The smaller share is 2 × 5 = 10."] },
  { year: "2022", topic: "Number and numeration", keywords: "hcf highest common factor", prompt: "Find the highest common factor of 18 and 30.", options: ["3", "6", "9", "12"], answer: 1, solution: ["Factors of 18 include 1, 2, 3, 6, 9 and 18.", "The greatest factor also shared by 30 is 6."] },
  { year: "2022", topic: "Algebra", keywords: "simplify like terms", prompt: "Simplify 5a + 3 − 2a + 4.", options: ["3a + 7", "7a + 7", "3a − 1", "7a − 1"], answer: 0, solution: ["Collect the like terms: 5a − 2a = 3a.", "Add the constants: 3 + 4 = 7. The result is 3a + 7."] },
  { year: "2022", topic: "Algebra", keywords: "solve equation x", prompt: "Solve 4x − 9 = 15.", options: ["x = 4", "x = 5", "x = 6", "x = 7"], answer: 2, solution: ["Add 9 to both sides: 4x = 24.", "Divide by 4: x = 6."] },
  { year: "2022", topic: "Geometry", keywords: "angles straight line", prompt: "An angle on a straight line is 128°. Find the adjacent angle.", options: ["42°", "52°", "62°", "128°"], answer: 1, solution: ["Angles on a straight line add up to 180°.", "The missing angle is 180° − 128° = 52°."] },
  { year: "2022", topic: "Mensuration", keywords: "perimeter rectangle", prompt: "A rectangle is 9 cm long and 4 cm wide. Find its perimeter.", options: ["13 cm", "26 cm", "36 cm", "72 cm"], answer: 1, solution: ["Perimeter = 2 × (length + width).", "2 × (9 + 4) = 2 × 13 = 26 cm."] },
  { year: "2022", topic: "Statistics", keywords: "mean average", prompt: "Find the mean of 3, 5, 7 and 9.", options: ["5", "6", "7", "24"], answer: 1, solution: ["Add the values: 3 + 5 + 7 + 9 = 24.", "Divide by 4: 24 ÷ 4 = 6."] },
  { year: "2022", topic: "Probability", keywords: "chance coin", prompt: "A fair coin is tossed once. What is the probability of getting heads?", options: ["0", "1/4", "1/2", "1"], answer: 2, solution: ["There are two equally likely outcomes: heads and tails.", "One of the two outcomes is heads, so the probability is 1/2."] },
  { year: "2022", topic: "Financial mathematics", keywords: "profit loss percentage", prompt: "A trader buys an item for ₦800 and sells it for ₦1,000. What is the profit percentage?", options: ["20%", "25%", "80%", "125%"], answer: 1, solution: ["Profit = ₦1,000 − ₦800 = ₦200.", "Profit percentage = (₦200 ÷ ₦800) × 100% = 25%."] },

  { year: "2023", topic: "Number and numeration", keywords: "fractions division", prompt: "Calculate 3/4 ÷ 1/2.", options: ["3/8", "2/3", "1 1/2", "2"], answer: 2, solution: ["To divide by a fraction, multiply by its reciprocal: 3/4 × 2/1.", "6/4 simplifies to 3/2, or 1 1/2."] },
  { year: "2023", topic: "Number and numeration", keywords: "rounding nearest ten", prompt: "Round 6,847 to the nearest ten.", options: ["6,840", "6,845", "6,850", "6,900"], answer: 2, solution: ["Look at the ones digit: it is 7.", "Since 7 is at least 5, round the tens digit up. The result is 6,850."] },
  { year: "2023", topic: "Number and numeration", keywords: "ratio proportion", prompt: "The ratio of boys to girls is 3:4. If there are 28 girls, how many boys are there?", options: ["18", "21", "24", "32"], answer: 1, solution: ["Four ratio parts represent 28 girls, so one part is 28 ÷ 4 = 7.", "Boys represent 3 parts: 3 × 7 = 21."] },
  { year: "2023", topic: "Algebra", keywords: "substitution formula evaluate", prompt: "Find 2a² − b when a = 3 and b = 4.", options: ["10", "14", "18", "32"], answer: 1, solution: ["Substitute the values: 2 × 3² − 4.", "Evaluate: 2 × 9 − 4 = 18 − 4 = 14."] },
  { year: "2023", topic: "Algebra", keywords: "simplify expand brackets", prompt: "Expand 3(x + 4).", options: ["3x + 4", "3x + 7", "3x + 12", "7x"], answer: 2, solution: ["Multiply each term inside the brackets by 3.", "3 × x + 3 × 4 = 3x + 12."] },
  { year: "2023", topic: "Algebra", keywords: "solve equation", prompt: "Solve 2y + 5 = 19.", options: ["y = 5", "y = 7", "y = 12", "y = 14"], answer: 1, solution: ["Subtract 5 from both sides: 2y = 14.", "Divide by 2: y = 7."] },
  { year: "2023", topic: "Geometry", keywords: "polygon interior angles quadrilateral", prompt: "Three angles of a quadrilateral are 80°, 95° and 110°. Find the fourth angle.", options: ["65°", "75°", "85°", "95°"], answer: 1, solution: ["Interior angles of a quadrilateral add up to 360°.", "The fourth angle is 360° − (80° + 95° + 110°) = 75°."] },
  { year: "2023", topic: "Mensuration", keywords: "area triangle", prompt: "Find the area of a triangle with base 12 cm and height 5 cm.", options: ["17 cm²", "30 cm²", "60 cm²", "120 cm²"], answer: 1, solution: ["Area of a triangle = 1/2 × base × height.", "1/2 × 12 × 5 = 30 cm²."] },
  { year: "2023", topic: "Mensuration", keywords: "volume cube", prompt: "Find the volume of a cube with side length 4 cm.", options: ["16 cm³", "48 cm³", "64 cm³", "96 cm³"], answer: 2, solution: ["Volume of a cube = side × side × side.", "4 × 4 × 4 = 64 cm³."] },
  { year: "2023", topic: "Statistics", keywords: "mode most frequent", prompt: "Find the mode of 2, 4, 4, 5, 7, 4 and 8.", options: ["2", "4", "5", "7"], answer: 1, solution: ["The mode is the value that occurs most often.", "The number 4 appears three times, more than any other value."] },
  { year: "2023", topic: "Graphs and coordinates", keywords: "coordinates x axis y axis", prompt: "In which quadrant is the point (−3, 2)?", options: ["I", "II", "III", "IV"], answer: 1, solution: ["The x-coordinate is negative and the y-coordinate is positive.", "Points with a negative x and positive y lie in Quadrant II."] },

  { year: "2024", topic: "Number and numeration", keywords: "lcm lowest common multiple", prompt: "Find the lowest common multiple of 6 and 8.", options: ["12", "18", "24", "48"], answer: 2, solution: ["Multiples of 6 include 6, 12, 18, 24. Multiples of 8 include 8, 16, 24.", "The smallest common multiple is 24."] },
  { year: "2024", topic: "Number and numeration", keywords: "percentage fraction", prompt: "Write 3/5 as a percentage.", options: ["30%", "50%", "60%", "75%"], answer: 2, solution: ["Convert the fraction to a number out of 100: 3/5 × 100%.", "3 × 20% = 60%."] },
  { year: "2024", topic: "Number and numeration", keywords: "decimal fraction convert", prompt: "Write 0.375 as a fraction in its simplest form.", options: ["3/8", "3/5", "37/100", "375/100"], answer: 0, solution: ["Write 0.375 as 375/1000.", "Divide the numerator and denominator by 125: 375/1000 = 3/8."] },
  { year: "2024", topic: "Algebra", keywords: "sequence pattern term", prompt: "What is the next term in the sequence 4, 9, 14, 19, …?", options: ["22", "23", "24", "25"], answer: 2, solution: ["Find the common difference: each term increases by 5.", "Add 5 to 19: the next term is 24."] },
  { year: "2024", topic: "Algebra", keywords: "solve equation brackets", prompt: "Solve 5x − 3 = 2x + 12.", options: ["x = 3", "x = 4", "x = 5", "x = 6"], answer: 2, solution: ["Subtract 2x from both sides and add 3: 3x = 15.", "Divide by 3: x = 5."] },
  { year: "2024", topic: "Geometry", keywords: "parallel lines angles corresponding", prompt: "A transversal crosses two parallel lines. One corresponding angle is 68°. What is the other corresponding angle?", options: ["22°", "68°", "112°", "136°"], answer: 1, solution: ["Corresponding angles between parallel lines are equal.", "The other angle is 68°."] },
  { year: "2024", topic: "Mensuration", keywords: "circumference circle diameter pi", prompt: "Find the circumference of a circle with diameter 14 cm. Use π = 22/7.", options: ["22 cm", "44 cm", "88 cm", "154 cm"], answer: 1, solution: ["Circumference = π × diameter.", "22/7 × 14 = 44 cm."] },
  { year: "2024", topic: "Statistics", keywords: "range data", prompt: "Find the range of 12, 5, 9, 17 and 8.", options: ["9", "10", "12", "17"], answer: 2, solution: ["The greatest value is 17 and the smallest value is 5.", "Range = 17 − 5 = 12."] },
  { year: "2024", topic: "Probability", keywords: "probability bag counters", prompt: "A bag contains 3 red and 5 blue counters. What is the probability of picking a red counter?", options: ["3/5", "3/8", "5/8", "1/3"], answer: 1, solution: ["There are 3 red counters and 3 + 5 = 8 counters altogether.", "Probability of red = favourable outcomes ÷ total outcomes = 3/8."] },
  { year: "2024", topic: "Financial mathematics", keywords: "simple interest principal rate time", prompt: "Find the simple interest on ₦2,000 at 5% per year for 3 years.", options: ["₦100", "₦200", "₦300", "₦500"], answer: 2, solution: ["Simple interest = principal × rate × time ÷ 100.", "₦2,000 × 5 × 3 ÷ 100 = ₦300."] },
  { year: "2024", topic: "Graphs and coordinates", keywords: "gradient slope coordinates", prompt: "Find the gradient of the line through (1, 2) and (4, 8).", options: ["1", "2", "3", "6"], answer: 1, solution: ["Gradient = change in y ÷ change in x.", "(8 − 2) ÷ (4 − 1) = 6 ÷ 3 = 2."] },

  { year: "2025", topic: "Number and numeration", keywords: "integers negative addition", prompt: "Calculate −7 + 12.", options: ["−19", "−5", "5", "19"], answer: 2, solution: ["Adding 12 to −7 is the same as subtracting 7 from 12.", "12 − 7 = 5."] },
  { year: "2025", topic: "Number and numeration", keywords: "ratio scale recipe", prompt: "A drink uses concentrate and water in the ratio 1:4. How much water is needed for 3 cups of concentrate?", options: ["4 cups", "7 cups", "12 cups", "15 cups"], answer: 2, solution: ["The ratio shows 4 cups of water for every 1 cup of concentrate.", "For 3 cups of concentrate, water needed = 3 × 4 = 12 cups."] },
  { year: "2025", topic: "Number and numeration", keywords: "percentage increase", prompt: "Increase 80 by 25%.", options: ["85", "100", "105", "120"], answer: 1, solution: ["Find 25% of 80: 0.25 × 80 = 20.", "Add the increase: 80 + 20 = 100."] },
  { year: "2025", topic: "Algebra", keywords: "factorise factorization", prompt: "Factorise 6x + 18.", options: ["6(x + 3)", "3(2x + 18)", "6(x + 18)", "2(3x + 18)"], answer: 0, solution: ["The highest common factor of 6x and 18 is 6.", "Factor out 6: 6x + 18 = 6(x + 3)."] },
  { year: "2025", topic: "Algebra", keywords: "sequence nth term", prompt: "Find the 6th term of the sequence 2, 5, 8, 11, ….", options: ["14", "15", "17", "20"], answer: 2, solution: ["The first term is 2 and the common difference is 3.", "Continue adding 3: 2, 5, 8, 11, 14, 17. The 6th term is 17."] },
  { year: "2025", topic: "Geometry", keywords: "angles triangle isosceles", prompt: "An isosceles triangle has a vertex angle of 40°. Find each equal base angle.", options: ["40°", "60°", "70°", "140°"], answer: 2, solution: ["The angles in a triangle add up to 180°.", "The two equal angles total 180° − 40° = 140°, so each is 140° ÷ 2 = 70°."] },
  { year: "2025", topic: "Mensuration", keywords: "area parallelogram base height", prompt: "Find the area of a parallelogram with base 11 cm and perpendicular height 6 cm.", options: ["17 cm²", "34 cm²", "66 cm²", "132 cm²"], answer: 2, solution: ["Area of a parallelogram = base × perpendicular height.", "11 × 6 = 66 cm²."] },
  { year: "2025", topic: "Statistics", keywords: "median middle value", prompt: "Find the median of 3, 10, 6, 8 and 13.", options: ["6", "8", "10", "13"], answer: 1, solution: ["Arrange the values in order: 3, 6, 8, 10, 13.", "The middle value is 8, so the median is 8."] },
  { year: "2025", topic: "Probability", keywords: "probability spinner", prompt: "A spinner has 8 equal sections, 3 of which are green. What is the probability it lands on green?", options: ["3/5", "3/8", "5/8", "1/8"], answer: 1, solution: ["There are 3 green sections out of 8 equal sections.", "Probability of green = 3/8."] },
  { year: "2025", topic: "Financial mathematics", keywords: "discount sale price", prompt: "A ₦2,400 jacket is discounted by 10%. What is the new price?", options: ["₦2,160", "₦2,200", "₦2,300", "₦2,640"], answer: 0, solution: ["Find the discount: 10% × ₦2,400 = ₦240.", "Subtract it from the original price: ₦2,400 − ₦240 = ₦2,160."] },
  { year: "2025", topic: "Graphs and coordinates", keywords: "coordinates reflection x axis", prompt: "What are the coordinates of the reflection of (5, −2) in the x-axis?", options: ["(−5, −2)", "(−5, 2)", "(5, 2)", "(2, 5)"], answer: 2, solution: ["Reflection in the x-axis keeps the x-coordinate unchanged.", "It changes the sign of the y-coordinate: (5, −2) becomes (5, 2)."] },

  { year: "2026", topic: "Number and numeration", keywords: "fraction of quantity", prompt: "Find 3/8 of 64.", options: ["8", "16", "24", "32"], answer: 2, solution: ["Divide 64 by the denominator: 64 ÷ 8 = 8.", "Multiply by the numerator: 8 × 3 = 24."] },
  { year: "2026", topic: "Number and numeration", keywords: "speed distance time rate", prompt: "A bus travels 150 km in 3 hours. What is its average speed?", options: ["30 km/h", "45 km/h", "50 km/h", "153 km/h"], answer: 2, solution: ["Speed = distance ÷ time.", "150 km ÷ 3 hours = 50 km/h."] },
  { year: "2026", topic: "Number and numeration", keywords: "square root", prompt: "Find √196.", options: ["12", "13", "14", "16"], answer: 2, solution: ["The square root is the number that multiplies by itself to make 196.", "14 × 14 = 196, so √196 = 14."] },
  { year: "2026", topic: "Algebra", keywords: "solve equation", prompt: "Solve 7p + 2 = 44.", options: ["p = 4", "p = 6", "p = 8", "p = 9"], answer: 1, solution: ["Subtract 2 from both sides: 7p = 42.", "Divide by 7: p = 6."] },
  { year: "2026", topic: "Geometry", keywords: "angles quadrilateral", prompt: "Three angles of a quadrilateral are 90°, 90° and 75°. Find the fourth angle.", options: ["95°", "100°", "105°", "115°"], answer: 2, solution: ["The interior angles of a quadrilateral total 360°.", "360° − (90° + 90° + 75°) = 105°."] },
  { year: "2026", topic: "Mensuration", keywords: "area trapezium", prompt: "A trapezium has parallel sides of 8 cm and 12 cm and height 5 cm. Find its area.", options: ["40 cm²", "50 cm²", "60 cm²", "100 cm²"], answer: 1, solution: ["Area of a trapezium = 1/2 × (sum of parallel sides) × height.", "1/2 × (8 + 12) × 5 = 1/2 × 20 × 5 = 50 cm²."] },
  { year: "2026", topic: "Mensuration", keywords: "volume triangular prism", prompt: "A triangular prism has a triangular cross-section of area 12 cm² and length 7 cm. Find its volume.", options: ["19 cm³", "42 cm³", "84 cm³", "168 cm³"], answer: 2, solution: ["Volume of a prism = cross-sectional area × length.", "12 × 7 = 84 cm³."] },
  { year: "2026", topic: "Statistics", keywords: "mode frequency", prompt: "Find the mode of 6, 7, 6, 9, 8, 6 and 7.", options: ["6", "7", "8", "9"], answer: 0, solution: ["Count how often each value appears: 6 appears three times, 7 twice, and 8 and 9 once each.", "The most frequent value is 6."] },
  { year: "2026", topic: "Probability", keywords: "probability dice multiples", prompt: "A fair six-sided die is rolled. What is the probability of getting a number greater than 4?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 1, solution: ["Numbers greater than 4 are 5 and 6: 2 favourable outcomes.", "There are 6 possible outcomes, so the probability is 2/6 = 1/3."] },
  { year: "2026", topic: "Graphs and coordinates", keywords: "coordinates origin", prompt: "What is the x-coordinate of the point (−6, 4)?", options: ["−6", "−4", "4", "6"], answer: 0, solution: ["Coordinates are written in the order (x, y).", "For (−6, 4), the x-coordinate is −6."] },
  { year: "2026", topic: "Financial mathematics", keywords: "simple interest savings", prompt: "Find the total amount after ₦5,000 earns simple interest at 4% per year for 2 years.", options: ["₦400", "₦5,200", "₦5,400", "₦9,000"], answer: 2, solution: ["Interest = ₦5,000 × 4 × 2 ÷ 100 = ₦400.", "Total amount = principal + interest = ₦5,000 + ₦400 = ₦5,400."] }
];

beceRevisionEntries.forEach((entry, index) => {
  questions.push({ ...entry, id: 11 + index, exam: "BECE" });
});

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
  const questionLabel = examSelect.value === "BECE" ? "BECE revision questions" : "questions to practise";
  questionCount.textContent = `${visibleQuestions.length} ${questionLabel}`;

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