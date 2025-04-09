const questions = [
"When was Jumla district declared as Literate district?",
"Who received the 2080 Madan Prize?",
"Which bank received Infosis Financial Innovation Award 2024?",
"Who won the title Miss Nepal 2024?",
"When is TAX day celebrated in Nepal?",
"What is the name of the ROBOT used in Nepal Telecom?",
"Which country won the title SAFF  Champian WOMEN FOOTBALL ? ",
"Since Which month the  New Year of Nepal Sambat begins? ",
"In how many languages does Radio Nepal broadcast its news?",
"When was the Tiktok banned and unbanned in Nepal?",
"In which rank does Nepal fall in World Happiest country list?", 
"Which movie won the Oscar Award 2024?"

    // Add more questions up to 60
];

const questionNumbersContainer = document.getElementById('questionNumbers');
const questionText = document.getElementById('questionText');

// Generate question numbers
for (let i = 0; i < questions.length; i++) {
    const li = document.createElement('li');
    li.textContent = i + 1; // Question number
    li.addEventListener('click', () => showQuestion(i, li));
    questionNumbersContainer.appendChild(li);
}

function showQuestion(index, li) {
    questionText.textContent = questions[index];
    li.classList.add('taken'); // Mark question as taken
}
