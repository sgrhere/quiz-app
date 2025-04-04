const questions = [
"What is the singular noun of data?",
"Which language is used for making webpages?",
"What is the program file extension of Qbasic?",
"Which is the first digital wallet of Nepal?",
"Number '13' is represented as ? in hexa-decimal number system.",
"The device that sends data to the destination is called?",
"What is the fullform of URL?",
"When was First IT policy introduced in Nepal?",
"What is the name of central device used in star topology?",
"'I' in CIA stands for?",
"Which mode is used to add more records in the existing data file?",
"Which communication media uses light to carry a data signal through the cable?",

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
