const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const nxtBtn = document.querySelector('.next');
const tweet = document.querySelector('.twitter-share-button');
const loader = document.querySelector('.loader');



const getQoute = async () => {
 //loader.style.display = 'none';
   const res = await fetch('https://type.fit/api/quotes');
   const quotes = await res.json();
   loader.style.display = 'none';
   const num = Math.floor(Math.random()*quotes.length)
   const item = quotes[num];
   const quote = item.text;
   const authorName = item.author;
   text.innerText = quote;
   author.innerText = authorName;
   tweet.href = `https://twitter.com/intent/tweet?text=${quote} -- ${authorName}` 
}

/* window.addEventListener('load', function(){
    loader.style.display = 'none';
}); */
nxtBtn.addEventListener('click', getQoute);

getQoute()