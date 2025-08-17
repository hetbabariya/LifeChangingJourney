// Main Test Engine for the MBTI Career Test System
class MBTITestEngine {
    constructor() {
        this.currentSection = 0;
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = {};
        this.mbtiType = '';
        
        this.initializeScores();
        this.initializeEventListeners();
    }

    // Initialize scores for all dimensions
    initializeScores() {
        Object.keys(TEST_CONFIG.mbtiDimensions).forEach(dimension => {
            this.scores[dimension] = 0;
        });
    }

    // Initialize event listeners
    initializeEventListeners() {
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

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });
    }

    // Handle keyboard navigation
    handleKeyboardNavigation(e) {
        if (e.key === 'Escape') {
            this.showWelcomeScreen();
        } else if (e.key === 'ArrowLeft') {
            const prevBtn = document.getElementById('prev-btn');
            if (prevBtn && !prevBtn.disabled) {
                prevBtn.click();
            }
        } else if (e.key === 'ArrowRight') {
            const nextBtn = document.getElementById('next-btn');
            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            }
        } else if (e.key >= '1' && e.key <= '4') {
            // Number keys 1-4 for option selection
            const optionIndex = parseInt(e.key) - 1;
            const options = document.querySelectorAll('.option');
            if (options[optionIndex]) {
                options[optionIndex].click();
            }
        }
    }

    // Show welcome screen
    showWelcomeScreen() {
        this.showScreen('welcome-screen');
    }

    // Start the test
    startTest() {
        try {
            this.showScreen('question-screen');
            this.displayCurrentSection();
        } catch (error) {
            console.error('Error starting MBTI test:', error);
            this.showError('Error starting test. Please try again.');
        }
    }

    // Show specific screen
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    // Display current section
    displayCurrentSection() {
        const section = TEST_CONFIG.mbtiSections[this.currentSection];
        const questions = TEST_QUESTIONS[section.id];
        
        // Update header
        document.querySelector('.header h2').textContent = section.name;
        document.querySelector('.header p').textContent = section.english;
        
        // Display first question of the section
        this.currentQuestion = 0;
        this.displayQuestion();
    }

    // Display current question
    displayQuestion() {
        const section = TEST_CONFIG.mbtiSections[this.currentSection];
        const questions = TEST_QUESTIONS[section.id];
        const question = questions[this.currentQuestion];
        
        // Update question text
        document.getElementById('question-text').textContent = question.question;
        
        // Update progress
        this.updateProgress();
        
        // Display options
        this.displayOptions(question.options);
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    // Display options for current question
    displayOptions(options) {
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            
            // Check if this option was previously selected
            const questionKey = `${this.currentSection}_${this.currentQuestion}`;
            if (this.answers[questionKey] === index) {
                optionElement.classList.add('selected');
            }
            
            optionElement.innerHTML = `
                <label class="option-label">
                    <div class="option-radio"></div>
                    <span>${option.text}</span>
                </label>
            `;
            
            optionElement.addEventListener('click', () => {
                this.selectOption(index, option.dimension);
            });
            
            optionsContainer.appendChild(optionElement);
        });
    }

    // Select an option
    selectOption(optionIndex, dimension) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Select new option
        document.querySelectorAll('.option')[optionIndex].classList.add('selected');
        
        // Store the answer
        const questionKey = `${this.currentSection}_${this.currentQuestion}`;
        this.answers[questionKey] = optionIndex;
        
        // Update scores
        this.updateScores(dimension);
        
        // Enable next button
        document.getElementById('next-btn').disabled = false;
    }

    // Update scores based on selected option
    updateScores(dimension) {
        this.scores[dimension] += 3; // Each option has weight 3
    }

    // Next question
    nextQuestion() {
        const section = TEST_CONFIG.mbtiSections[this.currentSection];
        const questions = TEST_QUESTIONS[section.id];
        
        if (this.currentQuestion < questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            // Move to next section
            this.nextSection();
        }
    }

    // Previous question
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        } else if (this.currentSection > 0) {
            // Move to previous section
            this.previousSection();
        }
    }

    // Next section
    nextSection() {
        if (this.currentSection < TEST_CONFIG.mbtiSections.length - 1) {
            this.currentSection++;
            this.currentQuestion = 0;
            this.displayCurrentSection();
        } else {
            // Test completed
            this.showResults();
        }
    }

    // Previous section
    previousSection() {
        if (this.currentSection > 0) {
            this.currentSection--;
            const section = TEST_CONFIG.mbtiSections[this.currentSection];
            const questions = TEST_QUESTIONS[section.id];
            this.currentQuestion = questions.length - 1;
            this.displayQuestion();
        }
    }

    // Update progress
    updateProgress() {
        const section = TEST_CONFIG.mbtiSections[this.currentSection];
        const questions = TEST_QUESTIONS[section.id];
        
        // Calculate overall progress
        let totalQuestions = 0;
        let answeredQuestions = 0;
        
        TEST_CONFIG.mbtiSections.forEach((section, sectionIndex) => {
            const sectionQuestions = TEST_QUESTIONS[section.id];
            totalQuestions += sectionQuestions.length;
            
            if (sectionIndex < this.currentSection) {
                answeredQuestions += sectionQuestions.length;
            } else if (sectionIndex === this.currentSection) {
                answeredQuestions += this.currentQuestion;
            }
        });
        
        const progress = (answeredQuestions / totalQuestions) * 100;
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        
        // Update question counter
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        document.getElementById('total-questions').textContent = questions.length;
        
        // Update section info
        document.getElementById('section-info').textContent = 
            `${section.name} (${this.currentSection + 1}/${TEST_CONFIG.mbtiSections.length})`;
    }

    // Update navigation buttons
    updateNavigationButtons() {
        const section = TEST_CONFIG.mbtiSections[this.currentSection];
        const questions = TEST_QUESTIONS[section.id];
        
        // Previous button
        document.getElementById('prev-btn').disabled = 
            (this.currentSection === 0 && this.currentQuestion === 0);
        
        // Next button
        const questionKey = `${this.currentSection}_${this.currentQuestion}`;
        const hasAnswer = this.answers[questionKey] !== undefined;
        document.getElementById('next-btn').disabled = !hasAnswer;
    }

    // Show error message
    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    // Validate test completion
    validateTestCompletion() {
        const totalQuestions = TEST_CONFIG.mbtiSections.length * 20;
        const answeredQuestions = Object.keys(this.answers).length;
        
        if (answeredQuestions < totalQuestions) {
            const remaining = totalQuestions - answeredQuestions;
            if (confirm(`તમે હજુ ${remaining} પ્રશ્નોના જવાબ આપ્યા નથી. શું તમે ખરેખર પરીક્ષણ પૂરું કરવા માંગો છો?`)) {
                return true;
            }
            return false;
        }
        return true;
    }

    // Show results
    showResults() {
        if (!this.validateTestCompletion()) {
            return;
        }
        
        this.showScreen('results-screen');
        this.calculateMBTIType();
        this.displayResults();
    }

    // Calculate MBTI type based on scores
    calculateMBTIType() {
        const dimensions = ['E', 'S', 'T', 'J'];
        let mbtiType = '';
        
        dimensions.forEach(dimension => {
            const opposite = this.getOppositeDimension(dimension);
            const score1 = this.scores[dimension] || 0;
            const score2 = this.scores[opposite] || 0;
            
            mbtiType += score1 >= score2 ? dimension : opposite;
        });
        
        this.mbtiType = mbtiType;
    }

    // Get opposite dimension
    getOppositeDimension(dimension) {
        const opposites = {
            'E': 'I',
            'I': 'E',
            'S': 'N',
            'N': 'S',
            'T': 'F',
            'F': 'T',
            'J': 'P',
            'P': 'J'
        };
        return opposites[dimension];
    }

    // Display results
    displayResults() {
        const mbtiInfo = TEST_CONFIG.mbtiTypes[this.mbtiType];
        const resultsContainer = document.getElementById('results-container');
        
        // Update results title
        document.getElementById('results-title').textContent = 'તમારા MBTI પરિણામો';
        document.getElementById('results-subtitle').textContent = 'તમારા જવાબોના આધારે, અહીં તમારો વ્યક્તિત્વ પ્રકાર અને કારકિર્દી સૂચનો છે:';
        
        resultsContainer.innerHTML = `
            <div class="mbti-result">
                <h2>તમારો MBTI પ્રકાર: ${this.mbtiType}</h2>
                <h3>${mbtiInfo.name}</h3>
                <p class="english-name">${mbtiInfo.english}</p>
                
                <div class="dimension-scores">
                    <h4>પરીક્ષણ પરિણામો:</h4>
                    ${this.displayDimensionScores()}
                </div>
                
                <div class="personality-details">
                    <div class="detail-section">
                        <h4>ગુણધર્મ (Qualities):</h4>
                        <p>${mbtiInfo.qualities}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>શક્તિ (Strengths):</h4>
                        <p>${mbtiInfo.strengths}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>પડકાર (Challenges):</h4>
                        <p>${mbtiInfo.challenges}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>કારકિર્દી વિકલ્પો (Career Options):</h4>
                        <ul>
                            ${mbtiInfo.careers.map(career => `<li>${career}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // Display dimension scores
    displayDimensionScores() {
        let scoresHtml = '';
        
        TEST_CONFIG.mbtiSections.forEach(section => {
            const dim1 = section.dimension1;
            const dim2 = section.dimension2;
            const score1 = this.scores[dim1] || 0;
            const score2 = this.scores[dim2] || 0;
            const total = score1 + score2;
            
            // Fix NaN% issue by ensuring we don't divide by zero
            let percentage1 = 50;
            let percentage2 = 50;
            
            if (total > 0) {
                percentage1 = Math.round((score1 / total) * 100);
                percentage2 = 100 - percentage1;
            }
            
            scoresHtml += `
                <div class="dimension-score">
                    <div class="dimension-label">
                        <span>${dim1}: ${TEST_CONFIG.mbtiDimensions[dim1].name}</span>
                        <span>${dim2}: ${TEST_CONFIG.mbtiDimensions[dim2].name}</span>
                    </div>
                    <div class="score-bar">
                        <div class="score-fill dim1" style="width: ${percentage1}%"></div>
                        <div class="score-fill dim2" style="width: ${percentage2}%"></div>
                    </div>
                    <div class="score-percentages">
                        <span>${percentage1}%</span>
                        <span>${percentage2}%</span>
                    </div>
                </div>
            `;
        });
        
        return scoresHtml;
    }

    // Reset test
    resetTest() {
        this.currentSection = 0;
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = {};
        this.mbtiType = '';
        
        this.initializeScores();
        this.showScreen('welcome-screen');
    }

    // Download results
    downloadResults() {
        const mbtiInfo = TEST_CONFIG.mbtiTypes[this.mbtiType];
        
        let resultsText = 'MBTI કારકિર્દી પરીક્ષણ પરિણામો\n';
        resultsText += '================================\n\n';
        resultsText += `🏆 તમારો MBTI પ્રકાર: ${this.mbtiType}\n`;
        resultsText += `📝 નામ: ${mbtiInfo.name}\n`;
        resultsText += `🌐 English: ${mbtiInfo.english}\n\n`;
        
        resultsText += '📊 પરીક્ષણ પરિણામો:\n';
        resultsText += '----------------------\n';
        TEST_CONFIG.mbtiSections.forEach(section => {
            const dim1 = section.dimension1;
            const dim2 = section.dimension2;
            const score1 = this.scores[dim1] || 0;
            const score2 = this.scores[dim2] || 0;
            const total = score1 + score2;
            
            let percentage1 = 50;
            let percentage2 = 50;
            
            if (total > 0) {
                percentage1 = Math.round((score1 / total) * 100);
                percentage2 = 100 - percentage1;
            }
            
            resultsText += `${section.name}: ${dim1} ${percentage1}% vs ${dim2} ${percentage2}%\n`;
        });
        
        resultsText += '\n💼 વ્યક્તિત્વ વિગતો:\n';
        resultsText += '----------------------\n';
        resultsText += `ગુણધર્મ: ${mbtiInfo.qualities}\n`;
        resultsText += `શક્તિ: ${mbtiInfo.strengths}\n`;
        resultsText += `પડકાર: ${mbtiInfo.challenges}\n`;
        resultsText += `કારકિર્દી વિકલ્પો: ${mbtiInfo.careers.join(', ')}\n`;
        
        // Create and download file
        const blob = new Blob([resultsText], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mbti-test-results-${this.mbtiType}.txt`;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MBTITestEngine;
} else {
    window.MBTITestEngine = MBTITestEngine;
} 