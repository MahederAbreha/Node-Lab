const http = require('http');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline.question('How old are you?', age => {
    
        if(age <16){
        console.log("You are not allowed to drive in iowa");
        }else{
            console.log("You’re allowed to get a drivers license in Iowa");
        }
    readline.close();
   })});

