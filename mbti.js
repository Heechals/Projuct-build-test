// mbti.js

const mbtiQuestions = [
    {
        id: 1,
        question: "파티에서, 당신은 보통:",
        options: [
            { text: "새로운 사람들을 만나러 나선다.", value: "E" },
            { text: "아는 사람들과 어울린다.", value: "I" }
        ],
        type: "EI"
    },
    {
        id: 2,
        question: "새로운 프로젝트를 시작할 때, 당신은 보통:",
        options: [
            { text: "체계적인 계획을 세운다.", value: "S" },
            { text: "전반적인 그림을 먼저 그린다.", value: "N" }
        ],
        type: "SN"
    },
    {
        id: 3,
        question: "결정을 내릴 때, 당신은 주로:",
        options: [
            { text: "논리와 사실에 근거한다.", value: "T" },
            { text: "사람들에게 미칠 영향을 고려한다.", value: "F" }
        ],
        type: "TF"
    },
    {
        id: 4,
        question: "일상을 계획할 때, 당신은:",
        options: [
            { text: "미리 계획하고 체계적으로 따른다.", value: "J" },
            { text: "유연하게 상황에 따라 조절한다.", value: "P" }
        ],
        type: "JP"
    },
    {
        id: 5,
        question: "사람들과 어울릴 때, 당신은:",
        options: [
            { text: "많은 사람들과 폭넓게 교류한다.", value: "E" },
            { text: "소수의 깊이 있는 관계를 선호한다.", value: "I" }
        ],
        type: "EI"
    },
    {
        id: 6,
        question: "정보를 받아들일 때, 당신은:",
        options: [
            { text: "현재의 사실과 세부 사항에 집중한다.", value: "S" },
            { text: "가능성, 의미, 미래를 탐색한다.", value: "N" }
        ],
        type: "SN"
    },
    {
        id: 7,
        question: "갈등 상황에서, 당신은:",
        options: [
            { text: "객관적 분석을 통해 해결책을 찾는다.", value: "T" },
            { text: "관련된 사람들의 감정을 중요하게 생각한다.", value: "F" }
        ],
        type: "TF"
    },
    {
        id: 8,
        question: "여행을 계획할 때, 당신은:",
        options: [
            { text: "세부 일정을 짜고 계획대로 움직인다.", value: "J" },
            { text: "자유롭게 즉흥적으로 탐험한다.", value: "P" }
        ],
        type: "JP"
    },
    {
        id: 9,
        question: "에너지를 얻는 방식은:",
        options: [
            { text: "활동적인 외부 활동을 통해.", value: "E" },
            { text: "혼자만의 시간을 가지면서.", value: "I" }
        ],
        type: "EI"
    },
    {
        id: 10,
        question: "문제를 해결할 때, 당신은:",
        options: [
            { text: "실용적인 해결책을 찾는다.", value: "S" },
            { text: "창의적이고 새로운 아이디어를 모색한다.", value: "N" }
        ],
        type: "SN"
    }
];

const mbtiTypes = {
    "ISTJ": {
        name: "내향적, 감각적, 사고적, 판단적",
        description: "청렴결백한 논리주의자: 청렴결백하며 현실적인 사실을 중요하게 생각하는 책임감 강한 사람입니다."
    },
    "ISFJ": {
        name: "내향적, 감각적, 감정적, 판단적",
        description: "용감한 수호자: 성실하고 온화하며 협력적인 사람으로 타인의 성장을 돕는 데 탁월한 능력이 있습니다."
    },
    "INFJ": {
        name: "내향적, 직관적, 감정적, 판단적",
        description: "선의의 옹호자: 조용하고 신비로우며 영감을 주는 이상주의자로 공동체의 이익을 중요하게 생각합니다."
    },
    "INTJ": {
        name: "내향적, 직관적, 사고적, 판단적",
        description: "용의주도한 전략가: 상상력이 풍부하고 강한 의지를 지닌 전략가로 모든 일에 계획적입니다."
    },
    "ISTP": {
        name: "내향적, 감각적, 사고적, 인식적",
        description: "만능 재주꾼: 호기심이 많고 실용적이며 뛰어난 문제 해결 능력을 가진 탐험가입니다."
    },
    "ISFP": {
        name: "내향적, 감각적, 감정적, 인식적",
        description: "호기심 많은 예술가: 온화하고 유연하며 호기심이 많고 예술적인 성향을 지닌 사람입니다."
    },
    "INFP": {
        name: "내향적, 직관적, 감정적, 인식적",
        description: "열정적인 중재자: 상냥하고 이타적이며 마음이 따뜻한 낭만주의자입니다."
    },
    "INTP": {
        name: "내향적, 직관적, 사고적, 인식적",
        description: "논리적인 사색가: 지적 호기심이 많고 분석적이며 새로운 아이디어를 끊임없이 탐구합니다."
    },
    "ESTP": {
        name: "외향적, 감각적, 사고적, 인식적",
        description: "모험을 즐기는 사업가: 에너지가 넘치고 즉흥적이며 현실적인 문제를 해결하는 데 능숙합니다."
    },
    "ESFP": {
        name: "외향적, 감각적, 감정적, 인식적",
        description: "자유로운 영혼의 연예인: 즉흥적이고 활발하며 주변 사람들에게 즐거움을 주는 것을 좋아합니다."
    },
    "ENFP": {
        name: "외향적, 직관적, 감정적, 인식적",
        description: "재기발랄한 활동가: 열정적이고 창의적이며 사회성이 풍부한 자유로운 영혼의 소유자입니다."
    },
    "ENTP": {
        name: "외향적, 직관적, 사고적, 인식적",
        description: "논쟁을 즐기는 변론가: 똑똑하고 호기심이 많으며 도전을 즐기는 독창적인 사람입니다."
    },
    "ESTJ": {
        name: "외향적, 감각적, 사고적, 판단적",
        description: "엄격한 관리자: 체계적이고 현실적이며 리더십이 강한 관리자 유형입니다."
    },
    "ESFJ": {
        name: "외향적, 감각적, 감정적, 판단적",
        description: "사교적인 외교관: 사교성이 풍부하고 타인에게 관심이 많으며 협동심이 강합니다."
    },
    "ENFJ": {
        name: "외향적, 직관적, 감정적, 판단적",
        description: "정의로운 사회 운동가: 카리스마 넘치고 영감을 주며 이타적인 리더입니다."
    },
    "ENTJ": {
        name: "외향적, 직관적, 사고적, 판단적",
        description: "대담한 통솔자: 솔직하고 결단력이 있으며 타고난 리더십을 가진 전략가입니다."
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
            <h3>당신은 <span style="color: var(--primary-color);">${mbtiType} (${typeInfo.name})</span> 입니다!</h3>
            <p>${typeInfo.description}</p>
        `;
    } else if (resultContainer) {
        resultContainer.innerHTML = `<h3>MBTI 결과를 찾을 수 없습니다.</h3>`;
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
