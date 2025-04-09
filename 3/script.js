const questions = [
"पाल्पामा रहेको रानी महलको निर्माण कसले गरेका हुन ?",
"'जय नेपाल' शब्द पहिलो पटक प्रयोग गर्ने व्यक्ति को हुन् ?",
"पृथ्वीनारायण शाहका जेठा छोरा को हुन् ?",
"तामाको पैसा प्रचलनमा ल्याउने मल्ल राजा को हुन् ?",
"नेपालको पहिलो राजा कसलाई मानिन्छ ?",
"'घरको बाघ घरको स्याल' भनेर कसलाई चिनिन्छ ?",
"नेपाल‌लाई १४ अन्चल ७५ जिल्लामा विभाजन कहिले गरिएको थियो ?",
"In which country did democracy originate?",
"नेपाल-अंग्रेज युद्धमा नालापानीको नेपालको कमान्डार को थिए?",
"नेपालमा कहिले SLC को सुरुवात भएको थियो?",
"नेपालको इतिहासमा जिउँदो सहिद कसलाई भनिन्छ?",
"काेट पर्व कहिले भएको थियो?"

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
