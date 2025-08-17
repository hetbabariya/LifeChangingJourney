class BigFiveTestEngine {
    constructor() {
        this.currentSection = 0;
        this.currentQuestion = 0;
        this.scores = {};
        this.answers = {};
        this.percentages = {};
        this.sortedDimensions = [];
        this.testCompleted = false;
        
        this.initializeScores();
        this.bindEvents();
    }

    // Initialize scores for all dimensions
    initializeScores() {
        // Ensure all 5 dimensions are initialized
        const allDimensions = ['O', 'C', 'E', 'A', 'N'];
        allDimensions.forEach(dimension => {
            this.scores[dimension] = 0;
        });
    }

    // Bind event listeners
    bindEvents() {
        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        
        // Results actions
        document.getElementById('download-results').addEventListener('click', () => this.downloadResults());
        document.getElementById('retake-test').addEventListener('click', () => this.resetTest());
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

    // Show specific screen
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    // Start the test
    startTest() {
        this.currentSection = 0;
        this.currentQuestion = 0;
        this.testCompleted = false;
        this.initializeScores();
        this.answers = {};
        
        this.showScreen('question-screen');
        this.displayCurrentSection();
    }

    // Show test screen
    showTestScreen() {
        this.showScreen('question-screen');
    }

    // Display current section
    displayCurrentSection() {
        const section = TEST_CONFIG.bigFiveSections[this.currentSection];
        const questions = BIGFIVE_QUESTIONS[section.id];
        
        // Update header
        document.querySelector('.header h2').textContent = section.name;
        document.querySelector('.header p').textContent = section.english;
        
        // Display first question of the section
        this.currentQuestion = 0;
        this.displayQuestion();
    }

    // Display current question
    displayQuestion() {
        const section = TEST_CONFIG.bigFiveSections[this.currentSection];
        const questions = BIGFIVE_QUESTIONS[section.id];
        const question = questions[this.currentQuestion];
        
        // Show loading state
        document.getElementById('question-text').textContent = 'પ્રશ્ન લોડ થઈ રહ્યો છે...';
        
        // Simulate loading for better UX
        setTimeout(() => {
            // Update question text
            document.getElementById('question-text').textContent = question.question;
            
            // Update progress
            this.updateProgress();
            
            // Display options
            this.displayOptions(question.options);
            
            // Update navigation buttons
            this.updateNavigationButtons();
        }, 100);
    }

    // Show loading state
    showLoading() {
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        
        questionText.textContent = 'પ્રશ્ન લોડ થઈ રહ્યો છે...';
        optionsContainer.innerHTML = '<div class="loading-spinner">⏳</div>';
    }

    // Hide loading state
    hideLoading() {
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        
        questionText.textContent = '';
        optionsContainer.innerHTML = '';
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
        const section = TEST_CONFIG.bigFiveSections[this.currentSection];
        const dimension = section.dimension;
        this.scores[dimension] += score;
    }

    // Go to next question
    nextQuestion() {
        const currentSection = TEST_CONFIG.bigFiveSections[this.currentSection];
        const questions = BIGFIVE_QUESTIONS[currentSection.id];
        
        if (this.currentQuestion < questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            this.nextSection();
        }
        
        this.updateProgress();
        this.updateNavigationButtons();
    }

    // Go to previous question
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            const currentSection = TEST_CONFIG.bigFiveSections[this.currentSection];
            const questions = BIGFIVE_QUESTIONS[currentSection.id];
            this.displayQuestion(questions[this.currentQuestion]);
        } else if (this.currentSection > 0) {
            this.previousSection();
        }
        
        this.updateProgress();
        this.updateNavigationButtons();
    }

    // Go to next section
    nextSection() {
        if (this.currentSection < TEST_CONFIG.bigFiveSections.length - 1) {
            this.currentSection++;
            this.currentQuestion = 0;
            this.displayCurrentSection();
        } else {
            this.completeTest();
        }
    }

    // Go to previous section
    previousSection() {
        if (this.currentSection > 0) {
            this.currentSection--;
            const currentSection = TEST_CONFIG.bigFiveSections[this.currentSection];
            const questions = BIGFIVE_QUESTIONS[currentSection.id];
            this.currentQuestion = questions.length - 1;
            this.displayQuestion(questions[this.currentQuestion]);
        }
    }

    // Complete the test
    completeTest() {
        if (!this.validateTestCompletion()) {
            return;
        }
        
        this.testCompleted = true;
        this.calculateResults();
        this.displayResults();
    }

    // Calculate results
    calculateResults() {
        // Calculate percentages for each dimension
        this.percentages = {};
        
        // Ensure all 5 dimensions are processed
        const allDimensions = ['O', 'C', 'E', 'A', 'N'];
        
        allDimensions.forEach(dimension => {
            const maxPossibleScore = 32; // 8 questions * 4 points
            const score = this.scores[dimension] || 0;
            this.percentages[dimension] = Math.round((score / maxPossibleScore) * 100);
        });
        
        // Sort by percentage (highest first, except Neuroticism - lower is better)
        this.sortedDimensions = Object.keys(this.percentages).sort((a, b) => {
            if (a === 'N') {
                return this.percentages[a] - this.percentages[b]; // Lower is better for Neuroticism
            } else {
                return this.percentages[b] - this.percentages[a]; // Higher is better for others
            }
        });
        
        // Debug logging to ensure all dimensions are processed
        console.log('Big Five Results:', {
            scores: this.scores,
            percentages: this.percentages,
            sortedDimensions: this.sortedDimensions
        });
    }

    // Display results
    displayResults() {
        const resultsContainer = document.getElementById('results-container');
        
        // Update results title
        document.getElementById('results-title').textContent = 'તમારા Big Five ટોપ પરિણામ';
        document.getElementById('results-subtitle').textContent = 'તમારા જવાબોના આધારે, અહીં તમારો સૌથી વધુ પ્રબળ વ્યક્તિત્વ પરિણામ છે:';
        
        // Generate the personality scores HTML
        const personalityScoresHtml = this.displayPersonalityScores();
        const careerRecommendationsHtml = this.displayCareerRecommendations();
        
        // Debug logging
        console.log('Displaying Big Five Results:', {
            personalityScoresHtml: personalityScoresHtml,
            careerRecommendationsHtml: careerRecommendationsHtml
        });
        
        resultsContainer.innerHTML = `
            <div class="bigfive-result">
                <h2>Big Five વ્યક્તિત્વ પ્રોફાઇલ</h2>
                <p class="subtitle">Your Big Five Personality Profile</p>
                
                <div class="personality-scores">
                    <h4>🥇 તમારો ટોપ વ્યક્તિત્વ પરિણામ:</h4>
                    ${personalityScoresHtml}
                </div>
                
                <div class="career-recommendations">
                    <h4>💼 ટોપ કારકિર્દી સૂચનો (Top Career Recommendations):</h4>
                    ${careerRecommendationsHtml}
                </div>
            </div>
        `;
        
        // Show results screen using the standard method
        this.showScreen('results-screen');
    }

    // Display personality scores
    displayPersonalityScores() {
        let scoresHtml = '';
        
        // Get the top 1 result (highest percentage)
        const topDimension = this.sortedDimensions[0];
        const topDimensionInfo = TEST_CONFIG.bigFiveDimensions[topDimension];
        const topPercentage = this.percentages[topDimension] || 0;
        const topScore = this.scores[topDimension] || 0;
        
        // Special note for Neuroticism
        const note = topDimension === 'N' ? `<br><small class="note">${topDimensionInfo.note}</small>` : '';
        
        scoresHtml = `
            <div class="personality-score top-result">
                <div class="score-header">
                    <span class="ranking">🥇</span>
                    <div class="dimension-info">
                        <h5>${topDimensionInfo.icon} ${topDimensionInfo.name}</h5>
                        <p>${topDimensionInfo.english}</p>
                        <p class="description">${topDimensionInfo.description}</p>
                    </div>
                    <div class="score-display">
                        <span class="score-value">${topScore}/32</span>
                        <span class="score-percentage">${topPercentage}%</span>
                    </div>
                </div>
                <div class="score-bar">
                    <div class="score-fill" style="width: ${topPercentage}%; background-color: ${topDimensionInfo.color}"></div>
                </div>
                ${note}
            </div>
        `;
        
        return scoresHtml;
    }

    // Display career recommendations
    displayCareerRecommendations() {
        // Show only the top 1 dimension with career suggestions
        const topDimension = this.sortedDimensions[0];
        const topDimensionInfo = TEST_CONFIG.bigFiveDimensions[topDimension];
        const topCareers = topDimensionInfo.careers;
        const topPercentage = this.percentages[topDimension] || 0;
        
        const recommendationsHtml = `
            <div class="career-section top-result">
                <h5>🥇 ${topDimensionInfo.name} (${topDimensionInfo.english}) - ${topPercentage}%</h5>
                <p><strong>કારકિર્દી વિકલ્પો:</strong> ${topCareers.join(', ')}</p>
            </div>
        `;
        
        return recommendationsHtml;
    }

     // Update progress
     updateProgress() {
         const section = TEST_CONFIG.bigFiveSections[this.currentSection];
         const questions = BIGFIVE_QUESTIONS[section.id];
         
         let totalQuestions = 0;
         let answeredQuestions = 0;
         
         TEST_CONFIG.bigFiveSections.forEach((section, sectionIndex) => {
             const sectionQuestions = BIGFIVE_QUESTIONS[section.id];
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
             `${section.name} (${this.currentSection + 1}/${TEST_CONFIG.bigFiveSections.length})`;
     }

     // Update navigation buttons
     updateNavigationButtons() {
         const section = TEST_CONFIG.bigFiveSections[this.currentSection];
         const questions = BIGFIVE_QUESTIONS[section.id];
         
         // Previous button
         document.getElementById('prev-btn').disabled = 
             (this.currentSection === 0 && this.currentQuestion === 0);
         
         // Next button
         const questionKey = `${this.currentSection}_${this.currentQuestion}`;
         const hasAnswer = this.answers[questionKey] !== undefined;
         document.getElementById('next-btn').disabled = !hasAnswer;
         
         // Show/hide next button text
         const nextBtn = document.getElementById('next-btn');
         if (this.currentQuestion === questions.length - 1) {
             if (this.currentSection === TEST_CONFIG.bigFiveSections.length - 1) {
                 nextBtn.innerHTML = 'પરિણામો જુઓ <i class="fas fa-arrow-right"></i>';
             } else {
                 nextBtn.innerHTML = 'આગળનો વિભાગ <i class="fas fa-arrow-right"></i>';
             }
         } else {
             nextBtn.innerHTML = 'આગળ <i class="fas fa-arrow-right"></i>';
         }
     }

     // Download results
     downloadResults() {
         let resultsText = 'Big Five વ્યક્તિત્વ પરીક્ષણ પરિણામો\n';
         resultsText += '================================\n\n';
         
         resultsText += '📊 તમારા વ્યક્તિત્વ પરિણામો:\n';
         resultsText += '--------------------------------\n';
         
         this.sortedDimensions.forEach((dimension, index) => {
             const dimensionInfo = TEST_CONFIG.bigFiveDimensions[dimension];
             const percentage = this.percentages[dimension];
             const score = this.scores[dimension];
             const rankings = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
             const ranking = rankings[index] || `${index + 1}.`;
             
             resultsText += `${ranking} ${dimensionInfo.name} (${dimensionInfo.english}): ${score}/32 (${percentage}%)\n`;
             resultsText += `   ${dimensionInfo.description}\n`;
             if (dimension === 'N') {
                 resultsText += `   નોંધ: ${dimensionInfo.note}\n`;
             }
             resultsText += `   કારકિર્દી વિકલ્પો: ${dimensionInfo.careers.join(', ')}\n\n`;
         });
         
         // Create and download file
         const blob = new Blob([resultsText], { type: 'text/plain' });
         const url = window.URL.createObjectURL(blob);
         const a = document.createElement('a');
         a.href = url;
         a.download = 'big-five-personality-test-results.txt';
         a.click();
         window.URL.revokeObjectURL(url);
     }

     // Reset test
     resetTest() {
         // Show confirmation dialog
         if (confirm('શું તમે ખરેખર ફરીથી પરીક્ષણ લેવા માંગો છો? તમારા બધા જવાબો ભૂંસી નાખવામાં આવશે.')) {
             this.currentSection = 0;
             this.currentQuestion = 0;
             this.testCompleted = false;
             this.initializeScores();
             this.answers = {};
             
             // Show welcome screen
             this.showScreen('welcome-screen');
         }
     }

     // Validate test completion
     validateTestCompletion() {
         const totalQuestions = TEST_CONFIG.bigFiveSections.length * 8;
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
 }