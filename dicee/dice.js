function rollDice() {
    var dice1 = Math.floor(Math.random() * 6)+1;
    document.getElementsByClassName("dice1")[0].setAttribute("src",`images/dice${dice1}.png`);
    var dice2 = Math.floor(Math.random() * 6)+1;
    document.getElementsByClassName("dice2")[0].setAttribute("src",`images/dice${dice2}.png`);

    if (dice1 < dice2) {
        document.getElementsByClassName("heading")[0].textContent="Player 2 wins";
        
    }
    else if (dice1 == dice2) {
        document.getElementsByClassName("heading")[0].textContent = "Tie";
    }

    else {
        document.getElementsByClassName("heading")[0].textContent="Player 1 wins";
        
    }
    
}
