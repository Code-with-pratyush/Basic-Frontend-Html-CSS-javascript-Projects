const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



let apiQuotes=[];
//show new Qotes
function newQuotes(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author field is blank and replace it with unknown
    if(!quote.author){
        authorText.textContent='Unknown';
    }else{
        authorText.textContent=quote.author;
    }
    if(quote.text.length>50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent=quote.text;
}
// Get quotes from API
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();//converting into json
        newQuotes();
    }catch(err){
        alert()
    }
    //Catch where error occurs
}
//Tweet quote
function tweeQuote(){
    const twitterUrl  = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}
//event listeners
newQuoteBtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click',tweeQuote);
//on load
getQuotes();