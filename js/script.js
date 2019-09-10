/*
Unit 1 - A Random Quote Generator
Aiming for "Exceeds Expectations Requirements" Level.
Possible future improvements:
  1) Ensure random quote is not the current quote.
  2) Ensure random background color is not the current background color.
*/

//GLOBAL DECLARATIONS

var quotes = [
  //Complete Quote 1
  {
    quote: 'For you, the day Bison graced your village was the most important day of your life. But for me, it was Tuesday.',
    source: 'Bison',
    citation: 'Street Fighter (movie)',
    year: 1994,
    tags: 'movie'
  },
  //Complete Quote 2
  {
    quote: 'Hasta la vista, baby.',
    source: 'The Terminator',
    citation: 'Terminator 2: Judgement Day',
    year: 1991,
    tags: 'movie'
  },
  //Quote without a Year 1
  {
    quote: 'You must construct additional Pylons',
    source: 'Protoss VO',
    citation: 'Starcraft',
 //   year: 1998,
    tags: 'game'
  },
  //Quote without a Year 2
  {
    quote: 'That boy ain\'t right.',
    source: 'Hank Hill',
    citation: 'King of the Hill',
 //   year: 1997,
    tags: 'cartoon'
  },
  //Quote without a Citation or a Year
  {
    quote: 'Show me your moves!',
    source: 'Captain Falcon',
//    citation: 'Super Smash Bros.',
//    year: 1999,
    tags: 'game'
  },
];
console.log(quotes);

//FUNCTIONS

//Return random number
function getRandomNumber(ceil) {
  return Math.floor(Math.random() * ceil);
}

//Return random quote from quotes array
function getRandomQuote () {
  var randNumber = getRandomNumber(quotes.length);
  return quotes[randNumber];
}

//Display selected quote and selected background color
function printQuote() {
  console.log(Date.now());  //This is to see if this function is being called consistently.
  //Declarations
  var writeHTML = '';
  var newQuote = getRandomQuote();
  var quote = newQuote.quote;
  var source = newQuote.source;
  var citation = newQuote.citation;
  var year = newQuote.year;
  var tags = newQuote.tags;

  //Write HTML for caption based on tags
  if (tags === 'game') {
    writeHTML += '<div id="game"><center>Quotes for gamers</center></div><br>'
  } else if (tags === 'movie') {
    writeHTML += '<div id="movie"><center>Quotes for cinema buffs</center></div><br>'
  } else if (tags === 'cartoon') {
    writeHTML += '<div id="cartoon"><center>Quotes for those who like animation</center></div><br>'
  }

  //Write HTML for quote
  writeHTML += '<p class="quote">' + quote + '</p><p class="source">' + source;
  if (citation) {
    writeHTML += '<span class="citation">' + citation + '</span>';
  } else {
    console.log('No Citation available for quote.');
  }
  if (year) {
    writeHTML += '<span class="year">' + year + '</span>';
  } else {
    console.log('No Year available for quote.');
  }
  writeHTML += '</p>';

  //Print HTML to page
  randomColor();  //Change background color.
  var outputDiv = document.getElementById('quote-box');
  console.log(writeHTML);  //To console: HTML contents.
  outputDiv.innerHTML = writeHTML;
}
  
//Produce random color
function randomColor() {
  var randomLevel = 'rgb(';  //Create the starting HTML tag for RGB color.
  randomLevel += getRandomNumber(256) + ',';  //Produces a random intensity of Red.
  randomLevel += getRandomNumber(256) + ',';  //Produces a random intensity of Green.
  randomLevel += getRandomNumber(256) + ')';  //Produces a random intensity of Blue.
  document.body.style.backgroundColor = randomLevel;
}

//EXECUTION

printQuote();  //Start with a random quote.
setInterval(printQuote, 20000);  //Call function on a 20sec interval.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);  //Call button functionality.