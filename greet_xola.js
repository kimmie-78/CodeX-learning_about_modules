// import greet from './greet.js'
// // import the greet module that is in the current folder using CommonJS
// const greet = require('./greet')

// // call the function & print the result on the screen
// console.log(greet('Xola'))


import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js';
import cowsay from 'chalk';
import figlet from 'figlet';

//const styledMessage = chalk.bgGreen.black(greet('Xola'));
//console.log(styledMessage)

// var chalk = require('chalk');
// //import the greet module that is in the current folder
// var greet = require('./greet');

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)

figlet('hello,Kimmie!',function(err,data){
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
})

const cowsay =require("cowsay");
console.log(cowsay.say({
    text: "I'm a mooodule",
    e:'oO',
    T:"U"
}));