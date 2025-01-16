const initGame = () => {
    const startPrizeWinningGame = confirm("Shall we play the Prize Winning Game?");
    startPrizeWinningGame ? playPrizeWinningGame() : alert("Ok, maybe next time.");
};

// Game flow function
const playPrizeWinningGame = () => {
    while (true) {
        let playerNumberChoice = getPlayerNumberChoice();
        playerNumberChoice = formatPlayerNumberChoice(playerNumberChoice);

        if (playerNumberChoice === false) {
            decideNotToPlayPrizeWinningGame();
            break;
        }
        
        if (!playerNumberChoice) {
            invalidNumberChoice();
            continue;
        }

        playerNumberChoice = evaluatePlayerNumberChoice(playerNumberChoice);
        if (!playerNumberChoice) {
            invalidNumberChoice();
            continue;
        }

        const { computerNumbers, prizeMap } = getComputerNumbersAndPrizes();
        const result = determinePrize(playerNumberChoice, computerNumbers, prizeMap);

        displayResultOfPrizeWinningGame(result);

        if (askToPlayAgainPrizeWinningGame()) {
            continue;
        } else {
            thanksForPlayingPrizeWinningGame();
            break;
        }
    }
};

const getPlayerNumberChoice = () => {
    return prompt("Please enter a lucky number between 1 and 10 (e.g., '1' or 'one').");
};

const formatPlayerNumberChoice = (playerNumberChoice) => {
    if (playerNumberChoice === null) return false; 

    playerNumberChoice = playerNumberChoice.trim();

    if (/^\d+$/.test(playerNumberChoice)) {
        return playerNumberChoice; 
    }

    return playerNumberChoice.toLowerCase();
};



const evaluatePlayerNumberChoice = (playerNumberChoice) => {
    const wordToDigitMap = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
    };

    const wordNumber = wordToDigitMap[playerNumberChoice];

    if (wordNumber) {
        return wordNumber;
    }

    if (/^\d+$/.test(playerNumberChoice)) {
        const number = parseInt(playerNumberChoice, 10);
        if (number >= 1 && number <= 10) {
            return number; 
        }
    }

    return false; 
};


const decideNotToPlayPrizeWinningGame = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const invalidNumberChoice = () => {
    alert("You didn't enter a valid lucky number between 1 and 10.");
};

const getComputerNumbersAndPrizes = () => {
    const prizes = ["10k", "100k", "1 million"];
    const shuffledPrizes = shuffleArray(prizes);

    const numbers = [];
    while (numbers.length < 3) {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    const prizeMap = {};
    numbers.forEach((num, index) => {
        prizeMap[num] = shuffledPrizes[index];
    });

    return { computerNumbers: numbers, prizeMap };
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const determinePrize = (playerNumber, computerNumbers, prizeMap) => {
    if (computerNumbers.includes(playerNumber)) {
        return `Congratulations! Your lucky number is ${playerNumber} and you won ${prizeMap[playerNumber]}!`;
    } else {
        return `Sorry, your number ${playerNumber} did not match any lucky numbers. Better luck next time!`;
    }
};

const displayResultOfPrizeWinningGame = (result) => {
    alert(result);
};

const askToPlayAgainPrizeWinningGame = () => {
    return confirm("Play the Prize Winning Game again?");
};

const thanksForPlayingPrizeWinningGame = () => {
    alert("Ok, thanks for playing the Prize Winning Game.");
};

initGame();
