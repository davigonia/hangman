// Main game logic
document.addEventListener('DOMContentLoaded', () => {
    // Game elements
    const versionToggle = document.getElementById('version-toggle');
    const kidsLabel = document.querySelector('.kids-label');
    const adultsLabel = document.querySelector('.adults-label');
    const difficultySelector = document.getElementById('difficulty-selector');
    const gameArea = document.getElementById('game-area');
    const wordContainer = document.getElementById('word-container');
    const hintText = document.getElementById('hint-text');
    const guessesLeft = document.getElementById('guesses-left');
    const wrongLetters = document.getElementById('wrong-letters');
    const hangmanImage = document.getElementById('hangman-image');
    const keyboard = document.getElementById('keyboard');
    const newGameBtn = document.getElementById('new-game-btn');
    const resultModal = document.getElementById('result-modal');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const rewardContainer = document.getElementById('reward-container');
    const playAgainBtn = document.getElementById('play-again-btn');
    const multiplayerBtn = document.getElementById('multiplayer-btn');
    const multiplayerOptions = document.getElementById('multiplayer-options');
    const customWordInput = document.getElementById('custom-word');
    const customHintInput = document.getElementById('custom-hint');
    const startCustomGameBtn = document.getElementById('start-custom-game');
    const gameTitle = document.getElementById('game-title');
    const badgesContainer = document.getElementById('badges-container');

    // Game state
    let currentVersion = 'kids';
    let currentDifficulty = '';
    let currentWord = '';
    let currentHint = '';
    let guessedLetters = [];
    let wrongGuessCount = 0;
    let maxGuesses = 10;
    let gameActive = false;
    let isCustomGame = false;
    let collectedBadges = [];

    // Initialize game
    initGame();

    // Set up event listeners
    versionToggle.addEventListener('change', toggleVersion);
    newGameBtn.addEventListener('click', showDifficultySelector);
    playAgainBtn.addEventListener('click', showDifficultySelector);
    multiplayerBtn.addEventListener('click', toggleMultiplayerOptions);
    startCustomGameBtn.addEventListener('click', startCustomGame);

    // Set up difficulty buttons
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentDifficulty = btn.dataset.difficulty;
            startGame();
        });
    });

    // Initialize game
    function initGame() {
        document.body.classList.add('kids-theme');
        gameTitle.textContent = 'Oh no! Where my cake go?';
        createKeyboard();
        loadCollectedBadges();
        displayCollectedBadges();
    }

    // Toggle between kids and adults versions
    function toggleVersion() {
        const isAdult = versionToggle.checked;
        
        if (isAdult) {
            // Switch to adults version
            document.body.classList.remove('kids-theme');
            document.body.classList.add('adults-theme');
            kidsLabel.classList.remove('active');
            adultsLabel.classList.add('active');
            gameTitle.textContent = 'Oh no! Where my life go?';
            currentVersion = 'adults';
            
            // Show adult badges section, hide kids badges section
            document.getElementById('adults-badges-section').style.display = 'block';
            document.getElementById('kids-badges-section').style.display = 'none';
        } else {
            // Switch to kids version
            document.body.classList.remove('adults-theme');
            document.body.classList.add('kids-theme');
            adultsLabel.classList.remove('active');
            kidsLabel.classList.add('active');
            gameTitle.textContent = 'Oh no! Where my cake go?';
            currentVersion = 'kids';
            
            // Show kids badges section, hide adult badges section
            document.getElementById('kids-badges-section').style.display = 'block';
            document.getElementById('adults-badges-section').style.display = 'none';
        }
        
        // Reset game state
        if (gameActive) {
            resetGame();
        }
        
        // Show difficulty selector
        gameArea.style.display = 'none';
        difficultySelector.style.display = 'block';
    }

    // Show difficulty selector
    function showDifficultySelector() {
        gameArea.style.display = 'none';
        difficultySelector.style.display = 'block';
        resultModal.style.display = 'none';
        multiplayerOptions.style.display = 'none';
        gameActive = false;
        
        // Show version toggle
        document.querySelector('.toggle-container').classList.remove('hidden');
    }

    // Toggle multiplayer options
    function toggleMultiplayerOptions() {
        if (multiplayerOptions.style.display === 'none' || multiplayerOptions.style.display === '') {
            multiplayerOptions.style.display = 'flex';
        } else {
            multiplayerOptions.style.display = 'none';
        }
    }

    // Start custom game with friend's word
    function startCustomGame() {
        const word = customWordInput.value.trim().toLowerCase();
        const hint = customHintInput.value.trim() || 'No hint provided';

        if (word && /^[a-zA-Z]+$/.test(word)) {
            currentWord = word;
            currentHint = hint;
            isCustomGame = true;
            startGamePlay();
            multiplayerOptions.style.display = 'none';
            customWordInput.value = '';
            customHintInput.value = '';
        } else {
            alert('Please enter a valid word (letters only)');
        }
    }

    // Start new game
    function startGame() {
        isCustomGame = false;
        // Get random word based on version and difficulty
        const wordList = wordsDatabase[currentVersion][currentDifficulty];
        const randomIndex = Math.floor(Math.random() * wordList.length);
        const wordData = wordList[randomIndex];
        
        currentWord = wordData.word.toLowerCase();
        currentHint = wordData.hint;
        
        startGamePlay();
    }

    // Start game play with current word
    function startGamePlay() {
        // Reset game state
        guessedLetters = [];
        wrongGuessCount = 0;
        gameActive = true;
        
        // Update UI
        difficultySelector.style.display = 'none';
        gameArea.style.display = 'block';
        guessesLeft.textContent = maxGuesses;
        wrongLetters.textContent = '';
        hintText.textContent = currentHint;
        
        // Hide version toggle
        document.querySelector('.toggle-container').classList.add('hidden');
        
        // Reset keyboard
        resetKeyboard();
        
        // Display word placeholders
        displayWord();
        
        // Update hangman image
        updateHangmanImage();
    }

    // Display word with guessed letters
    function displayWord() {
        wordContainer.innerHTML = '';
        
        // Split the word into separate words if it contains a space
        const words = currentWord.split(' ');
        
        // Create a container for all words
        const wordsWrapper = document.createElement('div');
        wordsWrapper.style.display = 'flex';
        wordsWrapper.style.flexDirection = 'column';
        wordsWrapper.style.gap = '10px';
        wordsWrapper.style.alignItems = 'center';
        wordsWrapper.style.width = '100%';
        wordContainer.appendChild(wordsWrapper);

        // Get container width and calculate sizes
        const containerWidth = wordContainer.offsetWidth;
        const maxWordLength = Math.max(...words.map(word => word.length));
        const minLetterSize = 20; // Minimum letter size
        const maxLetterSize = 45; // Maximum letter size
        const spacing = 2;

        // Calculate initial letter size
        let letterSize = Math.min(
            maxLetterSize,
            Math.floor((containerWidth - (maxWordLength - 1) * spacing) / maxWordLength)
        );

        // If letter size is too small, we'll use scrolling for the word line
        if (letterSize < minLetterSize) {
            letterSize = minLetterSize;
        }

        // Create letter boxes for each word
        words.forEach(word => {
            // Create a container for this word
            const wordLine = document.createElement('div');
            wordLine.style.display = 'flex';
            wordLine.style.gap = `${spacing}px`;
            wordLine.style.justifyContent = 'center';
            wordLine.style.maxWidth = '100%';
            wordLine.style.overflowX = 'auto';
            wordLine.style.overflowY = 'hidden';
            wordLine.style.padding = '5px 0'; // Add padding for scroll space
            wordLine.style.scrollbarWidth = 'none'; // Hide scrollbar in Firefox
            wordLine.style.msOverflowStyle = 'none'; // Hide scrollbar in IE/Edge
            
            // Add CSS to hide scrollbar in WebKit browsers
            const style = document.createElement('style');
            style.textContent = `
                div::-webkit-scrollbar {
                    display: none;
                }
            `;
            document.head.appendChild(style);

            // Create inner container for letter boxes
            const letterContainer = document.createElement('div');
            letterContainer.style.display = 'flex';
            letterContainer.style.gap = `${spacing}px`;
            letterContainer.style.justifyContent = 'center';
            letterContainer.style.minWidth = 'min-content';
            
            // Create letter boxes for this word
            for (const letter of word) {
                const letterBox = document.createElement('div');
                letterBox.classList.add('letter-box');
                letterBox.style.width = `${letterSize}px`;
                letterBox.style.height = `${letterSize}px`;
                letterBox.style.fontSize = `${letterSize * 0.7}px`;
                letterBox.style.flexShrink = '0'; // Prevent letter boxes from shrinking
                
                if (guessedLetters.includes(letter) || !letter.match(/[a-z]/i)) {
                    letterBox.textContent = letter;
                }
                
                letterContainer.appendChild(letterBox);
            }
            
            wordLine.appendChild(letterContainer);
            wordsWrapper.appendChild(wordLine);
        });

        // Add resize observer to handle window resizing
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const containerWidth = entry.contentRect.width;
                const maxWordLength = Math.max(...words.map(word => word.length));
                let newLetterSize = Math.min(
                    maxLetterSize,
                    Math.floor((containerWidth - (maxWordLength - 1) * spacing) / maxWordLength)
                );
                newLetterSize = Math.max(newLetterSize, minLetterSize);

                // Update all letter boxes with new size
                const letterBoxes = entry.target.querySelectorAll('.letter-box');
                letterBoxes.forEach(box => {
                    box.style.width = `${newLetterSize}px`;
                    box.style.height = `${newLetterSize}px`;
                    box.style.fontSize = `${newLetterSize * 0.7}px`;
                });
            }
        });

        resizeObserver.observe(wordContainer);
    }

    // Create keyboard
    function createKeyboard() {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        
        keyboard.innerHTML = '';
        
        for (const letter of letters) {
            const key = document.createElement('button');
            key.classList.add('key');
            key.textContent = letter;
            key.dataset.letter = letter;
            key.addEventListener('click', () => handleGuess(letter));
            
            keyboard.appendChild(key);
        }
        
        // Add keyboard listener for physical keyboard
        document.addEventListener('keydown', (e) => {
            if (gameActive && e.key.match(/^[a-z]$/i)) {
                handleGuess(e.key.toLowerCase());
            }
        });
    }

    // Reset keyboard
    function resetKeyboard() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.classList.remove('used');
            key.disabled = false;
        });
    }

    // Handle letter guess
    function handleGuess(letter) {
        if (!gameActive || guessedLetters.includes(letter)) {
            return;
        }
        
        // Add letter to guessed letters
        guessedLetters.push(letter);
        
        // Disable key
        const key = document.querySelector(`.key[data-letter="${letter}"]`);
        if (key) {
            key.classList.add('used');
            key.disabled = true;
        }
        
        // Check if letter is in word
        if (currentWord.includes(letter)) {
            // Update word display
            displayWord();
            
            // Check if word is complete
            checkWin();
        } else {
            // Wrong guess
            wrongGuessCount++;
            guessesLeft.textContent = maxGuesses - wrongGuessCount;
            
            // Add to wrong letters
            if (wrongLetters.textContent) {
                wrongLetters.textContent += ', ';
            }
            wrongLetters.textContent += letter;
            
            // Update hangman image
            updateHangmanImage();
            
            // Check if game over
            if (wrongGuessCount >= maxGuesses) {
                gameOver(false);
            }
        }
    }

    // Update hangman image based on wrong guesses
    function updateHangmanImage() {
        const imageType = currentVersion === 'kids' ? 'cake' : 'life';
        const imagePath = `images/${currentVersion}/${imageType}_${wrongGuessCount}.svg`;
        
        // Set image with proper sizing
        hangmanImage.style.backgroundImage = `url('${imagePath}')`;
        hangmanImage.style.backgroundSize = 'contain';
        hangmanImage.style.backgroundPosition = 'center';
        hangmanImage.style.backgroundRepeat = 'no-repeat';
    }

    // Check if player has won
    function checkWin() {
        // Get all unique letters from the word, excluding spaces
        const wordLetters = [...new Set(currentWord.replace(/\s/g, '').split(''))];
        const correctGuesses = wordLetters.filter(letter => guessedLetters.includes(letter));
        
        if (correctGuesses.length === wordLetters.length) {
            gameOver(true);
        }
    }

    // Game over
    function gameOver(isWin) {
        gameActive = false;
        
        if (isWin) {
            resultTitle.textContent = 'You Win!';
            
            if (!isCustomGame) {  // Only give rewards for non-custom games
                if (currentVersion === 'kids') {
                    // Show reward for kids based on difficulty level
                    const randomRewardIndex = Math.floor(Math.random() * kidsRewards.length);
                    const randomReward = kidsRewards[randomRewardIndex];
                    
                    // Get the appropriate variant based on difficulty
                    const difficultyLevel = currentDifficulty === 'easy' ? 'easy' : 
                                           (currentDifficulty === 'medium' ? 'medium' : 'hard');
                    
                    const badgeVariant = randomReward.variants[difficultyLevel];
                    const badgeName = badgeVariant.name;
                    const badgeStroke = badgeVariant.stroke;
                    
                    resultMessage.textContent = `Congratulations! You've earned a ${badgeName}!`;
                    
                    // Create a unique ID for this badge variant
                    const badgeId = `${randomReward.name}-${difficultyLevel}`;
                    
                    // Display reward with appropriate stroke color
                    rewardContainer.innerHTML = '';
                    const rewardImg = document.createElement('div');
                    rewardImg.classList.add('reward');
                    
                    // Create SVG with colored stroke dynamically
                    fetch(randomReward.baseImage)
                        .then(response => response.text())
                        .then(svgText => {
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = svgText;
                            const svgElement = tempDiv.querySelector('svg');
                            const circleElement = svgElement.querySelector('circle');
                            if (circleElement) {
                                circleElement.setAttribute('stroke', badgeStroke);
                                circleElement.setAttribute('stroke-width', '4');
                            }
                            const updatedSvg = tempDiv.innerHTML;
                            rewardImg.style.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(updatedSvg)}')`;
                            rewardContainer.appendChild(rewardImg);
                            rewardContainer.style.display = 'flex';
                        })
                        .catch(error => {
                            console.error('Error loading SVG:', error);
                            rewardImg.style.backgroundImage = `url('${randomReward.baseImage}')`;
                            rewardContainer.appendChild(rewardImg);
                            rewardContainer.style.display = 'flex';
                        });
                    
                    // Add badge to collection if not already collected
                    const badgeToAdd = {
                        id: badgeId,
                        name: badgeName,
                        baseImage: randomReward.baseImage,
                        stroke: badgeStroke,
                        difficulty: difficultyLevel
                    };
                    
                    if (!collectedBadges.some(badge => badge.id === badgeId)) {
                        collectedBadges.push(badgeToAdd);
                        saveCollectedBadges();
                        displayCollectedBadges();
                    }
                } else {
                    // Show reward for adults based on difficulty level
                    const randomRewardIndex = Math.floor(Math.random() * adultRewards.length);
                    const randomReward = adultRewards[randomRewardIndex];
                    
                    // Get the appropriate variant based on difficulty
                    const difficultyLevel = currentDifficulty === 'easy' ? 'easy' : 
                                           (currentDifficulty === 'medium' ? 'medium' : 'hard');
                    
                    const badgeVariant = randomReward.variants[difficultyLevel];
                    const badgeName = badgeVariant.name;
                    const badgeStroke = badgeVariant.stroke;
                    
                    // Show a random dark humor quote along with the badge
                    const randomQuote = adultQuotes[Math.floor(Math.random() * adultQuotes.length)];
                    resultMessage.textContent = `${randomQuote} You've earned a ${badgeName}.`;
                    
                    // Create a unique ID for this badge variant
                    const badgeId = `${randomReward.name}-${difficultyLevel}`;
                    
                    // Display reward with appropriate stroke color
                    rewardContainer.innerHTML = '';
                    const rewardImg = document.createElement('div');
                    rewardImg.classList.add('reward');
                    
                    // Create SVG with colored stroke dynamically
                    fetch(randomReward.baseImage)
                        .then(response => response.text())
                        .then(svgText => {
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = svgText;
                            const svgElement = tempDiv.querySelector('svg');
                            const circleElement = svgElement.querySelector('circle');
                            if (circleElement) {
                                circleElement.setAttribute('stroke', badgeStroke);
                                circleElement.setAttribute('stroke-width', '4');
                            }
                            const updatedSvg = tempDiv.innerHTML;
                            rewardImg.style.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(updatedSvg)}')`;
                            rewardContainer.appendChild(rewardImg);
                            rewardContainer.style.display = 'flex';
                        })
                        .catch(error => {
                            console.error('Error loading SVG:', error);
                            rewardImg.style.backgroundImage = `url('${randomReward.baseImage}')`;
                            rewardContainer.appendChild(rewardImg);
                            rewardContainer.style.display = 'flex';
                        });
                    
                    // Add badge to collection if not already collected
                    const badgeToAdd = {
                        id: badgeId,
                        name: badgeName,
                        baseImage: randomReward.baseImage,
                        stroke: badgeStroke,
                        difficulty: difficultyLevel
                    };
                    
                    if (!collectedBadges.some(badge => badge.id === badgeId)) {
                        collectedBadges.push(badgeToAdd);
                        saveCollectedBadges();
                        displayCollectedBadges();
                    }
                }
            } else {
                // Custom game win message
                resultMessage.textContent = "Congratulations! You've won the custom game!";
                rewardContainer.style.display = 'none';
            }
        } else {
            resultTitle.textContent = 'Game Over';
            resultMessage.textContent = `The word was: ${currentWord}`;
            rewardContainer.style.display = 'none';
        }
        
        // Show result modal
        resultModal.style.display = 'flex';
    }
    
    // Load collected badges from localStorage
    function loadCollectedBadges() {
        const savedBadges = localStorage.getItem('hangmanCollectedBadges');
        if (savedBadges) {
            collectedBadges = JSON.parse(savedBadges);
        }
    }
    
    // Save collected badges to localStorage
    function saveCollectedBadges() {
        localStorage.setItem('hangmanCollectedBadges', JSON.stringify(collectedBadges));
    }
    
    // Helper function to create a badge element
    function createBadgeElement(badge) {
        // Create badge wrapper
        const badgeWrapper = document.createElement('div');
        badgeWrapper.classList.add('badge-wrapper');
        
        // Create badge circle container
        const badgeCircle = document.createElement('div');
        badgeCircle.classList.add('badge-circle');
        badgeCircle.style.border = `3px solid ${badge.stroke}`;
        
        // Create badge image/content
        if (badge.baseImage.includes('/adult/')) {
            const badgeImg = document.createElement('img');
            badgeImg.src = badge.baseImage;
            badgeImg.alt = badge.name;
            badgeCircle.appendChild(badgeImg);
        } else {
            const badgeImg = document.createElement('img');
            badgeImg.src = badge.baseImage;
            badgeImg.alt = badge.name;
            badgeCircle.appendChild(badgeImg);
        }
        
        // Create badge title
        const badgeTitle = document.createElement('div');
        badgeTitle.classList.add('badge-title');
        badgeTitle.textContent = badge.name;
        
        // Assemble badge
        badgeWrapper.appendChild(badgeCircle);
        badgeWrapper.appendChild(badgeTitle);
        
        return badgeWrapper;
    }

    // Display collected badges in the badges container
    function displayCollectedBadges() {
        const kidsBadgesContainer = document.getElementById('kids-badges-container');
        const adultsBadgesContainer = document.getElementById('adults-badges-container');
        
        if (!kidsBadgesContainer || !adultsBadgesContainer) return;
        
        // Clear both containers
        kidsBadgesContainer.innerHTML = '';
        adultsBadgesContainer.innerHTML = '';
        
        // Create grid containers
        const kidsGrid = document.createElement('div');
        kidsGrid.classList.add('badges-grid');
        kidsBadgesContainer.appendChild(kidsGrid);
        
        const adultsGrid = document.createElement('div');
        adultsGrid.classList.add('badges-grid');
        adultsBadgesContainer.appendChild(adultsGrid);
        
        // Filter badges by type
        const adultsBadges = collectedBadges.filter(badge => badge.baseImage.includes('/adult/'));
        const kidsBadges = collectedBadges.filter(badge => !badge.baseImage.includes('/adult/'));
        
        // Display kids badges
        if (kidsBadges.length === 0) {
            const noBadgesMsg = document.createElement('div');
            noBadgesMsg.textContent = 'Win kids mode games to collect badges!';
            noBadgesMsg.classList.add('no-badges-message');
            kidsGrid.appendChild(noBadgesMsg);
        } else {
            kidsBadges.forEach(badge => {
                const badgeElement = createBadgeElement(badge);
                kidsGrid.appendChild(badgeElement);
            });
        }
        
        // Display adults badges
        if (adultsBadges.length === 0) {
            const noBadgesMsg = document.createElement('div');
            noBadgesMsg.textContent = 'Win adults mode games to collect badges!';
            noBadgesMsg.classList.add('no-badges-message');
            adultsGrid.appendChild(noBadgesMsg);
        } else {
            adultsBadges.forEach(badge => {
                const badgeElement = createBadgeElement(badge);
                adultsGrid.appendChild(badgeElement);
            });
        }
    }
});
