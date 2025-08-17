// Multiple Intelligences Test Engine
class IntelligenceTestEngine {
    constructor() {
        this.currentSection = 0;
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = {};
        
        this.initializeScores();
        this.initializeEventListeners();
    }

    // Initialize scores for all intelligence types
    initializeScores() {
        Object.keys(TEST_CONFIG.intelligenceTypes).forEach(type => {
            this.scores[type] = 0;
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
            console.error('Error starting Intelligence test:', error);
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
        const section = TEST_CONFIG.intelligenceSections[this.currentSection];
        const questions = INTELLIGENCE_QUESTIONS[section.id];
        
        // Update header
        document.querySelector('.header h2').textContent = section.name;
        document.querySelector('.header p').textContent = section.english;
        
        // Display first question of the section
        this.currentQuestion = 0;
        this.displayQuestion();
    }

    // Display current question
    displayQuestion() {
        const section = TEST_CONFIG.intelligenceSections[this.currentSection];
        const questions = INTELLIGENCE_QUESTIONS[section.id];
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
                this.selectOption(index, option.score);
            });
            
            optionsContainer.appendChild(optionElement);
        });
    }

    // Select an option
    selectOption(optionIndex, score) {
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
        this.updateScores(score);
        
        // Enable next button
        document.getElementById('next-btn').disabled = false;
    }

    // Update scores based on selected option
    updateScores(score) {
        const section = TEST_CONFIG.intelligenceSections[this.currentSection];
        const intelligenceType = section.intelligenceType;
        this.scores[intelligenceType] += score;
    }

    // Next question
    nextQuestion() {
        const section = TEST_CONFIG.intelligenceSections[this.currentSection];
        const questions = INTELLIGENCE_QUESTIONS[section.id];
        
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
        if (this.currentSection < TEST_CONFIG.intelligenceSections.length - 1) {
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
            const section = TEST_CONFIG.intelligenceSections[this.currentSection];
            const questions = INTELLIGENCE_QUESTIONS[section.id];
            this.currentQuestion = questions.length - 1;
            this.displayQuestion();
        }
    }

    // Update progress
    updateProgress() {
        const section = TEST_CONFIG.intelligenceSections[this.currentSection];
        const questions = INTELLIGENCE_QUESTIONS[section.id];
        
        // Calculate overall progress
        let totalQuestions = 0;
        let answeredQuestions = 0;
        
        TEST_CONFIG.intelligenceSections.forEach((section, sectionIndex) => {
            const sectionQuestions = INTELLIGENCE_QUESTIONS[section.id];
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
            `${section.name} (${this.currentSection + 1}/${TEST_CONFIG.intelligenceSections.length})`;
    }

    // Update navigation buttons
    updateNavigationButtons() {
        const section = TEST_CONFIG.intelligenceSections[this.currentSection];
        const questions = INTELLIGENCE_QUESTIONS[section.id];
        
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
        const totalQuestions = TEST_CONFIG.intelligenceSections.length * 8;
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
        this.calculateIntelligenceProfile();
        this.displayResults();
    }

    // Calculate intelligence profile
    calculateIntelligenceProfile() {
        // Calculate percentages for each intelligence type
        this.percentages = {};
        
        Object.keys(this.scores).forEach(type => {
            const maxPossibleScore = this.getMaxPossibleScore(type);
            // Fix NaN% issue by ensuring we don't divide by zero
            if (maxPossibleScore > 0) {
                this.percentages[type] = Math.round((this.scores[type] / maxPossibleScore) * 100);
            } else {
                this.percentages[type] = 0;
            }
        });
        
        // Sort by percentage (highest first)
        this.sortedIntelligences = Object.keys(this.percentages).sort((a, b) => 
            this.percentages[b] - this.percentages[a]
        );
    }

    // Get maximum possible score for an intelligence type
    getMaxPossibleScore(type) {
        let maxScore = 0;
        
        TEST_CONFIG.intelligenceSections.forEach(section => {
            if (section.intelligenceType === type) {
                const sectionQuestions = INTELLIGENCE_QUESTIONS[section.id];
                maxScore += sectionQuestions.length * 4; // 4 is the highest score per question
            }
        });
        
        return maxScore;
    }

    // Display results
    displayResults() {
        const resultsContainer = document.getElementById('results-container');
        
        // Update results title
        document.getElementById('results-title').textContent = 'તમારા બહુવિધ બુદ્ધિ પરિણામો';
        document.getElementById('results-subtitle').textContent = 'તમારા જવાબોના આધારે, અહીં તમારી બુદ્ધિ પ્રોફાઇલ અને કારકિર્દી સૂચનો છે:';
        
        resultsContainer.innerHTML = `
            <div class="intelligence-result">
                <h2>તમારી બહુવિધ બુદ્ધિ પ્રોફાઇલ</h2>
                <p class="subtitle">Your Multiple Intelligences Profile</p>
                
                <div class="top-intelligences">
                    <h4>🏆 તમારી શ્રેષ્ઠ બુદ્ધિ (Top 3):</h4>
                    ${this.displayTopIntelligences()}
                </div>
                
                <div class="intelligence-scores">
                    <h4>📊 બધી બુદ્ધિ પ્રકારો અને સ્કોર:</h4>
                    ${this.displayIntelligenceScores()}
                </div>
                
                <div class="career-recommendations">
                    <h4>💼 કારકિર્દી સૂચનો (Career Recommendations):</h4>
                    ${this.displayCareerRecommendations()}
                </div>
            </div>
        `;
    }

    // Display intelligence scores
    displayIntelligenceScores() {
        let scoresHtml = '';
        
        this.sortedIntelligences.forEach(type => {
            const intelligence = TEST_CONFIG.intelligenceTypes[type];
            const percentage = this.percentages[type];
            
            scoresHtml += `
                <div class="intelligence-score">
                    <div class="intelligence-header">
                        <i class="${intelligence.icon}" style="color: ${intelligence.color}"></i>
                        <div class="intelligence-info">
                            <h5>${intelligence.name}</h5>
                            <p>${intelligence.english}</p>
                        </div>
                        <div class="score-percentage">${percentage}%</div>
                    </div>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${percentage}%; background: ${intelligence.color}"></div>
                    </div>
                    <p class="intelligence-description">${intelligence.description}</p>
                </div>
            `;
        });
        
        return scoresHtml;
    }

    // Display top intelligences
    displayTopIntelligences() {
        const top3 = this.sortedIntelligences.slice(0, 3);
        let topHtml = '';
        
        top3.forEach((type, index) => {
            const intelligence = TEST_CONFIG.intelligenceTypes[type];
            const percentage = this.percentages[type];
            
            // Add medal emojis for top 3
            const medals = ['🥇', '🥈', '🥉'];
            const medal = medals[index] || `${index + 1}.`;
            
            topHtml += `
                <div class="top-intelligence">
                    <div class="rank">
                        <span class="medal">${medal}</span>
                    </div>
                    <div class="intelligence-details">
                        <h5>${intelligence.name}</h5>
                        <p>${intelligence.english}</p>
                        <span class="score">${percentage}%</span>
                    </div>
                </div>
            `;
        });
        
        return topHtml;
    }

    // Display career recommendations
    displayCareerRecommendations() {
        const top3 = this.sortedIntelligences.slice(0, 3);
        let careersHtml = '';
        
        top3.forEach((type, index) => {
            const intelligence = TEST_CONFIG.intelligenceTypes[type];
            
            careersHtml += `
                <div class="career-section">
                    <h5>${intelligence.name} માટે:</h5>
                    <ul>
                        ${intelligence.examples.map(career => `<li>${career}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        
        return careersHtml;
    }

    // Reset test
    resetTest() {
        this.currentSection = 0;
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = {};
        
        this.initializeScores();
        this.showScreen('welcome-screen');
    }

    // Download results
    downloadResults() {
        let resultsText = 'બહુવિધ બુદ્ધિ પરીક્ષણ પરિણામો\n';
        resultsText += '================================\n\n';
        
        resultsText += '🏆 તમારી શ્રેષ્ઠ બુદ્ધિ (Top 3):\n';
        resultsText += '--------------------------------\n';
        
        const top3 = this.sortedIntelligences.slice(0, 3);
        top3.forEach((type, index) => {
            const intelligence = TEST_CONFIG.intelligenceTypes[type];
            const percentage = this.percentages[type];
            const medals = ['🥇', '🥈', '🥉'];
            const medal = medals[index] || `${index + 1}.`;
            
            resultsText += `${medal} ${intelligence.name} (${intelligence.english}): ${percentage}%\n`;
            resultsText += `   ${intelligence.description}\n`;
            resultsText += `   કારકિર્દી વિકલ્પો: ${intelligence.examples.join(', ')}\n\n`;
        });
        
        resultsText += '📊 બધી બુદ્ધિ પ્રકારો અને સ્કોર:\n';
        resultsText += '--------------------------------\n';
        this.sortedIntelligences.forEach((type, index) => {
            const intelligence = TEST_CONFIG.intelligenceTypes[type];
            const percentage = this.percentages[type];
            
            resultsText += `${index + 1}. ${intelligence.name} (${intelligence.english}): ${percentage}%\n`;
            resultsText += `   ${intelligence.description}\n`;
            resultsText += `   કારકિર્દી વિકલ્પો: ${intelligence.examples.join(', ')}\n\n`;
        });
        
        // Create and download file
        const blob = new Blob([resultsText], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'multiple-intelligences-test-results.txt';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IntelligenceTestEngine;
} else {
    window.IntelligenceTestEngine = IntelligenceTestEngine;
} 