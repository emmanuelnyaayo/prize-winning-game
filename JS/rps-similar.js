//Prize Winning Game with Functions
const initGame = ()=> {
    const startPrizeWinningGame =confirm("Shall we play Prize Winning Game?");
    startPrizeWinningGame ? playPrizeWinningGame() : alert("Ok, maybe next time.");
};

//Game flow function
const playPrizeWinningGame = () => {
    while (true) {
        let playerNumberChoice = getPlayerNumberChoice();
        playerNumberChoice = formatPlayerNumberChoice(playerNumberChoice);
        if (playerNumberChoice === "") {
            invalidNumberChoice();
            continue;
        }
        if (!playerNumberChoice) {
            decideNotToPlay();
            break;
        }
        playerNumberChoice = evaluatePlayerNumberChoice(playerNumberChoice);
        if (!playerNumberChoice) {
            invalidNumberChoice();
            continue;
        }
        const computerNumberChoice = getComputerNumberChoice();
        const resultsOfGame = determineIfPlayerIsWinner(playerNumberChoice, computerNumberChoice);
        displayResultOfPrizeWinningGame(resultsOfGame);
        if (askToPlayAgainPrizeWinningGame()) {
            continue;
        } else {
            thanksForPlayingPrizeWinningGame();
            break;
        }

    }
};

const getPlayerNumberChoice = ()=> {
    return prompt ("Please enter a lucky number between 1 and 10."); 
};

const formatPlayerNumberChoice = (playerNumberChoice)=> {
    if (playerNumberChoice || playerNumberChoice === "") {
        return playerNumberChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decideNotToPlayPrizeWinningGame = ()=> {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerNumberChoice = (playerNumberChoice)=> {
    if (
        playerNumberChoice === "one" ||
        playerNumberChoice === "two" ||
        playerNumberChoice === "three" ||
        playerNumberChoice === "four" ||
        playerNumberChoice === "five" ||
        playerNumberChoice === "six" ||
        playerNumberChoice === "seven" ||
        playerNumberChoice === "eight" ||
        playerNumberChoice === "nine" ||
        playerNumberChoice === "ten"
    ) {
        return playerNumberChoice;
    } else {
        return false;
    }
};

const invalidNumberChoice = ()=> {
    alert("You didn't enter a lucky number between 1 and 10.");
};

const getComputerNumberChoice = ()=> {
    const randomComputerNumber = Math.floor(Math.random() * 10);
    const luckyNumberArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    return luckyNumberArray[randomComputerNumber];
};

const determineIfPlayerIsWinner = (playerNumber, computerNumber)=> {
    const winner = 
        playerNumber === computerNumber 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nTie game!`
            : playerNumber === "one" && computerNumber === "two" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "two" && computerNumber === "three" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "three" && computerNumber === "four" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "four" && computerNumber === "five" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "five" && computerNumber === "six" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "six" && computerNumber === "seven" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "seven" && computerNumber === "eight" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "eight" && computerNumber === "nine" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "nine" && computerNumber === "ten" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            : playerNumber === "ten" && computerNumber === "one" 
            ? `playerOne: ${playerNumber}\nComputer: ${computerNumber}\nComputer wins!`
            :`playerOne: ${playerNumber}\nComputer: ${computerNumber}\nplayerOne wins!`;
                
        return winner;
};

const displayResultOfPrizeWinningGame = (resultsOfGame)=> {
    alert(resultsOfGame);
};

const askToPlayAgainPrizeWinningGame = ()=> {
    return confirm("Play again Prize Winning Game?");
};

const thanksForPlayingPrizeWinningGame = ()=> {
    alert ("Ok, thanks for playing Prize Winning Game.");
};

initGame ();

