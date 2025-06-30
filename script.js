document.addEventListener('DOMContentLoaded', () => {

    const tarotDeck = [
        { name: "The Fool", meaning: "of beginnings, innocence, and spontaneity. A new, unexpected journey is starting." },
        { name: "The Magician", meaning: "of manifestation, resourcefulness, and power. You have all the tools you need to succeed." },
        { name: "The High Priestess", meaning: "of intuition, sacred knowledge, and the subconscious mind. Trust your gut feelings." },
        { name: "The Empress", meaning: "of femininity, beauty, nature, and abundance. A time of creation and growth." },
        { name: "The Emperor", meaning: "of authority, structure, and control. You need order to achieve your goals." },
        { name: "The Hierophant", meaning: "of spiritual wisdom, tradition, and conformity. Follow established rules or seek guidance." },
        { name: "The Lovers", meaning: "of love, harmony, and significant choices. A decision about a relationship or your values is near." },
        { name: "The Chariot", meaning: "of control, willpower, and determination. Move forward with confidence." },
        { name: "Strength", meaning: "of inner strength, courage, and compassion. You can overcome any obstacle." },
        { name: "The Hermit", meaning: "of soul-searching, introspection, and inner guidance. It's time to reflect." },
        { name: "Wheel of Fortune", meaning: "of good luck, karma, and life cycles. A turning point is upon you." },
        { name: "Justice", meaning: "of fairness, truth, and cause and effect. The consequences of past actions are revealing themselves." },
        { name: "The Hanged Man", meaning: "of pause, surrender, and new perspectives. Suspend action to gain understanding." },
        { name: "Death", meaning: "of endings, change, and transformation. An old phase is ending, making way for something new." },
        { name: "Temperance", meaning: "of balance, moderation, and patience. You need to find a middle ground." },
        { name: "The Devil", meaning: "of attachment, addiction, and restriction. You are facing your inner demons." },
        { name: "The Tower", meaning: "of sudden change, upheaval, and revelation. An unexpected, dramatic shift is occurring." },
        { name: "The Star", meaning: "of hope, faith, and renewal. A time of peace and inspiration after turmoil." },
        { name: "The Moon", meaning: "of illusion, fear, and the subconscious. Things are not as they seem; trust your intuition." },
        { name: "The Sun", meaning: "of positivity, warmth, and success. A time of great joy and vitality." },
        { name: "Judgement", meaning: "of rebirth, inner calling, and absolution. You are called to make a significant decision." },
        { name: "The World", meaning: "of completion, integration, and accomplishment. A cycle is complete, bringing fulfillment." },
    ];

    const askButton = document.getElementById('ask-button');
    const resetButton = document.getElementById('reset-button');
    const initialView = document.getElementById('initial-view');
    const resultView = document.getElementById('result-view');
    const selectedCardsContainer = document.getElementById('selected-cards-container');
    const predictionContainer = document.getElementById('prediction-container');
    const userQuestionInput = document.getElementById('user-question');
    const questionDisplay = document.getElementById('question-display');
    const readingStatus = document.getElementById('reading-status');

    askButton.addEventListener('click', performReading);
    resetButton.addEventListener('click', resetApp);

    function performReading() {
        const question = userQuestionInput.value.trim();
        if (question === '') {
            alert('Please enter a question to receive your reading.');
            return;
        }

        askButton.disabled = true;

        // 1. Fade out the initial view
        initialView.classList.add('fading-out');
        setTimeout(() => {
            initialView.classList.add('hidden');
            resultView.classList.remove('hidden');
            questionDisplay.textContent = `Your question: "${question}"`;
            drawAndFlipCards();
        }, 500); // Match CSS transition time
    }

    function drawAndFlipCards() {
        const shuffledDeck = [...tarotDeck].sort(() => 0.5 - Math.random());
        const selectedCards = shuffledDeck.slice(0, 4);

        selectedCardsContainer.innerHTML = ''; // Clear previous cards

        // 2. Create and animate the cards drawing
        selectedCards.forEach((card, index) => {
            const cardEl = createCardElement(card);
            selectedCardsContainer.appendChild(cardEl);
            
            // Stagger the drawing animation
            setTimeout(() => {
                cardEl.style.animationDelay = `${index * 0.2}s`;
            }, 50);
        });
        
        // 3. Flip the cards sequentially after they've been drawn
        const cardElements = document.querySelectorAll('.card-container');
        let totalAnimationTime = 0;
        cardElements.forEach((cardEl, index) => {
            const flipDelay = 1000 + index * 600; // Start flipping after 1s, with 0.6s between flips
            setTimeout(() => {
                cardEl.classList.add('is-flipped');
            }, flipDelay);
            totalAnimationTime = flipDelay + 800; // 800ms is flip animation duration
        });

        // 4. Generate and show the prediction after the last card has flipped
        setTimeout(() => {
            readingStatus.textContent = "Your Interpretation";
            generatePrediction(selectedCards);
            predictionContainer.classList.remove('hidden');
            predictionContainer.classList.add('visible');
            resetButton.classList.remove('hidden');
            resetButton.classList.add('visible');
        }, totalAnimationTime);
    }
    
    function createCardElement(card) {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        
        const cardFace = document.createElement('div');
        cardFace.className = 'card-face';
        cardFace.innerHTML = `
            <img src="https://picsum.photos/seed/${card.name.replace(/\s+/g, '')}/150/250" alt="${card.name}">
            <h3>${card.name}</h3>
        `;
        
        cardInner.appendChild(cardBack);
        cardInner.appendChild(cardFace);
        cardContainer.appendChild(cardInner);
        
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

    function resetApp() {
        resultView.classList.add('fading-out');
        
        setTimeout(() => {
            // Hide result view and reset its state
            resultView.classList.add('hidden');
            resultView.classList.remove('fading-out');
            predictionContainer.classList.add('hidden');
            predictionContainer.classList.remove('visible');
            resetButton.classList.add('hidden');
            resetButton.classList.remove('visible');
            readingStatus.textContent = "The cards are being drawn for you...";

            // Show initial view and reset its state
            initialView.classList.remove('hidden', 'fading-out');
            userQuestionInput.value = '';
            askButton.disabled = false;
        }, 500); // Match CSS transition time
    }
});