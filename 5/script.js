const questions = [
"Who is the most expensive player in the IPL history ?",
"Who is the current captain Of female Nepali volleyball?",
"What is the full of NPL?",
"Who has the highest number of gold medal in olympic history ?",
"Which country has won the most world snooker championship ?",
"What is the national game of USA?",
"Which country is known as the Birth of Cricket?",
"Which indian cricketer is popularly known as Hitman?",
"2024 मा भएको ग्रीष्मकालीन खेलको आयोजना कहाँ गरिएको थियोे ?",
"Which  country invented the sport of Batminton?",
"How many squares are there in Chess board?",
"How many minutes are there in professional basket ball game?"

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
