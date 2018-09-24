var mainContenent = "<form action = '#' id = 'signInForm" +
    "<input id='pseudo' type='text' value=''>" +
    "<input type='button' value='button' onclick='setUplistEvent()'>"+
    "</form>";

$('main').append(mainContenent);

function signIn(){
    $('main').empty();
}