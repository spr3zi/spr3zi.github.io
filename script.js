function randomQuoter() {
    const quoteArray = [["Worse is better: Design for simplicity.","Richard P. Gabriel, 'Lisp: Good News, Bad News, How to Win Big' (1989)"],["Upgrade cost of network complexity: The Internet has smart edges ... and a simple core. Adding an new Internet service is just a matter of distributing an application ... Compare this to voice, where one has to upgrade the entire core.","RFC3439 (2002)"],["Fast, cheap, and reliable: choose two.","Old engineering proverb"]]; 
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const randomItem = quoteArray[randomIndex];
    var dummyQuote = randomItem[0];
    var dummySource = randomItem[1];

    document.querySelector('#quoteText').textContent=dummyQuote;
    document.querySelector('#quoteSource').textContent=dummySource;
    console.log(randomItem);
};

document.addEventListener("DOMContentLoaded", function() {
    randomQuoter();
});