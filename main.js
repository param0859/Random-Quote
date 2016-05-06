$(document).ready(function() {
  document.getElementsByClassName('block')[0].style.visibility='hidden';

  function getQuote(){

    var quotes= ["\"Don't cry because it's over, smile because it happened.\"", "\"Be yourself; everyone else is already taken.\"", "\"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.\""];
    var author = ["-Dr. Seuss", "-Oscar Wilde", "-Martin Luther King Jr"];

    var randomNum = Math.floor(Math.random() * (quotes.length));

    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);

     $('.tweet').click(function(){
    $('.tweet a').attr('href','https://twitter.com/intent/tweet?text='+ encodeURIComponent(randomQuote) + " " +encodeURIComponent(randomAuthor));
  });

  }

  $("#button").on("click", function() {
    getQuote();
    document.getElementsByClassName('block')[0].style.visibility='visible';



  });







});

