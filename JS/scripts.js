// Automated response when button is clicked

function saySomething() {
    const name = prompt("What is your name?");
    let color = prompt("What is your favorite color?");

// Automated response based upon user input

if (color === "green") {
    alert("We may be able to make some green together!");
}

else if (color === "white") {
    alert("We may be able to make some paper together!");
}

else if (color === "blue") {
    alert("This is a 'loyal' choice, I may be able to trust you!");
}

else {
    alert("I don't think this is going to workout (i.e. P90x - great for indoor exercise : ) !");
}

}