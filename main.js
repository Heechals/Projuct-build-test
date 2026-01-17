// Future JavaScript for interactivity can be added here.
// For example, smooth scrolling for anchor links.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hangeul Character Custom Element
class HangeulCharacter extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Get attributes
        const char = this.getAttribute('char');
        const romanization = this.getAttribute('romanization');
        const description = this.getAttribute('description');

        // Create elements
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'hangeul-card');

        const character = document.createElement('div');
        character.setAttribute('class', 'char');
        character.textContent = char;

        const roman = document.createElement('div');
        roman.setAttribute('class', 'romanization');
        roman.textContent = `[${romanization}]`;

        const desc = document.createElement('p');
        desc.setAttribute('class', 'description');
        desc.textContent = description;

        const audioButton = document.createElement('button');
        audioButton.setAttribute('class', 'audio-btn');
        audioButton.innerHTML = '&#x1F50A;'; // Speaker icon

        // Add a simple "playing audio" simulation
        audioButton.addEventListener('click', () => {
            audioButton.classList.add('playing');
            setTimeout(() => {
                audioButton.classList.remove('playing');
            }, 500);
        });
        
        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        style.textContent = `
            .hangeul-card {
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 10px;
                padding: 1.5rem;
                text-align: center;
                box-shadow: 0 4px 8px rgba(0,0,0,0.05);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
            }
            .hangeul-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            }
            .char {
                font-size: 4rem;
                font-weight: bold;
                color: var(--primary-color, #0A2463);
                margin-bottom: 0.5rem;
            }
            .romanization {
                font-size: 1.2rem;
                color: #555;
                margin-bottom: 1rem;
            }
            .description {
                font-size: 1rem;
                color: #333;
                flex-grow: 1;
            }
            .audio-btn {
                background: var(--primary-color, #0A2463);
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 1.5rem;
                cursor: pointer;
                margin: 1rem auto 0;
                transition: background-color 0.3s, transform 0.2s;
            }
            .audio-btn:hover {
                background-color: var(--accent-color, #D83F31);
            }
            .audio-btn.playing {
                transform: scale(1.1);
                background-color: #ffc107;
            }
        `;

        // Append elements to the shadow root
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(character);
        wrapper.appendChild(roman);
        wrapper.appendChild(desc);
        wrapper.appendChild(audioButton);
    }
}

// Define the new element
customElements.define('hangeul-character', HangeulCharacter);