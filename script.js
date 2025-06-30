document.addEventListener('DOMContentLoaded', () => {

    // --- CARD DATA (Optimized for Storytelling) ---
    const tarotDeck = [
        { name: "The Fool", meaning: "a journey of new beginnings, innocence, and a spontaneous leap of faith", meaning_hi: "नई शुरुआत और सहजता का।" },
        { name: "The Magician", meaning: "a moment where you have all the tools, resources, and power to manifest your desires", meaning_hi: "इच्छा-शक्ति और क्षमता का।" },
        { name: "The High Priestess", meaning: "a call to trust your intuition and look beyond the obvious, for secrets are waiting to be unveiled", meaning_hi: "अंतर्ज्ञान और अवचेतन ज्ञान का।" },
        { name: "The Empress", meaning: "a period of lush creativity, abundance, and nurturing the seeds of your ideas", meaning_hi: "रचना, प्रचुरता और प्रकृति का।" },
        { name: "The Emperor", meaning: "a need for structure, discipline, and solid foundations to build your ambitions upon", meaning_hi: "अधिकार, संरचना और नियंत्रण का।" },
        { name: "The Hierophant", meaning: "a path of tradition, seeking spiritual guidance, and finding comfort in established beliefs", meaning_hi: "परंपरा और आध्यात्मिक ज्ञान का।" },
        { name: "The Lovers", meaning: "a significant choice about your core values and a deep, harmonious connection", meaning_hi: "प्रेम, सद्भाव और महत्वपूर्ण विकल्पों का।" },
        { name: "The Chariot", meaning: "a surge of determination and willpower, driving you forward to victory against all odds", meaning_hi: "इच्छाशक्ति और दृढ़ संकल्प का।" },
        { name: "Strength", meaning: "a challenge that must be met not with force, but with courage, compassion, and inner resilience", meaning_hi: "आंतरिक शक्ति और साहस का।" },
        { name: "The Hermit", meaning: "a time for soul-searching, pulling away from the noise of the world to find your own inner light", meaning_hi: "आत्मनिरीक्षण और आंतरिक मार्गदर्शन का।" },
        { name: "Wheel of Fortune", meaning: "a powerful turn of fate, where destiny intervenes and a new cycle begins", meaning_hi: "भाग्य, कर्म और जीवन-चक्र का।" },
        { name: "Justice", meaning: "a moment of clarity where truth is revealed and you must face the consequences of your actions", meaning_hi: "न्याय, सत्य और कर्म-फल का।" },
        { name: "The Hanged Man", meaning: "a necessary pause, a time to surrender control and see the world from a completely new perspective", meaning_hi: "समर्पण और नए दृष्टिकोण का।" },
        { name: "Death", meaning: "a profound and necessary ending, clearing away the old to make way for a powerful transformation", meaning_hi: "अंत, परिवर्तन और रूपांतरण का।" },
        { name: "Temperance", meaning: "a call for balance, patience, and mixing different parts of your life to create a harmonious whole", meaning_hi: "संतुलन, धैर्य और संयम का।" },
        { name: "The Devil", meaning: "a confrontation with your own limitations, attachments, and the chains you've placed on yourself", meaning_hi: "बंधन, व्यसन और भौतिकवाद का।" },
        { name: "The Tower", meaning: "a sudden, dramatic upheaval that shatters illusions and forces a foundational change", meaning_hi: "अचानक उथल-पुथल और रहस्योद्घाटन का।" },
        { name: "The Star", meaning: "a period of peace, hope, and spiritual renewal after a time of darkness, guiding you forward", meaning_hi: "आशा, विश्वास और प्रेरणा का।" },
        { name: "The Moon", meaning: "a journey through the subconscious, where intuition is your only guide through fear and illusion", meaning_hi: "भ्रम, भय और अंतर्ज्ञान का।" },
        { name: "The Sun", meaning: "a time of pure joy, vitality, and radiant success, where everything is clear and positive", meaning_hi: "सकारात्मकता, सफलता और जीवन शक्ति का।" },
        { name: "Judgement", meaning: "a moment of reckoning and rebirth, an inner calling to rise to a new level of consciousness", meaning_hi: "पुनर्जन्म और आत्म-निर्णय का।" },
        { name: "The World", meaning: "the successful completion of a long journey, bringing a sense of wholeness and accomplishment", meaning_hi: "पूर्णता, उपलब्धि और सफलता का।" },
    ];

    // --- DOM Elements ---
    const loginView = document.getElementById('login-view');
    const appWrapper = document.getElementById('app-wrapper');
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const loginError = document.getElementById('login-error');
    
    const askButton = document.getElementById('ask-button');
    const resetButton = document.getElementById('reset-button');
    const initialView = document.getElementById('initial-view');
    const resultView = document.getElementById('result-view');
    const selectedCardsContainer = document.getElementById('selected-cards-container');
    const predictionContainer = document.getElementById('prediction-container');
    const hindiSummaryContainer = document.getElementById('hindi-summary-container');
    const userQuestionInput = document.getElementById('user-question');
    const questionDisplay = document.getElementById('question-display');
    const readingStatus = document.getElementById('reading-status');

    // --- LOGIN LOGIC ---
    const TEN_MINUTES = 10 * 60 * 1000;

    function checkLoginState() {
        const loginTimestamp = localStorage.getItem('loginTimestamp');
        if (loginTimestamp && (new Date().getTime() - loginTimestamp < TEN_MINUTES)) {
            showApp();
        } else {
            showLogin();
        }
    }

    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'swaraj' && password === 'ptc@123') {
            localStorage.setItem('loginTimestamp', new Date().getTime());
            showApp();
        } else {
            loginError.classList.remove('hidden');
        }
    }

    function showLogin() {
        loginView.classList.remove('hidden');
        appWrapper.classList.add('hidden');
    }

    function showApp() {
        loginView.classList.add('hidden');
        appWrapper.classList.remove('hidden');
    }

    loginForm.addEventListener('submit', handleLogin);
    
    // --- TAROT APP LOGIC ---
    askButton.addEventListener('click', performReading);
    resetButton.addEventListener('click', resetApp);

    function performReading() {
        const question = userQuestionInput.value.trim();
        if (question.length < 10) {
            alert('Your question is too short. Please ask a clear, thoughtful question.');
            return;
        }

        askButton.disabled = true;

        initialView.classList.add('fading-out');
        setTimeout(() => {
            initialView.classList.add('hidden');
            resultView.classList.remove('hidden');
            questionDisplay.textContent = `Regarding your question: "${question}"`;
            drawAndFlipCards();
        }, 500);
    }

    function drawAndFlipCards() {
        const shuffledDeck = [...tarotDeck].sort(() => 0.5 - Math.random());
        const selectedCards = shuffledDeck.slice(0, 4);

        selectedCardsContainer.innerHTML = '';
        selectedCards.forEach((card, index) => {
            const cardEl = createCardElement(card);
            selectedCardsContainer.appendChild(cardEl);
            setTimeout(() => cardEl.style.animationDelay = `${index * 0.2}s`, 50);
        });
        
        const cardElements = document.querySelectorAll('.card-container');
        let totalAnimationTime = 0;
        cardElements.forEach((cardEl, index) => {
            const flipDelay = 1000 + index * 600;
            setTimeout(() => cardEl.classList.add('is-flipped'), flipDelay);
            totalAnimationTime = flipDelay + 800;
        });

        setTimeout(() => {
            readingStatus.textContent = "Your Story from the Cards";
            generateStoryPrediction(selectedCards);
            generateHindiSummary(selectedCards);
            
            predictionContainer.classList.remove('hidden');
            predictionContainer.classList.add('visible');
            hindiSummaryContainer.classList.remove('hidden');
            hindiSummaryContainer.classList.add('visible');
            resetButton.classList.remove('hidden');
            resetButton.classList.add('visible');
        }, totalAnimationTime);
    }
    
    function createCardElement(card) {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        cardContainer.innerHTML = `
            <div class="card-inner">
                <div class="card-back"></div>
                <div class="card-face">
                    <img src="https://picsum.photos/seed/${card.name.replace(/\s+/g, '')}/150/250" alt="${card.name}">
                    <h3>${card.name}</h3>
                </div>
            </div>`;
        return cardContainer;
    }

    // --- NEW STORYTELLING FUNCTION ---
    function generateStoryPrediction(cards) {
        const [c1, c2, c3, c4] = cards;
        const story = `
            <p>Your story begins with the energy of <strong>${c1.name}</strong>, which signifies ${c1.meaning}. This is the foundation of your current situation, the world you are standing in.</p>
            <p>However, a challenge or conflict soon appears in the form of <strong>${c2.name}</strong>. This card represents ${c2.meaning}, an obstacle you must understand and navigate. It tests the very foundation you started with.</p>
            <p>The path to overcoming this challenge is revealed by <strong>${c3.name}</strong>. This is your guidance, your turning point. It suggests ${c3.meaning}. By embracing this energy, you can find your way through the conflict.</p>
            <p>If you heed this advice, your journey leads to the potential outcome of <strong>${c4.name}</strong>. This final card indicates ${c4.meaning}, showing the resolution and the new reality you will create for yourself. This is where your story is headed.</p>
        `;
        predictionContainer.innerHTML = story;
    }

    function generateHindiSummary(cards) {
        let summaryHTML = '<h3>कार्डों का सारांश (Summary of Cards)</h3>';
        cards.forEach(card => {
            summaryHTML += `<p><strong>${card.name}:</strong> ${card.meaning_hi}</p>`;
        });
        hindiSummaryContainer.innerHTML = summaryHTML;
    }

    function resetApp() {
        resultView.classList.add('fading-out');
        
        setTimeout(() => {
            resultView.classList.add('hidden');
            resultView.classList.remove('fading-out');
            predictionContainer.classList.add('hidden');
            predictionContainer.classList.remove('visible');
            hindiSummaryContainer.classList.add('hidden');
            hindiSummaryContainer.classList.remove('visible');
            resetButton.classList.add('hidden');
            resetButton.classList.remove('visible');
            readingStatus.textContent = "The cards are being drawn for you...";

            initialView.classList.remove('hidden', 'fading-out');
            userQuestionInput.value = '';
            askButton.disabled = false;
        }, 500);
    }

    // --- INITIALIZE APP ---
    checkLoginState();
});
