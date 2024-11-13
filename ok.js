function go() {
    var a = document.getElementById("a").value;
    var user, comp;

    comp = Math.floor(Math.random() * 3);  // Generate a random number for the computer's choice

    // Map user input to a number
    if (a == "Rock") {
        user = 0;
    } else if (a == "Paper") {
        user = 1;
    } else if (a == "Scissors") {
        user = 2;
    } else {
        document.getElementById("result").innerHTML = "Invalid input! Please choose Rock, Paper, or Scissors.";
        return;
    }

    // Map computer's random number to its corresponding choice
    var b = (comp == 0) ? "Rock" : (comp == 1) ? "Paper" : "Scissors";

    // Game result logic
    if (user == comp) {
        document.getElementById("result").innerHTML = `You chose ${a}<br>Computer chose ${b}<br>It's a Draw`;
    } else if ((user == 0 && comp == 1) || (user == 1 && comp == 2) || (user == 2 && comp == 0)) {
        document.getElementById("result").innerHTML = `You chose ${a}<br>Computer chose ${b}<br>You Lose`;
    } else {
        document.getElementById("result").innerHTML = `You chose ${a}<br>Computer chose ${b}<br>You WIN`;
    }
}
