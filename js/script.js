/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  {
    quote: "Who looks outside dreams, who looks inside, awakes.",
    source: 'Carl yung',
    citation: "BrainyQuotes",
    year:"1895"

  },
  {
    quote: "Happiness is a pointless goal.",
    source: 'Jordan Perterson',
    year:"2018"

  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source: 'Buddah',
    year:"500 BC"

  },
  {
    quote: "Everyone has a plan 'till they get punched in the mouth.",
    source: 'Mike Tyson',
    citation: "bt.com",
    year:"1995"
  },
  { 
    quote: "Love your enimies",
    source: 'Jesus',
    citation: "The Bible",
    
  } 


]


/***
 * Creating a `getRandomQuote` function to get a random number that is limited to the amount of quotes 
***/

function getRandomQuote() {
  let randNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randNumber];
  return randomQuotes;
}


/***
 `printQuote` function will be used to extract a quote every time it's used 
***/
var quoteToPrint;
var html;

function printQuote(){
  quoteToPrint = getRandomQuote();
  html = "";
}

html += `<p class="quote"> ${quoteToPrint.quote} </p>`;
html += `<p class="source"> ${quoteToPrint.source}</p>`;

if (quoteToPrint.citation !== undefined){
  html += `<span class="citation"> ${quoteToPrint.citation} </span>`;
}

if (quoteToPrint.year !== undefined){
  html += `<span class ="year">${quoteToPrint.year}</span>`
}

html = `</p>`

document.getElementById('quote-box').innerHTML = html



let red
let blue
let green
let rbgColor

function colorChange() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rbgColor = "rgb(`${red} ${green} ${blue}`)";


  document.body.style.background = bgColor;
  }

colorChange();

let colorChange = () => refresh = setInterval(printQuote, 10000);
autoChange()


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/



document.getElementById('load-quote').addEventListener("click", printQuote, false);



