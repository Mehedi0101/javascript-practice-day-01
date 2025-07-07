var year = 2025;

if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) console.log("Leap Year");
else console.log("Not Leap Year");
