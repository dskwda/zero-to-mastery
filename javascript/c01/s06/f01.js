/*
Build a Sentence Maker
In this lab, you will create two different stories using a sentence template. You will use variables to store different parts of the story and then log the stories to the console.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should declare the following variables using let:

adjective
noun
verb
place
adjective2
noun2
You should assign the above variables some string values of your choice.

You should declare a firstStory variable.

You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb]."

You should log your first story to the console using the message "First story: [firstStory]".

You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.

You should declare a secondStory variable.

You should create another story using the same template and assign it to the secondStory variable.

You should log your second story to the console using the message "Second story: [secondStory]".

Tests:
Waiting:1. You should declare an adjective variable.
Waiting:2. You should declare a noun variable.
Waiting:3. You should declare a verb variable.
Waiting:4. You should declare a place variable.
Waiting:5. You should declare an adjective2 variable.
Waiting:6. You should declare a noun2 variable.
Waiting:7. You should assign a string value to the adjective variable.
Waiting:8. You should assign a string value to the noun variable.
Waiting:9. You should assign a string value to the verb variable.
Waiting:10. You should assign a string value to the place variable.
Waiting:11. You should assign a string value to the adjective2 variable.
Waiting:12. You should assign a string value to the noun2 variable.
Waiting:13. You should declare a firstStory variable.
Waiting:14. You should use the correct story format for the first story: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].". Pay attention to spaces.
Waiting:15. You should assemble your first story using the variables you declared in the correct order.
Waiting:16. You should log your first story to the console using the message "First story: [firstStory]".
Waiting:17. You should declare a secondStory variable.
Waiting:18. You should reassign the adjective variable for the second story.
Waiting:19. You should reassign the noun variable for the second story.
Waiting:20. You should reassign the verb variable for the second story.
Waiting:21. You should reassign the place variable for the second story.
Waiting:22. You should reassign the adjective2 variable for the second story.
Waiting:23. You should reassign the noun2 variable for the second story.
Waiting:24. You should use the correct story format for the second story: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].". Pay attention to spaces.
Waiting:25. You should assemble your second story using the variables you declared in the correct order.
Waiting:26. You should log your second story to the console using the message "Second story: [secondStory]".
Waiting:27. Your firstStory should not be the same as your secondStory.
*/

let adjective = "mighty";
let noun = "dragon";
let verb = "sneezing";
let place = "magical forest";
let adjective2 = "enormous";
let noun2 = "chocolate";
let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("First story: " + firstStory);

adjective = "mischievous";
noun = "wizard";
verb = "laughing";
place = "haunted castle";
adjective2 = "gigantic";
noun2 = "pizza";
let secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("Second story: " + secondStory);
