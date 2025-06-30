document.addEventListener('DOMContentLoaded', () => {

    const tarotDeck = [
        { name: "The Fool", meaning: "of beginnings and spontaneity.", meaning_hi: "नई शुरुआत और सहजता का।" },
        { name: "The Magician", meaning: "of manifestation and power.", meaning_hi: "इच्छा-शक्ति और क्षमता का।" },
        { name: "The High Priestess", meaning: "of intuition and subconscious knowledge.", meaning_hi: "अंतर्ज्ञान और अवचेतन ज्ञान का।" },
        { name: "The Empress", meaning: "of creation, abundance, and nature.", meaning_hi: "रचना, प्रचुरता और प्रकृति का।" },
        { name: "The Emperor", meaning: "of authority, structure, and control.", meaning_hi: "अधिकार, संरचना और नियंत्रण का।" },
        { name: "The Hierophant", meaning: "of tradition and spiritual wisdom.", meaning_hi: "परंपरा और आध्यात्मिक ज्ञान का।" },
        { name: "The Lovers", meaning: "of harmony, relationships, and choices.", meaning_hi: "प्रेम, सद्भाव और महत्वपूर्ण विकल्पों का।" },
        { name: "The Chariot", meaning: "of willpower and determination.", meaning_hi: "इच्छाशक्ति और दृढ़ संकल्प का।" },
        { name: "Strength", meaning: "of inner strength and courage.", meaning_hi: "आंतरिक शक्ति और साहस का।" },
        { name: "The Hermit", meaning: "of introspection and inner guidance.", meaning_hi: "आत्मनिरीक्षण और आंतरिक मार्गदर्शन का।" },
        { name: "Wheel of Fortune", meaning: "of life cycles and turning points.", meaning_hi: "भाग्य, कर्म और जीवन-चक्र का।" },
        { name: "Justice", meaning: "of fairness, truth, and consequences.", meaning_hi: "न्याय, सत्य और कर्म-फल का।" },
        { name: "The Hanged Man", meaning: "of surrender and new perspectives.", meaning_hi: "समर्पण और नए दृष्टिकोण का।" },
        { name: "Death", meaning: "of endings and transformation.", meaning_hi: "अंत, परिवर्तन और रूपांतरण का।" },
        { name: "Temperance", meaning: "of balance, patience, and moderation.", meaning_hi: "संतुलन, धैर्य और संयम का।" },
        { name: "The Devil", meaning: "of attachment and restriction.", meaning_hi: "बंधन, व्यसन और भौतिकवाद का।" },
        { name: "The Tower", meaning: "of sudden upheaval and revelation.", meaning_hi: "अचानक उथल-पुथल और रहस्योद्घाटन का।" },
        { name: "The Star", meaning: "of hope, renewal, and inspiration.", meaning_hi: "आशा, विश्वास और प्रेरणा का।" },
        { name: "The Moon", meaning: "of illusion, fear, and intuition.", meaning_hi: "भ्रम, भय और अंतर्ज्ञान का।" },
        { name: "The Sun", meaning: "of positivity, success, and vitality.", meaning_hi: "सकारात्मकता, सफलता और जीवन शक्ति का।" },
        { name: "Judgement", meaning: "of rebirth and inner calling.", meaning_hi: "पुनर्जन्म और आत्म-निर्णय का।" },
        { name: "The World", meaning: "of completion and accomplishment.", meaning_hi: "पूर्णता, उपलब्धि और सफलता का।" },
    ];

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

    askButton.addEventListener('click', performReading);
    resetButton.addEventListener('click', resetApp);

    function performReading() {
        const question = userQuestionInput.value.trim();
        
        // --- NEW VALIDATION LOGIC ---
        if (question.length < 10) {
            alert('Your question is too short. Please ask a clear, thoughtful question.');
            return;
        }
        if (!question.endsWith('?')) {
            alert("Please end your question with a question mark '?' to help the cards understand.");
            return;
        }

        askButton.disabled = true;

        initialView.classList.add('fading-out');
        setTimeout(() => {
            initialView.classList.add('hidden');
            resultView.classList.remove('hidden');
            questionDisplay.textContent = `Your question: "${question}"`;
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
            readingStatus.textContent = "Your Interpretation";
            generatePrediction(selectedCards);
            generateHindiSummary(selectedCards); // Call the new function
            
            // Show all result containers
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

    function generatePrediction(cards) {
        predictionContainer.innerHTML = `
            <p><strong>The Heart of the Matter (Past):</strong> The situation is rooted in the energy of <strong>${cards[0].name}</strong>, a card ${cards[0].meaning}</p>
            <p><strong>The Present Challenge:</strong> You are currently influenced by <strong>${cards[1].name}</strong>, which speaks ${cards[1].meaning}</p>
            <p><strong>Guidance for the Future:</strong> The path forward is illuminated by <strong>${cards[2].name}</strong>. The advice is to embrace the energy ${cards[2].meaning}</p>
            <p><strong>The Potential Outcome:</strong> If you heed this guidance, the outcome is represented by <strong>${cards[3].name}</strong>, indicating a resolution ${cards[3].meaning}</p>
        `;
    }

    // --- NEW HINDI SUMMARY FUNCTION ---
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
            hindiSummaryContainer.classList.add('hidden'); // Reset Hindi summary
            hindiSummaryContainer.classList.remove('visible');
            resetButton.classList.add('hidden');
            resetButton.classList.remove('visible');
            readingStatus.textContent = "The cards are being drawn for you...";

            initialView.classList.remove('hidden', 'fading-out');
            userQuestionInput.value = '';
            askButton.disabled = false;
        }, 500);
    }
});