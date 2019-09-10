/*
Unit 1 - A Random Quote Generator
Aiming for "Exceeds Expectations" Requirements Level.
Possible future improvements:
  1) Ensure random quote is not the current quote.
  2) Ensure random background color is not the current background color.
*/

//GLOBAL DECLARATIONS.

var quotes = [
  //Complete Quote 1.
  {
    /*
    id is a unique identifier for the quote object, not fully used here but could be used by end-user
    and to compare quotes for future improvement #1.
    */
    id: 1,
    quote: 'For you, the day Bison graced your village was the most important day of your life. But for me, it was Tuesday.',
    source: 'Bison',
    citation: 'Street Fighter (movie)',
    year: 1994,
    tags: ['movie']
  },
  //Complete Quote 2.
  {
    id: 2,
    quote: 'You must construct additional Pylons.',
    source: 'Protoss VO',
    citation: 'Starcraft',
    year: 1998,
    tags: ['game']
  },
  //Quote without a Year.
  {
    id: 3,
    quote: 'That boy ain\'t right.',
    source: 'Hank Hill',
    citation: 'King of the Hill',
    tags: ['cartoon']
  },
  //Quote without a Year and multiple tags.
  {
    id: 4,
    quote: 'Cowabunga!',
    source: 'Teenage Mutant Ninja Turtles',
    citation: 'Various',
    tags: ['cartoon', 'movie']
  },
  //Quote without a Citation or a Year.
  {
    id: 5,
    quote: 'Show me your moves!',
    source: 'Captain Falcon',
    tags: ['game']
  },
];
console.log(quotes);

//FUNCTIONS.

//Return random number.
function getRandomNumber(ceil) {
  return Math.floor(Math.random() * ceil);
}

//Return random quote from the entire quotes array.
function getRandomQuote () {
  var randNumber = getRandomNumber(quotes.length);
  return quotes[randNumber];
}

//Display selected quote and selected background color.
function printQuote() {
  //This is to check if this function is being called at a consistent interval.
  console.log(Date.now());
  //Declarations.
  var writeHTML = '';
  var newQuote = getRandomQuote();
  var id = newQuote.id;
  var quote = newQuote.quote;
  var source = newQuote.source;
  var citation = newQuote.citation;
  var year = newQuote.year;
  var tags = newQuote.tags;
  //Selected quote details.
  console.log('Quote ID: ' + id + '.  Number of Quote Tags: ' + tags.length + '.  Quote Text: "' + quote + '"');

  //Write HTML for caption based on tags.
  if (tags.length === 1) {
  writeHTML += '<div id="tags"><center><u>' + tags[0].toUpperCase() + '</u></center></div><br>';
  } else if (tags.length > 1) {
  writeHTML += '<div id="tags"><center><u>' + tags.join(', ').toUpperCase() + '</u></center></div><br>';
  } else {
  console.log('Quote has no tags.');
  }

  //Write HTML for quote.
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

  //Change background color.
  randomColor();
  var outputDiv = document.getElementById('quote-box');
  //Log HTML code on console for debugging.
  console.log(writeHTML);
  //Print HTML to page.
  outputDiv.innerHTML = writeHTML;
}
  
//Produce random color.
function randomColor() {
  //Create the HTML tag for RGB color.
  var randomLevel = 'rgb(';
  randomLevel += getRandomNumber(256) + ',';
  randomLevel += getRandomNumber(256) + ',';
  randomLevel += getRandomNumber(256) + ')';
  document.body.style.backgroundColor = randomLevel;
}

//EXECUTION

//Start with a random quote.
printQuote();
//Call random quote function on a 20sec interval.
setInterval(printQuote, 20000);
//Preexisting button functionality.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);