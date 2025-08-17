// Career Test Application
class CareerTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.questions = this.getQuestions();
        this.careerCategories = this.getCareerCategories();
        
        this.initializeEventListeners();
        this.updateProgress();
    }

    // Gujarati career test questions
    getQuestions() {
        return [
            {
                question: "હું ક્યારે વધારે આનંદ અનુભવું છું:",
                options: [
                    { text: "(A) લોકો સાથે વાતચીત કરીને..", category: "Social", weight: 3 },
                    { text: "(B) એકલા શાંતિથી રહીને..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "જયારે હું કોઈ પ્રસંગ કે ઈવેન્ટમાં હોવ ત્યારે:",
                options: [
                    { text: "(A) ઘણા લોકો સાથે બોલવાનું પસંદ કરું છું..", category: "Social", weight: 3 },
                    { text: "(B) થોડાક નજીકના મિત્રોની વચ્ચે રહું છું..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "જયારે હું નવા લોકોને મળું ત્યારે:",
                options: [
                    { text: "(A) ઉત્સાહ અનુભવુ છું..", category: "Social", weight: 3 },
                    { text: "(B) થોડું શરમાવ છું કે સંકોચ અનુભવુ છું.", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "હું ક્યારે એન્જોય કે રિલેક્સ અનુભવું છું:",
                options: [
                    { text: "(A) સમૂહ પ્રવૃત્તિઓમાં ભાગ લઈને..", category: "Social", weight: 3 },
                    { text: "(B) વ્યક્તિગત પ્રવૃત્તિઓમાં ધ્યાન કેન્દ્રિત કરીને..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "હું ક્યારે અંદરથી ઊર્જા મેળવું છું:",
                options: [
                    { text: "(A) લોકો સાથે વાર્તાલાપ કે પ્રવુતિ કરીને..", category: "Social", weight: 3 },
                    { text: "(B) મારી અંદરની દુનિયામાંથી..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "હું ક્યારે વધારે ખુશ રહું છુંઃ",
                options: [
                    { text: "(A) જાહેર સ્થાનોમાં સમય વિતાવીને..", category: "Social", weight: 3 },
                    { text: "(B) ઘર અને શાંતિભર્યા સ્થળે રહીને..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "નવી જગ્યાએ જઈએ ત્યારે હું:",
                options: [
                    { text: "(A) તરત લોકો સાથે વાત કરું છું..", category: "Social", weight: 3 },
                    { text: "(B) પહેલા વાત ઓછી અને માહોલનું નિરીક્ષણ કરું..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "મને ક્યારે વધારે આનંદ આવે છે:",
                options: [
                    { text: "(A) લોકો સાથે પ્રસંગોમાં કે મેળામાં..", category: "Social", weight: 3 },
                    { text: "(B) પુસ્તક વાંચવામાં અથવા પ્રકૃતિમાં શાંતિથી..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "મને ક્યારે સારી રીતે દરેક બાબતો સમજાય છે :",
                options: [
                    { text: "(A) ચર્ચા દ્વારા..", category: "Social", weight: 3 },
                    { text: "(B) વિચારો અને ધ્યાન દ્વારા..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "જયારે ખાલી સમય મળે ત્યારે હું:",
                options: [
                    { text: "(A) મિત્રોને મળવા અને વાત કરવા જાવ..", category: "Social", weight: 3 },
                    { text: "(B) શાંતિથી એકલા રહીને આરામ કરું..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "મારે નવા સંબંધ બનાવવામાં:",
                options: [
                    { text: "(A) સરળતા હોય છે..", category: "Social", weight: 3 },
                    { text: "(B) થોડો સમય લાગે છે..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "જયારે હું લોકોની વચ્ચે હોવ ત્યારે:",
                options: [
                    { text: "(A) વધુ વાત કરતા ઊર્જાવાન બનું..", category: "Social", weight: 3 },
                    { text: "(B) વધુ સાંભળતા શાંતિ અનુભવું..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "જ્યારે હું કોઈ સમૂહમાં હોઉં:",
                options: [
                    { text: "(A) લોકો સાથે જોડાવું સરળ લાગે છે..", category: "Social", weight: 3 },
                    { text: "(B) વધારે નિરીક્ષણ કરું અને શાંત રહું.", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "મિત્રો સાથે હું:",
                options: [
                    { text: "(A) ઘણી વાર મળું અને વાત કરું..", category: "Social", weight: 3 },
                    { text: "(B) ઓછી વાર મળું પણ ઊંડા સંબંધ રાખું..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "જ્યારે મને પ્રશંસા મળું ત્યારે:",
                options: [
                    { text: "(A) જાહેરમાં મળેલી વધુ ગમે..", category: "Social", weight: 3 },
                    { text: "(B) વ્યક્તિગત રીતે મળેલી વધુ કિંમતી લાગે..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "હું ક્યારે એન્જોય કે રિલેક્સ અનુભવું છું:",
                options: [
                    { text: "(A) ગરમાગરમ ચર્ચાઓથી અને હસવાથી..", category: "Social", weight: 3 },
                    { text: "(B) શાંતિભર્યા વિચાર અને ચિંતનથી..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "મારે માટે વધુ આરામદાયક છે:",
                options: [
                    { text: "(A) સમૂહ પ્રવૃત્તિઓ..", category: "Social", weight: 3 },
                    { text: "(B) વ્યક્તિગત પ્રવૃત્તિઓ..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "મારી વાતચીતની શૈલી કેવી છે:",
                options: [
                    { text: "(A) ખુલ્લી અને સરળ..", category: "Social", weight: 3 },
                    { text: "(B) વિચારેલી અને શાંત..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "હું લોકો સાથે વાત કરતી વખતેઃ",
                options: [
                    { text: "(A) તરત જવાબ આપું..", category: "Social", weight: 3 },
                    { text: "(B) વિચાર્યા પછી જવાબ આપું..", category: "Introvert", weight: 3 }
                ]
            },
            {
                question: "જયારે હું કોઈ નવા સ્થાન પર જાવ ત્યારે:",
                options: [
                    { text: "(A) તરત મિત્ર બનાવી શકું..", category: "Social", weight: 3 },
                    { text: "(B) સમય લઈ લોકો સાથે સંબંધ વિકસાવું..", category: "Introvert", weight: 3 }
                ]
            }
        ];
    }

    // Career categories based on Gujarati test results
    getCareerCategories() {
        return {
            "Social": {
                description: "તમે લોકો સાથે કામ કરવામાં આનંદ માણો છો અને સામાજિક પ્રવૃત્તિઓમાં શક્તિશાળી છો.",
                careers: [
                    { name: "માનવ સંસાધન મેનેજર", description: "લોકોનું સંચાલન અને સકારાત્મક કાર્યસંસ્કૃતિ બનાવવી." },
                    { name: "શિક્ષક/શિક્ષિકા", description: "આવતી પેઢીને પ્રેરણા આપવી અને શિક્ષણ આપવું." },
                    { name: "સામાજિક કાર્યકર", description: "લોકોને પડકારો દૂર કરવામાં મદદ કરવી." },
                    { name: "વેચાણ પ્રતિનિધિ", description: "સંબંધો બનાવવા અને ગ્રાહકોને સમાધાનો શોધવામાં મદદ કરવી." },
                    { name: "આરોગ્ય સેવા પ્રદાતા", description: "રોગીઓની સંભાળ રાખવી અને તેમના આરોગ્ય પરિણામો સુધારવા." }
                ]
            },
            "Introvert": {
                description: "તમે એકાંતમાં કામ કરવામાં આનંદ માણો છો અને ઊંડા વિચારો કરવામાં શક્તિશાળી છો.",
                careers: [
                    { name: "ડેટા વૈજ્ઞાનિક", description: "જટિલ ડેટાનું વિશ્લેષણ કરી સંસ્થાઓને સારા નિર્ણયો લેવામાં મદદ કરવી." },
                    { name: "સોફ્ટવેર ઇજનેર", description: "વિવિધ એપ્લિકેશન્સ માટે સોફ્ટવેર સોલ્યુશન્સ ડિઝાઇન અને વિકસાવવા." },
                    { name: "લેખક/પત્રકાર", description: "ઊંડા વિચારો અને વિશ્લેષણ દ્વારા સામગ્રી બનાવવી." },
                    { name: "ગ્રાફિક ડિઝાઇનર", description: "સંદેશાઓને અસરકારક રીતે પહોંચાડતી દ્રશ્ય સામગ્રી બનાવવી." },
                    { name: "ગુણવતા નિયંત્રણ નિષ્ણાત", description: "ઉત્પાદનો અને સેવાઓ ગુણવતા ધોરણો પૂરા કરે છે તેની ખાતરી કરવી." }
                ]
            }
        };
    }

    initializeEventListeners() {
        // Start test button
        document.getElementById('start-test').addEventListener('click', () => {
            this.showScreen('question-screen');
            this.displayQuestion();
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Action buttons
        document.getElementById('retake-test').addEventListener('click', () => {
            this.resetTest();
        });

        document.getElementById('download-results').addEventListener('click', () => {
            this.downloadResults();
        });
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show the target screen
        document.getElementById(screenId).classList.add('active');
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <label class="option-label">
                    <div class="option-radio"></div>
                    <span>${option.text}</span>
                </label>
            `;
            
            // Check if this option was previously selected
            if (this.answers[this.currentQuestion] === index) {
                optionElement.classList.add('selected');
            }
            
            optionElement.addEventListener('click', () => {
                this.selectOption(index);
            });
            
            optionsContainer.appendChild(optionElement);
        });
        
        this.updateProgress();
        this.updateNavigationButtons();
    }

    selectOption(optionIndex) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Select new option
        document.querySelectorAll('.option')[optionIndex].classList.add('selected');
        
        // Store the answer
        this.answers[this.currentQuestion] = optionIndex;
        
        // Enable next button if it's disabled
        document.getElementById('next-btn').disabled = false;
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        document.getElementById('total-questions').textContent = this.questions.length;
    }

    updateNavigationButtons() {
        document.getElementById('prev-btn').disabled = this.currentQuestion === 0;
        
        // Enable next button if current question is answered
        const hasAnswer = this.answers[this.currentQuestion] !== undefined;
        document.getElementById('next-btn').disabled = !hasAnswer;
    }

    showResults() {
        this.showScreen('results-screen');
        this.calculateResults();
    }

    calculateResults() {
        const scores = {};
        
        // Initialize scores for all categories
        Object.keys(this.careerCategories).forEach(category => {
            scores[category] = 0;
        });
        
        // Calculate scores based on answers
        this.answers.forEach((answerIndex, questionIndex) => {
            if (answerIndex !== undefined) {
                const question = this.questions[questionIndex];
                const selectedOption = question.options[answerIndex];
                scores[selectedOption.category] += selectedOption.weight;
            }
        });
        
        // Convert scores to percentages
        const maxPossibleScore = this.questions.length * 3; // 20 questions * 3 points each
        const percentages = {};
        Object.keys(scores).forEach(category => {
            percentages[category] = Math.round((scores[category] / maxPossibleScore) * 100);
        });
        
        this.displayResults(percentages);
    }

    displayResults(percentages) {
        const resultsGrid = document.getElementById('results-grid');
        resultsGrid.innerHTML = '';
        
        // Sort categories by score (highest first)
        const sortedCategories = Object.keys(percentages).sort((a, b) => percentages[b] - percentages[a]);
        
        sortedCategories.forEach(category => {
            const percentage = percentages[category];
            const categoryInfo = this.careerCategories[category];
            
            const categoryCard = document.createElement('div');
            categoryCard.className = 'career-card';
            categoryCard.innerHTML = `
                <h3>${category}</h3>
                <p>${categoryInfo.description}</p>
                <div class="career-score">
                    <span>${percentage}%</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
            
            resultsGrid.appendChild(categoryCard);
            
            // Animate the score bar
            setTimeout(() => {
                categoryCard.querySelector('.score-fill').style.width = `${percentage}%`;
            }, 100);
        });
    }

    resetTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.showScreen('welcome-screen');
        this.updateProgress();
    }

    downloadResults() {
        // Create a text summary of results
        let resultsText = 'કારકિર્દી પરીક્ષણ પરિણામો\n';
        resultsText += '==========================\n\n';
        
        const resultsGrid = document.getElementById('results-grid');
        const categories = resultsGrid.querySelectorAll('.career-card');
        
        categories.forEach((category, index) => {
            const name = category.querySelector('h3').textContent;
            const description = category.querySelector('p').textContent;
            const score = category.querySelector('.career-score span').textContent;
            
            resultsText += `${index + 1}. ${name} (${score})\n`;
            resultsText += `   ${description}\n\n`;
        });
        
        // Create and download file
        const blob = new Blob([resultsText], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'career-test-results-gujarati.txt';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CareerTest();
}); 