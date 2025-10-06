console.log("Voting Eligibility Checker");
console.log(" ");   

let age = 18;

if (age >= 18) {

    console.log(`Your age is ${age}`);
    console.log("You are eligible for voting");

} else if (age > 0) {

    console.log(`Your entered age is ${age}`);
    console.log("You are not eligible for voting");

} else {

    console.log("Invalid age entered");

}
