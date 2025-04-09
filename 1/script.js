const questions = [
"what is the name of principal of nlebs? ",
"Goddess of Love and Beauty उपनामले चिनिने ग्रह कुन हो? ",
"पृथ्वीको पिण्ड (Mass) कति छ?",
"दिन र रात बराबर कहिले हुन्छ?",
"मंगल ग्रहमा प्रक्षेपण गरिएको पहिलो अन्तरिक्ष यान कुन हो?",
"संसारको छानो (Roof of the World) भनेर केलाई चिनिन्छ?",
"अफ्रिका महादेशको सर्वोच्च शिखर कुन हो?",
"भारतमा पुगेपछि कर्णाली नदीलाई के नामले चिनिन्छ?",
"नेपालको कुन जिल्लाको आकार नक्सामा हलो जस्तो छ?",
"जुगल हिमाल कुन जिल्लामा पर्दछ?",
"चीन र भारत दुवै देशलाई छुने जिल्ला कुन कुन हुन?",
"नेपाललाई ७ प्रदेशमा कहिले विभाजन गरिएको थियो?"

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
