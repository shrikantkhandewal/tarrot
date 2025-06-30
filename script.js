document.addEventListener('DOMContentLoaded', () => {

    // --- FULL 78-CARD TAROT DECK ---
    const tarotDeck = [
        // Major Arcana
        { name: "The Fool", image: "major_00.jpg", meaning: "a journey of new beginnings, innocence, and a spontaneous leap of faith", meaning_hi: "नई शुरुआत, मासूमियत और सहज विश्वास की छलांग का प्रतीक है" },
        { name: "The Magician", image: "major_01.jpg", meaning: "a moment where you have the power to manifest your desires", meaning_hi: "अपनी इच्छाओं को प्रकट करने के लिए शक्ति और संसाधन होने का प्रतीक है" },
        { name: "The High Priestess", image: "major_02.jpg", meaning: "a call to trust your intuition and look beyond the obvious", meaning_hi: "अंतर्ज्ञान पर भरोसा करने और छिपे हुए रहस्यों को देखने का प्रतीक है" },
        { name: "The Empress", image: "major_03.jpg", meaning: "a period of lush creativity, abundance, and nurturing", meaning_hi: "रचनात्मकता, प्रचुरता और पोषण के एक दौर का प्रतीक है" },
        { name: "The Emperor", image: "major_04.jpg", meaning: "a need for structure, discipline, and solid foundations", meaning_hi: "संरचना, अनुशासन और एक ठोस नींव की आवश्यकता का प्रतीक है" },
        { name: "The Hierophant", image: "major_05.jpg", meaning: "a path of tradition and seeking spiritual guidance", meaning_hi: "परंपरा और आध्यात्मिक मार्गदर्शन प्राप्त करने के मार्ग का प्रतीक है" },
        { name: "The Lovers", image: "major_06.jpg", meaning: "a significant choice about your core values and a deep connection", meaning_hi: "मूल्यों और गहरे संबंधों से जुड़े एक महत्वपूर्ण विकल्प का प्रतीक है" },
        { name: "The Chariot", image: "major_07.jpg", meaning: "a surge of determination and willpower driving you to victory", meaning_hi: "जीत की ओर ले जाने वाली दृढ़ इच्छाशक्ति और संकल्प का प्रतीक है" },
        { name: "Strength", image: "major_08.jpg", meaning: "a challenge met with courage, compassion, and inner resilience", meaning_hi: "साहस, करुणा और आंतरिक शक्ति से चुनौती का सामना करने का प्रतीक है" },
        { name: "The Hermit", image: "major_09.jpg", meaning: "a time for soul-searching and finding your own inner light", meaning_hi: "आत्मनिरीक्षण करने और अपनी आंतरिक रोशनी खोजने के समय का प्रतीक है" },
        { name: "Wheel of Fortune", image: "major_10.jpg", meaning: "a powerful turn of fate, where a new cycle begins", meaning_hi: "भाग्य के एक शक्तिशाली मोड़ और एक नए चक्र की शुरुआत का प्रतीक है" },
        { name: "Justice", image: "major_11.jpg", meaning: "a moment of clarity where truth is revealed and consequences are faced", meaning_hi: "स्पष्टता, सत्य के रहस्योद्घाटन और कर्मों का फल मिलने का प्रतीक है" },
        { name: "The Hanged Man", image: "major_12.jpg", meaning: "a necessary pause to surrender control and gain a new perspective", meaning_hi: "एक नया दृष्टिकोण पाने के लिए नियंत्रण छोड़ने और रुकने का प्रतीक है" },
        { name: "Death", image: "major_13.jpg", meaning: "a profound and necessary ending, clearing the way for transformation", meaning_hi: "एक गहरे अंत और एक शक्तिशाली परिवर्तन के लिए रास्ता साफ होने का प्रतीक है" },
        { name: "Temperance", image: "major_14.jpg", meaning: "a call for balance, patience, and creating a harmonious whole", meaning_hi: "संतुलन, धैर्य और सामंजस्यपूर्ण मिश्रण बनाने की आवश्यकता का प्रतीक है" },
        { name: "The Devil", image: "major_15.jpg", meaning: "a confrontation with your own limitations and attachments", meaning_hi: "अपनी सीमाओं और बंधनों का सामना करने का प्रतीक है" },
        { name: "The Tower", image: "major_16.jpg", meaning: "a sudden upheaval that shatters illusions and forces change", meaning_hi: "अचानक उथल-पुथल जो भ्रम को तोड़ती है और बदलाव के लिए मजबूर करती है" },
        { name: "The Star", image: "major_17.jpg", meaning: "a period of peace, hope, and spiritual renewal after darkness", meaning_hi: "अंधकार के बाद शांति, आशा और आध्यात्मिक नवीनीकरण के दौर का प्रतीक है" },
        { name: "The Moon", image: "major_18.jpg", meaning: "a journey through the subconscious, using intuition to navigate illusion", meaning_hi: "भ्रम से निपटने के लिए अंतर्ज्ञान का उपयोग करके अवचेतन की यात्रा का प्रतीक है" },
        { name: "The Sun", image: "major_19.jpg", meaning: "a time of pure joy, vitality, and radiant success", meaning_hi: "परम आनंद, जीवन शक्ति और उज्ज्वल सफलता के समय का प्रतीक है" },
        { name: "Judgement", image: "major_20.jpg", meaning: "a moment of reckoning, rebirth, and a calling to a new level", meaning_hi: "पुनर्जन्म और चेतना के एक नए स्तर पर पहुंचने के आह्वान का प्रतीक है" },
        { name: "The World", image: "major_21.jpg", meaning: "the successful completion of a long journey and accomplishment", meaning_hi: "एक लंबी यात्रा के सफल समापन और उपलब्धि का प्रतीक है" },

        // Suit of Wands
        { name: "Ace of Wands", image: "wands_01.jpg", meaning: "a spark of new potential, inspiration, and creative energy", meaning_hi: "नई क्षमता, प्रेरणा और रचनात्मक ऊर्जा की एक चिंगारी का प्रतीक है" },
        { name: "Two of Wands", image: "wands_02.jpg", meaning: "planning for the future, making decisions, and discovering new worlds", meaning_hi: "भविष्य की योजना, निर्णय लेने और नई दुनिया की खोज का प्रतीक है" },
        { name: "Three of Wands", image: "wands_03.jpg", meaning: "expansion, foresight, and awaiting the results of your efforts", meaning_hi: "विस्तार, दूरदर्शिता और आपके प्रयासों के परिणामों की प्रतीक्षा का प्रतीक है" },
        { name: "Four of Wands", image: "wands_04.jpg", meaning: "celebration, harmony, and the joy of a stable home or community", meaning_hi: "उत्सव, सद्भाव और एक स्थिर घर या समुदाय के आनंद का प्रतीक है" },
        { name: "Five of Wands", image: "wands_05.jpg", meaning: "competition, conflict, and minor disagreements or struggles", meaning_hi: "प्रतिस्पर्धा, संघर्ष और छोटी-मोटी असहमति या संघर्ष का प्रतीक है" },
        { name: "Six of Wands", image: "wands_06.jpg", meaning: "public recognition, victory, and success after a challenge", meaning_hi: "सार्वजनिक मान्यता, विजय और एक चुनौती के बाद सफलता का प्रतीक है" },
        { name: "Seven of Wands", image: "wands_07.jpg", meaning: "defending your position, perseverance, and holding your ground", meaning_hi: "अपनी स्थिति का बचाव, दृढ़ता और अपनी बात पर अड़े रहने का प्रतीक है" },
        { name: "Eight of Wands", image: "wands_08.jpg", meaning: "rapid action, movement, and quick communication or news", meaning_hi: "तेजी से कार्रवाई, गति और त्वरित संचार या समाचार का प्रतीक है" },
        { name: "Nine of Wands", image: "wands_09.jpg", meaning: "resilience, courage, and the final push before completion", meaning_hi: "लचीलापन, साहस और पूरा होने से पहले अंतिम प्रयास का प्रतीक है" },
        { name: "Ten of Wands", image: "wands_10.jpg", meaning: "being overburdened, taking on too much responsibility", meaning_hi: "अत्यधिक बोझ और बहुत अधिक जिम्मेदारी लेने का प्रतीक है" },
        { name: "Page of Wands", image: "wands_11.jpg", meaning: "exploring new ideas, enthusiasm, and a free spirit", meaning_hi: "नए विचारों की खोज, उत्साह और एक मुक्त आत्मा का प्रतीक है" },
        { name: "Knight of Wands", image: "wands_12.jpg", meaning: "energy, passion, and impulsively pursuing a goal", meaning_hi: "ऊर्जा, जुनून और आवेगी रूप से एक लक्ष्य का पीछा करने का प्रतीक है" },
        { name: "Queen of Wands", image: "wands_13.jpg", meaning: "confidence, courage, and a vibrant, determined personality", meaning_hi: "आत्मविश्वास, साहस और एक जीवंत, दृढ़ व्यक्तित्व का प्रतीक है" },
        { name: "King of Wands", image: "wands_14.jpg", meaning: "a natural leader, visionary, and taking control of your life", meaning_hi: "एक स्वाभाविक नेता, दूरदर्शी और अपने जीवन पर नियंत्रण रखने का प्रतीक है" },

        // Suit of Cups
        { name: "Ace of Cups", image: "cups_01.jpg", meaning: "new love, compassion, and overflowing emotions or creativity", meaning_hi: "नए प्यार, करुणा और उमड़ती भावनाओं या रचनात्मकता का प्रतीक है" },
        { name: "Two of Cups", image: "cups_02.jpg", meaning: "a deep connection, partnership, and mutual attraction", meaning_hi: "एक गहरे संबंध, साझेदारी और आपसी आकर्षण का प्रतीक है" },
        { name: "Three of Cups", image: "cups_03.jpg", meaning: "celebration with friends, community, and joyful gatherings", meaning_hi: "दोस्तों के साथ उत्सव, समुदाय और आनंदमय समारोह का प्रतीक है" },
        { name: "Four of Cups", image: "cups_04.jpg", meaning: "apathy, contemplation, and being unaware of new opportunities", meaning_hi: "उदासीनता, चिंतन और नए अवसरों से अनभिज्ञ होने का प्रतीक है" },
        { name: "Five of Cups", image: "cups_05.jpg", meaning: "loss, regret, and focusing on disappointment rather than what remains", meaning_hi: "नुकसान, पछतावा और जो बचा है उसके बजाय निराशा पर ध्यान केंद्रित करने का प्रतीक है" },
        { name: "Six of Cups", image: "cups_06.jpg", meaning: "nostalgia, childhood memories, and innocent joy", meaning_hi: "पुरानी यादें, बचपन की यादें और मासूम खुशी का प्रतीक है" },
        { name: "Seven of Cups", image: "cups_07.jpg", meaning: "choices, illusions, and needing to distinguish fantasy from reality", meaning_hi: "विकल्प, भ्रम और कल्पना को वास्तविकता से अलग करने की आवश्यकता का प्रतीक है" },
        { name: "Eight of Cups", image: "cups_08.jpg", meaning: "walking away, disappointment, and searching for something more fulfilling", meaning_hi: "दूर चले जाना, निराशा और कुछ और अधिक संतोषजनक की तलाश का प्रतीक है" },
        { name: "Nine of Cups", image: "cups_09.jpg", meaning: "wishes fulfilled, contentment, and satisfaction", meaning_hi: "इच्छाओं की पूर्ति, संतोष और संतुष्टि का प्रतीक है" },
        { name: "Ten of Cups", image: "cups_10.jpg", meaning: "lasting happiness, family harmony, and emotional fulfillment", meaning_hi: "स्थायी खुशी, पारिवारिक सद्भाव और भावनात्मक पूर्ति का प्रतीक है" },
        { name: "Page of Cups", image: "cups_11.jpg", meaning: "a creative opportunity, curiosity, and listening to your heart", meaning_hi: "एक रचनात्मक अवसर, जिज्ञासा और अपने दिल की सुनने का प्रतीक है" },
        { name: "Knight of Cups", image: "cups_12.jpg", meaning: "romance, charm, and following an artistic or emotional impulse", meaning_hi: "रोमांस, आकर्षण और एक कलात्मक या भावनात्मक आवेग का पालन करने का प्रतीक है" },
        { name: "Queen of Cups", image: "cups_13.jpg", meaning: "compassion, intuition, and emotional security", meaning_hi: "करुणा, अंतर्ज्ञान और भावनात्मक सुरक्षा का प्रतीक है" },
        { name: "King of Cups", image: "cups_14.jpg", meaning: "emotional balance, compassion, and diplomatic control", meaning_hi: "भावनात्मक संतुलन, करुणा और राजनयिक नियंत्रण का प्रतीक है" },

        // Suit of Swords
        { name: "Ace of Swords", image: "swords_01.jpg", meaning: "a breakthrough, a new idea, and mental clarity", meaning_hi: "एक सफलता, एक नया विचार और मानसिक स्पष्टता का प्रतीक है" },
        { name: "Two of Swords", image: "swords_02.jpg", meaning: "a difficult decision, a stalemate, and avoiding the truth", meaning_hi: "एक कठिन निर्णय, एक गतिरोध और सच्चाई से बचने का प्रतीक है" },
        { name: "Three of Swords", image: "swords_03.jpg", meaning: "heartbreak, painful separation, and sorrowful truth", meaning_hi: "दिल टूटना, दर्दनाक अलगाव और दुखद सच्चाई का प्रतीक है" },
        { name: "Four of Swords", image: "swords_04.jpg", meaning: "rest, contemplation, and recovery after a challenge", meaning_hi: "एक चुनौती के बाद आराम, चिंतन और स्वास्थ्य लाभ का प्रतीक है" },
        { name: "Five of Swords", image: "swords_05.jpg", meaning: "a hollow victory, conflict, and winning at all costs", meaning_hi: "एक खोखली जीत, संघर्ष और हर कीमत पर जीतने का प्रतीक है" },
        { name: "Six of Swords", image: "swords_06.jpg", meaning: "a transition, moving on to calmer waters, and leaving trouble behind", meaning_hi: "एक संक्रमण, शांत पानी की ओर बढ़ना और परेशानी को पीछे छोड़ने का प्रतीक है" },
        { name: "Seven of Swords", image: "swords_07.jpg", meaning: "deception, strategy, and trying to get away with something", meaning_hi: "धोखा, रणनीति और किसी चीज से बच निकलने की कोशिश का प्रतीक है" },
        { name: "Eight of Swords", image: "swords_08.jpg", meaning: "feeling trapped, self-imposed restrictions, and powerlessness", meaning_hi: "फंसा हुआ महसूस करना, आत्म-लगाए गए प्रतिबंध और शक्तिहीनता का प्रतीक है" },
        { name: "Nine of Swords", image: "swords_09.jpg", meaning: "anxiety, worry, and fear keeping you awake at night", meaning_hi: "चिंता, फिक्र और डर जो आपको रात में जगाए रखता है" },
        { name: "Ten of Swords", image: "swords_10.jpg", meaning: "a painful ending, betrayal, and hitting rock bottom", meaning_hi: "एक दर्दनाक अंत, विश्वासघात और सबसे निचले स्तर पर पहुंचने का प्रतीक है" },
        { name: "Page of Swords", image: "swords_11.jpg", meaning: "curiosity, new ideas, and a thirst for knowledge", meaning_hi: "जिज्ञासा, नए विचार और ज्ञान की प्यास का प्रतीक है" },
        { name: "Knight of Swords", image: "swords_12.jpg", meaning: "ambition, fast-thinking, and rushing into action", meaning_hi: "महत्वाकांक्षा, तेज सोच और कार्रवाई में जल्दबाजी करने का प्रतीक है" },
        { name: "Queen of Swords", image: "swords_13.jpg", meaning: "an independent thinker, clear boundaries, and unbiased judgment", meaning_hi: "एक स्वतंत्र विचारक, स्पष्ट सीमाएं और निष्पक्ष निर्णय का प्रतीक है" },
        { name: "King of Swords", image: "swords_14.jpg", meaning: "intellectual power, authority, and truth", meaning_hi: "बौद्धिक शक्ति, अधिकार और सत्य का प्रतीक है" },

        // Suit of Pentacles
        { name: "Ace of Pentacles", image: "pentacles_01.jpg", meaning: "a new opportunity in finances, career, or manifestation", meaning_hi: "वित्त, करियर या अभिव्यक्ति में एक नए अवसर का प्रतीक है" },
        { name: "Two of Pentacles", image: "pentacles_02.jpg", meaning: "balancing priorities, adaptability, and managing your resources", meaning_hi: "प्राथमिकताओं को संतुलित करना, अनुकूलनशीलता और अपने संसाधनों का प्रबंधन करने का प्रतीक है" },
        { name: "Three of Pentacles", image: "pentacles_03.jpg", meaning: "teamwork, collaboration, and combining skills to succeed", meaning_hi: "टीम वर्क, सहयोग और सफल होने के लिए कौशल को संयोजित करने का प्रतीक है" },
        { name: "Four of Pentacles", image: "pentacles_04.jpg", meaning: "control, stability, and sometimes holding on too tightly", meaning_hi: "नियंत्रण, स्थिरता और कभी-कभी बहुत कसकर पकड़ रखने का प्रतीक है" },
        { name: "Five of Pentacles", image: "pentacles_05.jpg", meaning: "financial loss, poverty, and feeling left out in the cold", meaning_hi: "वित्तीय हानि, गरीबी और ठंड में बाहर छूट जाने का प्रतीक है" },
        { name: "Six of Pentacles", image: "pentacles_06.jpg", meaning: "generosity, charity, and giving or receiving help", meaning_hi: "उदारता, दान और मदद देने या प्राप्त करने का प्रतीक है" },
        { name: "Seven of Pentacles", image: "pentacles_07.jpg", meaning: "patience, long-term investment, and waiting for your hard work to pay off", meaning_hi: "धैर्य, दीर्घकालिक निवेश और अपनी मेहनत का फल मिलने की प्रतीक्षा का प्रतीक है" },
        { name: "Eight of Pentacles", image: "pentacles_08.jpg", meaning: "mastering a skill, dedication, and high-quality work", meaning_hi: "एक कौशल में महारत हासिल करना, समर्पण और उच्च गुणवत्ता वाले काम का प्रतीक है" },
        { name: "Nine of Pentacles", image: "pentacles_09.jpg", meaning: "self-sufficiency, luxury, and enjoying the fruits of your labor", meaning_hi: "आत्म-निर्भरता, विलासिता और अपनी मेहनत के फल का आनंद लेने का प्रतीक है" },
        { name: "Ten of Pentacles", image: "pentacles_10.jpg", meaning: "wealth, family legacy, and long-term security", meaning_hi: "धन, पारिवारिक विरासत और दीर्घकालिक सुरक्षा का प्रतीक है" },
        { name: "Page of Pentacles", image: "pentacles_11.jpg", meaning: "manifesting a new opportunity, learning, and earthly ambition", meaning_hi: "एक नए अवसर को प्रकट करना, सीखना और सांसारिक महत्वाकांक्षा का प्रतीक है" },
        { name: "Knight of Pentacles", image: "pentacles_12.jpg", meaning: "hard work, routine, and a methodical approach to achieve goals", meaning_hi: "कड़ी मेहनत, दिनचर्या और लक्ष्यों को प्राप्त करने के लिए एक व्यवस्थित दृष्टिकोण का प्रतीक है" },
        { name: "Queen of Pentacles", image: "pentacles_13.jpg", meaning: "a nurturing and practical provider who values home and security", meaning_hi: "एक पोषण करने वाली और व्यावहारिक प्रदाता जो घर और सुरक्षा को महत्व देती है" },
        { name: "King of Pentacles", image: "pentacles_14.jpg", meaning: "wealth, business leadership, and an abundance of resources", meaning_hi: "धन, व्यापार नेतृत्व और संसाधनों की प्रचुरता का प्रतीक है" },
    ];

    // --- DOM Elements ---
    const loginView = document.getElementById('login-view');
    const appWrapper = document.getElementById('app-wrapper');
    const loginForm = document.getElementById('login-form');
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
            generateCombinedHindiSummary(selectedCards);
            
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
                    <img src="images/${card.image}" alt="${card.name}">
                    <h3>${card.name}</h3>
                </div>
            </div>`;
        return cardContainer;
    }

    function generateStoryPrediction(cards) {
        const [c1, c2, c3, c4] = cards;
        const story = `
            <p>Your story begins with the energy of <strong>${c1.name}</strong>, which signifies ${c1.meaning}. This is the foundation of your current situation, the world you are standing in.</p>
            <p>However, a challenge soon appears in the form of <strong>${c2.name}</strong>. This card represents ${c2.meaning}, an obstacle you must understand and navigate.</p>
            <p>The path to overcoming this is revealed by <strong>${c3.name}</strong>. This is your guidance, suggesting ${c3.meaning}. By embracing this energy, you can find your way through the conflict.</p>
            <p>If you heed this advice, your journey leads to the potential outcome of <strong>${c4.name}</strong>. This final card indicates ${c4.meaning}, showing the resolution and the new reality you will create.</p>
        `;
        predictionContainer.innerHTML = story;
    }

    function generateCombinedHindiSummary(cards) {
        const [c1, c2, c3, c4] = cards;
        const hindiStory = `
            <h3>आपकी कहानी का हिंदी सारांश</h3>
            <p>आपकी कहानी की शुरुआत <strong>${c1.name}</strong> की ऊर्जा से होती है, जो ${c1.meaning_hi}। यह आपकी वर्तमान स्थिति की नींव है।</p>
            <p>हालांकि, जल्द ही <strong>${c2.name}</strong> के रूप में एक चुनौती सामने आती है, जो ${c2.meaning_hi}। आपको इस बाधा को समझना होगा।</p>
            <p>इस पर काबू पाने का रास्ता <strong>${c3.name}</strong> दिखाता है। यह आपका मार्गदर्शन है, जो ${c3.meaning_hi}। इस ऊर्जा को अपनाकर आप संघर्ष से बाहर निकल सकते हैं।</p>
            <p>यदि आप इस सलाह पर ध्यान देते हैं, तो आपकी यात्रा का संभावित परिणाम <strong>${c4.name}</strong> है, जो ${c4.meaning_hi} और उस नई वास्तविकता को दिखाता है जिसे आप बनाएंगे।</p>
        `;
        hindiSummaryContainer.innerHTML = hindiStory;
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
