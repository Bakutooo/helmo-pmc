var mainContenent = "<form action = '#' id = 'signInForm" +
    "<input id='pseudo' type='text' value=''>" +
    "<input type='button' value='button' onclick='signIn()'>"+
    "</form>";

$('main').append(mainContenent);

function signIn(){
    $('main').empty();
}