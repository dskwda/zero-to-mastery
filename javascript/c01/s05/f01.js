/*
Build a JavaScript Trivia Bot
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite programming language, respectively.
You should log "My name is (botName) and I live on (botLocation)." to the console.
You should log "My favorite programming language is (favoriteLanguage)." to the console.
You should use let to create a codingFact variable and assign it a string that is a fun fact about the bot's favorite programming language, using the favoriteLanguage variable.
You should log the codingFact to the console.
You should reassign the codingFact variable to a new fact about the bot's favorite programming language using the favoriteLanguage variable again.
You should log the codingFact to the console again.
You should reassign the codingFact variable to a third fact about the bot's favorite programming language using the favoriteLanguage variable again.
You should log the codingFact to the console a third time.
You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot.
Tests:
Waiting:1. You should log "Hello! I'm your coding fun fact guide!" to the console.
Waiting:2. You should declare a botName variable. Double check for any spelling or casing errors.
Waiting:3. Your botName variable should be a string.
Waiting:4. You should declare a botLocation variable. Double check for any spelling or casing errors.
Waiting:5. Your botLocation variable should be a string.
Waiting:6. You should declare a favoriteLanguage variable. Double check for any spelling or casing errors.
Waiting:7. Your favoriteLanguage variable should be a string.
Waiting:8. You should log to the console "My name is (botName) and I live on (botLocation)." and add the variables to the string.
Waiting:9. You should log to the console "My favorite programming language is (favoriteLanguage)." and add the variable to the string.
Waiting:10. You should use let to declare a new variable codingFact.
Waiting:11. You should give codingFact a value that includes favoriteLanguage.
Waiting:12. You should log codingFact to the console.
Waiting:13. You should assign a new value to codingFact that also contains favoriteLanguage, and log it to the console.
Waiting:14. You should assign a value to codingFact for the third time that also contains favoriteLanguage, and log it to the console.
Waiting:15. You should log to the console "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." and add the values of the variables.
*/

console.log("Hello! I'm your coding func fact guide!");

let botName = "teacherBot";
let botLocation = "the universe";
let favoriteLanguage = "JavaScript";

console.log("My name is " + botName + " and I live on " + botLocation + ".");

console.log("My favorite programming language is " + favoriteLanguage);

console.log("Hello! I'm your coding fun fact guide!");

let botName = "teacherBot";
let botLocation = "the universe";
let favoriteLanguage = "JavaScript";

console.log("My name is " + botName + " and I live on " + botLocation + ".");

console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact = "I like " + favoriteLanguage + " because it is one of the top programming languages.";

console.log(codingFact);

codingFact = "I love " + favoriteLanguage + ".";

console.log(codingFact);

codingFact = favoriteLanguage + " is really a powerful programming language.";

console.log(codingFact);

console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".");
