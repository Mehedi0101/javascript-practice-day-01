var result = 82;

if(result >= 80 && result <=100) console.log("You've got A+")
else if(result >= 70 && result < 80) console.log("You've got A");
else if(result >= 65 && result < 70) console.log("You've got A-");
else if(result >= 60 && result < 65) console.log("You've got B");
else if(result >= 50 && result < 60) console.log("You've got C");
else if(result >= 33 && result < 50) console.log("You've got D");
else if(result >= 0 && result < 33) console.log("Sorry, You've failed");
else console.log("Invalid!");