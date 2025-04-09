const questions = [
"Which metal is used in mobile battery ?",
"Which gas is used in fire extinguisher?",
"Which planet in our solar system has the thickest atmosphere ?",
"What is the scientific name of Frog ?",
"What is the weight of one human eye?",
"Which animal is known for its ability to regrow limbs?",
"Where are the Red Blood Cell  produced in?",
"What is the speed of the light?",
"Which element is known as the King of the Chemicals?",
"When was the internet introduced in Nepal ?",
"What is the full form of VPN?",
"Which programming language is primarily used for artificial intelligence development?"

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
