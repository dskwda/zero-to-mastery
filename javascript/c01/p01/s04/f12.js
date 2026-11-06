/*
To see the bot's new nickname, you will need to log a new message to the console.

Create a new variable called newNicknameGreeting.

Then use string concatenation to join the string "I love my nickname but I wish people would call me " with the bot variable followed by a period.

Assign the result to the newNicknameGreeting variable.

Then, log the value of newNicknameGreeting to the console.
*/

let bot;
bot = "teacherBot";

let botLocation = "the universe";
console.log("Allow me to introduce myself.");

let botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

let botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

let nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

let newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);
