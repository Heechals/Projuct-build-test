// mbti.js

const mbtiQuestions = [
    {
        id: 1,
        question: "At a party, you usually:",
        options: [
            { text: "Seek out new people to meet.", value: "E" },
            { text: "Stick with the people you already know.", value: "I" }
        ],
        type: "EI"
    },
    {
        id: 2,
        question: "When starting a new project, you typically:",
        options: [
            { text: "Lay out a systematic plan.", value: "S" },
            { text: "Start with the big picture.", value: "N" }
        ],
        type: "SN"
    },
    {
        id: 3,
        question: "When making decisions, you primarily:",
        options: [
            { text: "Rely on logic and facts.", value: "T" },
            { text: "Consider the impact on people.", value: "F" }
        ],
        type: "TF"
    },
    {
        id: 4,
        question: "In planning your day, you:",
        options: [
            { text: "Plan ahead and follow a schedule.", value: "J" },
            { text: "Stay flexible and adjust as needed.", value: "P" }
        ],
        type: "JP"
    },
    {
        id: 5,
        question: "When interacting with others, you are:",
        options: [
            { text: "Broadly engaged with many people.", value: "E" },
            { text: "Prefer deep connections with a few.", value: "I" }
        ],
        type: "EI"
    },
    {
        id: 6,
        question: "When taking in information, you focus on:",
        options: [
            { text: "Current facts and details.", value: "S" },
            { text: "Possibilities, meanings, and the future.", value: "N" }
        ],
        type: "SN"
    },
    {
        id: 7,
        question: "In conflict situations, you:",
        options: [
            { text: "Find solutions through objective analysis.", value: "T" },
            { text: "Prioritize the feelings of those involved.", value: "F" }
        ],
        type: "TF"
    },
    {
        id: 8,
        question: "When planning a trip, you prefer to:",
        options: [
            { text: "Set a detailed itinerary and stick to it.", value: "J" },
            { text: "Explore spontaneously and flexibly.", value: "P" }
        ],
        type: "JP"
    },
    {
        id: 9,
        question: "You gain energy from:",
        options: [
            { text: "Active external engagements.", value: "E" },
            { text: "Spending time alone.", value: "I" }
        ],
        type: "EI"
    },
    {
        id: 10,
        question: "When solving problems, you tend to:",
        options: [
            { text: "Look for practical solutions.", value: "S" },
            { text: "Seek creative and novel ideas.", value: "N" }
        ],
        type: "SN"
    }
];

const mbtiTypes = {
    "ISTJ": {
        name: "Introverted, Sensing, Thinking, Judging",
        description: "A responsible and practical organizer, valuing order and tradition."
    },
    "ISFJ": {
        name: "Introverted, Sensing, Feeling, Judging",
        description: "A dedicated and warm protector, always ready to support others."
    },
    "INFJ": {
        name: "Introverted, Intuitive, Feeling, Judging",
        description: "A visionary and empathetic advocate, driven by strong ideals."
    },
    "INTJ": {
        name: "Introverted, Intuitive, Thinking, Judging",
        description: "A strategic and independent thinker, always planning for the future."
    },
    "ISTP": {
        name: "Introverted, Sensing, Thinking, Perceiving",
        description: "A practical and observant explorer, good at troubleshooting."
    },
    "ISFP": {
        name: "Introverted, Sensing, Feeling, Perceiving",
        description: "A gentle and artistic individual, living in the present moment."
    },
    "INFP": {
        name: "Introverted, Intuitive, Feeling, Perceiving",
        description: "A creative and idealistic mediator, seeking harmony and personal values."
    },
    "INTP": {
        name: "Introverted, Intuitive, Thinking, Perceiving",
        description: "A logical and innovative thinker, driven by curiosity and analysis."
    },
    "ESTP": {
        name: "Extraverted, Sensing, Thinking, Perceiving",
        description: "An energetic and spontaneous doer, thriving in immediate action."
    },
    "ESFP": {
        name: "Extraverted, Sensing, Feeling, Perceiving",
        description: "A lively and entertaining performer, enjoying life and social interactions."
    },
    "ENFP": {
        name: "Extraverted, Intuitive, Feeling, Perceiving",
        description: "An enthusiastic and creative campaigner, inspiring others with optimism."
    },
    "ENTP": {
        name: "Extraverted, Intuitive, Thinking, Perceiving",
        description: "A quick-witted and inventive debater, challenging ideas and conventions."
    },
    "ESTJ": {
        name: "Extraverted, Sensing, Thinking, Judging",
        description: "An efficient and organized executive, leading with clear goals."
    },
    "ESFJ": {
        name: "Extraverted, Sensing, Feeling, Judging",
        description: "A warm and social caregiver, valuing community and cooperation."
    },
    "ENFJ": {
        name: "Extraverted, Intuitive, Feeling, Judging",
        description: "A charismatic and inspiring leader, advocating for others' growth."
    },
    "ENTJ": {
        name: "Extraverted, Intuitive, Thinking, Judging",
        description: "A decisive and strategic commander, born to lead and achieve."
    }
};

// Global object to store user's answers
let userAnswers = {};

function renderMbtiQuestions() {
    const questionContainer = document.getElementById('mbti-question-container');
    if (!questionContainer) return;

    questionContainer.innerHTML = ''; // Clear previous questions

    mbtiQuestions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'mbti-question';
        questionDiv.innerHTML = `<p>${q.id}. ${q.question}</p>`;

        q.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${q.id}`;
            input.value = option.value;
            input.dataset.type = q.type; // Store dichotomy type

            input.addEventListener('change', (event) => {
                userAnswers[q.id] = event.target.value;
                checkAllQuestionsAnswered();
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(option.text));
            questionDiv.appendChild(label);
        });
        questionContainer.appendChild(questionDiv);
    });
}

function checkAllQuestionsAnswered() {
    const totalQuestions = mbtiQuestions.length;
    const answeredQuestions = Object.keys(userAnswers).length;
    const resultBtn = document.getElementById('mbti-result-btn');

    if (answeredQuestions === totalQuestions) {
        resultBtn.style.display = 'block';
    } else {
        resultBtn.style.display = 'none';
    }
}

function calculateMbtiResult() {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    for (const qId in userAnswers) {
        const answerValue = userAnswers[qId];
        scores[answerValue]++;
    }

    let mbtiResult = "";
    mbtiResult += (scores.E >= scores.I) ? "E" : "I";
    mbtiResult += (scores.S >= scores.N) ? "S" : "N";
    mbtiResult += (scores.T >= scores.F) ? "T" : "F";
    mbtiResult += (scores.J >= scores.P) ? "J" : "P";

    return mbtiResult;
}

function displayMbtiResult() {
    const resultContainer = document.getElementById('mbti-result-container');
    const mbtiType = calculateMbtiResult();
    const typeInfo = mbtiTypes[mbtiType];

    if (resultContainer && typeInfo) {
        resultContainer.innerHTML = `
            <h3>You are a <span style="color: var(--primary-color);">${mbtiType} (${typeInfo.name})</span>!</h3>
            <p>${typeInfo.description}</p>
        `;
    } else if (resultContainer) {
        resultContainer.innerHTML = `<h3>MBTI Result Not Found.</h3>`;
    }
}

// Event listener for the result button
document.addEventListener('DOMContentLoaded', () => {
    const resultBtn = document.getElementById('mbti-result-btn');
    if (resultBtn) {
        resultBtn.addEventListener('click', displayMbtiResult);
    }
    renderMbtiQuestions();
});
