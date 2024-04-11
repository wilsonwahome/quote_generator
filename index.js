const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

//fetch functions to display the quotes

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- by ${data.author}`;
    });
}
//Event listener for key press
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getQuote();
  }
});
//load page to fetch initial quote
window.addEventListener("load", getQuote);