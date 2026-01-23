const questions = {
    male: [
        { text: "I am aggressive and have a strong hunting instinct.", type: "teto" },
        { text: "I am assertive and have leadership qualities.", type: "teto" },
        { text: "I am emotionally masculine in a rough rather than sensitive way.", type: "teto" },
        { text: "I am not interested in external things (social status, honor, etc.).", type: "teto" },
        { text: "I dislike analyzing and judging, and am improvisation-oriented.", type: "teto" },
        { text: "I prefer momentary feelings over abstract ideologies.", type: "teto" },
        { text: "I am simple and push through with what has been decided.", type: "teto" },
        { text: "I love challenges and adventures.", type: "teto" },
        { text: "I am not very sensitive to trends.", type: "teto" },
        { text: "I prefer simple and classic fashion over excessive grooming.", type: "teto" },
        { text: "I am sensitive and delicate, and tend to be rational.", type: "egen" },
        { text: "I react sensitively not only to my own emotions but also to those of others.", type: "egen" },
        { text: "I am interested in abstract concepts (art, philosophy, literature, etc.).", type: "egen" },
        { text: "I am inner-directed and interested in politics or society.", type: "egen" },
        { text: "I prefer static hobbies over active ones and value work-life balance.", type: "egen" },
        { text: "I can be ambiguous or neutral in my self-expression.", type: "egen" },
        { text: "I am sensitive to trends or have a good aesthetic sense.", type: "egen" },
        { text: "I value my alone time.", type: "egen" },
        { text: "I prefer receiving advances in relationships rather than making them.", type: "egen" },
        { text: "I am good at expressing emotions through words or atmosphere rather than actions.", type: "egen" },
    ],
    female: [
        { text: "I am lively, proactive, and have a challenging attitude.", type: "teto" },
        { text: "I am highly independent.", type: "teto" },
        { text: "I tend to judge situations quickly rather than dwelling on emotions.", type: "teto" },
        { text: "I have a cheerful and healthy energy.", type: "teto" },
        { text: "I am not easily intimidated or discouraged.", type: "teto" },
        { text: "I have a thought process that is closer to instinct than emotion.", type: "teto" },
        { text: "I enjoy exercising or have active hobbies.", type: "teto" },
        { text: "I find it easy to make the first move on someone I'm interested in.", type: "teto" },
        { text: "I am straightforward in expressing my feelings.", type: "teto" },
        { text: "I am often attracted to masculine men.", type: "teto" },
        { text: "I am not very assertive or strong-willed, and I worry about myself often.", type: "egen" },
        { text: "I have a complex inner world.", type: "egen" },
        { text: "I react sensitively to the emotions of others and have high empathy.", type: "egen" },
        { text: "I tend to start relationships after receiving an advance, rather than making the first move.", type: "egen" },
        { text: "I value emotional connection, stability, and warmth in a relationship.", type: "egen" },
        { text: "I have a gentle and quiet demeanor.", type: "egen" },
        { text: "I am often attracted to sensitive and pretty-boy types of men.", type: "egen" },
        { text: "I prefer feminine and classic styles over trendy street fashion.", type: "egen" },
        { text: "I prefer being led in a relationship.", type: "egen" },
        { text: "I get hurt easily in relationships and the emotional aftereffects last long.", type: "egen" },
    ]
};

const results = {
    teto_male: {
        title: "Teto-nam (Testosterone Male)",
        description: "You are a Teto-nam, who exhibits strong leadership, drive, and a straightforward tendency. You are assertive, goal-oriented, and prefer action over words. In relationships, you take the lead and express yourself directly."
    },
    egen_male: {
        title: "Egen-nam (Estrogen Male)",
        description: "You are an Egen-nam, who is sensitive, delicate, and rational. You value emotional connection and empathy. In relationships, you are more passive and prefer to express yourself through words and atmosphere."
    },
    teto_female: {
        title: "Teto-nyeo (Testosterone Female)",
        description: "You are a Teto-nyeo, who is lively, proactive, and independent. You have a strong mentality and a thought process closer to instinct than emotion. In relationships, you are not afraid to make the first move and value action."
    },
    egen_female: {
        title: "Egen-nyeo (Estrogen Female)",
        description: "You are an Egen-nyeo, who has a gentle, quiet demeanor and values emotional connection. You are empathetic and sensitive to the feelings of others. In relationships, you prefer being led and value warmth and stability."
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const questionContainer = document.getElementById('question-container');
    const resultBtn = document.getElementById('result-btn');
    const resultContainer = document.getElementById('result-container');

    let selectedGender = null;

    genderRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            selectedGender = event.target.value;
            renderQuestions(selectedGender);
        });
    });

    function renderQuestions(gender) {
        questionContainer.innerHTML = '';
        if (!gender) return;

        questions[gender].forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('test-question');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `q${index}`;
            checkbox.dataset.type = q.type;

            const label = document.createElement('label');
            label.htmlFor = `q${index}`;
            label.textContent = q.text;

            questionDiv.appendChild(checkbox);
            questionDiv.appendChild(label);
            questionContainer.appendChild(questionDiv);
        });
        resultBtn.style.display = 'block';
    }

    resultBtn.addEventListener('click', () => {
        let tetoScore = 0;
        let egenScore = 0;

        const checkboxes = questionContainer.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                if (checkbox.dataset.type === 'teto') {
                    tetoScore++;
                } else {
                    egenScore++;
                }
            }
        });

        displayResult(tetoScore, egenScore);
    });

    function displayResult(tetoScore, egenScore) {
        resultContainer.innerHTML = '';
        let resultKey;

        if (selectedGender === 'male') {
            resultKey = tetoScore >= egenScore ? 'teto_male' : 'egen_male';
        } else {
            resultKey = tetoScore >= egenScore ? 'teto_female' : 'egen_female';
        }

        const resultData = results[resultKey];
        const resultTitle = document.createElement('h3');
        resultTitle.textContent = `Your Result: ${resultData.title}`;
        
        const resultDescription = document.createElement('p');
        resultDescription.textContent = resultData.description;

        resultContainer.appendChild(resultTitle);
        resultContainer.appendChild(resultDescription);
    }
});